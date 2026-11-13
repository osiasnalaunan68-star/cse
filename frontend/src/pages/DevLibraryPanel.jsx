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
