import type { Metadata } from "next";
import Link from "next/link";
import {
  PRICING_TIERS,
  DUMP_STORE_TIERS,
  DUMP_STORE_FEE_NOTE,
  STORAGE_UNITS,
  STORAGE_NOTE,
  MATTRESS_PICKUP_PRICE,
  LOAD_INCLUDES,
  MULTI_LOAD_NOTE,
  formatPrice,
} from "@/lib/data/pricing";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PriceTierGrid, StorageUnitGrid } from "@/components/PriceTiers";
import { PageIntro } from "@/components/page-sections/PageIntro";

const junkFrom = formatPrice(PRICING_TIERS[0].priceFrom);
const junkTo = formatPrice(PRICING_TIERS[PRICING_TIERS.length - 1].priceFrom);

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Pricing in Los Angeles | Dump Happy",
  description: `Dump Happy junk removal is priced by truck volume: ${junkFrom} to ${junkTo} by load, mattress pickup from ${formatPrice(MATTRESS_PICKUP_PRICE)}, and Dump + Store moves into storage from ${formatPrice(DUMP_STORE_TIERS[0].priceFrom)}.`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]} />

      <PageIntro eyebrow="Pricing" title="Junk Removal Pricing in Los Angeles">
        <p>
          Dump Happy prices every job by truck volume — how much space your
          items take up — not by the hour. Junk removal runs {junkFrom} to {junkTo}{" "}
          by load, mattress pickup starts at {formatPrice(MATTRESS_PICKUP_PRICE)}, and you&apos;ll
          always get a firm quote before we lift a finger. No hourly surprises, no hidden fees.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Junk Removal Load Tiers</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-brand-slate">
              {LOAD_INCLUDES}{" "}
              <strong className="text-brand-orange">{MULTI_LOAD_NOTE}</strong>
            </p>
          </Reveal>
          <PriceTierGrid tiers={PRICING_TIERS} />
          <Reveal>
            <div className="mt-5 flex flex-col gap-2 rounded-3xl border border-black/5 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-black">Mattress Pickup</h3>
                <p className="mt-1 text-[15px] text-brand-slate">
                  Carried out of any room and routed to a California mattress recycler.{" "}
                  <Link href="/services/mattress-removal" className="text-brand-orange hover:underline">
                    Mattress removal
                  </Link>
                </p>
              </div>
              <span className="self-start whitespace-nowrap rounded-full bg-brand-orange px-3.5 py-1.5 text-sm font-bold text-white shadow-md shadow-brand-orange/30 sm:self-auto">
                From {formatPrice(MATTRESS_PICKUP_PRICE)}
              </span>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-sm text-brand-slate">
              Final pricing depends on crew size, volume and weight of
              materials, and accessibility (including stairs and distance).
              Get a free, firm quote before we lift a finger.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="dump-and-store" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Dump + Store</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-brand-slate">
              We move you into your storage unit for one flat moving fee. {DUMP_STORE_FEE_NOTE}{" "}
              <Link href="/services/dump-and-store" className="text-brand-orange hover:underline">
                How Dump + Store works
              </Link>
            </p>
          </Reveal>
          <h3 className="mt-12 font-display text-2xl font-bold tracking-tight text-brand-black">Moving Fee</h3>
          <PriceTierGrid tiers={DUMP_STORE_TIERS} />
          <h3 className="mt-14 font-display text-2xl font-bold tracking-tight text-brand-black">Storage Units</h3>
          <StorageUnitGrid units={STORAGE_UNITS} />
          <p className="mt-6 text-sm text-brand-slate">{STORAGE_NOTE}</p>
        </div>
      </section>

      <CTABand
        heading="Not sure which tier fits your job?"
        subtext="Send a few photos or book a quick walkthrough — we'll tell you the tier and price up front."
      />
    </>
  );
}
