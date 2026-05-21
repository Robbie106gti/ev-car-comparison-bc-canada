export default function StarRating({ score, max = 5, size = "sm", showValue = true }) {
  if (score == null) {
    return <span className="text-zinc-600 text-xs">—</span>;
  }

  const sizeClass =
    size === "lg" ? "text-base gap-0.5" : size === "md" ? "text-sm gap-px" : "text-xs gap-px";

  return (
    <div className={`inline-flex items-center ${sizeClass}`} aria-label={`${score} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = score >= i + 1;
        const half = !filled && score >= i + 0.5;
        return (
          <span
            key={i}
            className={
              filled
                ? "text-amber-400"
                : half
                  ? "text-amber-400/60"
                  : "text-zinc-700"
            }
          >
            {filled || half ? "★" : "☆"}
          </span>
        );
      })}
      {showValue && (
        <span className="text-zinc-500 ml-1 tabular-nums font-medium">{score}/{max}</span>
      )}
    </div>
  );
}
