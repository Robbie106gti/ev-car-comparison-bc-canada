import { getCarEstimatedMonthly, isEstimatedMonthly } from "./finance";

export function getModelGroupKey(car) {
  return `${car.make}|${car.model}`;
}

/** Cheapest after incentives first; prefers Wind trim as tie-breaker hero. */
export function sortVariantsByPrice(variants) {
  return [...variants].sort((a, b) => {
    const pa = a.totalAfterIncentives ?? Infinity;
    const pb = b.totalAfterIncentives ?? Infinity;
    if (pa !== pb) return pa - pb;
    const aWind = /wind/i.test(a.trim ?? "") ? -1 : 0;
    const bWind = /wind/i.test(b.trim ?? "") ? -1 : 0;
    return aWind - bWind;
  });
}

function uniqueSorted(nums) {
  return [...new Set(nums)].sort((a, b) => a - b);
}

function formatYearLabel(years) {
  const uniq = uniqueSorted(years);
  if (uniq.length === 0) return "—";
  if (uniq.length === 1) return String(uniq[0]);
  return `${uniq[0]}–${uniq[uniq.length - 1]}`;
}

function formatIntRange(min, max, suffix = "") {
  if (min == null && max == null) return null;
  if (min == null) return `${max}${suffix}`;
  if (max == null) return `${min}${suffix}`;
  if (min === max) return `${min}${suffix}`;
  return `${min}–${max}${suffix}`;
}

function formatCadRange(min, max) {
  if (min == null && max == null) return null;
  const fmt = (n) => `$${n.toLocaleString()}`;
  if (min == null) return fmt(max);
  if (max == null) return fmt(min);
  if (min === max) return fmt(min);
  return `${fmt(min)}–${fmt(max)}`;
}

/** Aggregate boolean comfort/safety: green if any trim has it; detail when not all trims match. */
export function aggregateBooleanFeature(variants, key, detailKey) {
  const values = variants.map((v) => v[key]);
  const anyTrue = values.some((v) => v === true);
  const allTrue = values.every((v) => v === true);
  const allFalse = values.every((v) => v === false);
  const allNull = values.every((v) => v === null);

  if (allNull) return { value: null, detail: null };
  if (anyTrue && !allTrue) {
    const detail = detailKey
      ? variants.find((v) => v[key] === true)?.[detailKey] ?? "some trims"
      : "some trims";
    return { value: true, detail };
  }
  if (allTrue) {
    const withDetail = variants.find((v) => v[detailKey]);
    return { value: true, detail: withDetail?.[detailKey] ?? null };
  }
  if (allFalse) return { value: false, detail: null };
  if (anyTrue) return { value: true, detail: "some trims" };
  return { value: null, detail: null };
}

export function buildAggregateCar(representative, variants) {
  const heated = aggregateBooleanFeature(variants, "heatedSeats", "heatedSeatsDetail");
  const ventilated = aggregateBooleanFeature(variants, "ventilatedSeats", "ventilatedSeatsDetail");
  const heatedWheel = aggregateBooleanFeature(variants, "heatedSteeringWheel");
  const backup = aggregateBooleanFeature(variants, "backupCamera");
  const parking = aggregateBooleanFeature(variants, "parkingSensors", "parkingSensorsDetail");

  const sunroofs = variants.map((v) => v.sunroof);
  const anySunroof = sunroofs.some((s) => s === true);
  const allSunroof = sunroofs.every((s) => s === true);
  const allNoSunroof = sunroofs.every((s) => s === false);

  return {
    ...representative,
    heatedSeats: heated.value,
    heatedSeatsDetail: heated.detail,
    ventilatedSeats: ventilated.value,
    ventilatedSeatsDetail: ventilated.detail,
    heatedSteeringWheel: heatedWheel.value,
    backupCamera: backup.value,
    parkingSensors: parking.value,
    parkingSensorsDetail: parking.detail,
    sunroof: anySunroof ? true : allNoSunroof ? false : representative.sunroof,
    _featureNoteAllTrims: false,
  };
}

