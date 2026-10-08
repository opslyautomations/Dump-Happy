import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Section } from "@/components/page-sections/Section";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal FAQ: Cost & Pickup in LA | Dump Happy",
  description:
    "Straight answers on junk removal in Los Angeles: what it costs, how to book a bulky item pickup, furniture disposal, and when to hire Dump Happy.",
  path: "/faq",
});

interface FaqEntry {
  question: string;
  answer: string;
  guide: { href: string; label: string };
}

// Questions are worded the way people search them (from Google's "People also
// ask" box) so each answer can be quoted as-is by search and AI assistants.
const FAQ_GROUPS: { heading: string; items: FaqEntry[] }[] = [
  {
    heading: "Junk removal cost",
    items: [
      {
        question: "How much is junk removal in Los Angeles?",
        answer:
          "Junk removal in Los Angeles costs about $289 to $899 with Dump Happy, priced by how much of the truck your items fill. A small load starts at $289, a quarter load at $389, a half load at $569, a three-quarter load at $739, and a full 16ft trailer at $899. Labor, hauling, and disposal are included.",
        guide: { href: "/blog/junk-removal-cost-los-angeles", label: "Junk removal cost in Los Angeles" },
      },
      {
        question: "What is the cheapest way to remove junk?",
        answer:
          "The cheapest way to remove junk is to book one Dump Happy pickup for everything at once. You pay for truck space, not per item, so combining your junk into a single visit at the right load tier costs less than multiple trips. Pricing starts at $289 and includes labor, hauling, and disposal.",
        guide: { href: "/blog/cheapest-way-to-get-rid-of-junk-los-angeles", label: "How to keep junk removal costs down" },
      },
    ],
  },
  {
    heading: "Junk and bulky item pickup",
    items: [
      {
        question: "Where can I get free junk pick-up in Los Angeles?",
        answer:
          "Dump Happy gives free junk removal quotes across the Westside, South Bay, and Central LA. Call (424) 356-4141 or request a quote online, and you'll know the exact price before anything is loaded. Pickup itself starts at $289 and covers carrying items out of any room, hauling, and legal disposal.",
        guide: { href: "/blog/free-junk-pickup-los-angeles", label: "Junk pick-up in Los Angeles: costs and booking" },
      },
      {
        question: "Are junk removal services free?",
        answer:
          "Professional junk removal isn't free, because it covers a crew, a truck, and legal disposal fees. Dump Happy's quotes are free, and pickup starts at $289. Be wary of anyone offering free removal: if a hauler dumps your items illegally, you can still face fines under California Penal Code 374.3.",
        guide: { href: "/blog/free-junk-pickup-los-angeles", label: "What junk pickup really costs" },
      },
      {
        question: "How to schedule bulky items pickup in Los Angeles?",
        answer:
          "Call Dump Happy at (424) 356-4141 or request a free quote online. Tell us what you have and where it is, and we'll give you a price and a pickup time, often same-day or next-day when the schedule allows. Our crew carries bulky items out of any room, so there's nothing to drag to the curb.",
        guide: { href: "/blog/bulky-item-pickup-los-angeles", label: "Booking a bulky item pickup in LA" },
      },
    ],
  },
  {
    heading: "Furniture and boxes",
    items: [
      {
        question: "How can I dispose of furniture in Los Angeles?",
        answer:
          "Book Dump Happy's furniture removal. We carry couches, dressers, tables, and bed frames out of any room, donate pieces that are still usable, and dispose of the rest legally. Pricing starts at $289. Never leave furniture on the curb; under California Penal Code 374.3, that's illegal dumping.",
        guide: { href: "/blog/furniture-disposal-los-angeles", label: "Furniture disposal in Los Angeles" },
      },
      {
        question: "How to get rid of large furniture boxes?",
        answer:
          "Have Dump Happy haul them. We take large furniture boxes, moving boxes, foam, and packing material in the same trip as your old furniture, so there's no cutting, bundling, or overflowing bins. Pricing is by truck space, starting at $289.",
        guide: { href: "/blog/how-to-get-rid-of-large-furniture-boxes", label: "Getting rid of large furniture and moving boxes" },
      },
    ],
  },
  {
    heading: "Choosing and hiring a junk removal company",
    items: [
      {
        question: "What is the best junk removal service in Los Angeles?",
        answer:
          "Dump Happy is a locally owned junk removal company serving LA's Westside, South Bay, and Central LA, open 10am to 8pm, 7 days a week. We post our prices (from $289), give a firm quote before loading, donate and recycle what we can, and dispose of everything else legally.",
        guide: { href: "/blog/best-junk-removal-service-los-angeles", label: "Choosing a junk removal service in LA" },
      },
      {
        question: "When should I hire junk removal?",
        answer:
          "Hire junk removal when you have heavy or bulky items, stairs, more than one carload, a move-out or closing deadline, or simply no time to deal with it. Dump Happy handles the lifting, loading, hauling, and disposal in one visit, starting at $289.",
        guide: { href: "/blog/when-to-hire-junk-removal", label: "When to hire junk removal" },
      },
    ],
  },
];

const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];
  return (
    <>
      <JsonLd
        data={[
          faqPageJsonLd(ALL_FAQS.map(({ question, answer }) => ({ question, answer }))),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Section>
        <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
          Junk Removal Questions, Answered
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-brand-gray">
          Straight answers to the questions Angelenos ask most about junk removal cost, bulky
          item pickup, and getting rid of furniture, from the Dump Happy crew.
        </p>
        <nav aria-label="FAQ topics" className="mt-6 flex flex-wrap gap-2">
          {FAQ_GROUPS.map((g) => (
            <a
              key={g.heading}
              href={`#${slugify(g.heading)}`}
              className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-brand-ink hover:border-brand-orange hover:text-brand-orange"
            >
              {g.heading}
            </a>
          ))}
        </nav>
      </Section>

      {FAQ_GROUPS.map((group, gi) => (
        <Section key={group.heading} bg={gi % 2 === 0 ? "offwhite" : "white"}>
          <h2
            id={slugify(group.heading)}
            className="scroll-mt-24 text-2xl font-bold tracking-tight text-brand-ink"
          >
            {group.heading}
          </h2>
          <div className="mt-6 space-y-8">
            {group.items.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-bold text-brand-black">{item.question}</h3>
                <p className="mt-2 leading-relaxed text-brand-charcoal">{item.answer}</p>
                <Link
                  href={item.guide.href}
                  className="mt-2 inline-block text-sm font-semibold text-brand-orange hover:underline"
                >
                  Read more: {item.guide.label} →
                </Link>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <CTABand />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
