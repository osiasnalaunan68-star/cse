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
import { useState, useEffect, useMemo } from "react";
import { SUBJECTS } from "./data/subjects";
import { getSubjectStats } from "./subjectQuizStore";
import { ProgressCircle } from "./components/QuizShared";
import SubjectDashboard from "./pages/SubjectDashboard";
import SubjectQuizPanel from "./pages/SubjectQuizPanel";

const DARK_KEY = "cseReviewer_darkMode";

function SubjectRow({ subject, onOpen }) {
  const stats = useMemo(() => getSubjectStats(subject.id), [subject.id]);
  return (
    <button
      onClick={() => onOpen(subject)}
      className="flex w-full items-center gap-3 rounded-lg border border-parchment-200 bg-parchment-50 p-4 text-left active:bg-parchment dark:border-navy-700 dark:bg-navy-800 dark:active:bg-navy-700/50"
    >
      <ProgressCircle progress={stats.percentAnswered} size={44} strokeWidth={5} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-bold text-navy-900 dark:text-parchment-50">{subject.label}</p>
        <p className="truncate text-xs text-slate-400 dark:text-slate-500">
          {stats.total > 0 ? `${stats.answeredCount}/${stats.total} answered` : "No questions yet"}
        </p>
      </div>
      <span className="text-xl text-slate-300 dark:text-slate-600" aria-hidden>&rsaquo;</span>
    </button>
  );
}

function SubjectScreen({ subject }) {
  const [tab, setTab] = useState("practice");
  const tabButton = (id, label) => (
    <button
      key={id}
      onClick={() => setTab(id)}
      className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
        tab === id
          ? "bg-navy-900 text-white dark:bg-navy-700"
          : "text-slate-500 dark:text-slate-400"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="mb-3 flex gap-1 rounded-lg border border-parchment-200 bg-parchment-50 p-1 dark:border-navy-700 dark:bg-navy-800">
        {tabButton("practice", "Practice")}
        {tabButton("import", "Import")}
      </div>
      {tab === "practice" ? (
        <SubjectDashboard subjectId={subject.id} subjectLabel={subject.label} />
      ) : (
        <SubjectQuizPanel subjectId={subject.id} subjectLabel={subject.label} />
      )}
    </div>
  );
}

export default function App() {
  const [subject, setSubject] = useState(null);
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === "true"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem(DARK_KEY, String(dark)); } catch {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-parchment dark:bg-navy-950">
      <header className="safe-top sticky top-0 z-10 border-b border-parchment-200 bg-parchment-50/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95">
        <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2">
          {subject && (
            <button
              onClick={() => setSubject(null)}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 active:bg-parchment dark:text-slate-300 dark:active:bg-navy-800"
            >
              &larr; Back
            </button>
          )}
          <h1 className="min-w-0 flex-1 truncate text-base font-bold text-navy-900 dark:text-parchment-50">
            {subject ? subject.label : "CSE Reviewer"}
          </h1>
          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-full border border-parchment-200 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-navy-700 dark:text-slate-300"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {subject ? (
        <SubjectScreen key={subject.id} subject={subject} />
      ) : (
        <main className="mx-auto max-w-2xl space-y-3 p-4">
          {SUBJECTS.map((s) => (
            <SubjectRow key={s.id} subject={s} onOpen={setSubject} />
          ))}
        </main>
      )}
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

## File: ./frontend/src/data/subjects.js
```
// List of subjects shown in the Quiz hub.
// To add a subject: add a line here, then put its questions in
// data/defaultQuizzes/<id>.json (flat format — see subjectQuizStore.js).

export const SUBJECTS = [
  { id: "cse", label: "CSE Reviewer" },
];

export function getSubjectById(id) {
  return SUBJECTS.find((s) => s.id === id) || null;
}
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
import { seedDefaultQuizzes } from "./subjectQuizStore";

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

// Load data/defaultQuizzes/*.json into localStorage on first run.
seedDefaultQuizzes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
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
          <p className="rounded-lg bg-parchment p-3 text-sm text-slate-400 dark:bg-navy-900/40 dark:text-slate-500">Import {subjectLabel} questions in the Import tab first.</p>
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

## File: ./frontend/src/pages/SubjectQuizPanel.jsx
```
import { useState, useEffect, useCallback } from "react";
import {
  getAllBatches, getBatchEntries, importSubjectQuizJson,
  renameBatch, deleteBatch, getExportAllJson,
  saveRawEntries, clearAllImports, getImportedCount,
} from "../subjectQuizStore";

