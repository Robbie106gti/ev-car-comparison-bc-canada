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
      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-600 line-through decoration-zinc-700" title={detail ?? `No ${label.toLowerCase()}`}>
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

export default function SafetyBadges({ car, compact = false }) {
  const items = [
    { label: "Backup cam", value: car.backupCamera, detail: null, yesClass: "bg-violet-950/90 text-violet-300" },
    { label: "Park sensors", value: car.parkingSensors, detail: car.parkingSensorsDetail, yesClass: "bg-teal-950/90 text-teal-300" },
  ];

  return (
    <div className={compact ? "flex flex-wrap gap-1" : "flex flex-wrap gap-1.5"}>
      {items.map((item) => (
        <Badge key={item.label} {...item} />
      ))}
    </div>
  );
}
