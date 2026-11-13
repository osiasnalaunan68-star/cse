// Small shared pieces for the Library + Quiz list screens.

export function Crumb({ onBack, title, subtitle }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <button
        onClick={onBack}
        className="flex-shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 active:bg-parchment-200/60 dark:text-slate-300 dark:active:bg-navy-800"
      >
        &larr; Back
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-base font-bold text-navy-900 dark:text-parchment-50">{title}</p>
        {subtitle && <p className="truncate text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}

export function ListRow({ left, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-lg border border-parchment-200 bg-parchment-50 p-4 text-left active:bg-parchment dark:border-navy-700 dark:bg-navy-800 dark:active:bg-navy-700/50"
    >
      {left}
      <div className="min-w-0 flex-1">
        <p className="font-bold leading-snug text-navy-900 dark:text-parchment-50">{title}</p>
        {subtitle && <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{subtitle}</p>}
      </div>
      <span className="text-xl text-slate-300 dark:text-slate-600" aria-hidden>&rsaquo;</span>
    </button>
  );
}

export function IconBadge({ icon }) {
  return (
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-parchment-200 bg-parchment text-xl dark:border-navy-700 dark:bg-navy-900/40" aria-hidden>
      {icon || "📘"}
    </span>
  );
}

export function EmptyState({ icon, title, hint }) {
  return (
    <div className="mt-10 flex flex-col items-center gap-2 px-6 text-center text-slate-400 dark:text-slate-500">
      <span className="text-4xl" aria-hidden>{icon}</span>
      <p className="text-base font-medium text-slate-500 dark:text-slate-400">{title}</p>
      {hint && <p className="text-sm">{hint}</p>}
    </div>
  );
}
