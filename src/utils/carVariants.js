/** Same make+model trims, cheapest first (after incentives). */
export function getModelVariants(car, allCars) {
  if (!car || !allCars?.length) return [];
  return allCars
    .filter((c) => c.make === car.make && c.model === car.model)
    .sort((a, b) => (a.totalAfterIncentives ?? Infinity) - (b.totalAfterIncentives ?? Infinity));
}
