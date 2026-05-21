/** Build a side-profile render URL (cdn.imagin.studio). */
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
    customer: "img",
    make,
    modelFamily,
    zoomType: "fullscreen",
    angle: car.imageAngle ?? "23",
    width: "640",
  });

  if (car.imagePaint) params.set("paintId", car.imagePaint);

  return `https://cdn.imagin.studio/getImage?${params}`;
}
