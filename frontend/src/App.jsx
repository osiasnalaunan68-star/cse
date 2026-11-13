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
