import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { IS_DEV } from "./env";
import { useAuth } from "./authContext";
import LibraryBrowser from "./pages/LibraryBrowser";
import QuizBrowser from "./pages/QuizBrowser";
import FeesView from "./pages/FeesView";
import SettingsView from "./pages/SettingsView";
import AccountButton from "./components/AccountButton";

const DevPanel = import.meta.env.DEV ? lazy(() => import("./pages/DevPanel")) : null;

const AdminPanel = lazy(() =>
  import("./pages/AdminPanel").catch(() => ({
    default: () => <p className="p-6 text-center text-sm text-slate-500">Couldn't load the Admin Panel. Check your connection and try again.</p>,
  }))
);

const DARK_KEY = "cseReviewer_darkMode";
const NAV0 = { subjectId: null, topicId: null };

const iconProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

const IconBook = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M2 5.5C4 4 7 4 12 6c5-2 8-2 10-.5V19c-2-1.5-5-1.5-10 .5-5-2-8-2-10-.5V5.5Z" />
    <path d="M12 6v13.5" />
  </svg>
);
const IconQuiz = (p) => (
  <svg {...iconProps} {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 11l1.5 1.5L13 10M9 16h6" />
  </svg>
);
const IconTag = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);
const IconSettings = (p) => (
  <svg {...iconProps} {...p}>
    <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" />
    <line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" />
    <line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);
const IconCrown = (p) => (
  <svg {...iconProps} {...p}>
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M5 20h14" />
  </svg>
);
const IconTool = (p) => (
  <svg {...iconProps} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2.3-.7-.7-2.3 2.7-2.7Z" />
  </svg>
);

const BASE_TABS = [
  { id: "library", label: "Library", Icon: IconBook },
  { id: "quiz", label: "Quiz", Icon: IconQuiz },
  { id: "fees", label: "Fees", Icon: IconTag },
  { id: "settings", label: "Settings", Icon: IconSettings },
];

export default function App() {
  const { profile } = useAuth();
  const isAdmin = !!profile?.isAdmin;
  const [tab, setTab] = useState("library");
  const [nav, setNav] = useState({ library: NAV0, quiz: NAV0 });
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(DARK_KEY) === "true"; } catch { return false; }
  });
  const mainRef = useRef(null);

  const TABS = [...BASE_TABS];
  if (isAdmin) TABS.push({ id: "admin", label: "Admin", Icon: IconCrown });
  if (import.meta.env.DEV) TABS.push({ id: "dev", label: "Dev", Icon: IconTool });

  useEffect(() => {
    try { localStorage.setItem(DARK_KEY, String(dark)); } catch {}
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (tab === "admin" && !isAdmin) setTab("library");
  }, [tab, isAdmin]);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [tab, nav.library.subjectId, nav.library.topicId, nav.quiz.subjectId, nav.quiz.topicId]);

  const navSetter = (which) => (n) => setNav((p) => ({ ...p, [which]: n }));
  const loading = <p className="p-6 text-center text-sm text-slate-400">Loading…</p>;

  return (
    <div className="flex h-[100dvh] flex-col bg-parchment dark:bg-navy-950">
      <header className="safe-top flex-shrink-0 border-b border-parchment-200 bg-parchment-50/95 backdrop-blur dark:border-navy-800 dark:bg-navy-900/95">
        <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2">
          <h1 className="min-w-0 flex-1 truncate text-base font-bold text-navy-900 dark:text-parchment-50">CSE Reviewer</h1>
          {IS_DEV && (
            <span className="rounded-md bg-purple-100 px-1.5 py-0.5 text-[11px] font-semibold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">DEV</span>
          )}
          <AccountButton />
        </div>
      </header>

      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {tab === "library" && <LibraryBrowser nav={nav.library} setNav={navSetter("library")} />}
        {tab === "quiz" && <QuizBrowser nav={nav.quiz} setNav={navSetter("quiz")} />}
        {tab === "fees" && <FeesView />}
        {tab === "settings" && <SettingsView darkMode={dark} setDarkMode={setDark} />}
        {tab === "admin" && isAdmin && (
          <Suspense fallback={loading}>
            <AdminPanel />
          </Suspense>
        )}
        {IS_DEV && DevPanel && tab === "dev" && (
          <Suspense fallback={loading}>
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
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-semibold ${
                  active ? "text-navy-900 dark:text-gold-400" : "text-slate-400 dark:text-slate-500"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="max-w-full truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
