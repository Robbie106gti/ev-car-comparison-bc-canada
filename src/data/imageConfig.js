/** imagin.studio make / modelFamily overrides (Canada model names). */
export const imageConfigByKey = {
  "Fiat|500e": { imageMake: "fiat", imageModel: "500e" },
  "Kia|EV4": { imageMake: "kia", imageModel: "ev4" },
  "Kia|EV6": { imageMake: "kia", imageModel: "ev6" },
  "Kia|Niro EV": { imageMake: "kia", imageModel: "niro-ev" },
  "Kia|EV9": { imageMake: "kia", imageModel: "ev9" },
  "Subaru|Uncharted": { imageMake: "subaru", imageModel: "uncharted" },
  "Toyota|bZ": { imageMake: "toyota", imageModel: "bz" },
  "Volkswagen|ID.4": { imageMake: "volkswagen", imageModel: "id.4" },
  "Volkswagen|ID. Buzz": { imageMake: "volkswagen", imageModel: "id-buzz" },
  "Hyundai|IONIQ 5": { imageMake: "hyundai", imageModel: "ioniq5" },
  "Chevrolet|Equinox EV": { imageMake: "chevrolet", imageModel: "equinox-ev" },
  "Volvo|EX30": { imageMake: "volvo", imageModel: "ex30" },
  "Tesla|Model Y": { imageMake: "tesla", imageModel: "model-y" },
  "Tesla|Model 3": { imageMake: "tesla", imageModel: "model-3" },
  "Polestar|2": { imageMake: "polestar", imageModel: "2" },
  "BMW|i4": { imageMake: "bmw", imageModel: "i4" },
  "Audi|Q4 e-tron": { imageMake: "audi", imageModel: "q4" },
  "Genesis|GV60": { imageMake: "genesis", imageModel: "gv60" },
};

export function getImageConfig(car) {
  return imageConfigByKey[`${car.make}|${car.model}`] ?? {};
}
