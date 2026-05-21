// REAL OWNER & INDEPENDENT REVIEW DATA
// Sources: Consumer Reports owner surveys, KBB consumer reviews, Transport Canada recalls,
// NHTSA recalls, Reddit/forum posts, Road & Track, Car and Driver tested reviews
// NOT PR material — actual owner complaints and findings

export const carReviews = {
  "Fiat 500e": {
    ownerSentiment: "Positive in Europe — 2026 Canada launch; tiny sample (1 KBB review for 2024 MY, none for 2026 yet)",
    consumerReportsReliability: "Thin data — 2026 not rated; no long-term Canadian owner surveys",
    pros: [
      "Go-kart handling — owners consistently praise how fun it is in the city",
      "Surprisingly quick off the line for a small car",
      "Easy to park — fits in spaces other cars can't",
      "85 kW DC fast charging: 0-80% in ~35 min is respectable for the size",
      "227 km NRCan rated range — competitive for a city EV at this price",
      "Pop + Icona both qualify for $5K federal EVAP; Icona often has large dealer discounts",
      "Named Urban Green Car of the Year 2025 by Green Car Journal (2nd consecutive year)",
      "Lightest passenger BEV in its segment at under 3,000 lbs",
    ],
    cons: [
      "~170 km real-world winter range verified in BC — no heat pump hurts cold-weather efficiency",
      "No sunroof, no AWD — city car only; not for mountain highways or ski trips",
      "Very small on the freeway — owners report feeling unsafe surrounded by trucks",
      "Firm ride — bumps and rough roads are felt inside",
      "Back seat is extremely tight (4 seats)",
      "Fiat dealer network in Canada is very thin — service and parts can be slow",
      "No DC fast charging above 85 kW — slower than Korean/German rivals",
      "Pop: no wiper de-icer; heated seats on Pop — confirm on build sheet",
    ],
    recalls: [
      "No major Canadian recalls found as of May 2026 — monitor Stellantis campaigns",
    ],
    ownerQuotes: [
      '"Easier to drive and more responsive than my old ICE cars in the city. Driving is actually fun." — KBB owner review (2024 MY)',
      '"Smaller cabin and seats than previous cars, but quite comfortable nonetheless." — KBB owner review',
    ],
    canadianNotes:
      "2026 Canada: Pop (~$37,290 after $5K federal, ~$42,290 incl. freight before tax) and Icona (~$32,290 pre-tax stack after $8K dealer + $5K federal; confirmed ~$414/mo @ 1.99% with $5K down + $8K trade). CCS1 DC port — Tesla Supercharger access requires NACS adapter (not native NACS). ~170 km winter range realistic without heat pump. No sunroof on either trim. Best for Metro Vancouver / Victoria commuters under 80 km/day with home charging. Not recommended for BC Interior highways. Fiat dealers in BC: handful only.",
    reliabilityNotes:
      "Consumer Reports has very thin 2026 Canadian data. European 500e sold since 2020 with generally positive reliability. Stellantis first-year Canadian production quality can be inconsistent — inspect at delivery and complete any open recalls.",
    sources: [
      "KBB consumer reviews",
      "AAA review",
      "Green Car Journal",
      "Fiat Canada",
      "NRCan fuel consumption ratings",
      "User-provided 2026 Fiat 500e Canada guide (May 2026)",
    ],
  },

  "Kia EV4": {
    ownerSentiment:
      "Very early in Canada (May 2026) — no long-term owner data yet. Press previews positive on value; platform risk is the elephant in the room.",
    consumerReportsReliability: "Not yet rated — too new",
    pros: [
      "Wind FWD: 552 km NRCan at ~$41K after rebate — exceptional range per dollar for a sedan",
      "Five FWD trims all qualify for $5K federal EVAP rebate",
      "NACS port standard — Tesla Supercharger access without adapter",
      "7 yr / 160,000 km powertrain warranty beats most rivals (Tesla 8 yr / 192,000 km is longer but Kia dealer network is broader in BC)",
      "408 L cargo — competitive for the class",
      "Heat pump on Wind and above — important for BC winters (Light trim lacks it)",
      "GT-Line V2L — useful for camping and power outages",
    ],
    cons: [
      "Trunk is a liftback with a high lip and narrow opening — awkward for strollers and large boxes (not a true hatch)",
      "400V architecture vs EV6's 800V — DC fast charging slower than Ioniq 5 / EV6 on road trips",
      "Shares E-GMP derivatives with EV6 — ICCU (Integrated Charging Control Unit) failures are a documented EV6 issue; EV4 uses related hardware — monitor recalls",
      "Light trim: no heat pump, 391 km range, 58.3 kWh — winter range will disappoint vs Wind",
      "Wind Premium drops to 515 km vs 552 km on Wind — pay more for sunroof, get less rated range",
      "Very new model — zero Canadian reliability or resale data",
      "Kia dealer experience varies; first-year production bugs possible",
    ],
    recalls: [
      "No Canada-specific EV4 recalls as of May 2026 — watch for ICCU-related campaigns inherited from EV6 platform",
    ],
    ownerQuotes: [],
    canadianNotes:
      "2026 Canada: Light ($37,185 after rebate), Wind ($41,185 — recommended), Wind Premium ($43,685), GT-Line ($46,685), GT-Line Limited ($50,185). All FWD, NACS, 408 L cargo. Compare Wind vs Tesla Model 3 and Hyundai Ioniq 6. If you road-trip Highway 1 often, weigh 400V charging vs 800V rivals. Confirm kia.ca build pricing before ordering.",
    reliabilityNotes:
      "No owner reliability data. EV4 is on Kia's ICCU-equipped charging architecture (400V variant of E-GMP). EV6 ICCU failures (Transport Canada recall 2024173) are the main platform concern — ask dealer if 2026 EV4 has revised hardware. Kia's long warranty is a genuine advantage if issues arise, but repair wait times on EV6 have been months.",
    sources: [
      "kia.ca EV4 specs",
      "NRCan fuel consumption ratings",
      "Kia EV6 ICCU recall / Consumer Reports",
      "User-provided 2026 Kia EV4 Canada guide (May 2026)",
    ],
  },

  "Kia EV6": {
    ownerSentiment:
      "Mixed — driving dynamics and 800V charging praised; ICCU failures and no federal rebate are major concerns",
    consumerReportsReliability:
      "BELOW AVERAGE — 2022, 2023, 2024 all rated less reliable than average",
    pros: [
      "800V E-GMP: 350 kW DC, ~18–20 min 10–80% — transformative for BC Highway 1 road trips",
      "Wind RWD: 513 km NRCan — best EV6 range; heat pump for BC winters",
      "Sporty, engaging driving — CarGurus Canada: masks weight well, firm communicative ride",
      "SynTex synthetic leather standard all trims (no cloth); V2L standard",
      "690 L cargo (1,322 L seats folded) — crossover practicality",
      "10 yr / 200,000 km powertrain + battery warranty",
      "NACS port — Tesla Supercharger access (verify station compatibility on route)",
      "2025 Juniper refresh improves dual 12.3\" displays and software",
    ],
    cons: [
      "No federal EVAP rebate on any 2025 trim — all over $50K MSRP cap (EV4 Wind Premium is ~$17K less after rebate with sunroof)",
      "Panoramic sunroof only on Land + Premium Package (~$60,685+) — CarGurus: most trims lack sunroof; expensive to get with AWD",
      "GT performance model discontinued in Canada for 2025",
      "Light RWD: no heat pump, 381 km rated — expect ~250–290 km BC winter",
      "ICCU (Integrated Charging Control Unit) failure widespread on 2022–2024 — Transport Canada recall 2024173",
      "Rear cross-traffic auto-brake: CarGurus flagged sudden hard unnecessary stops in driveways; cannot disable without losing alert",
      "Cargo modest vs ID.4 (858 L), Model Y (854 L), bZ (784 L); low roofline — tall drivers report tight headroom",
      "Not all Tesla Superchargers open to non-Tesla NACS — plan BC trips; optional CCS adapter helps",
      "Voice recognition poor without active Kia Connect subscription (CarGurus)",
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
      '"The EV6 lacks a panoramic sunroof, but we didn\'t miss it. The oversized standard design works just fine." — CarGurus.ca Canadian review (base trims)',
      '"Rear cross-traffic auto-brake triggered a sudden, hard, unexpected halt when reversing from a driveway — unpleasant and cannot be turned off without disabling the whole system." — CarGurus.ca',
      '"0 problems in 3 years. Love charging in my garage." — KBB owner (2022 model)',
    ],
    canadianNotes:
      "2025 MY is current in Canada (not 2026 yet). Six trims: Light ($52,185), Wind ($54,995), Land AWD ($57,185), Land + Premium ($60,685), Land + GT-Line ($63,185), GT-Line Limited ($68,061) — all incl. $2,150 dest, no rebate. vs EV4: EV6 Wind RWD matches EV4 range (~513 km) but costs ~$14K more with no rebate; EV6 wins on 800V road-trip charging and cargo. EV4 Wind Premium ($43,685 after rebate) is the daily-driver value pick. Confirm kia.ca pricing before ordering.",
    reliabilityNotes:
      "Consumer Reports: 2022–2024 BELOW AVERAGE. ICCU can strand the car without warning; Kia warranty is strong but EV6 repair waits have been months. 2025 revised ICCU — limited data. Shares E-GMP with EV4 (400V) — monitor ICCU-related campaigns on both.",
    sources: [
      "Consumer Reports owner surveys",
      "KBB consumer reviews",
      "Transport Canada recall database",
      "CarGurus.ca Canadian EV6 review (GT-Line Limited)",
      "NHTSA",
      "User-provided 2025 Kia EV6 Canada guide (May 2026)",
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
    consumerReportsReliability: "BELOW AVERAGE — 2024 model rated below average; 8 NHTSA recalls",
    pros: [
      "Driving dynamics and comfort praised by owners",
      "858 L cargo — best in this comparison set vs Model Y (854 L) and bZ (784 L)",
      "423 km NRCan on most 2025/2026 trims — competitive for the class",
      "0% financing (2025/2026 Canada) is a major financial upside vs 5–7% APR rivals — lowers true cost even without federal rebate",
      "Five-trim lineup (Pro → Pro S Plus) lets you avoid paying for sunroof/audio until Pro S Plus",
    ],
    cons: [
      "Consumer Reports rates 2024 ID.4 below average reliability — not a strong long-term bet",
      "Infotainment system crashes and restarts randomly",
      "Apple CarPlay/Android Auto connectivity unreliable",
      "GPS fails when 4G modem loses connection — BC owners specifically report modem-related nav failures",
      "Tire pressure monitoring issues false warnings",
      "Wife's phone hijacking husband's infotainment (Bluetooth range issue)",
      "YouTuber 'E for Electric' documented persistent software issues even after updates, called VW out for 'abandoning' drivers",
      "Door handles fail in wet conditions — doors can pop open while driving (repeat recall)",
      "Battery overheating / fire risk recall on 2023–2025 models (43,881 units)",
      "On-board DC/DC converter (OCDC) failure can cause loss of 12V charge and drive power",
      "No federal EV rebate — MSRPs start ~$50K and climb to ~$63K+ for Pro S Plus",
      "CCS2 only — Tesla Supercharger adapter required for easiest BC road-trip charging",
      "Pro S Plus range drops to ~406 km NRCan vs 423 km on lower trims",
    ],
    recalls: [
      "2023-2025: Battery overheating/fire risk — 43,881 units. Defective battery modules may overheat and cause fire. Software update + battery replacement if needed.",
      "2021-2024: Doors pop open while driving — water ingress in door handle electronics. 98,806 units. Second recall for same issue.",
      "2024: On-board DC/DC converter (OCDC) failure — 13,769 units. Can cause loss of 12V battery charge and sudden loss of drive power.",
      "2021: Software causes battery management to reboot, cutting drive power temporarily.",
      "2021-2023: Instrument display/screens go blank or reboot while driving — 79,953 units.",
    ],
    ownerQuotes: [
      '"The failure of the 4G modem connection compromises the accuracy of the GPS." — Consumer Reports owner, BC',
      '"When my wife gets in or near the car and I am using my phone for music her phone hijacks the infotainment system." — Consumer Reports owner',
      '"[Owner] rips German automaker for abandoning its drivers due to persistent software issues" — Notebookcheck, covering YouTuber E for Electric',
    ],
    canadianNotes:
      "2025/2026 Canadian guide: Pro RWD ~$49,995 → Pro S Plus AWD ~$63,310 (all incl. freight, before tax). No federal rebate on any trim. 0% APR is the headline deal. CCS2 — plan a Tesla NACS adapter for Supercharger-heavy BC routes. Confirm all open recalls (battery fire, doors, OCDC) are closed on your VIN before delivery. BC Consumer Reports owners report the same modem/GPS and software issues as US owners.",
    reliabilityNotes:
      "Consumer Reports rates the 2024 ID.4 below average — 8 NHTSA recalls on that model year alone. The battery fire recall (43,881 units, 2023–2025) is the most serious; door-handle and OCDC recalls affect daily safety. Software quality remains the biggest ongoing complaint. VW has improved but the track record demands caution — weigh 0% financing against reliability risk.",
    sources: [
      "Consumer Reports owner surveys (including BC owners)",
      "NHTSA recall database",
      "KBB recall alerts",
      "Notebookcheck/E for Electric YouTube",
      "VW Canada 2025/2026 ID.4 pricing guide",
    ],
  },

  "Toyota bZ": {
    ownerSentiment:
      "Mixed-negative overall — KBB 2.7/5; comfort praised, reliability and value criticised heavily",
    consumerReportsReliability: "BELOW AVERAGE (2023, 2024). 2025 predicted average.",
    kbbConsumerRating: "2.7/5 for 2026 model (7 reviews, 43% give 1 star, 50% recommend)",
    pros: [
      "Comfort and styling are its strongest features (owners rate 4.4-4.5/5)",
      "Spacious for its class — 784 L cargo",
      "2026 rename from bZ4X: up to 25% more range, 50% more AWD power, NACS port",
      "NACS port — Supercharger access for BC road trips",
      "Motor Illustrated: improved driving dynamics vs outgoing bZ4X",
    ],
    cons: [
      "Front and rear built with flimsy, cheap-looking plastic — major owner complaint",
      "Poorly constructed plastic/cloth dash",
      "Dual wireless charging pads criticized — phones slip off, inconsistent charging (Motor Illustrated)",
      "Rattling noise from driver side dash while driving",
      "Infotainment occasionally locks up (self-recovers)",
      "Range significantly below specs when climate control is on",
      "12V battery failure — car couldn't start, towed twice",
      "Original bZ4X had wheel bolts loosen — wheels could fall off (2022 recall, Toyota offered buybacks)",
      "2025 bZ4X was Toyota's slowest-selling SUV",
      "Defroster/defogger can become inoperative during HVAC faults (recall WRD-25 lineage)",
    ],
    recalls: [
      "2022: Wheel hub bolts loosen — wheels can fall off. Toyota stopped sales and offered buybacks on ~260 US vehicles.",
      "2023-2025 bZ4X (recall WRD-25): Defroster/defogger inoperative during HVAC compressor failure — 94,320 units (includes Lexus RZ, Subaru Solterra). Software update fix.",
      "2023: 12V battery failure causing electrical system shutdown",
      "2023: Regenerative braking issue tied to 12V battery failure",
    ],
    ownerQuotes: [
      '"The front and rear are built with flimsy plastic, really cheap looking and feeling... The range is nothing near what the specs state unless you completely turn off the climate control." — KBB 2026 bZ owner (2.7/5)',
      '"So its built like plastic but it drives OK, but its just bad in general" — KBB owner',
      '"An inoperative defroster and defogger system can decrease the driver\'s visibility" — Transport Canada recall notice (WRD-25)',
      '"The battery that operates all electrical functions stopped working, therefore could not start the vehicle it was dead. This occurred twice." — Consumer Reports 2023 owner',
    ],
    canadianNotes:
      "2026 Canada: XLE FWD from $45,990 MSRP (~$43,035 after $5K federal incl. freight), XLE AWD $53,390 (no federal rebate; stackable Toyota purchase incentives), Limited AWD $61,690. NACS port is a genuine BC road-trip plus. Confirm WRD-25 defroster/HVAC recall completed before winter — shared with Solterra and Lexus RZ. Motor Illustrated notes better road manners than bZ4X but still trails newer rivals on refinement.",
    reliabilityNotes:
      "Toyota's EV track record has been poor despite its ICE reputation. 2023-2024 Consumer Reports: below average. 2025 predicted: average. The wheels-fall-off recall of 2022 was catastrophic for brand trust. 2026 bZ is refreshed hardware — no long-term Canadian owner data yet. Wait for owner reports.",
    sources: [
      "Consumer Reports owner surveys",
      "KBB consumer reviews — 2026 bZ 2.7/5",
      "KBB bZ4X news / recalls",
      "Motor Illustrated (2026 bZ Canadian coverage)",
      "Transport Canada / NHTSA (WRD-25)",
      "Toyota Canada media release (2026 bZ pricing)",
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
