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
import { PillList } from "@/components/page-sections/PillList";

const SERVICE_NAME = "Yard/Green Waste Removal";
const PATH = "/services/yard-waste-removal";

export const metadata: Metadata = buildMetadata({
  title: "Green Waste Removal & Hauling in Los Angeles | Dump Happy",
  description:
    "Green waste removal and hauling in LA from $289. Branches, palm fronds, trimmings, and sod hauled to organics facilities, not landfills. Free quote.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "Who does green waste removal in Los Angeles?",
    answer:
      "Dump Happy provides green waste removal and green waste hauling across LA's Westside, South Bay, and Central LA, 7 days a week from 10am to 8pm. We load branches, palm fronds, trimmings, leaves, and sod from anywhere on the property and haul them to organics facilities for composting or mulch. Pricing starts at $289 for a small load.",
  },
  {
    question: "What yard waste do you take?",
    answer:
      "Branches and limbs, hedge and shrub trimmings, leaves and grass, brush, weeds, sod, small stumps, palm fronds, and storm debris. If it grew in your yard, we can almost certainly haul it.",
  },
  {
    question: "Do you take dirt, rock, or concrete with the yard waste?",
    answer:
      "No — those aren't organics and can't be mixed into a green-waste load if it's going to be composted. Dirt, rock, and concrete go through our construction-debris service instead. Keeping the loads separate is what keeps the green waste recyclable.",
  },
  {
    question: "Where does my green waste go?",
    answer:
      "To authorized organics facilities, where it's composted or turned into mulch — not to a landfill. Under California's SB 1383, yard trimmings are supposed to be diverted from landfills, and we handle them that way, with records for landscapers and businesses who need them.",
  },
  {
    question: "Can you handle storm debris and big overgrowth jobs?",
    answer:
      "Yes — downed limbs after a windstorm, an overgrown lot, or a full yard clear-out before a sale. We haul large volumes in one visit, including piles in hard-to-reach corners of the property.",
  },
  {
    question: "Do you serve landscapers who need to offload green waste?",
    answer:
      "Yes. Organics haulers have SB 1383 recordkeeping expectations, so we route material to authorized facilities and can keep the documentation clean. Set up recurring service if you need regular offloading.",
  },
  {
    question: "How is yard waste removal priced?",
    answer:
      "Green waste removal is priced by how much of the truck it fills: a small load starts at $289, a quarter load at $389, a half load at $569, and a full 16ft trailer at $899. A few piles of trimmings is usually a small load; a full yard clear-out runs higher. You get the price before we start loading, with no per-bag charges.",
  },
];

const GREEN_WASTE_GUIDES = [
  { href: "/blog/green-waste-removal-los-angeles", label: "Green waste removal in Los Angeles: the complete guide" },
  { href: "/blog/green-waste-hauling-los-angeles", label: "Green waste hauling for homeowners, landscapers, and property managers" },
  { href: "/blog/green-waste-removal-cost-los-angeles", label: "How much green waste removal costs in LA" },
  { href: "/blog/too-much-yard-waste-for-green-bin-los-angeles", label: "Too much yard waste? Branches, palm fronds, and big piles hauled" },
  { href: "/blog/sb-1383-yard-waste-los-angeles", label: "SB 1383 and your yard waste" },
];

export default function YardWasteRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Yard and green waste removal across Los Angeles, routing branches, trimmings, and storm debris to organics facilities instead of landfills.",
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
        background={{ type: "pattern", tone: "orange" }}
        h1={<>Green Waste Removal &amp; Yard Waste Hauling in Los Angeles</>}
        intro={
          <p>
            Dump Happy handles green waste removal and green waste hauling across Los
            Angeles, starting at $289. A weekend of yard work, a tree that came down, or a long-overdue overgrowth
            clear-out leaves piles too big to deal with. Dump Happy hauls yard and
            green waste across Los Angeles — branches, trimmings, leaves, sod, brush, and storm
            debris — and takes it to organics facilities so it&apos;s composted or mulched, not
            dumped. Our crew loads it from anywhere on the property and clears it in one visit.
          </p>
        }
        aside={<QuoteForm compact variant="card" defaultService="yard-waste-removal" />}
      />

      <PillList
        heading="Green Waste We Take"
        items={[
          "Tree branches and limbs",
          "Hedge and shrub trimmings",
          "Leaves and grass",
          "Brush and weeds",
          "Sod and small stumps",
          "Palm fronds",
          "Storm and overgrowth debris",
        ]}
      />

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Handled Right — and Documented
        </h2>
        <div className="mt-4">
          <Callout title="SB 1383 &amp; organics diversion" variant="info">
            California&apos;s <strong>SB 1383</strong> requires organic waste (including yard
            trimmings) to be diverted from landfills — the state is targeting a 75% cut in
            organic disposal, and non-compliance penalties can reach{" "}
            <strong>$10,000 a day.</strong> Dump Happy takes your green waste to{" "}
            <strong>authorized organics facilities</strong> where it&apos;s composted or turned
            into mulch, and, for landscapers and businesses, we keep the kind of records SB 1383
            expects rather than sending organics to a landfill.
          </Callout>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">What We Can&apos;t Mix In</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Green waste stays green — <strong>dirt, rock, concrete, and construction debris
          aren&apos;t organics</strong> and go through our{" "}
          <Link
            href="/services/construction-debris-removal"
            className="text-brand-orange hover:underline"
          >
            Construction Debris Removal
          </Link>{" "}
          service instead. Hazardous materials like pesticides and chemicals need to go to a
          household hazardous waste drop-off; we&apos;ll haul everything else. Keeping the loads
          separate is what keeps the organics recyclable.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Storm and Overgrowth Cleanup
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Downed limbs after a windstorm, an overgrown yard before a sale, a rental&apos;s
          neglected back lot — we clear it fast, including hard-to-reach piles, and haul it all
          in one go.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Green Waste Removal Guides for Los Angeles
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-brand-charcoal">
          {GREEN_WASTE_GUIDES.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="font-semibold text-brand-orange hover:underline">
                {g.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">What Our Clients Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:yard-waste-removal" label={SERVICE_NAME} />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <Section bg="offwhite">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/junk-removal" className="text-brand-orange hover:underline">
            Junk Removal
          </Link>
          ,{" "}
          <Link
            href="/services/construction-debris-removal"
            className="text-brand-orange hover:underline"
          >
            Construction Debris Removal
          </Link>
          ,{" "}
          <Link href="/services/hot-tub-removal" className="text-brand-orange hover:underline">
            Hot Tub Removal
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Serving:</span>
          <Link href="/locations/westchester" className="text-brand-orange hover:underline">
            Westchester
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
        heading="Ready to clear the yard?"
        subtext="Get a free, load-based quote today."
      />
    </>
  );
}
