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

const SERVICE_NAME = "Commercial Junk Removal";
const PATH = "/services/commercial-junk-removal";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Junk Removal in Los Angeles | Dump Happy",
  description:
    "Office and commercial junk removal in LA — furniture, cubicles, and clear-outs, with e-waste routed to certified recyclers. After-hours available. Free quote today.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "Can you work after hours so we don't disrupt business?",
    answer:
      "Yes — evenings and weekends are common for commercial jobs. We schedule the clear-out around your hours and coordinate with building management on elevator and dock access so your team and customers aren't affected.",
  },
  {
    question: "Do you provide a certificate of insurance for our building?",
    answer:
      "Yes — many property managers require a COI before work, and we can provide one on request. Let us know the building's requirements when you book.",
  },
  {
    question: "Do you take old office computers and electronics?",
    answer:
      "Yes — and because they're covered e-waste in California, we route them to certified recyclers rather than the dumpster, which is illegal for electronics. Keeping them out of the trash also protects you from DTSC penalties.",
  },
  {
    question: "What about the data on our old devices?",
    answer:
      "Handle data destruction through a certified process before or alongside disposal — we're a hauler, not a data-destruction vendor, so for drives with sensitive information we'll coordinate with or refer you to a certified partner that issues a Certificate of Destruction. We won't overstate what a haul-out covers.",
  },
  {
    question: "Can you handle a full office decommission or just small loads?",
    answer:
      "Both — from a few pieces of furniture to a whole floor of cubicles, desks, and fixtures. It's priced by volume, and larger decommissions can be scheduled across the timeline you need.",
  },
  {
    question: "Do you offer recurring service for property managers?",
    answer:
      "Yes — regular pickups for turnovers, common-area clear-outs, and ongoing junk are easy to set up. Tell us the cadence and we'll keep a standing schedule.",
  },
];

export default function CommercialJunkRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Commercial and office junk removal across Los Angeles for offices, retail, and property managers, with electronics routed to certified e-waste recyclers.",
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
        background={{ type: "pattern", tone: "charcoal" }}
        h1={
          <>
            Commercial &amp; Office Junk Removal in Los Angeles
          </>
        }
        intro={
          <>
            When a business clears out — an office downsizing, a retail space turning over, a
            property manager resetting a unit — it needs to happen fast, cleanly, and around
            operating hours. Dump Happy handles commercial junk removal across Los Angeles:
            office furniture, cubicles, retail fixtures, and general clear-outs, with
            electronics routed to certified recyclers. We schedule around your business,
            coordinate with building management, and get the space ready for whatever&apos;s
            next.
          </>
        }
        aside={<QuoteForm compact variant="card" defaultService="commercial-junk-removal" />}
      />

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">Who We Serve</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Offices and coworking spaces, retail and restaurants, property managers and landlords,
          and contractors handling tenant improvements — one-time clear-outs or recurring service.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What We Clear</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Office furniture and cubicles, desks and chairs, filing cabinets, retail shelving and
          fixtures, breakroom appliances, and general commercial junk — from a single suite to a
          full floor.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">
          Electronics and Data — The Honest Version
        </h2>
        <div className="mt-4">
          <Callout title="Electronics &amp; data: the honest version" variant="info">
            Old computers, monitors, and business electronics are{" "}
            <strong>covered e-waste</strong> in California and can&apos;t legally go in the
            dumpster; violations carry serious DTSC penalties. Dump Happy removes your office
            electronics and routes them to <strong>certified e-waste recyclers.</strong> One line
            we won&apos;t blur: we&apos;re a junk-removal company, <strong>not</strong> a
            data-destruction vendor. If your devices hold sensitive data, they should go through{" "}
            <strong>certified data destruction</strong> (a Certificate of Destruction,
            NIST-standard wiping or shredding) first — we&apos;ll coordinate with or point you to
            a certified partner rather than pretend a haul-out covers your data-security
            obligations.
          </Callout>
        </div>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">Logistics</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          After-hours and weekend scheduling so we&apos;re not disrupting your business,
          certificate of insurance (COI) for building management on request, and recurring
          pickups for ongoing turnover. Tell us the building&apos;s rules and we&apos;ll work
          within them.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Clients Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:commercial-junk-removal" label={SERVICE_NAME} />
        </div>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">
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
          <Link href="/services/furniture-removal" className="text-brand-orange hover:underline">
            Furniture Removal
          </Link>
          ,{" "}
          <Link
            href="/services/construction-debris-removal"
            className="text-brand-orange hover:underline"
          >
            Construction Debris Removal
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Serving:</span>
          <Link href="/locations/culver-city" className="text-brand-orange hover:underline">
            Culver City
          </Link>
          ,{" "}
          <Link href="/locations/koreatown" className="text-brand-orange hover:underline">
            Koreatown
          </Link>
          ,{" "}
          <Link href="/locations/mid-city" className="text-brand-orange hover:underline">
            Mid-City
          </Link>
          .
        </div>
      </Section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Ready to clear your office or retail space?"
        subtext="Get a free, load-based quote — after-hours scheduling available."
      />
    </>
  );
}
