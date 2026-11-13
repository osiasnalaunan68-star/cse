import { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { listLibrarySubjects, getLibraryTopic } from "../contentStore";
import { AI_NAME, AI_APPS, copyPromptAndOpen } from "../aiApps";
import { IS_DEV } from "../env";
import { Crumb, ListRow, IconBadge, EmptyState } from "../components/NavParts";

const MODE_KEY = "cseReviewer_readMode";
const FONT_KEY = "cseReviewer_fontScale";
const INDENT = ["ml-0", "ml-4", "ml-8", "ml-12", "ml-16"];
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
        {para.label && (
          <span className={`flex-shrink-0 select-none font-semibold tabular-nums text-slate-500 dark:text-slate-400 ${reading ? "font-display leading-loose" : "leading-relaxed"}`}>
            {para.label}
          </span>
        )}
        <p className={`min-w-0 flex-1 select-text whitespace-pre-wrap text-navy-900 dark:text-slate-300 ${reading ? "font-display leading-loose" : "leading-relaxed"}`}>
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
