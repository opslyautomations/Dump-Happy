import type { Metadata } from "next";
import Image from "next/image";
import {
  buildMetadata,
  breadcrumbJsonLd,
  faqPageJsonLd,
  localBusinessJsonLd,
  type FaqItem,
} from "@/lib/seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Callout } from "@/components/Callout";

export const metadata: Metadata = buildMetadata({
  title: "About Dump Happy | LA Junk Removal Company",
  description:
    "Dump Happy is a locally owned Los Angeles junk removal company built on honest, load-based pricing and respect for every property we work on.",
  path: "/about",
});

const faqs: FaqItem[] = [
  {
    question: "Is Happy Dump the same company as Dump Happy?",
    answer:
      "Yes. People sometimes search for us as \"Happy Dump,\" but the company is Dump Happy, a locally owned junk removal company in Los Angeles. You can reach us at (424) 356-4141 or dumphappy.com.",
  },
  {
    question: "What does Dump Happy do?",
    answer:
      "Dump Happy is a Los Angeles junk removal company. We handle mattress removal and pickup, green waste removal and hauling, furniture and appliance removal, garage and estate clean-outs, construction debris, hot tub removal, and commercial clear-outs.",
  },
  {
    question: "Where does Dump Happy operate?",
    answer:
      "We serve the Westside, South Bay, and Central LA, including Santa Monica, Culver City, Beverly Hills, West Hollywood, Marina del Rey, Venice, Sawtelle, Brentwood, Westchester, Mid-City, and Koreatown. We're open 10am to 8pm, 7 days a week.",
  },
  {
    question: "How much does Dump Happy charge?",
    answer:
      "Pricing is based on how much space your items take in the truck, starting at $289 for a small load and up to $899 for a full 16ft trailer. You get a firm quote before we start loading, with no hidden fees.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          faqPageJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-20 h-[26rem] w-[26rem] rounded-full bg-brand-orange-light opacity-25 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Our story</p>
          <h1 className="animate-rise mt-3 text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
            About Dump Happy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">
            Dump Happy makes junk removal and clean-outs simple, affordable,
            and stress-free. Based in Los Angeles and serving the Westside,
            South Bay, and Central LA, we provide reliable junk removal,
            clean-outs, hauling, and debris disposal for homeowners, renters,
            contractors, property managers, and businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink">Our Story</h2>
            <p className="mt-4 leading-relaxed text-brand-charcoal">
              Whether you&apos;re clearing a garage, tackling a renovation, managing
              an estate clean-out, or removing construction debris, Jason and the
              Dump Happy crew make it fast and hassle-free — showing up on time,
              working hard, and treating every property with respect. From a
              single-item pickup to a full property clean-out, we&apos;re ready to
              help keep Southern California clean, safe, and clutter-free.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Image
              src="/team-photo.webp"
              alt="The Dump Happy team wearing Dump Happy Junk Removal t-shirts"
              width={1476}
              height={1969}
              sizes="(min-width: 1024px) 360px, 80vw"
              className="mx-auto w-full max-w-sm rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
            What Sets Us Apart
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-brand-black">Honest, load-based pricing</h3>
              <p className="mt-2 text-sm text-brand-gray">
                As a locally owned and operated company, we deliver clear
                communication from start to finish — no hidden fees, no
                surprises.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-brand-black">Respect for your property</h3>
              <p className="mt-2 text-sm text-brand-gray">
                We show up on time, protect floors and doorways, and treat
                every home, garage, and job site like it&apos;s our own.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-brand-black">Legal, responsible disposal</h3>
              <p className="mt-2 text-sm text-brand-gray">
                Usable items go to donation first; the rest is recycled or
                disposed of through licensed facilities — never dumped.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Callout title="Illegal dumping is a crime" variant="warning">
              Leaving furniture, mattresses, or debris on a curb, alley, or
              vacant lot violates California Penal Code 374.3, with LA County
              fines up to $10,000 and possible vehicle impoundment. Every
              Dump Happy job is disposed of the legal way.
            </Callout>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
          Our Commitment to Southern California
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">
          Dump Happy is proud to serve homeowners, renters, contractors,
          property managers, and businesses across the Westside, South Bay,
          and Central LA. As a mobile, service-area business, we bring the
          truck and the crew to you — no storefront, no unnecessary overhead,
          just fast, reliable hauling wherever you are in Los Angeles County.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-brand-ink">
            Frequently Asked Questions About Dump Happy
          </h2>
          <div className="mt-6">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
