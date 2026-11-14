## File: ./frontend/index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#0f172a" />
    <title>CSE Reviewer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&display=swap" rel="stylesheet" />
    <script>
      (function () {
        try {
          if (localStorage.getItem("cseReviewer_darkMode") === "true") {
            document.documentElement.classList.add("dark");
          }
        } catch (e) {}
      })();
    </script>
    <style>
      html { -webkit-tap-highlight-color: transparent; }
      body { font-family: "Inter", ui-sans-serif, system-ui, sans-serif; }
      .safe-top { padding-top: env(safe-area-inset-top); }
    </style>
  </head>
  <body class="bg-parchment text-navy-900 dark:bg-navy-950 dark:text-parchment-50">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## File: ./frontend/postcss.config.js
```
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## File: ./frontend/src/App.jsx
```
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { IS_DEV } from "./env";
import { useAuth } from "./authContext";
import LibraryBrowser from "./pages/LibraryBrowser";
import QuizBrowser from "./pages/QuizBrowser";
import FeesView from "./pages/FeesView";
import SettingsView from "./pages/SettingsView";
import AccountButton from "./components/AccountButton";

const DevPanel = import.meta.env.DEV ? lazy(() => import("./pages/DevPanel")) : null;

const AdminPanel = lazy(() =>
  import("./pages/AdminPanel").catch(() => ({
    default: () => <p className="p-6 text-center text-sm text-slate-500">Couldn't load the Admin Panel. Check your connection and try again.</p>,
  }))
);

const DARK_KEY = "cseReviewer_darkMode";
const NAV0 = { subjectId: null, topicId: null };

const iconProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const IconBook = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M2 5.5C4 4 7 4 12 6c5-2 8-2 10-.5V19c-2-1.5-5-1.5-10 .5-5-2-8-2-10-.5V5.5Z" />
    <path d="M12 6v13.5" />
  </svg>
);
const IconQuiz = (p) => (
  <svg {...iconProps} {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 11l1.5 1.5L13 10M9 16h6" />
  </svg>
);
const IconTag = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);
const IconSettings = (p) => (
  <svg {...iconProps} {...p}>
    <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);
const IconCrown = (p) => (
  <svg {...iconProps} {...p}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M5 20h14" />
  </svg>
);
const IconTool = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3 2.7-2.7Z" />
  </svg>
);

const BASE_TABS = [
  { id: "library", label: "Library", Icon: IconBook },
  { id: "quiz", label: "Quiz", Icon: IconQuiz },
  { id: "fees", label: "Fees", Icon: IconTag },
  { id: "settings", label: "Settings", Icon: IconSettings },
];

export default function App() {
  const { profile } = useAuth();
  const isAdmin = !!profile?.isAdmin;
  const [tab, setTab] = useState("library");
  const [nav, setNav] = useState({ library: NAV0, quiz: NAV0 });
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === "true"; } catch { return false; }
  });
  const mainRef = useRef(null);

  const TABS = [...BASE_TABS];
  if (isAdmin) TABS.push({ id: "admin", label: "Admin", Icon: IconCrown });
  if (import.meta.env.DEV) TABS.push({ id: "dev", label: "Dev", Icon: IconTool });

  useEffect(() => {
    try { localStorage.setItem(DARK_KEY, String(dark)); } catch {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (tab === "admin" && !isAdmin) setTab("library");
  }, [tab, isAdmin]);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [tab, nav.library.subjectId, nav.library.topicId, nav.quiz.subjectId, nav.quiz.topicId]);

  const navSetter = (which) => (n) => setNav((p) => ({ ...p, [which]: n }));
  const loading = <p className="p-6 text-center text-sm text-slate-400">Loading…</p>;

  return (
    <div className="flex h-[100dvh] flex-col bg-parchment dark:bg-navy-950">
      <header className="safe-top flex-shrink-0 border-b border-parchment-200 bg-parchment-50/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95">
        <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2">
          <h1 className="min-w-0 flex-1 truncate text-base font-bold text-navy-900 dark:text-parchment-50">CSE Reviewer</h1>
          {IS_DEV && (
            <span className="rounded-md bg-purple-100 px-1.5 py-0.5 text-[11px] font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">DEV</span>
          )}
          <AccountButton />
        </div>
      </header>

      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {tab === "library" && <LibraryBrowser nav={nav.library} setNav={navSetter("library")} />}
        {tab === "quiz" && <QuizBrowser nav={nav.quiz} setNav={navSetter("quiz")} />}
        {tab === "fees" && <FeesView />}
        {tab === "settings" && <SettingsView darkMode={dark} setDarkMode={setDark} />}
        {tab === "admin" && isAdmin && (
          <Suspense fallback={loading}>
            <AdminPanel />
          </Suspense>
        )}
        {IS_DEV && DevPanel && tab === "dev" && (
          <Suspense fallback={loading}>
            <DevPanel />
          </Suspense>
        )}
      </main>

      <nav className="flex-shrink-0 border-t border-parchment-200 bg-parchment-50/95 pb-[env(safe-area-inset-bottom)] dark:border-navy-800 dark:bg-navy-900/95">
        <div className="mx-auto flex max-w-2xl">
          {TABS.map(({ id, label, Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                aria-current={active ? "page" : undefined}
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-semibold ${
                  active ? "text-navy-900 dark:text-gold-400" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="max-w-full truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
```

## File: ./frontend/src/access.js
```
export const TRIAL_DAYS = 3;
export const DAY_MS = 24 * 60 * 60 * 1000;

const OFFSET_KEY = "cse_clockOffset";
const MAXSEEN_KEY = "cse_clockMaxSeen";

let offset = 0;
let maxSeen = 0;
try {
  offset = Number(localStorage.getItem(OFFSET_KEY)) || 0;
  maxSeen = Number(localStorage.getItem(MAXSEEN_KEY)) || 0;
} catch (_) {}

export function persistClock() {
  try {
    localStorage.setItem(OFFSET_KEY, String(offset));
    localStorage.setItem(MAXSEEN_KEY, String(maxSeen));
  } catch (_) {}
}

export function setServerClock(serverMs) {
  offset = serverMs - Date.now();
  maxSeen = serverMs;
  persistClock();
}

export function serverNow() {
  const est = Date.now() + offset;
  if (est > maxSeen) maxSeen = est;
  return maxSeen;
}

export function toMs(v) {
  if (v == null) return null;
  if (typeof v === "number") return v;
  if (typeof v.toMillis === "function") return v.toMillis();
  if (typeof v.seconds === "number") return v.seconds * 1000 + Math.floor((v.nanoseconds || 0) / 1e6);
  if (v instanceof Date) return v.getTime();
  return null;
}

export function addMonths(ms, months) {
  const d = new Date(ms);
  d.setMonth(d.getMonth() + months);
  return d.getTime();
}

export function formatTimeLeft(ms) {
  if (!ms || ms <= 0) return "Expired";
  const d = Math.floor(ms / DAY_MS);
  const h = Math.floor((ms % DAY_MS) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (d > 0) return d + "d " + h + "h";
  if (h > 0) return h + "h " + m + "m";
  return Math.max(1, m) + "m";
}

export function formatDateShort(ms) {
  try {
    return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch (_) {
    return "";
  }
}

export function getTrialInfo(profile, now = serverNow()) {
  const t = profile && profile.trial;
  let start = t ? toMs(t.startedAt) : null;
  let days = t ? (Number(t.days) || 0) : 0;
  let fromCreated = false;
  if (start == null) { start = toMs(profile && profile.createdAt); days = TRIAL_DAYS; fromCreated = true; }
  if (start == null) return { exists: false, active: false, endsAt: null, msLeft: 0 };
  const endsAt = start + days * DAY_MS;
  if (fromCreated && endsAt <= now) return { exists: false, active: false, endsAt: null, msLeft: 0 };
  const msLeft = Math.max(0, endsAt - now);
  return { exists: true, active: msLeft > 0, endsAt, msLeft };
}

export function getAppAccessInfo(profile, now = serverNow()) {
  const a = profile && profile.appAccess;
  const exp = toMs(a && a.expiresAt);
  if (!a || exp == null) return { exists: false, active: false, plan: null, expiresAt: null, msLeft: 0 };
  const msLeft = Math.max(0, exp - now);
  return { exists: true, active: msLeft > 0, plan: a.plan || null, expiresAt: exp, msLeft };
}

export function getAccess(profile, opts) {
  const clockReady = !opts || opts.clockReady !== false;
  const now = serverNow();
  if (!profile) return { state: "none", trial: getTrialInfo(null, now), app: getAppAccessInfo(null, now), msLeft: 0 };
  const trial = getTrialInfo(profile, now);
  const app = getAppAccessInfo(profile, now);
  if (profile.isAdmin) return { state: "admin", trial, app, msLeft: 0 };
  if (app.active) return { state: "paid", trial, app, msLeft: app.msLeft };
  if (trial.active) return { state: "trial", trial, app, msLeft: trial.msLeft };
  if (!trial.exists && !clockReady) return { state: "loading", trial, app, msLeft: 0 };
  return { state: "expired", trial, app, msLeft: 0 };
}
```

## File: ./frontend/src/aiApps.js
```
// "Ask AI" helpers. Rename AI_NAME to whatever you want the study guide to be called.
export const AI_NAME = "AI Study Guide";

export const AI_APPS = [
  { id: "meta", label: "Meta AI", icon: "💬", url: "https://m.me/MetaAI" },
  { id: "chatgpt", label: "ChatGPT", icon: "🟢", url: "https://chatgpt.com/" },
  { id: "gemini", label: "Gemini", icon: "✨", url: "https://gemini.google.com/app" },
];

export async function copyPromptAndOpen(prompt, appUrl) {
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    // Clipboard can silently fail on some Android WebViews.
  }
  window.open(appUrl, "_blank", "noopener,noreferrer");
}
```

## File: ./frontend/src/authContext.jsx
```
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
```

## File: ./frontend/src/components/AccessGate.jsx
```
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../authContext";
import App from "../App";
import { TRIAL_DAYS, DAY_MS, formatTimeLeft, formatDateShort, toMs } from "../access";
import { PROMO_PLAN } from "../payments";

const ICONS = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  tag: <><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r="1" fill="currentColor" /></>,
  book: <><path d="M3 5c3-1.4 6-1.4 9 0M12 5c3-1.4 6-1.4 9 0M3 5v13c3-1.4 6-1.4 9 0M12 5v13c3-1.4 6-1.4 9 0" /></>,
  signal: <path d="M4 20h2v-6H4v6Zm6.5 0h2V9h-2v11Zm6.5 0h2V4h-2v16Z" />,
  warn: <><path d="M12 9v4" /><circle cx="12" cy="16.2" r="0.3" fill="currentColor" /><path d="M10.3 3.9 2.5 18a1.8 1.8 0 0 0 1.6 2.7h15.8a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z" /></>,
};
function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {ICONS[name] || null}
    </svg>
  );
}

const pageCls = "safe-top flex min-h-[100dvh] flex-col items-center bg-parchment px-5 py-6 dark:bg-navy-950";
const sealCls = "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-seal text-seal dark:border-gold-400 dark:text-gold-400";
const outlineBtn = "w-full rounded-xl border border-parchment-200 px-4 py-2.5 text-sm font-medium text-slate-500 dark:border-navy-700 dark:text-slate-300";

function Splash({ text }) {
  return (
    <div className="safe-top flex min-h-[100dvh] flex-col items-center justify-center gap-4 bg-parchment px-6 text-center dark:bg-navy-950">
      <span className={sealCls} aria-hidden><Icon name="book" className="h-6 w-6" /></span>
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-parchment-200 border-t-navy-900 dark:border-navy-700 dark:border-t-gold-400" role="status" aria-label="Loading" />
      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{text}</p>
      <p className="max-w-xs rounded-xl bg-parchment-50/80 px-4 py-3 text-left text-xs leading-relaxed text-slate-500 shadow-sm dark:bg-navy-900/70 dark:text-slate-400">
        Tip: if loading takes too long, turn Airplane Mode on, then off, and reopen the app.
      </p>
    </div>
  );
}

// Not signed in: short intro + Google login (starts the free trial).
function GuestWelcome() {
  const { signInWithGoogle, signingIn, authError } = useAuth();
  return (
    <div className="safe-top flex min-h-[100dvh] flex-col bg-parchment dark:bg-navy-950">
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-6">
        <div className="w-full max-w-md rounded-xl border border-parchment-200 bg-parchment-50 p-6 text-center dark:border-navy-700 dark:bg-navy-900">
          <span className={sealCls} aria-hidden><Icon name="book" className="h-6 w-6" /></span>
          <h1 className="mt-3 text-2xl font-bold text-navy-900 dark:text-parchment-50">CSE Reviewer</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Study the Library, practice with the Quiz, and use the AI Study Guide for your Civil Service Exam.
          </p>
          <p className="mt-4 rounded-xl bg-gold-50 px-3 py-2 text-sm font-semibold text-navy-900 dark:bg-navy-800 dark:text-gold-400">
            {TRIAL_DAYS}-day free trial — everything unlocked
          </p>
        </div>
      </main>
      <div className="border-t border-parchment-200 bg-parchment-50/90 p-4 dark:border-navy-800 dark:bg-navy-900/90" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)" }}>
        {authError && <p className="mb-2 text-center text-xs text-red-600 dark:text-red-400">{authError}</p>}
        <button onClick={signInWithGoogle} disabled={signingIn} className="mx-auto flex h-12 w-full max-w-md items-center justify-center gap-1.5 rounded-xl bg-gold-500 text-sm font-bold text-navy-900 shadow-sm active:bg-gold-600 disabled:opacity-50">
          {signingIn ? "Waiting for Google..." : "Login with Google — start your free trial"}
        </button>
      </div>
    </div>
  );
}

// Trial and access are over: only the plan + sign out are shown.
function Paywall() {
  const { user, profile, signOutUser, setOverlayOpen, setIntentPlanId } = useAuth();
  const pending = [...(profile?.pendingPurchases || [])].sort((a, b) => (a.requestedAt || 0) - (b.requestedAt || 0));
  const choose = () => { setIntentPlanId(PROMO_PLAN.id); setOverlayOpen(true); };

  return (
    <div className={pageCls}>
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <span className={sealCls} aria-hidden><Icon name="clock" className="h-6 w-6" /></span>
          <h1 className="mt-2 text-xl font-bold text-navy-900 dark:text-parchment-50">Your access has ended</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Get the All Access promo to continue. {user?.email}</p>
        </div>

        {pending.length > 0 && (
          <div className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 p-3 text-center text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
            <Icon name="clock" className="h-4 w-4 flex-shrink-0" /> Pending payment ({pending[pending.length - 1].referenceCode}). Please wait for confirmation.
          </div>
        )}

        <button onClick={choose} className="w-full rounded-xl border-2 border-gold-500 bg-gold-50 px-4 py-4 text-left active:opacity-80 dark:border-gold-400 dark:bg-navy-900">
          <span className="flex items-center justify-between gap-3">
            <span>
              <span className="block text-base font-extrabold text-navy-900 dark:text-parchment-50">{PROMO_PLAN.label}</span>
              <span className="mt-1 block text-xs text-slate-600 dark:text-slate-300">{PROMO_PLAN.tagline}</span>
              <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400">
                <Icon name="clock" className="h-3.5 w-3.5" /> Valid for {PROMO_PLAN.days} days
              </span>
            </span>
            <span className="text-3xl font-extrabold text-navy-900 dark:text-parchment-50">₱{PROMO_PLAN.price}</span>
          </span>
        </button>

        <p className="text-center text-xs text-slate-400">Pay via GCash · Maya · MariBank. Payments are confirmed manually by the admin.</p>
        <button onClick={signOutUser} className={outlineBtn}>Sign out</button>
      </div>
    </div>
  );
}

// Firestore could not be reached AND nothing is cached: do not show the paywall
// to someone who may have paid. Ask them to reconnect instead.
function CantVerify() {
  const { signOutUser } = useAuth();
  return (
    <div className={pageCls}>
      <div className="w-full max-w-md space-y-4 text-center">
        <span className={sealCls} aria-hidden><Icon name="warn" className="h-6 w-6" /></span>
        <h1 className="text-xl font-bold text-navy-900 dark:text-parchment-50">Can't check your access</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Connect to the internet once so the app can confirm your account, then try again.</p>
        <button onClick={() => window.location.reload()} className="w-full rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white active:bg-navy-800 dark:bg-navy-700">Try again</button>
        <button onClick={signOutUser} className={outlineBtn}>Sign out</button>
      </div>
    </div>
  );
}

// "Your access was updated" toast when the admin approves a payment.
function UnlockToast() {
  const { user, profile } = useAuth();
  const exp = profile && profile.appAccess ? toMs(profile.appAccess.expiresAt) || 0 : 0;
  const seen = useRef(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => { seen.current = null; }, [user ? user.uid : null]);
  useEffect(() => {
    if (!profile) return;
    if (seen.current === null) { seen.current = exp; return; }
    if (exp > seen.current && exp > Date.now()) setMsg("Your access was updated! Valid until " + formatDateShort(exp));
    seen.current = exp;
  }, [exp, profile]);
  useEffect(() => {
    if (!msg) return;
    const id = setTimeout(() => setMsg(null), 9000);
    return () => clearTimeout(id);
  }, [msg]);

  if (!msg) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] flex justify-center px-4" style={{ paddingTop: "calc(env(safe-area-inset-top) + 12px)" }}>
      <button onClick={() => setMsg(null)} className="pointer-events-auto rounded-2xl bg-verdigris px-4 py-3 text-sm font-semibold text-white shadow-xl">{msg}</button>
    </div>
  );
}

// Reminder: paid access < 7 days left, or trial < 1 day left.
function RenewBanner() {
  const { user, access, overlayOpen, setOverlayOpen, setIntentPlanId } = useAuth();
  const [, setTick] = useState(0);
  const uid = user ? user.uid : null;
  const kind = !access ? null
    : access.state === "paid" && access.msLeft < 7 * DAY_MS ? "paid"
    : access.state === "trial" && access.msLeft < DAY_MS ? "trial" : null;
  if (!uid || !kind || overlayOpen) return null;
  const KEY = "cse_renew_dismiss_" + uid;
  let last = 0;
  try { last = Number(localStorage.getItem(KEY)) || 0; } catch (_) {}
  if (Date.now() - last < 12 * 60 * 60 * 1000) return null;
  const open = () => { setIntentPlanId(PROMO_PLAN.id); setOverlayOpen(true); };
  const later = () => { try { localStorage.setItem(KEY, String(Date.now())); } catch (_) {} setTick((n) => n + 1); };
  return (
    <div className="fixed inset-x-3 z-[45] mx-auto max-w-md rounded-xl border border-gold-500 bg-parchment-50 p-3 shadow-lg dark:bg-navy-800" style={{ bottom: "calc(env(safe-area-inset-bottom) + 76px)" }}>
      <p className="flex items-center gap-1.5 text-sm font-semibold text-navy-900 dark:text-parchment-50">
        <Icon name={kind === "paid" ? "clock" : "tag"} className="h-4 w-4 flex-shrink-0 text-seal dark:text-gold-400" />
        {kind === "paid" ? "Your access ends in " : "Your free trial ends in "}{formatTimeLeft(access.msLeft)}
      </p>
      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
        {kind === "paid" ? "Renew early and your remaining days are kept." : "Get All Access and keep studying without interruption."}
      </p>
      <div className="mt-2 flex gap-2">
        <button onClick={open} className="flex-1 rounded-xl bg-navy-900 py-2 text-sm font-semibold text-white active:bg-navy-800 dark:bg-navy-700">
          {kind === "paid" ? "Renew" : "Get All Access"} · ₱{PROMO_PLAN.price}
        </button>
        <button onClick={later} className="rounded-xl border border-parchment-200 px-4 py-2 text-sm font-medium text-slate-500 dark:border-navy-700 dark:text-slate-300">Later</button>
      </div>
    </div>
  );
}

function OfflinePill() {
  const [online, setOnline] = useState(() => typeof navigator === "undefined" || navigator.onLine !== false);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);
  if (online) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 z-[60] flex justify-center" style={{ top: "calc(env(safe-area-inset-top) + 4px)" }}>
      <span className="flex items-center gap-1.5 rounded-full bg-navy-900/90 px-3 py-1 text-[11px] font-semibold text-white shadow dark:bg-parchment-50/90 dark:text-navy-900"><Icon name="signal" className="h-3 w-3" /> Offline</span>
    </div>
  );
}

