import CarImage from "./CarImage";
import ColorSwatches from "./ColorSwatches";
import ComfortBadges from "./ComfortBadges";
import SafetyBadges from "./SafetyBadges";
import {
  getCarEstimatedMonthly,
  isEstimatedMonthly,
  loanTermMonths,
} from "../utils/finance";

export default function CarCard({
  car,
  financeAssumptions,
  inCompare,
  onToggleCompare,
  compareDisabled,
  onOpenCalc,
  onSelect,
}) {
  const stop = (e) => e.stopPropagation();
  const fmt = (n) => n ? `$${n.toLocaleString()}` : "—";
  const rebateEligible = car.federalRebate > 0;
  const displayMonthly = getCarEstimatedMonthly(car, financeAssumptions);
  const showEst = isEstimatedMonthly(car, financeAssumptions);
  const termMonths = loanTermMonths(financeAssumptions.loanTermYears);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.();
        }
      }}
      className={`relative rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col cursor-pointer
      ${inCompare ? "border-emerald-500 bg-zinc-900" : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"}`}
    >

      {/* Hero image — contain so full side profile stays visible */}
      <div className="relative aspect-[2/1] min-h-[9.5rem] sm:min-h-[10.5rem] bg-zinc-950 overflow-hidden flex items-center justify-center px-3 py-2">
        <CarImage car={car} className="max-h-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm
            ${car.drivetrain === "AWD" ? "bg-blue-950/90 text-blue-300" : car.drivetrain === "RWD" ? "bg-purple-950/90 text-purple-300" : "bg-zinc-900/90 text-zinc-400"}`}>
            {car.drivetrain}
          </span>
          {car.dataConfirmed && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 font-medium backdrop-blur-sm">
              ✓ confirmed
            </span>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between px-4 pt-3 pb-2">
        <div>
          <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">{car.make} · {car.year}</p>
          <h2 className="text-xl font-bold text-white mt-0.5 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            {car.model}
          </h2>
          <p className="text-zinc-500 text-sm mt-0.5">{car.trim}</p>
        </div>
      </div>

      <div className="px-4 pb-3 border-b border-zinc-800">
        <ColorSwatches colors={car.colors} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Comfort</p>
        <ComfortBadges car={car} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Safety</p>
        <SafetyBadges car={car} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-zinc-600 text-xs mb-0.5">monthly payment</p>
            {displayMonthly != null ? (
              <p className="text-3xl font-black text-white flex items-baseline gap-2 flex-wrap" style={{ fontFamily: "'Syne', sans-serif" }}>
                <span>
                  ${displayMonthly.toLocaleString()}<span className="text-zinc-500 text-sm font-normal">/mo</span>
                </span>
                {showEst && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300/90">
                    est.
                  </span>
                )}
              </p>
            ) : (
              <p className="text-zinc-600 text-base font-medium italic">upload PDF to confirm</p>
            )}
            {car.apr !== null && car.apr !== undefined && (
              <p className="text-zinc-500 text-xs mt-0.5">
                {car.apr === 0 ? <span className="text-emerald-400 font-semibold">0% APR</span> : `${car.apr}% APR`}
                {" · "}{termMonths}mo
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-zinc-600 text-xs mb-0.5">range</p>
            <p className="text-xl font-bold text-white">{car.range} <span className="text-zinc-500 text-sm font-normal">km</span></p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-zinc-800 border-b border-zinc-800">
        {[
          { label: "MSRP", val: fmt(car.msrp) },
          { label: "After incentives", val: fmt(car.totalAfterIncentives) },
          { label: "Federal rebate", val: rebateEligible ? <span className="text-emerald-400">${car.federalRebate.toLocaleString()} ✓</span> : <span className="text-zinc-600">—</span> },
          { label: "Dealer discount", val: car.dealerDiscount > 0 ? <span className="text-amber-400">-${car.dealerDiscount.toLocaleString()}</span> : "—" },
        ].map(row => (
          <div key={row.label} className="bg-zinc-900 px-3 py-2">
            <p className="text-zinc-600 text-xs">{row.label}</p>
            <p className="text-zinc-200 text-sm font-medium mt-0.5">{row.val}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 flex flex-wrap gap-1.5 border-b border-zinc-800 flex-grow">
        {car.sunroof === true && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950 text-amber-300">☀ sunroof</span>}
        {car.sunroof === false && <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-600">no sunroof</span>}
        {car.seats > 5 && <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">{car.seats} seats</span>}
        {car.apr === 0 && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400">0% financing</span>}
        {car.apr === 0.99 && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400">0.99% APR</span>}
        {car.notes && <span className="text-xs text-zinc-600 italic mt-0.5 w-full truncate">{car.notes}</span>}
      </div>

      <div className="px-4 py-3 flex gap-2 mt-auto" onClick={stop}>
        <button onClick={(e) => { stop(e); onToggleCompare(); }} disabled={compareDisabled}
          className={`flex-1 text-sm font-medium py-2 rounded-xl transition-all
            ${inCompare ? "bg-emerald-500 text-black hover:bg-emerald-400" : compareDisabled ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}>
          {inCompare ? "✓ In compare" : compareDisabled ? "Compare full" : "+ Compare"}
        </button>
        <button onClick={(e) => { stop(e); onOpenCalc(); }}
          className="px-3 py-2 text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl transition-all"
          title="Finance calculator">
          🧮
        </button>
        <a href={car.url} target="_blank" rel="noopener noreferrer" onClick={stop}
          className="px-3 py-2 text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl transition-all">
          →
        </a>
      </div>
    </div>
  );
}
