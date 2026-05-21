import { useEffect, useMemo, useState } from "react";
import { getCarImageUrl } from "../utils/carImage";
import { colorNameToPaintDescription } from "../data/imagePaint";
import ComfortBadges from "./ComfortBadges";
import SafetyBadges from "./SafetyBadges";
import {
  getCarEstimatedMonthly,
  isEstimatedMonthly,
  loanTermMonths,
} from "../utils/finance";
import { getModelVariants } from "../utils/carVariants";

function galleryColors(colors, max = 3) {
  if (!colors?.length) return [];
  const vivid = colors.filter((c) => !/white|black|grey|gray|silver|pearl/i.test(c.name));
  const pool = vivid.length ? vivid : colors;
  return pool.slice(0, max);
}

export default function CarDetailModal({
  car,
  cars = [],
  financeAssumptions,
  onClose,
  onOpenCalc,
  onToggleCompare,
  onSelectCar,
  inCompare,
  compareDisabled,
}) {
  const [paintIdx, setPaintIdx] = useState(0);
  const reviews = car.reviews;
  const swatches = useMemo(() => galleryColors(car.colors), [car.colors]);

  useEffect(() => {
    setPaintIdx(0);
  }, [car.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const paintCar = useMemo(() => {
    const sw = swatches[paintIdx];
    if (!sw) return car;
    return {
      ...car,
      imagePaintDescription: colorNameToPaintDescription(sw.name),
    };
  }, [car, swatches, paintIdx]);

  const imageUrl = getCarImageUrl(paintCar);
  const fmt = (n) => (n ? `$${n.toLocaleString()}` : "—");
  const displayMonthly = getCarEstimatedMonthly(car, financeAssumptions);
  const showEst = isEstimatedMonthly(car, financeAssumptions);
  const termMonths = loanTermMonths(financeAssumptions.loanTermYears);
  const rebateEligible = car.federalRebate > 0;
  const variants = useMemo(() => getModelVariants(car, cars), [car, cars]);
  const showVariants = variants.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="car-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-white hover:border-emerald-500 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Gallery */}
        <div className="relative aspect-[2/1] sm:aspect-video max-h-72 sm:max-h-80 bg-zinc-950 overflow-hidden flex items-center justify-center px-4 py-3">
          <img
            src={imageUrl}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full max-h-full object-contain object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
          {swatches.length > 1 && (
            <div className="absolute bottom-3 left-4 right-4 flex gap-2 flex-wrap">
              {swatches.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  onClick={() => setPaintIdx(i)}
                  className={`w-8 h-8 rounded-full border-2 shrink-0 transition-all ${
                    paintIdx === i
                      ? "border-emerald-400 ring-2 ring-emerald-500/40"
                      : "border-zinc-600 hover:border-zinc-400"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-5 sm:px-8 pb-8 pt-4">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">
            {car.make} · {car.year}
          </p>
          <h2
            id="car-detail-title"
            className="text-2xl sm:text-3xl font-bold text-white mt-0.5"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {car.model}
          </h2>
          <p className="text-zinc-400 text-sm mt-0.5">{car.trim}</p>

          {showVariants && (
            <div className="mt-5">
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                Compare trims · {car.make} {car.model}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory scrollbar-thin">
                {variants.map((v) => {
                  const selected = v.id === car.id;
                  const vMonthly = getCarEstimatedMonthly(v, financeAssumptions);
                  const vEst = isEstimatedMonthly(v, financeAssumptions);
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => onSelectCar?.(v)}
                      className={`snap-start shrink-0 min-w-[9.5rem] max-w-[11rem] text-left rounded-xl border px-3 py-2.5 transition-all ${
                        selected
                          ? "border-emerald-500 bg-emerald-950/40 ring-1 ring-emerald-500/50"
                          : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold leading-tight truncate ${
                          selected ? "text-emerald-200" : "text-white"
                        }`}
                      >
                        {v.trim}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">
                        {fmt(v.totalAfterIncentives)}
                        <span className="text-zinc-600"> after</span>
                      </p>
                      {vMonthly != null ? (
                        <p className="text-xs text-zinc-300 mt-0.5">
                          ${vMonthly.toLocaleString()}/mo
                          {vEst && (
                            <span className="text-amber-500/90 ml-1">est.</span>
                          )}
                        </p>
                      ) : (
                        <p className="text-xs text-zinc-600 mt-0.5 italic">monthly —</p>
                      )}
                      {selected && (
                        <span className="inline-block mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                          viewing
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Specs strip */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <div>
              <p className="text-zinc-600 text-xs">Monthly</p>
              {displayMonthly != null ? (
                <p className="text-xl font-bold text-white">
                  ${displayMonthly.toLocaleString()}
                  <span className="text-zinc-500 text-sm font-normal">/mo</span>
                  {showEst && (
                    <span className="ml-1 text-[10px] font-semibold uppercase text-amber-400">
                      est.
                    </span>
                  )}
                </p>
              ) : (
                <p className="text-zinc-500 text-sm italic">PDF needed</p>
              )}
            </div>
            <div>
              <p className="text-zinc-600 text-xs">Range</p>
              <p className="text-xl font-bold text-white">
                {car.range} <span className="text-zinc-500 text-sm font-normal">km</span>
              </p>
            </div>
            <div>
              <p className="text-zinc-600 text-xs">MSRP</p>
              <p className="text-lg font-semibold text-zinc-200">{fmt(car.msrp)}</p>
            </div>
            <div>
              <p className="text-zinc-600 text-xs">After incentives</p>
              <p className="text-lg font-semibold text-zinc-200">
                {fmt(car.totalAfterIncentives)}
              </p>
            </div>
          </div>

          {(car.apr !== null && car.apr !== undefined) && (
            <p className="text-zinc-500 text-xs mt-2">
              {car.apr === 0 ? (
                <span className="text-emerald-400 font-semibold">0% APR</span>
              ) : (
                `${car.apr}% APR`
              )}
              {" · "}
              {termMonths}mo · Federal rebate{" "}
              {rebateEligible ? (
                <span className="text-emerald-400">${car.federalRebate.toLocaleString()}</span>
              ) : (
                "—"
              )}
            </p>
          )}

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                Comfort
              </p>
              <ComfortBadges car={car} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">
                Safety
              </p>
              <SafetyBadges car={car} />
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-8 border-t border-zinc-800 pt-6">
            <h3
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Owner & independent reviews
            </h3>

            {!reviews ? (
              <p className="text-zinc-500 text-sm py-6 text-center rounded-xl bg-zinc-900 border border-zinc-800">
                Reviews coming soon
              </p>
            ) : (
              <div className="space-y-5">
                {reviews.reviewsProxyNote && (
                  <div className="rounded-xl border border-amber-800/50 bg-amber-950/40 px-4 py-3 text-amber-200/90 text-sm">
                    {reviews.reviewsProxyNote}
                  </div>
                )}

                {reviews.ownerSentiment && (
                  <span className="inline-block text-sm px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700">
                    {reviews.ownerSentiment}
                  </span>
                )}

                {reviews.consumerReportsReliability && (
                  <p className="text-sm text-zinc-400">
                    <span className="text-zinc-500">Consumer Reports: </span>
                    {reviews.consumerReportsReliability}
                  </p>
                )}
                {reviews.kbbConsumerRating && (
                  <p className="text-sm text-zinc-400">
                    <span className="text-zinc-500">KBB: </span>
                    {reviews.kbbConsumerRating}
                  </p>
                )}

                {reviews.pros?.length > 0 && (
                  <div>
                    <p className="text-emerald-500 text-xs font-medium uppercase tracking-wider mb-2">
                      Pros
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {reviews.pros.map((p) => (
                        <li
                          key={p}
                          className="text-xs px-2.5 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-200/90 border border-emerald-900/50 max-w-full"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {reviews.cons?.length > 0 && (
                  <div>
                    <p className="text-red-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Cons
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {reviews.cons.map((c) => (
                        <li
                          key={c}
                          className="text-xs px-2.5 py-1.5 rounded-lg bg-red-950/40 text-red-200/90 border border-red-900/40 max-w-full"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {reviews.recalls?.length > 0 && (
                  <div className="rounded-xl border border-amber-800/40 bg-amber-950/30 px-4 py-3">
                    <p className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Recalls & safety notices
                    </p>
                    <ul className="space-y-2 text-sm text-amber-100/90 list-disc list-inside">
                      {reviews.recalls.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {reviews.ownerQuotes?.length > 0 && (
                  <div className="space-y-3">
                    {reviews.ownerQuotes.map((q) => (
                      <blockquote
                        key={q}
                        className="border-l-2 border-emerald-600/60 pl-4 text-sm text-zinc-300 italic"
                      >
                        {q}
                      </blockquote>
                    ))}
                  </div>
                )}

                {reviews.canadianNotes && (
                  <div className="rounded-xl border border-blue-800/40 bg-blue-950/30 px-4 py-3 text-sm text-blue-100/90">
                    <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-1">
                      Canadian notes
                    </p>
                    {reviews.canadianNotes}
                  </div>
                )}

                {reviews.reliabilityNotes && (
                  <div className="rounded-xl border border-amber-800/40 bg-amber-950/20 px-4 py-3 text-sm text-amber-100/90">
                    <p className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">
                      Reliability
                    </p>
                    {reviews.reliabilityNotes}
                  </div>
                )}

                {reviews.sources?.length > 0 && (
                  <p className="text-zinc-600 text-xs pt-2 border-t border-zinc-800">
                    Sources: {reviews.sources.join(" · ")}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onToggleCompare}
              disabled={compareDisabled}
              className={`flex-1 min-w-[120px] text-sm font-medium py-2.5 rounded-xl transition-all
                ${inCompare ? "bg-emerald-500 text-black" : compareDisabled ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}
            >
              {inCompare ? "✓ In compare" : compareDisabled ? "Compare full" : "+ Compare"}
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenCalc();
                onClose();
              }}
              className="px-4 py-2.5 text-sm font-medium bg-zinc-800 text-zinc-300 hover:bg-zinc-700 rounded-xl"
            >
              Calculator
            </button>
            <a
              href={car.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-black rounded-xl transition-colors"
            >
              Build tool →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
