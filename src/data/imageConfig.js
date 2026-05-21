import { getImagePaintConfig } from "./imagePaint";

/** imagin.studio make / modelFamily overrides (Canada model names). */
export const imageConfigByKey = {
  "Fiat|500e": { imageMake: "fiat", imageModel: "500e", imageModelVariant: "hatchback" },
  "Kia|EV4": { imageMake: "kia", imageModel: "ev4", imageModelVariant: "sedan" },
  "Kia|EV6": { imageMake: "kia", imageModel: "ev6", imageModelVariant: "suv" },
  "Kia|Niro EV": { imageMake: "kia", imageModel: "niro-ev", imageModelVariant: "suv" },
  "Kia|EV9": { imageMake: "kia", imageModel: "ev9", imageModelVariant: "suv" },
  "Subaru|Uncharted": { imageMake: "subaru", imageModel: "uncharted", imageModelVariant: "suv" },
  "Toyota|bZ": {
    imageMake: "toyota",
    imageModel: "bz4x",
    imageModelVariant: "suv",
    imagePowerTrain: "electric",
  },
  "Volkswagen|ID.4": { imageMake: "volkswagen", imageModel: "id.4", imageModelVariant: "suv" },
  "Volkswagen|ID. Buzz": { imageMake: "volkswagen", imageModel: "id-buzz", imageModelVariant: "mpv" },
  "Hyundai|IONIQ 5": { imageMake: "hyundai", imageModel: "ioniq5", imageModelVariant: "suv" },
  "Chevrolet|Equinox EV": {
    imageMake: "chevrolet",
    imageModel: "equinox-ev",
    imageModelVariant: "suv",
  },
  "Volvo|EX30": { imageMake: "volvo", imageModel: "ex30", imageModelVariant: "suv" },
  "Tesla|Model Y": { imageMake: "tesla", imageModel: "model-y", imageModelVariant: "suv" },
  "Tesla|Model 3": { imageMake: "tesla", imageModel: "model-3", imageModelVariant: "sedan" },
  "Polestar|2": { imageMake: "polestar", imageModel: "2", imageModelVariant: "sedan" },
  "BMW|i4": { imageMake: "bmw", imageModel: "i4", imageModelVariant: "sedan" },
  "Audi|Q4 e-tron": { imageMake: "audi", imageModel: "q4", imageModelVariant: "suv" },
  "Genesis|GV60": { imageMake: "genesis", imageModel: "gv60", imageModelVariant: "suv" },
  "MINI|Countryman": { imageMake: "mini", imageModel: "countryman", imageModelVariant: "suv" },
};

/** Per-trim CDN hints (ML-mapped; approximate for Canada-only names). */
export const imageConfigByCarId = {
  1: { imageTrim: "icona" },
  2: { imageTrim: "wind-premium" },
  3: { imageTrim: "gt-line" },
  27: { imageTrim: "fwd" },
  4: { imageTrim: "fwd-lr" },
  5: { imageTrim: "sport" },
  6: { imageTrim: "gt" },
  7: { imageTrim: "xle-fwd" },
  8: { imageTrim: "xle-awd" },
  9: { imageTrim: "limited-awd" },
  10: { imageTrim: "wind" },
  11: { imageTrim: "gt-line" },
  12: { imageTrim: "pro" },
  13: { imageTrim: "pro-awd" },
  14: { imageTrim: "1st-edition" },
  15: { imageTrim: "1st-edition-4motion" },
  16: { imageTrim: "standard" },
  17: { imageTrim: "lt" },
  18: { imageTrim: "standard" },
  19: { imageTrim: "standard" },
  20: { imageTrim: "standard-rwd", imagePaintDescription: "stealth-grey" },
  32: { imageTrim: "premium-awd", imagePaintDescription: "marine-blue-metallic" },
  33: { imageTrim: "performance-awd", imagePaintDescription: "ultra-red" },
  21: { imageTrim: "rwd" },
  22: { imageTrim: "standard" },
  23: { imageTrim: "edrive40" },
  24: { imageTrim: "40" },
  25: { imageTrim: "standard" },
  26: { imageTrim: "standard" },
  28: { imageTrim: "se-all4-premier" },
  29: { imageTrim: "se-all4-premier-favoured" },
  30: { imageTrim: "se-all4-premier-plus" },
  31: { imageTrim: "se-all4-premier-plus-favoured" },
};

export function getImageConfig(car) {
  const base = imageConfigByKey[`${car.make}|${car.model}`] ?? {};
  const byId = imageConfigByCarId[car.id] ?? {};
  const paint = getImagePaintConfig(car);
  return { ...base, ...byId, ...paint };
}
