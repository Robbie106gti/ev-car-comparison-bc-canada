import { useState } from "react";
import {
  calculateMonthlyPayment,
  formatCad,
  loanTermMonths,
} from "../utils/finance";

const TERMS = [
  { months: 36, label: "3 yr" },
  { months: 48, label: "4 yr" },
  { months: 60, label: "5 yr" },
  { months: 72, label: "6 yr" },
  { months: 84, label: "7 yr" },
];

const DEFAULT_APRS = {
  36: 4.49,
  48: 4.49,
  60: 4.99,
  72: 5.49,
  84: 5.99,
};

export default function FinanceCalculator({ car, financeAssumptions }) {
  const { downPayment: down, tradeIn: trade, loanTermYears } = financeAssumptions;
  const [customApr, setCustomApr] = useState(null);

  const baseApr = car?.apr != null ? car.apr : null;
  const basePrice = car?.totalAfterIncentives || car?.msrp || 50000;
  const preferredMonths = loanTermMonths(loanTermYears);

  const rows = TERMS.map(({ months, label }) => {
    const apr = customApr != null ? customApr : (baseApr != null ? baseApr : DEFAULT_APRS[months]);
    const financed = Math.max(0, basePrice - down - trade);
    const monthly = calculateMonthlyPayment(basePrice, apr, months, down, trade);
    const totalPaid = monthly * months + Number(down);
    const totalInterest = totalPaid - (basePrice - Number(trade));

    return { months, label, apr, financed, monthly, totalPaid, totalInterest };
  });

  const fmt = formatCad;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
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
        <p className="text-zinc-600 text-xs mt-1">
          Down {fmt(down)} · Trade {fmt(trade)} — adjust in header panel
        </p>
      </div>

      <div className="px-5 py-4 border-b border-zinc-800">
        <label className="text-zinc-500 text-xs uppercase tracking-wider block mb-1.5">
          Interest Rate (APR)
          {baseApr != null && customApr == null && (
            <span className="ml-1 text-emerald-400 normal-case">· using {baseApr}% confirmed</span>
          )}
        </label>
        <div className="relative max-w-xs">
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
            {rows.map((row) => {
              const isPreferred = row.months === preferredMonths;
              const isBestMonthly = row.months === 84;
              const isBestTotal = row.months === 36;
              return (
                <tr key={row.months}
                  className={`border-b border-zinc-800/60 transition-colors
                    ${isPreferred ? "bg-emerald-950/30" : "hover:bg-zinc-800/30"}`}>
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-white">{row.label}</span>
                    <span className="text-zinc-600 text-xs ml-1">({row.months}mo)</span>
                    {isPreferred && (
                      <span className="ml-2 text-xs bg-emerald-900 text-emerald-400 px-1.5 py-0.5 rounded-full">your term</span>
                    )}
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
