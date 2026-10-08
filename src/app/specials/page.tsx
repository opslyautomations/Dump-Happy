import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/page-sections/Section";
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
    <Section>
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Specials</h1>
        <p className="mt-4 leading-relaxed text-brand-gray">
          We don&apos;t have any active specials to share just yet — check back
          soon, or call us directly for the best current price on your job.
        </p>
      </div>
    </Section>
  );
}

function OfferCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
      <div className="bg-brand-orange px-6 py-8 text-center sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
          {PROMO.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
          {PROMO.title}
        </h2>
        <p className="mt-3 text-lg font-bold text-white">
          {PROMO.percentOff}% off if you call
        </p>
      </div>

      <div className="px-6 py-8 text-center sm:px-10">
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-2xl font-semibold text-brand-gray line-through">
            {PROMO.regularPrice}
          </span>
          <span className="text-5xl font-bold tracking-tight text-brand-ink">{PROMO.salePrice}</span>
        </div>

        <p className="mt-5 leading-relaxed text-brand-charcoal">
          Mattress removal is normally {PROMO.regularPrice}. Call and mention promo code{" "}
          <strong className="font-bold text-brand-black">{PROMO.code}</strong> and we&apos;ll take{" "}
          {PROMO.percentOff}% off — {PROMO.salePrice} out the door. We carry it from any room in
          the house and route it to a California mattress recycler, so you never touch the lift or the
          hauling.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex min-h-12 items-center justify-center rounded-md bg-brand-orange px-8 text-base font-bold text-white transition hover:bg-brand-orange-dark"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href={PROMO.servicePath}
            className="flex min-h-12 items-center justify-center rounded-md border-2 border-brand-black bg-white px-8 text-sm font-bold text-brand-black transition hover:bg-brand-offwhite"
          >
            See Mattress Removal Details
          </Link>
        </div>

        <p className="mt-5 text-xs text-brand-gray">{PROMO.finePrint}</p>
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
          <Section>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                Junk Removal Specials in Los Angeles
              </h1>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-brand-gray">
                Here&apos;s what we&apos;re running right now. This one is a phone offer — the
                discount comes off when you call and mention the code, so it won&apos;t show up on
                a form quote.
              </p>
            </div>
            <div className="mt-10">
              <OfferCard />
            </div>
          </Section>

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
              <Link href={PROMO.servicePath} className="font-semibold text-brand-orange underline">
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
