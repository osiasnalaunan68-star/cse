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
