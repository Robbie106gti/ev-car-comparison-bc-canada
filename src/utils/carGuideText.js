export function getCarGuideDescription(car) {
  const parts = [];

  if (car.notes) {
    const lead = car.notes.split(/[.!]/)[0].trim();
    parts.push(
      `${car.year} ${car.make} ${car.model} ${car.trim}: ${lead}${lead.endsWith(".") ? "" : "."}`
    );
  } else {
    parts.push(
      `The ${car.year} ${car.make} ${car.model} ${car.trim} delivers ${car.range} km of NRCan-rated range in ${car.drivetrain} configuration.`
    );
  }

  const reviews = car.reviews;
  if (reviews?.ownerSentiment) {
    const short = reviews.ownerSentiment.split("—")[0].split(".")[0].trim();
    if (short && !parts.some((p) => p.includes(short.slice(0, 20)))) {
      parts.push(`${short}.`);
    }
  } else if (reviews?.pros?.[0]) {
    const pro = reviews.pros[0].trim();
    parts.push(pro.endsWith(".") ? pro : `${pro}.`);
  }

  if (reviews?.cons?.[0] && parts.length < 4) {
    const con = reviews.cons[0].trim();
    const caveat = con.endsWith(".") ? con : `${con}.`;
    parts.push(`Trade-off: ${caveat}`);
  } else if (car.federalRebate === 0 && car.msrp > 50000) {
    parts.push(
      "This trim sits above the federal EVAP MSRP cap, so the $5K purchase incentive does not apply."
    );
  } else if (car.dataConfirmed) {
    parts.push("Monthly payment and incentives on this trim are dealer-confirmed for BC.");
  } else if (car.dealerDiscount > 0) {
    parts.push(
      `Dealer discount of $${car.dealerDiscount.toLocaleString()} improves value versus MSRP alone.`
    );
  }

  return parts.slice(0, 4).join(" ");
}
