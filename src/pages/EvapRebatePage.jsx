import { Link } from "react-router-dom";

const SOURCES = [
  {
    label: "Electric Vehicle Affordability Program (EVAP) — overview",
    href: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program/electric-vehicle-affordability-program-overview",
  },
  {
    label: "EVAP — questions and answers (eligibility, final transaction value)",
    href: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program/questions-answers-about-electric-vehicle-affordability-program",
  },
  {
    label: "EVAP program hub (Transport Canada)",
    href: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program",
  },
  {
    label: "EVAP eligible vehicle list",
    href: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/electric-vehicle-affordability-program-evap/electric-vehicle-affordability-program-vehicle-list",
  },
  {
    label: "Incentives for Zero-Emission Vehicles (iZEV) — previous program",
    href: "https://tc.canada.ca/en/road-transportation/innovative-technologies/electric-vehicles/incentives-zero-emission-vehicles-izev",
  },
  {
    label: "Natural Resources Canada — zero-emission vehicles",
    href: "https://natural-resources.canada.ca/energy-efficiency/transportation-alternative-fuels/personal-vehicles/zero-emission-vehicles",
  },
  {
    label: "Go Electric BC — provincial rebates and programs",
    href: "https://goelectricbc.gov.bc.ca/rebates-and-programs/for-individuals/explore-personal-rebate-offers/",
  },
];

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-bold text-white mb-3"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h2>
      <div className="text-zinc-300 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function EvapRebatePage() {
  return (
    <div
      className="min-h-screen bg-zinc-950 text-zinc-100"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="text-zinc-500 hover:text-emerald-400 text-sm transition-colors inline-flex items-center gap-1.5 mb-6"
          >
            ← Back to comparison
          </Link>
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            BC Canada · May 2026
          </p>
          <h1
            className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Federal <span className="text-emerald-400">EVAP</span> rebate
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            How Canada&apos;s federal zero-emission purchase incentive works — and how this app models it for BC shoppers.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 pb-20">
        <Section title="What it is">
          <p>
            The federal government&apos;s current program is the{" "}
            <strong className="text-white">Electric Vehicle Affordability Program (EVAP)</strong>.
            It replaced the earlier{" "}
            <strong className="text-white">Incentives for Zero-Emission Vehicles (iZEV)</strong>{" "}
            program, which ended March 31, 2025. Dealers and ads often still say &ldquo;federal EV rebate&rdquo; or &ldquo;EVAP&rdquo; — same idea: a point-of-sale discount on eligible new battery-electric (and some plug-in hybrid) light-duty vehicles.
          </p>
          <p>
            For purchases in <strong className="text-white">2026</strong>, eligible battery-electric and hydrogen fuel-cell vehicles can receive up to{" "}
            <strong className="text-emerald-400">$5,000</strong> (plug-in hybrids up to $2,500). Amounts step down in later program years. EVAP runs for eligible transactions from February 16, 2026 through March 31, 2031, subject to funding.
          </p>
        </Section>

        <Section title="The $50,000 cap (and why some trims here show $0)">
          <p>
            EVAP is aimed at affordable models. For most imports, eligibility depends on{" "}
            <strong className="text-white">final transaction value</strong> — the price you agree to pay for the trim plus certain options and fees, but not freight, taxes, trade-ins, or other government incentives — being{" "}
            <strong className="text-white">$50,000 or less</strong>. Canadian-assembled EVs can qualify without that cap; check official rules for your build.
          </p>
          <p>
            This app uses each trim&apos;s listed <strong className="text-white">MSRP</strong> as a practical filter: if MSRP is already above $50,000, we set <code className="text-emerald-300/90 bg-zinc-900 px-1 rounded">federalRebate: 0</code> because the trim typically cannot meet the cap once options and fees are added. Examples in our data:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-1.5 ml-1">
            <li>
              <span className="text-zinc-200">Tesla Model Y Premium / Performance</span> — MSRP well over $50K → no federal rebate in-app
            </li>
            <li>
              <span className="text-zinc-200">Model Y Standard RWD</span> — at $49,990 MSRP → $5,000 rebate shown (still verify your configured price)
            </li>
            <li>
              <span className="text-zinc-200">Toyota C-HR XSE Premium AWD</span> — $54,900 MSRP → over cap
            </li>
            <li>
              <span className="text-zinc-200">MINI Countryman Electric</span> — all trims from ~$60K → no rebate
            </li>
            <li>
              <span className="text-zinc-200">Kia EV4 GT-Line</span> and similar sport trims — often still under $50K MSRP and marked eligible here; your dealer quote is what counts
            </li>
          </ul>
          <p className="text-zinc-500 text-xs border-l-2 border-zinc-700 pl-3">
            Official rules use final transaction value, not MSRP alone. Always confirm on the bill of sale before you order.
          </p>
        </Section>

        <Section title="How it works at purchase">
          <p>
            The incentive is applied at the <strong className="text-white">point of sale</strong> by an enrolled dealership or authorized seller — you should see a lower price on the bill of sale or lease, not a cheque weeks later. The dealer completes Transport Canada forms (consumer consent and attestation) and is reimbursed by the program.
          </p>
          <p>
            Individuals can receive <strong className="text-white">one</strong> EVAP incentive over the five-year program. Businesses and some fleets have higher limits; see official Q&amp;A for details.
          </p>
        </Section>

        <Section title="Stacking with BC programs">
          <p>
            Federal EVAP can stack with provincial or territorial incentives where those programs are active. In British Columbia, passenger EV rebate programs under{" "}
            <a
              href="https://goelectricbc.gov.bc.ca/rebates-and-programs/for-individuals/explore-personal-rebate-offers/"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Electric BC
            </a>{" "}
            have been subject to pauses and updates — check the current status and amounts on the official site rather than relying on this page.
          </p>
          <p>
            Transport Canada states the federal incentive applies on top of provincial/territorial programs when both qualify.
          </p>
        </Section>

        <Section title="How EV Compare uses it">
          <p>
            Each vehicle in our dataset has a <code className="text-emerald-300/90 bg-zinc-900 px-1 rounded">federalRebate</code> field — usually <strong className="text-white">$5,000</strong> or <strong className="text-white">$0</strong> based on the MSRP cap rule above.
          </p>
          <p>
            <code className="text-emerald-300/90 bg-zinc-900 px-1 rounded">totalAfterIncentives</code> is the price we show after subtracting that federal amount (and any listed dealer discount). It does not include BC PST/GST, luxury tax, or provincial rebates unless noted elsewhere on the card.
          </p>
          <p>
            Use the <strong className="text-white">Federal rebate only</strong> filter on the home page to hide trims we mark as ineligible.
          </p>
        </Section>

        <section>
          <h2
            className="text-xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Sources
          </h2>
          <p className="text-amber-200/90 text-sm mb-4 bg-amber-950/40 border border-amber-900/50 rounded-lg px-4 py-3">
            Verify eligibility on the official site before ordering. Program rules, vehicle lists, and funding can change.
          </p>
          <ul className="space-y-3">
            {SOURCES.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 text-sm underline underline-offset-2 transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
