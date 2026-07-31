import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";
import { Callout } from "@/components/Callout";
import { GALLERY_PHOTOS } from "@/lib/data/gallery";

const RECENT_WORK_PREVIEW = GALLERY_PHOTOS.slice(0, 4);

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal in Los Angeles | Dump Happy",
  description:
    "Fast, upfront, load-based junk removal across Los Angeles — homes, garages, estates, and job sites. No hidden fees, legal disposal. Get a free quote today.",
  path: "/",
});

const trustPoints = [
  "Locally owned & operated",
  "Upfront, load-based pricing",
  "On-time, every time",
  "Legal disposal, always",
];

const whyPoints = [
  {
    title: "No hidden fees",
    body: "You get a firm, load-based quote before we lift a finger. If the job turns out smaller than expected, you pay the lower tier — never the other way around.",
  },
  {
    title: "We do the lifting",
    body: "Stairs, garages, tight hallways, upper floors — our crew handles the heavy work so you don't strain your back or borrow a truck.",
  },
  {
    title: "Donation-first",
    body: "Usable furniture, appliances, and household goods are routed to donation before anything is recycled or disposed of.",
  },
  {
    title: "Legal disposal, no exceptions",
    body: "Illegal dumping is a crime in California under Penal Code 374.3 — with fines up to $10,000 in LA County. We sort, recycle, and dispose of everything the right way, every time.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <section className="bg-brand-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:items-start lg:px-8 lg:py-24">
          <div className="lg:col-span-3">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">
              Los Angeles Junk Removal &amp; Clean-Outs
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Fast, Reliable Junk Removal — Happy Dumping!
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Dump Happy clears junk, furniture, appliances, and full
              properties across the Westside, South Bay, and Central LA.
              Upfront load-based pricing, no hidden fees, and legal disposal
              on every job.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="flex min-h-12 items-center justify-center rounded-md bg-brand-orange px-8 text-sm font-bold text-white hover:bg-brand-orange-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex min-h-12 items-center justify-center rounded-md border border-white/30 px-8 text-sm font-bold text-white hover:border-brand-orange hover:text-brand-orange"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-brand-offwhite">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {trustPoints.map((point) => (
            <p key={point} className="text-sm font-semibold text-brand-black">
              {point}
            </p>
          ))}
        </div>
      </section>

      <ServicesGrid />

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">Why Dump Happy</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyPoints.slice(0, 3).map((p) => (
              <div key={p.title} className="rounded-xl bg-white p-6">
                <h3 className="font-bold text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-gray">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Callout title="Legal disposal, no exceptions">
              {whyPoints[3].body}
            </Callout>
          </div>
        </div>
      </section>

      <LocationsGrid />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">Recent Work</h2>
          <Link href="/gallery" className="text-sm font-semibold text-brand-orange hover:underline">
            View full gallery →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RECENT_WORK_PREVIEW.map((photo) => (
            <Link
              key={photo.src}
              href="/gallery"
              className="block overflow-hidden rounded-xl bg-brand-offwhite"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 640px) 25vw, 50vw"
                className="aspect-square w-full object-cover transition hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
              What Our Customers Say
            </h2>
            <Link href="/reviews" className="text-sm font-semibold text-brand-orange hover:underline">
              Read all reviews →
            </Link>
          </div>
          <div className="mt-8">
            <ReviewSlot contextKey="general" label="Dump Happy" limit={3} />
          </div>
        </div>
      </section>

      <CTABand
        heading="Get Your Free Quote Today"
        subtext="Upfront load-based pricing. No hidden fees. Fast, friendly service across Los Angeles."
      />
    </>
  );
}
