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
