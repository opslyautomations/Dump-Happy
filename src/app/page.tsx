import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { LOCATIONS } from "@/lib/data/locations";
import { getAggregateRating } from "@/lib/data/reviews";
import { buildMetadata, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { LocationsGrid } from "@/components/LocationsGrid";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/page-sections/ProcessSteps";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RecycleIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  TagIcon,
} from "@/components/Icons";
import { GALLERY_PHOTOS } from "@/lib/data/gallery";

const RECENT_WORK_PREVIEW = GALLERY_PHOTOS.slice(0, 4);

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal in Los Angeles | Dump Happy",
  description:
    "Fast, upfront, load-based junk removal across Los Angeles — homes, garages, estates, and job sites. No hidden fees, legal disposal. Open daily 10am–8pm. Get a free quote today.",
  path: "/",
});

const heroTrust = ["Locally owned & operated", "No hidden fees", "Open 7 days, 10am–8pm"];

const trustStrip = [
  { icon: TagIcon, text: "Upfront, load-based pricing — the quote never moves" },
  { icon: ClockIcon, text: "Open 7 days a week, 10am to 8pm" },
  { icon: RecycleIcon, text: "Donation-first, then recycling, then legal disposal" },
  { icon: MapPinIcon, text: "Locally owned across the Westside, South Bay & Central LA" },
];

const steps = [
  {
    title: "Tell us what's going",
    body: "Call, text, or send photos through the quote form. You get a firm, load-based price before we lift a finger.",
  },
  {
    title: "We do the lifting",
    body: "Stairs, garages, tight hallways, upper floors — our crew carries it all out and loads the truck.",
  },
  {
    title: "Enjoy the space",
    body: "We sweep up, then route your load to donation, recycling, or legal disposal. You just relax.",
  },
];

const whyPoints = [
  "No hidden fees — if the job's smaller than expected, you pay the lower tier",
  "Usable furniture and goods are routed to donation before anything is dumped",
  "Illegal dumping carries fines up to $10,000 in LA County — we dispose of everything legally, every time",
  "A local, owner-run crew that shows up on time and treats your home with care",
];

