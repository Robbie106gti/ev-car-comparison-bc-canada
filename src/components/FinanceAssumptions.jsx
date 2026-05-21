import { LOAN_TERM_YEARS } from "../utils/finance";

export default function FinanceAssumptions({ assumptions, onChange }) {
  const { downPayment, tradeIn, loanTermYears } = assumptions;
  const set = (patch) => onChange({ ...assumptions, ...patch });

  const cadInput = (value, onVal, max) => (
    <div className="relative">
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">$</span>
      <input
        type="number"
        min={0}
        max={max}
        step={500}
        value={value}
        onChange={(e) => onVal(Math.max(0, Number(e.target.value) || 0))}
        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-lg pl-5 pr-2 py-1.5 text-white text-xs focus:outline-none focus:border-emerald-500"
      />
    </div>
  );

  return (
    <div
      className="rounded-xl border border-zinc-800 bg-zinc-900/90 backdrop-blur-sm p-3 min-w-[220px] max-w-[280px]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <p className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2">
        Your finance assumptions
      </p>

      <div className="space-y-2.5">
        <div>
          <label className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1">Down</label>
          {cadInput(downPayment, (v) => set({ downPayment: v }), 50000)}
          <input
            type="range"
            min={0}
            max={20000}
            step={500}
            value={downPayment}
            onChange={(e) => set({ downPayment: Number(e.target.value) })}
            className="w-full mt-1 h-1 accent-emerald-400"
          />
        </div>

        <div>
          <label className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1">Trade-in</label>
          {cadInput(tradeIn, (v) => set({ tradeIn: v }), 50000)}
          <input
            type="range"
            min={0}
            max={30000}
            step={500}
            value={tradeIn}
            onChange={(e) => set({ tradeIn: Number(e.target.value) })}
            className="w-full mt-1 h-1 accent-emerald-400"
          />
        </div>

        <div>
          <label className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-1">Term</label>
          <div className="flex flex-wrap gap-1">
            {LOAN_TERM_YEARS.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => set({ loanTermYears: y })}
                className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition-all
                  ${loanTermYears === y ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
              >
                {y}y
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
