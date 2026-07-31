import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
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

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />

      <section className="bg-brand-black">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            About Dump Happy
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
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
            <h2 className="text-2xl font-extrabold text-brand-black">Our Story</h2>
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
          <h2 className="text-2xl font-extrabold text-brand-black">
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
        <h2 className="text-2xl font-extrabold text-brand-black">
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

      <CTABand />
    </>
  );
}
