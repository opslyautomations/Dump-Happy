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
import { ProcessSteps } from "@/components/page-sections/ProcessSteps";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal in Los Angeles | Dump Happy Hauling",
  description:
    "Fast, full-service junk removal across Los Angeles. We do the lifting, load-based pricing, same-week pickup, and legal disposal. Free quote — call Dump Happy today.",
  path: "/services/junk-removal",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Junk Removal", path: "/services/junk-removal" },
];

const intro = `When clutter outgrows your bins, Dump Happy clears it — a single heavy item or an entire property's worth. You point; our crew carries it down the stairs, out of the garage, off the curb, and into the truck. No trips to the transfer station, no borrowing a friend's pickup, no throwing your back out. We serve homeowners, renters, contractors, and property managers across Los Angeles and the Westside/South Bay, and we quote the job before we start so the number never moves on you.`;

const steps = [
  {
    title: "Tell us what's going.",
    body: "Send photos or point during a walkthrough. We give you a firm, load-based quote up front — the price is set before any lifting starts.",
  },
  {
    title: "We haul it.",
    body: "Two-person crew, dollies and straps, in-home or curbside. We protect floors and doorways on the way out.",
  },
  {
    title: "We sweep and go.",
    body: "The spot is left broom-clean, and your load is sorted for donation, recycling, or legal disposal.",
  },
];

const pricingExplainer = `Junk removal here is priced by volume — how much space your stuff takes in the truck — not by the hour. That keeps it predictable. Dump Happy's tiers run from a single-item pickup (one couch, one fridge) up through small, quarter, half, three-quarter, and full load. You approve the tier before we lift anything, and if the load turns out smaller than quoted, you pay the smaller tier. Free quote, no hidden fees — exactly what the "no surprises" promise means.`;

const whatWeTake = `Furniture, appliances, mattresses, e-waste, garage and yard clutter, construction and remodel debris, hot tubs, estate and property clean-out contents, and general household junk. If it's bulky, heavy, or just in the way, it's probably a yes — ask.`;

const whatWeCant = `Household hazardous waste is off-limits by law — paint, motor oil, solvents, pesticides, pool chemicals, and asbestos can't ride in a junk truck or go to a standard transfer station. We'll tell you exactly where those go (see the garage clean-out page for the LA County hazardous-waste route). Being straight about this is part of doing it right.`;

const whereItGoes = `Reputable hauling isn't "load it and dump it." Usable furniture and working appliances are routed to donation; metal, cardboard, and e-waste go to recyclers; only what genuinely can't be reused is taken to a licensed disposal facility. Ask any hauler one question — what happens to my stuff after pickup? — and judge them on the answer.`;

const illegalDumpingText = `Dumping furniture, mattresses, or bags of junk on a sidewalk, alley, vacant lot, or roadside is a crime under California Penal Code 374.3. In Los Angeles County the fine runs up to $10,000, you can face jail time, and the County can even impound the vehicle used to do it. For contractors and businesses, dumping more than a cubic yard of job-generated debris is a misdemeanor. Hiring a hauler that disposes legally — with a paper trail — is the cheap insurance. That's the whole point of Dump Happy.`;

const whyDumpHappy = `Locally owned and operated. On time, upfront pricing, clear communication start to finish. No hidden fees, no surprises — just straightforward hauling from a crew that treats your property with respect.`;

const chargedHeading = "How You're Charged";
const cantTakeHeading = "What We Can't Take (And Why)";

