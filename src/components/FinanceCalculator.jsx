import { useState } from "react";

const TERMS = [
  { months: 36, label: "3 yr" },
  { months: 48, label: "4 yr" },
  { months: 60, label: "5 yr" },
  { months: 72, label: "6 yr" },
  { months: 84, label: "7 yr" },
];

// Typical market APRs by term (conservative estimates for Canada 2026)
const DEFAULT_APRS = {
  36: 4.49,
  48: 4.49,
  60: 4.99,
  72: 5.49,
  84: 5.99,
};

function calcMonthly(principal, annualRate, months) {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return principal * r / (1 - Math.pow(1 + r, -months));
}

function calcTotalCost(monthly, months, down, trade) {
  return monthly * months + down;
}

export default function FinanceCalculator({ car }) {
  const [down, setDown] = useState(5000);
  const [trade, setTrade] = useState(8000);
  const [customApr, setCustomApr] = useState(null);

  // Use car's confirmed APR if available, otherwise market defaults
  const baseApr = car?.apr != null ? car.apr : null;

  // Total financed = total price - down - trade
  // For cars with confirmed totals, use that; otherwise estimate from MSRP
  const basePrice = car?.totalAfterIncentives || car?.msrp || 50000;

  const rows = TERMS.map(({ months, label }) => {
    const apr = customApr != null ? customApr : (baseApr != null ? baseApr : DEFAULT_APRS[months]);
    const financed = Math.max(0, basePrice - down - trade);
    const monthly = calcMonthly(financed, apr, months);
    const totalPaid = monthly * months + Number(down);
    const totalInterest = totalPaid - (basePrice - Number(trade));

    return { months, label, apr, financed, monthly, totalPaid, totalInterest };
  });

  const fmt = (n) => `$${Math.round(n).toLocaleString()}`;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-zinc-800">
        <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
          Finance Calculator
        </h3>
        {car && (
          <p className="text-zinc-500 text-sm mt-0.5">
            {car.make} {car.model} {car.trim}
            {car.dataConfirmed && <span className="ml-2 text-emerald-400 text-xs">✓ confirmed price</span>}
          </p>
        )}
      </div>

      {/* Inputs */}
      <div className="px-5 py-4 border-b border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Down payment */}
        <div>
          <label className="text-zinc-500 text-xs uppercase tracking-wider block mb-1.5">Down Payment</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
            <input
              type="number" min={0} max={50000} step={500}
              value={down}
              onChange={e => setDown(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-7 pr-3 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
          <input type="range" min={0} max={20000} step={500} value={down}
            onChange={e => setDown(Number(e.target.value))}
            className="w-full mt-2 accent-emerald-400" />
        </div>

        {/* Trade-in */}
        <div>
          <label className="text-zinc-500 text-xs uppercase tracking-wider block mb-1.5">Trade-In Value</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
            <input
              type="number" min={0} max={50000} step={500}
              value={trade}
              onChange={e => setTrade(Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-7 pr-3 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
          <input type="range" min={0} max={30000} step={500} value={trade}
            onChange={e => setTrade(Number(e.target.value))}
            className="w-full mt-2 accent-emerald-400" />
        </div>

        {/* APR override */}
        <div>
          <label className="text-zinc-500 text-xs uppercase tracking-wider block mb-1.5">
            Interest Rate (APR)
            {baseApr != null && customApr == null && (
              <span className="ml-1 text-emerald-400 normal-case">· using {baseApr}% confirmed</span>
            )}
          </label>
          <div className="relative">
            <input
              type="number" min={0} max={20} step={0.1}
              value={customApr != null ? customApr : (baseApr != null ? baseApr : "")}
              placeholder={baseApr != null ? `${baseApr}% (confirmed)` : "market rate"}
              onChange={e => setCustomApr(e.target.value === "" ? null : Number(e.target.value))}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">%</span>
          </div>
          {customApr != null && (
            <button onClick={() => setCustomApr(null)}
              className="text-xs text-zinc-500 hover:text-zinc-300 mt-1.5 underline">
              Reset to {baseApr != null ? "confirmed rate" : "market defaults"}
            </button>
          )}
        </div>
      </div>

      {/* Summary strip */}
      <div className="px-5 py-3 bg-zinc-800/50 border-b border-zinc-800 flex flex-wrap gap-4 text-sm">
        <div>
          <span className="text-zinc-500">Base price </span>
          <span className="text-white font-medium">{fmt(basePrice)}</span>
          {!car?.dataConfirmed && <span className="text-zinc-600 text-xs ml-1">(estimated)</span>}
        </div>
        <div>
          <span className="text-zinc-500">Down </span>
          <span className="text-white font-medium">{fmt(down)}</span>
        </div>
        <div>
          <span className="text-zinc-500">Trade </span>
          <span className="text-white font-medium">{fmt(trade)}</span>
        </div>
        <div>
          <span className="text-zinc-500">Amount financed </span>
          <span className="text-emerald-400 font-semibold">{fmt(Math.max(0, basePrice - down - trade))}</span>
        </div>
      </div>

      {/* Terms table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left px-5 py-3 text-zinc-500 font-medium text-xs uppercase tracking-wider">Term</th>
              <th className="text-right px-4 py-3 text-zinc-500 font-medium text-xs uppercase tracking-wider">APR</th>
              <th className="text-right px-4 py-3 text-zinc-500 font-medium text-xs uppercase tracking-wider">Monthly</th>
              <th className="text-right px-4 py-3 text-zinc-500 font-medium text-xs uppercase tracking-wider">Total Paid</th>
              <th className="text-right px-5 py-3 text-zinc-500 font-medium text-xs uppercase tracking-wider">Interest</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isDefault = row.months === 60;
              const isBestMonthly = row.months === 84;
              const isBestTotal = row.months === 36;
              return (
                <tr key={row.months}
                  className={`border-b border-zinc-800/60 transition-colors
                    ${isDefault ? "bg-emerald-950/30" : "hover:bg-zinc-800/30"}`}>
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-white">{row.label}</span>
                    <span className="text-zinc-600 text-xs ml-1">({row.months}mo)</span>
                    {isDefault && <span className="ml-2 text-xs bg-emerald-900 text-emerald-400 px-1.5 py-0.5 rounded-full">default</span>}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className={row.apr === 0 ? "text-emerald-400 font-semibold" : "text-zinc-300"}>
                      {row.apr === 0 ? "0% 🎉" : `${row.apr}%`}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className={`font-bold ${isBestMonthly ? "text-emerald-400" : "text-white"}`}>
                      {fmt(row.monthly)}
                    </span>
                    {isBestMonthly && <span className="text-xs text-zinc-600 block">lowest/mo</span>}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className={`font-medium ${isBestTotal ? "text-emerald-400" : "text-zinc-300"}`}>
                      {fmt(row.totalPaid)}
                    </span>
                    {isBestTotal && <span className="text-xs text-zinc-600 block">least total</span>}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span className={row.totalInterest <= 0 ? "text-emerald-400" : "text-amber-400/80"}>
                      {row.totalInterest <= 100 ? "—" : fmt(row.totalInterest)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 text-xs text-zinc-600 border-t border-zinc-800">
        Estimates only. APR varies by lender and credit score. Confirmed rates shown where available from manufacturer build tools.
        Tax, license, and insurance not included.
      </div>
    </div>
  );
}
