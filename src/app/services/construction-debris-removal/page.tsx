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

const SERVICE_NAME = "Construction Debris Removal";
const PATH = "/services/construction-debris-removal";

export const metadata: Metadata = buildMetadata({
  title: "Construction Debris Removal in Los Angeles | Dump Happy",
  description:
    "Construction debris hauled across LA — drywall, wood, concrete, and remodel debris, routed to certified recyclers. Load-based pricing, free quote.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "Do you take concrete, drywall, and heavy demolition debris?",
    answer:
      "Yes — concrete, masonry, brick, drywall, lumber, flooring, tile, roofing, and fixtures. Heavy inert material like concrete is dense, so it fills a load tier faster than lighter debris; we'll factor that into your quote up front.",
  },
  {
    question: "Does hauling with you help me meet LA's recycling requirement?",
    answer:
      "Yes. LA County requires most C&D debris to be recycled — 70% of mixed debris and 100% of soil under the 2024 update — through certified facilities, and CalGreen requires at least 65% diversion on permitted projects. We route your debris to certified processors, which supports the documentation tied to your final inspection and Certificate of Occupancy.",
  },
  {
    question: "Can you schedule around my construction phases?",
    answer:
      "Yes — we do fast pickups between demo, rough-in, and finish so debris doesn't pile up or block the site. Contractors and remodelers with recurring jobs can set up repeat service; just tell us the cadence.",
  },
  {
    question: "Dumpster rental vs. your haul-away — which is better?",
    answer:
      "A crew does the loading for you. With a dumpster, your team still carries every piece of debris to the bin, the bin takes up the driveway or street for days, and you pay for the box whether it's full or not. Our haul-away clears debris in one visit — we load it, sweep up, and route it to certified recyclers — and works on tight sites with no room for a bin. You pay for the volume you actually fill.",
  },
  {
    question: "What can't you haul from a job site?",
    answer:
      "Hazardous materials like asbestos, wet paint, and solvents need to go to a household hazardous waste drop-off; we'll haul everything else. Flag anything questionable when you book so we can quote the rest of the job accurately.",
  },
  {
    question: "How is it priced?",
    answer:
      "By volume in the truck, quoted before we start — no per-pound surprises. Because we take material to certified facilities, permitted hauling can also qualify for facility rebates that keep costs down.",
  },
];

export default function ConstructionDebrisRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Construction debris removal across Los Angeles, routed to certified recyclers to meet LA County and CalGreen diversion requirements.",
            path: PATH,
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: SERVICE_NAME, path: PATH },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: SERVICE_NAME, path: PATH },
        ]}
      />

      <Hero
        h1={
          <>Construction &amp; Demolition Debris Removal in Los Angeles</>
        }
        intro={
          <>
            Remodels and demolitions generate more debris than anyone plans for, and in LA where
            it goes is regulated. Dump Happy hauls construction and demolition (C&amp;D) debris
            for contractors, remodelers, and homeowners across Los Angeles — drywall, lumber,
            flooring, concrete, tile, fixtures — and routes it to certified recycling facilities
            so it&apos;s handled correctly. Load-based pricing, fast turnarounds between phases,
            and clean job sites without a dumpster parked out front for a week.
          </>
        }
        background={{ type: "pattern", tone: "charcoal" }}
        aside={
          <QuoteForm compact variant="card" defaultService="construction-debris-removal" />
        }
      />

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">C&amp;D Debris We Take</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Drywall, lumber and wood, flooring and carpet, tile, roofing, concrete and masonry,
          brick, cabinets and fixtures, windows, and general remodel debris.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          The Part That Affects Your Permit — LA&apos;s Recycling Requirement
        </h2>
        <div className="mt-4">
          <Callout
            title="LA County &amp; CalGreen recycling requirements"
            variant="info"
          >
            Los Angeles County&apos;s Construction &amp; Demolition ordinance requires the
            majority of C&amp;D debris to be recycled — as of the August 2024 update,{" "}
            <strong>70% of mixed C&amp;D and 100% of soil debris</strong>, verified through
            third-party-certified facilities — and CalGreen requires at least{" "}
            <strong>65% diversion</strong> on permitted projects. On many jobs, proof of proper
            C&amp;D recycling is tied to your{" "}
            <strong>final building inspection and Certificate of Occupancy.</strong> Dump Happy
            routes your debris to certified processors, which is also often cheaper, since
            permitted haulers can qualify for facility rebates.
          </Callout>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Load-Based Pricing</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Priced by truck volume — a bathroom gut is a lower tier; a full demo runs toward full
          load — quoted before we haul, with fast pickups between phases so debris isn&apos;t
          piling up on site.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">What We Can&apos;t Take</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Household hazardous waste and materials like asbestos, wet paint, and solvents
          can&apos;t ride in a standard truck — those need specialized handling. Flag them and
          we&apos;ll point you to the right route.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">What Our Clients Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:construction-debris-removal" label={SERVICE_NAME} />
        </div>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/junk-removal" className="text-brand-orange hover:underline">
            Junk Removal
          </Link>
          ,{" "}
          <Link href="/services/garage-cleanout" className="text-brand-orange hover:underline">
            Garage Clean-Out
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Serving:</span>
          <Link href="/locations/culver-city" className="text-brand-orange hover:underline">
            Culver City
          </Link>
          ,{" "}
          <Link href="/locations/brentwood" className="text-brand-orange hover:underline">
            Brentwood
          </Link>
          .
        </div>
      </Section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Got a job site full of debris?"
        subtext="Get a free, load-based quote — no hourly surprises."
      />
    </>
  );
}
