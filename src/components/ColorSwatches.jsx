import { useState } from "react";

export default function ColorSwatches({ colors, compact = false }) {
  const [active, setActive] = useState(null);

  if (!colors?.length) {
    return (
      <p className="text-zinc-600 text-xs italic">Colors — check build tool</p>
    );
  }

  const shown = active ?? null;

  return (
    <div className={compact ? "space-y-1" : "space-y-1.5"}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
          {colors.length} colour{colors.length !== 1 ? "s" : ""}
        </p>
        {shown && (
          <p className="text-zinc-300 text-xs truncate max-w-[55%]" title={shown}>
            {shown}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {colors.map((c) => (
          <button
            key={c.name}
            type="button"
            title={c.name}
            onMouseEnter={() => setActive(c.name)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(c.name)}
            onBlur={() => setActive(null)}
            className="group relative w-6 h-6 rounded-full border-2 border-zinc-700 hover:border-zinc-400 focus:border-emerald-500 focus:outline-none transition-colors shadow-inner shrink-0"
            style={{ backgroundColor: c.hex }}
            aria-label={c.name}
          >
            <span
              className={`absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity z-10 ${compact ? "hidden sm:block" : ""}`}
            >
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
