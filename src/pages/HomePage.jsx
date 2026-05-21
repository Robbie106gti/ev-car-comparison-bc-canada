import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { cars, makes, drivetrains } from "../data/cars";
import CarCard from "../components/CarCard";
import FilterBar, { DEFAULT_FILTERS } from "../components/FilterBar";
import CompareDrawer from "../components/CompareDrawer";
import CarDetailModal from "../components/CarDetailModal";
import Hero from "../components/Hero";
import FinanceCalculator from "../components/FinanceCalculator";
import { DEFAULT_FINANCE, getCarEstimatedMonthly } from "../utils/finance";
import {
  groupCarsByModel,
  sortModelGroups,
  getCompareVariant,
  isGroupInCompare,
} from "../utils/groupByModel";

function carPassesFilters(car, filters, financeAssumptions) {
  if (filters.make !== "All" && car.make !== filters.make) return false;
  if (filters.drivetrain !== "All" && car.drivetrain !== filters.drivetrain) return false;
  if (filters.sunroof && car.sunroof !== true) return false;
  if (filters.heatedSeats && car.heatedSeats !== true) return false;
  if (filters.ventilatedSeats && car.ventilatedSeats !== true) return false;
  if (filters.heatedSteeringWheel && car.heatedSteeringWheel !== true) return false;
  if (filters.backupCamera && car.backupCamera !== true) return false;
  if (filters.parkingSensors && car.parkingSensors !== true) return false;
  if (filters.rebateOnly && !(car.federalRebate > 0)) return false;
  if (filters.confirmedOnly && !car.dataConfirmed) return false;
  if (filters.maxMonthly < 1500) {
    const monthly = getCarEstimatedMonthly(car, financeAssumptions);
    if (monthly == null || monthly > filters.maxMonthly) return false;
  }
  return true;
}

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({ ...DEFAULT_FILTERS });
  const [compareList, setCompareList] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [calcCar, setCalcCar] = useState(null);
  const [view, setView] = useState("grid");
  const [financeAssumptions, setFinanceAssumptions] = useState({ ...DEFAULT_FINANCE });
  const [selectedCar, setSelectedCar] = useState(null);

  const allGroups = useMemo(
    () => groupCarsByModel(cars, financeAssumptions),
    [financeAssumptions]
  );

  const matchingCarIds = useMemo(() => {
    const ids = new Set();
    for (const car of cars) {
      if (carPassesFilters(car, filters, financeAssumptions)) ids.add(car.id);
    }
    return ids;
  }, [filters, financeAssumptions]);

  const filteredGroups = useMemo(() => {
    const visible = allGroups.filter((g) =>
      g.variants.some((v) => matchingCarIds.has(v.id))
    );
    return sortModelGroups(visible, filters.sortBy, financeAssumptions);
  }, [allGroups, matchingCarIds, filters.sortBy, financeAssumptions]);

  const hasActiveFilters = useMemo(() => {
    const d = DEFAULT_FILTERS;
    return (
      filters.make !== d.make ||
      filters.drivetrain !== d.drivetrain ||
      filters.sunroof ||
      filters.heatedSeats ||
      filters.ventilatedSeats ||
      filters.heatedSteeringWheel ||
      filters.backupCamera ||
      filters.parkingSensors ||
      filters.rebateOnly ||
      filters.confirmedOnly ||
      filters.maxMonthly < d.maxMonthly
    );
  }, [filters]);

  useEffect(() => {
    const carId = searchParams.get("car");
    if (!carId) return;
    const found = cars.find((c) => String(c.id) === carId);
    if (found) setSelectedCar(found);
  }, [searchParams]);

  const closeCarDetail = useCallback(() => {
    setSelectedCar(null);
    if (searchParams.get("car")) {
      const next = new URLSearchParams(searchParams);
      next.delete("car");
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const toggleCompare = (car) => {
    setCompareList((prev) =>
      prev.find((c) => c.id === car.id)
        ? prev.filter((c) => c.id !== car.id)
        : prev.length < 4
          ? [...prev, car]
          : prev
    );
  };

  const openCalc = (car) => {
    setCalcCar(car);
    setView("calc");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Hero
        onViewChange={setView}
        currentView={view}
        cars={cars}
        filteredGroups={filteredGroups}
        financeAssumptions={financeAssumptions}
        onFinanceChange={setFinanceAssumptions}
      />

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {view === "calc" ? (
          <div className="py-6">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setView("grid")}
                  className="text-zinc-500 hover:text-white text-sm flex items-center gap-1.5 transition-colors"
                >
                  ← Back to cars
                </button>
                <h2 className="text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Finance Calculator
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCalcCar(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    ${!calcCar ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
                >
                  Generic
                </button>
                {cars.filter((c) => c.dataConfirmed).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCalcCar(c)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${calcCar?.id === c.id ? "bg-emerald-500 text-black" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}
                  >
                    {c.make} {c.model} {c.trim}
                  </button>
                ))}
              </div>
            </div>
            <FinanceCalculator car={calcCar} financeAssumptions={financeAssumptions} />
          </div>
        ) : (
          <>
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              makes={makes}
              drivetrains={drivetrains}
              resultCount={filteredGroups.length}
            />
            <div className="mt-3 mb-6 flex items-center justify-end">
              {compareList.length > 0 && (
                <button
                  onClick={() => setCompareOpen(true)}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full text-sm transition-all"
                >
                  Compare {compareList.length} car{compareList.length > 1 ? "s" : ""}
                </button>
              )}
            </div>
            {filteredGroups.length === 0 ? (
              <div className="text-center py-24 text-zinc-600">
                <p className="text-2xl mb-2">No cars match</p>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredGroups.map((group) => {
                  const compareCar = getCompareVariant(group);
                  const matchCount = group.variants.filter((v) =>
                    matchingCarIds.has(v.id)
                  ).length;
                  const filterMatchLabel =
                    hasActiveFilters &&
                    matchCount < group.variantCount &&
                    matchCount > 0
                      ? `${matchCount} of ${group.variantCount} trims match`
                      : null;

                  return (
                    <CarCard
                      key={group.key}
                      modelGroup={group}
                      car={compareCar}
                      financeAssumptions={financeAssumptions}
                      inCompare={isGroupInCompare(group, compareList)}
                      onToggleCompare={() => toggleCompare(compareCar)}
                      compareDisabled={
                        compareList.length >= 4 &&
                        !compareList.find((c) => c.id === compareCar.id)
                      }
                      onOpenCalc={() => openCalc(compareCar)}
                      onSelect={() => setSelectedCar(compareCar)}
                      filterMatchLabel={filterMatchLabel}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          cars={cars}
          financeAssumptions={financeAssumptions}
          onClose={closeCarDetail}
          onSelectCar={setSelectedCar}
          onOpenCalc={() => openCalc(selectedCar)}
          onToggleCompare={() => toggleCompare(selectedCar)}
          inCompare={!!compareList.find((c) => c.id === selectedCar.id)}
          compareDisabled={
            compareList.length >= 4 && !compareList.find((c) => c.id === selectedCar.id)
          }
        />
      )}

      {compareOpen && (
        <CompareDrawer
          cars={compareList}
          onClose={() => setCompareOpen(false)}
          financeAssumptions={financeAssumptions}
          onRemove={(id) => setCompareList((prev) => prev.filter((c) => c.id !== id))}
        />
      )}
      {compareList.length > 0 && !compareOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setCompareOpen(true)}
            className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 px-6 py-3 rounded-full shadow-2xl transition-all text-sm font-medium"
          >
            <span className="flex gap-1">
              {compareList.map((c) => (
                <span key={c.id} className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              ))}
            </span>
            Compare {compareList.length} selected
          </button>
        </div>
      )}
    </div>
  );
}