export function buildModelGroup(variants, financeAssumptions) {
  const sorted = sortVariantsByPrice(variants);
  const representative = sorted[0];
  const count = sorted.length;
  const years = sorted.map((v) => v.year).filter((y) => y != null);
  const ranges = sorted.map((v) => v.range).filter((r) => r != null);
  const monthlies = sorted
    .map((v) => getCarEstimatedMonthly(v, financeAssumptions))
    .filter((m) => m != null);
  const msrps = sorted.map((v) => v.msrp).filter((n) => n != null);
  const afterIncentives = sorted
    .map((v) => v.totalAfterIncentives)
    .filter((n) => n != null);
  const aprs = sorted.map((v) => v.apr).filter((a) => a != null);
  const confirmedCount = sorted.filter((v) => v.dataConfirmed).length;
  const anyEstimated = sorted.some((v) => isEstimatedMonthly(v, financeAssumptions));
  const drivetrains = [...new Set(sorted.map((v) => v.drivetrain).filter(Boolean))];

  const trimLabel = count === 1 ? sorted[0].trim : `${count} trims`;

  return {
    key: getModelGroupKey(representative),
    make: representative.make,
    model: representative.model,
    variants: sorted,
    representative,
    displayCar: buildAggregateCar(representative, sorted),
    variantCount: count,
    trimSubtitle: trimLabel,
    yearLabel: formatYearLabel(years),
    monthlyMin: monthlies.length ? Math.min(...monthlies) : null,
    monthlyMax: monthlies.length ? Math.max(...monthlies) : null,
    monthlyLabel:
      monthlies.length === 0
        ? null
        : formatIntRange(Math.min(...monthlies), Math.max(...monthlies)),
    rangeMin: ranges.length ? Math.min(...ranges) : null,
    rangeMax: ranges.length ? Math.max(...ranges) : null,
    rangeLabel: formatIntRange(
      ranges.length ? Math.min(...ranges) : null,
      ranges.length ? Math.max(...ranges) : null,
      " km"
    ),
    msrpLabel: formatCadRange(
      msrps.length ? Math.min(...msrps) : null,
      msrps.length ? Math.max(...msrps) : null
    ),
    afterIncentivesLabel: formatCadRange(
      afterIncentives.length ? Math.min(...afterIncentives) : null,
      afterIncentives.length ? Math.max(...afterIncentives) : null
    ),
    aprMin: aprs.length ? Math.min(...aprs) : null,
    aprVaries: aprs.length > 1 && Math.min(...aprs) !== Math.max(...aprs),
    anyEstimated,
    confirmedCount,
    hasConfirmed: confirmedCount > 0,
    drivetrainLabel: drivetrains.length === 1 ? drivetrains[0] : "varies",
    federalRebate: Math.max(...sorted.map((v) => v.federalRebate ?? 0)),
    dealerDiscountMax: Math.max(...sorted.map((v) => v.dealerDiscount ?? 0)),
    seatsMax: Math.max(...sorted.map((v) => v.seats ?? 0)),
    hasZeroApr: sorted.some((v) => v.apr === 0),
    hasLowApr: sorted.some((v) => v.apr === 0.99),
    hasSunroofAny: sorted.some((v) => v.sunroof === true),
    hasSunroofNone: sorted.every((v) => v.sunroof === false),
  };
}

export function groupCarsByModel(cars, financeAssumptions) {
  const map = new Map();
  for (const car of cars) {
    const key = getModelGroupKey(car);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(car);
  }
  return Array.from(map.values()).map((variants) =>
    buildModelGroup(variants, financeAssumptions)
  );
}

export function sortModelGroups(groups, sortBy, financeAssumptions) {
  const list = [...groups];
  list.sort((a, b) => {
    if (sortBy === "monthly") {
      const ma = a.monthlyMin ?? Infinity;
      const mb = b.monthlyMin ?? Infinity;
      if (ma === Infinity && mb === Infinity) return 0;
      if (ma === Infinity) return 1;
      if (mb === Infinity) return -1;
      return ma - mb;
    }
    if (sortBy === "range") return (b.rangeMax ?? 0) - (a.rangeMax ?? 0);
    if (sortBy === "msrp") {
      const ma = Math.min(...a.variants.map((v) => v.msrp ?? Infinity));
      const mb = Math.min(...b.variants.map((v) => v.msrp ?? Infinity));
      return ma - mb;
    }
    if (sortBy === "apr") {
      const ma = a.aprMin ?? 99;
      const mb = b.aprMin ?? 99;
      return ma - mb;
    }
    return 0;
  });
  return list;
}

/** Compare uses cheapest trim in the group (same as card default / modal initial). */
export function getCompareVariant(group) {
  return group.representative;
}

export function isGroupInCompare(group, compareList) {
  return group.variants.some((v) => compareList.some((c) => c.id === v.id));
}
