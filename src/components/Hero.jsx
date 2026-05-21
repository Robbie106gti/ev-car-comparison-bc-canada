export default function Hero({ onViewChange, currentView }) {
  return (
    <div className="relative overflow-hidden border-b border-zinc-800 mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
      <div className="relative max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">BC Canada · 2026</p>
            <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              EV<span className="text-emerald-400">.</span>Compare
            </h1>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Real CAD pricing · $5K down · $8K trade-in · BC taxes · Confirmed from manufacturer build tools
            </p>
          </div>
          <div className="flex gap-2">
            {[
              { id: "grid", label: "🚗 Cars" },
              { id: "calc", label: "🧮 Calculator" },
            ].map(v => (
              <button key={v.id} onClick={() => onViewChange(v.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${currentView === v.id ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-6 pt-4 border-t border-zinc-800/60 flex-wrap">
          {[
            { label: "Cars tracked", value: "26" },
            { label: "Confirmed prices", value: "11" },
            { label: "Lowest monthly", value: "$414" },
            { label: "Best range", value: "629 km" },
            { label: "Best APR", value: "0%" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{stat.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
