import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Services in Los Angeles | Dump Happy",
  description:
    "From single-item pickups to full estate clean-outs, Dump Happy hauls it all across Los Angeles. Explore all 11 junk removal and clean-out services.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Junk Removal Services in Los Angeles
        </h1>
        <p className="mt-4 max-w-2xl text-brand-gray">
          Load-based pricing, upfront quotes, and legal disposal — every time.
          Explore our full range of hauling and clean-out services below.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 transition hover:border-brand-orange hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-brand-black group-hover:text-brand-orange">
                {service.name}
              </h2>
              <p className="mt-2 text-sm text-brand-gray">{service.tagline}</p>
              <span className="mt-4 text-sm font-semibold text-brand-orange">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
