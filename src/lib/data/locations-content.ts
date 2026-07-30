import type { FaqItem } from "@/lib/seo";

export interface LocalServiceLink {
  slug: string;
  name: string;
  blurb: string;
}

export interface LocationContent {
  slug: string;
  name: string;
  areaServedSchema: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  localLead: string;
  localAngleHeading: string;
  localAngle: string;
  neighborhoods: string;
  localServices: LocalServiceLink[];
  coverage: string;
  faqs: FaqItem[];
  nearby: string[];
  authorityLink: { label: string; url: string };
}

export const LOCATIONS_CONTENT: Record<string, LocationContent> = {
  "santa-monica": {
    slug: "santa-monica",
    name: "Santa Monica",
    areaServedSchema: "Santa Monica, CA",
    metaTitle: "Junk Removal in Santa Monica, CA | Dump Happy",
    metaDescription:
      "Junk removal and clean-outs in Santa Monica, CA — apartment turnovers, downsizing, and renovation debris hauled fast, load-based pricing. Get a free quote today.",
    h1: "Junk Removal in Santa Monica, CA",
    localLead:
      "Santa Monica packs high-value single-family blocks and one of the Westside's densest rental markets into a few coastal square miles — which means junk piles up fast and is a genuine pain to move out. Dump Happy hauls it from anywhere in the city: a walk-up apartment off Pico, a Sunset Park garage, a North of Montana remodel. You point, we carry, and we work around Santa Monica's permit-parking and tight-street reality.",
    localAngleHeading: "Why Santa Monica is its own job",
    localAngle:
      "The city's heavy renter population drives constant move-in / move-out turnover, and its older housing stock north of Montana and in Sunset Park generates steady downsizing and renovation debris. Add strict street rules and multi-unit buildings with no easy loading access, and DIY hauling here is slower and costlier than it looks. We handle the stairs, the elevators, and the parking.",
    neighborhoods:
      "Ocean Park, Sunset Park, Pico, Wilmont, Mid-City Santa Monica, Downtown, and North of Montana — plus quick reach into neighboring Venice, Mar Vista, Brentwood, and West LA.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "full-service clear-outs for homes and apartments across the city." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "sofas and bulky pieces out of walk-ups without curb-dragging." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program, not left at the curb." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "fridges and washers hauled and disposed of legally." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "reclaim a Sunset Park garage in a single visit." },
    ],
    coverage:
      "Santa Monica sits in our Westside core, so response is fast — same-day or next-day is often available when you book early.",
    faqs: [
      { question: "Do you serve Ocean Park and Sunset Park?", answer: "Yes — both, along with Pico, Wilmont, Downtown, and North of Montana. Santa Monica is part of our Westside core, so we cover the whole city and reach neighboring Venice and Mar Vista quickly." },
      { question: "How fast can you get to Santa Monica?", answer: "Same-day or next-day is common here since it's central to our Westside service area. Book earlier in the day for the best shot at same-day, especially for single-item or small-load pickups." },
      { question: "Can you remove junk from an apartment with permit-only parking?", answer: "Yes. We work with Santa Monica's permit and metered-street setup all the time — from walk-ups and buildings without loading zones. Tell us the floor and parking situation when you book so we bring the right crew and plan." },
      { question: "The city offers free bulky pickup — why use you?", answer: "If you can wait for the appointment and drag a standard item to the curb, that's a fine free option. Hire us when it's upstairs, there are several pieces, you need it gone this week, or you'd rather not haul a sofa down a Santa Monica stairwell yourself." },
    ],
    nearby: ["venice", "brentwood", "sawtelle"],
    authorityLink: { label: "Santa Monica Chamber of Commerce", url: "https://smchamber.com/" },
  },

  "culver-city": {
    slug: "culver-city",
    name: "Culver City",
    areaServedSchema: "Culver City, CA",
    metaTitle: "Junk Removal in Culver City, CA | Dump Happy",
    metaDescription:
      "Junk removal in Culver City, CA — office clear-outs, condo turnovers, and renovation debris hauled with load-based pricing. Free quote from Dump Happy today.",
    h1: "Junk Removal in Culver City, CA",
    localLead:
      "Culver City has changed fast, and clear-outs have changed with it. Between the studios, the tech offices, and a wave of condo and home renovation, Dump Happy stays busy hauling everything from a decommissioned office suite to a Fox Hills condo's worth of old furniture. Commercial or residential, we quote it by the load and clear it out clean.",
    localAngleHeading: "Why Culver City is its own job",
    localAngle:
      "The tech and media build-out — Apple, Amazon Studios, Sony, and more anchored here — means office decommissions, furniture swaps, and renovation debris on the commercial side, while the residential market's growth drives condo turnovers and remodels. That mix (office + condo + renovation) is specific to Culver City and shapes how we crew and schedule jobs here.",
    neighborhoods:
      "Downtown Culver City, Fox Hills, Blair Hills, Carlson Park, and Culver West — plus neighboring Palms, Mar Vista, Del Rey, and Marina del Rey.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "office and residential clear-outs across the city." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "office furniture and household pieces, hauled and donated when usable." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "Fox Hills and Carlson Park garages cleared in one visit." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "legal, refrigerant-compliant appliance haul-away." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program." },
    ],
    coverage: "Culver City is central to our service area — fast same-day/next-day availability.",
    faqs: [
      { question: "Do you handle office and commercial clear-outs in Culver City?", answer: "Yes — office decommissions, furniture swaps, and post-renovation debris are common jobs here given the local tech and studio presence. We schedule around business hours and quote by volume, whether it's one suite or a full floor." },
      { question: "Do you serve Fox Hills and Downtown Culver City?", answer: "Yes — Fox Hills, Downtown, Blair Hills, Carlson Park, and Culver West, plus neighboring Palms and Del Rey. We cover the whole city and the adjacent Westside." },
      { question: "Can you take renovation and construction debris?", answer: "Yes — drywall, flooring, cabinets, and general remodel debris from Culver City homes and condos. Household hazardous waste like paint and solvents is the exception; we'll point you to the right LA County drop-off for those." },
      { question: "How is pricing set for a Culver City clear-out?", answer: "By how much space it fills in the truck — single item up to full load — quoted before we start. Office jobs are quoted the same way by volume, so there are no per-hour surprises." },
    ],
    nearby: ["marina-del-rey", "mid-city", "westchester"],
    authorityLink: { label: "Culver City Chamber of Commerce", url: "https://www.culvercitychamber.com/" },
  },

  "beverly-hills": {
    slug: "beverly-hills",
    name: "Beverly Hills",
    areaServedSchema: "Beverly Hills, CA",
    metaTitle: "Junk Removal in Beverly Hills, CA | Dump Happy",
    metaDescription:
      "Discreet junk removal and estate clean-outs in Beverly Hills, CA — large homes handled with care, load-based pricing, legal disposal. Free quote from Dump Happy.",
    h1: "Junk Removal & Estate Clean-Outs in Beverly Hills, CA",
    localLead:
      "Beverly Hills jobs are rarely one couch — they're a full estate, a decades-lived-in home being downsized, or a mansion mid-renovation. Dump Happy handles large-home clear-outs across the Flats and the canyons with care for the property and discretion for the household, hauling and disposing of everything legally, with donation prioritized for what's still valuable.",
    localAngleHeading: "Why Beverly Hills is its own job",
    localAngle:
      "The housing here skews to large estates and high-value homes, so the work is estate and property clean-outs, downsizing, and renovation debris at a scale most neighborhoods don't produce — often coordinated with realtors, estate managers, or contractors, and requiring careful handling of fine furnishings routed to donation. Strict city permitting and gated/hillside access shape the logistics.",
    neighborhoods:
      "The Flats, Trousdale Estates, Beverly Hills Post Office (BHPO), Benedict Canyon, and Coldwater Canyon — with easy reach into neighboring Century City, Bel Air, and West Hollywood.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "full estate and property clear-outs, handled discreetly." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "fine and bulky furniture, donation-first for usable pieces." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "legal, refrigerant-compliant removal from large kitchens." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "multi-car garages and storage areas cleared in a visit." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled responsibly through California's program." },
    ],
    coverage:
      "Beverly Hills is well within our service area; we schedule larger estate jobs in advance and can move quickly on smaller ones.",
    faqs: [
      { question: "Do you do full estate clean-outs in Beverly Hills?", answer: "Yes — whole-home and estate clear-outs are among our most common Beverly Hills jobs, often for downsizing, a sale, or after a renovation. We coordinate with owners, realtors, or estate managers, prioritize donation for valuable pieces, and dispose of the rest legally." },
      { question: "Can you handle homes in the canyons and gated properties?", answer: "Yes — Benedict Canyon, Coldwater Canyon, Trousdale, and gated properties. Let us know about gate access, long driveways, or hillside parking when you book so we bring the right equipment and crew size." },
      { question: "Is your crew discreet and careful with the property?", answer: "Yes. We protect floors and doorways, handle fine furnishings carefully on the way out, and keep the job low-profile. Usable items are routed to donation whenever their condition allows." },
      { question: "Do you serve BHPO and the Flats?", answer: "Yes — the Flats, BHPO, Trousdale Estates, and the canyon neighborhoods, plus adjacent Century City and Bel Air." },
    ],
    nearby: ["west-hollywood", "brentwood"],
    authorityLink: { label: "Beverly Hills Chamber of Commerce", url: "https://www.beverlyhillschamber.com/" },
  },

  "west-hollywood": {
    slug: "west-hollywood",
    name: "West Hollywood",
    areaServedSchema: "West Hollywood, CA",
    metaTitle: "Junk Removal in West Hollywood, CA | Dump Happy",
    metaDescription:
      "Junk removal in West Hollywood, CA — apartment and condo turnovers, small-load pickups from tight buildings, load-based pricing. Free quote from Dump Happy today.",
    h1: "Junk Removal in West Hollywood, CA",
    localLead:
      "WeHo is dense, vertical, and short on parking — which makes hauling anything bulkier than a trash bag a real problem. Dump Happy clears apartments and condos across West Hollywood, from a single dresser out of a Norma Triangle walk-up to a full unit turnover off the Strip, and we do the stairs and the loading so you don't have to circle the block with a mattress.",
    localAngleHeading: "Why WeHo is its own job",
    localAngle:
      "West Hollywood is overwhelmingly apartment and condo living, much of it rent-stabilized with frequent tenant turnover, in older buildings with tight stairwells and scarce parking. That means lots of small-to-medium loads, move-out clear-outs, and single-item pickups in hard-to-access units — a different rhythm from the single-family neighborhoods around it, and one we're set up for.",
    neighborhoods:
      "The Sunset Strip, West Hollywood West, Norma Triangle, the Design District, and East WeHo — with quick reach into Beverly Hills, the Fairfax District, and Hollywood.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "apartment and condo clear-outs, small loads welcome." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "bulky pieces out of tight, no-elevator buildings." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "hauled and recycled, never left at the curb (which is illegal here)." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "from compact WeHo kitchens and laundry closets." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "subterranean and shared garages cleared out." },
    ],
    coverage: "WeHo is inside our service area with fast same-day/next-day availability.",
    faqs: [
      { question: "Can you remove junk from a WeHo apartment with no elevator or loading zone?", answer: "Yes — that's most of what we do here. We handle stairwells, tight hallways, and street-only parking, and we bring the crew size the building calls for. Just flag the floor and access when you book." },
      { question: "Do you take single items, not just big jobs?", answer: "Yes — a single mattress, dresser, or couch is a single-item pickup, priced accordingly. WeHo's small units mean single-item and small-load jobs are a big part of our work here." },
      { question: "Do you serve the Sunset Strip and Norma Triangle?", answer: "Yes — the Strip, Norma Triangle, WeHo West, the Design District, and East WeHo, plus neighboring Fairfax and Beverly Hills." },
      { question: "What about a full move-out turnover?", answer: "We clear whole units for tenants, owners, and property managers — furniture, mattresses, appliances, and leftover clutter in one visit, quoted by the load. Great for turnovers between renters." },
    ],
    nearby: ["beverly-hills", "mid-city"],
    authorityLink: { label: "West Hollywood Chamber of Commerce", url: "https://www.wehochamber.com/" },
  },

  "marina-del-rey": {
    slug: "marina-del-rey",
    name: "Marina Del Rey",
    areaServedSchema: "Marina del Rey, CA",
    metaTitle: "Junk Removal in Marina del Rey, CA | Dump Happy",
    metaDescription:
      "Junk removal in Marina del Rey, CA — HOA-friendly condo clear-outs and apartment turnovers, load-based pricing, legal disposal. Free quote from Dump Happy today.",
    h1: "Junk Removal in Marina del Rey, CA",
    localLead:
      "Marina del Rey is condos, apartments, and boat slips — not garages and yards — so the clear-outs here run through elevators, shared corridors, and HOA rules. Dump Happy handles that: condo turnovers, downsizing, and unit clear-outs done cleanly and on the building's terms, from the harbor towers to the Silver Strand.",
    localAngleHeading: "Why MDR is its own job",
    localAngle:
      "As a dense, HOA-governed waterfront of condos and apartments with a transient renter population, MDR's work is condo turnovers, downsizing, and apartment clear-outs — plus the occasional load of marine and patio gear — all under building rules about elevators, service entrances, and move-out windows. We coordinate with HOAs and building management so a removal doesn't turn into a violation notice.",
    neighborhoods:
      "The harbor/marina towers, the Silver Strand, and the Marina Peninsula — with quick reach into neighboring Venice, Playa del Rey, Del Rey, and Westchester.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "condo and apartment clear-outs, HOA-coordinated." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "bulky pieces out via service elevators and corridors." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "from condo kitchens, legal and refrigerant-compliant." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "assigned/subterranean parking and storage cages cleared." },
    ],
    coverage: "MDR is in our Westside core — fast same-day/next-day availability.",
    faqs: [
      { question: "Can you work with my building's HOA and move-out rules?", answer: "Yes — we regularly coordinate with Marina del Rey HOAs and building management on elevator reservations, service entrances, and move-out windows so your clear-out stays compliant. Share the building's rules when you book and we'll plan around them." },
      { question: "Do you clear condos and apartments, not just houses?", answer: "Yes — condos and apartments are the norm in MDR, and they're what we handle most here: unit clear-outs, downsizing, and turnovers via elevators and shared corridors." },
      { question: "Do you serve the Silver Strand and the harbor towers?", answer: "Yes — the Silver Strand, the marina towers, and the peninsula, plus neighboring Venice, Del Rey, and Playa del Rey." },
      { question: "Can you take old patio or marine gear?", answer: "Yes — patio furniture, deck gear, and general household junk. Hazardous items like fuel or marine chemicals we can't haul, but we'll point you to the right LA County drop-off." },
    ],
    nearby: ["venice", "westchester", "culver-city"],
    authorityLink: { label: "LAX Coastal Chamber of Commerce", url: "https://laxcoastal.com/" },
  },

  venice: {
    slug: "venice",
    name: "Venice",
    areaServedSchema: "Venice, Los Angeles, CA",
    metaTitle: "Junk Removal in Venice, CA | Dump Happy",
    metaDescription:
      "Junk removal in Venice, CA — hauling from canal homes, walk-streets, and tight lots, plus rental turnovers. Load-based pricing. Get a free quote from Dump Happy today.",
    h1: "Junk Removal in Venice, CA",
    localLead:
      "Venice is the Westside's trickiest place to haul out of — walk-streets a truck can't reach, canal homes with footbridge-only access, and lots packed tight against each other. Dump Happy knows the workarounds: we clear Abbot Kinney bungalows, Oakwood rentals, and canal-side homes, carrying loads the distance when the truck can't get to the door.",
    localAngleHeading: "Why Venice is its own job",
    localAngle:
      "Venice's canals, pedestrian walk-streets, and dense small lots make access the whole challenge — many homes have no driveway or alley, and some are reachable only on foot. Layer on a high-turnover short-term-rental and renter market around Abbot Kinney and the boardwalk, and the work is access-constrained clear-outs and rental turnovers you can't just back a truck up to. That access reality is unique to Venice.",
    neighborhoods:
      "Abbot Kinney, Oakwood, the Venice Canals, the Marina Peninsula, and the Rose Avenue corridor — with quick reach into neighboring Santa Monica and Marina del Rey.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "clear-outs from walk-streets and canal homes, carried out by hand where needed." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "bulky pieces from tight-access bungalows." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled, never left curbside (illegal in LA)." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "legal, refrigerant-compliant haul-away." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "the rare Venice garage or storage space, cleared out." },
    ],
    coverage: "Venice sits in our Westside core — fast same-day/next-day availability.",
    faqs: [
      { question: "My place is on a walk-street / the canals with no truck access — can you still haul it?", answer: "Yes. Limited vehicle access is normal in Venice, and we carry loads from footbridge-only canal homes and walk-street houses to where the truck can legally park. Mention the access when you book so we plan the crew and route." },
      { question: "Do you handle short-term-rental and apartment turnovers?", answer: "Yes — Venice's rental and STR turnover is steady, and we clear units of leftover furniture, mattresses, and clutter between guests or tenants, quoted by the load." },
      { question: "Do you serve Abbot Kinney and Oakwood?", answer: "Yes — Abbot Kinney, Oakwood, the canals, the peninsula, and the Rose Ave corridor, plus neighboring Santa Monica and Marina del Rey." },
      { question: "How fast can you reach Venice?", answer: "Same-day or next-day is common since Venice is central to our Westside area. Book earlier in the day for same-day, especially for smaller loads." },
    ],
    nearby: ["santa-monica", "marina-del-rey"],
    authorityLink: { label: "Venice Chamber of Commerce", url: "https://venicechamber.net/" },
  },

  sawtelle: {
    slug: "sawtelle",
    name: "Sawtelle",
    areaServedSchema: "Sawtelle, Los Angeles, CA",
    metaTitle: "Junk Removal in Sawtelle, CA | Dump Happy",
    metaDescription:
      "Junk removal in Sawtelle (Little Osaka), West LA — apartment and small-business clear-outs from a dense, tight-parking corridor. Free quote from Dump Happy today.",
    h1: "Junk Removal in Sawtelle (Little Osaka), West LA",
    localLead:
      "Sawtelle — the stretch of West LA known as Sawtelle Japantown, or \"Little Osaka\" — is a packed corridor of restaurants, small shops, and apartments where a truck can't idle long and parking is a fight. Dump Happy clears apartments and small businesses along and around Sawtelle Boulevard, working fast and tight so we're not blocking the block.",
    localAngleHeading: "Why Sawtelle is its own job",
    localAngle:
      "Sawtelle is a dense restaurant-and-retail corridor (the historic Japantown / Little Osaka district) wrapped in apartments and small multi-units, near UCLA and the VA, with student and renter turnover and chronically tight parking. The work skews to small-business clear-outs, restaurant equipment and fixtures, and apartment turnovers in a compact, high-traffic zone — not the single-family garages of the neighborhoods around it.",
    neighborhoods:
      "The Sawtelle Japantown corridor along Sawtelle Boulevard and the surrounding blocks of West LA — with quick reach into neighboring Westwood, Mar Vista, and Brentwood.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "apartment and small-business clear-outs on a tight corridor." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "apartment furniture and shop fixtures hauled out." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "restaurant and household appliances, legally disposed." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "the occasional West LA garage or storage unit." },
    ],
    coverage: "Sawtelle is in our Westside core — fast same-day/next-day availability.",
    faqs: [
      { question: "Can you clear a small business or restaurant on Sawtelle Boulevard?", answer: "Yes — small-business and restaurant clear-outs (fixtures, shelving, old equipment, general junk) are common along the Sawtelle corridor. We work quickly given the tight parking and traffic, and coordinate timing so we're not blocking the street." },
      { question: "Do you serve the apartments around Little Osaka?", answer: "Yes — the apartments and multi-units in and around Sawtelle Japantown, including student and renter turnovers near UCLA and the VA. Single items and small loads are welcome." },
      { question: "Parking is terrible here — is that a problem?", answer: "No — it's normal for Sawtelle. We plan the load-out around the corridor's parking and traffic so the job goes fast. Let us know the exact address and access when you book." },
      { question: "Do you reach Westwood and Mar Vista too?", answer: "Yes — the surrounding West LA blocks plus neighboring Westwood, Mar Vista, and Brentwood." },
    ],
    nearby: ["brentwood", "santa-monica"],
    authorityLink: { label: "West LA-Sawtelle Neighborhood Council", url: "https://www.westlasawtelle.org/" },
  },

  brentwood: {
    slug: "brentwood",
    name: "Brentwood",
    areaServedSchema: "Brentwood, Los Angeles, CA",
    metaTitle: "Junk Removal in Brentwood, CA | Dump Happy",
    metaDescription:
      "Junk removal and estate clean-outs in Brentwood, Los Angeles — large homes and canyon properties handled with care, load-based pricing. Free quote from Dump Happy.",
    h1: "Junk Removal & Estate Clean-Outs in Brentwood, Los Angeles",
    localLead:
      "Brentwood clear-outs mean large homes — hillside properties up Mandeville Canyon, family homes in Brentwood Glen, estates being downsized or sold. Dump Happy handles the scale and the access, hauling full-property loads with care for the home and routing usable furnishings to donation.",
    localAngleHeading: "Why Brentwood is its own job",
    localAngle:
      "One of LA's wealthiest neighborhoods (~42,000 residents), Brentwood runs to large homes and canyon estates, so the work is estate and property clean-outs, downsizing, and renovation debris at scale — frequently with hillside and long-driveway access up the canyons that shapes how we crew and haul. Discretion and careful handling of quality furnishings matter as much as the muscle.",
    neighborhoods:
      "Brentwood Village, Brentwood Glen, Crestwood Hills, Mandeville Canyon, and Kenter Canyon — with quick reach into neighboring Pacific Palisades, Bel Air, and Santa Monica.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "full estate and large-home clear-outs." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "quality and bulky furniture, donation-first." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "multi-car and canyon-home garages cleared." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "legal, refrigerant-compliant removal." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled responsibly through California's program." },
    ],
    coverage: "Brentwood is within our service area; larger estate jobs are scheduled ahead, smaller ones move fast.",
    faqs: [
      { question: "Do you do estate and whole-home clear-outs in Brentwood?", answer: "Yes — estate clear-outs, downsizing, and full-property jobs are among our most common Brentwood work, often tied to a sale or renovation. We handle the scale, prioritize donation for valuable pieces, and dispose of the rest legally." },
      { question: "Can you reach homes up Mandeville and Kenter Canyon?", answer: "Yes — the canyon neighborhoods, hillside properties, and long-driveway homes. Tell us about access, gates, and parking when you book so we bring the right equipment and crew." },
      { question: "Do you serve Brentwood Village and Brentwood Glen?", answer: "Yes — the Village, the Glen, Crestwood Hills, and the canyons, plus neighboring Pacific Palisades and Bel Air." },
      { question: "Will you be careful with the home and furnishings?", answer: "Yes — we protect floors and doorways, handle quality pieces carefully, and keep jobs low-profile. Usable furniture is routed to donation whenever condition allows." },
    ],
    nearby: ["santa-monica", "sawtelle", "beverly-hills"],
    authorityLink: { label: "City of LA, Council District 11 — Brentwood", url: "https://cd11.lacity.gov/neighborhoods/brentwood" },
  },

  westchester: {
    slug: "westchester",
    name: "Westchester",
    areaServedSchema: "Westchester, Los Angeles, CA",
    metaTitle: "Junk Removal in Westchester, CA | Dump Happy",
    metaDescription:
      "Junk removal in Westchester, CA near LAX — garage clean-outs, estate jobs, and LMU move-outs, load-based pricing, legal disposal. Free quote from Dump Happy today.",
    h1: "Junk Removal in Westchester, CA",
    localLead:
      "Westchester is the Westside's suburb — single-family homes with real garages, families who've filled them over the years, and LMU rentals that turn over every spring. Dump Happy clears the classic Westchester jobs: a two-car garage you can't park in, a family downsizing, a student place emptied at move-out.",
    localAngleHeading: "Why Westchester is its own job",
    localAngle:
      "Unlike the apartment-dense neighborhoods to the north, Westchester is largely postwar single-family homes with garages and yards, near LAX and Loyola Marymount University. That means the bread-and-butter work is garage clean-outs, estate and downsizing jobs, and LMU student move-out turnover — the kind of house-and-garage clutter you don't see in a WeHo high-rise.",
    neighborhoods:
      "Kentwood, Loyola Village, and the Westchester bluffs — with quick reach into neighboring Playa Vista, Playa del Rey, Marina del Rey, El Segundo, and Inglewood.",
    localServices: [
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "the classic Westchester two-car-garage reclaim." },
      { slug: "junk-removal", name: "Junk Removal", blurb: "whole-home and yard clear-outs for single-family homes." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "family furniture hauled and donated when usable." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "the old garage fridge included, disposed legally." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program." },
    ],
    coverage:
      "Westchester is in our South Bay-adjacent core (covered by the LAX-area chamber below) — fast same-day/next-day availability.",
    faqs: [
      { question: "Do you clear out garages in Westchester?", answer: "Yes — garage clean-outs are our most common Westchester job. Single-family homes here have real garages that fill up over the years; we clear them (including the old fridge) in a single visit and leave the floor swept, priced by the load." },
      { question: "Do you serve Kentwood and Loyola Village?", answer: "Yes — Kentwood, Loyola Village, and the bluffs, plus neighboring Playa Vista, Playa del Rey, El Segundo, and Inglewood." },
      { question: "Can you handle an LMU student move-out?", answer: "Yes — we clear student rentals of leftover furniture, mattresses, and junk at move-out, quoted by volume. Spring turnover near Loyola Marymount is a busy stretch for us here." },
      { question: "You're near LAX — is disposal handled legally?", answer: "Yes — everything is sorted for donation, recycling, or licensed disposal. Refrigerant appliances go to certified recovery, and hazardous items are routed to the right LA County drop-off, never dumped." },
    ],
    nearby: ["marina-del-rey", "culver-city"],
    authorityLink: { label: "LAX Coastal Chamber of Commerce", url: "https://laxcoastal.com/" },
  },

  "mid-city": {
    slug: "mid-city",
    name: "Mid-City",
    areaServedSchema: "Mid-City, Los Angeles, CA",
    metaTitle: "Junk Removal in Mid-City, LA | Dump Happy",
    metaDescription:
      "Junk removal in Mid-City, Los Angeles — older-home clear-outs, renovation debris, and residential turnovers, load-based pricing. Free quote from Dump Happy today.",
    h1: "Junk Removal in Mid-City, Los Angeles",
    localLead:
      "Mid-City sits in the middle of it all — older Los Angeles homes and duplexes along the Venice, Pico, and La Brea corridors, many being renovated or turned over. Dump Happy clears these central-LA properties of decades of accumulation, remodel debris, and old furnishings, quoted by the load and hauled out legally.",
    localAngleHeading: "Why Mid-City is its own job",
    localAngle:
      "Central LA's Mid-City runs to older, historic housing stock — pre-war homes and duplexes — mixed with small commercial along its main corridors, and it's steadily gentrifying and renovating. The work here is older-home clear-outs, renovation and remodel debris, and residential turnover in properties without the big garages or estates of the Westside — a distinctly central-LA job.",
    neighborhoods:
      "The core Mid-City area (around La Brea Avenue and the Santa Monica Freeway, zips 90016/90019) and adjacent West Adams and Arlington Heights — with reach into neighboring Mid-Wilshire, the Miracle Mile edge, and Koreatown.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "older-home and duplex clear-outs across central Mid-City." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "heavy, dated furniture out of pre-war homes." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "legal, refrigerant-compliant removal." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "recycled through California's program." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "older detached garages and storage cleared." },
    ],
    coverage:
      "Mid-City is in central LA — a bit outside our Westside core, so we schedule these jobs rather than promising same-day, and confirm the window when you book.",
    faqs: [
      { question: "Do you serve central Mid-City around La Brea and the 10?", answer: "Yes — the core Mid-City area (zips 90016 and 90019) plus adjacent West Adams and Arlington Heights, with reach into Mid-Wilshire and Koreatown. (If you mean a different \"Mid-City,\" just tell us the cross-streets.)" },
      { question: "Can you take renovation and remodel debris from an older home?", answer: "Yes — drywall, flooring, cabinets, and general remodel debris from Mid-City's older homes and duplexes. Household hazardous waste like paint and solvents is the exception; we'll point you to the LA County drop-off." },
      { question: "How quickly can you reach Mid-City?", answer: "Mid-City is central LA, a bit outside our Westside base, so we schedule a set window rather than promising same-day. We'll give you a firm time with your quote." },
      { question: "Do you clear whole homes and duplexes?", answer: "Yes — full clear-outs for owners, tenants, and property managers, including turnovers and downsizing, quoted by the load." },
    ],
    nearby: ["koreatown", "west-hollywood", "culver-city"],
    authorityLink: { label: "Mid City Neighborhood Council", url: "https://www.mincla.org/" },
  },

  koreatown: {
    slug: "koreatown",
    name: "Koreatown",
    areaServedSchema: "Koreatown, Los Angeles, CA",
    metaTitle: "Junk Removal in Koreatown, LA | Dump Happy",
    metaDescription:
      "Junk removal in Koreatown, Los Angeles — apartment turnovers and small-load pickups from LA's densest neighborhood, load-based pricing. Free quote from Dump Happy.",
    h1: "Junk Removal in Koreatown, Los Angeles",
    localLead:
      "Koreatown is the densest neighborhood in Los Angeles — high-rise apartments, older multi-units, and almost no garages or yards. The junk problem here is getting a mattress or a couch out of a packed building with an elevator and no place to park a truck. Dump Happy does exactly that: apartment clear-outs and small-load pickups, worked around the building and the block.",
    localAngleHeading: "Why K-Town is its own job",
    localAngle:
      "K-Town is wall-to-wall apartments and multi-unit buildings with the highest population density in the city, a heavy renter population, and near-zero single-family garages or estates. So the work is apartment turnovers, single-item and small-load pickups, and landlord/property-manager clear-outs through elevators and tight corridors — the opposite of a Westside garage or estate job. Curbside dumping is common here and illegal, which is exactly why booked removal matters.",
    neighborhoods:
      "The Wilshire Center corridor and the core of Koreatown, with the Windsor Square edge — and reach into neighboring Mid-Wilshire, Pico-Union, and Mid-City.",
    localServices: [
      { slug: "junk-removal", name: "Junk Removal", blurb: "apartment and multi-unit clear-outs, small loads welcome." },
      { slug: "furniture-removal", name: "Furniture Removal", blurb: "couches and dressers out of high-rise units." },
      { slug: "mattress-removal", name: "Mattress Removal", blurb: "hauled and recycled, never left at the curb (illegal in LA)." },
      { slug: "appliance-removal", name: "Appliance Removal", blurb: "from compact apartment kitchens, disposed legally." },
      { slug: "garage-cleanout", name: "Garage Clean-Out", blurb: "subterranean/shared building garages and storage cages." },
    ],
    coverage:
      "Koreatown is central LA, outside our Westside core, so we schedule a set window rather than promising same-day — confirmed when you book.",
    faqs: [
      { question: "Can you get a mattress or couch out of a K-Town high-rise?", answer: "Yes — that's the typical Koreatown job. We handle elevators, tight corridors, and street-only parking, and single items or small loads are welcome. Tell us the floor, elevator access, and parking when you book so we plan the load-out." },
      { question: "Do you do apartment turnovers for landlords and property managers?", answer: "Yes — we clear units of leftover furniture, mattresses, appliances, and junk between tenants, quoted by the load. Multi-unit and recurring turnover work is common for us here." },
      { question: "How fast can you reach Koreatown?", answer: "K-Town is central LA, outside our Westside base, so we schedule a set window instead of promising same-day. You'll get a firm time with your quote." },
      { question: "Do you serve Wilshire Center and toward Mid-Wilshire?", answer: "Yes — the Wilshire Center corridor and the core of Koreatown, plus neighboring Mid-Wilshire, Pico-Union, and Mid-City." },
    ],
    nearby: ["mid-city", "west-hollywood"],
    authorityLink: { label: "Korean American Chamber of Commerce of Los Angeles", url: "https://lakacc.com/" },
  },
};

export function getLocationContent(slug: string): LocationContent | undefined {
  return LOCATIONS_CONTENT[slug];
}
