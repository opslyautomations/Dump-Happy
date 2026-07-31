import type { Metadata } from "next";
import { PRICING_TIERS } from "@/lib/data/pricing";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Pricing in Los Angeles | Dump Happy",
  description:
    "Dump Happy prices junk removal by truck volume, not the hour — six clear load tiers from single item to full load. Get a free, upfront quote today.",
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

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Junk Removal Pricing in Los Angeles
        </h1>
        <p className="mt-5 leading-relaxed text-brand-gray">
          Dump Happy prices every job by truck volume — how much space your
          items take up — not by the hour. You&apos;ll always get a firm quote
          before we lift a finger, and if your load ends up smaller than
          expected, you pay the lower tier. No hourly surprises, no hidden
          fees.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">Load Tiers</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.key} className="rounded-xl border border-black/10 bg-white p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-bold text-brand-black">
                    {tier.name} <span className="font-normal text-brand-gray">({tier.subtitle})</span>
                  </h3>
                  <span className="whitespace-nowrap rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange">
                    From ${tier.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-gray">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-gray">
            Final pricing depends on crew size, volume and weight of
            materials, and accessibility (including stairs and distance).
            Get a free, firm quote before we lift a finger.
          </p>
        </div>
      </section>

      <CTABand
        heading="Not sure which tier fits your job?"
        subtext="Send a few photos or book a quick walkthrough — we'll tell you the tier and price up front."
      />
    </>
  );
}
