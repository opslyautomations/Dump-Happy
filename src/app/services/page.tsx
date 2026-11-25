import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";

export const metadata: Metadata = buildMetadata({
  title: "Junk Removal Services in Los Angeles | Dump Happy",
  description:
    `From single-item pickups to full estate clean-outs and moves into storage, Dump Happy hauls it all across Los Angeles. Explore all ${SERVICES.length} services.`,
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

      <PageIntro eyebrow="Services" title="Junk Removal Services in Los Angeles">
        <p>
          Load-based pricing, upfront quotes, and legal disposal — every time.
          Explore our full range of hauling and clean-out services below.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 90} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  data-spotlight
                  className="group flex h-full min-h-48 flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span aria-hidden="true" className="relative font-display text-sm font-bold tabular-nums text-brand-orange-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="relative mt-4 font-display text-2xl font-bold tracking-tight text-brand-black transition-colors group-hover:text-brand-orange-dark">
                    {service.name}
                  </h2>
                  <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-brand-slate">{service.tagline}</p>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-dark transition group-hover:gap-3">Learn more →</span>
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