// Small "time left" pill (trial, or paid with < 7 days). Can be hidden with ✕.
function AccessPill({ access }) {
  const { user, overlayOpen, setOverlayOpen } = useAuth();
  const [, setTick] = useState(0);
  if (overlayOpen) return null;
  let label = null;
  if (access.state === "trial") label = "Free trial · " + formatTimeLeft(access.msLeft) + " left";
  else if (access.state === "paid" && access.msLeft < 7 * DAY_MS) label = "Access · " + formatTimeLeft(access.msLeft) + " left";
  if (!label) return null;
  const KEY = "cse_pill_hidden_" + (user ? user.uid : "x") + "_" + access.state;
  let hidden = false;
  try { hidden = localStorage.getItem(KEY) === "1"; } catch (_) {}
  if (hidden) return null;
  const hide = () => { try { localStorage.setItem(KEY, "1"); } catch (_) {} setTick((n) => n + 1); };
  return (
    <div className="fixed left-3 z-40 flex items-center rounded-full bg-navy-900/90 text-[11px] font-semibold text-white shadow-lg backdrop-blur dark:bg-parchment-50/90 dark:text-navy-900" style={{ bottom: "calc(env(safe-area-inset-bottom) + 68px)" }}>
      <button onClick={() => setOverlayOpen(true)} className="rounded-l-full py-1.5 pl-3 pr-1 active:opacity-70">{label}</button>
      <button onClick={hide} aria-label="Hide time left" className="flex h-8 w-8 items-center justify-center rounded-r-full text-sm opacity-70 active:opacity-100">✕</button>
    </div>
  );
}

function AccessGateInner() {
  const { user, profile, loading, signingIn, needsFullName, deviceLimitReached, access } = useAuth();

  if (loading || signingIn) return <Splash text="Loading…" />;
  if (!user) return <GuestWelcome />;
  // AccountOverlay (in main.jsx) opens by itself for the name / device-limit steps.
  if (!profile || needsFullName || deviceLimitReached) return <Splash text="Finishing your account setup…" />;
  if (access.state === "loading") return <Splash text="Checking your trial…" />;
  if (access.state === "expired") return profile._localOnly ? <CantVerify /> : <Paywall />;

  return (
    <>
      <App />
      <AccessPill access={access} />
    </>
  );
}

export default function AccessGate() {
  return (
    <>
      <AccessGateInner />
      <UnlockToast />
      <RenewBanner />
      <OfflinePill />
    </>
  );
}
```

## File: ./frontend/src/components/AccountButton.jsx
```
import { useState } from "react";
import { useAuth } from "../authContext";

export default function AccountButton() {
  const { profile, setOverlayOpen } = useAuth();
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = !!profile?.photoURL && !imgFailed;
  return (
    <button
      onClick={() => setOverlayOpen(true)}
      aria-label="Open profile"
      className="flex h-10 w-10 flex-shrink-0 touch-manipulation flex-col items-center justify-center gap-0.5 rounded-xl border border-parchment-200 bg-parchment-50 shadow-sm active:bg-parchment dark:border-navy-700 dark:bg-navy-800 dark:active:bg-navy-700"
    >
      {showPhoto ? (
        <img
          src={profile.photoURL}
          alt=""
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-4 w-4 rounded-full object-cover"
        />
      ) : (
        <svg className="h-4 w-4 text-navy-700 dark:text-parchment-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20c1.3-3.6 4.2-5.5 7-5.5s5.7 1.9 7 5.5" />
        </svg>
      )}
      <span className="text-[9px] font-semibold leading-none text-slate-600 dark:text-slate-300">Profile</span>
    </button>
  );
}
```

## File: ./frontend/src/components/AccountOverlay.jsx
```
import { useState, useEffect } from "react";
import { useAuth } from "../authContext";
import { PAYMENT_METHODS, PROMO_PLAN, generateReferenceCode, submitPendingPurchase } from "../payments";
import { TRIAL_DAYS, formatTimeLeft, formatDateShort } from "../access";

const ICONS = {
  warning: <><path d="M12 9v4" /><circle cx="12" cy="16.2" r="0.3" fill="currentColor" /><path d="M10.3 3.9 2.5 18a1.8 1.8 0 0 0 1.6 2.7h15.8a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  tag: <><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r="1" fill="currentColor" /></>,
  crown: <path d="M4 18h16M4 18l-1.3-9 5 3.5L12 6l4.3 6.5 5-3.5L20 18" />,
  check: <path d="M20 6 9 17l-5-5" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  download: <><path d="M12 4v11" /><path d="M7 11l5 5 5-5" /><path d="M5 20h14" /></>,
  back: <path d="M15 6l-6 6 6 6" />,
};
function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {ICONS[name] || null}
    </svg>
  );
}

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "";
  }
}

