import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Service Areas in Los Angeles | Dump Happy",
  description:
    "Dump Happy serves 11 Los Angeles communities across the Westside, South Bay, and Central LA with fast, load-based junk removal. Find your city.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/locations" }]} />

      <PageIntro eyebrow="Service areas" title="Junk Removal Service Areas in Los Angeles">
        <p>
          Dump Happy is a mobile, locally owned junk removal company serving
          the Westside, South Bay, and Central LA. Pick your city below for
          local pricing context, neighborhoods we cover, and city-specific FAQs.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 3) * 90} className="h-full">
                <Link
                  href={`/locations/${loc.slug}`}
                  data-spotlight
                  className="group flex h-full min-h-48 flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span aria-hidden="true" className="relative font-display text-sm font-bold tabular-nums text-brand-orange-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="relative mt-4 font-display text-2xl font-bold tracking-tight text-brand-black transition-colors group-hover:text-brand-orange-dark">
                    {loc.name}
                  </h2>
                  <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-brand-slate">{loc.tagline}</p>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-dark transition group-hover:gap-3">View service area →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
