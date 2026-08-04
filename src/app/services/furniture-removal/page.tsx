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
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";
import { FramedPhoto } from "@/components/page-sections/FramedPhoto";
import { ImageTextSplit } from "@/components/page-sections/ImageTextSplit";
import { PillList } from "@/components/page-sections/PillList";
import { JOB_PHOTOS } from "@/lib/data/job-photos";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = buildMetadata({
  title: "Furniture Removal in Los Angeles | Dump Happy",
  description:
    "Couch, sectional, dresser or a whole houseful — Dump Happy hauls furniture from any room in LA. Donation-first, load-based pricing. Get a free quote today.",
  path: "/services/furniture-removal",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Furniture Removal", path: "/services/furniture-removal" },
];

const intro = `An old sectional doesn't fit in a sedan, and it won't fit down the stairs by yourself either. Dump Happy removes furniture of every size from anywhere in your home or building across Los Angeles — living room, third-floor walk-up, storage unit, curb. We lift it, protect your doorways and floors on the way out, and route it to donation whenever it's still usable. You get the space back without the strained back or the trip to a drop-off that may not even accept it.`;

const furnitureChips = [
  "Couches",
  "Sectionals",
  "Sleeper sofas",
  "Futons",
  "Recliners",
  "Loveseats",
  "Dressers",
  "Desks",
  "Dining sets",
  "Bookcases",
  "Office furniture",
  "Patio furniture",
  "Bed frames",
];

const cityPickupHeading = `The honest part: LA offers free bulky pickup. Here's when to pay us instead.`;

const cityPickupText = `The City of LA's Bureau of Sanitation does offer free scheduled bulky-item pickup for furniture — and if you can wait for the appointment, drag the piece to the curb yourself, and it's a standard item, that's a fine option. Dump Happy is worth it when you need it gone this week not next, when it's upstairs or inside (city pickup is curbside-only), when there are several pieces or a full room, when it needs disassembly, or when you simply don't want to move a 90-pound sleeper sofa down a staircase. We say this out loud because a hauler that hides the free option isn't one you should trust with the paid one.`;

const donationText = `Furniture in good shape gets a second home instead of a landfill — LA has strong reuse channels through organizations like Habitat for Humanity ReStore and St. Vincent de Paul. We prioritize donation for clean, working pieces; recycle wood and metal where we can; and dispose of the rest responsibly. One caveat we're upfront about: most donation centers won't accept mattresses on hygiene grounds, which is why those go through a different route.`;

const inHomeCurbsideText = `Point-and-done from any room, or set it at the curb for a quick grab — your call. Either way it's load-based pricing (single item up to full load), quoted before we lift.`;

const faqs: FaqItem[] = [
  {
    question: "Can you take furniture from inside my home, not just the curb?",
    answer:
      "Yes — that's the main reason to hire us over the city's curbside program. We remove couches, dressers, and tables from upstairs bedrooms, back rooms, basements, and tight hallways. You don't move a thing; the crew handles the lifting, the doorways, and the stairs.",
  },
  {
    question: "How much does it cost to remove a couch in LA?",
    answer:
      "It's priced by truck space, not per item, so a single couch falls in the single-item or small-load tier and a full living room costs more. You get a firm quote up front from a photo or walkthrough. If you only have one standard piece and can wait, the city's free bulky pickup may be cheaper — we'll tell you honestly.",
  },
  {
    question: "Do you take sectionals and sleeper sofas?",
    answer:
      "Yes — sectionals, sleeper/hide-a-bed sofas, futons, recliners, and oversized pieces. Heavier convertibles sometimes need to be separated to clear a doorway or stairwell; our crew handles that on site at no drama to you.",
  },
  {
    question: "Will my old furniture be donated?",
    answer:
      "Whenever it's clean and usable, yes — LA has good reuse channels and we route serviceable pieces to donation first. Worn, broken, or stained items that can't be donated are recycled where possible and otherwise disposed of responsibly.",
  },
  {
    question: "Can you take my mattress with the bed frame?",
    answer:
      "We'll take the frame as furniture, but the mattress itself follows California's mattress-recycling route, so it's handled on our mattress-removal service. Book them together and we'll haul both in one trip — just mention the mattress when you get your quote.",
  },
  {
    question: "Do you remove furniture from apartments?",
    answer:
      "Yes, including upper floors and buildings without elevators. Let us know the floor and whether there's elevator access when you book so we bring the right crew size and equipment.",
  },
  {
    question: "What if the piece is too big to fit through the door?",
    answer:
      "We disassemble what we reasonably can — legs, cushions, sectional connectors, bed frames — to get it out cleanly. Our goal is to remove it without marking your walls or frames.",
  },
];

export default function FurnitureRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Furniture Removal",
            description:
              "Couch, sectional, dresser, and whole-house furniture removal from any room across Los Angeles.",
            path: "/services/furniture-removal",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        h1="Furniture Removal in Los Angeles — From One Couch to a Whole House"
        intro={<p>{intro}</p>}
        asideMedia={
          <FramedPhoto
            photo={{ ...JOB_PHOTOS.furniture, alt: "Bulky furniture loaded for haul-away in Los Angeles" }}
            accent
          />
        }
        aside={<QuoteForm compact variant="card" defaultService="furniture-removal" />}
      />

      <PillList heading="Furniture We Haul" items={furnitureChips} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="mt-4 text-sm text-brand-gray">
          Mattresses are handled separately — see{" "}
          <Link
            href="/services/mattress-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Mattress Removal
          </Link>
          .
        </p>
      </div>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">{cityPickupHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{cityPickupText}</p>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">Donation First</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{donationText}</p>
      </Section>

      <ImageTextSplit
        heading="In-Home vs. Curbside"
        image={{ ...JOB_PHOTOS.truck, alt: "Dump Happy truck ready for a furniture haul-away in Los Angeles" }}
        imageSide="left"
      >
        <p>{inHomeCurbsideText}</p>
      </ImageTextSplit>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:furniture-removal" label="Furniture Removal" />
        </div>
      </Section>

      <Section>
        <p className="leading-relaxed text-brand-charcoal">
          Getting rid of the bed too? See{" "}
          <Link
            href="/services/mattress-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Mattress Removal
          </Link>
          . Clearing a whole room or estate?{" "}
          <Link
            href="/services/garage-cleanout"
            className="font-semibold text-brand-orange hover:underline"
          >
            Garage Clean-Out
          </Link>{" "}
          or the full{" "}
          <Link
            href="/services/junk-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Junk Removal
          </Link>{" "}
          service.
        </p>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          We serve Santa Monica, Culver City, Beverly Hills, and eight other Los Angeles
          communities — see our full list of{" "}
          <Link href="/locations" className="font-semibold text-brand-orange hover:underline">
            service areas
          </Link>
          .
        </p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to get that furniture out?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
