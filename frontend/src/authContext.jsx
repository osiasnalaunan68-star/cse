import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from "react";
import {
  signInWithRedirect, signInWithPopup, getRedirectResult, onAuthStateChanged, signOut,
  setPersistence, indexedDBLocalPersistence,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, onSnapshot, runTransaction, getDocFromServer } from "firebase/firestore";
import { auth, db, googleProvider } from "./firebase";
import { setServerClock, persistClock, getAccess, TRIAL_DAYS } from "./access";

const DEVICE_ID_KEY = "cse_deviceId";
const PENDING_SIGNIN_KEY = "cse_pendingSignIn";
const PROFILE_CACHE_KEY = "cse_profileCache_";
const MAX_DEVICES = 2;

function makeId() {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return "dev-" + Date.now() + "-" + Math.random().toString(16).slice(2);
}

function getOrCreateDeviceId() {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = makeId();
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
}

function guessDeviceLabel() {
  const ua = navigator.userAgent || "";
  if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
    return "CSE Reviewer App (Android)";
  }
  if (/Android/i.test(ua)) return "Android · Chrome";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS · Safari";
  return "Desktop · Browser";
}

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsFullName, setNeedsFullName] = useState(false);
  const [deviceLimitReached, setDeviceLimitReached] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(() => localStorage.getItem(PENDING_SIGNIN_KEY) === "1");
  const [authError, setAuthError] = useState(null);
  const [profileError, setProfileError] = useState(null);
  const [signingIn, setSigningIn] = useState(() => localStorage.getItem(PENDING_SIGNIN_KEY) === "1");
  const currentDeviceId = getOrCreateDeviceId();

  const [serverData, setServerData] = useState(null);
  const [clockReady, setClockReady] = useState(false);
  const [tick, setTick] = useState(0);
  const [intentPlanId, setIntentPlanId] = useState(null);
  const initDoneFor = useRef(null);
  const uid = user ? user.uid : null;

  useEffect(() => {
    if (!uid) {
      setServerData(null);
      setClockReady(false);
      initDoneFor.current = null;
      return;
    }
    const ref = doc(db, "users", uid);
    const unsub = onSnapshot(
      ref,
      { includeMetadataChanges: true },
      (snap) => {
        if (!snap.exists()) return;
        setServerData(snap.data());
        if (snap.metadata.fromCache || snap.metadata.hasPendingWrites || initDoneFor.current === uid) return;
        initDoneFor.current = uid;
        (async () => {
          let applied = true;
          try {
            await runTransaction(db, async (tx) => {
              const s = await tx.get(ref);
              if (!s.exists()) { applied = false; return; }
              const d = s.data();
              const upd = { lastSeenAt: serverTimestamp() };
              if (!d.trial) upd.trial = { startedAt: serverTimestamp(), days: TRIAL_DAYS };
              tx.update(ref, upd);
            });
            if (!applied) { initDoneFor.current = null; return; }
            const fresh = await getDocFromServer(ref);
            const ls = fresh.data() && fresh.data().lastSeenAt;
            if (ls && ls.toMillis) setServerClock(ls.toMillis());
          } catch (e) {
            console.warn("trial/clock sync failed:", e);
          }
          setClockReady(true);
        })();
      },
      (err) => {
        console.warn("profile listener error:", err);
        setClockReady(true);
      }
    );
    const fallback = setTimeout(() => setClockReady(true), 6000);
    return () => { unsub(); clearTimeout(fallback); };
  }, [uid]);

  useEffect(() => {
    const id = setInterval(() => { setTick((t) => t + 1); persistClock(); }, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!uid) return;
    const KEY = "cse_seen_ping_" + uid;
    const ping = () => {
      try {
        if (document.visibilityState === "hidden") return;
        const last = Number(localStorage.getItem(KEY)) || 0;
        if (Date.now() - last < 6 * 60 * 60 * 1000) return;
        localStorage.setItem(KEY, String(Date.now()));
        updateDoc(doc(db, "users", uid), { lastSeenAt: serverTimestamp() })
          .catch(() => { try { localStorage.removeItem(KEY); } catch (_) {} });
      } catch (_) {}
    };
    document.addEventListener("visibilitychange", ping);
    window.addEventListener("online", ping);
    window.addEventListener("focus", ping);
    return () => {
      document.removeEventListener("visibilitychange", ping);
      window.removeEventListener("online", ping);
      window.removeEventListener("focus", ping);
    };
  }, [uid]);

  const mergedProfile = useMemo(() => {
    if (!profile || !serverData) return profile;
    const pick = {};
    ["appAccess", "trial", "createdAt", "pendingPurchases", "isAdmin"].forEach((k) => {
      pick[k] = serverData[k];
    });
    return { ...profile, ...pick };
  }, [profile, serverData]);

  const access = getAccess(mergedProfile, { clockReady });

  const syncProfile = useCallback(async (fbUser) => {
    setProfileError(null);
    try {
      const ref = doc(db, "users", fbUser.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        const fresh = {
          email: fbUser.email || "",
          displayName: fbUser.displayName || "",
          photoURL: fbUser.photoURL || "",
          fullName: null,
          createdAt: serverTimestamp(),
          devices: [{ id: currentDeviceId, label: guessDeviceLabel(), lastActive: Date.now() }],
        };
        await setDoc(ref, fresh);
        setProfile(fresh);
        try { localStorage.setItem(PROFILE_CACHE_KEY + fbUser.uid, JSON.stringify(fresh)); } catch (_) {}
        setNeedsFullName(true);
        setDeviceLimitReached(false);
        return;
      }

      const data = snap.data();
      try { localStorage.setItem(PROFILE_CACHE_KEY + fbUser.uid, JSON.stringify(data)); } catch (_) {}
      const devices = data.devices || [];
      const already = devices.find((d) => d.id === currentDeviceId);

      if (already) {
        const updated = devices.map((d) =>
          d.id === currentDeviceId ? { ...d, lastActive: Date.now() } : d
        );
        if (!already.lastActive || Date.now() - already.lastActive > 6 * 60 * 60 * 1000) {
          updateDoc(ref, { devices: updated }).catch((e) => console.warn("device update failed:", e));
        }
        setProfile({ ...data, devices: updated });
        setDeviceLimitReached(false);
      } else if (devices.length < MAX_DEVICES) {
        const updated = [...devices, { id: currentDeviceId, label: guessDeviceLabel(), lastActive: Date.now() }];
        updateDoc(ref, { devices: updated }).catch((e) => console.warn("device update failed:", e));
        setProfile({ ...data, devices: updated });
        setDeviceLimitReached(false);
      } else {
        setProfile(data);
        setDeviceLimitReached(true);
      }
      setNeedsFullName(!data.fullName);
    } catch (err) {
      console.warn("syncProfile failed:", err);
      setProfileError((err && err.code ? err.code : "error") + (err && err.message ? " — " + err.message : ""));
      let restored = false;
      try {
        const cached = localStorage.getItem(PROFILE_CACHE_KEY + fbUser.uid);
        if (cached) { setProfile(JSON.parse(cached)); restored = true; }
      } catch (_) {}
      if (!restored) {
        setProfile({
          email: fbUser.email || "",
          displayName: fbUser.displayName || "",
          photoURL: fbUser.photoURL || "",
          fullName: fbUser.displayName || fbUser.email || "",
          devices: [{ id: currentDeviceId, label: guessDeviceLabel(), lastActive: Date.now() }],
          _localOnly: true,
        });
        setNeedsFullName(false);
      }
      setDeviceLimitReached(false);
    }
  }, [currentDeviceId]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      setUser(fbUser);
      if (fbUser) {
        let hasCached = false;
        try {
          const cached = localStorage.getItem(PROFILE_CACHE_KEY + fbUser.uid);
          if (cached) {
            const parsedCached = JSON.parse(cached);
            setProfile(parsedCached);
            setNeedsFullName(!parsedCached.fullName);
            hasCached = true;
          }
        } catch (_) {}
        if (hasCached) {
          setLoading(false);
          syncProfile(fbUser);
        } else {
          await syncProfile(fbUser);
          setLoading(false);
        }
      } else {
        setProfile(null);
        setProfileError(null);
        setNeedsFullName(false);
        setDeviceLimitReached(false);
        setLoading(false);
      }
    });
    return unsub;
  }, [syncProfile]);

  useEffect(() => {
    const wasPending = localStorage.getItem(PENDING_SIGNIN_KEY) === "1";
    getRedirectResult(auth)
      .catch((err) => {
        console.warn("getRedirectResult error:", err);
        const code = err?.code || "unknown-error";
        const msg = err?.message || "";
        setAuthError(`[${code}] ${msg || "Sign-in could not be completed. Please try again."}`);
      })
      .finally(() => {
        if (wasPending) {
          localStorage.removeItem(PENDING_SIGNIN_KEY);
          setSigningIn(false);
        }
      });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setAuthError(null);
    setSigningIn(true);
    localStorage.setItem(PENDING_SIGNIN_KEY, "1");
    try {
      await setPersistence(auth, indexedDBLocalPersistence);
    } catch (persistErr) {
      console.warn("setPersistence failed:", persistErr);
    }
    try {
      const isLocalDev = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      if (isLocalDev) {
        await signInWithPopup(auth, googleProvider);
        localStorage.removeItem(PENDING_SIGNIN_KEY);
        setSigningIn(false);
      } else {
        await signInWithRedirect(auth, googleProvider);
      }
    } catch (err) {
      console.warn("Google sign-in error:", err);
      const code = err?.code || "unknown-error";
      const msg = err?.message || "";
      setAuthError(`[${code}] ${msg || "Sign-in could not be completed. Please try again."}`);
      setSigningIn(false);
      localStorage.removeItem(PENDING_SIGNIN_KEY);
    }
  }, []);

  const signOutUser = useCallback(() => signOut(auth), []);

  const completeFullName = useCallback(async (fullName) => {
    if (!user) return;
    await updateDoc(doc(db, "users", user.uid), { fullName });
    setProfile((p) => ({ ...p, fullName }));
    setNeedsFullName(false);
  }, [user]);

  const removeDevice = useCallback(async (deviceId) => {
    if (!user || !profile) return;
    const ref = doc(db, "users", user.uid);
    const updated = (profile.devices || []).filter((d) => d.id !== deviceId);
    await updateDoc(ref, { devices: updated });
    setProfile((p) => ({ ...p, devices: updated }));

    if (deviceId === currentDeviceId) {
      await signOut(auth);
      return;
    }
    if (deviceLimitReached) {
      await syncProfile(user);
    }
  }, [user, profile, currentDeviceId, deviceLimitReached, syncProfile]);

  const value = {
    user, profile: mergedProfile, loading, needsFullName, deviceLimitReached, currentDeviceId,
    access, clockReady, tick, intentPlanId, setIntentPlanId,
    overlayOpen, setOverlayOpen, authError, profileError, signingIn,
    signInWithGoogle, signOutUser, completeFullName, removeDevice,
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
