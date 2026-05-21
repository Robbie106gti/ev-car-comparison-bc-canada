import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";
import CarImage from "../components/CarImage";
import StarRating from "../components/StarRating";
import { getCarGuideDescription } from "../utils/carGuideText";
import { getCarRatings } from "../utils/carRatings";

const SORT_OPTIONS = [
  { id: "price", label: "Price (after incentives)" },
  { id: "range", label: "Range" },
  { id: "make", label: "Make A–Z" },
];

function sentimentPillClass(sentimentClass) {
  if (sentimentClass === "positive") return "bg-emerald-950/80 text-emerald-300";
  if (sentimentClass === "negative") return "bg-red-950/80 text-red-300";
  if (sentimentClass === "mixed") return "bg-amber-950/80 text-amber-300";
  return "bg-zinc-800 text-zinc-400";
}

function RatingRow({ label, score, hint }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="min-w-0">
        <p className="text-zinc-500 text-xs">{label}</p>
        {hint && <p className="text-zinc-600 text-[10px] truncate">{hint}</p>}
      </div>
      <StarRating score={score} showValue={false} />
    </div>
  );
}

function GuideCard({ car }) {
  const ratings = getCarRatings(car);
  const description = getCarGuideDescription(car);
  const { reviewDisplay } = ratings;
  const fmt = (n) => (n ? `$${n.toLocaleString()}` : "—");

  return (
    <Link
      to={`/?car=${car.id}`}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-emerald-500/60 transition-all overflow-hidden flex flex-col"
    >
      <div className="flex gap-4 p-4 border-b border-zinc-800">
        <div className="w-28 h-20 shrink-0 rounded-xl bg-zinc-950 overflow-hidden flex items-center justify-center">
          <CarImage car={car} className="max-h-full" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-zinc-500 text-xs uppercase tracking-wider">
            {car.make} · {car.year}
          </p>
          <h2
            className="text-lg font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {car.model}
          </h2>
          <p className="text-zinc-400 text-sm truncate">{car.trim}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
              {car.range} km
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
              {fmt(car.totalAfterIncentives)} after incentives
            </span>
            {car.dataConfirmed && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-medium">
                ✓ confirmed pricing
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-b border-zinc-800 flex-grow">
        <p className="text-zinc-300 text-sm leading-relaxed line-clamp-4">{description}</p>
      </div>

      <div className="px-4 py-3 space-y-2.5 bg-zinc-950/50">
        <p className="text-zinc-600 text-[10px] font-semibold uppercase tracking-wider">
          Ratings
        </p>
        <RatingRow label="Value" score={ratings.value} hint="lower $/km = higher score" />
        <RatingRow label="Range" score={ratings.range} hint="vs fleet NRCan ratings" />
        <RatingRow label="Comfort" score={ratings.comfort} hint="heated, ventilated, sunroof" />

        <div className="pt-1 border-t border-zinc-800/80">
          <p className="text-zinc-500 text-xs mb-1.5">Reviews</p>
          {reviewDisplay.hasReviews ? (
            <div className="space-y-1.5">
              {reviewDisplay.sentiment && (
                <p
                  className={`text-[10px] leading-snug px-2 py-1 rounded-lg ${sentimentPillClass(reviewDisplay.sentimentClass)}`}
                >
                  {reviewDisplay.sentiment.length > 120
                    ? `${reviewDisplay.sentiment.slice(0, 117)}…`
                    : reviewDisplay.sentiment}
                </p>
              )}
              {reviewDisplay.stars != null ? (
                <StarRating score={reviewDisplay.stars} size="md" />
              ) : (
                <p className="text-zinc-500 text-xs">Qualitative only — see detail</p>
              )}
              {reviewDisplay.label && (
                <p className="text-zinc-600 text-[10px]">{reviewDisplay.label}</p>
              )}
              {reviewDisplay.kbb && !reviewDisplay.kbb.includes("No reviews") && (
                <p className="text-zinc-600 text-[10px] truncate">KBB: {reviewDisplay.kbb}</p>
              )}
            </div>
          ) : (
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-500">
              {reviewDisplay.label}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-3 text-emerald-400/90 text-xs font-medium group-hover:text-emerald-400">
        View full specs & pricing →
      </div>
    </Link>
  );
}

export default function CarGuidePage() {
  const [sortBy, setSortBy] = useState("price");

  const sorted = useMemo(() => {
    const list = [...cars];
    if (sortBy === "price") {
      list.sort((a, b) => {
        const pa = a.totalAfterIncentives ?? 999999;
        const pb = b.totalAfterIncentives ?? 999999;
        return pa - pb;
      });
    } else if (sortBy === "range") {
      list.sort((a, b) => b.range - a.range);
    } else {
      list.sort((a, b) => {
        const ma = `${a.make} ${a.model} ${a.trim}`;
        const mb = `${b.make} ${b.model} ${b.trim}`;
        return ma.localeCompare(mb);
      });
    }
    return list;
  }, [sortBy]);

  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="text-zinc-500 hover:text-emerald-400 text-sm transition-colors inline-flex items-center gap-1.5 mb-6"
          >
            ← Back to comparison
          </Link>
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            BC Canada · 2026
          </p>
          <h1
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Car <span className="text-emerald-400">guide</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Every tracked EV with a short buyer-focused summary and ratings for value, range,
            comfort, and owner reviews. Click a card to open full pricing on the comparison grid.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <p className="text-zinc-500 text-sm">
            <span className="text-white font-medium">{sorted.length}</span> vehicles
          </p>
          <div className="flex flex-wrap gap-2">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSortBy(opt.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                  ${sortBy === opt.id ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sorted.map((car) => (
            <GuideCard key={car.id} car={car} />
          ))}
        </div>

        <p className="mt-10 text-zinc-600 text-xs max-w-2xl leading-relaxed">
          Value scores rank after-incentive price per km of NRCan range (lower $/km scores higher).
          Range scores are relative to the fleet maximum. Review stars use KBB x/5 when published,
          else Consumer Reports reliability text, else curated estimates in{" "}
          <code className="text-zinc-500">carRatings.js</code> for models without owner data yet.
        </p>
      </main>
    </div>
  );
}
