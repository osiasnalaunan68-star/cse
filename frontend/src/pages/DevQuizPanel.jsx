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
