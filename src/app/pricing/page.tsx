import type { Metadata } from "next";
import { PRICING_TIERS } from "@/lib/data/pricing";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";

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

      <PageIntro eyebrow="Pricing" title="Junk Removal Pricing in Los Angeles">
        <p>
          Dump Happy prices every job by truck volume — how much space your
          items take up — not by the hour. You&apos;ll always get a firm quote
          before we lift a finger, and if your load ends up smaller than
          expected, you pay the lower tier. No hourly surprises, no hidden
          fees.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Load Tiers</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PRICING_TIERS.map((tier, i) => (
              <Reveal key={tier.key} delay={(i % 2) * 100} className="h-full">
                <div data-spotlight className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold tracking-tight text-brand-black">
                      {tier.name} <span className="font-sans text-base font-normal text-brand-slate">({tier.subtitle})</span>
                    </h3>
                    <span className="whitespace-nowrap rounded-full bg-brand-orange px-3.5 py-1.5 text-sm font-bold text-white shadow-md shadow-brand-orange/30">
                      From ${tier.priceFrom}
                    </span>
                  </div>
                  <p className="relative mt-4 text-[15px] leading-relaxed text-brand-slate">{tier.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-sm text-brand-slate">
              Final pricing depends on crew size, volume and weight of
              materials, and accessibility (including stairs and distance).
              Get a free, firm quote before we lift a finger.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Not sure which tier fits your job?"
        subtext="Send a few photos or book a quick walkthrough — we'll tell you the tier and price up front."
      />
    </>
  );
}
