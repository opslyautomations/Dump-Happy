import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dump Happy | Free Junk Removal Quote",
  description:
    "Get a free, no-obligation junk removal quote in Los Angeles. Call, text, or fill out our form and Dump Happy will get back to you fast.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl">
              Get a Free Quote
            </h1>
            <p className="mt-4 leading-relaxed text-brand-gray">
              Tell us what needs to go and we&apos;ll get back to you fast with
              a firm, load-based price — no obligation, no hidden fees.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${SITE.phoneRaw}`} className="text-lg font-semibold text-brand-ink hover:text-brand-orange">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-lg font-semibold text-brand-ink hover:text-brand-orange">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Hours</dt>
                <dd className="mt-1 text-lg font-semibold text-brand-ink">{SITE.hoursDisplay}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">Service Area</dt>
                <dd className="mt-1 text-brand-charcoal">
                  {SITE.addressNote} — serving all of Los Angeles County,
                  centered on the Westside, South Bay, and Central LA.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
