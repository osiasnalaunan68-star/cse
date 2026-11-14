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
