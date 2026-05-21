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
  modelGroup,
  financeAssumptions,
  inCompare,
  onToggleCompare,
  compareDisabled,
  onOpenCalc,
  onSelect,
  filterMatchLabel,
}) {
  const stop = (e) => e.stopPropagation();
  const group = modelGroup;
  const displayCar = group?.displayCar ?? car;
  const heroCar = group?.representative ?? car;
  const termMonths = loanTermMonths(financeAssumptions.loanTermYears);

  const monthlyLabel = group
    ? group.monthlyLabel
    : (() => {
        const m = getCarEstimatedMonthly(car, financeAssumptions);
        return m != null ? String(m) : null;
      })();

  const showEst = group
    ? group.anyEstimated
    : isEstimatedMonthly(car, financeAssumptions);

  const rangeLabel = group
    ? group.rangeLabel?.replace(/ km$/, "") ?? String(car.range)
    : String(car.range);

  const rebateEligible = group
    ? group.federalRebate > 0
    : car.federalRebate > 0;

  const msrpVal = group ? group.msrpLabel : car.msrp ? `$${car.msrp.toLocaleString()}` : "—";
  const afterVal = group
    ? group.afterIncentivesLabel
    : car.totalAfterIncentives
      ? `$${car.totalAfterIncentives.toLocaleString()}`
      : "—";
  const rebateVal = rebateEligible ? (
    <span className="text-emerald-400">
      ${(group?.federalRebate ?? car.federalRebate).toLocaleString()} ✓
    </span>
  ) : (
    <span className="text-zinc-600">—</span>
  );
  const discountVal =
    (group?.dealerDiscountMax ?? car.dealerDiscount) > 0 ? (
      <span className="text-amber-400">
        -${(group?.dealerDiscountMax ?? car.dealerDiscount).toLocaleString()}
      </span>
    ) : (
      "—"
    );

  const aprDisplay = () => {
    const apr = group ? group.aprMin : car.apr;
    if (apr == null) return null;
    const varies = group?.aprVaries;
    return (
      <p className="text-zinc-500 text-xs mt-0.5">
        {apr === 0 ? (
          <span className="text-emerald-400 font-semibold">0% APR</span>
        ) : (
          `${apr}% APR${varies ? "+" : ""}`
        )}
        {" · "}
        {termMonths}mo
      </p>
    );
  };

  const confirmedBadge = () => {
    if (!group) {
      return car.dataConfirmed ? (
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 font-medium backdrop-blur-sm">
          ✓ confirmed
        </span>
      ) : null;
    }
    if (group.confirmedCount === 0) return null;
    if (group.confirmedCount === group.variantCount) {
      return (
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 font-medium backdrop-blur-sm">
          ✓ confirmed
        </span>
      );
    }
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 font-medium backdrop-blur-sm">
        {group.confirmedCount} confirmed
      </span>
    );
  };

  const drivetrainBadge = group?.drivetrainLabel ?? car.drivetrain;

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
      <div className="relative aspect-[2/1] min-h-[9.5rem] sm:min-h-[10.5rem] bg-zinc-950 overflow-hidden flex items-center justify-center px-3 py-2">
        <CarImage car={heroCar} className="max-h-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          {drivetrainBadge !== "varies" && (
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium backdrop-blur-sm
            ${drivetrainBadge === "AWD" ? "bg-blue-950/90 text-blue-300" : drivetrainBadge === "RWD" ? "bg-purple-950/90 text-purple-300" : "bg-zinc-900/90 text-zinc-400"}`}
            >
              {drivetrainBadge}
            </span>
          )}
          {drivetrainBadge === "varies" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-900/90 text-zinc-400 font-medium backdrop-blur-sm">
              AWD / RWD
            </span>
          )}
          {confirmedBadge()}
        </div>
      </div>

      <div className="flex items-start justify-between px-4 pt-3 pb-2">
        <div className="min-w-0 flex-1">
          <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
            {group ? `${group.make} · ${group.yearLabel}` : `${car.make} · ${car.year}`}
          </p>
          <h2
            className="text-xl font-bold text-white mt-0.5 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {group ? group.model : car.model}
          </h2>
          <p className="text-zinc-500 text-sm mt-0.5">{group ? group.trimSubtitle : car.trim}</p>
          {filterMatchLabel && (
            <p className="text-amber-400/90 text-xs mt-1">{filterMatchLabel}</p>
          )}
        </div>
      </div>

      <div className="px-4 pb-3 border-b border-zinc-800">
        <ColorSwatches colors={heroCar.colors} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Comfort</p>
        {group && (
          <p className="text-zinc-600 text-[10px] mb-1.5">Green = at least one trim</p>
        )}
        <ComfortBadges car={displayCar} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Safety</p>
        {group && (
          <p className="text-zinc-600 text-[10px] mb-1.5">Green = at least one trim</p>
        )}
        <SafetyBadges car={displayCar} />
      </div>

      <div className="px-4 py-3 border-b border-zinc-800">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-zinc-600 text-xs mb-0.5">monthly payment</p>
            {monthlyLabel != null ? (
              <p
                className="text-3xl font-black text-white flex items-baseline gap-2 flex-wrap"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <span>
                  ${monthlyLabel}
                  <span className="text-zinc-500 text-sm font-normal">/mo</span>
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
            {aprDisplay()}
          </div>
          <div className="text-right">
            <p className="text-zinc-600 text-xs mb-0.5">range</p>
            <p className="text-xl font-bold text-white">
              {rangeLabel} <span className="text-zinc-500 text-sm font-normal">km</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-zinc-800 border-b border-zinc-800">
        {[
          { label: "MSRP", val: msrpVal },
          { label: "After incentives", val: afterVal },
          { label: "Federal rebate", val: rebateVal },
          { label: "Dealer discount", val: discountVal },
        ].map((row) => (
          <div key={row.label} className="bg-zinc-900 px-3 py-2">
            <p className="text-zinc-600 text-xs">{row.label}</p>
            <p className="text-zinc-200 text-sm font-medium mt-0.5">{row.val}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 flex flex-wrap gap-1.5 border-b border-zinc-800 flex-grow">
        {group?.hasSunroofAny && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950 text-amber-300">☀ sunroof</span>
        )}
        {!group && car.sunroof === false && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-600">no sunroof</span>
        )}
        {group?.hasSunroofNone && !group.hasSunroofAny && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-600">no sunroof</span>
        )}
        {(group?.seatsMax ?? car.seats) > 5 && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
            {group?.seatsMax ?? car.seats} seats
          </span>
        )}
        {(group?.hasZeroApr || car.apr === 0) && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400">0% financing</span>
        )}
        {(group?.hasLowApr || car.apr === 0.99) && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400">0.99% APR</span>
        )}
        {!group && car.notes && (
          <span className="text-xs text-zinc-600 italic mt-0.5 w-full truncate">{car.notes}</span>
        )}
      </div>

      <div className="px-4 py-3 flex gap-2 mt-auto" onClick={stop}>
        <button
          onClick={(e) => {
            stop(e);
            onToggleCompare();
          }}
          disabled={compareDisabled}
          className={`flex-1 text-sm font-medium py-2 rounded-xl transition-all
            ${inCompare ? "bg-emerald-500 text-black hover:bg-emerald-400" : compareDisabled ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}
        >
          {inCompare ? "✓ In compare" : compareDisabled ? "Compare full" : "+ Compare"}
        </button>
        <button
          onClick={(e) => {
            stop(e);
            onOpenCalc();
          }}
          className="px-3 py-2 text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl transition-all"
          title="Finance calculator"
        >
          🧮
        </button>
        <a
          href={heroCar.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={stop}
          className="px-3 py-2 text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl transition-all"
        >
          →
        </a>
      </div>
    </div>
  );
}
