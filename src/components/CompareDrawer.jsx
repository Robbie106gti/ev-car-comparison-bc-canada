const fmt = (n) => (n != null ? `$${Number(n).toLocaleString()}` : "—");

const rows = [
  { label: "Monthly Payment", key: "monthlyPayment", fmt: (v) => v ? `$${v}/mo` : "—", highlight: true },
  { label: "APR", key: "apr", fmt: (v) => v === 0 ? "0% 🎉" : v != null ? `${v}%` : "—" },
  { label: "Loan Term", key: "loanTerm", fmt: (v) => v ? `${v} months` : "—" },
  { label: "MSRP", key: "msrp", fmt: fmt },
  { label: "Dealer Discount", key: "dealerDiscount", fmt: (v) => v > 0 ? `-$${v.toLocaleString()}` : "—" },
  { label: "Federal Rebate", key: "federalRebate", fmt: (v) => v > 0 ? `$${v.toLocaleString()} ✓` : "—" },
  { label: "After Incentives", key: "totalAfterIncentives", fmt: fmt },
  { label: "Range", key: "range", fmt: (v) => `${v} km`, highlight: true },
  { label: "Drivetrain", key: "drivetrain", fmt: (v) => v },
  { label: "Sunroof", key: "sunroof", fmt: (v) => v === true ? "✓ Yes" : v === false ? "✗ No" : "?" },
  { label: "Seats", key: "seats", fmt: (v) => v ? `${v}` : "—" },
  { label: "Confirmed", key: "dataConfirmed", fmt: (v) => v ? "✓ Confirmed" : "Estimated" },
];

export default function CompareDrawer({ cars, onClose, onRemove }) {
  const best = (key) => {
    const vals = cars.map(c => c[key]).filter(v => v != null && typeof v === "number");
    if (!vals.length) return null;
    if (key === "monthlyPayment" || key === "msrp" || key === "totalAfterIncentives" || key === "apr") return Math.min(...vals);
    if (key === "range") return Math.max(...vals);
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-auto"
        style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* Header */}
        <div className="sticky top-0 bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Side-by-Side Comparison</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white text-2xl leading-none">×</button>
        </div>

        {/* Car headers */}
        <div className="grid gap-px bg-zinc-800" style={{ gridTemplateColumns: `160px repeat(${cars.length}, 1fr)` }}>
          <div className="bg-zinc-950" />
          {cars.map(car => (
            <div key={car.id} className="bg-zinc-950 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-zinc-500 text-xs">{car.make} · {car.year}</p>
                  <p className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {car.model}
                  </p>
                  <p className="text-zinc-500 text-sm">{car.trim}</p>
                </div>
                <button onClick={() => onRemove(car.id)} className="text-zinc-700 hover:text-zinc-400 text-lg ml-2">×</button>
              </div>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map(row => {
          const bestVal = best(row.key);
          return (
            <div key={row.key} className="grid gap-px bg-zinc-800 border-t border-zinc-800"
              style={{ gridTemplateColumns: `160px repeat(${cars.length}, 1fr)` }}>
              <div className={`px-4 py-3 ${row.highlight ? "bg-zinc-900" : "bg-zinc-950"}`}>
                <p className={`text-xs font-medium ${row.highlight ? "text-zinc-300" : "text-zinc-500"}`}>{row.label}</p>
              </div>
              {cars.map(car => {
                const val = car[row.key];
                const isBest = bestVal != null && typeof val === "number" && val === bestVal;
                return (
                  <div key={car.id}
                    className={`px-4 py-3 ${row.highlight ? "bg-zinc-900" : "bg-zinc-950"} ${isBest ? "border-l-2 border-emerald-500" : ""}`}>
                    <p className={`text-sm font-medium ${isBest ? "text-emerald-400" : row.highlight ? "text-white" : "text-zinc-300"}`}>
                      {row.fmt(val)}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Links row */}
        <div className="grid gap-px bg-zinc-800 border-t border-zinc-800"
          style={{ gridTemplateColumns: `160px repeat(${cars.length}, 1fr)` }}>
          <div className="bg-zinc-950 px-4 py-3">
            <p className="text-xs text-zinc-500">Link</p>
          </div>
          {cars.map(car => (
            <div key={car.id} className="bg-zinc-950 px-4 py-3">
              <a href={car.url} target="_blank" rel="noopener noreferrer"
                className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
                Build & Price →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
