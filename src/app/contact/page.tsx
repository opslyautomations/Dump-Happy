import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";

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

      <PageIntro eyebrow="Free quote" title="Get a Free Quote">
        <p>
          Tell us what needs to go and we&apos;ll get back to you fast with
          a firm, load-based price — no obligation, no hidden fees.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <dl className="space-y-3">
              <div data-spotlight className="relative overflow-hidden rounded-3xl border border-black/5 bg-white py-5 pl-[5.25rem] pr-5 shadow-sm">
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white" aria-hidden="true">
                    <PhoneIcon size={20} />
                  </span>
                  Phone
                </dt>
                <dd className="relative mt-1">
                  <a href={`tel:${SITE.phoneRaw}`} className="inline-flex min-h-11 items-center text-lg font-semibold text-brand-ink hover:text-brand-orange-dark">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div data-spotlight className="relative overflow-hidden rounded-3xl border border-black/5 bg-white py-5 pl-[5.25rem] pr-5 shadow-sm">
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pale text-brand-orange-dark" aria-hidden="true">
                    <MailIcon size={20} />
                  </span>
                  Email
                </dt>
                <dd className="relative mt-1">
                  <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center break-all text-lg font-semibold text-brand-ink hover:text-brand-orange-dark">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white py-5 pl-[5.25rem] pr-5 shadow-sm">
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pale text-brand-orange-dark" aria-hidden="true">
                    <ClockIcon size={20} />
                  </span>
                  Hours
                </dt>
                <dd className="mt-1 text-lg font-semibold text-brand-ink">{SITE.hoursDisplay}</dd>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white py-5 pl-[5.25rem] pr-5 shadow-sm">
                <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-pale text-brand-orange-dark" aria-hidden="true">
                    <MapPinIcon size={20} />
                  </span>
                  Service Area
                </dt>
                <dd className="mt-1 leading-relaxed text-brand-charcoal">
                  {SITE.addressNote} — serving all of Los Angeles County,
                  centered on the Westside, South Bay, and Central LA.
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
