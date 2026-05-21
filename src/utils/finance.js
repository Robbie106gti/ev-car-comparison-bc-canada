export const LOAN_TERM_YEARS = [3, 4, 5, 6, 7];

export const DEFAULT_FINANCE = {
  downPayment: 5000,
  tradeIn: 8000,
  loanTermYears: 5,
};

export function loanTermMonths(years) {
  return years * 12;
}

/** Standard amortization; principal is total price before down/trade. */
export function calculateMonthlyPayment(principal, apr, months, down = 0, trade = 0) {
  const financed = Math.max(0, principal - down - trade);
  if (months <= 0) return 0;
  if (apr === 0) return financed / months;
  const r = apr / 100 / 12;
  return financed * r / (1 - Math.pow(1 + r, -months));
}

export function getCarEstimatedMonthly(car, { downPayment, tradeIn, loanTermYears }) {
  if (car.apr == null || car.totalAfterIncentives == null) return car.monthlyPayment ?? null;
  const months = loanTermMonths(loanTermYears);
  return Math.round(
    calculateMonthlyPayment(
      car.totalAfterIncentives,
      car.apr,
      months,
      downPayment,
      tradeIn
    )
  );
}

export function financeAssumptionsMatchDefaults({ downPayment, tradeIn, loanTermYears }) {
  return (
    downPayment === DEFAULT_FINANCE.downPayment &&
    tradeIn === DEFAULT_FINANCE.tradeIn &&
    loanTermMonths(loanTermYears) === loanTermMonths(DEFAULT_FINANCE.loanTermYears)
  );
}

/** True when we show a user-driven estimate instead of the stored build-tool payment. */
export function isEstimatedMonthly(car, assumptions) {
  if (car.apr == null || car.totalAfterIncentives == null) return false;
  if (!car.dataConfirmed) return true;
  const est = getCarEstimatedMonthly(car, assumptions);
  if (est == null) return false;
  if (!financeAssumptionsMatchDefaults(assumptions)) return true;
  return car.monthlyPayment == null || est !== car.monthlyPayment;
}

export function formatCad(n) {
  return `$${Math.round(n).toLocaleString()}`;
}
