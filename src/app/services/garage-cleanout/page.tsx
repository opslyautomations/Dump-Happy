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
import { QuoteForm } from "@/components/QuoteForm";
import { Callout } from "@/components/Callout";
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";
import { ProcessSteps } from "@/components/page-sections/ProcessSteps";
import { PillList } from "@/components/page-sections/PillList";
import { BeforeAfterTiles } from "@/components/page-sections/BeforeAfterTiles";
import { JOB_PHOTOS } from "@/lib/data/job-photos";

export const metadata: Metadata = buildMetadata({
  title: "Garage Clean-Out in Los Angeles | Dump Happy",
  description:
    "Reclaim your garage. Dump Happy clears clutter, debris, and old appliances across LA — load-based pricing and legal hazardous-waste sorting. Free quote today.",
  path: "/services/garage-cleanout",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Garage Clean-Out", path: "/services/garage-cleanout" },
];

const intro = `The garage is where everything without a home ends up: broken furniture, dead appliances, paint cans, boxes you haven't opened since the last move. Dump Happy clears the whole thing in a visit — sorting what's donatable, recycling what we can, safely setting aside what has to go to a hazardous-waste facility, and hauling the rest — so you get a garage you can actually park in or use. Homeowners, landlords, and property managers across LA book us for turnovers, downsizing, and "we just need it gone."`;

const timelineSteps = [
  {
    title: "Walkthrough & quote.",
    body: "We look at the space, agree on what stays and what goes, and set a firm load-based price.",
  },
  {
    title: "Sort on site.",
    body: "Donatable, recyclable, hazardous, and landfill — separated as we pull, so nothing goes the wrong place.",
  },
  {
    title: "Haul & recycle.",
    body: "The crew clears it to the truck; metals, e-waste, and cardboard head to recyclers, usable goods to donation.",
  },
  {
    title: "Broom-clean finish.",
    body: "You get the floor back, swept, in one visit for most garages.",
  },
];

const includesIntro = `If it's in the garage and you're done with it, it goes:`;
const includesItems = [
  "General clutter and boxes",
  "Old furniture",
  "Dead appliances (the classic garage fridge)",
  "Exercise equipment",
  "Bikes and toys",
  "Shelving",
  "Yard tools",
  "Remodel leftovers",
  "E-waste",
];

const pricingText = `Priced by how much fills the truck — a light one-corner clear-out sits at a lower tier; a packed two-car garage runs toward full load. Quoted up front, and if it's less than expected, you pay less.`;

const hazardText = `Garages hide the exact things that can't go in a junk truck. Household hazardous waste — paint, motor oil, solvents, pesticides, pool chemicals, car batteries — plus e-waste like old TVs and monitors are banned from regular trash and from standard transfer stations, and it's actually illegal to transport more than 15 gallons or 125 pounds of hazardous waste in your personal vehicle. LA County runs free household-hazardous-waste and e-waste collection for exactly these items. Dump Happy sorts them out of your load, hauls everything we legally can, and points you to the nearest County HHW route for the rest — so the whole job stays legal and nothing gets quietly (and illegally) tossed on a curb.`;

const expectText = `Most single garages are a same-visit job; packed or multi-bay spaces may run longer. You don't need to pre-sort — sorting is what we do — though pulling anything you want to keep aside first speeds things up.`;

const faqs: FaqItem[] = [
  {
    question: "How does a garage clean-out work?",
    answer:
      "We walk the space with you, agree on what goes, and set a firm load-based price. Then we sort as we pull — donation, recycling, hazardous, landfill — clear it to the truck, and leave the floor broom-clean. Most single garages are done in one visit; you don't need to pre-sort anything.",
  },
  {
    question: "How is a garage clean-out priced?",
    answer:
      "By volume — how much of the truck your junk fills — not by the hour. A light corner clear-out is a lower tier; a stuffed two-car garage trends toward a full load. You approve the tier before we start, and if it turns out to be less, you pay less.",
  },
  {
    question: "What can't you take out of my garage?",
    answer:
      "Household hazardous waste — paint, motor oil, solvents, pesticides, pool chemicals, and car batteries — plus some e-waste, which are banned from regular trash and transfer stations. We separate these from your load and direct you to LA County's free hazardous-waste collection; we never toss them illegally.",
  },
  {
    question: "What do I do with old paint and chemicals?",
    answer:
      "Take them to an LA County household-hazardous-waste collection site or event, which is free — liquid paint, solvents, oil, pesticides, and batteries all qualify. Note it's illegal to carry more than 15 gallons or 125 pounds of hazardous waste in your own vehicle, so keep loads small or ask us where the nearest site is.",
  },
  {
    question: "Do I have to sort everything before you come?",
    answer:
      "No — sorting is the service. Just set aside anything you want to keep so it doesn't get hauled by mistake. Everything else we separate on site into donation, recycling, hazardous, and disposal as we clear it.",
  },
  {
    question: "Can you take the old appliances and furniture in there too?",
    answer:
      "Yes — the garage fridge, a dead washer, broken furniture, shelving, exercise gear, it all goes in the same clear-out. Refrigerant appliances are routed to certified recovery as required by law, so even the fridge is handled correctly.",
  },
  {
    question: "How long does a garage clean-out take?",
    answer:
      "Most single-car and standard two-car garages are a same-visit job. Densely packed spaces, hoarding situations, or multi-bay garages can take longer — we'll give you a realistic time along with the quote at the walkthrough.",
  },
];

export default function GarageCleanoutPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Garage Clean-Out",
            description:
              "Full garage clean-outs across Los Angeles with donation-first sorting and legal hazardous-waste routing.",
            path: "/services/garage-cleanout",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        h1="Garage Clean-Out in Los Angeles — Park in It Again"
        intro={<p>{intro}</p>}
        media={
          <BeforeAfterTiles
            standalone={false}
            before={JOB_PHOTOS.garageBefore}
            after={JOB_PHOTOS.garageAfter}
          />
        }
        aside={<QuoteForm compact variant="accent" defaultService="garage-cleanout" />}
      />

      <ProcessSteps heading="How a Garage Clean-Out Works" steps={timelineSteps} />

      <PillList
        heading="What a Garage Clean-Out Includes"
        intro={includesIntro}
        items={includesItems}
        bg="white"
      />

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">Load-Based Pricing</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{pricingText}</p>
      </Section>

      <Section bg="white">
        <Callout title="Hazardous waste needs a different route" variant="warning">
          {hazardText}
        </Callout>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What to Expect</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{expectText}</p>
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:garage-cleanout" label="Garage Clean-Out" />
        </div>
      </Section>

      <Section bg="offwhite">
        <p className="leading-relaxed text-brand-charcoal">
          Old fridge or washer in there? See{" "}
          <Link
            href="/services/appliance-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Appliance Removal
          </Link>
          . Just furniture?{" "}
          <Link
            href="/services/furniture-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Furniture Removal
          </Link>
          . Whole property?{" "}
          <Link
            href="/services/junk-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Junk Removal
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
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
        <p className="mt-6 text-sm text-brand-gray">
          Learn more:{" "}
          <a
            href="https://cleanla.lacounty.gov/hhw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            LA County Household Hazardous &amp; E-Waste
          </a>{" "}
          ·{" "}
          <a
            href="https://www.lacsd.org/services/solid-waste/household-hazardous-waste-collection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            LA County Sanitation Districts HHW
          </a>
        </p>
      </Section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to park in your garage again?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