export default function AccountOverlay() {
  const {
    user, profile, loading, needsFullName, deviceLimitReached, currentDeviceId,
    overlayOpen, setOverlayOpen, authError, signingIn,
    signInWithGoogle, signOutUser, completeFullName, removeDevice,
    profileError, access, intentPlanId, setIntentPlanId,
  } = useAuth();
  const [nameInput, setNameInput] = useState("");

  const [step, setStep] = useState("profile");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [referenceCode, setReferenceCode] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState("");
  const plan = PROMO_PLAN;

  useEffect(() => {
    if (user && (needsFullName || deviceLimitReached) && !overlayOpen) setOverlayOpen(true);
  }, [user, needsFullName, deviceLimitReached, overlayOpen, setOverlayOpen]);

  useEffect(() => {
    if (!overlayOpen) {
      setStep("profile");
      setSelectedMethod(null);
      setReferenceCode(null);
      setSubmitted(false);
      setSubmitting(false);
    }
  }, [overlayOpen]);

  useEffect(() => {
    if (!overlayOpen || !intentPlanId || !user || !profile) return;
    const hit = intentPlanId === plan.id;
    setIntentPlanId(null);
    if (!hit) return;
    setSelectedMethod(null);
    setSubmitted(false);
    setReferenceCode(generateReferenceCode(plan.id));
    setStep("payment-method");
  }, [overlayOpen, intentPlanId, user, profile]);

  if (!overlayOpen) return null;

  const startPurchase = () => {
    setSelectedMethod(null);
    setSubmitted(false);
    setReferenceCode(generateReferenceCode(plan.id));
    setStep("payment-method");
  };

  const copyText = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    } catch (_) {
      window.prompt("Copy this:", text);
    }
  };

  const selectMethod = (methodId) => { setSelectedMethod(methodId); setStep("qr"); };
  const backToProfile = () => { setStep("profile"); setSelectedMethod(null); setSubmitted(false); };
  const backToMethods = () => { setStep("payment-method"); setSelectedMethod(null); setSubmitted(false); };

  const confirmPaid = async () => {
    if (!user || !selectedMethod || !referenceCode) return;
    setSubmitting(true);
    try {
      await submitPendingPurchase(user.uid, {
        planId: plan.id,
        price: plan.price,
        method: selectedMethod,
        referenceCode,
      });
      setSubmitted(true);
    } catch (err) {
      console.warn("submitPendingPurchase failed:", err);
      alert("Could not submit. Please try again:\n" + (err?.message || err));
    } finally {
      setSubmitting(false);
    }
  };

  const activeMethod = PAYMENT_METHODS.find((m) => m.id === selectedMethod) || null;
  const pending = profile?.pendingPurchases || [];

  let appAccessStatus = null;
  if (access?.state === "admin") appAccessStatus = { icon: "crown", text: "Admin" };
  else if (access?.state === "paid") appAccessStatus = { icon: "check", text: `Active until ${formatDateShort(access.app.expiresAt)} (${formatTimeLeft(access.msLeft)} left)` };
  else if (access?.state === "trial") appAccessStatus = { icon: "tag", text: `Free trial: ${formatTimeLeft(access.msLeft)} left` };
  else if (access?.state === "expired" || access?.state === "loading") appAccessStatus = { icon: "clock", text: "Your trial has ended. Get the All Access promo." };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center" onClick={() => setOverlayOpen(false)}>
      <div className="max-h-[85vh] w-full overflow-y-auto rounded-t-xl bg-parchment-50 p-5 dark:bg-slate-800 sm:max-w-sm sm:rounded-xl" onClick={(e) => e.stopPropagation()}>
        {loading && <p className="py-8 text-center text-slate-400">Loading...</p>}

        {!loading && !user && (
          <div className="space-y-4 py-4 text-center">
            <p className="text-lg font-semibold text-navy-900 dark:text-parchment-50">
              Sign in with Google to start your {TRIAL_DAYS}-day free trial
            </p>
            <button onClick={signInWithGoogle} disabled={signingIn} className="w-full rounded-xl bg-navy-900 px-4 py-3 font-medium text-white disabled:opacity-50 dark:bg-navy-700">
              {signingIn ? "Waiting for Google..." : "Sign in with Google"}
            </button>
            {authError && <p className="text-sm text-red-600 dark:text-red-400">{authError}</p>}
            <button onClick={() => setOverlayOpen(false)} className="text-sm text-slate-400">Cancel</button>
          </div>
        )}

        {!loading && user && deviceLimitReached && (
          <div className="space-y-3 py-2">
            <p className="text-lg font-semibold text-navy-900 dark:text-parchment-50">This Google account is already signed in on 2 devices</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Remove one device below to use it here.</p>
            <div className="space-y-2">
              {(profile?.devices || []).map((d) => (
                <div key={d.id} className="flex items-center justify-between rounded-lg bg-parchment p-3 dark:bg-navy-900/40">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{d.label}</p>
                    <p className="text-xs text-slate-400">Last active: {formatDate(d.lastActive)}</p>
                  </div>
                  <button onClick={() => removeDevice(d.id)} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 dark:border-red-800 dark:text-red-400">Remove</button>
                </div>
              ))}
            </div>
            <button onClick={signOutUser} className="w-full text-sm text-slate-400">Sign out</button>
          </div>
        )}

        {!loading && user && !deviceLimitReached && needsFullName && (
          <div className="space-y-3 py-2">
            <p className="text-lg font-semibold text-navy-900 dark:text-parchment-50">What is your full name?</p>
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Full name" className="w-full rounded-xl border border-parchment-200 px-4 py-3 dark:border-navy-700 dark:bg-navy-900 dark:text-slate-100" />
            <button disabled={!nameInput.trim()} onClick={() => completeFullName(nameInput.trim())} className="w-full rounded-xl bg-navy-900 px-4 py-3 font-medium text-white disabled:opacity-40 dark:bg-navy-700">Done</button>
          </div>
        )}

        {!loading && user && !deviceLimitReached && !needsFullName && step === "profile" && (
          <div className="space-y-4 py-2">
            {profileError && (
              <div className="flex items-start gap-1.5 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300">
                <Icon name="warning" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" /> Your account could not be saved to the server. Error: {profileError}
              </div>
            )}
            <div className="flex items-center gap-3">
              {profile?.photoURL && <img src={profile.photoURL} alt="" referrerPolicy="no-referrer" className="h-14 w-14 rounded-full object-cover" />}
              <div>
                <p className="font-semibold text-navy-900 dark:text-parchment-50">{profile?.fullName}</p>
                <p className="text-xs text-slate-400">{profile?.email}</p>
              </div>
            </div>

            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">App Access</p>
              {appAccessStatus && (
                <div className="mb-2 flex items-start gap-1.5 rounded-lg bg-parchment px-3 py-2 text-sm text-slate-600 dark:bg-navy-900/40 dark:text-slate-300">
                  <Icon name={appAccessStatus.icon} className="mt-0.5 h-4 w-4 flex-shrink-0" /> {appAccessStatus.text}
                </div>
              )}
              {pending.length > 0 && (
                <p className="mb-2 flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/20 dark:text-amber-300">
                  <Icon name="clock" className="h-3.5 w-3.5 flex-shrink-0" /> Payment pending ({pending[pending.length - 1].referenceCode}) — waiting for confirmation.
                </p>
              )}
              <button onClick={startPurchase} className="w-full rounded-xl border-2 border-gold-500 bg-navy-900 px-3 py-3 text-center text-white active:bg-navy-800 dark:bg-navy-700">
                <span className="block text-sm font-extrabold">{plan.label} — ₱{plan.price}</span>
                <span className="mt-1 block text-[11px] font-normal opacity-90">{plan.tagline}</span>
                <span className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-gold-400"><Icon name="clock" className="h-3 w-3" /> Valid for {plan.days} days only</span>
              </button>
            </div>

            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">Devices ({(profile?.devices || []).length}/2)</p>
              <div className="space-y-1.5">
                {(profile?.devices || []).map((d) => (
                  <div key={d.id} className="flex items-center justify-between rounded-lg bg-parchment px-3 py-2 dark:bg-navy-900/40">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {d.label} {d.id === currentDeviceId && <span className="text-verdigris dark:text-verdigris-300">(this device)</span>}
                      </p>
                      <p className="text-xs text-slate-400">{formatDate(d.lastActive)}</p>
                    </div>
                    <button onClick={() => removeDevice(d.id)} className="rounded-lg border border-red-200 px-2.5 py-1 text-xs text-red-600 dark:border-red-800 dark:text-red-400">Remove</button>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={signOutUser} className="w-full rounded-xl border border-parchment-200 px-4 py-2.5 text-sm font-medium text-slate-500 dark:border-navy-700 dark:text-slate-300">Sign out</button>
            <button onClick={() => setOverlayOpen(false)} className="w-full text-sm text-slate-400">Close</button>
          </div>
        )}

        {!loading && user && !deviceLimitReached && !needsFullName && step === "payment-method" && (
          <div className="space-y-4 py-2">
            <button onClick={backToProfile} className="flex items-center gap-1 text-sm text-slate-400"><Icon name="back" className="h-3.5 w-3.5" /> Back</button>
            <div className="rounded-xl bg-parchment p-4 text-center dark:bg-navy-900/40">
              <p className="text-sm text-slate-500 dark:text-slate-400">{plan.label}</p>
              <p className="text-2xl font-bold text-navy-900 dark:text-parchment-50">₱{plan.price}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">All Access · everything unlocked · valid for {plan.days} days</p>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Choose a payment method:</p>
            <div className="space-y-2">
              {PAYMENT_METHODS.map((m) => (
                <button key={m.id} onClick={() => selectMethod(m.id)} className="w-full rounded-xl border border-parchment-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 active:bg-parchment dark:border-navy-700 dark:text-slate-200 dark:active:bg-slate-900/40">{m.label}</button>
              ))}
            </div>
          </div>
        )}

        {!loading && user && !deviceLimitReached && !needsFullName && step === "qr" && activeMethod && (
          <div className="space-y-4 py-2">
            {!submitted ? (
              <>
                <button onClick={backToMethods} className="flex items-center gap-1 text-sm text-slate-400"><Icon name="back" className="h-3.5 w-3.5" /> Back</button>
                <div className="rounded-xl border-2 border-red-500 bg-red-50 p-3 text-center dark:border-red-400 dark:bg-red-950/30">
                  <p className="flex items-start gap-1.5 text-left text-sm font-bold leading-snug text-red-700 dark:text-red-300">
                    <Icon name="warning" className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    Ilagay sa note ang iyong email address para makita namin na ikaw talaga ang nag-avail, and wait for our confirmation.
                  </p>
                  {profile?.email && (
                    <div className="mt-1 flex items-center justify-center gap-2">
                      <p className="flex items-center gap-1 break-all text-xs font-semibold text-slate-700 dark:text-slate-200"><Icon name="mail" className="h-3.5 w-3.5 flex-shrink-0" /> {profile.email}</p>
                      <button onClick={() => copyText("email", profile.email)} className="flex-shrink-0 rounded-full border border-slate-300 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 active:bg-slate-100 dark:border-navy-700 dark:text-slate-300">{copied === "email" ? "Copied ✓" : "Copy"}</button>
                    </div>
                  )}
                </div>
                <img src={activeMethod.qr} alt={`${activeMethod.label} QR code`} className="mx-auto w-full max-w-[280px] rounded-xl border border-parchment-200 dark:border-navy-700" />
                <a href={activeMethod.qr} download={activeMethod.id + "-qr.png"} className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-parchment-200 px-4 py-1.5 text-xs font-semibold text-slate-600 active:bg-parchment dark:border-navy-700 dark:text-slate-300"><Icon name="download" className="h-3.5 w-3.5" /> Save QR (or take a screenshot)</a>
                <div className="rounded-xl bg-amber-50 p-3 text-center dark:bg-amber-950/30">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Reference Code — write it in the payment note</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-xl font-bold tracking-widest text-navy-900 dark:text-amber-400">{referenceCode}</p>
                    <button onClick={() => copyText("ref", referenceCode)} className="flex-shrink-0 rounded-full border border-slate-300 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 active:bg-slate-100 dark:border-navy-700 dark:text-slate-300">{copied === "ref" ? "Copied ✓" : "Copy"}</button>
                  </div>
                </div>
                <p className="text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  1. Scan the QR code with your {activeMethod.label} app.<br />
                  2. Pay ₱{plan.price} and write your email address + the reference code in the note/message.<br />
                  3. Tap "I've paid" below.
                </p>
                <div className="sticky -bottom-5 -mx-5 -mb-7 border-t border-parchment-200 bg-parchment-50 px-5 pt-3 dark:border-navy-700 dark:bg-navy-800" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)" }}>
                  <p className="mb-2 text-center text-[11px] text-slate-500 dark:text-slate-400">Tap only after you have sent the payment.</p>
                  <button onClick={confirmPaid} disabled={submitting} className="w-full rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50 dark:bg-navy-700">
                    {submitting ? "Submitting..." : "✅ I've paid"}
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3 py-4 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-seal text-seal dark:border-gold-400 dark:text-gold-400" aria-hidden><Icon name="clock" className="h-6 w-6" /></span>
                <p className="font-semibold text-navy-900 dark:text-parchment-50">Your purchase is pending</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">It will be confirmed manually within a few hours. Reference code: <span className="font-semibold">{referenceCode}</span></p>
                <button onClick={backToProfile} className="w-full rounded-xl border border-parchment-200 px-4 py-2.5 text-sm font-medium text-slate-500 dark:border-navy-700 dark:text-slate-300">Back to Profile</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: ./frontend/src/components/NavParts.jsx
```
// Small shared pieces for the Library + Quiz list screens.

export function Crumb({ onBack, title, subtitle }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <button
        onClick={onBack}
        className="flex-shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 active:bg-parchment-200/60 dark:text-slate-300 dark:active:bg-navy-800"
      >
        &larr; Back
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold text-navy-900 dark:text-parchment-50">{title}</p>
        {subtitle && <p className="truncate text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}

export function ListRow({ left, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg border border-parchment-200 bg-parchment-50 p-4 text-left active:bg-parchment dark:border-navy-700 dark:bg-navy-800 dark:active:bg-navy-700/50"
    >
      {left}
      <div className="min-w-0 flex-1">
        <p className="font-bold leading-snug text-navy-900 dark:text-parchment-50">{title}</p>
        {subtitle && <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>}
      </div>
      <span className="text-xl text-slate-300 dark:text-slate-600" aria-hidden>&rsaquo;</span>
    </button>
  );
}

export function IconBadge({ icon }) {
  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-parchment-200 bg-parchment text-xl dark:border-navy-700 dark:bg-navy-900/40" aria-hidden>
      {icon || "📘"}
    </span>
  );
}

export function EmptyState({ icon, title, hint }) {
  return (
    <div className="mt-10 flex flex-col items-center gap-2 px-6 text-center text-slate-400 dark:text-slate-500">
      <span className="text-4xl" aria-hidden>{icon}</span>
      <p className="text-base font-medium text-slate-500 dark:text-slate-400">{title}</p>
      {hint && <p className="text-sm">{hint}</p>}
    </div>
  );
}
```

## File: ./frontend/src/components/QuizShared.jsx
```
export function answersMatch(a, b) {
  return String(a ?? "").trim().toLowerCase() === String(b ?? "").trim().toLowerCase();
}

export function ProgressCircle({ progress, size = 60, strokeWidth = 6, color = "#22c55e" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle className="text-parchment-200 dark:text-navy-700" strokeWidth={strokeWidth} stroke="currentColor" fill="transparent" r={radius} cx={size / 2} cy={size / 2} />
        <circle stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" fill="transparent" r={radius} cx={size / 2} cy={size / 2} className="transition-all duration-500" style={{ stroke: progress > 0 ? color : "transparent" }} />
      </svg>
      <span className="absolute text-sm font-semibold text-navy-900 dark:text-parchment-50">{Math.round(progress)}%</span>
    </div>
  );
}
```

## File: ./frontend/src/contentStore.js
```
// ONE store for Library + Quiz content. Subjects and topics are NOT hard-coded:
// they are created from the "subject" and "topic" names inside the JSON you import.
//
// Two layers:
//   1) bundled  = every .json in src/data/library/  and  src/data/quiz/
//                 (+ old flat files in src/data/defaultQuizzes/ still work)
//   2) dev      = what you import in the Dev Panel (localStorage, npm run dev only)
//
// Library: same subject+topic imported again  -> topic is REPLACED.
// Quiz:    same subject+topic imported again  -> questions are MERGED by number.
import { IS_DEV } from "./env";

const libraryModules = import.meta.glob("./data/library/*.json", { eager: true });
const quizModules = import.meta.glob("./data/quiz/*.json", { eager: true });
const legacyQuizModules = import.meta.glob("./data/defaultQuizzes/*.json", { eager: true });

const LIB_DEV_KEY = "cseReviewer_dev_library";
const QUIZ_DEV_KEY = "cseReviewer_dev_quiz";

// Old flat quiz files (data/defaultQuizzes/<id>.json) become: subject <id> > "All questions".
export const LEGACY_TOPIC_ID = "_all";
const LEGACY_SUBJECT_LABELS = { cse: "CSE Reviewer" };

const MAX_INDENT = 4;
const META_KEYS = new Set([
  "subject", "topic", "subject_icon", "icon", "subject_order", "topic_order",
  "title", "format", "version", "exportedAt",
]);

const str = (v) => (v == null ? "" : String(v).trim());
const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
const strList = (v) => (Array.isArray(v) ? v.map(str).filter(Boolean) : str(v) ? [str(v)] : []);
const slug = (s) => str(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const safeId = (s) => str(s).replace(/[^\w-]+/g, "_");

function numericSort(a, b) {
  const na = parseFloat(a);
  const nb = parseFloat(b);
  if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

function parseJson(text) {
  const t = String(text || "").trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  if (!t) throw new Error("Paste some JSON first.");
  try { return JSON.parse(t); } catch (e) { throw new Error("Invalid JSON: " + e.message); }
}

// Accepts: one topic object | an array of topics | { subject, topics: [...] }
// | the all-in-one export file { topics: [ {subject, topic, ...}, ... ] }.
// A topic that has no "subject" inherits the one from its parent.
const INHERIT = ["subject", "subject_icon", "subject_order"];
function flattenTopics(data, inherited = {}) {
  if (Array.isArray(data)) return data.flatMap((d) => flattenTopics(d, inherited));
  if (!data || typeof data !== "object") throw new Error("Expected a JSON object or an array of objects.");
  const ctx = { ...inherited };
  for (const k of INHERIT) if (str(data[k]) !== "") ctx[k] = data[k];
  if (Array.isArray(data.topics)) return data.topics.flatMap((t) => flattenTopics(t, ctx));
  const item = { ...data };
  for (const k of INHERIT) if (str(item[k]) === "" && ctx[k] != null) item[k] = ctx[k];
  return [item];
}

function identity(raw) {
  const subject = str(raw.subject);
  const topic = str(raw.topic);
  if (!subject) throw new Error('Missing "subject" (example: "Analytical Ability").');
  if (!topic) throw new Error(`"${subject}": missing "topic" (example: "Logical Reasoning").`);
  const subjectId = slug(subject);
  const topicId = slug(topic);
  if (!subjectId || !topicId) throw new Error(`"${subject} › ${topic}": subject and topic need letters or numbers.`);
  return {
    subject, topic, subjectId, topicId,
    key: `${subjectId}/${topicId}`,
    label: `${subject} › ${topic}`,
    subject_icon: str(raw.subject_icon || raw.icon),
    subject_order: num(raw.subject_order),
    topic_order: num(raw.topic_order),
  };
}

// ── LIBRARY ──────────────────────────────────────────────────────────
function normalizeAi(raw) {
  if (raw == null) return null;
  if (typeof raw === "string") return str(raw) ? { title: "", content: str(raw), prompt: "" } : null;
  if (typeof raw !== "object") return null;
  const ai = { title: str(raw.title), content: str(raw.content), prompt: str(raw.prompt) };
  return ai.title || ai.content || ai.prompt ? ai : null;
}

export function normalizeLibraryTopic(raw) {
  if (!raw || typeof raw !== "object") throw new Error("Each topic must be a JSON object.");
  const id = identity(raw);

  let rawSections = Array.isArray(raw.sections) ? raw.sections : null;
  if (!rawSections && Array.isArray(raw.paragraphs)) rawSections = [{ paragraphs: raw.paragraphs }];
  if (!rawSections && str(raw.text)) {
    rawSections = [{ paragraphs: str(raw.text).split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean) }];
  }
  if (!rawSections || !rawSections.length) {
    throw new Error(`${id.label}: needs "sections" (or a flat "paragraphs" array, or a plain "text").`);
  }

  const usedSections = new Set();
  const sections = rawSections.map((rs, si) => {
    if (!rs || typeof rs !== "object") throw new Error(`${id.label}: section ${si + 1} must be an object.`);
    let sid = safeId(rs.id) || `s${si + 1}`;
    while (usedSections.has(sid)) sid += `_${si}`;
    usedSections.add(sid);

    const usedParas = new Set();
    const rawParas = Array.isArray(rs.paragraphs) ? rs.paragraphs : [];
    const paragraphs = rawParas.map((rp, pi) => {
      const obj = typeof rp === "string" ? { text: rp } : rp;
      if (!obj || typeof obj !== "object") {
        throw new Error(`${id.label}: section ${si + 1}, paragraph ${pi + 1} must be a string or an object.`);
      }
      const text = str(obj.text);
      if (!text) throw new Error(`${id.label}: section ${si + 1}, paragraph ${pi + 1} has no "text".`);
      let pid = safeId(obj.id) || `p${pi + 1}`;
      while (usedParas.has(pid)) pid += `_${pi}`;
      usedParas.add(pid);
      const indent = Math.max(0, Math.min(MAX_INDENT, parseInt(obj.indent, 10) || 0));
      return { id: pid, label: str(obj.label), indent, text, ai: normalizeAi(obj.ai) };
    });
    return { id: sid, heading: str(rs.heading), ai: normalizeAi(rs.ai), paragraphs };
  });

  const paragraphCount = sections.reduce((n, s) => n + s.paragraphs.length, 0);
  if (!paragraphCount) throw new Error(`${id.label}: no paragraphs found.`);
  const aiCount = sections.reduce((n, s) => n + s.paragraphs.filter((p) => p.ai).length, 0);

  return {
    ...id,
    title: str(raw.title),
    keywords: strList(raw.keywords),
    ai: normalizeAi(raw.ai),
    sections, paragraphCount, aiCount,
  };
}

function libraryToExport(n) {
  const o = { subject: n.subject };
  if (n.subject_icon) o.subject_icon = n.subject_icon;
  if (n.subject_order != null) o.subject_order = n.subject_order;
  o.topic = n.topic;
  if (n.topic_order != null) o.topic_order = n.topic_order;
  if (n.title) o.title = n.title;
  if (n.keywords.length) o.keywords = n.keywords;
  if (n.ai) o.ai = n.ai;
  o.sections = n.sections.map((s) => {
    const so = { id: s.id };
    if (s.heading) so.heading = s.heading;
    if (s.ai) so.ai = s.ai;
    so.paragraphs = s.paragraphs.map((p) => {
      const po = { id: p.id };
      if (p.label) po.label = p.label;
      if (p.indent) po.indent = p.indent;
      po.text = p.text;
      if (p.ai) po.ai = p.ai;
      return po;
    });
    return so;
  });
  return o;
}

// ── QUIZ ─────────────────────────────────────────────────────────────
function normalizeChoices(c) {
  const out = {};
  if (Array.isArray(c)) {
    c.forEach((v, i) => { if (str(v)) out[String.fromCharCode(65 + i)] = str(v); });
  } else if (c && typeof c === "object") {
    for (const [k, v] of Object.entries(c)) if (str(v) !== "") out[str(k)] = str(v);
  }
  return Object.keys(out).length ? out : null;
}

// raw = { "1": {...}, "2": {...} }  or  [ {...}, {...} ]  ->  { entries, skipped }
function normalizeQuizItems(raw) {
  const entries = {};
  const skipped = [];
  const pairs = Array.isArray(raw) ? raw.map((v, i) => [String(i + 1), v]) : Object.entries(raw || {});
  for (const [id, item] of pairs) {
    if (String(id).startsWith("_")) continue; // "_batch", "_title" from the old format
    if (!item || typeof item !== "object") {
      if (!META_KEYS.has(id)) skipped.push(id);
      continue;
    }
    const question = str(item.question);
    let correct = str(item.correct);
    if (!question || !correct) { skipped.push(id); continue; }

    const choices = normalizeChoices(item.choices);
    if (choices) {
      // "correct" may be "a", "A" or the full text of the right choice -> turn it into the key.
      const keys = Object.keys(choices);
      const hit =
        keys.find((k) => k === correct) ||
        keys.find((k) => k.toLowerCase() === correct.toLowerCase()) ||
        keys.find((k) => choices[k].toLowerCase() === correct.toLowerCase());
      if (!hit) { skipped.push(id); continue; }
      correct = hit;
    }
    const entry = { ...item, question, correct };
    if (choices) entry.choices = choices; else delete entry.choices;
    const reason = str(item.reason);
    if (reason) entry.reason = reason; else delete entry.reason;
    entries[String(id)] = entry;
  }
  return { entries, skipped };
}

export function normalizeQuizTopic(raw) {
  if (!raw || typeof raw !== "object") throw new Error("Each topic must be a JSON object.");
  const id = identity(raw);
  const q = raw.questions;
  if (!q || typeof q !== "object") throw new Error(`${id.label}: needs a "questions" object (or array).`);
  const { entries, skipped } = normalizeQuizItems(q);
  if (!Object.keys(entries).length) {
    throw new Error(
      skipped.length
        ? `${id.label}: nothing to import — ${skipped.length} item(s) have no "question", no "correct", or a "correct" that matches no choice (IDs: ${skipped.slice(0, 10).join(", ")}${skipped.length > 10 ? "…" : ""}).`
        : `${id.label}: the questions list is empty.`
    );
  }
  return { ...id, entries, skipped };
}

function quizToExport(n) {
  const o = { subject: n.subject };
  if (n.subject_icon) o.subject_icon = n.subject_icon;
  if (n.subject_order != null) o.subject_order = n.subject_order;
  o.topic = n.topic;
  if (n.topic_order != null) o.topic_order = n.topic_order;
  o.questions = {};
  for (const k of Object.keys(n.entries).sort(numericSort)) o.questions[k] = n.entries[k];
  return o;
}

// The OLD flat format: { "_batch": "...", "1": { question, choices, correct }, ... }
function isFlatQuiz(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return false;
  if (data.questions || data.topics) return false;
  return Object.values(data).some((v) => v && typeof v === "object" && "question" in v);
}

// ── layering (bundled + dev) ─────────────────────────────────────────
function addLibrary(map, n) {
  map[n.key] = { ...n, seq: map[n.key]?.seq ?? Object.keys(map).length };
}
function addQuiz(map, n) {
  const prev = map[n.key];
  if (!prev) { map[n.key] = { ...n, seq: Object.keys(map).length }; return; }
  map[n.key] = {
    ...prev, ...n,
    subject_icon: n.subject_icon || prev.subject_icon,
    subject_order: n.subject_order ?? prev.subject_order,
    topic_order: n.topic_order ?? prev.topic_order,
    entries: { ...prev.entries, ...n.entries },
    seq: prev.seq,
  };
}

let bundledCache = null;
function getBundled() {
  if (bundledCache) return bundledCache;
  const lib = {};
  const quiz = {};
  for (const [path, mod] of Object.entries(libraryModules)) {
    try {
      for (const raw of flattenTopics(mod.default ?? mod)) {
        try { addLibrary(lib, normalizeLibraryTopic(raw)); }
        catch (e) { console.warn(`[library] skipped a topic in ${path}: ${e.message}`); }
      }
    } catch (e) { console.warn(`[library] skipped ${path}: ${e.message}`); }
  }
  for (const [path, mod] of Object.entries(quizModules)) {
    try {
      for (const raw of flattenTopics(mod.default ?? mod)) {
        try { addQuiz(quiz, normalizeQuizTopic(raw)); }
        catch (e) { console.warn(`[quiz] skipped a topic in ${path}: ${e.message}`); }
      }
    } catch (e) { console.warn(`[quiz] skipped ${path}: ${e.message}`); }
  }
  for (const [path, mod] of Object.entries(legacyQuizModules)) {
    const sid = slug(path.split("/").pop().replace(/\.json$/i, ""));
    if (!sid) continue;
    const { entries } = normalizeQuizItems(mod.default ?? mod);
    if (!Object.keys(entries).length) continue;
    addQuiz(quiz, {
      key: `${sid}/${LEGACY_TOPIC_ID}`, subjectId: sid, topicId: LEGACY_TOPIC_ID,
      subject: LEGACY_SUBJECT_LABELS[sid] || sid.toUpperCase(), topic: "All questions",
      subject_icon: "", subject_order: null, topic_order: null, entries,
    });
  }
  bundledCache = { lib, quiz };
  return bundledCache;
}

function readDevText(key) {
  if (!IS_DEV) return "{}";
  try { return localStorage.getItem(key) || "{}"; } catch { return "{}"; }
}
function readDevObj(key) {
  try { const v = JSON.parse(readDevText(key)); return v && typeof v === "object" ? v : {}; } catch { return {}; }
}
function writeDevObj(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

let libDev = { text: null, value: {} };
function getDevLibrary() {
  const text = readDevText(LIB_DEV_KEY);
  if (libDev.text === text) return libDev.value;
  const out = {};
  for (const raw of Object.values(readDevObj(LIB_DEV_KEY))) {
    try { addLibrary(out, normalizeLibraryTopic(raw)); } catch { /* ignore broken entries */ }
  }
  libDev = { text, value: out };
  return out;
}
let quizDev = { text: null, value: {} };
function getDevQuiz() {
  const text = readDevText(QUIZ_DEV_KEY);
  if (quizDev.text === text) return quizDev.value;
  const out = {};
  for (const raw of Object.values(readDevObj(QUIZ_DEV_KEY))) {
    try { addQuiz(out, normalizeQuizTopic(raw)); } catch { /* ignore broken entries */ }
  }
  quizDev = { text, value: out };
  return out;
}

let libAll = { text: null, value: null };
function getLibraryAll() {
  const text = readDevText(LIB_DEV_KEY);
  if (libAll.text === text && libAll.value) return libAll.value;
  const all = {};
  for (const n of Object.values(getBundled().lib)) addLibrary(all, n);
  for (const n of Object.values(getDevLibrary())) addLibrary(all, n); // dev replaces bundled
  libAll = { text, value: all };
  return all;
}
let quizAll = { text: null, value: null };
function getQuizAll() {
  const text = readDevText(QUIZ_DEV_KEY);
  if (quizAll.text === text && quizAll.value) return quizAll.value;
  const all = {};
  for (const n of Object.values(getBundled().quiz)) addQuiz(all, n);
  for (const n of Object.values(getDevQuiz())) addQuiz(all, n); // dev merges into bundled
  quizAll = { text, value: all };
  return all;
}

// ── public read API ──────────────────────────────────────────────────
function buildSubjects(map, summarize) {
  const subjects = new Map();
  for (const n of Object.values(map)) {
    let s = subjects.get(n.subjectId);
    if (!s) {
      s = { id: n.subjectId, label: n.subject, icon: n.subject_icon, order: n.subject_order, seq: n.seq, topics: [] };
      subjects.set(n.subjectId, s);
    } else {
      if (!s.icon && n.subject_icon) s.icon = n.subject_icon;
      if (s.order == null && n.subject_order != null) s.order = n.subject_order;
    }
    s.topics.push({ ...summarize(n), id: n.topicId, label: n.topic, order: n.topic_order, seq: n.seq });
  }
  const cmp = (a, b) => (a.order ?? 1e9) - (b.order ?? 1e9) || a.seq - b.seq;
  return [...subjects.values()].sort(cmp).map((s) => ({ ...s, topics: s.topics.sort(cmp) }));
}

export function listLibrarySubjects() {
  return buildSubjects(getLibraryAll(), (n) => ({ paragraphCount: n.paragraphCount, aiCount: n.aiCount }));
}
export function getLibraryTopic(subjectId, topicId) {
  return getLibraryAll()[`${subjectId}/${topicId}`] || null;
}
export function listQuizSubjects() {
  return buildSubjects(getQuizAll(), (n) => ({ total: Object.keys(n.entries).length }));
}
export function getQuizTopic(subjectId, topicId) {
  return getQuizAll()[`${subjectId}/${topicId}`] || null;
}

// ── dev-only: import / list / delete / export ────────────────────────
function assertDev() {
  if (!IS_DEV) throw new Error("Import is only available in npm run dev.");
}

export function importLibraryJson(text) {
  assertDev();
  const items = flattenTopics(parseJson(text));
  if (!items.length) throw new Error("The JSON is empty.");
  const normalized = items.map(normalizeLibraryTopic); // throws before anything is saved
  const known = new Set(listLibrarySubjects().map((s) => s.id));
  const store = readDevObj(LIB_DEV_KEY);
  for (const n of normalized) store[n.key] = libraryToExport(n);
  writeDevObj(LIB_DEV_KEY, store);
  return normalized.map((n) => ({
    subject: n.subject, topic: n.topic, newSubject: !known.has(n.subjectId),
    paragraphCount: n.paragraphCount, aiCount: n.aiCount,
  }));
}

// defaults = { subject, topic } typed in the Dev Panel; used only when the JSON has none
// (this is how you import the OLD flat format: { "1": {...}, "2": {...} }).
export function importQuizJson(text, defaults = {}) {
  assertDev();
  const data = parseJson(text);
  const dSubject = str(defaults.subject);
  const dTopic = str(defaults.topic);
  let items;
  if (isFlatQuiz(data)) {
    items = [{ ...data, subject: str(data.subject) || dSubject, topic: str(data.topic) || dTopic, questions: data }];
  } else {
    items = flattenTopics(data).map((it) => ({
      ...it, subject: str(it.subject) || dSubject, topic: str(it.topic) || dTopic,
    }));
  }
  if (!items.length) throw new Error("The JSON is empty.");
  const normalized = items.map(normalizeQuizTopic); // throws before anything is saved
  const known = new Set(listQuizSubjects().map((s) => s.id));
  const store = readDevObj(QUIZ_DEV_KEY);
  const result = [];
  for (const n of normalized) {
    const prev = store[n.key];
    const merged = { ...(prev?.questions || {}), ...n.entries };
    store[n.key] = quizToExport({ ...n, entries: merged });
    result.push({
      subject: n.subject, topic: n.topic, newSubject: !known.has(n.subjectId),
      added: Object.keys(n.entries).length, total: Object.keys(merged).length, skipped: n.skipped,
    });
  }
  writeDevObj(QUIZ_DEV_KEY, store);
  return result;
}

export function getDevLibraryList() {
  return Object.values(getDevLibrary()).map((n) => ({
    key: n.key, subject: n.subject, topic: n.topic, paragraphCount: n.paragraphCount, aiCount: n.aiCount,
  }));
}
export function getDevQuizList() {
  return Object.values(getDevQuiz()).map((n) => ({
    key: n.key, subject: n.subject, topic: n.topic, total: Object.keys(n.entries).length,
  }));
}
export function getDevQuizEntries(key) {
  const n = getDevQuiz()[key];
  if (!n) return [];
  return Object.keys(n.entries).sort(numericSort).map((id) => ({ id, ...n.entries[id] }));
}

export function deleteDevLibraryTopic(key) {
  const s = readDevObj(LIB_DEV_KEY); delete s[key]; writeDevObj(LIB_DEV_KEY, s);
}
export function deleteDevQuizTopic(key) {
  const s = readDevObj(QUIZ_DEV_KEY); delete s[key]; writeDevObj(QUIZ_DEV_KEY, s);
}
export function clearDevLibrary() { if (IS_DEV) localStorage.removeItem(LIB_DEV_KEY); }
export function clearDevQuiz() { if (IS_DEV) localStorage.removeItem(QUIZ_DEV_KEY); }

function wrap(format, topics) {
  return JSON.stringify({ format, version: 1, exportedAt: new Date().toISOString(), topics }, null, 2);
}
// ONE file with everything. includeBundled=false -> only what you imported in the Dev Panel.
export function exportLibraryJson(includeBundled = false) {
  const src = includeBundled ? getLibraryAll() : getDevLibrary();
  return wrap("cse-library", Object.values(src).map(libraryToExport));
}
export function exportQuizJson(includeBundled = false) {
  const src = includeBundled ? getQuizAll() : getDevQuiz();
  return wrap("cse-quiz", Object.values(src).map(quizToExport));
}
export function exportLibraryTopicJson(key) {
  const n = getDevLibrary()[key];
  return n ? JSON.stringify(libraryToExport(n), null, 2) : "";
}
export function exportQuizTopicJson(key) {
  const n = getDevQuiz()[key];
  return n ? JSON.stringify(quizToExport(n), null, 2) : "";
}
```

## File: ./frontend/src/devPrompts.js
```
// Dev Panel only (never shipped): AI prompts + JSON templates for imports.

export const LIBRARY_TEMPLATE = JSON.stringify(
  {
    subject: "Analytical Ability",
    subject_icon: "🧠",
    topic: "Logical Reasoning",
    keywords: ["syllogism", "deduction"],
    ai: {
      title: "Overview ng Logical Reasoning",
      content: "📖 Kahulugan\n[Tagalog explanation here]\n\n💡 Simpleng Paliwanag\n[Tagalog explanation here]",
      prompt: "Explain this topic simply, with examples and common Civil Service Exam traps.",
    },
    sections: [
      {
        id: "s1",
        heading: "Syllogism",
        paragraphs: [
          { id: "p1", label: "1.", text: "[Paragraph text, copied exactly from your source.]" },
          {
            id: "p2",
            label: "2.",
            text: "[Another paragraph.]",
            ai: {
              title: "Syllogism",
              content: "📖 Kahulugan\n[Tagalog]\n\n⚠️ Dapat Tandaan\n[Tagalog]",
              prompt: "Explain this step by step with an example.",
            },
          },
          { id: "p3", label: "a.", indent: 1, text: "[Sub-item, nested one level.]" },
        ],
      },
    ],
  },
  null,
  2
);

export const QUIZ_TEMPLATE = JSON.stringify(
  {
    subject: "Verbal Ability",
    subject_icon: "📖",
    topic: "Grammatical Categories",
    questions: {
      "1": {
        question: "[Question text]",
        choices: { A: "[choice]", B: "[choice]", C: "[choice]", D: "[choice]" },
        correct: "A",
        reason: "[Short explanation why A is correct]",
      },
      "2": {
        question: "[Fill-in question — no choices]",
        correct: "[typed answer]",
        reason: "[Short explanation]",
      },
    },
  },
  null,
  2
);

export const LIBRARY_PROMPT = String.raw`🧠 LIBRARY → STUDY-JSON GENERATION PROMPT
You are an expert Philippine Civil Service Exam (CSE) reviewer, tutor, and content writer for a study app.

Convert the SOURCE TEXT at the very bottom into ONE valid JSON object the app can import directly. The English study text and the Tagalog AI explanations must come out TOGETHER in the same JSON.

OUTPUT RULES
- Output ONLY the JSON. No markdown fences, no commentary before or after.
- Copy the English source text VERBATIM (same wording, numbering, punctuation). Never paraphrase, shorten, or reorder it. Never invent facts not in the source.
- Keep the source structure: one entry per paragraph / numbered item / bullet, in the original order.
- "label" = the numbering exactly as printed (e.g. "1.", "a.", "(i)"). Do NOT repeat the label inside "text".
- "indent" = nesting depth 0–4 (0 = main, 1 = sub-item, 2 = sub-sub-item).
- Group paragraphs under the source's own headings using "sections". If there are no headings, use one section without "heading".
- Never put real line breaks inside a JSON string — use the two characters backslash-n.
- Top level must be: { "subject": "Verbal Ability", "subject_icon": "📖", "topics": [ ...one or more topic objects... ] }

EVERY PARAGRAPH MUST HAVE AN "ai" OBJECT — THIS IS REQUIRED
- Do NOT skip any paragraph. Each paragraph object must include an "ai" with { "title", "content", "prompt" }.
- Also give each section an "ai" (short, about the whole section), and the topic an overview "ai".
- Very short / label-only / boilerplate paragraphs (e.g. "Answer:", "Example:") → use a mini Q&A in "content" (1–2 exchanges only):

    Tanong: [simple question a student would naturally ask]
    Sagot: [1–2 sentences, plain Tagalog, like a classmate explaining]

- Substantive paragraphs → short format in "content":
    📖 Kahulugan
    ...
    💡 Simpleng Paliwanag
    ...
    ⚠️ Dapat Tandaan
    ...
    (📦 Halimbawa only if really needed)

- Topic-level overview "ai" → full format in this order:
    📖 Kahulugan · 🔍 Breakdown · 💡 Simpleng Paliwanag · 📦 Halimbawa · ⭐ Bakit Mahalaga Ito? · ⚠️ Dapat Tandaan · 🎯 Exam Tip

AI CONTENT LANGUAGE RULES
- Language: simple, conversational Tagalog, like a mentor teaching a student. Keep technical terms in English. Do not sound robotic. Never invent facts, rules, or numbers not in the source.
- "title": short Tagalog label. "content": the Tagalog guide with the emoji headings above, separated by blank lines (use backslash-n backslash-n).
- "prompt": a ready-to-send prompt for an external AI asking it to explain THAT specific paragraph simply, with examples and common CSE traps. Do NOT paste the source text inside it — the app adds it automatically.

SHAPE EXAMPLE (structure only — every paragraph has ai)
{"subject":"Verbal Ability","subject_icon":"📖","topics":[{"topic":"...","topic_order":1,"keywords":["..."],"ai":{"title":"...","content":"...","prompt":"..."},"sections":[{"id":"s1","heading":"...","ai":{"title":"...","content":"...","prompt":"..."},"paragraphs":[{"id":"p1","label":"1.","text":"...","ai":{"title":"...","content":"...","prompt":"..."}},{"id":"p2","label":"Answer:","indent":2,"text":"...","ai":{"title":"...","content":"Tanong: ...\nSagot: ...","prompt":"..."}}]}]}]}

SOURCE TEXT (the only source of truth):
`;

export const QUIZ_PROMPT = String.raw`🧠 QUIZ → JSON GENERATION PROMPT
You are an expert Philippine Civil Service Exam (CSE) question writer. Write multiple-choice questions for the SUBJECT and TOPIC given at the bottom and output ONE valid JSON object the app can import directly.

OUTPUT RULES
- Output ONLY the JSON. No markdown fences, no commentary before or after.
- "subject" and "topic": use EXACTLY the names given at the bottom (same spelling every time, so everything lands in the same place). A brand-new subject/topic is created automatically on import.
- "questions" is an object whose keys are the question numbers "1", "2", "3", ... (continue from START NUMBER).
- Each question: { "question": "...", "choices": { "A": "...", "B": "...", "C": "...", "D": "..." }, "correct": "A", "reason": "..." }
- Exactly ONE correct answer. "correct" must be one of the choice letters.
- Fill-in-the-blank question? Omit "choices" and put the answer text in "correct".
- "reason": 1–3 sentences in simple Tagalog explaining why the answer is correct (and why the tempting wrong choices fail). Keep technical terms in English.
- Exam-level difficulty. No trick wording, no duplicate questions, and spread the correct letters evenly across A–D.
- Never put real line breaks inside a JSON string (use the two characters backslash-n).

SHAPE EXAMPLE (structure only)
{"subject":"Verbal Ability","subject_icon":"📖","topic":"Grammatical Categories","questions":{"1":{"question":"...","choices":{"A":"...","B":"...","C":"...","D":"..."},"correct":"A","reason":"..."}}}

SUBJECT: [replace me]
TOPIC: [replace me]
NUMBER OF QUESTIONS: [replace me]
START NUMBER: 1
SOURCE (optional — if empty, write from your own knowledge):
`;
```

## File: ./frontend/src/devUtils.js
```
export function downloadText(name, text, type = "application/json;charset=utf-8") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const dateStamp = () => new Date().toISOString().slice(0, 10);

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
```

## File: ./frontend/src/env.js
```
// true only when running `npm run dev`. Vite turns this into a literal `false`
// in production builds, so anything behind IS_DEV never ships to real users.
export const IS_DEV = import.meta.env.DEV;
```

## File: ./frontend/src/firebase.js
```
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwk9cwnbizKi-IM-dvwd8C69wPaafWUR4",
  authDomain: "cse-reviewer-ph-fcfbc.firebaseapp.com",
  projectId: "civil-service-564fe",
  storageBucket: "civil-service-564fe.firebasestorage.app",
  messagingSenderId: "418319058791",
  appId: "1:418319058791:web:ce1aa06ab63d71663911c2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

enableIndexedDbPersistence(db).catch((err) => {
  console.warn("Firestore offline persistence not enabled:", err.code || err);
});
```

## File: ./frontend/src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  ::selection { background: rgba(201, 162, 39, 0.28); }
  :focus-visible { outline: 2px solid #c9a227; outline-offset: 2px; border-radius: 8px; }
  button { -webkit-tap-highlight-color: transparent; touch-action: manipulation; transition: transform 120ms ease, background-color 150ms ease; }
  button:not(:disabled):active { transform: scale(0.975); }
}
```

## File: ./frontend/src/main.jsx
```
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AccessGate from "./components/AccessGate";
import { AuthProvider } from "./authContext";
import AccountOverlay from "./components/AccountOverlay";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  componentDidCatch(e, info) { console.error(e, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, background: "#1e1e1e", color: "#ff6b6b", fontFamily: "monospace", whiteSpace: "pre-wrap", minHeight: "100vh" }}>
          <h1>App Error</h1>
          <pre>{this.state.error.toString()}</pre>
          <button onClick={() => window.location.reload()} style={{ marginTop: 16, padding: "10px 16px" }}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <AccessGate />
        <AccountOverlay />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
```

## File: ./frontend/src/pages/AdminOverview.jsx
```
import { useMemo, useState } from "react";
import { getAccess, serverNow, toMs, DAY_MS } from "../access";

const APP_NAME = "CSE Reviewer";
const CHART_DAYS = 14;

const STATUS_ROWS = [
  { key: "paid", label: "Paid access", light: "bg-gold-500", dark: "dark:bg-gold-400" },
  { key: "trial", label: "On free trial", light: "bg-navy-700", dark: "dark:bg-sky-400" },
  { key: "expired", label: "Trial or access ended", light: "bg-slate-400", dark: "dark:bg-slate-500" },
  { key: "none", label: "No trial yet", light: "bg-slate-300", dark: "dark:bg-slate-600" },
];

export function maskEmail(email) {
  if (!email || email.indexOf("@") < 1) return email || "";
  const at = email.lastIndexOf("@");
  const local = email.slice(0, at);
  const domain = email.slice(at);
  if (local.length <= 4) return local.slice(0, 1) + "****" + domain;
  return local.slice(0, 2) + "****" + local.slice(-2) + domain;
}

function accessKey(u) {
  const a = getAccess(u);
  if (a.state === "expired" && !a.trial.exists) return "none";
  return a.state;
}

function dayKey(d) {
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function shortDate(ms) {
  try {
    return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch (_) {
    return "";
  }
}

function ago(ms, now) {
  if (!ms) return "never";
  const m = Math.floor((now - ms) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return m + "m ago";
  const h = Math.floor(m / 60);
  if (h < 24) return h + "h ago";
  return Math.floor(h / 24) + "d ago";
}

const CHIP_SLATE = "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
const CHIP_PAID = "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
const STATUS_CHIP = {
  paid: ["Paid", CHIP_PAID],
  trial: ["Trial", "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"],
  expired: ["Ended", CHIP_SLATE],
  none: ["No trial", CHIP_SLATE],
};

const NEW_FILTERS = [["24h", "24 hrs", 1], ["7d", "7 days", 7], ["30d", "30 days", 30], ["all", "All", null]];

function compute(users) {
  const now = serverNow();
  const members = users.filter((u) => !u.isAdmin);

  const days = [];
  const dayIndex = {};
  for (let i = CHART_DAYS - 1; i >= 0; i--) {
    const d = new Date(now - i * DAY_MS);
    dayIndex[dayKey(d)] = days.length;
    days.push({ ms: d.getTime(), count: 0 });
  }

  const status = { paid: 0, trial: 0, expired: 0, none: 0 };
  let active7 = 0, new7 = 0, new30 = 0, revenue = 0, payers = 0;

  members.forEach((u) => {
    const seen = toMs(u.lastSeenAt);
    if (seen && now - seen <= 7 * DAY_MS) active7++;

    const created = toMs(u.createdAt);
    if (created) {
      const age = now - created;
      if (age <= 7 * DAY_MS) new7++;
      if (age <= 30 * DAY_MS) new30++;
      const k = dayKey(new Date(created));
      if (k in dayIndex) days[dayIndex[k]].count++;
    }

    const key = accessKey(u);
    if (key === "paid") status.paid++;
    else if (key === "trial") status.trial++;
    else if (key === "expired") status.expired++;
    else status.none++;

    let spent = 0;
    [].concat(u.paymentHistory || [], u.appAccessHistory || []).forEach((h) => {
      const p = Number(h && h.price) || 0;
      if (p > 0 && h.method !== "manual") spent += p;
    });
    if (spent > 0) { revenue += spent; payers++; }
  });

  const all = members
    .map((u) => ({ u, created: toMs(u.createdAt), seen: toMs(u.lastSeenAt), key: accessKey(u) }))
    .sort((a, b) => (b.created || 0) - (a.created || 0));
  const recent = all.filter((r) => r.created).slice(0, 5);

  const pending = users.reduce((n, u) => n + (u.pendingPurchases || []).length, 0);

  return { now, total: members.length, active7, new7, new30, status, days, revenue, payers, recent, all, pending };
}

function Bar({ label, sub, value, max, barClass, trackClass, labelClass }) {
  const pct = max > 0 && value > 0 ? Math.max(3, Math.round((value / max) * 100)) : 0;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
        <span className={"min-w-0 truncate " + labelClass}>
          {label}
          {sub && <span className="ml-1.5 text-xs opacity-60">{sub}</span>}
        </span>
        <span className="flex-shrink-0 font-semibold tabular-nums">{value}</span>
      </div>
      <div className={"h-2.5 w-full overflow-hidden rounded-full " + trackClass}>
        <div className={"h-full rounded-full " + barClass} style={{ width: pct + "%" }} />
      </div>
    </div>
  );
}

export default function AdminOverview({ users }) {
  const [share, setShare] = useState(false);
  const [showRevenue, setShowRevenue] = useState(false);
  const [newFilter, setNewFilter] = useState("7d");
  const [shown, setShown] = useState(20);
  const s = useMemo(() => compute(users), [users]);
  const inRange = (r, d) => d == null || (r.created && s.now - r.created <= d * DAY_MS);
  const newCounts = Object.fromEntries(NEW_FILTERS.map(([id, , d]) => [id, s.all.filter((r) => inRange(r, d)).length]));
  const newList = s.all.filter((r) => inRange(r, NEW_FILTERS.find((f) => f[0] === newFilter)[2]));

  const t = (light, dark) => (share ? light : light + " " + dark);

  const revenueVisible = !share || showRevenue;
  const maxStatus = Math.max(1, ...Object.values(s.status));
  const maxDay = Math.max(1, ...s.days.map((d) => d.count));
  const payRate = s.total > 0 ? Math.round((s.payers / s.total) * 100) : 0;

  const track = t("bg-slate-100", "dark:bg-slate-700");
  const labelCls = t("text-slate-700", "dark:text-slate-300");
  const barNavy = t("bg-navy-700", "dark:bg-sky-400");
  const muted = t("text-slate-500", "dark:text-slate-400");
  const asOf = new Date(s.now).toLocaleString(undefined, {
    month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit",
  });

  const switchBtn = (on) =>
    "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors " +
    (on ? "bg-emerald-600" : "bg-slate-300 dark:bg-slate-600");
  const switchKnob = (on) =>
    "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " + (on ? "left-[22px]" : "left-0.5");

  return (
    <div className="space-y-3">
      <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">Share mode</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {share
                ? "Emails are masked and pending items are hidden. Screenshot the card below."
                : "Off: full names, emails, and pending items are visible (for you only)."}
            </p>
          </div>
          <button onClick={() => setShare(!share)} className={switchBtn(share)} role="switch" aria-checked={share} aria-label="Share mode">
            <span className={switchKnob(share)} />
          </button>
        </div>
        {share && (
          <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-2 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300">Show revenue</p>
            <button onClick={() => setShowRevenue(!showRevenue)} className={switchBtn(showRevenue)} role="switch" aria-checked={showRevenue} aria-label="Show revenue">
              <span className={switchKnob(showRevenue)} />
            </button>
          </div>
        )}
      </div>

      <div className={"overflow-hidden rounded-2xl border " + t("border-slate-200 bg-white text-slate-900", "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100")}>
        <div className="h-1.5 bg-gold-500" />
        <div className="space-y-6 p-5">
          <div>
            <h2 className={"font-display text-xl font-bold " + t("text-navy-900", "dark:text-slate-50")}>{APP_NAME} user overview</h2>
            <p className={"text-xs " + muted}>As of {asOf}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            {[
              ["Total users", s.total],
              ["Active in 7 days", s.active7],
              ["New this week", s.new7],
              ["New in 30 days", s.new30],
            ].map(([label, value]) => (
              <div key={label}>
                <p className={"font-display text-3xl font-bold tabular-nums " + t("text-navy-900", "dark:text-slate-50")}>{value}</p>
                <p className={"text-sm " + muted}>{label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className={"text-sm font-semibold " + t("text-navy-900", "dark:text-slate-100")}>Access status</p>
            {STATUS_ROWS.map((r) => (
              <Bar
                key={r.key}
                label={r.label}
                value={s.status[r.key]}
                max={maxStatus}
                barClass={t(r.light, r.dark)}
                trackClass={track}
                labelClass={labelCls}
              />
            ))}
          </div>

          <div>
            <p className={"mb-3 text-sm font-semibold " + t("text-navy-900", "dark:text-slate-100")}>New sign-ups, last {CHART_DAYS} days</p>
            <div className="flex h-24 items-end gap-1">
              {s.days.map((d) => (
                <div key={d.ms} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-0.5">
                  {d.count > 0 && <span className={"text-[10px] font-semibold tabular-nums " + muted}>{d.count}</span>}
                  <div
                    className={"w-full rounded-t " + (d.count > 0 ? barNavy : t("bg-slate-200", "dark:bg-slate-700"))}
                    style={{ height: d.count > 0 ? Math.max(6, Math.round((d.count / maxDay) * 100)) + "%" : "3px" }}
                  />
                </div>
              ))}
            </div>
            <div className={"mt-1.5 flex justify-between text-[11px] " + muted}>
              <span>{shortDate(s.days[0].ms)}</span>
              <span>{shortDate(s.days[s.days.length - 1].ms)}</span>
            </div>
          </div>

          {revenueVisible && (
            <div className={"rounded-xl border p-4 " + t("border-gold-100 bg-gold-50", "dark:border-slate-700 dark:bg-slate-800")}>
              <p className={"text-sm " + muted}>Estimated revenue</p>
              <p className={"font-display text-3xl font-bold tabular-nums " + t("text-navy-900", "dark:text-slate-50")}>
                ₱{s.revenue.toLocaleString()}
              </p>
              <p className={"mt-1 text-xs " + muted}>
                {s.payers} paying user{s.payers === 1 ? "" : "s"} · {payRate}% of all users
              </p>
            </div>
          )}

          {!share && (
            <div>
              <p className="mb-2 text-sm font-semibold text-navy-900 dark:text-slate-100">New users</p>
              <div className="mb-2 flex flex-wrap gap-1.5">
                {NEW_FILTERS.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => { setNewFilter(id); setShown(20); }}
                    className={"rounded-full border px-3 py-1 text-xs font-semibold " + (newFilter === id ? "border-navy-900 bg-navy-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-navy-900" : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400")}
                  >
                    {label} ({newCounts[id]})
                  </button>
                ))}
              </div>
              {newList.length === 0 && <p className="py-4 text-center text-sm text-slate-400">No users in this range.</p>}
              <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                {newList.slice(0, shown).map(({ u, created, seen, key }) => {
                  const chip = STATUS_CHIP[key] || STATUS_CHIP.none;
                  return (
                    <li key={u.uid} className="flex items-center justify-between gap-3 py-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{u.fullName || "(no name)"}</p>
                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">{u.email}</p>
                        <p className="text-[11px] text-slate-400">{created ? "Joined " + shortDate(created) : "Joined: unknown"} · seen {ago(seen, s.now)}</p>
                      </div>
                      <span className={"flex-shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold " + chip[1]}>{chip[0]}</span>
                    </li>
                  );
                })}
              </ul>
              {newList.length > shown && (
                <button onClick={() => setShown(shown + 20)} className="mt-2 w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  Show more ({newList.length - shown} left)
                </button>
              )}
            </div>
          )}

          {share && s.recent.length > 0 && (
            <div>
              <p className={"mb-2 text-sm font-semibold " + t("text-navy-900", "dark:text-slate-100")}>Recent sign-ups</p>
              <ul className={"divide-y " + t("divide-slate-100", "dark:divide-slate-700")}>
                {s.recent.map(({ u, created }) => (
                  <li key={u.uid} className="flex items-center justify-between gap-3 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{u.fullName || "(no name)"}</p>
                      <p className={"truncate text-xs " + muted}>{maskEmail(u.email)}</p>
                    </div>
                    <span className={"flex-shrink-0 text-xs " + muted}>{shortDate(created)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!share && s.pending > 0 && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-300">
              ⏳ Pending approvals: {s.pending}
            </div>
          )}

          <p className={"border-t pt-3 text-[11px] " + t("border-slate-100 text-slate-400", "dark:border-slate-700 dark:text-slate-500")}>
            Counts come from the app's actual user records. Admin accounts are excluded.
          </p>
        </div>
      </div>
    </div>
  );
}
```

## File: ./frontend/src/pages/AdminPanel.jsx
```
import { useState, useEffect, useMemo, useRef } from "react";
import { collection, getDocs, doc, updateDoc, arrayUnion, deleteField, Timestamp, runTransaction, writeBatch } from "firebase/firestore";
import { db } from "../firebase";
import AdminOverview from "./AdminOverview";
import { PAYMENT_METHODS, PROMO_PLAN } from "../payments";
import {
  TRIAL_DAYS, DAY_MS, serverNow, getTrialInfo, getAppAccessInfo,
  getAccess, formatTimeLeft, formatDateShort, toMs, addMonths,
} from "../access";

const METHOD_LABELS = Object.fromEntries(PAYMENT_METHODS.map((m) => [m.id, m.label]));

const TRIAGE = {
  pending: { label: "Pending", dot: "bg-amber-500", chip: "border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-400" },
  none: { label: "None", dot: "bg-slate-400", chip: "border-slate-300 text-slate-500 dark:border-slate-600 dark:text-slate-400" },
  subscribed: { label: "Subscribed", dot: "bg-emerald-500", chip: "border-emerald-300 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400" },
};

const STATE_UI = {
  admin: { label: "Admin", cls: "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300" },
  paid: { label: "App Access", cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300" },
  trial: { label: "On trial", cls: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300" },
  expired: { label: "Expired", cls: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300" },
  none: { label: "No trial yet", cls: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400" },
};

function waitInfo(requestedAt) {
  const t = toMs(requestedAt);
  if (!t) return null;
  const mins = Math.max(0, Math.floor((serverNow() - t) / 60000));
  const label = mins < 60 ? mins + "m"
    : mins < 1440 ? Math.floor(mins / 60) + "h " + (mins % 60) + "m"
    : Math.floor(mins / 1440) + "d " + Math.floor((mins % 1440) / 60) + "h";
  const cls = mins >= 720 ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
    : mins >= 180 ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
    : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
  return { label, cls };
}

function formatDateTime(ts) {
  try {
    return new Date(ts).toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}

function defaultTriage(userData) {
  if (userData.triageStatus) return userData.triageStatus;
  return (userData.pendingPurchases || []).length > 0 ? "pending" : "none";
}

function accessKey(u) {
  const a = getAccess(u);
  if (a.state === "expired" && !a.trial.exists) return "none";
  return a.state;
}

function StateChip({ u }) {
  const key = accessKey(u);
  const a = getAccess(u);
  const ui = STATE_UI[key] || STATE_UI.none;
  let extra = "";
  if (key === "trial" || key === "paid") extra = " · " + formatTimeLeft(a.msLeft);
  return <span className={"rounded-full px-2 py-0.5 text-[11px] font-semibold " + ui.cls}>{ui.label}{extra}</span>;
}

export default function AdminPanel() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [busyKey, setBusyKey] = useState(null);
  const [tab, setTab] = useState("overview");
  const [trialFilter, setTrialFilter] = useState("all");
  const [monthsInput, setMonthsInput] = useState({});
  const [bulkBusy, setBulkBusy] = useState(false);
  const [copiedRef, setCopiedRef] = useState("");
  const lastLoad = useRef(0);

  const loadUsers = async () => {
    setError(null);
    try {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs.map((d) => ({ uid: d.id, ...d.data() }));
      list.sort((a, b) => (a.fullName || a.email || "").localeCompare(b.fullName || b.email || ""));
      setUsers(list);
      lastLoad.current = Date.now();
      return list;
    } catch (err) {
      console.warn("AdminPanel load failed:", err);
      setError(err?.message || String(err));
      setUsers([]);
      return [];
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const filtered = useMemo(() => {
    if (!users) return [];
    const q = query.trim().toLowerCase();
    if (!q) return users;
    const hasRef = (u) => (u.pendingPurchases || []).some((p) => (p.referenceCode || "").toLowerCase().includes(q));
    return users.filter((u) =>
      (u.fullName || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q) || hasRef(u)
    );
  }, [users, query]);

  const patchUser = (uid, patch) => {
    setUsers((prev) => prev.map((u) => (u.uid === uid ? { ...u, ...patch } : u)));
  };

  const run = async (key, u, payload, localPatch) => {
    setBusyKey(key);
    try {
      await updateDoc(doc(db, "users", u.uid), payload);
      patchUser(u.uid, localPatch);
    } catch (err) {
      console.warn("admin write failed:", err);
      alert("Something went wrong. Please try again:\n" + (err?.message || err));
    } finally {
      setBusyKey(null);
    }
  };

  const txn = async (key, u, build) => {
    setBusyKey(key);
    try {
      const ref = doc(db, "users", u.uid);
      const res = await runTransaction(db, async (t) => {
        const snap = await t.get(ref);
        if (!snap.exists()) throw new Error("User document no longer exists.");
        const out = build(snap.data());
        if (!out) return null;
        t.update(ref, out.write);
        return out.patch;
      });
      if (res) patchUser(u.uid, res);
      else { alert("Already handled or no longer pending. Refreshing the list."); await loadUsers(); }
    } catch (err) {
      console.warn("admin transaction failed:", err);
      alert("Something went wrong. Please try again:\n" + (err?.message || err));
    } finally {
      setBusyKey(null);
    }
  };

  const setTriage = (u, status) =>
    run(u.uid + ":triage", u, { triageStatus: status }, { triageStatus: status });

  const approvePending = async (u, p) => {
    if (p.plan !== PROMO_PLAN.id) { alert("Unknown plan: " + p.plan + ". Nothing was changed."); return; }
    const diff = PROMO_PLAN.price !== p.price ? "⚠️ Price mismatch: the user paid ₱" + p.price + " but the plan is now ₱" + PROMO_PLAN.price + ". " : "";
    if (!window.confirm(diff + "Approve " + PROMO_PLAN.label + " ₱" + p.price + " for " + (u.fullName || u.email) + "?")) return;
    const ref = doc(db, "users", u.uid);
    setBusyKey(u.uid + ":pp:" + p.referenceCode);
    try {
      const res = await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref);
        if (!snap.exists()) throw new Error("User document no longer exists.");
        const d = snap.data();
        const done = (d.paymentHistory || []).some((h) => h.referenceCode === p.referenceCode);
        const pending = (d.pendingPurchases || []).some((x) => x.referenceCode === p.referenceCode);
        if (done || !pending) return null;
        const now = serverNow();
        const days = PROMO_PLAN.days || 30;
        const remaining = (d.pendingPurchases || []).filter((x) => x.referenceCode !== p.referenceCode);

        const cur = getAppAccessInfo(d, now);
        const appExpiresAt = (cur.active ? cur.expiresAt : now) + days * DAY_MS;
        const appAccess = { plan: p.plan, expiresAt: appExpiresAt };

        tx.update(ref, {
          pendingPurchases: remaining,
          triageStatus: "subscribed",
          appAccess,
          paymentHistory: arrayUnion({ kind: "promo", plan: p.plan, price: p.price, method: p.method, referenceCode: p.referenceCode, approvedAt: now, days }),
          appAccessHistory: arrayUnion({ plan: p.plan, price: 0, referenceCode: p.referenceCode, method: "promo-purchase", approvedAt: now, expiresAt: appExpiresAt, days }),
        });
        return { pendingPurchases: remaining, triageStatus: "subscribed", appAccess };
      });
      if (res) patchUser(u.uid, res);
      else { alert("Already approved or no longer pending (ref " + p.referenceCode + "). Nothing was changed."); await loadUsers(); }
    } catch (err) {
      console.warn("approvePending failed:", err);
      alert("Something went wrong. Please try again:\n" + (err?.message || err));
    } finally {
      setBusyKey(null);
    }
  };

  // Approve every pending payment in one go. Each one still runs in its own
  // transaction (same logic as approvePending), so nothing can be granted twice.
  // Skipped for manual review: users with 2+ pendings, wrong plan, price mismatch.
  const approveAllPending = async () => {
    if (bulkBusy || busyKey || !users) return;
    const all = [];
    users.forEach((u) => (u.pendingPurchases || []).forEach((p) => all.push({ u, p })));
    const ok = [];
    const skipped = [];
    all.forEach((r) => {
      const many = (r.u.pendingPurchases || []).length > 1;
      if (many) skipped.push(r.p.referenceCode + " (2+ pendings from one user)");
      else if (r.p.plan !== PROMO_PLAN.id) skipped.push(r.p.referenceCode + " (unknown plan)");
      else if (r.p.price !== PROMO_PLAN.price) skipped.push(r.p.referenceCode + " (price mismatch)");
      else ok.push(r);
    });
    if (ok.length === 0) { alert("Nothing can be approved automatically.\n" + skipped.join("\n")); return; }
    const total = ok.reduce((n, r) => n + (Number(r.p.price) || 0), 0);
    const msg =
      "Approve " + ok.length + " pending payments (total ₱" + total + ")?\n\n" +
      "Only continue if your GCash / Maya / MariBank received about ₱" + total + " with these reference codes. Users can type fake requests." +
      (skipped.length ? "\n\nWill be SKIPPED for manual review (" + skipped.length + "):\n" + skipped.join("\n") : "") +
      "\n\nType APPROVE to continue.";
    const typed = window.prompt(msg);
    if (!typed || typed.trim().toUpperCase() !== "APPROVE") return;

    setBulkBusy(true);
    let done = 0;
    const failed = [];
    for (const { u, p } of ok) {
      try {
        const ref = doc(db, "users", u.uid);
        const res = await runTransaction(db, async (tx) => {
          const snap = await tx.get(ref);
          if (!snap.exists()) throw new Error("User document no longer exists.");
          const d = snap.data();
          const already = (d.paymentHistory || []).some((h) => h.referenceCode === p.referenceCode);
          const pending = (d.pendingPurchases || []).some((x) => x.referenceCode === p.referenceCode);
          if (already || !pending) return null;
          const now = serverNow();
          const days = PROMO_PLAN.days || 30;
          const remaining = (d.pendingPurchases || []).filter((x) => x.referenceCode !== p.referenceCode);
          const cur = getAppAccessInfo(d, now);
          const appExpiresAt = (cur.active ? cur.expiresAt : now) + days * DAY_MS;
          const appAccess = { plan: p.plan, expiresAt: appExpiresAt };
          tx.update(ref, {
            pendingPurchases: remaining,
            triageStatus: "subscribed",
            appAccess,
            paymentHistory: arrayUnion({ kind: "promo", plan: p.plan, price: p.price, method: p.method, referenceCode: p.referenceCode, approvedAt: now, days }),
            appAccessHistory: arrayUnion({ plan: p.plan, price: 0, referenceCode: p.referenceCode, method: "promo-purchase", approvedAt: now, expiresAt: appExpiresAt, days }),
          });
          return true;
        });
        if (res) done++;
      } catch (err) {
        console.warn("approveAllPending failed for", p.referenceCode, err);
        failed.push(p.referenceCode);
      }
    }
    setBulkBusy(false);
    await loadUsers();
    alert("Approved " + done + " of " + ok.length + "." +
      (failed.length ? "\nFailed (try again): " + failed.join(", ") : "") +
      (skipped.length ? "\nSkipped for manual review: " + skipped.join(", ") : ""));
  };

  const rejectPending = async (u, p) => {
    if (!window.confirm("Remove this pending request (ref " + p.referenceCode + ")?")) return;
    await txn(u.uid + ":pp:" + p.referenceCode, u, (d) => {
      const list = d.pendingPurchases || [];
      if (!list.some((x) => x.referenceCode === p.referenceCode)) return null;
      const remaining = list.filter((x) => x.referenceCode !== p.referenceCode);
      return { write: { pendingPurchases: remaining }, patch: { pendingPurchases: remaining } };
    });
  };

  const manualGrant = async (u, months) => {
    if (!window.confirm("Give " + (u.fullName || u.email) + " " + months + " month(s) of App Access?")) return;
    const now = serverNow();
    await txn(u.uid + ":acc", u, (d) => {
      const cur = getAppAccessInfo(d, now);
      const newExpiresAt = addMonths(cur.active ? cur.expiresAt : now, months);
      const appAccess = { plan: "M" + months, expiresAt: newExpiresAt };
      return {
        write: {
          appAccess,
          appAccessHistory: arrayUnion({ plan: "M" + months, price: 0, referenceCode: "MANUAL", method: "manual", approvedAt: now, expiresAt: newExpiresAt }),
        },
        patch: { appAccess },
      };
    });
  };

  const doManualGrant = (u) => {
    const raw = (monthsInput[u.uid] ?? "").trim();
    const months = Math.floor(Number(raw));
    if (!raw || !Number.isFinite(months) || months <= 0) {
      alert("Type a whole number of months (1 or more) first.");
      return;
    }
    manualGrant(u, months);
  };

  const restartAccess = async (u) => {
    if (!window.confirm("Restart " + (u.fullName || u.email) + " to a fresh " + PROMO_PLAN.days + " days? Any remaining time will be replaced, not added to.")) return;
    await txn(u.uid + ":acc", u, () => {
      const now = serverNow();
      const expiresAt = now + PROMO_PLAN.days * DAY_MS;
      const appAccess = { plan: PROMO_PLAN.id, expiresAt };
      return {
        write: {
          appAccess,
          appAccessHistory: arrayUnion({ plan: PROMO_PLAN.id, price: 0, referenceCode: "MANUAL-RESTART", method: "manual-restart", approvedAt: now, expiresAt, days: PROMO_PLAN.days }),
        },
        patch: { appAccess },
      };
    });
  };

  const removeAccess = async (u) => {
    if (!window.confirm("Remove App Access for " + (u.fullName || u.email) + "?")) return;
    await run(u.uid + ":acc", u, { appAccess: deleteField() }, { appAccess: undefined });
  };

  const restartAllPaid = async () => {
    if (bulkBusy || busyKey) return;
    setBulkBusy(true);
    try {
      const fresh = await loadUsers();
      const now = serverNow();
      const expiresAt = now + PROMO_PLAN.days * DAY_MS;
      const eligible = fresh.filter((u) => !u.isAdmin && getAppAccessInfo(u, now).active);

      if (eligible.length === 0) {
        alert("Walang currently-paid user na ire-restart.");
        return;
      }
      if (!window.confirm(
        "Restart " + eligible.length + " paid user(s) to exactly " + PROMO_PLAN.days + " days from now?\n\n" +
        "Papalitan ang natitirang oras nila (hindi idadagdag). Trial-only, expired, at admin accounts ay hindi kasama."
      )) return;

      const CHUNK = 450;
      const patches = {};
      for (let i = 0; i < eligible.length; i += CHUNK) {
        const slice = eligible.slice(i, i + CHUNK);
        const batch = writeBatch(db);
        slice.forEach((u) => {
          const appAccess = { plan: PROMO_PLAN.id, expiresAt };
          batch.update(doc(db, "users", u.uid), {
            appAccess,
            appAccessHistory: arrayUnion({ plan: PROMO_PLAN.id, price: 0, referenceCode: "BULK-RESTART", method: "manual-restart", approvedAt: now, expiresAt, days: PROMO_PLAN.days }),
          });
          patches[u.uid] = { appAccess };
        });
        await batch.commit();
      }

      setUsers((prev) => prev.map((u) => (patches[u.uid] ? { ...u, ...patches[u.uid] } : u)));
      alert("✅ Na-restart ang " + eligible.length + " paid user(s) sa " + PROMO_PLAN.days + " days.");
    } catch (err) {
      console.warn("restartAllPaid failed:", err);
      alert("May problema: " + (err?.message || err));
    } finally {
      setBulkBusy(false);
    }
  };

  const writeTrial = (u, days) => {
    const startedAt = serverNow();
    return run(u.uid + ":trial", u, { trial: { startedAt: Timestamp.fromMillis(startedAt), days } }, { trial: { startedAt, days } });
  };

  const grantTrial = (u) => {
    if (!window.confirm("Restart the " + TRIAL_DAYS + "-day trial for " + (u.fullName || u.email) + " from now?")) return;
    return writeTrial(u, TRIAL_DAYS);
  };

  const extendTrial = (u, extraDays) => {
    const left = getTrialInfo(u).msLeft / DAY_MS;
    return writeTrial(u, left + extraDays);
  };

  const endTrial = (u) => {
    if (!window.confirm("End the trial for " + (u.fullName || u.email) + " now?")) return;
    return writeTrial(u, 0);
  };

  const pendingRows = useMemo(() => {
    const rows = [];
    filtered.forEach((u) => {
      (u.pendingPurchases || []).forEach((p) => rows.push({ u, p }));
    });
    return rows.sort((a, b) => (a.p.requestedAt || 0) - (b.p.requestedAt || 0));
  }, [filtered]);

  const trialRows = useMemo(() => {
    return filtered.filter((u) => {
      const k = accessKey(u);
      if (trialFilter === "all") return true;
      if (trialFilter === "trial") return k === "trial";
      if (trialFilter === "expired") return k === "expired";
      if (trialFilter === "none") return k === "none";
      if (trialFilter === "paid") return k === "paid" || k === "admin";
      return true;
    });
  }, [filtered, trialFilter, users]);

  const rawPendingCount = (users || []).reduce((n, u) => n + (u.pendingPurchases || []).length, 0);
  const paidCount = useMemo(() => (users || []).filter((u) => !u.isAdmin && getAppAccessInfo(u).active).length, [users]);

  const expiringRows = useMemo(() => {
    const now = serverNow();
    const rows = [];
    filtered.forEach((u) => {
      if (u.isAdmin) return;
      const app = getAppAccessInfo(u, now);
      if (app.active && app.msLeft <= 7 * DAY_MS) rows.push({ u, endsAt: app.expiresAt });
    });
    return rows.sort((a, b) => a.endsAt - b.endsAt);
  }, [filtered, users]);

  const copyReminder = async (u, endsAt) => {
    const first = (u.fullName || "there").split(" ")[0];
    const text = "Hi " + first + "! Your CSE Reviewer access is ending soon (" + formatDateShort(endsAt) + "). You can renew anytime from the Fees tab. If you renew early, your remaining days are kept. Thank you!";
    try {
      await navigator.clipboard.writeText(text);
      alert("Reminder copied. Paste it into Messenger or SMS.");
    } catch (_) {
      window.prompt("Copy this message:", text);
    }
  };

  const TABS = [
    { id: "overview", label: "📊 Overview" },
    { id: "users", label: "👥 Users" },
    { id: "pending", label: "💳 Pending", count: rawPendingCount },
    { id: "expiring", label: "⏳ Expiring", count: expiringRows.length },
    { id: "trial", label: "🎁 Trial" },
  ];

  const btn = "min-h-[34px] rounded-full px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-50 ";
  const btnGhost = btn + "border border-slate-200 text-slate-600 active:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:active:bg-slate-700";
  const btnGreen = btn + "bg-emerald-600 text-white active:bg-emerald-700";
  const btnRed = btn + "border border-red-200 text-red-600 active:bg-red-50 dark:border-red-800 dark:text-red-400";
  const inputCls = "w-16 rounded-lg border border-slate-200 px-2 py-1.5 text-center text-xs font-semibold dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100";

  const PendingCard = ({ u, p }) => {
    const wait = waitInfo(p.requestedAt);
    const app = getAppAccessInfo(u, serverNow());
    const nPending = (u.pendingPurchases || []).length;
    const mismatch = p.plan === PROMO_PLAN.id && p.price !== PROMO_PLAN.price;
    const copyRef = async () => {
      try {
        await navigator.clipboard.writeText(p.referenceCode);
        setCopiedRef(p.referenceCode);
        setTimeout(() => setCopiedRef(""), 1200);
      } catch (_) {
        window.prompt("Copy this:", p.referenceCode);
      }
    };
    const warn = "rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300";
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/20">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate font-semibold text-navy-900 dark:text-slate-100">{u.fullName || "(no name)"}</p>
            <p className="truncate text-xs text-slate-400">{u.email}</p>
          </div>
          {wait && <span className={"flex-shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold " + wait.cls}>⏱ {wait.label}</span>}
        </div>
        <p className="mt-2 text-sm font-semibold text-navy-900 dark:text-amber-300">
          {p.plan === PROMO_PLAN.id ? PROMO_PLAN.label : p.plan} · ₱{p.price} · {METHOD_LABELS[p.method] || p.method}
        </p>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
          <span>Ref: <span className="font-semibold">{p.referenceCode}</span></span>
          <button onClick={copyRef} className="rounded-full border border-slate-300 px-2 py-0.5 text-[11px] font-semibold text-slate-600 active:bg-slate-100 dark:border-slate-600 dark:text-slate-300">{copiedRef === p.referenceCode ? "Copied ✓" : "Copy"}</button>
          <span>· {formatDateTime(p.requestedAt)}</span>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {mismatch && <span className={warn}>⚠️ Paid ₱{p.price} · plan is ₱{PROMO_PLAN.price}</span>}
          {nPending > 1 && <span className={warn}>⚠️ {nPending} pending requests (possible double payment)</span>}
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            {app.active ? "Active until " + formatDateShort(app.expiresAt) + " · renewal adds days" : "No active access"}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={() => approvePending(u, p)} disabled={!!busyKey} className={btnGreen}>✅ Approve</button>
          <button onClick={() => rejectPending(u, p)} disabled={!!busyKey} className={btnRed}>✕ Reject</button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-navy-900 dark:text-slate-50">👑 Admin Panel</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          One All Access bundle (₱{PROMO_PLAN.price} · {PROMO_PLAN.days} days) — grant months, restart to {PROMO_PLAN.days} days, or approve pending payments below.
        </p>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); if (t.id === "pending" && Date.now() - lastLoad.current > 60000) loadUsers(); }}
            className={"flex-shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors " + (tab === t.id ? "border-navy-900 bg-navy-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-navy-900" : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300")}
          >
            {t.label}
            {t.count > 0 && <span className="ml-1.5 rounded-full bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{t.count}</span>}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email or ref code..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
        />
        <button onClick={loadUsers} className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm text-slate-500 active:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:active:bg-slate-700" aria-label="Refresh">⟳</button>
      </div>

      {users === null && <p className="py-8 text-center text-slate-400">Loading users...</p>}

      {tab === "overview" && users !== null && !error && <AdminOverview users={users} />}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200">
          <p className="font-bold">⚠️ Unable to load users</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {tab === "users" && users !== null && !error && (
        <div className="space-y-3">
          <div className="rounded-xl border-2 border-gold-400 bg-gold-50 p-3 dark:border-gold-600 dark:bg-slate-800/60">
            <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">🔁 Restart ALL paid users</p>
            <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
              One click: resets App Access of every currently-paid user to exactly {PROMO_PLAN.days} days from now. Replaces remaining time (hindi idinadagdag). Hindi kasama ang trial-only, expired, o admin accounts. Hindi apektado ng search box sa itaas.
            </p>
            <button onClick={restartAllPaid} disabled={bulkBusy || !!busyKey} className={btnGreen + " mt-2"}>
              {bulkBusy ? "Restarting…" : "↺ Restart " + PROMO_PLAN.days + "d for all paid (" + paidCount + ")"}
            </button>
          </div>

          {filtered.length === 0 && <p className="py-8 text-center text-slate-400">No users found.</p>}
          {filtered.map((u) => {
            const triage = defaultTriage(u);
            const t = TRIAGE[triage] || TRIAGE.none;
            const app = getAppAccessInfo(u);
            const busy = busyKey === u.uid + ":acc" || bulkBusy;
            return (
              <div key={u.uid} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-navy-900 dark:text-slate-100">{u.fullName || "(no name)"}</p>
                    <p className="truncate text-xs text-slate-400">{u.email}</p>
                  </div>
                  <span className={"flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold " + t.chip}>
                    <span className={"h-2 w-2 rounded-full " + t.dot} aria-hidden />
                    {t.label}
                  </span>
                </div>

                <div className="mt-3 flex gap-1.5">
                  {Object.entries(TRIAGE).map(([status, cfg]) => (
                    <button
                      key={status}
                      onClick={() => setTriage(u, status)}
                      disabled={busyKey === u.uid + ":triage"}
                      className={"flex-1 rounded-lg border px-2 py-1 text-[11px] font-medium transition-colors disabled:opacity-50 " + (triage === status ? cfg.chip + " bg-slate-50 dark:bg-slate-900/40" : "border-slate-200 text-slate-400 dark:border-slate-700")}
                    >
                      {cfg.label}
                    </button>
                  ))}
                </div>

                <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-700">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">All Access</p>
                    <StateChip u={u} />
                  </div>
                  {app.exists && (
                    <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">
                      {app.active ? "Until " : "Ended on "}{formatDateShort(app.expiresAt)}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <input
                      type="number"
                      min="1"
                      inputMode="numeric"
                      value={monthsInput[u.uid] ?? ""}
                      onChange={(e) => setMonthsInput((prev) => ({ ...prev, [u.uid]: e.target.value }))}
                      placeholder="mo"
                      aria-label="Months to grant"
                      className={inputCls}
                    />
                    <button onClick={() => doManualGrant(u)} disabled={busy} className={btnGhost}>＋ Grant</button>
                    <button onClick={() => restartAccess(u)} disabled={busy} className={btnGreen}>↺ Restart {PROMO_PLAN.days}d</button>
                    {app.exists && <button onClick={() => removeAccess(u)} disabled={busy} className={btnRed}>Remove</button>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "pending" && users !== null && !error && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">⏳ Pending approvals ({pendingRows.length}){pendingRows.length > 0 && waitInfo(pendingRows[0].p.requestedAt) ? " · oldest waiting " + waitInfo(pendingRows[0].p.requestedAt).label : ""}</p>
          {pendingRows.length > 1 && (
            <button onClick={approveAllPending} disabled={bulkBusy || !!busyKey} className={btnGreen}>
              {bulkBusy ? "Approving…" : "✅ Approve all (" + pendingRows.length + ")"}
            </button>
          )}
          {pendingRows.length === 0 && <p className="py-8 text-center text-slate-400">No pending payments. 🎉</p>}
          {pendingRows.map(({ u, p }) => (
            <PendingCard key={u.uid + p.referenceCode} u={u} p={p} />
          ))}
        </div>
      )}

      {tab === "trial" && users !== null && !error && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {[["all", "All"], ["trial", "On trial"], ["expired", "Expired"], ["none", "No trial yet"], ["paid", "Paid/Admin"]].map(([id, label]) => (
              <button key={id} onClick={() => setTrialFilter(id)} className={"rounded-full border px-3 py-1 text-xs font-semibold " + (trialFilter === id ? "border-navy-900 bg-navy-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-navy-900" : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400")}>
                {label}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400">{trialRows.length} user(s)</p>

          {trialRows.map((u) => {
            const tr = getTrialInfo(u);
            return (
              <div key={u.uid} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy-900 dark:text-slate-100">{u.fullName || "(no name)"}</p>
                    <p className="truncate text-xs text-slate-400">{u.email}</p>
                  </div>
                  <StateChip u={u} />
                </div>
                {tr.exists && (
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {tr.active ? "Trial until " : "Trial ended on "}{formatDateTime(tr.endsAt)}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <button onClick={() => grantTrial(u)} disabled={busyKey === u.uid + ":trial"} className={btnGreen}>{tr.exists ? "↺ Restart " + TRIAL_DAYS + "d" : "＋ Grant " + TRIAL_DAYS + "d"}</button>
                  <button onClick={() => extendTrial(u, 1)} disabled={busyKey === u.uid + ":trial"} className={btnGhost}>+1 day</button>
                  <button onClick={() => extendTrial(u, 3)} disabled={busyKey === u.uid + ":trial"} className={btnGhost}>+3 days</button>
                  {tr.exists && tr.active && <button onClick={() => endTrial(u)} disabled={busyKey === u.uid + ":trial"} className={btnRed}>End</button>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === "expiring" && users !== null && !error && (
        <div className="space-y-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            App Access ending within 7 days. Tap “Copy reminder” and paste it into Messenger or SMS.
          </p>
          {expiringRows.length === 0 && <p className="py-8 text-center text-slate-400">Nobody is expiring in the next 7 days. 🎉</p>}
          {expiringRows.map(({ u, endsAt }) => (
            <div key={u.uid} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
              <p className="truncate text-sm font-semibold text-navy-900 dark:text-slate-100">{u.fullName || "(no name)"}</p>
              <p className="truncate text-xs text-slate-400">{u.email}</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">App Access · ends {formatDateShort(endsAt)} ({formatTimeLeft(endsAt - serverNow())} left)</p>
              <button onClick={() => copyReminder(u, endsAt)} className={btnGreen + " mt-2"}>📋 Copy reminder</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

## File: ./frontend/src/pages/DevLibraryPanel.jsx
```
import { useState, useCallback } from "react";
import {
  importLibraryJson, getDevLibraryList, deleteDevLibraryTopic, clearDevLibrary,
  exportLibraryJson, exportLibraryTopicJson, listLibrarySubjects,
} from "../contentStore";
import { LIBRARY_PROMPT, LIBRARY_TEMPLATE } from "../devPrompts";
import { downloadText, dateStamp, copyText } from "../devUtils";

const btn = "min-h-[40px] rounded-lg border px-3 py-1.5 text-sm font-medium";

export default function DevLibraryPanel() {
  const [json, setJson] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [copied, setCopied] = useState(false);
  const [, setTick] = useState(0);
  const refresh = () => setTick((t) => t + 1);
  const list = getDevLibraryList();
  const subjects = listLibrarySubjects();

  const handleImport = useCallback(() => {
    setError(null);
    setSuccess(null);
    try {
      const res = importLibraryJson(json);
      setSuccess(
        res
          .map((r) => `✓ ${r.subject} › ${r.topic} — ${r.paragraphCount} paragraphs, ${r.aiCount} explained${r.newSubject ? " (new subject created)" : ""}`)
          .join("\n") + "\nOpen the Library tab to check it."
      );
      setJson("");
      refresh();
    } catch (e) {
      setError(e.message);
    }
  }, [json]);

  const copyPrompt = async () => {
    const ok = await copyText(LIBRARY_PROMPT);
    if (!ok) { alert("Clipboard blocked. Try again or long-press to copy."); return; }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-base font-bold text-navy-900 dark:text-slate-100">Library import</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>Copy the AI prompt, paste it in ChatGPT / Gemini, then paste your study text under it.</li>
          <li>Paste the JSON it gives you below (text + explanations together). The JSON's <b>subject</b> and <b>topic</b> decide where it goes — a new subject is created automatically.</li>
          <li>Tap Import and check it in the Library tab.</li>
          <li>When you're done, tap <b>Download all imported</b> and put the file in <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">frontend/src/data/library/</code> so it ships.</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={copyPrompt} className={`${btn} border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-400`}>
            {copied ? "✓ Prompt copied" : "📋 Copy AI prompt"}
          </button>
          <button onClick={() => setJson(LIBRARY_TEMPLATE)} className={`${btn} border-slate-200 text-slate-600 dark:border-slate-600 dark:text-slate-300`}>
            🧩 Insert template
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          rows={10}
          placeholder="Paste JSON here — one topic, an array of topics, or { subject, topics: [...] }. Code fences are fine."
          style={{ fontSize: "16px" }}
          className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 font-mono text-slate-800 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
        />
        {error && <p className="mt-2 rounded-lg bg-red-50 p-2.5 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>}
        {success && <p className="mt-2 whitespace-pre-wrap rounded-lg bg-emerald-50 p-2.5 text-sm text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">{success}</p>}
        <div className="mt-2 flex justify-end">
          <button onClick={handleImport} disabled={!json.trim()} className="min-h-[42px] rounded-lg bg-navy-900 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40 dark:bg-navy-700">
            Import
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Imported here ({list.length})</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            onClick={() => downloadText(`cse-library-imported-${dateStamp()}.json`, exportLibraryJson(false))}
            disabled={list.length === 0}
            className={`${btn} border-emerald-300 bg-emerald-50 text-emerald-700 disabled:opacity-40 dark:border-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300`}
          >
            ⬇ Download all imported
          </button>
          <button
            onClick={() => downloadText(`cse-library-everything-${dateStamp()}.json`, exportLibraryJson(true))}
            disabled={subjects.length === 0}
            className={`${btn} border-slate-200 text-slate-600 disabled:opacity-40 dark:border-slate-600 dark:text-slate-300`}
          >
            ⬇ Everything (incl. shipped)
          </button>
          {list.length > 0 && (
            <button
              onClick={() => { if (confirm("Remove ALL library topics you imported here? (Shipped files are not touched.)")) { clearDevLibrary(); refresh(); } }}
              className={`${btn} border-red-200 text-red-600 dark:border-red-800 dark:text-red-400`}
            >
              Clear
            </button>
          )}
        </div>
        {list.length === 0 && <p className="mt-3 text-sm text-slate-400">Nothing imported yet.</p>}
        <ul className="mt-3 space-y-2">
          {list.map((it) => (
            <li key={it.key} className="rounded-xl border border-slate-100 p-3 dark:border-slate-700">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-navy-900 dark:text-slate-100">{it.topic}</p>
                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">{it.subject}</p>
                  <p className="text-xs text-slate-400">{it.paragraphCount} paragraphs · 🤖 {it.aiCount} explained</p>
                </div>
                <div className="flex flex-shrink-0 gap-2">
                  <button onClick={() => downloadText(`${it.key.replace("/", "__")}.json`, exportLibraryTopicJson(it.key))} className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600 dark:text-slate-300">⬇ JSON</button>
                  <button onClick={() => { if (confirm(`Remove "${it.topic}"?`)) { deleteDevLibraryTopic(it.key); refresh(); } }} className="rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-600 dark:border-red-800 dark:text-red-400">✕</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

## File: ./frontend/src/pages/DevPanel.jsx
```
import { useState } from "react";
import DevLibraryPanel from "./DevLibraryPanel";
import DevQuizPanel from "./DevQuizPanel";

// Only rendered in `npm run dev` (App.jsx never even loads this file in production).
const TABS = [
  { id: "library", label: "📚 Library" },
  { id: "quiz", label: "📝 Quiz" },
];

export default function DevPanel() {
  const [tab, setTab] = useState("library");
  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-navy-900 dark:text-slate-50">🛠 Dev Panel</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Import study text and quiz questions. This panel only exists when running{" "}
          <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">npm run dev</code> — it is
          removed from production builds.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-[36px] rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-navy-900 text-white shadow-sm dark:bg-navy-700"
                : "bg-slate-100 text-slate-600 active:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:active:bg-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "library" && <DevLibraryPanel />}
      {tab === "quiz" && <DevQuizPanel />}
    </div>
  );
}
```

## File: ./frontend/src/pages/DevQuizPanel.jsx
```
import { useState, useCallback } from "react";
import {
  importQuizJson, getDevQuizList, getDevQuizEntries, deleteDevQuizTopic, clearDevQuiz,
  exportQuizJson, exportQuizTopicJson, listQuizSubjects,
} from "../contentStore";
import { QUIZ_PROMPT, QUIZ_TEMPLATE } from "../devPrompts";
import { downloadText, dateStamp, copyText } from "../devUtils";

const btn = "min-h-[40px] rounded-lg border px-3 py-1.5 text-sm font-medium";
const input = "w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-800 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100";

function TopicCard({ item, onChanged }) {
  const [open, setOpen] = useState(false);
  const entries = open ? getDevQuizEntries(item.key) : [];
  return (
    <li className="rounded-xl border border-slate-100 p-3 dark:border-slate-700">
      <div className="flex items-start justify-between gap-2">
        <button onClick={() => setOpen((v) => !v)} className="min-w-0 flex-1 text-left">
          <p className="font-semibold text-navy-900 dark:text-slate-100">{open ? "▾" : "▸"} {item.topic}</p>
          <p className="truncate text-sm text-slate-500 dark:text-slate-400">{item.subject}</p>
          <p className="text-xs text-slate-400">{item.total} question{item.total !== 1 ? "s" : ""}</p>
        </button>
        <div className="flex flex-shrink-0 gap-2">
          <button onClick={() => downloadText(`quiz-${item.key.replace("/", "__")}.json`, exportQuizTopicJson(item.key))} className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-600 dark:text-slate-300">⬇ JSON</button>
          <button onClick={() => { if (confirm(`Remove "${item.topic}" (${item.total} questions)?`)) { deleteDevQuizTopic(item.key); onChanged(); } }} className="rounded-lg border border-red-200 px-2.5 py-1.5 text-xs font-medium text-red-600 dark:border-red-800 dark:text-red-400">✕</button>
        </div>
      </div>
      {open && (
        <div className="mt-2 space-y-2">
          {entries.map((e) => (
            <div key={e.id} className="rounded-lg bg-slate-50 p-2.5 text-sm dark:bg-slate-900/40">
              <p className="font-semibold text-slate-700 dark:text-slate-200">#{e.id}: {e.question}</p>
              {e.choices ? (
                <ul className="mt-1 space-y-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {Object.entries(e.choices).map(([k, v]) => (
                    <li key={k} className={k === e.correct ? "font-semibold text-emerald-600 dark:text-emerald-400" : ""}>{k}. {v}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Answer: {e.correct}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export default function DevQuizPanel() {
  const [json, setJson] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [copied, setCopied] = useState(false);
  const [, setTick] = useState(0);
  const refresh = () => setTick((t) => t + 1);
  const list = getDevQuizList();
  const subjects = listQuizSubjects();

  const handleImport = useCallback(() => {
    setError(null);
    setSuccess(null);
    try {
      const res = importQuizJson(json, { subject, topic });
      setSuccess(
        res
          .map((r) => `✓ ${r.subject} › ${r.topic} — +${r.added} question${r.added !== 1 ? "s" : ""} (${r.total} total)${r.newSubject ? " (new subject created)" : ""}${r.skipped.length ? `\n   ⚠ skipped ${r.skipped.length} invalid: ${r.skipped.slice(0, 10).join(", ")}${r.skipped.length > 10 ? "…" : ""}` : ""}`)
          .join("\n") + "\nOpen the Quiz tab to check it."
      );
      setJson("");
      refresh();
    } catch (e) {
      setError(e.message);
    }
  }, [json, subject, topic]);

  const copyPrompt = async () => {
    const ok = await copyText(QUIZ_PROMPT);
    if (!ok) { alert("Clipboard blocked. Try again or long-press to copy."); return; }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-base font-bold text-navy-900 dark:text-slate-100">Quiz import</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>Copy the AI prompt, fill in the SUBJECT / TOPIC / NUMBER at its bottom, send it to ChatGPT / Gemini.</li>
          <li>Paste the JSON below. Its <b>subject</b> and <b>topic</b> decide where the questions go — new ones are created automatically. Same topic again = new questions are added (same number = replaced).</li>
          <li>When you're done, tap <b>Download all imported</b> and put the file in <code className="rounded bg-slate-100 px-1 dark:bg-slate-700">frontend/src/data/quiz/</code> so it ships.</li>
        </ol>
        <div className="mt-3 flex flex-wrap gap-2">
          <button onClick={copyPrompt} className={`${btn} border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-400`}>
            {copied ? "✓ Prompt copied" : "📋 Copy AI prompt"}
          </button>
          <button onClick={() => setJson(QUIZ_TEMPLATE)} className={`${btn} border-slate-200 text-slate-600 dark:border-slate-600 dark:text-slate-300`}>
            🧩 Insert template
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <p className="mb-1 text-xs text-slate-400 dark:text-slate-500">
          {'Only needed for the OLD flat format ({ "1": {…} }) that has no subject/topic inside:'}
        </p>
        <div className="mb-2 grid grid-cols-2 gap-2">
          <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject (optional)" style={{ fontSize: "16px" }} className={input} />
          <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Topic (optional)" style={{ fontSize: "16px" }} className={input} />
        </div>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          rows={10}
          placeholder="Paste quiz JSON here — one topic, an array of topics, or { subject, topics: [...] }. Code fences are fine."
          style={{ fontSize: "16px" }}
          className={`${input} font-mono`}
        />
        {error && <p className="mt-2 rounded-lg bg-red-50 p-2.5 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300">⚠️ {error}</p>}
        {success && <p className="mt-2 whitespace-pre-wrap rounded-lg bg-emerald-50 p-2.5 text-sm text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">{success}</p>}
        <div className="mt-2 flex justify-end">
          <button onClick={handleImport} disabled={!json.trim()} className="min-h-[42px] rounded-lg bg-navy-900 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40 dark:bg-navy-700">
            Import
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Imported here ({list.length})</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            onClick={() => downloadText(`cse-quiz-imported-${dateStamp()}.json`, exportQuizJson(false))}
            disabled={list.length === 0}
            className={`${btn} border-emerald-300 bg-emerald-50 text-emerald-700 disabled:opacity-40 dark:border-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300`}
          >
            ⬇ Download all imported
          </button>
          <button
            onClick={() => downloadText(`cse-quiz-everything-${dateStamp()}.json`, exportQuizJson(true))}
            disabled={subjects.length === 0}
            className={`${btn} border-slate-200 text-slate-600 disabled:opacity-40 dark:border-slate-600 dark:text-slate-300`}
          >
            ⬇ Everything (incl. shipped)
          </button>
          {list.length > 0 && (
            <button
              onClick={() => { if (confirm("Remove ALL quiz topics you imported here? (Shipped files are not touched.)")) { clearDevQuiz(); refresh(); } }}
              className={`${btn} border-red-200 text-red-600 dark:border-red-800 dark:text-red-400`}
            >
              Clear
            </button>
          )}
        </div>
        {list.length === 0 && <p className="mt-3 text-sm text-slate-400">Nothing imported yet.</p>}
        <ul className="mt-3 space-y-2">
          {list.map((it) => <TopicCard key={it.key} item={it} onChanged={refresh} />)}
        </ul>
      </div>
    </div>
  );
}
```

## File: ./frontend/src/pages/FeesView.jsx
```
import { useAuth } from "../authContext";
import { PROMO_PLAN, PAYMENT_METHODS } from "../payments";
import { formatTimeLeft, formatDateShort } from "../access";

const ICONS = {
  crown: <><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" /><path d="M5 20h14" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  tag: <><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r="1" fill="currentColor" /></>,
};
function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export default function FeesView() {
  const { user, profile, access, setOverlayOpen, setIntentPlanId } = useAuth();
  const pending = (profile?.pendingPurchases || []).slice().sort((a, b) => (a.requestedAt || 0) - (b.requestedAt || 0));
  const isPaid = access?.state === "paid";

  const payNow = () => {
    if (user) setIntentPlanId(PROMO_PLAN.id);
    setOverlayOpen(true);
  };

  let status = null;
  if (access?.state === "admin") status = { icon: "crown", text: "Admin — everything is unlocked." };
  else if (isPaid) status = { icon: "check", text: "Active until " + formatDateShort(access.app.expiresAt) + " (" + formatTimeLeft(access.msLeft) + " left). Renew early and your remaining days are kept." };
  else if (access?.state === "trial") status = { icon: "tag", text: "Free trial: " + formatTimeLeft(access.msLeft) + " left" };
  else if (access?.state === "expired") status = { icon: "clock", text: "Your trial has ended. Get the promo to continue." };

  return (
    <div className="mx-auto max-w-2xl space-y-4 p-4 pb-10">
      <div>
        <h1 className="mb-1 text-2xl font-bold text-navy-900 dark:text-parchment-50">Fees</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">The promo bundle and where to pay.</p>
      </div>

      {status && (
        <div className="flex items-start gap-2 rounded-xl border border-parchment-200 bg-parchment-50 px-4 py-3 text-sm text-slate-600 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-300">
          <Icon name={status.icon} className="mt-0.5 h-4 w-4 flex-shrink-0 text-seal dark:text-gold-400" />{status.text}
        </div>
      )}

      {pending.length > 0 && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
          <Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0" /> Payment pending ({pending[pending.length - 1].referenceCode}) — waiting for confirmation.
        </div>
      )}

      <section className="rounded-2xl border-2 border-gold-500 bg-parchment-50 p-4 dark:bg-navy-800">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-base font-extrabold text-navy-900 dark:text-parchment-50">{PROMO_PLAN.label}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{PROMO_PLAN.tagline}</p>
          </div>
          <span className="flex-shrink-0 text-3xl font-extrabold text-navy-900 dark:text-parchment-50">₱{PROMO_PLAN.price}</span>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200">
          {PROMO_PLAN.includes.map((line) => (
            <li key={line} className="flex items-center gap-1.5"><Icon name="check" className="h-3.5 w-3.5 flex-shrink-0 text-verdigris dark:text-verdigris-300" /> {line}</li>
          ))}
        </ul>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gold-600 dark:text-gold-400"><Icon name="clock" className="h-3.5 w-3.5" /> Valid for {PROMO_PLAN.days} days only</p>
        <button onClick={payNow} className="mt-4 flex min-h-[48px] w-full items-center justify-center rounded-xl bg-navy-900 px-4 py-3 text-sm font-bold text-white active:bg-navy-800 dark:bg-navy-700">
          {user ? (isPaid ? "Renew" : "Pay now") + " · ₱" + PROMO_PLAN.price : "Sign in to get started"}
        </button>
      </section>

      <section className="rounded-2xl border border-parchment-200 bg-parchment-50 p-4 dark:border-navy-700 dark:bg-navy-800">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">How to pay</h2>
        <div className="mb-3 flex flex-wrap gap-2">
          {PAYMENT_METHODS.map((m) => (
            <span key={m.id} className="rounded-full border border-parchment-200 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-navy-700 dark:text-slate-200">{m.label}</span>
          ))}
        </div>
        <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>1. Tap <b>Pay now</b> above and choose GCash, Maya, or MariBank.</li>
          <li>2. Scan the QR code and pay ₱{PROMO_PLAN.price}. Write your <b>email address</b> and the <b>reference code</b> in the payment note.</li>
          <li>3. Tap <b>I've paid</b>. Payments are confirmed manually by the admin within a few hours.</li>
        </ol>
      </section>
    </div>
  );
}
```

## File: ./frontend/src/pages/LibraryBrowser.jsx
```
import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { listLibrarySubjects, getLibraryTopic } from "../contentStore";
import { AI_NAME, AI_APPS, copyPromptAndOpen } from "../aiApps";
import { IS_DEV } from "../env";
import { Crumb, ListRow, IconBadge, EmptyState } from "../components/NavParts";

const MODE_KEY = "cseReviewer_readMode";
const FONT_KEY = "cseReviewer_fontScale";
const INDENT = ["ml-0", "ml-2 sm:ml-4", "ml-4 sm:ml-8", "ml-6 sm:ml-12", "ml-8 sm:ml-16"];
const FONT_MIN = 0.85;
const FONT_MAX = 1.6;

function readLS(key, fallback) {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}

function sectionText(sec) {
  return [sec.heading, ...sec.paragraphs.map((p) => (p.label ? p.label + " " : "") + p.text)].filter(Boolean).join("\n");
}
function fullText(topic) {
  return topic.sections.map(sectionText).join("\n\n");
}

// ── Ask AI modal: imported explanation + hand-off to other AI apps ───
function AiModal({ target, onClose }) {
  const { title, source, text, entry } = target;
  const [copiedApp, setCopiedApp] = useState(null);

  const ask = async (app) => {
    const base =
      entry?.prompt?.trim() ||
      `Explain this part of my Philippine Civil Service Exam reviewer (${source}) in simple terms. Give a practical example, explain why it matters, and point out common exam traps.`;
    const prompt = `${base}\n\nStudy text — ${source}:\n"""\n${text}\n"""`;
    await copyPromptAndOpen(prompt, app.url);
    setCopiedApp(app.id);
    setTimeout(() => setCopiedApp(null), 2500);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-3 backdrop-blur-sm"
      onClick={(e) => { e.stopPropagation(); onClose(); }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-full w-full max-w-lg overflow-y-auto overscroll-contain rounded-3xl bg-parchment-50 p-5 shadow-2xl dark:bg-navy-900"
      >
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-seal text-lg dark:border-gold-400" aria-hidden>🤖</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{AI_NAME}</p>
              <p className="text-xl font-extrabold leading-tight text-navy-900 dark:text-parchment-50">{entry?.title || title}</p>
            </div>
          </div>
          <button onClick={onClose} className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-slate-400 active:bg-slate-100 dark:text-slate-500 dark:active:bg-slate-800" aria-label="Close">✕</button>
        </div>

        {entry?.content ? (
          <p className="whitespace-pre-wrap rounded-2xl bg-parchment p-3 text-base leading-relaxed text-slate-700 dark:bg-navy-800/60 dark:text-slate-200">{entry.content}</p>
        ) : (
          <p className="rounded-2xl bg-parchment p-3 text-sm italic text-slate-400 dark:bg-navy-800/60 dark:text-slate-500">No explanation written for this part yet.</p>
        )}

        <div className="mt-4 border-t border-slate-100 pt-3 dark:border-navy-800">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Still confused? Ask another AI</p>
          <div className="flex flex-wrap gap-2">
            {AI_APPS.map((app) => (
              <button
                key={app.id}
                onClick={() => ask(app)}
                className="flex min-h-[42px] items-center gap-1.5 rounded-full border border-parchment-200 bg-parchment-50 px-3.5 text-sm font-medium text-slate-700 active:bg-slate-100 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-200 dark:active:bg-slate-700"
              >
                <span aria-hidden>{app.icon}</span> {app.label}
              </button>
            ))}
          </div>
          {copiedApp && (
            <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              ✓ Prompt + study text copied — paste it in {AI_APPS.find((a) => a.id === copiedApp)?.label} and send.
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── reader controls ──────────────────────────────────────────────────
function ModeToggle({ mode, setMode }) {
  const btn = (id, label) => (
    <button
      role="tab"
      aria-selected={mode === id}
      onClick={() => setMode(id)}
      className={`min-h-[34px] rounded-full px-3 py-1 text-sm transition-colors ${
        mode === id ? "bg-navy-900 font-semibold text-white shadow-sm dark:bg-navy-700" : "text-slate-500 dark:text-slate-400"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="inline-flex flex-shrink-0 rounded-full bg-parchment-200/60 p-1 dark:bg-navy-800" role="tablist" aria-label="View mode">
      {btn("study", "Study")}
      {btn("reading", "Reading")}
    </div>
  );
}

function FontStepper({ fontScale, setFontScale }) {
  const step = (d) => setFontScale((s) => Math.min(FONT_MAX, Math.max(FONT_MIN, Math.round((s + d) * 100) / 100)));
  const btn = "flex h-9 w-9 items-center justify-center rounded-full border border-parchment-200 text-sm font-semibold text-slate-600 active:bg-slate-100 dark:border-navy-700 dark:text-slate-300 dark:active:bg-slate-700";
  return (
    <div className="flex flex-shrink-0 items-center gap-1">
      <button onClick={() => step(-0.1)} className={btn} aria-label="Smaller text">A-</button>
      <button onClick={() => step(0.1)} className={btn} aria-label="Bigger text">A+</button>
    </div>
  );
}

// ── one paragraph ────────────────────────────────────────────────────
function ParagraphBlock({ topic, section, para, reading, fontScale, onAsk }) {
  const ask = () =>
    onAsk({
      title: `${topic.topic}${section.heading ? " — " + section.heading : ""}`,
      source: `${topic.subject} › ${topic.topic}`,
      text: (para.label ? para.label + " " : "") + para.text,
      entry: para.ai,
    });

  return (
    <div className={`${INDENT[para.indent] || "ml-0"} ${reading ? "my-4" : "rounded-xl bg-parchment-50 p-3 dark:bg-navy-800/60"}`}>
      <div className="flex gap-2" style={{ fontSize: `${fontScale}rem` }}>
        {para.label && para.label.length <= 5 && (
          <span className={`flex-shrink-0 select-none font-semibold tabular-nums text-slate-500 dark:text-slate-400 ${reading ? "font-display leading-loose" : "leading-relaxed"}`}>
            {para.label}
          </span>
        )}
        <p className={`min-w-0 flex-1 select-text whitespace-pre-wrap text-navy-900 dark:text-slate-300 ${reading ? "font-display leading-loose" : "leading-relaxed"}`}>
          {para.label && para.label.length > 5 && (
            <span className="select-none font-semibold text-slate-500 dark:text-slate-400">{para.label}{" "}</span>
          )}
          {para.text}
        </p>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center gap-2 font-sans">
        <button
          onClick={ask}
          className="min-h-[36px] rounded-lg border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 active:bg-purple-100 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-400 dark:active:bg-purple-950/50"
        >
          🤖 Ask AI
        </button>
        {para.ai && <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">✓ explained</span>}
      </div>
    </div>
  );
}

// ── the topic itself ─────────────────────────────────────────────────
function TopicReader({ topic, mode, setMode, fontScale, setFontScale, onBack }) {
  const reading = mode === "reading";
  const [collapsed, setCollapsed] = useState({});
  const [aiTarget, setAiTarget] = useState(null);
  const allCollapsed = topic.sections.every((s) => !s.heading || collapsed[s.id]);
  const wrap = reading ? "mx-auto max-w-[70ch]" : "mx-auto max-w-3xl";

  return (
    <div className={`${wrap} px-4 pb-10`}>
      <div className="sticky top-0 z-10 -mx-4 mb-3 flex items-center gap-2 border-b border-parchment-200 bg-parchment/95 px-4 py-2 backdrop-blur dark:border-navy-800 dark:bg-navy-950/95">
        <button
          onClick={onBack}
          className="flex-shrink-0 rounded-full px-2.5 py-1.5 text-sm font-medium text-slate-600 active:bg-parchment-200/60 dark:text-slate-300 dark:active:bg-navy-800"
        >
          &larr; Back
        </button>
        <div className="flex-1" />
        <ModeToggle mode={mode} setMode={setMode} />
        <FontStepper fontScale={fontScale} setFontScale={setFontScale} />
      </div>

      <div className="mb-4 rounded-2xl border border-parchment-200 bg-parchment-50 p-4 shadow-card dark:border-navy-700 dark:bg-navy-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{topic.subject}</p>
        <h1 className="mt-1 text-xl font-bold text-navy-900 dark:text-parchment-50">{topic.title || topic.topic}</h1>
        {topic.keywords.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {topic.keywords.map((k) => (
              <span key={k} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">{k}</span>
            ))}
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setAiTarget({ title: `About ${topic.topic}`, source: `${topic.subject} › ${topic.topic}`, text: fullText(topic), entry: topic.ai })}
            className="min-h-[38px] rounded-lg border border-purple-200 bg-purple-50 px-3 py-1.5 text-sm font-medium text-purple-700 active:bg-purple-100 dark:border-purple-700 dark:bg-purple-950/30 dark:text-purple-400"
          >
            🤖 Ask AI — overview
          </button>
          {!reading && (
            <>
              <button
                onClick={() => setCollapsed({})}
                className="h-[38px] rounded-full border border-parchment-200 bg-parchment-50 px-3 text-sm font-medium text-slate-600 active:bg-slate-100 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-300"
              >
                ⤢ Expand All
              </button>
              <button
                onClick={() => setCollapsed(Object.fromEntries(topic.sections.map((s) => [s.id, true])))}
                disabled={allCollapsed}
                className="h-[38px] rounded-full border border-parchment-200 bg-parchment-50 px-3 text-sm font-medium text-slate-600 active:bg-slate-100 disabled:opacity-40 dark:border-navy-700 dark:bg-navy-800 dark:text-slate-300"
              >
                ⤡ Collapse All
              </button>
            </>
          )}
        </div>
      </div>

      {topic.sections.map((sec) => {
        const open = !sec.heading || !collapsed[sec.id];
        const paras = sec.paragraphs.map((p) => (
          <ParagraphBlock key={`${sec.id}:${p.id}`} topic={topic} section={sec} para={p} reading={reading} fontScale={fontScale} onAsk={setAiTarget} />
        ));
        const secAi = sec.ai && (
          <button
            onClick={() => setAiTarget({ title: `${topic.topic} — ${sec.heading}`, source: `${topic.subject} › ${topic.topic}`, text: sectionText(sec), entry: sec.ai })}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-base active:bg-slate-100 dark:active:bg-slate-800"
            aria-label="Ask AI about this section"
          >
            🤖
          </button>
        );

        if (reading) {
          return (
            <section key={sec.id} className="mb-6">
              {sec.heading && (
                <div className="flex items-start gap-2">
                  <h2 className="flex-1 font-display font-bold text-navy-900 dark:text-parchment-50" style={{ fontSize: `${1.3 * fontScale}rem` }}>{sec.heading}</h2>
                  {secAi}
                </div>
              )}
              {paras}
            </section>
          );
        }
        return (
          <section key={sec.id} className="mb-3 rounded-2xl border border-parchment-200 bg-parchment-50 p-3 shadow-card dark:border-navy-700 dark:bg-navy-900">
            {sec.heading && (
              <div className="flex items-start gap-1">
                <button
                  onClick={() => setCollapsed((p) => ({ ...p, [sec.id]: !p[sec.id] }))}
                  aria-expanded={open}
                  className="flex min-h-[40px] flex-1 items-start gap-2 text-left"
                >
                  <span className={`mt-1 select-none text-slate-400 transition-transform duration-200 dark:text-slate-600 ${open ? "rotate-90" : ""}`}>▸</span>
                  <span className="text-base font-bold text-navy-900 dark:text-parchment-50 sm:text-lg">{sec.heading}</span>
                </button>
                {secAi}
              </div>
            )}
            {open && <div className="mt-2 space-y-2">{paras}</div>}
          </section>
        );
      })}

      {aiTarget && <AiModal target={aiTarget} onClose={() => setAiTarget(null)} />}
    </div>
  );
}

// ── Library: Subject list -> Topic list -> Reader ────────────────────
export default function LibraryBrowser({ nav, setNav }) {
  const subjects = useMemo(() => listLibrarySubjects(), []);
  const [mode, setMode] = useState(() => (readLS(MODE_KEY, "study") === "reading" ? "reading" : "study"));
  const [fontScale, setFontScale] = useState(() => {
    const n = parseFloat(readLS(FONT_KEY, "1"));
    return Number.isFinite(n) ? Math.min(FONT_MAX, Math.max(FONT_MIN, n)) : 1;
  });
  useEffect(() => { try { localStorage.setItem(MODE_KEY, mode); } catch {} }, [mode]);
  useEffect(() => { try { localStorage.setItem(FONT_KEY, String(fontScale)); } catch {} }, [fontScale]);

  const subject = subjects.find((s) => s.id === nav.subjectId) || null;
  const topicMeta = subject?.topics.find((t) => t.id === nav.topicId) || null;
  const topic = subject && topicMeta ? getLibraryTopic(subject.id, topicMeta.id) : null;

  if (subjects.length === 0) {
    return (
      <EmptyState
        icon="📚"
        title="No study material yet."
        hint={IS_DEV ? "Import some in the 🛠 Dev tab (bottom right)." : "Check back soon."}
      />
    );
  }

  if (!subject) {
    return (
      <div className="mx-auto max-w-2xl space-y-3 p-4">
        {subjects.map((s) => (
          <ListRow
            key={s.id}
            left={<IconBadge icon={s.icon} />}
            title={s.label}
            subtitle={`${s.topics.length} topic${s.topics.length !== 1 ? "s" : ""}`}
            onClick={() => setNav({ subjectId: s.id, topicId: null })}
          />
        ))}
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <Crumb onBack={() => setNav({ subjectId: null, topicId: null })} title={subject.label} subtitle={`${subject.topics.length} topic${subject.topics.length !== 1 ? "s" : ""}`} />
        <div className="space-y-3">
          {subject.topics.map((t) => (
            <ListRow
              key={t.id}
              title={t.label}
              subtitle={`${t.paragraphCount} paragraph${t.paragraphCount !== 1 ? "s" : ""}${t.aiCount ? ` · 🤖 ${t.aiCount} explained` : ""}`}
              onClick={() => setNav({ subjectId: subject.id, topicId: t.id })}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <TopicReader
      key={topic.key}
      topic={topic}
      mode={mode}
      setMode={setMode}
      fontScale={fontScale}
      setFontScale={setFontScale}
      onBack={() => setNav({ subjectId: subject.id, topicId: null })}
    />
  );
}
```

## File: ./frontend/src/pages/QuizBrowser.jsx
```
import { useMemo } from "react";
import { listQuizSubjects } from "../contentStore";
import { makeScope, getSubjectStats, getSubjectTotals } from "../subjectQuizStore";
import { ProgressCircle } from "../components/QuizShared";
import { Crumb, ListRow, EmptyState } from "../components/NavParts";
import SubjectDashboard from "./SubjectDashboard";
import { IS_DEV } from "../env";

// Quiz: Subject list -> Topic list -> the quiz for that topic.
export default function QuizBrowser({ nav, setNav }) {
  const subjects = useMemo(() => listQuizSubjects(), []);
  const subject = subjects.find((s) => s.id === nav.subjectId) || null;
  const topic = subject?.topics.find((t) => t.id === nav.topicId) || null;

  if (subjects.length === 0) {
    return (
      <EmptyState
        icon="📝"
        title="No quiz questions yet."
        hint={IS_DEV ? "Import some in the 🛠 Dev tab (bottom right)." : "Check back soon."}
      />
    );
  }

  if (!subject) {
    return (
      <div className="mx-auto max-w-2xl space-y-3 p-4">
        {subjects.map((s) => {
          const t = getSubjectTotals(s.id, s.topics.map((x) => x.id));
          return (
            <ListRow
              key={s.id}
              left={<ProgressCircle progress={t.percentAnswered} size={44} strokeWidth={5} />}
              title={s.label}
              subtitle={`${s.topics.length} topic${s.topics.length !== 1 ? "s" : ""} · ${t.answeredCount}/${t.total} answered`}
              onClick={() => setNav({ subjectId: s.id, topicId: null })}
            />
          );
        })}
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <Crumb onBack={() => setNav({ subjectId: null, topicId: null })} title={subject.label} subtitle={`${subject.topics.length} topic${subject.topics.length !== 1 ? "s" : ""}`} />
        <div className="space-y-3">
          {subject.topics.map((t) => {
            const st = getSubjectStats(makeScope(subject.id, t.id));
            return (
              <ListRow
                key={t.id}
                left={<ProgressCircle progress={st.percentAnswered} size={44} strokeWidth={5} />}
                title={t.label}
                subtitle={`${st.answeredCount}/${st.total} answered`}
                onClick={() => setNav({ subjectId: subject.id, topicId: t.id })}
              />
            );
          })}
        </div>
      </div>
    );
  }

  const scope = makeScope(subject.id, topic.id);
  return (
    <div className="mx-auto max-w-2xl px-4 pt-4">
      <Crumb onBack={() => setNav({ subjectId: subject.id, topicId: null })} title={topic.label} subtitle={subject.label} />
      <SubjectDashboard key={scope} subjectId={scope} subjectLabel={topic.label} />
    </div>
  );
}
```

## File: ./frontend/src/pages/SettingsView.jsx
```
import { useAuth } from "../authContext";
import { formatTimeLeft, formatDateShort } from "../access";

function Toggle({ enabled, onChange }) {
  return (
    <button type="button" role="switch" aria-checked={enabled} onClick={() => onChange(!enabled)} className={`relative inline-flex h-8 w-14 flex-shrink-0 items-center rounded-full transition-colors duration-300 ${enabled ? "bg-navy-700" : "bg-slate-300"}`}>
      <span className={`inline-block h-6 w-6 transform rounded-full bg-parchment-50 shadow-md transition-transform duration-300 ${enabled ? "translate-x-7" : "translate-x-1"}`} />
    </button>
  );
}

const card = "mb-6 rounded-2xl border border-parchment-200 bg-parchment-50 p-4 dark:border-navy-700 dark:bg-navy-800";
const h2 = "mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500";
const btn = "flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-parchment-200 px-4 py-2.5 text-sm font-semibold text-slate-700 active:bg-slate-100 dark:border-navy-700 dark:text-slate-200 dark:active:bg-slate-700";

export default function SettingsView({ darkMode, setDarkMode }) {
  const { user, profile, access, signingIn, authError, signInWithGoogle, signOutUser, setOverlayOpen } = useAuth();

  let accessText = null;
  if (access?.state === "admin") accessText = "Admin";
  else if (access?.state === "paid") accessText = "All Access until " + formatDateShort(access.app.expiresAt) + " (" + formatTimeLeft(access.msLeft) + " left)";
  else if (access?.state === "trial") accessText = "Free trial: " + formatTimeLeft(access.msLeft) + " left";
  else if (access?.state === "expired") accessText = "Trial ended";

  return (
    <div className="mx-auto max-w-2xl p-4 pb-10">
      <h1 className="mb-1 text-2xl font-bold text-navy-900 dark:text-parchment-50">Settings</h1>
      <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Customize your study experience.</p>

      <section className={card}>
        <h2 className={h2}>Account</h2>
        {user ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {profile?.photoURL && <img src={profile.photoURL} alt="" referrerPolicy="no-referrer" className="h-12 w-12 rounded-full object-cover" />}
              <div className="min-w-0">
                <p className="truncate font-semibold text-navy-900 dark:text-parchment-50">{profile?.fullName || profile?.displayName || "Signed in"}</p>
                <p className="truncate text-xs text-slate-400">{profile?.email || user.email}</p>
                {accessText && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{accessText}</p>}
              </div>
            </div>
            <button onClick={() => setOverlayOpen(true)} className={btn}>Open profile</button>
            <button onClick={signOutUser} className={btn}>Sign out</button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">Sign in with Google to start your free trial and get All Access.</p>
            {authError && <p className="text-xs text-red-600 dark:text-red-400">{authError}</p>}
            <button onClick={signInWithGoogle} disabled={signingIn} className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50 dark:bg-navy-700">
              {signingIn ? "Waiting for Google..." : "Sign in with Google"}
            </button>
          </div>
        )}
      </section>

      <section className={card}>
        <h2 className={h2}>Appearance</h2>
        <div className="flex items-center justify-between gap-4 rounded-xl py-1">
          <div className="min-w-0">
            <p className="font-medium text-navy-900 dark:text-parchment-50">Dark Mode</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Easier on the eyes in low light.</p>
          </div>
          <Toggle enabled={darkMode} onChange={setDarkMode} />
        </div>
      </section>

      <section className={card}>
        <h2 className={h2}>About this App</h2>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">CSE Reviewer — a Civil Service Exam study companion with a reading library and practice quizzes.</p>
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">Version 1.0.0</p>
      </section>

      <section className="rounded-2xl border border-parchment-200 bg-parchment-50 p-4 dark:border-navy-700 dark:bg-navy-800">
        <h2 className={h2}>Developer</h2>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white dark:bg-navy-700">O</div>
          <div className="min-w-0">
            <p className="font-semibold text-navy-900 dark:text-parchment-50">Osias</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">App developer &amp; maintainer</p>
          </div>
        </div>
        <a href="https://osiasnalaunan68-star.github.io/osias-personal-portfolio" target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm active:bg-navy-800 dark:bg-navy-700 dark:active:bg-navy-600">View Developer Portfolio</a>
      </section>
    </div>
  );
}
```

## File: ./frontend/src/pages/SubjectDashboard.jsx
```
import { useState, useEffect, useCallback, useMemo } from "react";
import { ProgressCircle, answersMatch } from "../components/QuizShared";
import {
  getAllEntries, getSortedItemIds, getSubjectStats,
  getSubjectProgress, saveSubjectProgress, resetSubjectProgress,
} from "../subjectQuizStore";

const IconCheckCircle = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" />
  </svg>
);
const IconXCircle = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);
const IconPlay = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M7 5.3v13.4a1 1 0 0 0 1.5.86l11-6.7a1 1 0 0 0 0-1.72l-11-6.7A1 1 0 0 0 7 5.3Z" />
  </svg>
);

function FlatQuizQuestion({ item, onAnswer, answered, selected }) {
  const [inputValue, setInputValue] = useState("");
  const choices = item?.choices && typeof item.choices === "object" ? item.choices : null;
  const correct = item?.correct || "";
  const reason = item?.reason || "";
  const isRight = answersMatch(selected, correct);

  if (!choices) {
    const handleSubmit = () => { if (!answered && inputValue.trim()) onAnswer(inputValue.trim()); };
    return (
      <div className="space-y-4">
        <p className="font-display text-lg font-medium text-navy-900 dark:text-parchment-50">{item?.question || "No question available"}</p>
        <div className="flex gap-2">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} disabled={answered} placeholder="Type your answer here…" className="flex-1 rounded-md border border-parchment-200 bg-parchment-50 px-4 py-2 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:border-navy-700 dark:bg-navy-800 dark:text-parchment-50 dark:focus:ring-gold-500 disabled:opacity-50" />
          <button onClick={handleSubmit} disabled={answered || !inputValue.trim()} className="rounded-md bg-navy-900 px-6 py-2 text-sm font-semibold text-white disabled:opacity-40 dark:bg-navy-700">Submit</button>
        </div>
        {answered && (
          <div className={`mt-4 flex items-start gap-2 rounded-md p-4 ${isRight ? "bg-verdigris/10 dark:bg-verdigris/20" : "bg-oxblood/10 dark:bg-oxblood/20"}`}>
            {isRight ? <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-verdigris dark:text-verdigris-300" /> : <IconXCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-oxblood dark:text-oxblood-300" />}
            <div>
              <p className={`font-medium ${isRight ? "text-verdigris dark:text-verdigris-300" : "text-oxblood dark:text-oxblood-300"}`}>{isRight ? "Correct!" : `Incorrect. The correct answer is: ${correct}`}</p>
              {reason && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{reason}</p>}
            </div>
          </div>
        )}
      </div>
    );
  }

  const choiceKeys = Object.keys(choices);
  return (
    <div className="space-y-4">
      <p className="font-display text-lg font-medium text-navy-900 dark:text-parchment-50">{item?.question || "No question available"}</p>
      <div className="space-y-2">
        {choiceKeys.map((key) => {
          const label = choices[key] || "";
          const isSelected = selected === key;
          const isCorrect = answered && key === correct;
          const isWrong = answered && isSelected && key !== correct;
          const choiceClass = answered
            ? isCorrect ? "border-verdigris bg-verdigris/10 dark:border-verdigris/70 dark:bg-verdigris/20"
              : isWrong ? "border-oxblood bg-oxblood/10 dark:border-oxblood/70 dark:bg-oxblood/20"
              : "border-parchment-200 bg-parchment-50 dark:border-navy-700 dark:bg-navy-800"
            : isSelected ? "border-seal dark:border-gold-400"
              : "border-parchment-200 bg-parchment-50 hover:border-navy-700 dark:border-navy-700 dark:bg-navy-800 dark:hover:border-slate-500";
          return (
            <button key={key} onClick={() => !answered && onAnswer(key)} disabled={answered} className={`block w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors ${choiceClass} ${!answered && "cursor-pointer"} disabled:cursor-default`}>
              <span className="font-semibold">{key}.</span> {label}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`mt-4 flex items-start gap-2 rounded-md p-4 ${isRight ? "bg-verdigris/10 dark:bg-verdigris/20" : "bg-oxblood/10 dark:bg-oxblood/20"}`}>
          {isRight ? <IconCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-verdigris dark:text-verdigris-300" /> : <IconXCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-oxblood dark:text-oxblood-300" />}
          <div>
            <p className={`font-medium ${isRight ? "text-verdigris dark:text-verdigris-300" : "text-oxblood dark:text-oxblood-300"}`}>{isRight ? "Correct!" : `Incorrect. The correct answer is: ${correct}`}</p>
            {reason && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{reason}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export function SubjectQuizPlay({ subjectId, subjectLabel, onBack }) {
  const entries = useMemo(() => getAllEntries(subjectId), [subjectId]);
  const itemIds = useMemo(() => getSortedItemIds(subjectId), [subjectId]);
  const initialProgress = useMemo(() => getSubjectProgress(subjectId), [subjectId]);

  const [currentIndex, setCurrentIndex] = useState(() => Math.min(initialProgress.currentIndex || 0, Math.max(0, itemIds.length - 1)));
  const [answers, setAnswers] = useState(initialProgress.answers || {});

  const total = itemIds.length;
  const currentId = itemIds[currentIndex] || null;
  const currentItem = currentId ? entries[currentId] : null;
  const currentAnswer = currentId ? answers[currentId] : null;
  const isAnswered = currentAnswer !== undefined && currentAnswer !== null;

  const persist = useCallback((nextAnswers, nextIndex) => {
    saveSubjectProgress(subjectId, { answers: nextAnswers, currentIndex: nextIndex });
  }, [subjectId]);

  const handleAnswer = (value) => {
    if (!currentId || answers[currentId] !== undefined) return;
    const nextAnswers = { ...answers, [currentId]: value };
    setAnswers(nextAnswers);
    persist(nextAnswers, currentIndex);
  };

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(total - 1, idx));
    setCurrentIndex(clamped);
    persist(answers, clamped);
  };

  const answeredCount = Object.keys(answers).filter((id) => entries[id]).length;
  const correctCount = Object.keys(answers).filter((id) => entries[id] && answersMatch(answers[id], entries[id].correct)).length;
  const progressPct = total ? (answeredCount / total) * 100 : 0;
  const scorePct = answeredCount ? (correctCount / answeredCount) * 100 : 0;

  if (total === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-center text-slate-500 dark:text-slate-400">
        <p className="text-lg font-medium">No questions available yet.</p>
        <button onClick={onBack} className="mt-3 rounded-lg border border-parchment-200 px-4 py-2 text-sm dark:border-navy-700">← Back</button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-parchment dark:text-slate-300 dark:hover:bg-navy-800">← Back</button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{subjectLabel}</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">{currentIndex + 1} / {total}</span>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Progress: {Math.round(progressPct)}%</span>
        <span>Score: {Math.round(scorePct)}%</span>
      </div>
      <div className="mb-3 h-1 w-full rounded-full bg-parchment-200 dark:bg-navy-700">
        <div className="h-1 rounded-full bg-navy-900 transition-all duration-300 dark:bg-gold-500" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="mb-4 flex flex-wrap gap-1">
        {itemIds.map((id, idx) => {
          const isAnsweredDot = answers[id] !== undefined && answers[id] !== null;
          const isActive = idx === currentIndex;
          const isCorrect = entries[id] && answersMatch(answers[id], entries[id].correct);
          const dotColor = isAnsweredDot
            ? (isCorrect ? "bg-verdigris dark:bg-verdigris-300" : "bg-oxblood dark:bg-oxblood-300")
            : "bg-slate-300 dark:bg-slate-600";
          return (
            <button
              key={id}
              onClick={() => goTo(idx)}
              className={`h-3 w-3 rounded-full transition-all ${isActive ? "scale-125" : ""} ${dotColor}`}
              title={`Item ${id}`}
            />
          );
        })}
      </div>

      <div className="rounded-lg border border-parchment-200 bg-parchment-50 p-6 dark:border-navy-700 dark:bg-navy-800">
        <FlatQuizQuestion key={currentId} item={currentItem} onAnswer={handleAnswer} answered={isAnswered} selected={currentAnswer} />
      </div>

      <div className="mt-4 flex justify-between">
        <button onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} className="rounded-lg border border-parchment-200 px-4 py-2 text-sm font-medium text-slate-600 disabled:opacity-40 dark:border-navy-700 dark:text-slate-300">Previous</button>
        <button onClick={() => goTo(currentIndex + 1)} disabled={currentIndex === total - 1} className="rounded-lg border border-parchment-200 px-4 py-2 text-sm font-medium text-slate-600 disabled:opacity-40 dark:border-navy-700 dark:text-slate-300">Next</button>
      </div>
    </div>
  );
}

export default function SubjectDashboard({ subjectId, subjectLabel }) {
  const [playing, setPlaying] = useState(false);
  const [stats, setStats] = useState(() => getSubjectStats(subjectId));
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => { setStats(getSubjectStats(subjectId)); }, [subjectId, refreshKey, playing]);

  const handleExitPlay = () => {
    setPlaying(false);
    setRefreshKey((k) => k + 1);
  };

  const handleReset = () => {
    if (confirm(`Reset your progress for ${subjectLabel}? Imported questions are kept — only your answers are cleared.`)) {
      resetSubjectProgress(subjectId);
      setRefreshKey((k) => k + 1);
    }
  };

  if (playing) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <SubjectQuizPlay subjectId={subjectId} subjectLabel={subjectLabel} onBack={handleExitPlay} />
      </div>
    );
  }

  const hasProgress = stats.answeredCount > 0;

  return (
    <div className="mx-auto max-w-md p-4">
      <div className="rounded-lg border border-parchment-200 bg-parchment-50 p-6 text-center dark:border-navy-700 dark:bg-navy-800">
        <h2 className="mb-1 text-xl font-bold text-navy-900 dark:text-parchment-50">{subjectLabel}</h2>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          {stats.total > 0 ? `${stats.total} question${stats.total !== 1 ? "s" : ""} available` : "No questions imported yet"}
        </p>

        <div className="mb-6 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle progress={stats.percentAnswered} size={84} strokeWidth={8} color="#22c55e" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Answered<br/>({stats.answeredCount}/{stats.total})</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle progress={stats.percentCorrect} size={84} strokeWidth={8} color="#22c55e" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Correct<br/>({stats.correctCount}/{stats.answeredCount})</span>
          </div>
        </div>

        {stats.total === 0 ? (
          <p className="rounded-lg bg-parchment p-3 text-sm text-slate-400 dark:bg-navy-900/40 dark:text-slate-500">No questions in this topic yet.</p>
        ) : (
          <div className="space-y-2">
            <button onClick={() => setPlaying(true)} className="flex w-full items-center justify-center gap-1.5 rounded-md bg-navy-900 px-4 py-3 text-sm font-semibold text-white active:bg-navy-800 dark:bg-navy-700 dark:active:bg-navy-600">
              <IconPlay className="h-4 w-4" /> {hasProgress ? "Continue" : "Start"}
            </button>
            {hasProgress && (
              <button onClick={handleReset} className="w-full rounded-md border border-red-200 px-4 py-2 text-xs font-medium text-red-600 active:bg-red-50 dark:border-red-800 dark:text-red-400 dark:active:bg-red-950/30">
                Reset progress
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

## File: ./frontend/src/payments.js
```
import gcashQr from "./assets/payment/gcash-qr.png";
import mayaQr from "./assets/payment/maya-qr.png";
import maribankQr from "./assets/payment/maribank-qr.png";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "./firebase";

// >>> Dito palitan ang presyo / araw <<<
export const PROMO_PRICE = 50;
export const PROMO_DAYS = 30;
export const PROMO_PLAN = {
  id: "PROMO",
  kind: "promo",
  label: "All Access Promo",
  tagline: "One promo, everything unlocked. This is the only plan available right now.",
  price: PROMO_PRICE,
  days: PROMO_DAYS,
  includes: ["Full Library (all subjects & topics)", "Full Quiz (all subjects & topics)", "Full app access"],
};

export const PAYMENT_METHODS = [
  { id: "gcash", label: "GCash", qr: gcashQr },
  { id: "maya", label: "Maya", qr: mayaQr },
  { id: "maribank", label: "MariBank", qr: maribankQr },
];

const REF_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateReferenceCode(planId) {
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += REF_CHARS[Math.floor(Math.random() * REF_CHARS.length)];
  }
  return `${planId}-${suffix}`;
}

export async function submitPendingPurchase(uid, { planId, price, method, referenceCode }) {
  const ref = doc(db, "users", uid);
  const u = auth.currentUser;

  await setDoc(
    ref,
    {
      email: (u && u.email) || "",
      displayName: (u && u.displayName) || "",
      photoURL: (u && u.photoURL) || "",
      pendingPurchases: arrayUnion({
        plan: planId,
        price,
        method,
        referenceCode,
        requestedAt: Date.now(),
      }),
    },
    { merge: true }
  );
}
```

## File: ./frontend/src/subjectQuizStore.js
```
// Quiz PROGRESS + STATS only. The questions themselves live in contentStore.js.
//
// "scope" = "<subjectId>/<topicId>"  (one quiz = one topic of one subject).
// Old flat quizzes (data/defaultQuizzes/<id>.json) keep their old progress key.
import { getQuizTopic, LEGACY_TOPIC_ID } from "./contentStore";
import { answersMatch } from "./components/QuizShared";

export function makeScope(subjectId, topicId) {
  return `${subjectId}/${topicId}`;
}
function splitScope(scope) {
  const s = String(scope);
  const i = s.indexOf("/");
  return i < 0 ? [s, LEGACY_TOPIC_ID] : [s.slice(0, i), s.slice(i + 1)];
}
function progressKey(scope) {
  const [s, t] = splitScope(scope);
  return t === LEGACY_TOPIC_ID ? `cseReviewer_progress_${s}` : `cseReviewer_progress_${s}__${t}`;
}

function numericSort(a, b) {
  const na = parseFloat(a);
  const nb = parseFloat(b);
  if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

const NO_ENTRIES = {};

export function getAllEntries(scope) {
  const [s, t] = splitScope(scope);
  return getQuizTopic(s, t)?.entries || NO_ENTRIES;
}

export function getSortedItemIds(scope) {
  return Object.keys(getAllEntries(scope)).sort(numericSort);
}

// ---------- Progress (resume where you stopped) ----------

export function getSubjectProgress(scope) {
  try {
    const raw = localStorage.getItem(progressKey(scope));
    if (!raw) return { answers: {}, currentIndex: 0 };
    const parsed = JSON.parse(raw);
    return { answers: parsed.answers || {}, currentIndex: parsed.currentIndex || 0 };
  } catch {
    return { answers: {}, currentIndex: 0 };
  }
}

export function saveSubjectProgress(scope, progress) {
  try {
    const payload = { ...progress, updatedAt: new Date().toISOString() };
    localStorage.setItem(progressKey(scope), JSON.stringify(payload));
  } catch {}
}

export function resetSubjectProgress(scope) {
  try { localStorage.removeItem(progressKey(scope)); } catch {}
}

// Stats for the two progress circles.
export function getSubjectStats(scope) {
  const entries = getAllEntries(scope);
  const total = Object.keys(entries).length;
  const progress = getSubjectProgress(scope);
  const answeredIds = Object.keys(progress.answers).filter((id) => entries[id]);
  const answeredCount = answeredIds.length;
  const correctCount = answeredIds.filter((id) => answersMatch(progress.answers[id], entries[id].correct)).length;
  return {
    total,
    answeredCount,
    correctCount,
    percentAnswered: total ? (answeredCount / total) * 100 : 0,
    percentCorrect: answeredCount ? (correctCount / answeredCount) * 100 : 0,
  };
}

// Added-up stats for a whole subject (all its topics).
export function getSubjectTotals(subjectId, topicIds) {
  let total = 0;
  let answeredCount = 0;
  let correctCount = 0;
  for (const t of topicIds) {
    const s = getSubjectStats(makeScope(subjectId, t));
    total += s.total;
    answeredCount += s.answeredCount;
    correctCount += s.correctCount;
  }
  return { total, answeredCount, correctCount, percentAnswered: total ? (answeredCount / total) * 100 : 0 };
}
```

## File: ./frontend/tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 4px 14px -4px rgba(15,23,42,0.10)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Newsreader", '"Source Serif 4"', "Georgia", "serif"],
      },
      colors: {
        navy: { 950: "#0b1220", 900: "#0f172a", 800: "#152238", 700: "#1e3a5f" },
        gold: { 50: "#fdf8ec", 100: "#faedc4", 400: "#e0b94d", 500: "#c9a227", 600: "#a9841c" },
        parchment: { DEFAULT: "#F6F5F1", 50: "#FBFAF6", 200: "#E6E3D8" },
        seal: { DEFAULT: "#9C7A32", 300: "#D9B869" },
        verdigris: { DEFAULT: "#1F6D4C", 300: "#6FBE98" },
        oxblood: { DEFAULT: "#8C3331", 300: "#E39B98" },
      },
    },
  },
  plugins: [],
};
```

## File: ./frontend/vite.config.js
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
});
```

