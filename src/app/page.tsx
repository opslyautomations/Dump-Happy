import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { LOCATIONS } from "@/lib/data/locations";
import { SERVICES } from "@/lib/data/services";
import { PRICING_TIERS } from "@/lib/data/pricing";
import { getAggregateRating } from "@/lib/data/reviews";
import { BEFORE_AFTER_PAIRS, GALLERY_PHOTOS } from "@/lib/data/gallery";
import { buildMetadata, localBusinessJsonLd, organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { QuoteForm } from "@/components/QuoteForm";
import { LocationsGrid } from "@/components/LocationsGrid";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/page-sections/ProcessSteps";
import { SplitText } from "@/components/motion/SplitText";
import { Marquee } from "@/components/motion/Marquee";
import { Smile } from "@/components/motion/Smile";
import { BeforeAfter } from "@/components/motion/BeforeAfter";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  TruckIcon,
} from "@/components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal in Los Angeles | Dump Happy",
  description:
    "Fast, load-based junk removal across Los Angeles — homes, garages, estates, and job sites. No hidden fees, legal disposal. Open daily 10am–8pm.",
  path: "/",
});

const heroTrust = ["Locally owned & operated", "No hidden fees", "Open 7 days, 10am–8pm"];

const ribbonItems = [
  "Couches",
  "Mattresses",
  "Appliances",
  "Hot tubs",
  "Garage clean-outs",
  "Yard & green waste",
  "Estate clean-outs",
  "Construction debris",
  "Office clear-outs",
];

