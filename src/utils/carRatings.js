import { cars } from "../data/cars";
import { ratingOverrides } from "../data/carRatings";

function scaleToStars(values, value, invert = false) {
  const valid = values.filter((v) => v > 0 && Number.isFinite(v));
  if (!valid.length || !value || !Number.isFinite(value)) return null;
  const min = Math.min(...valid);
  const max = Math.max(...valid);
  if (min === max) return 3;
  const t = (value - min) / (max - min);
  const scaled = invert ? 1 - t : t;
  return Math.max(1, Math.min(5, Math.round(1 + scaled * 4)));
}

export function computeValueScore(car, allCars = cars) {
  if (!car.totalAfterIncentives || !car.range) return null;
  const costPerKm = car.totalAfterIncentives / car.range;
  const costs = allCars
    .map((c) =>
      c.totalAfterIncentives && c.range ? c.totalAfterIncentives / c.range : null
    )
    .filter(Boolean);
  return scaleToStars(costs, costPerKm, true);
}

export function computeRangeScore(car, allCars = cars) {
  const ranges = allCars.map((c) => c.range).filter((r) => r > 0);
  return scaleToStars(ranges, car.range, false);
}

export function parseKbbRating(text) {
  if (!text) return null;
  const m = text.match(/(\d+\.?\d*)\s*\/\s*5/);
  if (m) return Math.min(5, Math.max(1, Math.round(parseFloat(m[1]) * 2) / 2));
  return null;
}

export function parseCrReliability(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  if (lower.includes("much less") || lower.includes("much below")) return 1;
  if (lower.includes("below average")) return 2;
  if (lower.includes("above average")) return 4;
  if (lower.includes("average")) return 3;
  return null;
}

export function computeComfortScore(car) {
  let score = 2;
  if (car.heatedSeats) score += 0.5;
  if (car.ventilatedSeats) score += 1;
  if (car.heatedSteeringWheel) score += 0.5;
  if (car.sunroof) score += 0.5;
  return Math.max(1, Math.min(5, Math.round(score)));
}

export function getReviewDisplay(car) {
  const reviews = car.reviews;
  const override = ratingOverrides[car.id]?.reviews;

  if (!reviews) {
    if (override != null) {
      return {
        hasReviews: true,
        stars: override,
        sentiment: null,
        sentimentClass: "neutral",
        kbb: null,
        cr: null,
        label: "Estimated from segment",
      };
    }
    return {
      hasReviews: false,
      stars: null,
      sentiment: null,
      sentimentClass: "neutral",
      kbb: null,
      cr: null,
      label: "Reviews coming soon",
    };
  }

  const kbbStars = parseKbbRating(reviews.kbbConsumerRating);
  const crStars = parseCrReliability(reviews.consumerReportsReliability);
  const stars = kbbStars ?? crStars ?? override ?? null;

  const sent = reviews.ownerSentiment?.toLowerCase() ?? "";
  let sentimentClass = "neutral";
  if (
    (sent.includes("positive") || sent.includes("praised")) &&
    !sent.includes("mixed-negative") &&
    !sent.includes("negative")
  ) {
    sentimentClass = "positive";
  } else if (sent.includes("negative") || sent.includes("mixed-negative")) {
    sentimentClass = "negative";
  } else if (
    sent.includes("mixed") ||
    sent.includes("divided") ||
    sent.includes("polarized") ||
    sent.includes("early")
  ) {
    sentimentClass = "mixed";
  }

  return {
    hasReviews: true,
    stars,
    sentiment: reviews.ownerSentiment,
    sentimentClass,
    kbb: reviews.kbbConsumerRating,
    cr: reviews.consumerReportsReliability,
    label: null,
  };
}

export function getCarRatings(car, allCars = cars) {
  const o = ratingOverrides[car.id] ?? {};
  const reviewDisplay = getReviewDisplay(car);
  return {
    value: o.value ?? computeValueScore(car, allCars),
    range: o.range ?? computeRangeScore(car, allCars),
    comfort: o.comfort ?? computeComfortScore(car),
    reviews:
      reviewDisplay.stars ??
      (reviewDisplay.hasReviews ? null : null),
    reviewDisplay,
  };
}
