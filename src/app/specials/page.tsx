import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CTABand } from "@/components/CTABand";

// Hidden from nav and noindexed until Jason supplies real offers — do not
// invent specials or discounts.
export const metadata: Metadata = buildMetadata({
  title: "Specials | Dump Happy",
  description: "Current junk removal specials and offers from Dump Happy in Los Angeles.",
  path: "/specials",
  noindex: true,
});

export default function SpecialsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">Specials</h1>
      <p className="mt-4 leading-relaxed text-brand-gray">
        We don&apos;t have any active specials to share just yet — check back
        soon, or call us directly for the best current price on your job.
      </p>
      <div className="mt-10">
        <CTABand />
      </div>
    </section>
  );
}
