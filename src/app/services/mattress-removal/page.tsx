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
import { Callout } from "@/components/Callout";
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";
import { PillList } from "@/components/page-sections/PillList";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = buildMetadata({
  title: "Mattress Removal, Pickup & Disposal in LA | Dump Happy",
  description:
    "Mattress removal and pickup in Los Angeles from $289. We carry it out of any room and handle legal mattress disposal through California recycling.",
  path: "/services/mattress-removal",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Mattress Removal", path: "/services/mattress-removal" },
];

const intro = `Dump Happy provides mattress removal, mattress pickup, and legal mattress disposal across Los Angeles, starting at $289 for a small load. A used mattress is one of the hardest things to get rid of on your own: it's heavy and floppy, it won't fit in a car, and leaving it at the curb can cost you a fine. Dump Happy carries mattresses and box springs out of any room in your LA home and routes them to California mattress recyclers — the responsible, legal path, without you wrestling a king-size down a stairwell. One item or a whole apartment's worth, we handle it.`;

const recyclingHeading = "How Mattress Recycling Works in California";

const recyclingText = `California law (SB 254) built a statewide system for recycling mattresses, funded by a small fee charged on every mattress sold. Old units are broken down and the steel springs, foam, and fibers become carpet padding, insulation, and mulch — the reason your mattress shouldn't just hit a landfill. When Dump Happy picks up your mattress, we route it to a California mattress recycler for you, so it ends up in that stream without you lifting a finger.`;

const includedHeading = "What's Included When You Book Mattress Removal";

const includedText = `Everything from the bedroom to the recycler. Our crew carries the mattress, box spring, and frame out of any room — upstairs units, no-elevator walk-ups, and tight hallways included — loads it, and routes it to a California mattress recycler. You don't need a truck, a helper, or a free afternoon. Pricing is by load, starting at $289 for a small load, which usually covers a mattress, box spring, and frame together, and you get a firm quote before we lift anything. Call (424) 356-4141 or request a free quote online; same-day or next-day pickup is often available when the schedule allows.`;

const illegalDumpingReinforcement = `Leaving a mattress on a sidewalk, alley, or curb outside of a scheduled, approved pickup is illegal dumping under California Penal Code 374.3 — the same law that covers furniture and bags of junk. LA County fines run up to $10,000, on top of possible cleanup costs. A booked mattress removal is the simple way to avoid it entirely.`;

const faqs: FaqItem[] = [
  {
    question: "What's the difference between mattress removal, mattress pickup, and mattress disposal?",
    answer:
      "In practice they're the same job. Mattress pickup or removal means a crew carries the mattress out of your home and hauls it away; mattress disposal is where it ends up. Dump Happy does all three in one visit: we lift it from any room, load it, and route it to a California mattress recycler instead of a landfill.",
  },
  {
    question: "Do you offer same-day mattress pickup in Los Angeles?",
    answer:
      "Often, yes. We're open 10am to 8pm, 7 days a week, and can usually do same-day or next-day mattress pickup across the Westside, South Bay, and Central LA when the schedule allows. Call (424) 356-4141 to check today's availability.",
  },
  {
    question: "How do you dispose of a mattress in Los Angeles?",
    answer:
      "We haul it from your room and route it to a California mattress recycler, where the springs, foam, and fabric are recovered and reused. That keeps it out of a landfill and off the street — and off your to-do list, since you never handle the lift or the hauling.",
  },
  {
    question: "What's included when I book mattress removal?",
    answer:
      "Everything: our crew carries the mattress out of any room — upstairs and no-elevator buildings included — loads it, and routes it to a California mattress recycler. Box springs and frames can go in the same trip. Pricing starts at $289 for a small load, with a firm quote before we lift anything.",
  },
  {
    question: "Do you take box springs and futons too?",
    answer:
      "Yes — box springs, foundations, and futons along with the mattress, plus the bed frame as a furniture item. Tell us how many pieces when you book so the load tier is quoted right the first time.",
  },
  {
    question: "Will you take a stained or old mattress?",
    answer:
      "Yes. Condition doesn't matter for removal — every mattress we haul goes to a California mattress recycler, which processes the materials regardless of stains or wear.",
  },
  {
    question: "Is it illegal to leave a mattress on the curb?",
    answer:
      "If it's not part of a scheduled, approved pickup, yes — dumping a mattress on a sidewalk, alley, or roadside violates California Penal Code 374.3 and can bring fines up to $10,000 in LA County plus cleanup costs. A booked removal avoids all of that.",
  },
  {
    question: "Can you remove several mattresses from a rental or apartment turnover?",
    answer:
      "Yes — apartment turnovers, dorms, and multi-unit clear-outs are common jobs. Multiple mattresses move up the load tiers rather than being billed one impossible errand at a time, and we handle upper floors and no-elevator buildings.",
  },
  {
    question: "How much does mattress removal cost?",
    answer:
      "Mattress removal in Los Angeles starts at $289 for a small load, which usually covers a mattress, box spring, and bed frame together. Several mattresses move up to the next load tier rather than being billed per piece. You get a firm quote before we lift anything.",
  },
];

const MATTRESS_GUIDES = [
  { href: "/blog/how-to-get-rid-of-a-mattress-los-angeles", label: "How to get rid of an old mattress in Los Angeles" },
  { href: "/blog/mattress-pickup-los-angeles", label: "Mattress pickup in Los Angeles: same-day and scheduled options" },
  { href: "/blog/free-mattress-pickup-los-angeles", label: "Free mattress pickup in LA? What mattress pickup really costs" },
  { href: "/blog/mattress-removal-cost-los-angeles", label: "How much mattress removal costs in Los Angeles" },
  { href: "/blog/mattress-recycling-los-angeles", label: "Mattress recycling in LA: where your old mattress goes" },
  { href: "/blog/box-spring-bed-frame-disposal-los-angeles", label: "Box spring and bed frame disposal" },
  { href: "/blog/bed-bug-mattress-disposal", label: "Disposing of a mattress with bed bugs" },
];

export default function MattressRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Mattress Removal",
            description:
              "Mattress and box spring removal in Los Angeles, routed to California mattress recyclers.",
            path: "/services/mattress-removal",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        h1="Mattress Removal & Pickup in Los Angeles — Off Your Floor, Into California's Recycling Stream"
        intro={<p>{intro}</p>}
        background={{ type: "pattern", tone: "orange" }}
        aside={<QuoteForm compact variant="glass" defaultService="mattress-removal" />}
      />

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">{recyclingHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{recyclingText}</p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">{includedHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{includedText}</p>
      </Section>

      <Section>
        <Callout title="Illegal dumping applies to mattresses too" variant="warning">
          {illegalDumpingReinforcement}
        </Callout>
      </Section>

      <PillList
        heading="What We Take"
        intro="Stained or older mattresses are fine."
        items={[
          "Mattresses (all sizes, twin through California king)",
          "Box springs",
          "Foundations",
          "Futons",
          "Bed frames (as furniture)",
        ]}
        bg="offwhite"
      />

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:mattress-removal" label="Mattress Removal" />
        </div>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Mattress Pickup &amp; Disposal Guides for Los Angeles
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-brand-charcoal">
          {MATTRESS_GUIDES.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="font-semibold text-brand-orange hover:underline">
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed text-brand-charcoal">
          Replacing the whole bedroom set? See{" "}
          <Link
            href="/services/furniture-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Furniture Removal
          </Link>
          . Full move-out or estate?{" "}
          <Link
            href="/services/garage-cleanout"
            className="font-semibold text-brand-orange hover:underline"
          >
            Garage Clean-Out
          </Link>{" "}
          /{" "}
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

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to get that mattress out?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
