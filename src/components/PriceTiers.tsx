import type { PricingTier, StorageUnit } from "@/lib/data/pricing";
import { formatPrice } from "@/lib/data/pricing";
import { Reveal } from "@/components/Reveal";

const FRACTION: Record<string, string> = {
  quarter: "1/4",
  half: "1/2",
  "three-quarter": "3/4",
  full: "4/4",
};

/** Load-tier price cards. Plain server HTML so prices stay crawlable. */
export function PriceTierGrid({ tiers, priceLabel = "From" }: { tiers: PricingTier[]; priceLabel?: string }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {tiers.map((tier, i) => (
        <Reveal key={tier.key} delay={(i % 2) * 100} className="h-full">
          <div
            data-spotlight
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 rounded-md bg-brand-black px-2 py-1 font-display text-xs font-bold text-white">
                  {FRACTION[tier.key] ?? tier.key}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-brand-black">
                    {tier.name}
                    {tier.key === "full" && (
                      <span className="ml-2 inline-block rounded-full bg-brand-orange px-2 py-0.5 align-middle font-sans text-[10px] font-bold uppercase tracking-wider text-white">
                        Best value
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-brand-slate">{tier.subtitle}</p>
                </div>
              </div>
              <span className="whitespace-nowrap rounded-full bg-brand-orange px-3.5 py-1.5 text-sm font-bold text-white shadow-md shadow-brand-orange/30">
                {priceLabel} {formatPrice(tier.priceFrom)}
              </span>
            </div>
            <p className="relative mt-4 text-[15px] leading-relaxed text-brand-slate">{tier.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Monthly storage unit rates. */
export function StorageUnitGrid({ units }: { units: StorageUnit[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {units.map((u) => (
        <li
          key={u.size}
          className="flex flex-col items-center rounded-2xl border border-black/5 bg-white px-4 py-5 text-center shadow-sm"
        >
          <span className="rounded-md bg-brand-black px-2.5 py-1 font-display text-sm font-bold text-white">
            {u.size}
          </span>
          <span className="mt-3 font-display text-2xl font-extrabold text-brand-ink">
            {formatPrice(u.pricePerMonth)}
            <span className="font-sans text-sm font-normal text-brand-slate">/mo</span>
          </span>
          <span className="mt-1 text-xs text-brand-slate">subject to change</span>
        </li>
      ))}
    </ul>
  );
}
