import { Link } from "react-router-dom";

const REPO_URL = "https://github.com/Robbie106gti/ev-car-comparison-bc-canada";
const ISSUE_URL =
  "https://github.com/Robbie106gti/ev-car-comparison-bc-canada/issues/new?title=Data%20correction%20or%20mistake&body=**What%20needs%20fixing%3F**%0A%0A**Vehicle%20%2F%20trim%3A**%0A**Field%20(MSRP%2C%20rebate%2C%20range%2C%20etc.)%3A**%0A**What%20we%20show%20today%3A**%0A**What%20it%20should%20be%3A**%0A**Source%20(build%20tool%2C%20dealer%20quote%2C%20link)%3A**%0A%0A---%0AThank%20you%20%E2%80%94%20community%20corrections%20help%20everyone%20shopping%20in%20BC.";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link
            to="/"
            className="text-zinc-500 hover:text-white text-sm flex items-center gap-1.5 transition-colors mb-6"
          >
            ← Back to comparison
          </Link>
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">BC Canada · 2026</p>
          <h1
            className="text-4xl md:text-5xl font-black leading-none tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Why EV<span className="text-emerald-400">.</span>Compare exists
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 pb-24 space-y-12">
        <section>
          <h2
            className="text-xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Why we built this
          </h2>
          <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
            <p>
              Shopping for an electric vehicle in British Columbia is exciting — and genuinely hard. MSRPs,
              federal rebates, dealer credits, and finance offers all move at once, and every household runs the
              numbers differently. We built EV.Compare for BC shoppers who want one honest place to line up real
              vehicles side by side, using the same down payment and trade-in assumptions everyone in the family can
              understand.
            </p>
            <p>
              This started as a practical tool for our own circle: friends and relatives comparing their first EV,
              second car, or upgrade from a gas SUV. We were tired of glossy brochures that hide what you will
              actually pay per month after incentives. So we pulled pricing from manufacturer build tools, wrote down
              what owners actually say in the real world, and put it in a grid you can filter, sort, and compare —
              without signing up for anything.
            </p>
            <p>
              We are not affiliated with any automaker, dealer group, or charging network. No one pays us to rank a
              car higher. When data is wrong, we want you to tell us — and we fix it in the open.
            </p>
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What we&apos;re trying to achieve
          </h2>
          <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>
                <strong className="text-zinc-200">Fair comparisons for BC buyers</strong> — payments estimated with
                $5,000 down and $8,000 trade (adjustable in the header), BC taxes included, so you can compare trims
                on equal footing.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>
                <strong className="text-zinc-200">Build-tool pricing, not guesswork</strong> — MSRP, incentives, and
                monthly figures trace back to configurator and program rules where we have confirmed them.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>
                <strong className="text-zinc-200">Honest review context</strong> — short expert notes plus owner
                sentiment so you see strengths and annoyances before a test drive.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 shrink-0">✓</span>
              <span>
                <strong className="text-zinc-200">A tool you can share</strong> — send the link to a partner, parent, or
                friend; everyone looks at the same numbers and assumptions.
              </span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2
            className="text-xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How to help
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            The project lives on GitHub. You can star it, suggest vehicles, or open an issue when something looks off —
            wrong rebate, stale MSRP, missing trim, or a typo in a review summary. Every correction makes the comparison
            better for the next person shopping in BC.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700 transition-all"
            >
              View on GitHub
            </a>
            <a
              href={ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-500 text-black hover:bg-emerald-400 transition-all"
            >
              Report a mistake
            </a>
          </div>
          <p className="text-zinc-600 text-xs mt-4">
            The report button opens a new GitHub Issue with a short template you can fill in.
          </p>
        </section>

        <section className="border-t border-zinc-800 pt-10">
          <h2
            className="text-lg font-bold text-zinc-300 mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Disclaimer
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            All pricing and payment figures on this site are <strong className="text-zinc-400">estimates</strong> for
            comparison only. Incentives, APRs, freight, and dealer discounts change frequently. Federal rebate
            eligibility depends on program rules and final transaction price. Always verify numbers with a dealer or
            manufacturer build tool before you sign. We do our best to keep data current; we cannot guarantee
            accuracy for every trim in every month.
          </p>
        </section>
      </main>
    </div>
  );
}
