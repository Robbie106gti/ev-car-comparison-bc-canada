/** Build a side-profile render URL (cdn.imagin.studio). */
const IMAGIN_CUSTOMER = "carwow";

export function getCarImageUrl(car) {
  const make = car.imageMake ?? car.make.toLowerCase().replace(/\s+/g, "-");
  const modelFamily =
    car.imageModel ??
    car.model
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/\s+/g, "-")
      .replace("id-buzz", "id-buzz");

  const params = new URLSearchParams({
    customer: IMAGIN_CUSTOMER,
    make,
    modelFamily,
    powerTrain: car.imagePowerTrain ?? "electric",
    zoomType: car.imageZoomType ?? "relative",
    angle: car.imageAngle ?? "23",
    width: "640",
    fileType: "webp",
  });

  if (car.year) params.set("modelYear", String(car.year));
  if (car.imageModelVariant) params.set("modelVariant", car.imageModelVariant);
  if (car.imageTrim) params.set("trim", car.imageTrim);
  if (car.imagePaintDescription) params.set("paintDescription", car.imagePaintDescription);
  if (car.imagePaint) params.set("paintId", car.imagePaint);

  return `https://cdn.imagin.studio/getImage?${params}`;
}