// Same trust copy as the previous design's trust strip — kept word-for-word.
const trustStrip = [
  "Upfront, load-based pricing — the quote never moves",
  "Open 7 days a week, 10am to 8pm",
  "Donation-first, then recycling, then legal disposal",
  "Locally owned across the Westside, South Bay & Central LA",
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

// Parallax collage: three columns drifting at different speeds.
const COLLAGE = [
  { photos: GALLERY_PHOTOS.slice(0, 2), speed: "70px" },
  { photos: GALLERY_PHOTOS.slice(2, 4), speed: "-50px" },
  { photos: GALLERY_PHOTOS.slice(4, 6), speed: "110px" },
];

export default function HomePage() {
  const rating = getAggregateRating();
  const fromPrice = PRICING_TIERS[0].priceFrom;

  const stats = [
    { prefix: "$", value: fromPrice, decimals: 0, suffix: "", label: "Loads start from" },
    { prefix: "", value: LOCATIONS.length, decimals: 0, suffix: "", label: "LA neighborhoods served" },
    { prefix: "", value: 7, decimals: 0, suffix: "", label: "Days a week, 10am – 8pm" },
    rating
      ? { prefix: "", value: rating.ratingValue, decimals: 1, suffix: "★", label: `Google rating · ${rating.reviewCount} reviews` }
      : { prefix: "", value: SERVICES.length, decimals: 0, suffix: "", label: "Services offered" },
  ];

  return (
    <>
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd({ aggregateRating: rating })]} />

      {/* ───────────────── Hero: photo zooms + darkens as you scroll away ───────────────── */}
      <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-brand-night text-white lg:items-center">
        <div className="hero-media absolute inset-0 -z-20 origin-[70%_40%]">
          <Image
            src="/hero-truck.png"
            alt="Dump Happy crew member loading a junk-removal truck at sunset"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-night via-brand-night/70 to-brand-night/20 lg:bg-gradient-to-r lg:from-brand-night/95 lg:via-brand-night/60 lg:to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-brand-night to-transparent" />

        <div className="hero-copy relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:py-28">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            <SparkleIcon size={16} className="text-brand-sun" />
            Los Angeles junk removal &amp; clean-outs
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.98] text-white sm:text-6xl lg:text-[5.5rem]">
            <SplitText baseDelay={100} wordClassName={(_, i) => (i >= 4 ? "text-sunset" : undefined)}>
              Fast, reliable junk removal. Happy dumping!
            </SplitText>
          </h1>
          <p
            className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-white/80"
            style={{ "--delay": "450ms" } as CSSProperties}
          >
            Dump Happy clears junk, furniture, appliances, and full
            properties across the Westside, South Bay, and Central LA —
            with upfront load-based pricing and legal disposal on every job.
          </p>
          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--delay": "550ms" } as CSSProperties}
          >
            <Link
              href="#quote"
              data-magnetic
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-2xl shadow-brand-orange/40 transition-colors hover:bg-brand-orange-dark"
            >
              Get a Free Quote
              <ArrowRightIcon size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-lg font-semibold text-white backdrop-blur transition hover:bg-white hover:text-brand-ink"
            >
              <PhoneIcon size={18} />
              {SITE.phoneDisplay}
            </a>
          </div>
          <ul
            className="animate-rise mt-9 flex flex-wrap gap-x-6 gap-y-2"
            style={{ "--delay": "650ms" } as CSSProperties}
          >
            {heroTrust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <CheckCircleIcon size={18} className="text-brand-sun" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* floating rating card */}
        <div className="animate-float-delayed absolute bottom-24 right-8 hidden xl:block">
          <div className="animate-rise rounded-3xl border border-white/15 bg-brand-night/60 p-5 shadow-2xl backdrop-blur-xl" style={{ "--delay": "800ms" } as CSSProperties}>
            {rating ? (
              <>
                <div className="flex gap-0.5 text-brand-sun" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  {rating.ratingValue.toFixed(1)} on Google · {rating.reviewCount} reviews
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-white">{LOCATIONS.length} LA neighborhoods</p>
            )}
          </div>
        </div>

        {/* scroll cue */}
        <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 lg:flex">
          Scroll
          <span className="relative h-10 w-px overflow-hidden bg-white/20">
            <span className="animate-[scroll-cue_2s_ease-in-out_infinite] absolute inset-x-0 top-0 h-1/2 bg-brand-orange" />
          </span>
        </div>
      </section>

      {/* ───────────────── Crossing ribbons ───────────────── */}
      <section aria-label="What we haul" className="relative flex flex-col overflow-hidden bg-brand-night py-12">
        <div className="relative z-[1] -rotate-2 scale-105 bg-brand-orange py-4 shadow-2xl shadow-black/50">
          <Marquee duration={38} gapClass="gap-8 pr-8">
            {ribbonItems.map((item) => (
              <span key={item} className="font-display flex items-center gap-8 whitespace-nowrap text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                {item}
                <Smile mode="static" eyes={false} strokeWidth={22} className="h-6 w-auto text-brand-night" />
              </span>
            ))}
          </Marquee>
        </div>
        <div className="-mt-1 rotate-1 scale-105 border-y border-white/10 bg-brand-night-2 py-3">
          <Marquee duration={50} reverse gapClass="gap-8 pr-8">
            {trustStrip.map((item) => (
              <span key={item} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold tracking-wide text-white/70">
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-sun" />
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* ───────────────── Stats ───────────────── */}
      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-16 sm:px-6 lg:grid-cols-4 lg:py-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="border-l border-black/10 px-5 py-4 first:border-l-0 lg:px-8 [&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l">
              <p className="font-display text-5xl font-extrabold tracking-tight text-brand-ink sm:text-6xl">
                {s.prefix}
                <span data-count={s.value} data-decimals={s.decimals} className="tabular-nums">
                  {s.value.toFixed(s.decimals)}
                </span>
                <span className="text-brand-orange">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-brand-slate">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Why Dump Happy (dark, scroll-filled statement) ───────────────── */}
      <section className="grain relative overflow-hidden bg-brand-night text-white">
        <div aria-hidden="true" className="animate-glow pointer-events-none absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-light">Why Dump Happy</p>
            <h2 className="mt-4 text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
              We dump.
              <br />
              <span className="text-sunset">You relax.</span>
            </h2>
            <p className="text-scrub mt-10 text-2xl font-semibold leading-snug text-white/90 sm:text-3xl">
              Dump Happy is locally owned and run by {SITE.owner} and a crew
              who take pride in doing the heavy lifting right — honest
              quotes, careful hauling, and a clean space left behind.
            </p>
            <ul className="mt-12 space-y-4">
              {whyPoints.map((p, i) => (
                <li key={p}>
                  <Reveal delay={i * 80} variant="left" className="flex items-start gap-4 text-white/80">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange">
                      <CheckIcon size={14} className="text-white" />
                    </span>
                    {p}
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#quote"
                data-magnetic
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
              >
                Get a Free Quote
              </Link>
              <Link href="/about" className="group inline-flex min-h-12 items-center gap-2 font-semibold text-white/80 hover:text-white">
                Read our story <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative lg:pt-24">
            <div className="img-unveil relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-black/60 lg:sticky lg:top-28 lg:max-w-none">
              <Image
                src="/team-photo.webp"
                alt="The Dump Happy team in matching Dump Happy junk removal shirts"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                data-parallax
                style={{ "--parallax": "-40px", scale: "1.15" } as CSSProperties}
                className="object-cover object-top"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-brand-night/70 p-4 backdrop-blur-xl">
                <Smile mode="static" eyes strokeWidth={16} className="h-8 w-auto shrink-0 text-brand-orange" />
                <p className="text-sm font-semibold text-white">Owner-run. {SITE.hoursShort}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps heading="A cleared-out space in three simple steps" steps={steps} bg="white" />

      {/* ───────────────── Services: pinned horizontal rail (desktop), swipe rail (mobile) ───────────────── */}
      <section
        className="hscroll grain relative bg-brand-night text-white"
        style={{ "--hscroll-height": `calc(100svh + ${SERVICES.length * 19}rem)` } as CSSProperties}
        aria-labelledby="services-heading"
      >
        <div className="hscroll-sticky relative z-[2] py-20 lg:py-0">
          <div className="mx-auto mb-10 flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-light">Services</p>
              <h2 id="services-heading" className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
                Whatever needs to go, we haul it
              </h2>
            </div>
            <p className="max-w-sm text-white/60">
              From a single couch to a full estate — here&apos;s what Dump Happy clears most across Los Angeles.
            </p>
          </div>

          <ul className="hscroll-track">
            {SERVICES.map((service, i) => (
              <li key={service.slug} className="w-[78vw] sm:w-[22rem]">
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[2rem] bg-brand-night-2 p-6 ring-1 ring-white/10"
                >
                  {service.image ? (
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 640px) 22rem, 78vw"
                      className="object-cover opacity-70 transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:opacity-90"
                    />
                  ) : (
                    <>
                      <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-orange/40 blur-3xl transition duration-700 group-hover:scale-125" />
                      <TruckIcon size={120} strokeWidth={1} className="absolute right-6 top-10 text-white/10 transition duration-700 group-hover:-translate-x-3 group-hover:text-brand-orange/30" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-night via-brand-night/40 to-transparent" />
                  <span className="absolute left-6 top-6 font-display text-sm font-bold tabular-nums text-white/60">
                    {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{service.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-light">
                      Learn more
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition duration-500 group-hover:rotate-[-45deg] group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                        <ArrowRightIcon size={15} />
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            <li className="flex w-[60vw] items-center sm:w-[18rem]">
              <Link
                href="/services"
                className="group flex aspect-[3/4] w-full flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-white/20 text-center transition hover:border-brand-orange hover:bg-brand-orange/10"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-white transition duration-500 group-hover:scale-110">
                  <ArrowRightIcon size={24} />
                </span>
                <span className="font-display text-xl font-bold">See all {SERVICES.length} services</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────────────── Before / after ───────────────── */}
      <section className="grain relative overflow-hidden bg-brand-night-2 text-white">
        <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-light">Before &amp; after</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
              Same space. <span className="text-sunset">One visit.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              Real Dump Happy jobs, photographed on site. Drag the handle to
              see what a single visit clears out.
            </p>
            <Link
              href="/gallery"
              className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 font-semibold transition hover:bg-white hover:text-brand-ink"
            >
              View the full gallery
              <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal variant="scale" delay={120}>
            <BeforeAfter pairs={BEFORE_AFTER_PAIRS} />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Recent work: parallax collage ───────────────── */}
      <section className="overflow-hidden bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">Recent work</p>
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl lg:text-6xl">
                Real jobs across Los Angeles
              </h2>
            </div>
            <Link href="/gallery" className="group inline-flex items-center gap-2 font-semibold text-brand-orange-dark hover:text-brand-ink">
              View the full gallery <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {COLLAGE.map((col, ci) => (
              <div
                key={ci}
                data-parallax
                style={{ "--parallax": col.speed } as CSSProperties}
                className={`flex flex-col gap-4 sm:gap-6 ${ci === 2 ? "hidden lg:flex" : ""} ${ci === 1 ? "lg:pt-20" : ""}`}
              >
                {col.photos.map((photo, pi) => (
                  <Reveal key={photo.src} variant="clip" delay={pi * 120}>
                    <Link href="/gallery" className="group relative block overflow-hidden rounded-[1.75rem] bg-brand-sand">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="(min-width: 1024px) 30vw, 50vw"
                        className={`w-full object-cover transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                          pi % 2 === 0 ? "aspect-[4/5]" : "aspect-square"
                        }`}
                      />
                      <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-brand-ink opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        {photo.caption}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationsGrid heading="Where we haul" />

      {/* ───────────────── Reviews marquee ───────────────── */}
      <section className="overflow-hidden bg-brand-offwhite py-24 lg:py-32">
        <Reveal className="mx-auto mb-14 max-w-7xl px-4 text-center sm:px-6">
          <Smile className="mx-auto h-12 w-auto text-brand-orange" />
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl lg:text-6xl">
            What customers are saying
          </h2>
          {rating && (
            <p className="mt-4 text-brand-slate">
              <span className="font-semibold text-brand-ink">{rating.ratingValue.toFixed(1)} stars</span> across{" "}
              {rating.reviewCount} Google reviews
            </p>
          )}
        </Reveal>
        <ReviewSlot contextKey="general" label="Dump Happy" variant="marquee" />
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-6 font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white"
          >
            Read more reviews <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ───────────────── Quote ───────────────── */}
      <section id="quote" className="scroll-mt-24 bg-brand-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-32">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">Free quote</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">
              Tell us what&apos;s going. We&apos;ll give you a firm price.
            </h2>
            <p className="mt-6 text-lg text-brand-slate">
              No obligation, no hidden fees. Fill out the form or reach us
              directly — we answer fast.
            </p>
            <ul className="mt-10 space-y-3">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} data-spotlight className="group flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                    <PhoneIcon size={20} />
                  </span>
                  <span className="relative">
                    <span className="block text-sm text-brand-slate">Call or text</span>
                    <span className="block text-lg font-semibold text-brand-ink group-hover:text-brand-orange-dark">{SITE.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              {SITE.email ? (
                <li>
                  <a href={`mailto:${SITE.email}`} data-spotlight className="group flex items-center gap-4 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-pale text-brand-orange-dark">
                      <MailIcon size={20} />
                    </span>
                    <span className="relative">
                      <span className="block text-sm text-brand-slate">Email</span>
                      <span className="block text-lg font-semibold text-brand-ink group-hover:text-brand-orange-dark">{SITE.email}</span>
                    </span>
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-4 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-pale text-brand-orange-dark">
                  <ClockIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-brand-slate">Hours</span>
                  <span className="block text-lg font-semibold text-brand-ink">{SITE.hoursDisplay}</span>
                </span>
              </li>
              <li className="flex items-center gap-4 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-pale text-brand-orange-dark">
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

      <CTABand
        heading="Ready to reclaim your space?"
        subtext="Upfront load-based pricing. No hidden fees. Fast, friendly service across Los Angeles."
      />
    </>
  );
}
