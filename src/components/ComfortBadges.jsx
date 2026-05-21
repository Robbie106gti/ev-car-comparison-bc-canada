function Badge({ label, value, detail, yesClass }) {
  if (value === null) {
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-600" title={`${label}: unknown`}>
        {label} ?
      </span>
    );
  }
  if (!value) {
    return (
      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-600 line-through decoration-zinc-700" title={`No ${label.toLowerCase()}`}>
        {label}
      </span>
    );
  }
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full font-medium ${yesClass}`}
      title={detail ? `${label} (${detail})` : label}
    >
      {label}
      {detail ? <span className="opacity-75 font-normal"> · {detail}</span> : null}
    </span>
  );
}

export default function ComfortBadges({ car, compact = false }) {
  const items = [
    { label: "Heated seats", value: car.heatedSeats, detail: car.heatedSeatsDetail, yesClass: "bg-orange-950/90 text-orange-300" },
    { label: "Ventilated", value: car.ventilatedSeats, detail: car.ventilatedSeatsDetail, yesClass: "bg-sky-950/90 text-sky-300" },
    { label: "Heated wheel", value: car.heatedSteeringWheel, detail: null, yesClass: "bg-rose-950/90 text-rose-300" },
  ];

  return (
    <div className={compact ? "flex flex-wrap gap-1" : "flex flex-wrap gap-1.5"}>
      {items.map((item) => (
        <Badge key={item.label} {...item} />
      ))}
    </div>
  );
}
