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