function BatchCard({ subjectId, batch, onChanged }) {
  const [open, setOpen] = useState(false);
  const entries = open ? getBatchEntries(subjectId, batch.id) : [];

  const handleDelete = () => {
    if (confirm(`Delete the "${batch.label}" batch (${batch.itemIds.length} items)?`)) {
      deleteBatch(subjectId, batch.id);
      onChanged();
    }
  };
  const handleRename = () => {
    const next = prompt("Rename this batch:", batch.label);
    if (next !== null) { renameBatch(subjectId, batch.id, next); onChanged(); }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-card dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-2 flex items-center justify-between gap-2">
        <button onClick={() => setOpen((v) => !v)} className="min-w-0 flex-1 text-left">
          <p className="truncate font-semibold text-navy-900 dark:text-slate-100">{open ? "▾" : "▸"} {batch.label}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">{batch.itemIds.length} items · {new Date(batch.importedAt).toLocaleString()}</p>
        </button>
        <div className="flex flex-shrink-0 gap-2">
          <button onClick={handleRename} className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-600 dark:text-slate-300">✏️</button>
          <button onClick={handleDelete} className="rounded-lg border border-red-200 px-2.5 py-1 text-xs font-medium text-red-600 dark:border-red-800 dark:text-red-400">Delete</button>
        </div>
      </div>
      {open && (
        <div className="space-y-2">
          {entries.map((e) => (
            <div key={e.id} className="rounded-lg bg-slate-50 p-2.5 text-sm dark:bg-slate-900/40">
              <p className="font-semibold text-slate-700 dark:text-slate-200">#{e.id}: {e.question}</p>
              {e.choices && (
                <ul className="mt-1 space-y-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {Object.entries(e.choices).map(([k, v]) => (
                    <li key={k} className={k === e.correct ? "font-semibold text-emerald-600 dark:text-emerald-400" : ""}>{k}. {v}</li>
                  ))}
                </ul>
              )}
              {!e.choices && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Answer: {e.correct}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ImportForm({ subjectId, subjectLabel, onImported }) {
  const [json, setJson] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleImport = () => {
    setError(null); setSuccess(null);
    try {
      const { count, label } = importSubjectQuizJson(subjectId, json);
      setSuccess(`✓ Imported. "${label}" batch saved — ${count} total items now for ${subjectLabel}.`);
      setJson("");
      onImported();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="rounded-xl border border-navy-200 bg-white p-3 shadow-card dark:border-navy-700 dark:bg-slate-800">
      <p className="mb-1 text-sm font-semibold text-navy-900 dark:text-slate-100">📥 Import {subjectLabel} Quiz JSON</p>
      <p className="mb-2 text-xs text-slate-400 dark:text-slate-500">
        Flat format, no levels — one entry per item number. Optional "_batch" label to
        group this import (same "_batch" name = merges, no duplicates).
      </p>
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder={`{\n  "_batch": "Items 1-10",\n  "1": { "question": "...", "choices": {"A":"...","B":"...","C":"..."}, "correct": "A", "reason": "..." }\n}`}
        rows={9}
        style={{ fontSize: "16px" }}
        className="w-full rounded-lg border border-slate-200 bg-white p-2 font-mono text-xs dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
      />
      {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {success && <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{success}</p>}
      <button onClick={handleImport} disabled={!json.trim()} className="mt-2 w-full rounded-lg bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40 dark:bg-navy-700">Import</button>
    </div>
  );
}

function RawEditor({ subjectId, onChanged }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  const openEditor = () => { setText(getExportAllJson(subjectId)); setOpen(true); setError(null); };
  const handleSave = () => {
    try {
      saveRawEntries(subjectId, text);
      setError(null); setSaved(true);
      onChanged();
      setTimeout(() => setSaved(false), 2000);
    } catch (e) { setError(e.message); }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-card dark:border-slate-700 dark:bg-slate-800">
      <button onClick={() => (open ? setOpen(false) : openEditor())} className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        🔧 {open ? "Hide" : "Edit"} Raw Quiz JSON (advanced, all imported items)
      </button>
      {open && (
        <div className="mt-2">
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} style={{ fontSize: "13px" }} className="w-full rounded-lg border border-slate-200 bg-white p-2 font-mono text-xs dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          {saved && <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">✓ Saved.</p>}
          <button onClick={handleSave} className="mt-2 rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-semibold text-white">Save Raw JSON</button>
        </div>
      )}
    </div>
  );
}

export default function SubjectQuizPanel({ subjectId, subjectLabel }) {
  const [batches, setBatches] = useState([]);
  const [downloaded, setDownloaded] = useState(false);

  const refresh = useCallback(() => setBatches(getAllBatches(subjectId)), [subjectId]);
  useEffect(() => { refresh(); }, [refresh]);

  const handleExportAll = () => {
    const json = getExportAllJson(subjectId);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 10);
    const a = document.createElement("a");
    a.href = url;
    a.download = `quiz-${subjectId}-export-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  const handleClearAll = () => {
    if (confirm(`Delete ALL ${getImportedCount(subjectId)} imported ${subjectLabel} items? This cannot be undone.`)) {
      clearAllImports(subjectId);
      refresh();
    }
  };

  return (
    <div className="space-y-4">
      <ImportForm subjectId={subjectId} subjectLabel={subjectLabel} onImported={refresh} />

      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-card dark:border-slate-700 dark:bg-slate-800">
        <p className="mb-2 text-sm font-semibold text-slate-800 dark:text-slate-100">📦 All Imported {subjectLabel} Items ({getImportedCount(subjectId)})</p>
        <div className="flex flex-wrap gap-2">
          <button onClick={handleExportAll} className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">⬇️ Export All (download)</button>
          <button onClick={handleClearAll} className="flex-1 rounded-lg border border-red-300 px-3 py-2 text-sm font-semibold text-red-600 dark:border-red-800 dark:text-red-400">🗑 Delete All</button>
        </div>
        {downloaded && <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">✓ Downloaded JSON file.</p>}
      </div>

      <RawEditor subjectId={subjectId} onChanged={refresh} />

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">Imported Batches</p>
        {batches.length === 0 && <p className="text-sm italic text-slate-400 dark:text-slate-600">No imported batches yet for {subjectLabel}.</p>}
        {batches.map((b) => <BatchCard key={b.id} subjectId={subjectId} batch={b} onChanged={refresh} />)}
      </div>
    </div>
  );
}
```

## File: ./frontend/src/subjectQuizStore.js
```
// Per-subject quiz storage. Each subject has its own localStorage key.
//
// Content format (flat — no titles, no levels):
//   {
//     "_batch": "Items 1-10",   // optional label for this import
//     "1": { "question": "...", "choices": {"A":"...","B":"...","C":"..."}, "correct": "A", "reason": "..." },
//     "2": { ... }
//   }
//
// No limit on batches/items. Re-using the same "_batch" label merges into
// that batch; a different label creates a new one.

function contentKey(subjectId) {
  return `cseReviewer_quiz_${subjectId}`;
}
function progressKey(subjectId) {
  return `cseReviewer_progress_${subjectId}`;
}

function emptyStore() {
  return { batches: {}, entries: {} };
}

function loadStore(subjectId) {
  try {
    const raw = localStorage.getItem(contentKey(subjectId));
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw);
    return { batches: parsed.batches || {}, entries: parsed.entries || {} };
  } catch {
    return emptyStore();
  }
}

function saveStore(subjectId, store) {
  localStorage.setItem(contentKey(subjectId), JSON.stringify(store));
}

function normalizeLabel(label) {
  return String(label || "").trim().toLowerCase();
}

function numericSort(a, b) {
  const na = parseFloat(a);
  const nb = parseFloat(b);
  if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
}

export function getAllEntries(subjectId) {
  return loadStore(subjectId).entries;
}

export function getSortedItemIds(subjectId) {
  const entries = getAllEntries(subjectId);
  return Object.keys(entries).sort(numericSort);
}

export function getAllBatches(subjectId) {
  const store = loadStore(subjectId);
  return Object.values(store.batches).sort((a, b) => b.importedAt.localeCompare(a.importedAt));
}

export function getBatchEntries(subjectId, batchId) {
  const store = loadStore(subjectId);
  const batch = store.batches[batchId];
  if (!batch) return [];
  return batch.itemIds.map((id) => ({ id, ...(store.entries[id] || {}) }));
}

export function getImportedCount(subjectId) {
  return Object.keys(loadStore(subjectId).entries).length;
}

// Mag-import ng isang flat batch para sa isang subject. Returns { count, label, skipped }.
export function importSubjectQuizJson(subjectId, jsonText) {
  const parsed = JSON.parse(jsonText);
  const rawLabel = parsed._batch;
  if (parsed._batch !== undefined) delete parsed._batch;
  if (parsed._title !== undefined) delete parsed._title; // fallback kung "_title" ang nagamit mo dati

  // Huwag ibagsak ang BUONG batch dahil lang sa iilang sirang item —
  // i-skip na lang ang mga invalid, at ituloy ang pag-import ng mga valid.
  const skipped = [];
  for (const id of Object.keys(parsed)) {
    const item = parsed[id];
    const invalid =
      !item || typeof item !== "object" ||
      !item.question || typeof item.question !== "string" || !item.question.trim() ||
      !item.correct || typeof item.correct !== "string" || !item.correct.trim();
    if (invalid) {
      skipped.push(id);
      delete parsed[id];
    }
  }

  const ids = Object.keys(parsed);
  if (!ids.length) {
    throw new Error(
      skipped.length
        ? `Nothing imported: all ${skipped.length} items are missing a "question" or "correct" answer (IDs: ${skipped.slice(0, 10).join(", ")}${skipped.length > 10 ? "…" : ""}).`
        : "The pasted JSON is empty."
    );
  }

  const store = loadStore(subjectId);

  let existingBatchId = null;
  const label = (rawLabel && String(rawLabel).trim()) || null;
  if (label) {
    const normalized = normalizeLabel(label);
    for (const [bId, batch] of Object.entries(store.batches)) {
      if (normalizeLabel(batch.label) === normalized) { existingBatchId = bId; break; }
    }
  }

  for (const id of ids) {
    const existing = store.entries[id];
    store.entries[id] = existing ? { ...existing, ...parsed[id] } : parsed[id];
  }

  if (existingBatchId) {
    const batch = store.batches[existingBatchId];
    const existingIds = new Set(batch.itemIds);
    for (const id of ids) { if (!existingIds.has(id)) batch.itemIds.push(id); }
    batch.importedAt = new Date().toISOString();
  } else {
    const sorted = [...ids].sort(numericSort);
    const batchId = `sb_${Date.now()}`;
    const fallback = `Items ${sorted[0]}–${sorted[sorted.length - 1]}`;
    store.batches[batchId] = {
      id: batchId,
      label: label || fallback,
      importedAt: new Date().toISOString(),
      itemIds: ids,
    };
  }

  saveStore(subjectId, store);
  if (skipped.length) {
    console.warn(`[${subjectId}] Skipped ${skipped.length} invalid item(s) during import:`, skipped);
  }
  return { count: Object.keys(store.entries).length, label: label || "New batch", skipped };
}

export function renameBatch(subjectId, batchId, newLabel) {
  const store = loadStore(subjectId);
  if (!store.batches[batchId]) return;
  const trimmed = newLabel.trim();
  if (trimmed) store.batches[batchId].label = trimmed;
  saveStore(subjectId, store);
}

export function deleteBatch(subjectId, batchId) {
  const store = loadStore(subjectId);
  const batch = store.batches[batchId];
  if (!batch) return;
  for (const id of batch.itemIds) {
    let usedElsewhere = false;
    for (const [bId, b] of Object.entries(store.batches)) {
      if (bId !== batchId && b.itemIds.includes(id)) { usedElsewhere = true; break; }
    }
    if (!usedElsewhere) delete store.entries[id];
  }
  delete store.batches[batchId];
  saveStore(subjectId, store);
}

export function getExportAllJson(subjectId) {
  return JSON.stringify(getAllEntries(subjectId), null, 2);
}

export function saveRawEntries(subjectId, jsonText) {
  const parsed = JSON.parse(jsonText);
  const store = loadStore(subjectId);
  for (const id of Object.keys(parsed)) {
    const existing = store.entries[id];
    store.entries[id] = existing ? { ...existing, ...parsed[id] } : parsed[id];
  }
  saveStore(subjectId, store);
}

export function clearAllImports(subjectId) {
  saveStore(subjectId, emptyStore());
}

// ---------- Progress (resume kung saan huling nag-stop) ----------

export function getSubjectProgress(subjectId) {
  try {
    const raw = localStorage.getItem(progressKey(subjectId));
    if (!raw) return { answers: {}, currentIndex: 0 };
    const parsed = JSON.parse(raw);
    return { answers: parsed.answers || {}, currentIndex: parsed.currentIndex || 0 };
  } catch {
    return { answers: {}, currentIndex: 0 };
  }
}

export function saveSubjectProgress(subjectId, progress) {
  try {
    const payload = { ...progress, updatedAt: new Date().toISOString() };
    localStorage.setItem(progressKey(subjectId), JSON.stringify(payload));
  } catch {}
}

export function resetSubjectProgress(subjectId) {
  localStorage.removeItem(progressKey(subjectId));
}

// Stats para sa dalawang progress circle sa dashboard.
export function getSubjectStats(subjectId) {
  const entries = getAllEntries(subjectId);
  const itemIds = Object.keys(entries);
  const total = itemIds.length;
  const progress = getSubjectProgress(subjectId);
  const answeredIds = Object.keys(progress.answers).filter((id) => entries[id]);
  const answeredCount = answeredIds.length;
  const correctCount = answeredIds.filter((id) => progress.answers[id] === entries[id].correct).length;
  return {
    total,
    answeredCount,
    correctCount,
    percentAnswered: total ? (answeredCount / total) * 100 : 0,
    percentCorrect: answeredCount ? (correctCount / answeredCount) * 100 : 0,
  };
}

// ============================================================
// DEFAULT SEED — auto-import every data/defaultQuizzes/<subjectId>.json
// into localStorage when that subject has no questions yet.
// Call seedDefaultQuizzes() once at app start (e.g. in main.jsx).
// ============================================================
const defaultModules = import.meta.glob('./data/defaultQuizzes/*.json', { eager: true });
const defaultDataMap = {};
for (const [path, mod] of Object.entries(defaultModules)) {
  const subjectId = path.split('/').pop().replace('.json', '');
  defaultDataMap[subjectId] = mod.default ?? mod;
}

export function seedDefaultQuizzes() {
  for (const [subjectId, data] of Object.entries(defaultDataMap)) {
    if (!Object.keys(data).length) continue; // empty file — nothing to seed
    if (Object.keys(getAllEntries(subjectId)).length > 0) continue; // already seeded
    try {
      const result = importSubjectQuizJson(subjectId, JSON.stringify(data));
      const skippedNote = result.skipped.length ? `, skipped ${result.skipped.length} invalid: ${result.skipped.join(", ")}` : "";
      console.log(`✅ Seeded ${subjectId} (${result.count} items${skippedNote})`);
    } catch (e) {
      console.warn(`Failed to seed ${subjectId}:`, e);
    }
  }
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

