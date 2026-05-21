const pill = "px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer select-none";
const active = "bg-emerald-500 text-black";
const inactive = "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200";

export default function FilterBar({ filters, setFilters, makes, drivetrains }) {
  const set = (key, val) => setFilters(f => ({ ...f, [key]: val }));
  const toggle = (key) => setFilters(f => ({ ...f, [key]: !f[key] }));

  return (
    <div className="space-y-4 py-4">
      {/* Sort */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-zinc-600 text-xs uppercase tracking-wider w-16">Sort</span>
        {[
          { val: "monthly", label: "Monthly ↑" },
          { val: "range", label: "Range ↓" },
          { val: "msrp", label: "MSRP ↑" },
          { val: "apr", label: "Rate ↑" },
        ].map(s => (
          <button key={s.val} onClick={() => set("sortBy", s.val)}
            className={`${pill} ${filters.sortBy === s.val ? active : inactive}`}>
            {s.label}
          </button>
        ))}
      </div>

      {/* Make */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-zinc-600 text-xs uppercase tracking-wider w-16">Make</span>
        {["All", ...makes].map(m => (
          <button key={m} onClick={() => set("make", m)}
            className={`${pill} ${filters.make === m ? active : inactive}`}>
            {m}
          </button>
        ))}
      </div>

      {/* Drivetrain */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-zinc-600 text-xs uppercase tracking-wider w-16">Drive</span>
        {["All", ...drivetrains].map(d => (
          <button key={d} onClick={() => set("drivetrain", d)}
            className={`${pill} ${filters.drivetrain === d ? active : inactive}`}>
            {d}
          </button>
        ))}
      </div>

      {/* Toggles + Slider */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="text-zinc-600 text-xs uppercase tracking-wider w-16">Filter</span>
        {[
          { key: "sunroof", label: "☀ Sunroof" },
          { key: "heatedSeats", label: "🔥 Heated seats" },
          { key: "ventilatedSeats", label: "❄ Ventilated" },
          { key: "heatedSteeringWheel", label: "◎ Heated wheel" },
          { key: "rebateOnly", label: "$ Rebate eligible" },
          { key: "confirmedOnly", label: "✓ Confirmed prices" },
        ].map(t => (
          <button key={t.key} onClick={() => toggle(t.key)}
            className={`${pill} ${filters[t.key] ? active : inactive}`}>
            {t.label}
          </button>
        ))}

        <div className="flex items-center gap-3 ml-2">
          <span className="text-zinc-500 text-xs">Max/mo</span>
          <input type="range" min={400} max={1500} step={50}
            value={filters.maxMonthly}
            onChange={e => set("maxMonthly", Number(e.target.value))}
            className="w-28 accent-emerald-400" />
          <span className="text-zinc-300 text-sm font-medium w-16">
            {filters.maxMonthly >= 1500 ? "Any" : `$${filters.maxMonthly}`}
          </span>
        </div>
      </div>
    </div>
  );
}
