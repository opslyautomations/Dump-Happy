import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  serviceJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
  type FaqItem,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";
import { ServicesGrid } from "@/components/ServicesGrid";

export const metadata: Metadata = buildMetadata({
  title: "Appliance Removal in Los Angeles | Dump Happy",
  description:
    "Fridge, washer, dryer or water heater? Dump Happy removes appliances in LA with legal refrigerant handling and metal recycling. Free quote — book today.",
  path: "/services/appliance-removal",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Appliance Removal", path: "/services/appliance-removal" },
];

const intro = `A dead refrigerator is heavier, more awkward, and more regulated than almost anything else in your home. Dump Happy removes fridges, freezers, washers, dryers, water heaters, and AC units across Los Angeles — and, just as important, gets them to facilities that handle them the way state and federal law require. That matters more than people realize: you can't legally toss a refrigerant appliance at a standard transfer station, and doing it wrong is on the last person in the disposal chain. With us, it's one call, one crew, one legal invoice.`;

const regulationHeading = "Why Appliances Aren't Ordinary Junk (The Part Most Haulers Skip)";

const regulationText = `Refrigerators, freezers, window AC units, and heat pumps contain refrigerant that, under Section 608 of the federal Clean Air Act, must be recovered by a certified technician before the unit is scrapped, crushed, or landfilled. In California, the Air Resources Board (CARB) enforces recovery, and appliance recyclers operate under the state's Certified Appliance Recycler framework through DTSC. Southern California transfer stations reject refrigerant units on sight unless the refrigerant has been recovered and the unit is tagged. This is why the old garage fridge is not a "throw it in the truck" item — and why hiring a hauler who routes it correctly protects you.`;

const applianceChips = [
  "Refrigerators & freezers",
  "Washers & dryers",
  "Dishwashers",
  "Stoves, ovens & ranges",
  "Microwaves",
  "Water heaters",
  "Wall & window AC units",
  "Trash compactors",
  "Small kitchen appliances",
];

const rebateHeading = "Honest Alternative — You Might Get Paid Instead";

const rebateText = `If your fridge still runs, is a secondary unit, and is roughly 10–30 cubic feet, SoCal utilities have long run a recycling program that hauls it away free and pays a small rebate — and retailers like Home Depot, Lowe's, and Best Buy will usually take your old unit when they deliver a new one. If either fits your situation, that's the cheaper path and we'll say so. Dump Happy is the right call for dead units, multiple appliances, units in hard spots (garage, upstairs, side yard), or a clear-out where the appliance is one of many items — one crew, one trip, done legally.`;

const howItWorksText = `Photo or walkthrough → firm load-based quote (a single fridge is a single-item pickup; several appliances or an appliance-heavy clear-out scales up the tier) → we disconnect and haul (please have units emptied and defrosted where possible) → refrigerant units routed to certified recovery, metal to recyclers.`;

const faqs: FaqItem[] = [
  {
    question: "Is it legal to just throw away a refrigerator?",
    answer:
      "Not as ordinary trash. Federal law (Clean Air Act Section 608) requires the refrigerant to be recovered by a certified technician before a fridge, freezer, or AC unit is scrapped, and California adds its own enforcement through CARB. Standard transfer stations turn away refrigerant units that aren't recovered and tagged. We route them the legal way.",
  },
  {
    question: "Do you take refrigerators and freezers?",
    answer:
      "Yes — including the dead one in the garage. We remove it from wherever it sits, and refrigerant-containing units go to certified recovery before recycling, so you're covered on the compliance side without lifting a finger or making a second call.",
  },
  {
    question: "Do I need to do anything before you arrive?",
    answer:
      "Empty the appliance and, for fridges and freezers, defrost it if you can and wipe out standing water. Unplug it ahead of time. If it's plumbed or hard-wired — a dishwasher, some water heaters — let us know so we bring the right tools to disconnect it safely.",
  },
  {
    question: "Can I get money for my old fridge instead of paying?",
    answer:
      "Possibly. If it still runs, is a secondary unit, and is about 10–30 cubic feet, SoCal utility recycling programs will haul it free and pay a small rebate, and retailers often take the old unit on delivery of a new one. If that fits, it's cheaper than hiring us and we'll tell you.",
  },
  {
    question: "Do you remove washers, dryers, and water heaters?",
    answer:
      "Yes — washers, dryers, dishwashers, stoves, water heaters, and AC units. These are heavy and often in tight laundry closets or garages; our crew handles the disconnection and the lift so you avoid the strain and the floor damage.",
  },
  {
    question: "What happens to the appliance after removal?",
    answer:
      "Refrigerant is recovered from cooling units by certified handlers; then steel, copper, and aluminum are sent into the metal-recycling stream — a single fridge holds well over a hundred pounds of recoverable steel. Very little of a properly processed appliance ends up in a landfill.",
  },
  {
    question: "How is appliance removal priced?",
    answer:
      "By truck volume, like the rest of our service. A single appliance is a single-item pickup; a kitchen's worth or an appliance-heavy clear-out moves up the load tiers. You get a firm quote before we start — no per-pound surprises.",
  },
];

export default function ApplianceRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Appliance Removal",
            description:
              "Legal, refrigerant-compliant removal of fridges, washers, dryers, and other appliances across Los Angeles.",
            path: "/services/appliance-removal",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-brand-black">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
            Legal, Compliant Appliance Disposal
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Appliance Removal in Los Angeles — Hauled Out, Recycled, and Disposed of Legally
          </h1>
          <p className="mt-6 leading-relaxed text-white/80">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">{regulationHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{regulationText}</p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
            Appliances We Remove
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {applianceChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-brand-orange/30 bg-white px-4 py-2 text-sm font-semibold text-brand-black"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">{rebateHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{rebateText}</p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">How It Works</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">{howItWorksText}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:appliance-removal" label="Appliance Removal" />
        </div>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-brand-charcoal">
            Clearing the whole garage the fridge lives in? See{" "}
            <Link
              href="/services/garage-cleanout"
              className="font-semibold text-brand-orange hover:underline"
            >
              Garage Clean-Out
            </Link>
            . Furniture going too?{" "}
            <Link
              href="/services/furniture-removal"
              className="font-semibold text-brand-orange hover:underline"
            >
              Furniture Removal
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-brand-charcoal">
            We serve Santa Monica, Culver City, Beverly Hills, and eight other Los Angeles
            communities — see our full list of{" "}
            <Link href="/locations" className="font-semibold text-brand-orange hover:underline">
              service areas
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
        <p className="mt-6 text-sm text-brand-gray">
          Learn more:{" "}
          <a
            href="https://www.epa.gov/section608/stationary-refrigeration-safe-disposal-requirements"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            EPA Section 608 safe-disposal requirements
          </a>{" "}
          ·{" "}
          <a
            href="https://dtsc.ca.gov/certified-appliance-recycler-car-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            CA DTSC Certified Appliance Recycler program
          </a>
        </p>
      </section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to get that appliance out — legally?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
