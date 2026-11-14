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
