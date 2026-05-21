import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FinanceAssumptions from "./FinanceAssumptions";
import { formatCad, getCarEstimatedMonthly } from "../utils/finance";

export default function Hero({
  onViewChange,
  currentView,
  cars,
  filteredCars,
  financeAssumptions,
  onFinanceChange,
}) {
  const [financeOpen, setFinanceOpen] = useState(false);

  const stats = useMemo(() => {
    const confirmed = cars.filter((c) => c.dataConfirmed).length;
    const monthlies = filteredCars
      .map((c) => getCarEstimatedMonthly(c, financeAssumptions))
      .filter((m) => m != null);
    const aprs = cars.map((c) => c.apr).filter((a) => a != null);
    return {
      total: cars.length,
      confirmed,
      lowestMonthly: monthlies.length ? Math.min(...monthlies) : null,
      bestRange: Math.max(...cars.map((c) => c.range)),
      bestApr: aprs.length ? Math.min(...aprs) : null,
    };
  }, [cars, filteredCars, financeAssumptions]);

  const { downPayment, tradeIn, loanTermYears } = financeAssumptions;

  return (
    <div className="relative overflow-hidden border-b border-zinc-800 mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">BC Canada · 2026</p>
            <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              EV<span className="text-emerald-400">.</span>Compare
            </h1>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Real CAD pricing · BC taxes · Payments use your assumptions (
              {formatCad(downPayment)} down, {formatCad(tradeIn)} trade, {loanTermYears} yr)
            </p>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm">
              <Link
                to="/cars"
                className="text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                Car guide
              </Link>
              <Link
                to="/about"
                className="text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                About
              </Link>
              <Link
                to="/evap-rebate"
                className="text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                Federal rebate
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setFinanceOpen((o) => !o)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border
                  ${financeOpen
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                    : "bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"}`}
                aria-expanded={financeOpen}
              >
                Finance · {formatCad(downPayment)} down
              </button>
              <div className="flex gap-2">
                {[
                  { id: "grid", label: "🚗 Cars" },
                  { id: "calc", label: "🧮 Calculator" },
                ].map(v => (
                  <button key={v.id} onClick={() => onViewChange(v.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                      ${currentView === v.id ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
            {financeOpen && (
              <FinanceAssumptions
                assumptions={financeAssumptions}
                onChange={onFinanceChange}
                embedded
              />
            )}
          </div>
        </div>

        <div className="flex gap-6 mt-6 pt-4 border-t border-zinc-800/60 flex-wrap">
          {[
            { label: "Cars tracked", value: String(stats.total) },
            { label: "Confirmed prices", value: String(stats.confirmed) },
            {
              label: "Lowest monthly",
              value: stats.lowestMonthly != null ? formatCad(stats.lowestMonthly) : "—",
            },
            { label: "Best range", value: `${stats.bestRange} km` },
            {
              label: "Best APR",
              value: stats.bestApr != null ? (stats.bestApr === 0 ? "0%" : `${stats.bestApr}%`) : "—",
            },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{stat.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
