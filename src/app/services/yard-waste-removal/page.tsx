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
import { BeforeAfterTiles } from "@/components/page-sections/BeforeAfterTiles";
import { JOB_PHOTOS } from "@/lib/data/job-photos";

const SERVICE_NAME = "Yard/Green Waste Removal";
const PATH = "/services/yard-waste-removal";

export const metadata: Metadata = buildMetadata({
  title: "Yard & Green Waste Removal in Los Angeles | Dump Happy",
  description:
    "Yard and green waste removal in LA — branches, trimmings, sod, and storm debris hauled to organics facilities, not landfilled. Load-based pricing. Free quote today.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "What yard waste do you take?",
    answer:
      "Branches and limbs, hedge and shrub trimmings, leaves and grass, brush, weeds, sod, small stumps, palm fronds, and storm debris. If it grew in your yard and won't fit in the green bin, we can almost certainly haul it.",
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
      "Yes. Landscapers and gardeners self-hauling organics have SB 1383 recordkeeping expectations, and we route material to authorized facilities and can keep the documentation clean. Set up recurring service if you need regular offloading.",
  },
  {
    question: "How is yard waste removal priced?",
    answer:
      "By volume in the truck — a few bags of trimmings is a small load; a cleared-out yard runs higher — quoted before we start, with no per-bag surprises.",
  },
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
        background={{
          type: "photo",
          src: JOB_PHOTOS.branches.src,
          alt: "Dump Happy crew member loading tree branches and yard waste into a truck bed",
          width: JOB_PHOTOS.branches.width,
          height: JOB_PHOTOS.branches.height,
        }}
        h1={<>Yard &amp; Green Waste Removal in Los Angeles</>}
        intro={
          <p>
            A weekend of yard work, a tree that came down, or a long-overdue overgrowth
            clear-out leaves piles the green bin can&apos;t touch. Dump Happy hauls yard and
            green waste across Los Angeles — branches, trimmings, leaves, sod, brush, and storm
            debris — and takes it to organics facilities so it&apos;s composted or mulched, not
            dumped. You skip the dozen bin cycles and the trips to the dump; we clear it in one
            visit.
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
        <h2 className="text-2xl font-extrabold text-brand-black">
          Handled Right — and Documented
        </h2>
        <div className="mt-4">
          <Callout title="SB 1383 &amp; organics diversion" variant="info">
            California&apos;s <strong>SB 1383</strong> requires organic waste (including yard
            trimmings) to be diverted from landfills — the state is targeting a 75% cut in
            organic disposal, and non-compliance penalties can reach{" "}
            <strong>$10,000 a day.</strong> Dump Happy takes your green waste to{" "}
            <strong>authorized organics facilities</strong> where it&apos;s composted or turned
            into mulch, and, for landscapers and businesses who self-haul, we keep the kind of
            records SB 1383 expects rather than sending organics to a landfill.
          </Callout>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">What We Can&apos;t Mix In</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Green waste stays green — <strong>dirt, rock, concrete, and construction debris
          aren&apos;t organics</strong> and go through our{" "}
          <Link
            href="/services/construction-debris-removal"
            className="text-brand-orange hover:underline"
          >
            Construction Debris Removal
          </Link>{" "}
          service instead, and household hazardous waste (pesticides, chemicals) needs a County
          drop-off. Keeping the loads separate is what keeps the organics recyclable.
        </p>
      </Section>

      <BeforeAfterTiles
        heading="A Real Yard Clean-Out"
        before={{ ...JOB_PHOTOS.yardBefore }}
        after={{ ...JOB_PHOTOS.yardAfter }}
        bg="offwhite"
      />

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">
          Storm and Overgrowth Cleanup
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Downed limbs after a windstorm, an overgrown yard before a sale, a rental&apos;s
          neglected back lot — we clear it fast, including hard-to-reach piles, and haul it all
          in one go.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Clients Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:yard-waste-removal" label={SERVICE_NAME} />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">
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
        <p className="mt-4 text-sm text-brand-gray">
          Learn more:{" "}
          <a
            href="https://calrecycle.ca.gov/organics/slcp/collection/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            CalRecycle SB 1383 Organics Collection
          </a>{" "}
          ·{" "}
          <a
            href="https://sanitation.lacity.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            LA Sanitation Organics
          </a>
        </p>
      </Section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Ready to clear the yard?"
        subtext="Get a free, load-based quote today."
      />
    </>
  );
}
