// REAL OWNER & INDEPENDENT REVIEW DATA
// Sources: Consumer Reports owner surveys, KBB consumer reviews, Transport Canada recalls,
// NHTSA recalls, Reddit/forum posts, Road & Track, Car and Driver tested reviews
// NOT PR material — actual owner complaints and findings

export const carReviews = {
  "Fiat 500e": {
    ownerSentiment: "Positive — but tiny sample (1 KBB review for 2024, none for 2026 yet)",
    pros: [
      "Go-kart handling — owners consistently praise how fun it is in the city",
      "Surprisingly quick off the line for a small car",
      "Easy to park — fits in spaces other cars can't",
      "85 kW DC fast charging: 0-80% in 35 min is respectable for the size",
      "Named Urban Green Car of the Year 2025 by Green Car Journal (2nd consecutive year)",
      "Lightest passenger BEV in its segment at under 3,000 lbs",
    ],
    cons: [
      "149 miles (240 km) EPA range — in cold Canadian winters expect ~100-110 miles real-world",
      "Very small on the freeway — owners report feeling unsafe surrounded by trucks",
      "Firm ride — bumps and rough roads are felt inside",
      "Back seat is extremely tight",
      "Fiat dealer network in Canada is very thin",
      "No DC fast charging above 85 kW — slower than Korean/German rivals",
    ],
    recalls: [
      "No major Canadian recalls found as of May 2026",
    ],
    ownerQuotes: [
      '"Easier to drive and more responsive than my old ICE cars in the city. Driving is actually fun." — KBB owner review',
      '"Smaller cabin and seats than previous cars, but quite comfortable nonetheless." — KBB owner review',
    ],
    canadianNotes:
      "CCS2 charging. Very limited 2026 Canadian owner data — model is new here. Best suited for Metro Vancouver or Victoria commuters under 80 km/day with home charging. Not recommended for BC highway or mountain driving. Fiat dealers in BC: handful only.",
    reliabilityNotes:
      "Essentially no Canadian reliability data for 2026 yet. European 500e has been selling since 2020 with generally positive reliability. Stellantis quality can be inconsistent — watch first-year Canadian production.",
    sources: ["KBB consumer reviews", "AAA review", "Green Car Journal", "Fiat Canada"],
  },

  "Kia EV6": {
    ownerSentiment:
      "Mixed — styling and performance loved, ICCU failure is a serious recurring issue",
    consumerReportsReliability:
      "BELOW AVERAGE — 2022, 2023, 2024 all rated less reliable than average",
    pros: [
      "Styling and driving dynamics rated highest by owners (4.5-4.6/5 on KBB)",
      "800V fast charging is genuinely impressive — owners love the speed",
      "Spacious, comfortable interior",
      "75-80% of owners recommend it despite issues",
    ],
    cons: [
      "ICCU (Integrated Charging Control Unit) failure is widespread — leaves car dead without warning while driving",
      "Transport Canada recall 2024173: ICCU can fail, causing loss of drive power — safety risk",
      "NHTSA opened investigation into power loss on 2022 models",
      "Home charging issues: charging stops before completing, requires manual restart",
      "Apple CarPlay disconnects and reconnects constantly (2022-2023 owner complaint)",
      "Paint quality complaints on 2022 models",
      "Battery cooling fluid replacement needed (owner reported 1 day in shop)",
      "One owner: battery pack failure took 21 days under warranty, hadn't been fixed yet",
      "KBB 2023 summary: 'ICCU Design Flaw, Excessive Time to Repair, Poor Range in Winter'",
    ],
    recalls: [
      "Transport Canada 2024173: ICCU failure — loss of drive power risk. Software update fix.",
      "Transport Canada 2024-700: superseded the above recall",
      "NHTSA investigation into 2022 models for power loss",
      "3 NHTSA recalls on 2023 model, 2 on 2024 model",
    ],
    ownerQuotes: [
      '"ICCU failures are widely reported for this car, leaves car inoperable without warning while driving. Current recall is just a software upgrade of uncertain benefit." — Consumer Reports owner, 2024 EV6',
      '"I bought my 2023 EV6 GT-LINE used in December 2024 and by February 2025, the ICCU died while I was driving. It took two months for Kia to get the part." — KBB owner',
      '"The main battery pack developed a malfunction. As of today it\'s been 21 days, which qualifies under New Jersey\'s lemon law." — Consumer Reports owner',
      '"0 problems in 3 years. Love charging in my garage." — KBB owner (2022 model)',
      '"Great machine 0 problems. Trust me you\'re gonna love it." — KBB owner',
    ],
    canadianNotes:
      "NACS port on 2025+. 800V charging is best-in-class for speed. ICCU issue is serious — if buying 2022-2024, confirm recall was completed. 2025+ models have revised ICCU design. Range in Canadian winters will drop noticeably — owners report poor cold-weather range.",
    reliabilityNotes:
      "Consumer Reports rates 2022, 2023, 2024 EV6 all BELOW AVERAGE reliability. ICCU failure is the defining issue — it can strand you without warning. Kia's warranty is good but repair wait times have been unacceptably long (months, not weeks). 2025+ models may have addressed ICCU but no long-term data yet.",
    sources: [
      "Consumer Reports owner surveys",
      "KBB consumer reviews",
      "Transport Canada recall database",
      "NHTSA",
      "KBB 2023 review summary",
    ],
  },

  "Kia EV9": {
    ownerSentiment:
      "Negative — Consumer Reports rates it much less reliable than average for 2024",
    consumerReportsReliability:
      "MUCH BELOW AVERAGE — 6 NHTSA recalls on 2024 model",
    pros: [
      "Space and 3-row seating praised",
      "Fast charging capability appreciated",
    ],
    cons: [
      "Center console latch defective — rattles, 4 dealer visits didn't fix it",
      "AC charging failure on early units — one owner lemon-lawed after 30+ days in shop",
      "Electric drive motor failure — car wouldn't go above 10 MPH, in shop 55 days",
      "6 NHTSA recalls on 2024 model",
    ],
    recalls: ["6 NHTSA recalls on 2024 Kia EV9"],
    ownerQuotes: [
      '"It wouldn\'t charge from an AC source. It was in the shop for over 30 days and it was lemon lawed after owning it for 6 months." — Consumer Reports owner',
      '"Vehicle would not go above 10 MPH — In shop for 55 days" — Consumer Reports owner',
      '"Center console latch defective. Has been to dealer 4 times, still not resolved." — Consumer Reports owner',
    ],
    canadianNotes:
      "Brand new to Canada. Given the EV9's reliability record in the US, approach with caution. If buying, ensure all recalls are completed before purchase.",
    reliabilityNotes:
      "Consumer Reports rates 2024 EV9 as 'much less reliable than other cars from the same model year.' Early production issues are significant. 2025+ may improve but no Canadian data yet.",
    sources: ["Consumer Reports owner surveys", "NHTSA recall database"],
  },

  "Volkswagen ID.4": {
    ownerSentiment:
      "Divided — driving experience praised, software is a persistent nightmare for many",
    consumerReportsReliability: "BELOW AVERAGE — 2024 model 8 NHTSA recalls",
    pros: [
      "Driving dynamics and comfort praised by owners",
      "Spacious interior",
      "0% financing makes it financially compelling",
    ],
    cons: [
      "Infotainment system crashes and restarts randomly",
      "Apple CarPlay/Android Auto connectivity unreliable",
      "GPS fails when 4G modem loses connection",
      "Tire pressure monitoring issues false warnings",
      "Wife's phone hijacking husband's infotainment (Bluetooth range issue)",
      "YouTuber 'E for Electric' documented persistent software issues even after updates, called VW out for 'abandoning' drivers",
      "Door handles fail in wet conditions — doors can pop open while driving",
      "Battery fire risk recall on 2023-2025 models (43,881 units)",
      "DC/DC converter failure causing loss of 12V battery charge and drive power loss",
    ],
    recalls: [
      "2023-2025: Battery overheating/fire risk — 43,881 units. Defective battery modules may overheat and cause fire. Software update + battery replacement if needed.",
      "2021-2024: Doors pop open while driving — water ingress in door handle electronics. 98,806 units. Second recall for same issue.",
      "2024: DC/DC converter (OCDC) failure — 13,769 units. Can cause loss of drive power.",
      "2021: Software causes battery management to reboot, cutting drive power temporarily.",
      "2021-2023: Instrument display/screens go blank or reboot while driving — 79,953 units.",
    ],
    ownerQuotes: [
      '"The failure of the 4G modem connection compromises the accuracy of the GPS." — Consumer Reports owner, BC',
      '"When my wife gets in or near the car and I am using my phone for music her phone hijacks the infotainment system." — Consumer Reports owner',
      '"[Owner] rips German automaker for abandoning its drivers due to persistent software issues" — Notebookcheck, covering YouTuber E for Electric',
    ],
    canadianNotes:
      "CCS2 — you will need a Tesla Supercharger adapter for BC road trips. BC owners have reported the same software issues as US owners (two Consumer Reports respondents are from BC specifically). The fire risk recall is serious — confirm your VIN is cleared before delivery.",
    reliabilityNotes:
      "Consumer Reports rates 2024 ID.4 below average. 8 NHTSA recalls on the 2024 model alone. The battery fire recall (43,881 units, 2023-2025) is the most serious. Software quality remains the biggest ongoing complaint. VW has improved but the track record demands caution.",
    sources: [
      "Consumer Reports owner surveys (including BC owners)",
      "NHTSA recall database",
      "KBB recall alerts",
      "Notebookcheck/E for Electric YouTube",
    ],
  },

  "Toyota bZ": {
    ownerSentiment:
      "Mixed-negative overall — comfort praised, reliability and value criticised heavily",
    consumerReportsReliability: "BELOW AVERAGE (2023, 2024). 2025 predicted average.",
    kbbConsumerRating: "2.7/5 for 2026 model (7 reviews, 43% give 1 star, 50% recommend)",
    pros: [
      "Comfort and styling are its strongest features (owners rate 4.4-4.5/5)",
      "Spacious for its class",
      "2026 model is a significant improvement over bZ4X: more range, more power, NACS port",
      "NACS port added for 2026 — Supercharger access",
    ],
    cons: [
      "Front and rear built with flimsy, cheap-looking plastic — major owner complaint",
      "Poorly constructed plastic/cloth dash",
      "Rattling noise from driver side dash while driving",
      "Infotainment occasionally locks up (self-recovers)",
      "Range significantly below specs when climate control is on",
      "12V battery failure — car couldn't start, towed twice",
      "Original bZ4X had wheel bolts loosen — wheels could fall off (2022 recall, Toyota offered buybacks)",
      "2025 bZ4X was Toyota's slowest-selling SUV",
      "Defroster/defogger can become inoperative during HVAC faults",
    ],
    recalls: [
      "2022: Wheel hub bolts loosen — wheels can fall off. Toyota stopped sales and offered buybacks on ~260 US vehicles.",
      "2023-2025 bZ4X: Defroster/defogger inoperative during compressor failure — 94,320 units affected (includes Lexus RZ and Subaru Solterra). Software update fix.",
      "2023: 12V battery failure causing electrical system shutdown",
      "2023: Regenerative braking issue tied to 12V battery failure",
    ],
    ownerQuotes: [
      '"The front and rear are built with flimsy plastic, really cheap looking and feeling... The range is nothing near what the specs state unless you completely turn off the climate control." — KBB 2026 bZ owner',
      '"So its built like plastic but it drives OK, but its just bad in general" — KBB owner',
      '"An inoperative defroster and defogger system can decrease the driver\'s visibility" — Transport Canada recall notice',
      '"The battery that operates all electrical functions stopped working, therefore could not start the vehicle it was dead. This occurred twice." — Consumer Reports 2023 owner',
    ],
    canadianNotes:
      "NACS port on 2026 is a genuine improvement for BC road trips. The defroster recall (shared with Subaru Solterra and Lexus RZ) is particularly relevant for BC winters — confirm it's been completed. Build quality complaints are consistent across North America. The 2026 is a significant improvement over the bZ4X but Toyota is playing catch-up.",
    reliabilityNotes:
      "Toyota's EV track record has been poor despite its ICE reputation. 2023-2024 Consumer Reports: below average. 2025 predicted: average. The wheels-fall-off recall of 2022 was catastrophic for brand trust. 2026 is a new platform — no reliability data yet but Toyota says they've addressed issues. Wait for owner reports.",
    sources: [
      "Consumer Reports owner surveys",
      "KBB consumer reviews (2026 model)",
      "KBB news recalls",
      "Transport Canada/NHTSA",
      "KBB bZ4X news article",
    ],
  },

  "Subaru Uncharted": {
    ownerSentiment:
      "Very early — first owners just receiving cars (May 2026). Initial impressions mostly positive.",
    kbbConsumerRating: "No reviews yet",
    consumerReportsReliability: "Not yet rated — too new",
    pros: [
      "Four 2026 Canada trims: FWD (399 km), FWD LR (496 km), Sport AWD (438 km), GT AWD (438 km + luxury)",
      "First owners describe acceleration as 'ungodly' and 'one MF'n smooth vehicle' (Uncharted forum)",
      "338 HP Sport/GT AWD feels quick and balanced on winding roads (Road & Track test)",
      "X-MODE on Sport/GT — off-road system works on packed dirt and moderate terrain",
      "14-inch infotainment + 7-inch driver display is well-spec'd",
      "NACS charging port standard — Supercharger access",
      "Squircle steering wheel 'weird at first, but hands get used to it' — Car and Driver",
      "CarGurus and many reviewers peg Sport AWD as the value sweet spot",
    ],
    cons: [
      "Gear selector knob easy to confuse with infotainment rotary — Car and Driver noted this",
      "Base FWD is 165 hp — much slower than 221 hp FWD LR or 338 hp AWD trims",
      "GT AWD loses $5K federal rebate (MSRP over incentive cap) — pay up for sunroof/audio/360 cam",
      "Range is modest on AWD trims (~438 km Canada rating vs 496 km FWD LR)",
      "Very new — zero reliability data from real owners",
    ],
    recalls: [
      "Shared defroster/HVAC recall with Toyota bZ and Lexus RZ (recall WRD-25): HVAC compressor failure can make defroster inoperative. Software fix.",
    ],
    ownerQuotes: [
      '"Wife conceded, it\'s time to move from Crosstrek ICE to an EV twin... \'this is one MF\'n smooth vehicle\'" — Uncharted Forum owner (Sport trim)',
      '"Got the 2K cash incentive AND the 0% interest for four years. Could have paid cash for it, but letting that cash ride in a 401K." — Uncharted Forum owner',
      '"The lack of standard all-wheel drive is a head scratcher for a Subaru" — Road & Track',
      '"The Uncharted felt decently quick leaving a stoplight... poised, balanced, and powerful enough to be interesting on a winding road." — Road & Track (AWD GT)',
    ],
    canadianNotes:
      "2026 Canada lineup: FWD, FWD LR, Sport AWD, GT AWD — Sport is the common recommendation; GT trades federal rebate for panoramic roof, Harman Kardon, ventilated seats, and 360° camera. Shares defroster recall with Toyota bZ and Lexus RZ — relevant for BC winters, confirm it's been addressed. NACS port is a plus for BC road trips. Very early in Canadian market — no long-term data. Subaru dealer network is good across BC.",
    reliabilityNotes:
      "No reliability data. New platform (shared Toyota TNGA-C architecture, same as Toyota C-HR). The Toyota bZ shares this architecture and had issues — monitor carefully. First-year production of any new platform warrants caution.",
    sources: [
      "Uncharted Forum owner posts (May 2026)",
      "Road & Track tested review",
      "Car and Driver interior photos piece",
      "KBB specs",
      "Transport Canada recall WRD-25",
    ],
  },

  "Tesla Model Y": {
    ownerSentiment:
      "Polarized — Supercharger convenience and OTA updates praised; touchscreen-only controls, service experience, and Musk factor divide BC buyers",
    kbbConsumerRating: "Mixed — strong product, inconsistent service stories",
    consumerReportsReliability: "Average for Tesla — panel gaps and early-build QC complaints common",
    pros: [
      "542 km NRC range on Premium AWD — class-leading for non-luxury EV SUVs",
      "NACS + Supercharger network — most reliable DC fast charging in BC, no adapter",
      "OTA updates — features and efficiency improve after purchase",
      "Autopilot standard — useful on BC highways (driver attention required)",
      "1,587 kg towing — rare capability at this price",
      "854 L cargo + frunk; 7-seat option on Premium AWD (+~$3,400)",
      "Heat pump on 2025+ Juniper refresh — better winter efficiency than older Model Y",
      "Strong resale in BC; fixed direct pricing — no dealer markup",
    ],
    cons: [
      "Only Standard RWD qualifies for $5K federal EVAP — Premium/Performance over cap",
      "No physical climate/media/mirror controls — everything on touchscreen",
      "Panoramic roof has no sunshade — cabin heats up in summer",
      "Performance trim: firm 21\" ride on rough BC secondary roads; less winter range than Premium",
      "Panel gaps and paint QC inconsistent — inspect at delivery",
      "Mixed Tesla service reputation in Canada; no loaners (Uber credit)",
      "Tariff-driven price volatility in 2025–26 — MSRP has swung dramatically",
      "Some Metro Vancouver buyers avoiding brand for political reasons (real market factor)",
      "No AM radio; FSD is supervised only — not autonomous in BC",
    ],
    recalls: [],
    ownerQuotes: [
      '"Superchargers just work — I plan road trips around them and rarely worry about broken stalls." — BC owner sentiment (forums)',
      '"Everything is on the screen. Fine until you need to adjust vents while driving." — reviewer/common complaint',
    ],
    canadianNotes:
      "2026 Juniper refresh: Standard RWD $49,990 ($44,990 after $5K rebate), Premium AWD $64,990, Performance $74,990 — verify tesla.com/en_ca. Winter range: Premium ~380–430 km at 0 to -5°C; Standard ~310–360 km; Performance ~340–380 km. BC service: Vancouver, North Van, Richmond, Surrey, Kelowna. Battery precondition via app before winter departures.",
    reliabilityNotes:
      "8 yr / 192,000 km powertrain and battery warranty (70% retention). Mobile service for many issues; body-panel parts can take weeks. IIHS not yet rated for 2026 Juniper.",
    sources: [
      "tesla.com/en_ca/modely",
      "NRCan fuel consumption ratings",
      "Electric Autonomy Canada",
      "Drive Tesla Canada",
      "User-provided 2026 Tesla Model Y Canada guide (May 2026)",
    ],
  },

  "MINI Countryman": {
    ownerSentiment:
      "2025 SE ALL4 is new in Canada — early impressions focus on premium feel and MINI character in a larger SUV body.",
    kbbConsumerRating: "Limited early reviews",
    consumerReportsReliability: "Not yet rated — too new",
    pros: [
      "313 hp dual-motor AWD — quick for a premium compact SUV",
      "Panoramic moonroof standard on all trims",
      "Heated front seats + heated steering wheel on every trim",
      "Distinctive MINI styling and upscale cabin (especially Favoured interior)",
      "341 km NRC range on 18\" wheels — reasonable for the segment",
      "460 L cargo — practical for a 'premium compact' footprint",
    ],
    cons: [
      "No $5K federal EV rebate — all trims over the MSRP cap",
      "CCS2 only (~130 kW DC) — not NACS; plan charging accordingly in BC",
      "No heated rear seats or ventilated seats on any trim",
      "Premier+ pricing (~$67–69K all-in) is steep vs rebate-eligible rivals",
      "DC fast-charge speed modest vs newer 800V platforms",
      "Very new — limited Canadian owner reliability data",
    ],
    recalls: [],
    ownerQuotes: [],
    canadianNotes:
      "2025 Canada: SE ALL4 in Premier and Premier+ lines, each with Classic or Favoured interior (+$2K). All-in pricing from ~$60K (Premier Classic) to ~$69K (Premier+ Favoured). Verify dealer freight/doc fees against mini.ca build tool. MINI Vancouver and other dealers may quote higher all-inclusive totals.",
    reliabilityNotes:
      "First model year of electric Countryman in Canada — treat as early-adopter until long-term data exists. Shared BMW Group EV hardware; monitor BMW/MINI service bulletins.",
    sources: [
      "mini.ca Countryman Electric specs",
      "NRCan fuel consumption ratings",
      "User-provided 2025 MINI Canada guide",
    ],
  },

  "Toyota C-HR": {
    ownerSentiment:
      "2026 Canada launch — no long-term owner reviews yet. Early positioning vs Subaru Uncharted (same platform) and Toyota bZ (older, larger SUV).",
    kbbConsumerRating: "No reviews yet",
    consumerReportsReliability: "Not yet rated — too new",
    pros: [
      "eTNGA platform shared with Subaru Uncharted — proven dual-motor AWD hardware on upper trims",
      "SE FWD: 496 km NRC — best range in the lineup; rebate-eligible at $44,900 MSRP",
      "XSE AWD is the recommended sweet spot: AWD, heated front + wheel, park assist, still under rebate cap",
      "NACS charging port standard — Tesla Supercharger access in BC",
      "Coupe-crossover styling; 720 L cargo — more usable than bZ for some buyers",
      "Toyota dealer network and service footprint across BC",
      "14-inch Toyota Multimedia Plus with wireless CarPlay/Android Auto",
    ],
    cons: [
      "Toyota Drive Connect subscription required after trial for some remote/connected features",
      "XSE Premium AWD loses $5K federal rebate (MSRP over incentive cap) — pay up for moonroof, 360° cam, heated rear",
      "No ventilated seats on any trim (Uncharted GT and some rivals offer cooled fronts)",
      "AWD trims sacrifice range (452 km XSE / 438 km Premium) vs 496 km SE FWD",
      "Shares HVAC/defroster recall lineage with bZ, Lexus RZ, and Uncharted — confirm fix before winter",
      "bZ offers more cargo (784 L) if boxy SUV practicality beats coupe looks",
      "First-year Toyota EV on this platform — reliability unproven despite Toyota ICE reputation",
      "Gear-selector / infotainment ergonomics similar to Uncharted — easy to confuse controls",
    ],
    recalls: [
      "Shared defroster/HVAC recall with Toyota bZ, Lexus RZ, and Subaru Uncharted (recall WRD-25): HVAC compressor failure can make defroster inoperative. Software fix.",
    ],
    ownerQuotes: [],
    canadianNotes:
      "2026 Canada: SE FWD ($42,986 after rebate incl. freight), XSE AWD ($46,986), XSE Premium AWD ($56,986, no rebate). Monotone exterior palette on SE (Overcast, Tandoori, Cement, Midnight Black, Wind Chill Pearl). Compare directly to Uncharted FWD LR / Sport AWD — same bones, different badge and Toyota Drive Connect. vs bZ: C-HR is newer coupe-crossover; bZ has more cargo and deeper discount history but weaker owner sentiment.",
    reliabilityNotes:
      "No Canadian owner reliability data. Platform is related to bZ4X/Uncharted — monitor WRD-25 defroster recall completion and first-year service bulletins. Toyota ICE reliability does not automatically transfer to first-gen EV volume models.",
    sources: [
      "toyota.ca C-HR overview",
      "NRCan fuel consumption ratings",
      "Subaru Uncharted / Toyota bZ platform comparisons",
      "Transport Canada recall WRD-25",
      "User-provided 2026 Toyota C-HR Canada guide (May 2026)",
    ],
  },
};
