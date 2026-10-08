import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Section } from "@/components/page-sections/Section";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal FAQ: Cost & Free Pickup in LA | Dump Happy",
  description:
    "Straight answers on junk removal in Los Angeles: what it costs, free bulky item pickup, furniture and mattress disposal, and when to hire a hauler.",
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
          "The cheapest way to remove junk in Los Angeles is LA Sanitation's free bulky item pickup, booked through MyLA311 or 311, combined with donating, selling, or giving away usable items. Self-hauling, renting a dumpster, and hiring a junk removal crew cost more in dollars but save time, lifting, and truck rental.",
        guide: { href: "/blog/cheapest-way-to-get-rid-of-junk-los-angeles", label: "The cheapest ways to get rid of junk in LA" },
      },
    ],
  },
  {
    heading: "Free junk and bulky item pickup",
    items: [
      {
        question: "Where can I get free junk pick-up in Los Angeles?",
        answer:
          "City of LA residents get free bulky item pickup from LA Sanitation, scheduled through MyLA311 or 311 at least one business day before trash day. Other free options include charity donation pickups, retailer take-back when new furniture or a mattress is delivered, and free S.A.F.E. centers for hazardous waste and electronics. Santa Monica, Culver City, Beverly Hills, and West Hollywood run their own programs.",
        guide: { href: "/blog/free-junk-pickup-los-angeles", label: "Free junk pick-up in Los Angeles" },
      },
      {
        question: "Are junk removal services free?",
        answer:
          "Private junk removal services are not free, because the company pays for labor, trucks, fuel, and disposal fees. City bulky item programs, like LA Sanitation's, are free to residents because they're funded through utility bills. Be cautious of private haulers offering free removal, since some recover costs by dumping illegally.",
        guide: { href: "/blog/free-junk-pickup-los-angeles", label: "Free vs. paid junk removal in LA" },
      },
      {
        question: "Where to dispose bulky items for free?",
        answer:
          "In the City of Los Angeles, the free way to dispose of bulky items is LA Sanitation's bulky item pickup, requested through MyLA311, 311, or 1-800-773-2489. Usable furniture can go to charities that offer free donation pickup, and electronics and hazardous items go to free LA County S.A.F.E. centers.",
        guide: { href: "/blog/bulky-item-pickup-los-angeles", label: "LA bulky item pickup guide" },
      },
      {
        question: "Does LA charge for bulky items pickup?",
        answer:
          "No. The City of Los Angeles doesn't charge per pickup for bulky items. For homes LA Sanitation serves directly, it's covered by refuse fees on the utility bill, and apartment buildings with five or more units fund it through a Multi-Family Bulky Item Fee on the LADWP bill.",
        guide: { href: "/blog/bulky-item-pickup-los-angeles", label: "What LA bulky item pickup costs and covers" },
      },
      {
        question: "How to schedule bulky items pickup in Los Angeles?",
        answer:
          "Submit a request through the MyLA311 app or website, call 311, or call LA Sanitation at 1-800-773-2489 at least one business day before your regular trash day. List the items you're setting out, then place them at the curb for collection on your trash day.",
        guide: { href: "/blog/bulky-item-pickup-los-angeles", label: "Step-by-step: scheduling LA bulky item pickup" },
      },
    ],
  },
  {
    heading: "Furniture and boxes",
    items: [
      {
        question: "How can I dispose of furniture in Los Angeles?",
        answer:
          "Sell or donate furniture in good condition, schedule a free LA Sanitation bulky item pickup for worn pieces, self-haul to a drop-off facility, or hire a furniture removal service to carry it out of your home. Never leave furniture on the curb without a scheduled pickup; under California Penal Code 374.3, that's illegal dumping.",
        guide: { href: "/blog/furniture-disposal-los-angeles", label: "Every legal way to dispose of furniture in LA" },
      },
      {
        question: "How to get rid of large furniture boxes?",
        answer:
          "Remove the foam and plastic, cut or fold the cardboard flat, and put it in your blue recycling bin. In Los Angeles, extra flattened cardboard can be tied into bundles and set next to the bin. After a big move, schedule LA Sanitation's Move In/Move Out pickup or have a hauler take the boxes along with your old furniture.",
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
          "The best junk removal service in Los Angeles is one that posts its prices, gives a firm quote before loading, is insured, disposes of items legally, has genuine reviews, and serves your neighborhood on your schedule. Dump Happy is a locally owned option for the Westside, South Bay, and Central LA, with posted prices from $289 and service 7 days a week.",
        guide: { href: "/blog/best-junk-removal-service-los-angeles", label: "How to find the best junk removal service in LA" },
      },
      {
        question: "When should I hire junk removal?",
        answer:
          "Hire junk removal when the job needs more than one trip, involves heavy items or stairs, has a move-out or closing deadline, or would cost you more in time, truck rental, and dump fees than a crew would. For a single item that qualifies for free city bulky pickup, handling it yourself is usually the better deal.",
        guide: { href: "/blog/when-to-hire-junk-removal", label: "When to hire junk removal: 9 signs" },
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
          Straight answers to the questions Angelenos ask most about junk removal cost, free
          bulky item pickup, and getting rid of furniture, from the Dump Happy crew.
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
