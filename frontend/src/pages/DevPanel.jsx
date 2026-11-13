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
