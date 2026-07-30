import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Junk Removal Service Areas in Los Angeles
        </h1>
        <p className="mt-4 max-w-2xl text-brand-gray">
          Dump Happy is a mobile, locally owned junk removal company serving
          the Westside, South Bay, and Central LA. Pick your city below for
          local pricing context, neighborhoods we cover, and city-specific FAQs.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 transition hover:border-brand-orange hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-brand-black group-hover:text-brand-orange">
                {loc.name}
              </h2>
              <p className="mt-2 text-sm text-brand-gray">{loc.tagline}</p>
              <span className="mt-4 text-sm font-semibold text-brand-orange">View service area →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
