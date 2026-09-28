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
  // Rendered as an on-page FAQ section plus FAQPage structured data.
  faqs?: FaqItem[];
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "junk-removal-cost-los-angeles",
    title: "How Much Does Junk Removal Cost in Los Angeles?",
    metaTitle: "Junk Removal Cost in Los Angeles | Dump Happy",
    metaDescription:
      "What actually drives junk removal pricing in LA? We break down load-based pricing, what affects your quote, and how to get an accurate estimate fast.",
    targetKeyword: "junk removal cost los angeles",
    category: "Pricing",
    summary: "Explains volume/load-based pricing and what drives cost; links to Pricing + Junk Removal.",
    datePublished: "2026-04-06",
    dateModified: "2026-04-06",
    relatedServices: ["junk-removal"],
    relatedLocations: [],
    imageAlt: "Junk removal crew loading a truck by volume in Los Angeles",
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
      "California recycles old mattresses through the Bye Bye Mattress program, with free drop-offs across LA County. How the program works, and when to hire it out.",
    targetKeyword: "mattress disposal california",
    category: "Disposal Rules",
    summary: "Bye Bye Mattress program, free drop-offs, why hire out; links Mattress Removal.",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Old mattress being loaded for recycling in California",
  },
  {
    slug: "refrigerator-disposal-california",
    title: "Refrigerator Disposal Rules in California",
    metaTitle: "Refrigerator Disposal Rules in CA | Dump Happy",
    metaDescription:
      "Old fridges hold refrigerant that federal and California law require to be recovered before disposal. Here's what's required, and how rebate programs can help.",
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
    dateModified: "2026-06-15",
    relatedServices: ["yard-waste-removal"],
    relatedLocations: [],
    imageAlt: "Yard trimmings and green waste piled for organics recycling",
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs. Dumpster Rental: Which Is Cheaper?",
    metaTitle: "Junk Removal vs Dumpster Rental | Dump Happy",
    metaDescription:
      "Not sure whether to book a junk hauler or rent a dumpster for your project? Here's an honest, side-by-side breakdown of when each option makes more sense.",
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
    dateModified: "2026-09-28",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Queen mattress and box spring loaded into a junk removal truck in Los Angeles",
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
    dateModified: "2026-09-28",
    relatedServices: ["mattress-removal"],
    relatedLocations: [],
    imageAlt: "Old mattress waiting for a scheduled pickup outside a Los Angeles home",
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
          "Larger apartment buildings are usually served by a private franchised hauler instead of LA Sanitation, so ask your property manager how bulky items are handled. If that option is slow or unavailable, a paid junk removal pickup is the fastest legal alternative.",
      },
    ],
  },
  {
    slug: "bed-bug-mattress-disposal",
    title: "How to Get Rid of a Mattress With Bed Bugs (Without Spreading Them)",
    metaTitle: "How to Dispose of a Mattress With Bed Bugs | Dump Happy",
    metaDescription:
      "A bed bug mattress can't just go on the curb or to a donation center. Here's how to wrap it, label it, and get it out of your home without spreading the infestation.",
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
      "A “free” sign doesn't make curbside furniture legal. Here's where the line falls under California Penal Code 374.3, and how to give things away the legal way in LA.",
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
      "Found a couch in your alley or debris on your lot? How to report illegal dumping in LA, who's responsible for cleanup, and how to keep it from happening again.",
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
      "California Civil Code 1980–1991 sets the notice and timing rules for belongings a tenant leaves behind. Here's the process, the $700 threshold, and when you can clear it out.",
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
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
