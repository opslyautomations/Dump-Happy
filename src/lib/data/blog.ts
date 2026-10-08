import type { FaqItem } from "@/lib/seo";

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  category: string;
  summary: string;
  datePublished: string;
  dateModified: string;
  relatedServices: string[];
  relatedLocations: string[];
  imageAlt: string;
  // 40–60 word direct answer shown at the top of the post — the passage AI
  // Overviews, ChatGPT, and Perplexity are most likely to quote.
  quickAnswer?: string;
  // Rendered as an on-page FAQ section plus FAQPage structured data.
  faqs?: FaqItem[];
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "junk-removal-cost-los-angeles",
    title: "How Much Does Junk Removal Cost in Los Angeles?",
    metaTitle: "Junk Removal Cost in Los Angeles (2026 Prices) | Dump Happy",
    metaDescription:
      "Junk removal in Los Angeles costs $289 to $899 with Dump Happy, based on truck volume. See each load tier, what fits, and what changes your quote.",
    targetKeyword: "junk removal cost los angeles",
    category: "Pricing",
    summary: "LA junk removal prices by load tier ($289–$899) and what drives cost; links Pricing + Junk Removal.",
    datePublished: "2026-04-06",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal"],
    relatedLocations: [],
    imageAlt: "Junk removal crew loading a truck by volume in Los Angeles",
    quickAnswer:
      "Junk removal in Los Angeles costs about $289 to $899 with Dump Happy, priced by how much of the truck your items fill. A single bulky item or small load starts at $289, a half load at $569, and a full 16ft trailer at $899. Labor, hauling, and disposal are included, and you get a firm quote before loading.",
    faqs: [
      {
        question: "How much is junk removal in Los Angeles?",
        answer:
          "With Dump Happy, junk removal in Los Angeles starts at $289 for a small load and runs up to $899 for a full 16ft trailer. Quarter loads start at $389, half loads at $569, and three-quarter loads at $739. The price includes labor, hauling, and disposal.",
      },
      {
        question: "How much does it cost to remove one item, like a couch?",
        answer:
          "A single bulky item like a couch, mattress, or refrigerator falls into the small load tier, which starts at $289. Adding a few more items to the same pickup often costs little or nothing extra, since you pay for truck space rather than per piece.",
      },
      {
        question: "Is junk removal priced by the hour?",
        answer:
          "Not at Dump Happy. Pricing is based on how much space your items take up in the truck, so a slow parking situation or long carry doesn't run up a clock. Stairs or unusual access are discussed up front as part of the quote.",
      },
      {
        question: "Are dump fees included in the junk removal price?",
        answer:
          "Yes. Disposal and recycling fees are built into the load price. The quote you approve before loading is what you pay, unless you add items or the job turns out larger than described, and any change is confirmed with you first.",
      },
    ],
  },
  {
    slug: "what-junk-haulers-cant-take",
    title: "What Junk Haulers Can and Can't Take",
    metaTitle: "What Junk Removal Companies Won't Take | Dump Happy",
    metaDescription:
      "Household hazardous waste, paint, and asbestos are off-limits for junk haulers. Here's what's banned, why, and where to take it in LA County instead.",
    targetKeyword: "what junk removal wont take",
    category: "Disposal Rules",
    summary: "HHW and banned items; where to take them; links Garage Clean-Out + Appliance.",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
    relatedServices: ["garage-cleanout", "appliance-removal"],
    relatedLocations: [],
    imageAlt: "Household hazardous waste sorted separately from a junk removal load",
  },
  {
    slug: "illegal-dumping-los-angeles",
    title: "Is It Legal to Leave Junk on the Curb in LA?",
    metaTitle: "Is Illegal Dumping in LA a Crime? | Dump Happy",
    metaDescription:
      "Leaving furniture or debris on a curb or alley in LA can mean fines up to $10,000 under California law. Here's what Penal Code 374.3 actually says.",
    targetKeyword: "illegal dumping los angeles",
    category: "Disposal Rules",
    summary: "PC 374.3 penalties, vehicle impound; why legal hauling matters; links Junk Removal.",
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    relatedServices: ["junk-removal"],
    relatedLocations: [],
    imageAlt: "Illegally dumped furniture on a Los Angeles curbside",
  },
  {
    slug: "what-happens-to-junk-after-pickup",
    title: "What Actually Happens to Your Junk After Pickup",
    metaTitle: "Where Does Your Junk Go After Pickup? | Dump Happy",
    metaDescription:
      "A reputable hauler doesn't just dump your junk. Here's how donation, recycling, and legal disposal actually work once your items leave your home.",
    targetKeyword: "where does junk go after removal",
    category: "Guides",
    summary: "Donate/recycle/dispose flow; links Furniture + Mattress.",
    datePublished: "2026-04-27",
    dateModified: "2026-04-27",
    relatedServices: ["furniture-removal", "mattress-removal"],
    relatedLocations: [],
    imageAlt: "Donated furniture being sorted at a Los Angeles donation center",
  },
  {
    slug: "mattress-disposal-california",
    title: "How to Dispose of a Mattress in California",
    metaTitle: "Mattress Disposal Rules in California | Dump Happy",
    metaDescription:
      "California recycles old mattresses through Bye Bye Mattress, with free drop-offs across LA County. How it works, and when to hire it out.",
    targetKeyword: "mattress disposal california",
    category: "Disposal Rules",
    summary: "Bye Bye Mattress program, free drop-offs, why hire out; links Mattress Removal.",
    datePublished: "2026-05-04",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Old mattress being loaded for recycling in California",
    quickAnswer:
      "In California, old mattresses should be recycled, not landfilled. You can drop one off free at a Bye Bye Mattress site, use your city's bulky item pickup, have the retailer take it back when a new one is delivered, or hire a hauler like Dump Happy to carry it out and route it to a mattress recycler.",
  },
  {
    slug: "refrigerator-disposal-california",
    title: "Refrigerator Disposal Rules in California",
    metaTitle: "Refrigerator Disposal Rules in CA | Dump Happy",
    metaDescription:
      "Old fridges hold refrigerant that must be recovered before disposal under federal and California law. What's required, and how rebates help.",
    targetKeyword: "refrigerator disposal california",
    category: "Disposal Rules",
    summary: "EPA 608 refrigerant recovery, rebates; links Appliance Removal.",
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    relatedServices: ["appliance-removal"],
    relatedLocations: [],
    imageAlt: "Old refrigerator being removed for certified refrigerant recovery",
  },
  {
    slug: "how-to-prep-garage-cleanout",
    title: "How to Prep for a Garage Clean-Out",
    metaTitle: "How to Prep for a Garage Clean-Out | Dump Happy",
    metaDescription:
      "Getting a garage clean-out quote right starts with a little prep. Here's a simple, step-by-step way to sort your garage before the crew arrives.",
    targetKeyword: "garage cleanout tips",
    category: "Guides",
    summary: "Step-by-step + hazardous sorting; links Garage Clean-Out.",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    relatedServices: ["garage-cleanout"],
    relatedLocations: [],
    imageAlt: "Cluttered garage being sorted before a clean-out",
  },
  {
    slug: "estate-cleanout-checklist",
    title: "Estate Clean-Out Checklist: Where to Start",
    metaTitle: "Estate Clean-Out Checklist | Dump Happy",
    metaDescription:
      "Clearing a family home is overwhelming. This executor-friendly estate clean-out checklist covers valuables, timelines, and where to start first.",
    targetKeyword: "estate cleanout checklist",
    category: "Guides",
    summary: "Executor-focused steps, valuables, timelines; links Estate Clean-Out.",
    datePublished: "2026-05-25",
    dateModified: "2026-05-25",
    relatedServices: ["estate-cleanout"],
    relatedLocations: ["beverly-hills", "brentwood"],
    imageAlt: "Executor sorting boxes during an estate clean-out",
  },
  {
    slug: "how-hot-tub-removal-works",
    title: "How Hot Tub Removal Works (and Why It's Not DIY)",
    metaTitle: "How Hot Tub Removal Works | Dump Happy",
    metaDescription:
      "A dead hot tub is heavier and far more dangerous to remove than it looks. Here's exactly how professional hot tub removal actually works, step by step.",
    targetKeyword: "hot tub removal process",
    category: "Guides",
    summary: "Drain/disconnect/cut/haul, weight, disposal; links Hot Tub Removal.",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    relatedServices: ["hot-tub-removal"],
    relatedLocations: [],
    imageAlt: "Hot tub being cut down into sections for removal",
  },
  {
    slug: "construction-debris-recycling-los-angeles",
    title: "LA's Construction Debris Recycling Rules for Contractors",
    metaTitle: "LA Construction Debris Recycling Rules | Dump Happy",
    metaDescription:
      "LA County requires most construction debris to be recycled, and it can affect your Certificate of Occupancy. What contractors should know before demo day.",
    targetKeyword: "construction debris recycling los angeles",
    category: "Disposal Rules",
    summary: "C&D 70% rule + Certificate of Occupancy angle; links Construction Debris.",
    datePublished: "2026-06-08",
    dateModified: "2026-06-08",
    relatedServices: ["construction-debris-removal"],
    relatedLocations: ["culver-city", "brentwood"],
    imageAlt: "Construction debris sorted for recycling at a Los Angeles job site",
  },
  {
    slug: "sb-1383-yard-waste-los-angeles",
    title: "SB 1383 and Your Yard Waste: What LA Homeowners Should Know",
    metaTitle: "SB 1383 Yard Waste Rules in LA | Dump Happy",
    metaDescription:
      "California's SB 1383 requires yard trimmings to be diverted from landfills. Here's what that means for LA homeowners and landscapers hauling green waste.",
    targetKeyword: "yard waste rules los angeles",
    category: "Disposal Rules",
    summary: "Organics diversion, what counts; links Yard Waste.",
    datePublished: "2026-06-15",
    dateModified: "2026-10-07",
    relatedServices: ["yard-waste-removal"],
    relatedLocations: [],
    imageAlt: "Yard trimmings and green waste piled for organics recycling",
    quickAnswer:
      "SB 1383 is California's law requiring organic waste, including yard trimmings, to be diverted from landfills to composting and mulching. Its penalties target cities and haulers, not individual homeowners, but it means green waste should go in the green bin or be hauled to an organics facility rather than mixed with trash.",
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs. Dumpster Rental: Which Is Cheaper?",
    metaTitle: "Junk Removal vs Dumpster Rental | Dump Happy",
    metaDescription:
      "Junk hauler or dumpster rental? An honest side-by-side breakdown of cost, effort, and when each option makes more sense for your project.",
    targetKeyword: "junk removal vs dumpster rental",
    category: "Guides",
    summary: "When each wins; links Junk Removal + Construction Debris.",
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    relatedServices: ["junk-removal", "construction-debris-removal"],
    relatedLocations: [],
    imageAlt: "Dumpster rental next to a loaded junk removal truck",
  },
  {
    slug: "helping-a-loved-one-with-hoarding",
    title: "How to Help a Loved One Facing Hoarding",
    metaTitle: "Helping a Loved One With Hoarding | Dump Happy",
    metaDescription:
      "Supporting someone with hoarding disorder takes patience and the right resources. Here's a compassionate, judgment-free guide to helping them get started.",
    targetKeyword: "hoarding cleanup help",
    category: "Guides",
    summary: "Compassionate, resource-forward guide; links Hoarding Clean-Out.",
    datePublished: "2026-06-29",
    dateModified: "2026-06-29",
    relatedServices: ["hoarding-cleanout"],
    relatedLocations: [],
    imageAlt: "A supportive family member helping sort belongings",
  },
  {
    slug: "office-cleanout-ewaste-california",
    title: "Office Clean-Outs: E-Waste and Data Rules in California",
    metaTitle: "Office E-Waste Rules in California | Dump Happy",
    metaDescription:
      "Old office computers count as covered e-waste in California, and dumping them is illegal. Here's what businesses need to know about disposal and data.",
    targetKeyword: "office e-waste disposal california",
    category: "Disposal Rules",
    summary: "Covered e-waste + data destruction basics; links Commercial.",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    relatedServices: ["commercial-junk-removal"],
    relatedLocations: ["culver-city", "koreatown"],
    imageAlt: "Old office computers and monitors staged for e-waste recycling",
  },
  {
    slug: "junk-removal-santa-monica-apartment-moveout",
    title: "Coastal Apartment Move-Outs: Junk Removal in Santa Monica",
    metaTitle: "Santa Monica Apartment Move-Out Junk | Dump Happy",
    metaDescription:
      "Santa Monica's renter turnover is constant, and move-out junk piles up fast. Here's how apartment junk removal works in one of LA's densest coastal markets.",
    targetKeyword: "junk removal santa monica",
    category: "Local Guides",
    summary: "Renter-turnover angle; links Santa Monica + Furniture.",
    datePublished: "2026-07-13",
    dateModified: "2026-07-13",
    relatedServices: ["furniture-removal"],
    relatedLocations: ["santa-monica"],
    imageAlt: "Furniture being moved out of a Santa Monica apartment building",
  },
  {
    slug: "estate-cleanout-beverly-hills-brentwood",
    title: "Estate Clean-Outs in Beverly Hills & Brentwood",
    metaTitle: "Estate Clean-Outs in Beverly Hills & Brentwood",
    metaDescription:
      "Large-home estate clean-outs in Beverly Hills and Brentwood come with their own challenges — scale, discretion, and canyon access. Here's what to expect.",
    targetKeyword: "estate cleanout beverly hills",
    category: "Local Guides",
    summary: "Large-home/executor guide; links Beverly Hills, Brentwood, Estate.",
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    relatedServices: ["estate-cleanout"],
    relatedLocations: ["beverly-hills", "brentwood"],
    imageAlt: "Large estate home being cleared out in Beverly Hills",
  },
  {
    slug: "apartment-junk-removal-koreatown-weho",
    title: "Apartment Junk Removal in Koreatown & West Hollywood",
    metaTitle: "Apartment Junk Removal: Koreatown & WeHo",
    metaDescription:
      "High-density living in Koreatown and West Hollywood means elevators, tight corridors, and small loads. Here's how apartment junk removal works there.",
    targetKeyword: "apartment junk removal koreatown",
    category: "Local Guides",
    summary: "High-density small-load angle; links Koreatown, West Hollywood.",
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    relatedServices: ["junk-removal", "furniture-removal"],
    relatedLocations: ["koreatown", "west-hollywood"],
    imageAlt: "High-rise apartment building in Koreatown, Los Angeles",
  },
  {
    slug: "garage-cleanout-westchester-lax",
    title: "Garage Clean-Outs Near LAX: A Westchester Guide",
    metaTitle: "Garage Clean-Outs Near LAX in Westchester",
    metaDescription:
      "Westchester's single-family garages fill up fast near LAX and LMU. Here's a local guide to what a typical Westchester garage clean-out looks like.",
    targetKeyword: "garage cleanout westchester",
    category: "Local Guides",
    summary: "LAX-adjacent single-family angle; links Westchester + Garage Clean-Out.",
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
    relatedServices: ["garage-cleanout"],
    relatedLocations: ["westchester"],
    imageAlt: "Single-family home garage near LAX in Westchester, Los Angeles",
  },
  {
    slug: "mattress-removal-cost-los-angeles",
    title: "How Much Does Mattress Removal Cost in Los Angeles?",
    metaTitle: "Mattress Removal Cost in Los Angeles (2026) | Dump Happy",
    metaDescription:
      "What mattress removal actually costs in LA, what changes the price, and when a free option makes more sense than paying a hauler.",
    targetKeyword: "mattress removal cost los angeles",
    category: "Pricing",
    summary: "Mattress removal pricing, free vs paid options; links Mattress Removal + Pricing.",
    datePublished: "2026-09-28",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Queen mattress and box spring loaded into a junk removal truck in Los Angeles",
    quickAnswer:
      "Mattress removal in Los Angeles with Dump Happy starts at $289 for a small load, which usually fits a mattress, box spring, and bed frame together. The price includes carrying it out of any room, hauling, and recycling. Free options exist, such as LA Sanitation bulky item pickup, but you have to get the mattress to the curb yourself.",
    faqs: [
      {
        question: "How much does it cost to get a mattress picked up in Los Angeles?",
        answer:
          "Dump Happy's pickups start at $289 for a small load, which covers a mattress plus a few other items, like a box spring and bed frame. The price covers the crew carrying it out, the haul, and routing it to a mattress recycler.",
      },
      {
        question: "Is there a way to get rid of a mattress for free in LA?",
        answer:
          "Yes. City of LA homes served by LA Sanitation can schedule a free bulky item pickup through MyLA311 or by calling 311. California retailers must also offer to take your old mattress back free when they deliver a new one, and LA County has free residential drop-off sites through the Bye Bye Mattress program.",
      },
      {
        question: "Does a box spring cost extra?",
        answer:
          "With load-based pricing you pay for the space your items take up, not per piece. A mattress, box spring, and frame usually fit in the same small load.",
      },
    ],
  },
  {
    slug: "free-mattress-pickup-los-angeles",
    title: "Free Mattress Pickup in Los Angeles: Every Option Compared",
    metaTitle: "Free Mattress Pickup in Los Angeles: 4 Options | Dump Happy",
    metaDescription:
      "LA Sanitation bulky item pickup, retailer take-back, Bye Bye Mattress drop-offs, or a paid hauler — here's how each free and paid mattress option in LA works.",
    targetKeyword: "free mattress pickup los angeles",
    category: "Guides",
    summary: "Compares LASAN bulky pickup, retailer take-back, drop-off, paid hauling.",
    datePublished: "2026-09-28",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Old mattress waiting for a scheduled pickup outside a Los Angeles home",
    quickAnswer:
      "Yes, free mattress pickup exists in Los Angeles. Homes served by LA Sanitation can book a free bulky item pickup through MyLA311 or 311, retailers must take your old mattress back free when they deliver a new one, and Bye Bye Mattress runs free drop-off sites. For in-home pickup on your schedule, Dump Happy's paid pickup starts at $289.",
    faqs: [
      {
        question: "Does LA Sanitation pick up mattresses for free?",
        answer:
          "Yes, for homes that LA Sanitation serves. Schedule a bulky item pickup through MyLA311, the MyLA311 app, or by calling 311 at least one business day before your regular trash day. Mattresses and box springs are accepted.",
      },
      {
        question: "Will the store take my old mattress when they deliver a new one?",
        answer:
          "In California, retailers must offer to take back your used mattress at no charge when they deliver a new one. Retailers that ship through a common carrier must offer to arrange a pickup within 30 days. They can refuse a mattress that's contaminated, for example with bed bugs.",
      },
      {
        question: "I live in an apartment building. Can I use the city's bulky item pickup?",
        answer:
          "Usually, yes. In the City of LA, apartment buildings with five or more units still get LA Sanitation bulky item pickup, funded through a Multi-Family Bulky Item Fee on the LADWP bill. Ask your property manager how bookings and set-out are handled in your building. If that option is slow or unavailable, a paid junk removal pickup is the fastest legal alternative.",
      },
    ],
  },
  {
    slug: "bed-bug-mattress-disposal",
    title: "How to Get Rid of a Mattress With Bed Bugs (Without Spreading Them)",
    metaTitle: "How to Dispose of a Mattress With Bed Bugs | Dump Happy",
    metaDescription:
      "A bed bug mattress can't go on the curb or to donation. How to seal it, label it, and get it out of your home without spreading the infestation.",
    targetKeyword: "dispose of mattress with bed bugs",
    category: "Disposal Rules",
    summary: "Safe bed bug mattress disposal steps; links Mattress Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Mattress sealed in plastic and labeled for bed bug disposal",
    faqs: [
      {
        question: "Can I donate a mattress that had bed bugs?",
        answer:
          "No. Donation centers won't take an infested mattress, and passing one on spreads the problem to another household. It should be sealed, labeled, and sent to disposal or recycling.",
      },
      {
        question: "Can I leave a bed bug mattress on the curb?",
        answer:
          "Not unless it's set out for a scheduled pickup. An unscheduled mattress on the curb can be treated as illegal dumping, and people often take curbside mattresses home, which spreads bed bugs to new homes.",
      },
      {
        question: "Will a mattress retailer take back a mattress with bed bugs?",
        answer:
          "Usually not. California's take-back rule lets retailers refuse a used mattress that's contaminated and a health or safety risk. Tell whoever picks it up about the bed bugs in advance.",
      },
    ],
  },
  {
    slug: "leaving-furniture-on-curb-free-sign",
    title: "Can You Leave Furniture on the Curb With a “Free” Sign in LA?",
    metaTitle: "Is Leaving Furniture on the Curb With a Free Sign Legal? | Dump Happy",
    metaDescription:
      "A “free” sign doesn't make curbside furniture legal. What California Penal Code 374.3 says, the fines, and how to give things away legally in LA.",
    targetKeyword: "leaving furniture on curb free sign",
    category: "Disposal Rules",
    summary: "Curb 'free' sign legality under PC 374.3; legal alternatives; links Furniture Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["furniture-removal", "junk-removal"],
    relatedLocations: [],
    imageAlt: "Couch on a Los Angeles sidewalk with a handwritten free sign",
    faqs: [
      {
        question: "Is it illegal to put free stuff on the curb in California?",
        answer:
          "Often, yes. California Penal Code 374.3 makes it unlawful to dump waste matter on any part of a road's right-of-way, which includes the sidewalk and parkway. A “free” sign doesn't change that if the item is left behind and becomes trash. Keeping items on your own property, like a driveway or front yard, is a different situation.",
      },
      {
        question: "What's the fine for leaving junk on the curb in California?",
        answer:
          "Under Penal Code 374.3, a first conviction carries a mandatory fine of $250 to $1,000, rising to $750 to $3,000 for a third conviction. Each day the item stays out counts as a separate violation. Commercial quantities, meaning one cubic yard or more, are a misdemeanor with higher fines.",
      },
      {
        question: "How can I give away furniture legally?",
        answer:
          "List it online and keep it on your own property until someone picks it up. You can also schedule a donation pickup, or book a bulky item or junk removal pickup for anything that doesn't find a taker.",
      },
    ],
  },
  {
    slug: "someone-dumped-junk-on-my-property",
    title: "Someone Dumped Junk on My Property or Street — What Now?",
    metaTitle: "Someone Dumped Junk on My Property in LA: What to Do | Dump Happy",
    metaDescription:
      "Found a couch in your alley or debris on your lot? How to report illegal dumping in LA, who handles cleanup, and how to prevent it.",
    targetKeyword: "report illegal dumping los angeles",
    category: "Disposal Rules",
    summary: "Reporting dumping (MyLA311/311, LA County), property owner cleanup, prevention.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["junk-removal"],
    relatedLocations: [],
    imageAlt: "Illegally dumped mattress and debris in a Los Angeles alley",
    faqs: [
      {
        question: "How do I report illegal dumping in Los Angeles?",
        answer:
          "In the City of Los Angeles, report it through MyLA311, the MyLA311 app, or by calling 311. Include the exact location and a photo if you can. Unincorporated LA County has its own reporting through LA County Public Works, and cities like Santa Monica and Culver City run their own services.",
      },
      {
        question: "Who has to clean up junk dumped on my private property?",
        answer:
          "Generally the property owner. Cities clean up the public right-of-way, but debris on private land is usually the owner's responsibility, even if someone else dumped it. Leaving it there can lead to code enforcement notices.",
      },
      {
        question: "What should I do if I see someone dumping?",
        answer:
          "Don't confront them. Note the time, location, vehicle description, and license plate if you can do so safely, then report it. That information is what makes enforcement possible.",
      },
    ],
  },
  {
    slug: "tenant-left-belongings-california",
    title: "Tenant Left Belongings Behind? California's Abandoned Property Rules",
    metaTitle: "Tenant Left Stuff Behind in California: Landlord Rules | Dump Happy",
    metaDescription:
      "Tenant left belongings behind? California's notice rules, the 15/18-day deadlines, the $700 threshold, and when a landlord can clear the unit.",
    targetKeyword: "tenant abandoned property california",
    category: "Guides",
    summary: "Civil Code 1983/1984/1988 notice, 15/18 days, $700; property manager clean-outs.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["junk-removal", "estate-cleanout"],
    relatedLocations: [],
    imageAlt: "Furniture and boxes left behind in an empty rental apartment in Los Angeles",
    faqs: [
      {
        question: "How long does a California landlord have to keep a former tenant's belongings?",
        answer:
          "After the tenant vacates, the landlord gives written notice describing the property and a deadline to claim it. The deadline must be at least 15 days after the notice is personally delivered, or at least 18 days after it's mailed (Civil Code 1983).",
      },
      {
        question: "Can a landlord throw away property a tenant left behind?",
        answer:
          "After the notice period passes without a claim, if the landlord reasonably believes the total resale value is under $700, the landlord may keep or dispose of it (Civil Code 1988). If it's worth more, it has to be sold at a public sale after published notice.",
      },
      {
        question: "Can a junk removal company clear out a unit after the notice period?",
        answer:
          "Yes. Once you're legally clear to dispose of the property, a hauler can empty the unit in one visit, donate what's usable, and recycle or legally dispose of the rest. This article is general information, not legal advice. Confirm your situation with an attorney if you're unsure.",
      },
    ],
  },
  {
    slug: "tv-disposal-los-angeles",
    title: "How to Dispose of an Old TV in Los Angeles",
    metaTitle: "TV Disposal in Los Angeles: Where Old TVs Go | Dump Happy",
    metaDescription:
      "Old TVs can't go in the trash in California. Here are the legal ways to get rid of a flat-screen or tube TV in LA — free e-waste pickup, drop-offs, and hauling.",
    targetKeyword: "tv disposal los angeles",
    category: "Disposal Rules",
    summary: "E-waste rules for TVs; LASAN e-waste pickup, S.A.F.E. centers; links Junk Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["junk-removal", "commercial-junk-removal"],
    relatedLocations: [],
    imageAlt: "Old flat-screen and tube televisions set aside for e-waste recycling",
    faqs: [
      {
        question: "Can I throw a TV in the trash in California?",
        answer:
          "No. TVs and monitors are treated as hazardous electronic waste in California because they can contain lead, mercury, and other toxic materials. They have to go to an e-waste collector or recycler, not your trash bin.",
      },
      {
        question: "Does LA Sanitation pick up old TVs?",
        answer:
          "Yes. LA Sanitation offers free curbside pickup of large electronics like TVs, computers, and monitors for homes it serves, scheduled through MyLA311 or 311. It's a separate request from a regular bulky item pickup.",
      },
      {
        question: "Will a junk removal company take a TV?",
        answer:
          "Most will, including Dump Happy. It's handy when the TV is one of several items leaving, or when it's mounted or upstairs. The TV goes to an e-waste recycler, never a landfill.",
      },
    ],
  },
  {
    slug: "couch-removal-los-angeles",
    title: "How to Get Rid of an Old Couch in Los Angeles",
    metaTitle: "Couch Removal & Sofa Disposal in Los Angeles | Dump Happy",
    metaDescription:
      "Sell it, donate it, schedule a bulky pickup, or have it hauled — how to get rid of a couch, sectional, or sleeper sofa in LA, and what each option really takes.",
    targetKeyword: "couch removal los angeles",
    category: "Guides",
    summary: "Couch disposal options and prep; links Furniture Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["furniture-removal"],
    relatedLocations: [],
    imageAlt: "Crew carrying an old sectional sofa out of a Los Angeles apartment",
    faqs: [
      {
        question: "What's the easiest way to get rid of a couch in LA?",
        answer:
          "If it's in good shape, a donation pickup or a quick online listing works. If it's worn or you're short on time, a City of LA bulky item pickup is free for eligible homes, and a junk removal crew is fastest when stairs or tight hallways are involved.",
      },
      {
        question: "Will donation centers take a used couch?",
        answer:
          "Some will, if it's clean and free of stains, tears, pet damage, and odors. Many turn down upholstered furniture in less-than-great shape, so send photos and ask before you haul it over.",
      },
      {
        question: "How much does couch removal cost?",
        answer:
          "Dump Happy's pricing is based on load size, starting at $289 for a small load, and a single couch usually fits in that tier. Adding other items to the same pickup is usually cheaper than booking separate jobs.",
      },
    ],
  },
  {
    slug: "donate-furniture-los-angeles",
    title: "Where to Donate Furniture in Los Angeles (and What Gets Turned Away)",
    metaTitle: "Where to Donate Furniture in Los Angeles | Dump Happy",
    metaDescription:
      "How furniture donation works in LA, what charities and ReStores usually refuse, and how to handle the pieces that don't make the cut.",
    targetKeyword: "donate furniture los angeles",
    category: "Guides",
    summary: "Donation acceptance criteria, safety-recalled items, tax receipts; links Furniture Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["furniture-removal", "estate-cleanout"],
    relatedLocations: [],
    imageAlt: "Gently used dresser and chairs ready for donation in Los Angeles",
    faqs: [
      {
        question: "What furniture can't be donated?",
        answer:
          "Most donation centers turn down pieces with stains, tears, pet damage, strong odors, broken parts, or water damage. Many also refuse mattresses, and baby items like drop-side cribs that don't meet current federal safety standards can't be resold.",
      },
      {
        question: "Can I get a tax deduction for donated furniture?",
        answer:
          "Donations to a qualified charity can be deductible if you itemize. The IRS generally requires household items to be in good used condition or better. Ask the charity for a receipt and talk to a tax professional about your situation.",
      },
      {
        question: "Will someone pick up my furniture donation?",
        answer:
          "Some organizations offer free donation pickup, but schedules can fill up weeks out. A junk removal crew can take donatable and non-donatable items in one trip and drop the usable pieces off at donation for you.",
      },
    ],
  },
  {
    slug: "how-to-choose-junk-removal-company",
    title: "How to Choose a Junk Removal Company in LA: 8 Questions to Ask",
    metaTitle: "How to Choose a Junk Removal Company in LA | Dump Happy",
    metaDescription:
      "Pricing, insurance, where your stuff actually goes — 8 questions to ask before hiring a junk removal company in Los Angeles, plus the red flags to watch for.",
    targetKeyword: "how to choose a junk removal company",
    category: "Guides",
    summary: "Hiring checklist and red flags; ties to legal disposal; links Pricing + Junk Removal.",
    datePublished: "2026-09-28",
    dateModified: "2026-09-28",
    relatedServices: ["junk-removal"],
    relatedLocations: [],
    imageAlt: "Branded junk removal truck and crew arriving for a job in Los Angeles",
    faqs: [
      {
        question: "What should I ask a junk removal company before hiring?",
        answer:
          "Ask how they price (by volume or by item), whether the quote is firm before loading, whether they're insured, where items go after pickup, and what they won't take. A good company answers all of these clearly without hedging.",
      },
      {
        question: "What are red flags when hiring a junk hauler?",
        answer:
          "An unmarked truck, cash-only payment, a price that's far below everyone else's, no reviews or business address, and vague answers about where your items end up. Low-ball haulers are the ones most likely to dump illegally.",
      },
      {
        question: "Is it worth paying more for a licensed, insured hauler?",
        answer:
          "Usually, yes. Insurance protects you if someone is hurt or your property is damaged during the job, and a legitimate hauler builds legal disposal fees into the price instead of cutting corners that can come back to you.",
      },
    ],
  },
{
    slug: "how-to-get-rid-of-a-mattress-los-angeles",
    title: "How to Get Rid of an Old Mattress in Los Angeles: 7 Legal Ways",
    metaTitle: "Mattress Disposal Los Angeles: 7 Legal Ways | Dump Happy",
    metaDescription:
      "Mattress disposal in Los Angeles: city bulky pickup, retailer take-back, free recycling drop-offs, or a paid haul-away. 7 legal options compared.",
    targetKeyword: "mattress disposal los angeles",
    category: "Guides",
    summary: "Seven legal mattress disposal routes in LA compared; links Mattress Removal, Pricing, all mattress posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal"],
    relatedLocations: ["santa-monica", "koreatown"],
    imageAlt: "Old mattress being carried out of a Los Angeles apartment for legal disposal",
    quickAnswer:
      "To dispose of a mattress legally in Los Angeles, schedule a free LA Sanitation bulky item pickup through MyLA311 or 311, use free retailer take-back when a new mattress is delivered, drop it at a free Bye Bye Mattress recycling site, or hire a mattress removal service. Never leave it on the curb without a scheduled pickup.",
    faqs: [
      {
        question: "How do I get rid of a mattress in Los Angeles for free?",
        answer:
          "If LA Sanitation collects your trash, request a free bulky item pickup through MyLA311 or by calling 311 at least one business day before your trash day. You can also use free retailer take-back when a new mattress is delivered, or bring it to a free Bye Bye Mattress drop-off site in LA County.",
      },
      {
        question: "Can I throw a mattress in the trash or dumpster?",
        answer:
          "No. A mattress is a bulky item and doesn't belong in your regular trash bin. It should go through a scheduled bulky item pickup, retailer take-back, a mattress recycling drop-off site, or a hauler that routes it to a recycler.",
      },
      {
        question: "Is it illegal to leave a mattress on the curb in LA?",
        answer:
          "Yes, unless it's set out for a scheduled bulky item pickup. An unscheduled mattress on a curb, sidewalk, or alley is illegal dumping under California Penal Code 374.3, and LA County fines can reach $10,000.",
      },
      {
        question: "Will Goodwill or other charities take a used mattress?",
        answer:
          "Most donation centers decline used mattresses for hygiene reasons. A few may accept one that's like new, so call before you bring it. Recycling is the standard route for a used mattress.",
      },
      {
        question: "What is the fastest way to get rid of a mattress in Los Angeles?",
        answer:
          "A paid mattress removal service is usually fastest because the crew comes to you and carries it out from any room. Dump Happy offers same-day or next-day pickup when the schedule allows; call (424) 356-4141 to check availability.",
      },
    ],
  },
  {
    slug: "mattress-pickup-los-angeles",
    title: "Mattress Pickup in Los Angeles: Same-Day, Next-Day & Scheduled Options",
    metaTitle: "Mattress Pickup Los Angeles: Same & Next Day | Dump Happy",
    metaDescription:
      "Need a mattress pickup in Los Angeles? Compare same-day and next-day haul-away, retailer take-back, and free city bulky pickup. Pickups from $289.",
    targetKeyword: "mattress pickup los angeles",
    category: "Guides",
    summary: "Mattress pickup options by speed and cost; links Mattress Removal, Pricing, cost and free-pickup posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal", "furniture-removal"],
    relatedLocations: ["west-hollywood", "culver-city"],
    imageAlt: "Junk removal crew loading a mattress into a truck for pickup in Los Angeles",
    quickAnswer:
      "For mattress pickup in Los Angeles, a junk removal service like Dump Happy can often come the same day or next day when the schedule allows, starting at $289 for a small load. Free alternatives are LA Sanitation's bulky item pickup on your trash day and retailer take-back when a new mattress is delivered.",
    faqs: [
      {
        question: "Can I get same-day mattress pickup in Los Angeles?",
        answer:
          "Often, yes. Dump Happy offers same-day or next-day mattress pickup when the schedule allows, but same-day service isn't guaranteed. Call (424) 356-4141 early in the day with photos and your floor number for the best chance.",
      },
      {
        question: "How much does mattress pickup cost in LA?",
        answer:
          "Dump Happy prices by load size, and a mattress pickup usually fits in the small load tier, starting at $289. That tier typically also covers a box spring and bed frame. You get a firm price before anything is lifted.",
      },
      {
        question: "Will the city of Los Angeles pick up my mattress?",
        answer:
          "Yes, if LA Sanitation services your home. Schedule a free bulky item pickup through MyLA311 or by calling 311 at least one business day before your regular trash day, then set the mattress at the curb that day.",
      },
      {
        question: "Do mattress pickup crews come inside to get the mattress?",
        answer:
          "Paid mattress removal crews carry the mattress from any room, including upstairs units without an elevator. The city's free bulky item pickup only collects items that are already at the curb.",
      },
    ],
  },
  {
    slug: "mattress-recycling-los-angeles",
    title: "Mattress Recycling in Los Angeles: Where Your Old Mattress Actually Goes",
    metaTitle: "Mattress Recycling in Los Angeles | Dump Happy",
    metaDescription:
      "How mattress recycling in Los Angeles works: the Bye Bye Mattress program, free drop-off sites, what recycled mattresses become, and pickup options.",
    targetKeyword: "mattress recycling los angeles",
    category: "Disposal Rules",
    summary: "How CA's mattress recycling program works and what mattresses become; links Mattress Removal + mattress posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal"],
    relatedLocations: ["venice", "mid-city"],
    imageAlt: "Mattresses separated into steel springs, foam, and fabric at a recycling facility",
    quickAnswer:
      "Mattress recycling in Los Angeles runs through California's Bye Bye Mattress program, funded by a fee paid on every mattress sold. Old mattresses and box springs go to recyclers that separate the steel, foam, fiber, and wood for products like carpet padding, rebar, insulation, and mulch. Drop-off at participating sites is free.",
    faqs: [
      {
        question: "Where can I recycle a mattress in Los Angeles?",
        answer:
          "Bye Bye Mattress, California's statewide program, funds free residential drop-off sites across LA County; current locations are listed at byebyemattress.com. You can also recycle through retailer take-back when a new mattress is delivered, or have a hauler route it to a recycler.",
      },
      {
        question: "Is mattress recycling free in California?",
        answer:
          "Dropping a mattress or box spring at a participating Bye Bye Mattress site is free for residents. The program is paid for by a recycling fee collected on every mattress and box spring sold in California.",
      },
      {
        question: "What happens to a mattress when it's recycled?",
        answer:
          "It's cut open and separated into steel, foam, fiber, and wood. The Mattress Recycling Council says up to 75% of a mattress's components can be recycled into products like carpet padding, construction rebar, insulation, and mulch.",
      },
      {
        question: "Can a mattress with stains or bed bugs be recycled?",
        answer:
          "Stains and wear usually aren't a problem, but collection sites can turn away mattresses that are wet, severely damaged, or infested with bed bugs. Seal an infested mattress and tell your hauler in advance.",
      },
    ],
  },
  {
    slug: "box-spring-bed-frame-disposal-los-angeles",
    title: "Box Spring and Bed Frame Disposal in Los Angeles",
    metaTitle: "Box Spring Disposal Los Angeles + Bed Frames | Dump Happy",
    metaDescription:
      "Box spring disposal in Los Angeles works like a mattress; bed frames and futon frames don't. How to recycle, donate, or haul away each piece legally.",
    targetKeyword: "box spring disposal los angeles",
    category: "Disposal Rules",
    summary: "Box spring, bed frame, and futon disposal routes; links Mattress Removal, Furniture Removal, Pricing.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["mattress-removal", "furniture-removal"],
    relatedLocations: ["brentwood", "westchester"],
    imageAlt: "Box spring and disassembled metal bed frame ready for haul-away in Los Angeles",
    quickAnswer:
      "Box spring disposal in Los Angeles follows mattress rules: use retailer take-back, a free Bye Bye Mattress drop-off site, or a scheduled LA Sanitation bulky item pickup. Bed frames and futon frames are furniture, so donate them, recycle metal frames as scrap, schedule a bulky pickup, or hire a junk removal service.",
    faqs: [
      {
        question: "How do I dispose of a box spring in Los Angeles?",
        answer:
          "Box springs are covered by California's mattress recycling program. Use retailer take-back when a new mattress or box spring is delivered, a free Bye Bye Mattress drop-off site, an LA Sanitation bulky item pickup scheduled through MyLA311 or 311, or a junk removal service.",
      },
      {
        question: "Can I recycle a metal bed frame?",
        answer:
          "Yes. Metal bed frames can be recycled as scrap metal, and many scrap yards accept them. They aren't part of the mattress recycling program, so mattress drop-off sites may not take them.",
      },
      {
        question: "How do I get rid of a futon?",
        answer:
          "Split it into two parts. The futon mattress is covered by California's mattress recycling law, so retailer take-back and mattress drop-off sites apply. The frame is furniture and can be donated if it's in good shape, recycled as scrap if it's metal, or hauled away.",
      },
      {
        question: "Does a box spring cost extra to haul away?",
        answer:
          "Not with load-based pricing. Dump Happy charges for the space your items take up, and a mattress, box spring, and bed frame usually fit together in the small load tier, starting at $289.",
      },
    ],
  },
{
    slug: "green-waste-removal-los-angeles",
    title: "Green Waste Removal in Los Angeles: The Complete Guide",
    metaTitle: "Green Waste Removal Los Angeles: Full Guide | Dump Happy",
    metaDescription:
      "Green waste removal in Los Angeles explained: what counts as yard waste, where it goes, green bin vs. city pickup vs. hauler, and what it costs.",
    targetKeyword: "green waste removal los angeles",
    category: "Guides",
    summary: "Pillar guide: what green waste is, LA removal options compared, near-me service area; links Yard Waste service, cost + hauling + green-bin posts, SB 1383.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["yard-waste-removal", "construction-debris-removal"],
    relatedLocations: ["brentwood", "westchester"],
    imageAlt: "Crew loading cut branches and yard trimmings into a truck for green waste removal in Los Angeles",
    quickAnswer:
      "Green waste removal in Los Angeles means hauling branches, trimmings, leaves, grass, and brush to an organics facility where they become compost or mulch. Small amounts go in your weekly green bin; larger piles need a scheduled city brush collection, a self-haul trip, or a hauler like Dump Happy, with loads starting at $289.",
    faqs: [
      {
        question: "What counts as green waste?",
        answer:
          "Green waste is plant material from your yard: branches, limbs, hedge and shrub trimmings, leaves, grass clippings, brush, weeds, and sod. Dirt, rock, concrete, treated lumber, and plastic are not green waste and should be kept out of the load.",
      },
      {
        question: "Where does green waste go after it's picked up?",
        answer:
          "Properly handled green waste goes to an organics facility, where it's ground, composted, or turned into mulch instead of going to a landfill. California law requires yard trimmings to be diverted from landfills, so ask any hauler where they take it.",
      },
      {
        question: "Is there green waste removal near me in Los Angeles?",
        answer:
          "Dump Happy removes green waste across the Westside, South Bay, and Central LA, including Brentwood, Westchester, Santa Monica, and Mid-City. We're open 10am to 8pm, seven days a week, at (424) 356-4141.",
      },
      {
        question: "Do I need to bundle or cut yard waste before a hauler picks it up?",
        answer:
          "No. City curbside programs usually require bundling and size limits, but a green waste hauler loads it as is from wherever it's piled. It does help to keep dirt, rock, and trash in a separate pile.",
      },
      {
        question: "Can dirt and rock go with my green waste?",
        answer:
          "No. Dirt, rock, and concrete aren't organics and can contaminate a green waste load so it can't be composted. They're hauled separately as construction debris.",
      },
    ],
  },
  {
    slug: "green-waste-hauling-los-angeles",
    title: "Green Waste Hauling in LA for Homeowners, Landscapers & Property Managers",
    metaTitle: "Green Waste Hauling Service in Los Angeles | Dump Happy",
    metaDescription:
      "Green waste hauling in LA for homeowners, landscapers, and property managers. What a haul-away includes, pricing by load, and what to ask before booking.",
    targetKeyword: "green waste hauling",
    category: "Guides",
    summary: "Green waste hauling by audience (homeowners, landscapers, property managers), hauling vs. dumpster, hiring checklist; links Yard Waste service, cost + pillar posts, SB 1383.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["yard-waste-removal", "construction-debris-removal"],
    relatedLocations: ["santa-monica", "mid-city"],
    imageAlt: "Landscaping crew handing off a large pile of green waste to a hauling truck in Los Angeles",
    quickAnswer:
      "Green waste hauling is the loading and transport of yard debris like branches, trimmings, palm fronds, brush, and sod to an organics facility for composting or mulch. In Los Angeles, Dump Happy hauls green waste for homeowners, landscapers, and property managers, priced by load from $289 for a small load to $899 for a full truck.",
    faqs: [
      {
        question: "What is green waste hauling?",
        answer:
          "Green waste hauling is a service that loads already-cut yard debris, such as branches, trimmings, brush, and sod, and takes it to an organics facility. The crew carries it out from wherever it's piled, so you don't have to bundle it or drag it to the curb.",
      },
      {
        question: "How much does green waste hauling cost in Los Angeles?",
        answer:
          "Green waste hauling is usually priced by how much truck space the debris fills. Dump Happy's loads start at $289 for a small load, $389 for a quarter, $569 for a half, $739 for three-quarters, and $899 for a full truck.",
      },
      {
        question: "Can landscapers hire someone to haul away their green waste?",
        answer:
          "Yes. Landscapers often hand off the haul on big renovations, large pruning jobs, or storm cleanups so the crew stays on billable work. A hauler that routes material to authorized organics facilities can also keep records that California's organics rules expect.",
      },
      {
        question: "Is a green waste hauler better than renting a dumpster?",
        answer:
          "A hauler is usually better when the debris is already cut and piled, because the crew does the loading and nothing sits in your driveway. A dumpster suits longer projects where debris builds up over days, but you do all the loading.",
      },
      {
        question: "Do green waste haulers cut down trees?",
        answer:
          "Generally no. A hauler removes debris that's already been cut. If a tree still needs to come down, hire an arborist or tree service first, then book a haul for the limbs.",
      },
    ],
  },
  {
    slug: "green-waste-removal-cost-los-angeles",
    title: "How Much Does Green Waste Removal Cost in Los Angeles?",
    metaTitle: "Green Waste Removal Cost in Los Angeles | Dump Happy",
    metaDescription:
      "Green waste removal cost in LA by load size: from $289 for a small load to $899 for a full truck. What fits in each tier and what changes the price.",
    targetKeyword: "green waste removal cost",
    category: "Pricing",
    summary: "Load-tier pricing applied to yard waste, cost factors, free/DIY comparison, hidden fees; links Pricing, Yard Waste service, green-bin + hauling posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["yard-waste-removal"],
    relatedLocations: ["westchester", "brentwood"],
    imageAlt: "Pile of cut branches and yard trimmings being estimated for a green waste removal quote in Los Angeles",
    quickAnswer:
      "Green waste removal cost in Los Angeles is based on how much truck space your yard debris fills. At Dump Happy, a small load starts at $289, a quarter load at $389, a half load at $569, a three-quarter load at $739, and a full load at $899, including loading, hauling, and delivery to an organics facility.",
    faqs: [
      {
        question: "How much does it cost to have yard waste hauled away?",
        answer:
          "Most haulers price yard waste by volume. At Dump Happy, loads start at $289 for a small load and go up to $899 for a full truckload, with the price set before loading begins.",
      },
      {
        question: "Is green waste removal priced per bag?",
        answer:
          "Not with load-based pricing. You pay for the space your branches, trimmings, and brush take up in the truck, so there are no per-bag or per-branch fees.",
      },
      {
        question: "How can I lower my green waste removal cost?",
        answer:
          "Cut long branches into shorter lengths so they pack tighter, keep dirt and rock in a separate pile, and use your green bin for anything small. Bundling your hauls into one visit is also cheaper than booking several small pickups.",
      },
      {
        question: "Is it cheaper to haul yard waste myself?",
        answer:
          "It can be for small piles, but self-hauling means paying facility fees and supplying a truck, tarps, and labor. For large piles, heavy limbs, or sod, a single paid haul often costs less once you count truck rental and your time.",
      },
    ],
  },
  {
    slug: "too-much-yard-waste-for-green-bin-los-angeles",
    title: "Too Much Yard Waste for the Green Bin? How to Get Rid of Branches, Palm Fronds & Overflow in LA",
    metaTitle: "How to Get Rid of Yard Waste in LA | Dump Happy",
    metaDescription:
      "How to get rid of yard waste in Los Angeles when the green bin is full: extra bins, city brush pickup, palm frond disposal, and one-trip haul-away.",
    targetKeyword: "how to get rid of yard waste los angeles",
    category: "Disposal Rules",
    summary: "Overflow options (staging, extra green bin, LASAN annual brush pickup, hauler), palm fronds, tree branches, curbside rules; links Yard Waste service, cost + pillar posts, SB 1383, illegal dumping.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["yard-waste-removal", "construction-debris-removal"],
    relatedLocations: ["santa-monica", "culver-city"],
    imageAlt: "Overflowing green bin with tree branches and palm fronds piled beside it in a Los Angeles driveway",
    quickAnswer:
      "To get rid of yard waste in Los Angeles when your green bin is full, spread it over several weekly pickups, request an extra green bin from your city, schedule LA Sanitation's free once-a-year brush collection, or hire a hauler. For large branches, palm fronds, or a deadline, a hauler clears everything in one visit.",
    faqs: [
      {
        question: "What do I do with extra yard waste that doesn't fit in my green bin?",
        answer:
          "You can stage it over several weekly pickups, request extra bin capacity from your city, or schedule a city brush collection if you're eligible. For a large one-time pile, a green waste hauler can take it all in one trip.",
      },
      {
        question: "Can palm fronds go in the green bin in Los Angeles?",
        answer:
          "It depends on your city. Palm fronds' tough fibers can tangle processing equipment, so many cities and composters restrict them. Check LA Sanitation or your city's sanitation department for current rules, or have a hauler take them.",
      },
      {
        question: "Does LA Sanitation pick up extra branches?",
        answer:
          "LA Sanitation offers the households it serves one free brush collection per year, scheduled through MyLA311 or 1-800-773-2489. Branches must be bundled and tied, with LASAN listing limits of 4 feet long and 30 pounds per bundle.",
      },
      {
        question: "Can I get a second green bin in LA?",
        answer:
          "Yes. LA Sanitation customers can request additional bin capacity, which comes with an extra capacity charge, by calling 1-800-773-2489. Other cities in LA County have their own extra-bin options.",
      },
      {
        question: "Can I leave branches next to my green bin?",
        answer:
          "Only if your city has scheduled a pickup for them. Unscheduled piles on the curb or parkway can be treated as illegal dumping and can block sidewalks and storm drains.",
      },
    ],
  },
{
    slug: "furniture-disposal-los-angeles",
    title: "How Can I Dispose of Furniture in Los Angeles? Every Legal Option",
    metaTitle: "Furniture Disposal Los Angeles: Legal Options | Dump Happy",
    metaDescription:
      "Furniture disposal in Los Angeles: sell, donate, free city bulky pickup, self-haul, or paid removal. Compare cost, effort, and speed for every option.",
    targetKeyword: "furniture disposal los angeles",
    category: "Guides",
    summary: "Every legal furniture disposal route in LA by condition and type, with a cost/effort/speed table; links Furniture Removal, Pricing, couch, donation, and bulky pickup posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["furniture-removal", "junk-removal"],
    relatedLocations: ["west-hollywood", "mid-city"],
    imageAlt: "Old dresser and chairs being carried out of a Los Angeles home for furniture disposal",
    quickAnswer:
      "To dispose of furniture in Los Angeles, sell or donate pieces in good condition, schedule a free LA Sanitation bulky item pickup for worn pieces, self-haul to a drop-off facility, or hire a furniture removal service to carry it out. Never leave furniture on the curb without a scheduled pickup; that's illegal dumping.",
    faqs: [
      {
        question: "How can I dispose of furniture in Los Angeles?",
        answer:
          "Sell or donate furniture that's in good condition. For worn or broken pieces, schedule a free LA Sanitation bulky item pickup if the city collects your trash, haul it to a drop-off facility yourself, or hire a furniture removal company to carry it out and handle donation and disposal.",
      },
      {
        question: "Does the City of Los Angeles pick up old furniture for free?",
        answer:
          "Yes, for homes that get trash service from LA Sanitation. Request a bulky item pickup through MyLA311 or 311 at least one business day before your regular trash day, then set the furniture at the curb that day. Apartment buildings in the City of LA are covered too, though your property manager may handle the booking.",
      },
      {
        question: "Can I leave furniture on the curb with a free sign in LA?",
        answer:
          "Not on the sidewalk or parkway unless it's set out for a scheduled bulky item pickup. Unscheduled curbside furniture is illegal dumping under California Penal Code 374.3, and a free sign doesn't change that. Keep giveaway items on your own property or inside until someone collects them.",
      },
      {
        question: "What furniture won't donation centers accept?",
        answer:
          "Donation centers commonly turn away stained, torn, or odor-damaged upholstery, broken or wobbly pieces, water-damaged particleboard, and anything with signs of bed bugs. Policies vary by location, so send photos before you drop anything off.",
      },
      {
        question: "How much does furniture removal cost in Los Angeles?",
        answer:
          "Dump Happy prices furniture removal by load size, not per piece. A small load starts at $289, a quarter load at $389, and a half load at $569. Usable pieces are routed to donation and the rest is recycled or disposed of legally.",
      },
    ],
  },
  {
    slug: "when-to-hire-junk-removal",
    title: "When Should I Hire Junk Removal? 9 Signs It's Worth It",
    metaTitle: "When Should I Hire Junk Removal? 9 Signs | Dump Happy",
    metaDescription:
      "When should you hire junk removal? 9 signs it's worth it, rough DIY vs. hire math with real LA prices, and when a free city pickup makes more sense.",
    targetKeyword: "when to hire junk removal",
    category: "Guides",
    summary: "Nine situations where hiring junk removal pays off, DIY vs. hire math using real load-tier prices, and when not to hire; links Junk Removal, Pricing, cost and free-pickup posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal"],
    relatedLocations: ["santa-monica", "koreatown"],
    imageAlt: "Junk removal crew loading furniture and boxes into a truck in Los Angeles",
    quickAnswer:
      "Hire junk removal when the job needs more than one trip, involves heavy items or stairs, has a move-out or closing deadline, or would cost you more in time, truck rental, and fees than a crew would. For a single item that qualifies for free city bulky pickup, handle it yourself instead.",
    faqs: [
      {
        question: "When should I hire junk removal?",
        answer:
          "Hire junk removal when you have a deadline, a large volume, heavy or bulky items, stairs, or a job that would take several trips in your own vehicle. If it's one item and your home gets free city bulky item pickup, doing it yourself is usually the better deal.",
      },
      {
        question: "Is junk removal worth the money?",
        answer:
          "It's usually worth it for jobs of a half load or more, or any job with stairs or a deadline, once you add up truck rental, drop-off fees, gas, and your time. For one small item you can carry, a free or DIY option is typically cheaper.",
      },
      {
        question: "How much does junk removal cost in Los Angeles?",
        answer:
          "Dump Happy prices by load size: a small load starts at $289, a quarter load at $389, a half load at $569, a 3/4 load at $739, and a full 16ft trailer load at $899. You get a firm price before anything is lifted.",
      },
      {
        question: "When should I not hire a junk removal company?",
        answer:
          "Skip hiring when you have a single item, your home gets LA Sanitation bulky item pickup, and you can carry it to the curb on your trash day. Good-condition furniture can be sold or donated, and retailers often take back old mattresses or appliances when they deliver new ones.",
      },
      {
        question: "Can junk removal come the same day?",
        answer:
          "Often, yes. Dump Happy offers same-day or next-day pickup when the schedule allows, but same-day service isn't guaranteed. Call (424) 356-4141 early in the day with photos for the best chance.",
      },
    ],
  },
{
    slug: "free-junk-pickup-los-angeles",
    title: "Where Can I Get Free Junk Pick-Up in Los Angeles?",
    metaTitle: "Free Junk Pick-Up in Los Angeles | Dump Happy",
    metaDescription:
      "Where to get free junk pick-up in Los Angeles: LA Sanitation bulky pickup, donation pickups, retailer take-back, and S.A.F.E. centers. Plus red flags.",
    targetKeyword: "free junk pick up los angeles",
    category: "Guides",
    summary: "Every free junk pickup/disposal route in LA, why private junk removal isn't free, and free-offer red flags; links Junk Removal, Pricing, bulky pickup and dumping posts.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal"],
    relatedLocations: ["mid-city", "venice"],
    imageAlt: "Old furniture set at a Los Angeles curb for a scheduled free bulky item pickup",
    quickAnswer:
      "You can get free junk pick-up in Los Angeles through LA Sanitation's bulky item pickup, scheduled through MyLA311 or 311 at least one business day before trash day. Other free options include your own city's bulky program, charity donation pickups, retailer take-back, and free S.A.F.E. centers for hazardous waste and electronics. Private junk removal services are not free.",
    faqs: [
      {
        question: "Where can I get free junk pick-up in Los Angeles?",
        answer:
          "City of LA residents can schedule a free bulky item pickup from LA Sanitation through MyLA311, by calling 311, or at 1-800-773-2489, at least one business day before trash day. Charity donation pickups, retailer take-back, and free S.A.F.E. drop-off centers for hazardous waste and e-waste are other no-cost options.",
      },
      {
        question: "Are junk removal services free?",
        answer:
          "No. Private junk removal services charge for the crew, truck, labor, and disposal fees at transfer stations and recyclers. Free options like city bulky pickup are funded through trash fees, and you have to move items to the curb yourself.",
      },
      {
        question: "Do Santa Monica, Culver City, Beverly Hills, and West Hollywood use LA's bulky pickup?",
        answer:
          "No. They are separate cities with their own trash service and bulky item rules. Check your city's public works page or the hauler on your trash bill to schedule a pickup.",
      },
      {
        question: "Is a free junk removal offer a scam?",
        answer:
          "Not always, but be careful. An offer with no business name, no written quote, cash only, or vague answers about where your items go is a red flag. If your items are dumped illegally, the mess can be traced back to you.",
      },
      {
        question: "How much does junk removal cost in Los Angeles if I pay for it?",
        answer:
          "Dump Happy uses load-based pricing. A small load starts at $289 and a full 16-foot trailer load is $899, with quarter, half, and three-quarter loads in between.",
      },
    ],
  },
  {
    slug: "bulky-item-pickup-los-angeles",
    title: "LA Bulky Item Pickup: How to Schedule It, What It Costs, and Where Else to Take Bulky Items",
    metaTitle: "Bulky Item Pickup Los Angeles: How to Schedule | Dump Happy",
    metaDescription:
      "How to schedule bulky item pickup in Los Angeles through MyLA311 or 311, whether LA charges for it, what's not accepted, and free drop-off options.",
    targetKeyword: "bulky item pickup los angeles",
    category: "Guides",
    summary: "Step-by-step LASAN bulky item scheduling, cost and eligibility (incl. multifamily fee), exclusions, free alternatives; links Junk Removal, Furniture Removal, Pricing, free pickup post.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal", "furniture-removal"],
    relatedLocations: ["koreatown", "sawtelle"],
    imageAlt: "Couch and mattress placed at a Los Angeles curb for a scheduled bulky item pickup",
    quickAnswer:
      "To schedule bulky item pickup in Los Angeles, submit a request through the MyLA311 app or website, call 311, or call LA Sanitation at 1-800-773-2489 at least one business day before your trash day. Set the listed items at the curb for collection on your trash day. City of LA residents pay no extra charge.",
    faqs: [
      {
        question: "How to schedule bulky items pickup in Los Angeles?",
        answer:
          "Request it through the MyLA311 app or website, by calling 311, or by calling LA Sanitation at 1-800-773-2489 at least one business day before your regular trash day. List every item, save your request number, and set the items at the curb for collection on your trash day.",
      },
      {
        question: "Does LA charge for bulky items pickup?",
        answer:
          "No, there's no per-pickup charge. For homes LA Sanitation services directly, it's covered by refuse fees on the utility bill. Larger apartment buildings fund it through a Multi-Family Bulky Item Fee on LADWP bills, and residents schedule pickups the same way.",
      },
      {
        question: "Where to dispose bulky items for free?",
        answer:
          "City of LA residents can use free curbside bulky item pickup or city bulky item drop-off events. E-waste and hazardous waste go to free S.A.F.E. centers, mattresses to free Bye Bye Mattress sites, and clean furniture can be donated.",
      },
      {
        question: "What items does LA bulky item pickup not accept?",
        answer:
          "It doesn't take household hazardous waste like paint, oil, and chemicals, fluorescent bulbs, or construction debris. Cardboard is handled through LA Sanitation's separate Move In/Move Out service instead.",
      },
      {
        question: "Is there a limit on LA bulky item pickups?",
        answer:
          "LA Sanitation describes the service as unlimited for City of LA residents. List every item when you schedule, because items not on the request may be left behind.",
      },
    ],
  },
  {
    slug: "how-to-get-rid-of-large-furniture-boxes",
    title: "How to Get Rid of Large Furniture Boxes (and Moving Boxes) in LA",
    metaTitle: "How to Get Rid of Large Furniture Boxes | Dump Happy",
    metaDescription:
      "How to get rid of large furniture boxes in LA: flatten and cut them for the blue bin, bundle overflow, book Move In/Move Out pickup, and handle foam.",
    targetKeyword: "how to get rid of large furniture boxes",
    category: "Guides",
    summary: "Blue bin cardboard rules, LASAN Move In/Move Out collection, giving boxes away, foam/packing rules, and when to haul boxes with old furniture; links Furniture Removal, Junk Removal, Pricing.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["furniture-removal", "junk-removal"],
    relatedLocations: ["santa-monica", "west-hollywood"],
    imageAlt: "Flattened furniture boxes tied in a bundle next to a blue recycling bin in Los Angeles",
    quickAnswer:
      "To get rid of large furniture boxes, remove the foam and plastic, cut or fold the cardboard flat, and put it in your blue recycling bin. In Los Angeles, extra flattened cardboard can be tied into bundles and set next to the bin. For a big move, schedule LA Sanitation's Move In/Move Out pickup or have a hauler take them.",
    faqs: [
      {
        question: "How to get rid of large furniture boxes?",
        answer:
          "Empty the box, cut it apart along the seams, and flatten it into pieces that fit inside your blue bin. In LA, extra flattened cardboard can be tied with string and stacked next to the blue bin on collection day. You can also give boxes away, take them to a recycling center, or have a hauler remove them.",
      },
      {
        question: "Can I put Styrofoam in the blue bin in Los Angeles?",
        answer:
          "No. Expanded polystyrene foam doesn't belong in LA's blue bin, and neither do plastic bags or film. Foam blocks generally go in the black trash bin unless you can reuse or give them away.",
      },
      {
        question: "Does LA pick up extra moving boxes?",
        answer:
          "Yes. City of LA residents serviced by LA Sanitation can schedule a Move In/Move Out collection by calling 1-800-773-2489 at least one day before trash day. Cardboard must be flattened and tied, with each bundle 30 pounds or less and no larger than 2 by 3 feet.",
      },
      {
        question: "Will bulky item pickup take cardboard boxes?",
        answer:
          "No. LA Sanitation's regular bulky item pickup doesn't collect cardboard. Use the blue bin, bundles next to it, or the separate Move In/Move Out service.",
      },
      {
        question: "Can a junk removal company take boxes along with old furniture?",
        answer:
          "Yes. A hauler can take the old furniture, the new piece's boxes, and the packing material in one trip. Dump Happy recycles the cardboard, with load-based pricing starting at $289 for a small load.",
      },
    ],
  },
{
    slug: "cheapest-way-to-get-rid-of-junk-los-angeles",
    title: "What's the Cheapest Way to Get Rid of Junk in Los Angeles?",
    metaTitle: "Cheapest Way to Get Rid of Junk in LA | Dump Happy",
    metaDescription:
      "The cheapest ways to remove junk in LA, ranked free to paid: city bulky pickup, donation, selling, self-haul, dumpsters, and when a hauler costs less.",
    targetKeyword: "cheapest way to get rid of junk",
    category: "Guides",
    summary: "Ranks LA junk disposal options from free to paid with tradeoffs; when paying a hauler is cheaper.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal", "furniture-removal"],
    relatedLocations: ["culver-city", "mid-city"],
    imageAlt: "Pile of household junk sorted for donation, recycling, and pickup in a Los Angeles driveway",
    quickAnswer:
      "The cheapest way to remove junk in Los Angeles is LA Sanitation's free bulky item pickup, booked through MyLA311 or 311, combined with donating, selling, or giving away usable items. Self-hauling to a landfill, renting a dumpster, and hiring a junk removal crew cost more in dollars but save time, lifting, and truck rental.",
    faqs: [
      {
        question: "What is the cheapest way to remove junk?",
        answer:
          "The cheapest way is to use free options first: schedule a free LA Sanitation bulky item pickup for large items, and donate, sell, or give away anything still usable. Self-hauling, dumpster rental, and junk removal services all cost money, so save them for what the free options can't handle.",
      },
      {
        question: "Is LA's bulky item pickup really free?",
        answer:
          "Yes, for homes that receive trash service from LA Sanitation. Request it through MyLA311 or by calling 311 at least one business day before your collection day. Many apartment buildings and separate cities like Santa Monica and Culver City have their own programs.",
      },
      {
        question: "Is it cheaper to take junk to the dump myself?",
        answer:
          "It can be if you already own a truck and have a single load. Once you add a truck rental, gas, the facility's gate fee, and a few hours of loading and unloading, a junk removal pickup is often close in total cost.",
      },
      {
        question: "When is paying for junk removal actually cheaper?",
        answer:
          "Paying a hauler tends to be cheaper when you'd need to rent a truck, when the city won't take the items, when there are stairs or heavy pieces, or when a move-out deadline is coming. It's always cheaper than an illegal dumping fine.",
      },
      {
        question: "How much does Dump Happy charge for junk removal?",
        answer:
          "Dump Happy prices by how much truck space your items fill. A small load starts at $289, and a full 16ft trailer load starts at $899, with quarter, half, and three-quarter tiers in between.",
      },
    ],
  },
  {
    slug: "best-junk-removal-service-los-angeles",
    title: "What Is the Best Junk Removal Service in Los Angeles?",
    metaTitle: "Best Junk Removal Service in Los Angeles | Dump Happy",
    metaDescription:
      "How to find the best junk removal service in Los Angeles: 7 criteria, how franchises, local companies, and cheap haulers compare, and red flags.",
    targetKeyword: "best junk removal service los angeles",
    category: "Guides",
    summary: "Criteria-based guide to choosing a junk removal service in LA; compares provider types; where Dump Happy fits.",
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    relatedServices: ["junk-removal"],
    relatedLocations: ["santa-monica", "west-hollywood"],
    imageAlt: "Uniformed junk removal crew carrying furniture out of a Los Angeles home",
    quickAnswer:
      "The best junk removal service in Los Angeles is one that is licensed and insured, posts its prices, gives a firm quote before loading, disposes of items legally, has genuine reviews, and serves your neighborhood on your schedule. Compare local companies and national franchises against those criteria rather than choosing on price alone.",
    faqs: [
      {
        question: "What is the best junk removal service in Los Angeles?",
        answer:
          "The best service for you is an insured company that posts clear prices, confirms a firm quote before loading, and can explain where your items go. Between companies that meet that bar, choose based on availability in your area and reviews that mention punctuality and honest pricing.",
      },
      {
        question: "Is a national franchise better than a local junk removal company?",
        answer:
          "Not necessarily. Franchises offer a familiar brand and process, but each territory is locally owned and priced. A local company can be just as professional, so apply the same checks: insurance, a firm quote, and legal disposal.",
      },
      {
        question: "Is it safe to hire a junk hauler from Craigslist?",
        answer:
          "It's risky. Unlicensed haulers often lack insurance and may dump items illegally to avoid fees, and dumped items can be traced back to you. Ask for a business name, receipt, and an explanation of where your junk will go.",
      },
      {
        question: "What areas does Dump Happy serve?",
        answer:
          "Dump Happy serves the Westside, South Bay, and Central LA, including Santa Monica, Culver City, Venice, West Hollywood, Koreatown, and Mid-City. We're open 10am to 8pm, seven days a week.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