export default function HomePage() {
  const rating = getAggregateRating();

  return (
    <>
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd({ aggregateRating: rating })]} />

      {/* Hero — full-screen background photo behind a light gradient */}
      <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden">
        <Image
          src="/hero-truck.png"
          alt="Dump Happy crew member loading a junk-removal truck at sunset"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="animate-slow-zoom -z-20 object-cover object-[70%_center]"
        />
        {/* keeps the headline readable while the photo shows through on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-white/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/85 lg:to-white/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent"
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p
              className="animate-rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-orange-dark shadow-sm ring-1 ring-brand-orange/25"
              style={{ "--delay": "0ms" } as CSSProperties}
            >
              <SparkleIcon size={16} />
              Los Angeles junk removal &amp; clean-outs
            </p>
            <h1
              className="animate-rise mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl"
              style={{ "--delay": "80ms" } as CSSProperties}
            >
              Fast, reliable junk removal.{" "}
              <span className="text-brand-orange">Happy dumping!</span>
            </h1>
            <p
              className="animate-rise mt-6 max-w-xl text-lg text-brand-charcoal"
              style={{ "--delay": "160ms" } as CSSProperties}
            >
              Dump Happy clears junk, furniture, appliances, and full
              properties across the Westside, South Bay, and Central LA —
              with upfront load-based pricing and legal disposal on every job.
            </p>
            <div
              className="animate-rise mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ "--delay": "240ms" } as CSSProperties}
            >
              <Link
                href="#quote"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-brand-orange/25 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/30"
              >
                Get a Free Quote
                <ArrowRightIcon size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-black/15 bg-white/80 px-6 py-3.5 font-semibold text-brand-ink backdrop-blur transition hover:bg-white"
              >
                <PhoneIcon size={18} />
                {SITE.phoneDisplay}
              </a>
            </div>
            <ul
              className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-2"
              style={{ "--delay": "320ms" } as CSSProperties}
            >
              {heroTrust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-medium text-brand-ink">
                  <CheckCircleIcon size={18} className="text-brand-orange" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* floating badges over the photo */}
          <div className="relative hidden h-full min-h-[22rem] lg:block">
            {rating ? (
              <div className="animate-float-delayed absolute right-0 top-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <StarIcon size={18} className="text-brand-orange" />
                <p className="text-sm font-semibold text-brand-ink">
                  {rating.ratingValue.toFixed(1)} on Google
                </p>
              </div>
            ) : (
              <div className="animate-float-delayed absolute right-0 top-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <MapPinIcon size={18} className="text-brand-orange" />
                <p className="text-sm font-semibold text-brand-ink">{LOCATIONS.length} LA neighborhoods</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {trustStrip.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 80}>
              <div className="flex items-start gap-2 text-sm font-medium text-brand-ink">
                <Icon size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                {text}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSteps heading="A cleared-out space in three simple steps" steps={steps} bg="white" />

      <ServicesGrid
        heading="Whatever needs to go, we haul it"
        subheading="From a single couch to a full estate — here's what Dump Happy clears most across Los Angeles."
        featured
      />

      {/* Why Dump Happy */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-xl lg:max-w-none">
              <Image
                src="/team-photo.webp"
                alt="The Dump Happy team in matching Dump Happy junk removal shirts"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Why Dump Happy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              We dump. You relax.
            </h2>
            <p className="mt-5 text-lg text-brand-slate">
              Dump Happy is locally owned and run by {SITE.owner} and a crew
              who take pride in doing the heavy lifting right — honest
              quotes, careful hauling, and a clean space left behind.
            </p>
            <ul className="mt-6 space-y-3">
              {whyPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-brand-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-pale">
                    <CheckIcon size={14} className="text-brand-orange-dark" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#quote"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-brand-orange/25 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark"
              >
                Get a Free Quote
              </Link>
              <Link href="/about" className="inline-flex items-center gap-1 font-semibold text-brand-orange-dark hover:text-brand-ink">
                Read our story <ArrowRightIcon size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent work */}
      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Recent work</p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Real jobs across Los Angeles
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {RECENT_WORK_PREVIEW.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 80}>
                <Link
                  href="/gallery"
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-1 font-semibold text-brand-orange-dark hover:text-brand-ink">
              View the full gallery <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      <LocationsGrid heading="Where we haul" />

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
            What customers are saying
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <ReviewSlot contextKey="general" label="Dump Happy" limit={3} />
        </Reveal>
        <div className="mt-8 text-center">
          <Link href="/reviews" className="inline-flex items-center gap-1 font-semibold text-brand-orange-dark hover:text-brand-ink">
            Read more reviews <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-24 bg-brand-pale/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Free quote</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Tell us what&apos;s going. We&apos;ll give you a firm price.
            </h2>
            <p className="mt-5 text-lg text-brand-slate">
              No obligation, no hidden fees. Fill out the form or reach us
              directly — we answer fast.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="group flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-sm ring-1 ring-black/5">
                    <PhoneIcon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm text-brand-slate">Call or text</span>
                    <span className="block text-lg font-semibold text-brand-ink group-hover:text-brand-orange-dark">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              {SITE.email ? (
                <li>
                  <a href={`mailto:${SITE.email}`} className="group flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-sm ring-1 ring-black/5">
                      <MailIcon size={20} />
                    </span>
                    <span>
                      <span className="block text-sm text-brand-slate">Email</span>
                      <span className="block text-lg font-semibold text-brand-ink group-hover:text-brand-orange-dark">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-sm ring-1 ring-black/5">
                  <ClockIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-brand-slate">Hours</span>
                  <span className="block text-lg font-semibold text-brand-ink">{SITE.hoursDisplay}</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-orange shadow-sm ring-1 ring-black/5">
                  <ShieldIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-brand-slate">Every job</span>
                  <span className="block text-lg font-semibold text-brand-ink">Legal, responsible disposal</span>
                </span>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <div className="pt-16">
        <CTABand
          heading="Ready to reclaim your space?"
          subtext="Upfront load-based pricing. No hidden fees. Fast, friendly service across Los Angeles."
        />
      </div>
    </>
  );
}
