/**
 * Optional per-car rating overrides (1–5). Value and Range are usually computed
 * from price/km and NRCan range; use overrides when guide context suggests otherwise.
 */
export const ratingOverrides = {
  1: { reviews: 3 },
  47: { reviews: 3 },
  14: { reviews: 2 },
  15: { reviews: 2 },
  16: { reviews: 4, comfort: 3 },
  17: { reviews: 3 },
  18: { reviews: 3 },
  19: { reviews: 4, comfort: 4 },
  21: { reviews: 4 },
  22: { reviews: 3 },
  23: { reviews: 4 },
  24: { reviews: 3 },
  25: { reviews: 1 },
  26: { reviews: 4, comfort: 4 },
};
