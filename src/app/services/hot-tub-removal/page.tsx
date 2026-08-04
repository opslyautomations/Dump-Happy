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
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";
import { PullQuoteStat } from "@/components/page-sections/PullQuoteStat";

const SERVICE_NAME = "Hot Tub Removal";
const PATH = "/services/hot-tub-removal";

export const metadata: Metadata = buildMetadata({
  title: "Hot Tub Removal in Los Angeles, CA | Dump Happy",
  description:
    "Hot tub and spa removal in Los Angeles — we drain, disconnect, cut down, and haul it all away, then recycle the parts. Load-based pricing. Free quote today.",
  path: PATH,
});

const faqs: FaqItem[] = [
  {
    question: "Do I need to drain or disconnect the hot tub first?",
    answer:
      "No — we handle it. We shut the power off at the breaker and verify it's dead, drain the water safely away from your foundation and storm drains, and cap the plumbing before we start cutting. If you've already drained it, great, that can speed things up.",
  },
  {
    question: "How do you get a hot tub out of a fenced backyard?",
    answer:
      "We cut the shell into manageable sections on site — a hot tub almost never fits through a gate or doorway in one piece. That's standard for above-ground removals and lets us carry it out without damaging your fence, gate, or landscaping.",
  },
  {
    question: "Can you remove an in-ground or deck-mounted spa?",
    answer:
      "Yes, though it's a bigger job than a freestanding unit — it can involve cutting around the surround or deck and, for in-ground models, working with the concrete. We'll scope it at the walkthrough. Note that we remove the tub and debris but don't rebuild the deck afterward.",
  },
  {
    question: "How long does hot tub removal take?",
    answer:
      "A standard above-ground unit is usually two to four hours, including draining, disconnecting, cutting the shell, and hauling. In-ground and deck-integrated spas take longer depending on the structure and access.",
  },
  {
    question: "What happens to the hot tub after removal?",
    answer:
      "It's separated for recycling rather than dumped whole — the acrylic and fiberglass shell to a construction-and-demolition facility, the pump and motor to metal recyclers, and the wood frame to wood-waste recycling.",
  },
  {
    question: "How is hot tub removal priced?",
    answer:
      "By the job, based on the unit's size, whether it's above- or in-ground, and how hard it is to reach. You'll get a firm quote before we start; access (stairs, tight gates, elevated decks) is the biggest variable.",
  },
];

export default function HotTubRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: SERVICE_NAME,
            description:
              "Full-service hot tub and spa removal across Los Angeles, including draining, disconnecting, cutting down, and hauling away for recycling.",
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
        h1="Hot Tub & Spa Removal in Los Angeles"
        intro={
          <p>
            A dead hot tub is one of the heaviest, most awkward things you can try to get rid of
            — often over a thousand pounds when it still holds water, plumbed in, wired to a
            breaker, and far too big to fit through a gate in one piece. Dump Happy handles the
            whole removal across LA: we drain it, disconnect it, cut the shell down to haulable
            sections, and take every piece away, leaving your yard or deck clear.
          </p>
        }
        aside={<QuoteForm compact variant="accent" defaultService="hot-tub-removal" />}
      />

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">Why It&apos;s Not a DIY Job</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Empty, a hot tub still runs several hundred pounds, and the shell is rigid acrylic and
          fiberglass that has to be cut apart to move. Add live electrical at the breaker and
          plumbing connections, and the risks are real — shock, leaks, and back injuries. Hiring it
          out is about the equipment and the safety, not just the muscle.
        </p>
      </Section>

      <PullQuoteStat stat="2–4 hrs" label="Typical job time" bg="offwhite">
        We shut off power at the GFCI breaker and confirm it&apos;s dead, drain the water safely
        (away from your foundation and storm drains), cap the plumbing, then cut the shell into
        manageable sections and haul everything out — typically a two-to-four-hour job for a
        standard above-ground unit.
      </PullQuoteStat>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">Above-Ground vs. In-Ground</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Freestanding above-ground spas are the most straightforward. In-ground and
          deck-integrated units take more — cutting around the surround, working with the
          structure, and sometimes concrete — so they&apos;re a bigger job; we&apos;ll scope it at
          the quote.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">Access and Decks</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Tight side yards, elevated decks, stairs, and narrow gates all shape the job. Tell us
          the setup so we bring the right crew and tools. Note: removal covers the tub and its
          debris, not rebuilding a deck the tub was set into.
        </p>
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">Where the Pieces Go</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          We don&apos;t just landfill it — the acrylic/fiberglass shell goes to a
          construction-and-demolition facility, the pump and motor to metal recycling, and the
          wood frame to wood-waste recycling.
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Clients Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:hot-tub-removal" label={SERVICE_NAME} />
        </div>
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Related services:</span>
          <Link href="/services/junk-removal" className="text-brand-orange hover:underline">
            Junk Removal
          </Link>
          ,{" "}
          <Link href="/services/yard-waste-removal" className="text-brand-orange hover:underline">
            Yard Waste Removal
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
          <Link href="/locations/brentwood" className="text-brand-orange hover:underline">
            Brentwood
          </Link>
          ,{" "}
          <Link href="/locations/westchester" className="text-brand-orange hover:underline">
            Westchester
          </Link>
          .
        </div>
      </section>

      <ServicesGrid heading="Explore Our Other Services" />

      <CTABand
        heading="Ready to get that hot tub out of your yard?"
        subtext="Get a free, load-based quote today."
      />
    </>
  );
}