const faqs: FaqItem[] = [
  {
    question: "How much does junk removal cost in Los Angeles?",
    answer:
      "Pricing is based on how much room your items take in the truck, not the hour. Dump Happy uses set tiers — single item, then small, quarter, half, three-quarter, and full load — and gives you a firm quote before any lifting. If the load ends up smaller than quoted, you pay the lower tier. Ask for a free estimate with a couple of photos.",
  },
  {
    question: "Do I have to move everything to the curb first?",
    answer:
      "No. Full-service means we remove items from wherever they sit — upstairs bedroom, back garage, side yard — not just the curb. You point, we carry. Curbside pickup is available too if you'd rather set things out, but you're never required to do the heavy lifting.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "It helps for the walkthrough and final approval, but it isn't always required. For straightforward curbside or garage jobs, many customers confirm the items and pricing by photo and text. We'll walk the space with you at the end so nothing gets missed.",
  },
  {
    question: "What won't you take?",
    answer:
      "Household hazardous waste — paint, motor oil, solvents, pesticides, pool chemicals — and asbestos. These are illegal to haul in a standard truck and are banned from ordinary transfer stations. Tell us what you've got and we'll point you to the right LA County drop-off for those items.",
  },
  {
    question: "What happens to my junk after you take it?",
    answer:
      "We sort it: usable furniture and working appliances go to donation, metals and e-waste to recyclers, and only the rest to a licensed disposal facility. We don't dump illegally, and we don't burn or abandon loads. You can ask where a specific item ended up.",
  },
  {
    question: "Can you come the same day?",
    answer:
      "Often, yes — same-week is standard and same-day or next-day is frequently available when you book early in the day. Mobile scheduling across LA and the South Bay means we can usually slot an urgent pickup faster than a curbside city appointment.",
  },
  {
    question: "Is it really illegal to just leave stuff on the side of the road?",
    answer:
      "Yes. Under California Penal Code 374.3, illegal dumping carries fines up to $10,000 in LA County, possible jail time, and vehicle impoundment — and stiffer penalties for business-quantity debris. Paying a hauler to dispose of it legally costs a fraction of a citation.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call or text (424) 356-4141 with a few photos of what needs to go, or book a quick walkthrough. You'll get a firm, load-based price before we start — no obligation, no hidden fees.",
  },
];

export default function JunkRemovalPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Junk Removal",
            description:
              "Full-service, load-based junk removal for homes and properties across Los Angeles.",
            path: "/services/junk-removal",
          }),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <Hero
        h1="Junk Removal in Los Angeles — We Do the Lifting, You Reclaim the Space"
        intro={intro}
        aside={<QuoteForm compact variant="glass" defaultService="junk-removal" />}
        background={{ type: "pattern", tone: "charcoal" }}
      />

      <ProcessSteps heading="How Junk Removal Works" steps={steps} />

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">{chargedHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{pricingExplainer}</p>
      </Section>

      <Section bg="offwhite" columns={2}>
        <div>
          <h2 className="text-2xl font-extrabold text-brand-black">What We Take</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">{whatWeTake}</p>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-brand-black">{cantTakeHeading}</h2>
          <p className="mt-4 leading-relaxed text-brand-charcoal">{whatWeCant}</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">
          Where Your Junk Actually Goes
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{whereItGoes}</p>
      </Section>

      <Section bg="offwhite">
        <Callout title="Illegal dumping is a crime" variant="warning">
          {illegalDumpingText}
        </Callout>
      </Section>

      <Section>
        <h2 className="text-2xl font-extrabold text-brand-black">Why Dump Happy</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{whyDumpHappy}</p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">What Our Customers Say</h2>
        <div className="mt-6">
          <ReviewSlot contextKey="service:junk-removal" label="Junk Removal" />
        </div>
      </Section>

      <Section>
        <p className="leading-relaxed text-brand-charcoal">
          Just one couch or fridge? See{" "}
          <Link
            href="/services/furniture-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Furniture Removal
          </Link>{" "}
          or{" "}
          <Link
            href="/services/appliance-removal"
            className="font-semibold text-brand-orange hover:underline"
          >
            Appliance Removal
          </Link>
          . Whole garage? Start with{" "}
          <Link
            href="/services/garage-cleanout"
            className="font-semibold text-brand-orange hover:underline"
          >
            Garage Clean-Out
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
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={faqs} />
        </div>
        <p className="mt-6 text-sm text-brand-gray">
          Learn more:{" "}
          <a
            href="https://cleanla.lacounty.gov/illegal-dumping/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            LA County illegal-dumping ordinance &amp; penalties
          </a>
        </p>
      </Section>

      <ServicesGrid heading="Explore All Our Services" />

      <CTABand
        heading="Ready to reclaim your space?"
        subtext="Get a free, load-based quote today — no hidden fees, no surprises."
      />
    </>
  );
}
