import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/page-sections/Section";
import { PageIntro } from "@/components/page-sections/PageIntro";
import { Reveal } from "@/components/Reveal";
import { ProcessSteps } from "@/components/page-sections/ProcessSteps";
import { Callout } from "@/components/Callout";
import { CTABand } from "@/components/CTABand";
import { PROMO } from "@/lib/data/promo";
import { SITE } from "@/lib/data/site";

// Offers here come from Jason and live in src/lib/data/promo.ts — do not invent
// specials, discounts, expiry dates, or terms. When PROMO.active is false this
// page falls back to the "nothing running right now" state below.
export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Specials in Los Angeles | Dump Happy",
  description: PROMO.active
    ? `${PROMO.title}: ${PROMO.percentOff}% off mattress removal in Los Angeles when you call and mention promo code ${PROMO.code}. ${PROMO.regularPrice} ${PROMO.salePrice}.`
    : "Current junk removal specials and offers from Dump Happy in Los Angeles.",
  path: "/specials",
  // Nothing worth indexing when no offer is running.
  noindex: !PROMO.active,
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Specials", path: "/specials" },
];

function NoActiveSpecials() {
  return (
    <PageIntro eyebrow="Specials" title="Specials">
      <p>
        We don&apos;t have any active specials to share just yet — check back
        soon, or call us directly for the best current price on your job.
      </p>
    </PageIntro>
  );
}

function OfferCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl shadow-black/10">
      <div className="grain relative overflow-hidden bg-brand-orange px-6 py-10 text-center sm:px-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-sun/40 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-brand-orange-dark/60 blur-3xl" />
        <p className="relative z-[2] text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
          {PROMO.eyebrow}
        </p>
        <h2 className="relative z-[2] mt-3 text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
          {PROMO.title}
        </h2>
        <p className="relative z-[2] mt-3 text-lg font-bold text-white">
          {PROMO.percentOff}% off if you call
        </p>
      </div>

      <div className="px-6 py-10 text-center sm:px-10">
        <div className="flex items-baseline justify-center gap-4">
          <span className="text-2xl font-semibold text-brand-slate line-through">
            {PROMO.regularPrice}
          </span>
          <span className="font-display text-6xl font-extrabold tracking-tight text-brand-ink">{PROMO.salePrice}</span>
        </div>

        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-brand-charcoal">
          Mattress removal is normally {PROMO.regularPrice}. Call and mention promo code{" "}
          <strong className="font-bold text-brand-black">{PROMO.code}</strong> and we&apos;ll take{" "}
          {PROMO.percentOff}% off — {PROMO.salePrice} out the door. We carry it from any room in
          the house and route it to a California mattress recycler, so you never touch the lift or the
          hauling.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${SITE.phoneRaw}`}
            data-magnetic
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-orange px-8 text-base font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href={PROMO.servicePath}
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/10 bg-white px-8 text-base font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white"
          >
            See Mattress Removal Details
          </Link>
        </div>

        <p className="mt-6 text-xs text-brand-slate">{PROMO.finePrint}</p>
      </div>
    </div>
  );
}

export default function SpecialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />

      {!PROMO.active ? (
        <NoActiveSpecials />
      ) : (
        <>
          <PageIntro eyebrow="Specials" title="Junk Removal Specials in Los Angeles">
            <p>
              Here&apos;s what we&apos;re running right now. This one is a phone offer — the
              discount comes off when you call and mention the code, so it won&apos;t show up on
              a form quote.
            </p>
          </PageIntro>

          <section className="bg-brand-cream">
            <Reveal variant="scale" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
              <OfferCard />
            </Reveal>
          </section>

          <ProcessSteps
            heading="How to Claim It"
            steps={[
              {
                title: `Call ${SITE.phoneDisplay}`,
                body: "Tell us how many mattresses, what floor they're on, and where you are in LA so we can lock the price before we roll out.",
              },
              {
                title: `Mention code ${PROMO.code}`,
                body: `Say the promo code on the call and we take ${PROMO.percentOff}% off the ${PROMO.regularPrice} mattress removal — ${PROMO.salePrice}.`,
              },
              {
                title: "We haul and recycle it",
                body: "We carry it out from any room, load it, and route it into California's mattress recycling program. No curb drag, no hauling on your end.",
              },
            ]}
          />

          <Section>
            <Callout title="Why this beats leaving it at the curb" variant="warning">
              Putting a mattress on a sidewalk or in an alley outside a scheduled pickup is illegal
              dumping under California Penal Code 374.3 — LA County fines run up to $10,000, plus
              cleanup costs. At {PROMO.salePrice} hauled and recycled, the special costs a
              fraction of the risk.{" "}
              <Link href={PROMO.servicePath} className="font-semibold text-brand-orange-light underline">
                More on how mattress removal works
              </Link>
              .
            </Callout>
          </Section>
        </>
      )}

      <CTABand
        heading="Got more than a mattress?"
        subtext="Tell us what's piled up and we'll quote the whole load, not just the one item."
      />
    </>
  );
}
