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
import LibraryBrowser from "./pages/LibraryBrowser";
import QuizBrowser from "./pages/QuizBrowser";

// Dev Panel: Vite turns import.meta.env.DEV into `false` in production builds, so this
// whole branch (and the DevPanel files) is dropped — real users can never reach it.
const DevPanel = import.meta.env.DEV ? lazy(() => import("./pages/DevPanel")) : null;

const DARK_KEY = "cseReviewer_darkMode";
const NAV0 = { subjectId: null, topicId: null };

const IconBook = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 5.5C4 4 7 4 12 6c5-2 8-2 10-.5V19c-2-1.5-5-1.5-10 .5-5-2-8-2-10-.5V5.5Z" />
    <path d="M12 6v13.5" />
  </svg>
);
const IconQuiz = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 11l1.5 1.5L13 10M9 16h6" />
  </svg>
);
const IconTool = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3 2.7-2.7Z" />
  </svg>
);

const TABS = [
  { id: "library", label: "Library", Icon: IconBook },
  { id: "quiz", label: "Quiz", Icon: IconQuiz },
];
if (import.meta.env.DEV) TABS.push({ id: "dev", label: "Dev", Icon: IconTool });

export default function App() {
  const [tab, setTab] = useState("library");
  const [nav, setNav] = useState({ library: NAV0, quiz: NAV0 });
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === "true"; } catch { return false; }
  });
  const mainRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(DARK_KEY, String(dark)); } catch {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // jump back to the top whenever the screen changes
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [tab, nav.library.subjectId, nav.library.topicId, nav.quiz.subjectId, nav.quiz.topicId]);

  const navSetter = (which) => (n) => setNav((p) => ({ ...p, [which]: n }));

  return (
    <div className="flex h-[100dvh] flex-col bg-parchment dark:bg-navy-950">
      <header className="safe-top flex-shrink-0 border-b border-parchment-200 bg-parchment-50/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95">
        <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2">
          <h1 className="min-w-0 flex-1 truncate text-base font-bold text-navy-900 dark:text-parchment-50">CSE Reviewer</h1>
          {IS_DEV && (
            <span className="rounded-md bg-purple-100 px-1.5 py-0.5 text-[11px] font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">DEV</span>
          )}
          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-full border border-parchment-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-navy-700 dark:text-slate-300"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {tab === "library" && <LibraryBrowser nav={nav.library} setNav={navSetter("library")} />}
        {tab === "quiz" && <QuizBrowser nav={nav.quiz} setNav={navSetter("quiz")} />}
        {IS_DEV && DevPanel && tab === "dev" && (
          <Suspense fallback={<p className="p-6 text-center text-sm text-slate-400">Loading…</p>}>
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
                className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-semibold ${
                  active ? "text-navy-900 dark:text-gold-400" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                <Icon className="h-6 w-6" />
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
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
import App from "./App";

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
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
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

