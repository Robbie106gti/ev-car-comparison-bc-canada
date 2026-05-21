import { useState, useMemo } from "react";
import { cars, makes, drivetrains } from "./data/cars";
import CarCard from "./components/CarCard";
import FilterBar from "./components/FilterBar";
import CompareDrawer from "./components/CompareDrawer";
import Hero from "./components/Hero";
import FinanceCalculator from "./components/FinanceCalculator";

export default function App() {
  const [filters, setFilters] = useState({
    make: "All", drivetrain: "All", sunroof: false,
    heatedSeats: false, ventilatedSeats: false, heatedSteeringWheel: false,
    rebateOnly: false, confirmedOnly: false, maxMonthly: 1500, sortBy: "monthly",
  });
  const [compareList, setCompareList] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [calcCar, setCalcCar] = useState(null);
  const [view, setView] = useState("grid"); // "grid" | "calc"

  const filtered = useMemo(() => {
    let list = [...cars];
    if (filters.make !== "All") list = list.filter(c => c.make === filters.make);
    if (filters.drivetrain !== "All") list = list.filter(c => c.drivetrain === filters.drivetrain);
    if (filters.sunroof) list = list.filter(c => c.sunroof === true);
    if (filters.heatedSeats) list = list.filter(c => c.heatedSeats === true);
    if (filters.ventilatedSeats) list = list.filter(c => c.ventilatedSeats === true);
    if (filters.heatedSteeringWheel) list = list.filter(c => c.heatedSteeringWheel === true);
    if (filters.rebateOnly) list = list.filter(c => c.federalRebate > 0);
    if (filters.confirmedOnly) list = list.filter(c => c.dataConfirmed);
    if (filters.maxMonthly < 1500) list = list.filter(c => c.monthlyPayment && c.monthlyPayment <= filters.maxMonthly);
    list.sort((a, b) => {
      if (filters.sortBy === "monthly") { if (!a.monthlyPayment) return 1; if (!b.monthlyPayment) return -1; return a.monthlyPayment - b.monthlyPayment; }
      if (filters.sortBy === "range") return b.range - a.range;
      if (filters.sortBy === "msrp") return a.msrp - b.msrp;
      if (filters.sortBy === "apr") return (a.apr ?? 99) - (b.apr ?? 99);
      return 0;
    });
    return list;
  }, [filters]);

  const toggleCompare = (car) => {
    setCompareList(prev =>
      prev.find(c => c.id === car.id)
        ? prev.filter(c => c.id !== car.id)
        : prev.length < 4 ? [...prev, car] : prev
    );
  };

  const openCalc = (car) => { setCalcCar(car); setView("calc"); };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Hero onViewChange={setView} currentView={view} />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {view === "calc" ? (
          <div className="py-6">
            {/* Car picker */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <button onClick={() => setView("grid")}
                  className="text-zinc-500 hover:text-white text-sm flex items-center gap-1.5 transition-colors">
                  ← Back to cars
                </button>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>Finance Calculator</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setCalcCar(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    ${!calcCar ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                  Generic
                </button>
                {cars.filter(c => c.dataConfirmed).map(c => (
                  <button key={c.id} onClick={() => setCalcCar(c)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${calcCar?.id === c.id ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
                    {c.make} {c.model} {c.trim}
                  </button>
                ))}
              </div>
            </div>
            <FinanceCalculator car={calcCar} />
          </div>
        ) : (
          <>
            <FilterBar filters={filters} setFilters={setFilters} makes={makes} drivetrains={drivetrains} />
            <div className="mt-2 mb-6 flex items-center justify-between">
              <p className="text-zinc-500 text-sm">
                <span className="text-white font-medium">{filtered.length}</span> vehicles
                {filters.confirmedOnly && <span className="ml-2 text-emerald-400 text-xs uppercase tracking-wider font-medium">· confirmed only</span>}
              </p>
              {compareList.length > 0 && (
                <button onClick={() => setCompareOpen(true)}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full text-sm transition-all">
                  Compare {compareList.length} car{compareList.length > 1 ? "s" : ""}
                </button>
              )}
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-zinc-600">
                <p className="text-2xl mb-2">No cars match</p>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map(car => (
                  <CarCard key={car.id} car={car}
                    inCompare={!!compareList.find(c => c.id === car.id)}
                    onToggleCompare={() => toggleCompare(car)}
                    compareDisabled={compareList.length >= 4 && !compareList.find(c => c.id === car.id)}
                    onOpenCalc={() => openCalc(car)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {compareOpen && (
        <CompareDrawer cars={compareList} onClose={() => setCompareOpen(false)}
          onRemove={(id) => setCompareList(prev => prev.filter(c => c.id !== id))} />
      )}
      {compareList.length > 0 && !compareOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          <button onClick={() => setCompareOpen(true)}
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 px-6 py-3 rounded-full shadow-2xl transition-all text-sm font-medium">
            <span className="flex gap-1">{compareList.map(c => <span key={c.id} className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />)}</span>
            Compare {compareList.length} selected
          </button>
        </div>
      )}
    </div>
  );
}
