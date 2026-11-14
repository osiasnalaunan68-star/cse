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
