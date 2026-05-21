import { useState, useMemo } from "react";

const pill = "px-2 py-1 rounded-full text-xs font-medium transition-all cursor-pointer select-none";
const active = "bg-emerald-500 text-black";
const inactive = "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200";

const SORT_OPTIONS = [
  { val: "monthly", label: "Monthly ↑" },
  { val: "range", label: "Range ↓" },
  { val: "msrp", label: "MSRP ↑" },
  { val: "apr", label: "Rate ↑" },
];

const COMFORT_FILTERS = [
  { key: "heatedSeats", label: "Heated seats" },
  { key: "ventilatedSeats", label: "Ventilated" },
  { key: "heatedSteeringWheel", label: "Heated wheel" },
  { key: "sunroof", label: "Sunroof" },
];

const SAFETY_FILTERS = [
  { key: "backupCamera", label: "Backup cam" },
  { key: "parkingSensors", label: "Park sensors" },
];

const PRICING_FILTERS = [
  { key: "rebateOnly", label: "Rebate eligible" },
  { key: "confirmedOnly", label: "Confirmed prices" },
];

const SECONDARY_KEYS = [
  ...COMFORT_FILTERS,
  ...SAFETY_FILTERS,
  ...PRICING_FILTERS,
].map((t) => t.key);

export const DEFAULT_FILTERS = {
  make: "All",
  drivetrain: "All",
  sunroof: false,
  heatedSeats: false,
  ventilatedSeats: false,
  heatedSteeringWheel: false,
  backupCamera: false,
  parkingSensors: false,
  rebateOnly: false,
  confirmedOnly: false,
  maxMonthly: 1500,
  sortBy: "monthly",
};

function countSecondaryActive(filters) {
  return SECONDARY_KEYS.filter((k) => filters[k]).length;
}

function hasAnyActiveFilter(filters) {
  return (
    filters.make !== "All" ||
    filters.drivetrain !== "All" ||
    filters.maxMonthly < 1500 ||
    countSecondaryActive(filters) > 0
  );
}

function FilterGroup({ title, items, filters, toggle }) {
  return (
    <div>
      <p className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1.5">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => toggle(t.key)}
            className={`${pill} ${filters[t.key] ? active : inactive}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FilterBar({ filters, setFilters, makes, drivetrains, resultCount }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const set = (key, val) => setFilters((f) => ({ ...f, [key]: val }));
  const toggle = (key) => setFilters((f) => ({ ...f, [key]: !f[key] }));

  const secondaryCount = useMemo(() => countSecondaryActive(filters), [filters]);
  const anyActive = useMemo(() => hasAnyActiveFilter(filters), [filters]);

  const clearAll = () => {
    setFilters({ ...DEFAULT_FILTERS });
    setMoreOpen(false);
  };

  const selectClass =
    "bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm rounded-lg px-2.5 py-1.5 min-w-0 max-w-[11rem] sm:max-w-none focus:outline-none focus:border-emerald-500 cursor-pointer";

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 sm:p-4 space-y-3">
      {/* Primary toolbar: Make · Sort · Drive */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <label className="flex items-center gap-1.5 shrink-0">
          <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Make</span>
          <select
            value={filters.make}
            onChange={(e) => set("make", e.target.value)}
            className={selectClass}
            aria-label="Filter by make"
          >
            <option value="All">All makes</option>
            {makes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <span className="hidden sm:block w-px h-5 bg-zinc-800 shrink-0" aria-hidden />

        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          <span className="text-zinc-600 text-[10px] uppercase tracking-wider shrink-0">Sort</span>
          {SORT_OPTIONS.map((s) => (
            <button
              key={s.val}
              type="button"
              onClick={() => set("sortBy", s.val)}
              className={`${pill} ${filters.sortBy === s.val ? active : inactive}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <span className="hidden sm:block w-px h-5 bg-zinc-800 shrink-0" aria-hidden />

        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          <span className="text-zinc-600 text-[10px] uppercase tracking-wider shrink-0">Drive</span>
          {["All", ...drivetrains].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => set("drivetrain", d)}
              className={`${pill} ${filters.drivetrain === d ? active : inactive}`}
            >
              {d}
            </button>
          ))}
        </div>

        {anyActive && (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto text-xs text-zinc-500 hover:text-emerald-400 transition-colors shrink-0"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Results + max monthly (inline) */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-2 border-t border-zinc-800/60">
        <p className="text-zinc-500 text-sm shrink-0">
          <span className="text-white font-medium">{resultCount}</span> vehicles
          {filters.confirmedOnly && (
            <span className="ml-2 text-emerald-400 text-[10px] uppercase tracking-wider font-medium">
              · confirmed
            </span>
          )}
        </p>
        <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial justify-end sm:justify-start max-w-full">
          <span className="text-zinc-600 text-[10px] uppercase tracking-wider shrink-0">Max/mo</span>
          <input
            type="range"
            min={400}
            max={1500}
            step={50}
            value={filters.maxMonthly}
            onChange={(e) => set("maxMonthly", Number(e.target.value))}
            className="w-20 sm:w-24 h-1 accent-emerald-400 shrink"
            aria-label="Maximum monthly payment"
          />
          <span className="text-zinc-300 text-xs font-medium tabular-nums w-12 shrink-0 text-right">
            {filters.maxMonthly >= 1500 ? "Any" : `$${filters.maxMonthly}`}
          </span>
        </div>
      </div>

      {/* More filters (collapsible) */}
      <div className="border-t border-zinc-800/60 pt-2">
        <button
          type="button"
          onClick={() => setMoreOpen((o) => !o)}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors w-full text-left"
          aria-expanded={moreOpen}
        >
          <span
            className={`text-[10px] transition-transform ${moreOpen ? "rotate-90" : ""}`}
            aria-hidden
          >
            ▶
          </span>
          <span className="font-medium">More filters</span>
          {secondaryCount > 0 && (
            <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
              {secondaryCount}
            </span>
          )}
        </button>

        {moreOpen && (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 pl-4">
            <FilterGroup title="Comfort" items={COMFORT_FILTERS} filters={filters} toggle={toggle} />
            <FilterGroup title="Safety" items={SAFETY_FILTERS} filters={filters} toggle={toggle} />
            <FilterGroup title="Pricing" items={PRICING_FILTERS} filters={filters} toggle={toggle} />
          </div>
        )}
      </div>
    </div>
  );
}
