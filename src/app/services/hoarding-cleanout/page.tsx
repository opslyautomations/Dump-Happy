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

const SERVICE_NAME = "Hoarding Clean-Out";
const PATH = "/services/hoarding-cleanout";

export const metadata: Metadata = buildMetadata({
  title: "Hoarding Clean-Out Services in Los Angeles | Dump Happy",
  description:
    "Discreet, compassionate hoarding clean-outs in Los Angeles — no judgment, your pace, keepsakes protected. We coordinate specialists when needed. Free private quote.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "Will your crew judge me or my family member?",
    answer:
      "No. Hoarding is a recognized mental-health condition, and we approach every job with respect and zero judgment. We work at your pace, don't force decisions, and keep the focus on making the home safe — not on how it got that way.",
  },
  {
    question: "Can I keep things? I'm worried you'll throw everything out.",
    answer:
      "Yes — you stay in control. Nothing goes in the truck without your say-so. We set aside photos, documents, heirlooms, and anything you flag, and we slow down around items that matter to you.",
  },
  {
    question: "What if there's mold, pests, or animal waste?",
    answer:
      "We handle clutter and volume removal. For genuine biohazard contamination that requires licensed remediation, we'll say so honestly and help coordinate a qualified specialist rather than treating it as an ordinary haul-out. Safety and a properly restored home come first.",
  },
  {
    question: "Is the service private?",
    answer:
      "Yes — low-profile, discreet, and confidential. We understand neighbors, landlords, or extended family may be a sensitivity, and we work accordingly.",
  },
  {
    question: "Can you work with family, a therapist, or a landlord?",
    answer:
      "Yes. We often coordinate with adult children, spouses, therapists, social workers, property managers, and executors. Whoever you've asked to help, we'll work alongside them and keep the person affected at the center.",
  },
  {
    question: "How is it priced, and how long does it take?",
    answer:
      "By volume, quoted after a walkthrough. Timelines vary with the size and condition of the home — some are a day, larger ones take longer — and we'll give you a realistic estimate up front, without pressure.",
  },
];

export default function HoardingCleanoutPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Discreet, judgment-free hoarding clean-out service across Los Angeles that protects keepsakes and coordinates specialists for biohazard situations.",
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
              Hoarding Clean-Out Services in Los Angeles
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Reaching out about a hoarding situation — for yourself or someone you love — takes
              courage, and Dump Happy treats it that way. Hoarding is a recognized mental-health
              condition, not a character flaw, and our crews clear these homes across Los Angeles
              without judgment, at a pace that respects the person, protecting what matters to
              them. We handle the volume and the heavy lifting so a family, landlord, or executor
              isn&apos;t facing an overwhelming space alone.
            </p>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm compact defaultService="hoarding-cleanout" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Our Promise</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          No judgment. No rushing your decisions. We don&apos;t force anything into the truck. We
          work <em>with</em> you — or with the family member or professional you&apos;ve asked to
          help — to make the home safe and functional again while keeping the person&apos;s
          dignity at the center.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">How We Work</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">
            A private walkthrough to understand the space, spot immediate safety hazards, and
            agree on goals — usually clearing pathways, and making the kitchen, bathroom, and
            exits usable first. We sort as we go, set aside anything you identify as important,
            and clear the rest by the load, room by room, at a pace you&apos;re comfortable with.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Protecting Keepsakes</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          People with hoarding disorder often have real attachments to specific items. We slow
          down for that — flagging photos, documents, heirlooms, and anything you&apos;ve told us
          to protect — so nothing irreplaceable is lost in the process.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">
            Safety and Honesty About Biohazards
          </h2>
          <div className="mt-4">
            <Callout title="Our approach to biohazards" variant="info">
              Long-term situations can involve mold, pests, spoiled food, or animal waste. Dump
              Happy handles the clutter and volume removal; for genuine biohazard contamination
              that needs licensed remediation, we&apos;ll tell you plainly and help coordinate the
              right specialist rather than pretending it&apos;s a simple haul-out. Your safety and
              a properly restored home come first.
            </Callout>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Discretion</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Unmarked, low-profile service. What happens in the home stays private — important when
          neighbors, tenants, or extended family are a concern.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">What Our Clients Say</h2>
          <div className="mt-6">
            <ReviewSlot contextKey="service:hoarding-cleanout" label={SERVICE_NAME} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/junk-removal" className="text-brand-orange hover:underline">
            Junk Removal
          </Link>
          ,{" "}
          <Link href="/services/estate-cleanout" className="text-brand-orange hover:underline">
            Estate Clean-Out
          </Link>
          ,{" "}
          <Link href="/services/garage-cleanout" className="text-brand-orange hover:underline">
            Garage Clean-Out
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Serving:</span>
          all{" "}
          <Link href="/locations" className="text-brand-orange hover:underline">
            service areas
          </Link>
          .
        </div>
      </section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Ready to talk, privately and without judgment?"
        subtext="Get a free, no-pressure quote — at your pace."
      />
    </>
  );
}
