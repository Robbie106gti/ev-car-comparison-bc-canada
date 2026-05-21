import { useState } from "react";
import { getCarImageUrl } from "../utils/carImage";

/** Only verified binary images — never commit HTML/error pages from curl downloads. */
const LOCAL_IMAGES = {
  "Tesla|Model 3": "/cars/tesla-model-3.jpg",
};

export default function CarImage({ car, className = "", fit = "contain" }) {
  const objectClass = fit === "cover" ? "object-cover object-center" : "object-contain object-center";
  const local = LOCAL_IMAGES[`${car.make}|${car.model}`];
  const [src, setSrc] = useState(() => local ?? getCarImageUrl(car));
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (local && src !== getCarImageUrl(car)) {
      setSrc(getCarImageUrl(car));
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 ${className}`}
        aria-hidden
      >
        <span
          className="text-4xl font-black text-zinc-700 select-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {car.make[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${car.make} ${car.model} ${car.trim}`}
      loading="lazy"
      decoding="async"
      onError={handleError}
      className={`${objectClass} w-full h-full max-h-full ${className}`}
    />
  );
}
