/**
 * Comfort features per car (trim-specific for Canada).
 * null = unknown — verify on build & price.
 * ventilatedSeats = cooled / ventilated seats.
 */
export const comfortByCarId = {
  1: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  2: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  3: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: true, ventilatedSeatsDetail: "front", heatedSteeringWheel: true },
  4: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  5: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  6: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: true, ventilatedSeatsDetail: "front", heatedSteeringWheel: true },
  7: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  8: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  9: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: true, ventilatedSeatsDetail: "front", heatedSteeringWheel: true },
  10: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  11: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: true, ventilatedSeatsDetail: "front", heatedSteeringWheel: true },
  12: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  13: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  14: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  15: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
  16: { heatedSeats: null, ventilatedSeats: null, heatedSteeringWheel: null },
  17: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  18: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  19: { heatedSeats: null, ventilatedSeats: null, heatedSteeringWheel: null },
  20: { heatedSeats: true, heatedSeatsDetail: "all rows", ventilatedSeats: false, heatedSteeringWheel: false },
  21: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  22: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  23: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  24: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  25: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: false },
  26: { heatedSeats: true, heatedSeatsDetail: "front", ventilatedSeats: false, heatedSteeringWheel: true },
};

const defaults = {
  heatedSeats: null,
  heatedSeatsDetail: null,
  ventilatedSeats: null,
  ventilatedSeatsDetail: null,
  heatedSteeringWheel: null,
};

export function getComfortForCar(carId) {
  return { ...defaults, ...comfortByCarId[carId] };
}

/** Compare drawer / table label */
export function formatComfort(value, detail) {
  if (value === true) return detail ? `Yes (${detail})` : "Yes";
  if (value === false) return "No";
  return "—";
}
