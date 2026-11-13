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
