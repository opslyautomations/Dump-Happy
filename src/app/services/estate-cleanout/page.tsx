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

const SERVICE_NAME = "Estate/Property Clean-Out";
const PATH = "/services/estate-cleanout";

export const metadata: Metadata = buildMetadata({
  title: "Estate Clean-Out Services in Los Angeles | Dump Happy",
  description:
    "Compassionate estate and property clean-outs in Los Angeles — whole homes cleared with care, valuables protected, donation-first. Free, no-pressure quote today.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "What does an estate clean-out include?",
    answer:
      "The full contents of a home — furniture, appliances, mattresses, clothing, garage and yard items, and years of accumulated belongings — cleared in one coordinated job. We sort for donation, recycling, and disposal as we go and leave the property broom-clean and ready for sale or handoff.",
  },
  {
    question: "What happens if you find valuables or important documents?",
    answer:
      "We hand them to you. Estate jobs regularly turn up cash, jewelry, deeds, and photos, so we work carefully and set aside anything of apparent value or importance rather than deciding for you. You control what's kept, donated, or discarded.",
  },
  {
    question: "Can you work within a probate or escrow deadline?",
    answer:
      "Yes. We regularly coordinate with executors, estate attorneys, and realtors on tight timelines. Tell us your date and we'll schedule the clear-out to hit it, including larger multi-day jobs.",
  },
  {
    question: "Do you donate usable items?",
    answer:
      "Yes — usable furniture, clothing, and household goods go to local charities first, with metals and e-waste to recyclers. Only what can't be reused is disposed of, and we can note donations for your records.",
  },
  {
    question: "How is an estate clean-out priced?",
    answer:
      "By volume — how much fills the truck — quoted up front after a walkthrough, so a full house is a known number before we start. No hourly surprises, no hidden fees.",
  },
  {
    question: "Is your crew respectful about the situation?",
    answer:
      "Yes. Many estate jobs follow a loss, and we keep the process low-pressure and discreet — no rushing your decisions, no judgment, careful handling of the home and its contents.",
  },
];

export default function EstateCleanoutPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Compassionate whole-home estate and property clean-outs across Los Angeles, with valuables protected and usable items routed to donation.",
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

      <section className="bg-brand-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-20">
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Estate &amp; Property Clean-Out Services in Los Angeles
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Clearing a family home is rarely just a job — it usually comes with a loss, a
              deadline, or both. Dump Happy handles estate and property clean-outs across Los
              Angeles at your pace and on your terms: we empty the whole house, protect anything
              that matters, route usable belongings to donation, and dispose of the rest legally.
              Whether you&apos;re an executor with a probate timeline, a family downsizing a
              parent, or a realtor prepping a listing, we take the physical weight off you.
            </p>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm compact defaultService="estate-cleanout" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">
          How an Estate Clean-Out Works
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          We start with a walkthrough to agree on what stays, what&apos;s donated, and what goes,
          and to set a firm load-based price. You mark anything to keep — heirlooms, photos,
          documents — and we set it aside before anything moves. Then we clear the property room
          by room, sort for donation and recycling, and leave it broom-clean and ready for sale,
          handoff, or the next chapter.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">What We Handle</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">
            Whole-home contents — furniture, appliances, mattresses, garage and yard, decades of
            accumulation — in a single coordinated job rather than a dozen separate pickups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Protecting What Matters</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Estate jobs turn up things people don&apos;t expect — cash, jewelry, deeds, old photos,
          military records. We work carefully around personal items and hand anything of apparent
          value or importance to you rather than making the call ourselves. Nothing sentimental
          gets tossed on our say-so.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">Donation First</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">
            Usable furniture, clothing, and household goods are routed to local charities so a
            lifetime of belongings does some good instead of filling a landfill; metals and
            e-waste go to recyclers; only the rest is disposed of.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Who We Work With</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Executors and estate attorneys on probate timelines, realtors prepping listings, and
          families managing a move to assisted living or an out-of-state relative&apos;s home.
          Tell us the deadline and we&apos;ll build the job around it.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">What Our Clients Say</h2>
          <div className="mt-6">
            <ReviewSlot contextKey="service:estate-cleanout" label={SERVICE_NAME} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/furniture-removal" className="text-brand-orange hover:underline">
            Furniture Removal
          </Link>
          ,{" "}
          <Link href="/services/appliance-removal" className="text-brand-orange hover:underline">
            Appliance Removal
          </Link>
          ,{" "}
          <Link href="/services/garage-cleanout" className="text-brand-orange hover:underline">
            Garage Clean-Out
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Serving:</span>
          <Link href="/locations/beverly-hills" className="text-brand-orange hover:underline">
            Beverly Hills
          </Link>
          ,{" "}
          <Link href="/locations/brentwood" className="text-brand-orange hover:underline">
            Brentwood
          </Link>
          , and all{" "}
          <Link href="/locations" className="text-brand-orange hover:underline">
            service areas
          </Link>
          .
        </div>
      </section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Ready to clear an estate or property?"
        subtext="Get a free, no-pressure, load-based quote today."
      />
    </>
  );
}
