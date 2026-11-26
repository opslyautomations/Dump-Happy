import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  serviceJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
  type FaqItem,
} from "@/lib/seo";
import {
  DUMP_STORE_TIERS,
  DUMP_STORE_FEE_NOTE,
  PRICING_TIERS,
  STORAGE_UNITS,
  STORAGE_NOTE,
  formatPrice,
} from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABand } from "@/components/CTABand";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceGuides } from "@/components/RelatedContent";
import { QuoteForm } from "@/components/QuoteForm";
import { PriceTierGrid, StorageUnitGrid } from "@/components/PriceTiers";
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";

const SERVICE_NAME = "Dump + Store";
const PATH = "/services/dump-and-store";

const movingFrom = formatPrice(DUMP_STORE_TIERS[0].priceFrom);
const movingTo = formatPrice(DUMP_STORE_TIERS[DUMP_STORE_TIERS.length - 1].priceFrom);
const storageFrom = formatPrice(STORAGE_UNITS[0].pricePerMonth);
const dumpFrom = formatPrice(PRICING_TIERS[0].priceFrom);

export const metadata: Metadata = buildMetadata({
  title: "Dump + Store: Move Into a Storage Unit in Los Angeles | Dump Happy",
  description: `Dump Happy moves your things into a storage unit for one flat moving fee from ${movingFrom}, admin fee and lock included. Storage units from ${storageFrom}/mo. Free quote.`,
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "What is Dump + Store?",
    answer: `Dump + Store is Dump Happy's move-into-storage service. Our crew loads what you're keeping, hauls it, and moves you into your storage unit for one flat moving fee, starting at ${movingFrom}. Anything you're not keeping can be hauled away as junk removal.`,
  },
  {
    question: "How much does Dump + Store cost?",
    answer: `The flat moving fee is based on how much of the truck your things fill: a quarter load (about 3.5 cubic yards) from ${movingFrom}, a half load from ${formatPrice(DUMP_STORE_TIERS[1].priceFrom)}, a three-quarter load from ${formatPrice(DUMP_STORE_TIERS[2].priceFrom)}, and a full load (about 14 cubic yards) from ${movingTo}. The admin fee and lock are included. Storage unit rent is billed monthly on top.`,
  },
  {
    question: "How much are the storage units?",
    answer: `Storage units start at ${storageFrom} a month for a 10×10. Current rates: ${STORAGE_UNITS.map((u) => `${u.size} ${formatPrice(u.pricePerMonth)}/mo`).join(", ")}. Storage rates are subject to change, so we confirm the current rate when you book.`,
  },
  {
    question: "What's included in the flat moving fee?",
    answer:
      "Loading at your place, transport, and moving your things into the storage unit, plus the admin fee and a lock. You get the price up front, before anything is loaded.",
  },
  {
    question: "Can you haul away junk at the same time?",
    answer: `Yes. That's the \"dump\" in Dump + Store. Anything you don't want to keep is priced as junk removal by load, from ${dumpFrom} for a quarter load, with loading, haul-away, disposal, and cleanup included.`,
  },
  {
    question: "Which storage unit size do I need?",
    answer: `Tell us what you're storing, or send a few photos, and we'll recommend a unit size and load tier before you book. Call or text ${SITE.phoneDisplay}.`,
  },
];

export default function DumpAndStorePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description: `Dump Happy moves your belongings into a storage unit in Los Angeles for one flat moving fee from ${movingFrom}, admin fee and lock included, and hauls away anything you're not keeping.`,
            path: PATH,
            minPrice: DUMP_STORE_TIERS[0].priceFrom,
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
        h1="Dump + Store: We Move You Into Your Storage Unit"
        intro={
          <p>
            Moving, downsizing, or clearing a house out? Dump Happy loads what you&apos;re keeping
            and moves you into your storage unit for one flat moving fee, from {movingFrom} with
            the admin fee and lock included. Whatever you&apos;re not keeping, we haul away in the
            same job. Storage units start at {storageFrom}/mo.
          </p>
        }
        aside={<QuoteForm compact variant="accent" defaultService="dump-and-store" />}
      />

      <Section bg="white" maxWidth="6xl">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Moving Fee: One Flat Price</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-charcoal">
          Priced by how much of the truck your things fill, not by the hour. {DUMP_STORE_FEE_NOTE}
        </p>
        <PriceTierGrid tiers={DUMP_STORE_TIERS} />
      </Section>

      <Section bg="offwhite" maxWidth="6xl">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Storage Units</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-charcoal">
          Monthly rent for the unit itself, billed separately from the moving fee. {STORAGE_NOTE}
        </p>
        <StorageUnitGrid units={STORAGE_UNITS} />
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Keep It, or Dump It</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Most moves into storage come with a pile of things that aren&apos;t worth storing. Point
          them out and we haul them away as junk removal, priced by load from {dumpFrom}, with
          loading, haul-away, disposal, and cleanup included. Usable pieces go to donation where we
          can. See <Link href="/services/junk-removal" className="text-brand-orange hover:underline">junk removal</Link>{" "}
          and the full <Link href="/pricing" className="text-brand-orange hover:underline">pricing page</Link>.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/junk-removal" className="text-brand-orange hover:underline">
            Junk Removal
          </Link>
          ,{" "}
          <Link href="/services/furniture-removal" className="text-brand-orange hover:underline">
            Furniture Removal
          </Link>
          ,{" "}
          <Link href="/services/estate-cleanout" className="text-brand-orange hover:underline">
            Estate/Property Clean-Out
          </Link>
          ,{" "}
          <Link href="/services/garage-cleanout" className="text-brand-orange hover:underline">
            Garage Clean-Out
          </Link>
        </div>
      </section>

      <ServiceGuides serviceSlug="dump-and-store" label="Dump + Store" />

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Moving into storage?"
        subtext={`One flat moving fee from ${movingFrom}, admin fee and lock included. Call or text ${SITE.phoneDisplay}.`}
      />
    </>
  );
}
