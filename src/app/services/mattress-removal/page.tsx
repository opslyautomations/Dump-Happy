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

export const metadata: Metadata = buildMetadata({
  title: "Mattress Removal in Los Angeles | Dump Happy",
  description:
    "Old mattress or box spring in LA? Dump Happy hauls it from any room and routes it to California's recycling program. Load-based pricing — free quote today.",
  path: "/services/mattress-removal",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Mattress Removal", path: "/services/mattress-removal" },
];

const intro = `A used mattress is one of the hardest things to get rid of on your own: donation centers won't take it, it won't fit in a car, and leaving it at the curb can cost you a fine. Dump Happy carries mattresses and box springs out of any room in your LA home and routes them into California's statewide recycling program — the responsible, legal path, without you wrestling a king-size down a stairwell. One item or a whole apartment's worth, we handle it.`;

const recyclingHeading = "How Mattress Recycling Works in California";

const recyclingText = `California runs a statewide mattress recycling program (the Mattress Recycling Council's Bye Bye Mattress, funded by a small recycling fee charged on every mattress sold). Old units are broken down and the steel springs, foam, and fibers become carpet padding, insulation, and mulch — the reason your mattress shouldn't just hit a landfill. LA County has close to twenty free residential drop-off centers tied to this program.`;

const catchHeading = `"There's a free drop-off — so why hire you?" (The Catch)`;

const catchText = `Two reasons. First, those free County drop-offs are for residents dropping off their own mattress — commercial haulers are barred from using them — and getting a king-size to a center means a truck or SUV you probably don't have. Second, if you leave it on the curb or in an alley instead, that's illegal dumping under California Penal Code 374.3, with LA County fines up to $10,000 — and illegally dumped mattresses are such a problem the recycling program spends millions a year cleaning them off streets. Dump Happy does the lift and the legal routing for a set, load-based price. If you can haul your own and drop it free, genuinely do — we'll even tell you where.`;

const illegalDumpingReinforcement = `Leaving a mattress on a sidewalk, alley, or curb outside of a scheduled, approved pickup is illegal dumping under California Penal Code 374.3 — the same law that covers furniture and bags of junk. LA County fines run up to $10,000, on top of possible cleanup costs. A booked mattress removal is the simple way to avoid it entirely.`;

const whatWeTake = `Mattresses (all sizes, twin through California king) · box springs · foundations · futons · bed frames (as furniture). Stained or older mattresses are fine.`;

const faqs: FaqItem[] = [
  {
    question: "How do you dispose of a mattress in Los Angeles?",
    answer:
      "We haul it from your room and route it into California's Bye Bye Mattress recycling program, where the springs, foam, and fabric are recovered and reused. That keeps it out of a landfill and off the street — and off your to-do list, since you don't handle the lift or the drop-off.",
  },
  {
    question: "There are free mattress drop-offs — why should I pay?",
    answer:
      "If you can get your mattress to one of LA County's residential drop-off centers yourself, it's free and we'll point you there. Hire us when it's a king you can't transport, it's upstairs, there are several, or you'd otherwise be tempted to leave it at the curb — which is illegal dumping and can bring a fine far higher than our fee.",
  },
  {
    question: "Do you take box springs and futons too?",
    answer:
      "Yes — box springs, foundations, and futons along with the mattress, plus the bed frame as a furniture item. Tell us how many pieces when you book so the load tier is quoted right the first time.",
  },
  {
    question: "Will you take a stained or old mattress?",
    answer:
      "Yes. Condition doesn't matter for removal — recycling processes the materials regardless. (It's exactly why donation isn't an option for mattresses: charities decline them on hygiene grounds, so recycling is the responsible route.)",
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
      "It's part of our load-based pricing — a single mattress is a single-item pickup; a set or several units scales up. You'll have a firm quote before we lift. Ask for an estimate with the count and floor when you call.",
  },
];

export default function MattressRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Mattress Removal",
            description:
              "Mattress and box spring removal in Los Angeles, recycled through California's Bye Bye Mattress program.",
            path: "/services/mattress-removal",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
            Mattress Removal in Los Angeles — Off Your Floor, Into California&apos;s
            Recycling Stream
          </h1>
          <p className="mt-5 leading-relaxed text-brand-charcoal">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">{recyclingHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{recyclingText}</p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">{catchHeading}</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">{catchText}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Callout title="Illegal dumping applies to mattresses too" variant="warning">
          {illegalDumpingReinforcement}
        </Callout>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">What We Take</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">{whatWeTake}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:mattress-removal" label="Mattress Removal" />
        </div>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-brand-charcoal">
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
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Frequently Asked Questions</h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
        <p className="mt-6 text-sm text-brand-gray">
          Learn more:{" "}
          <a
            href="https://cleanla.lacounty.gov/mrp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            LA County Countywide Mattress Recycling Program
          </a>{" "}
          ·{" "}
          <a
            href="https://byebyemattress.com/california/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            Bye Bye Mattress (California)
          </a>
        </p>
      </section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to get that mattress out?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
