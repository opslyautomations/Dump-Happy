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
            <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
              Get a Free Quote
            </h1>
            <p className="mt-4 leading-relaxed text-brand-gray">
              Tell us what needs to go and we&apos;ll get back to you fast with
              a firm, load-based price — no obligation, no hidden fees.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-brand-orange">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${SITE.phoneRaw}`} className="text-lg font-semibold text-brand-black hover:text-brand-orange">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-brand-orange">Email</dt>
                {/* NEEDS: business email — not yet supplied by Jason */}
                <dd className="mt-1 text-brand-charcoal">
                  Email coming soon — call or text {SITE.phoneDisplay} in the meantime.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-brand-orange">Hours</dt>
                {/* NEEDS: business hours — not yet supplied by Jason */}
                <dd className="mt-1 text-brand-charcoal">[NEEDS: hours]</dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wide text-brand-orange">Service Area</dt>
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
