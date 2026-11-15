import { useState } from "react";
import { useUpdateAvailable, applyUpdate } from "../updateCheck";

export default function UpdateBanner() {
  const available = useUpdateAvailable();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  if (!available) return null;

  const run = async () => {
    setBusy(true);
    setFailed(false);
    const ok = await applyUpdate();
    if (ok === false) { setBusy(false); setFailed(true); }
  };

  return (
    <div className="flex-shrink-0 border-b border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40">
      <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-amber-900 dark:text-amber-200">🆕 New version available</p>
          <p className="text-xs text-amber-800/80 dark:text-amber-300/80">
            {failed ? "Connect to the internet to update." : "May bagong questions at fixes."}
          </p>
        </div>
        <button
          onClick={run}
          disabled={busy}
          className="flex-shrink-0 rounded-lg bg-navy-900 px-4 py-2 text-sm font-bold text-white active:bg-navy-800 disabled:opacity-60 dark:bg-gold-500 dark:text-navy-900"
        >
          {busy ? "Updating…" : "Update now"}
        </button>
      </div>
    </div>
  );
}
