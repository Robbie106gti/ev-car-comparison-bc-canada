import { useState } from "react";
import { getCarImageUrl } from "../utils/carImage";

const LOCAL_IMAGES = {
  "Subaru|Uncharted": "/cars/subaru-uncharted.jpg",
  "Hyundai|IONIQ 5": "/cars/hyundai-ioniq5.jpg",
};

export default function CarImage({ car, className = "" }) {
  const [src, setSrc] = useState(() => {
    const local = LOCAL_IMAGES[`${car.make}|${car.model}`];
    return local ?? getCarImageUrl(car);
  });
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    const local = LOCAL_IMAGES[`${car.make}|${car.model}`];
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
      className={`object-cover object-center w-full h-full ${className}`}
    />
  );
}
