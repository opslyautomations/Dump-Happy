import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/data/locations";
import { LOCATIONS_CONTENT, getLocationContent } from "@/lib/data/locations-content";
import { getLocationPresentation } from "@/lib/data/locations-presentation";
import {
  buildMetadata,
  localBusinessJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";
import { ServicesGrid } from "@/components/ServicesGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { Hero } from "@/components/page-sections/Hero";
import { Section } from "@/components/page-sections/Section";
import { LocalServiceCard } from "@/components/page-sections/LocalServiceCard";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getLocationContent(slug);
  if (!content) return {};
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/locations/${content.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getLocationContent(slug);
  if (!content) notFound();

  const presentation = getLocationPresentation(content.slug);

  const path = `/locations/${content.slug}`;
  const nearbyLocations = content.nearby
    .map((slug) => LOCATIONS_CONTENT[slug])
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd({ areaServed: content.areaServedSchema }),
          faqPageJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/locations" },
            { name: content.name, path },
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
          { name: content.name, path },
        ]}
      />

      <Hero
        h1={content.h1}
        intro={<p>{content.localLead}</p>}
        background={presentation.hero}
        aside={<QuoteForm compact variant={presentation.formVariant} defaultCity={content.slug} />}
      />

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">{content.localAngleHeading}</h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{content.localAngle}</p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Neighborhoods &amp; Areas We Serve
        </h2>
        <p className="mt-4 leading-relaxed text-brand-charcoal">{content.neighborhoods}</p>
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Services Available in {content.name}
        </h2>
        {presentation.cardStyle === "row" ? (
          <ul className="mt-6">
            {content.localServices.map((ls) => (
              <LocalServiceCard
                key={ls.slug}
                slug={ls.slug}
                name={ls.name}
                blurb={ls.blurb}
                style={presentation.cardStyle}
              />
            ))}
          </ul>
        ) : (
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.localServices.map((ls) => (
              <LocalServiceCard
                key={ls.slug}
                slug={ls.slug}
                name={ls.name}
                blurb={ls.blurb}
                style={presentation.cardStyle}
              />
            ))}
          </ul>
        )}

        <p className="mt-8 leading-relaxed text-brand-charcoal">{content.coverage}</p>
      </Section>

      <Section bg="offwhite">
        <h2 className="text-2xl font-extrabold text-brand-black">
          What {content.name} Customers Say
        </h2>
        <div className="mt-6">
          <ReviewSlot contextKey={`location:${content.slug}`} label={content.name} />
        </div>
      </Section>

      <Section bg="white">
        <h2 className="text-2xl font-extrabold text-brand-black">
          Frequently Asked Questions — {content.name}
        </h2>
        <div className="mt-6">
          <FAQAccordion faqs={content.faqs} />
        </div>
      </Section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-gray">
          <span className="font-semibold text-brand-black">Nearby areas:</span>
          {nearbyLocations.map((loc, i) => (
            <span key={loc.slug}>
              <Link href={`/locations/${loc.slug}`} className="text-brand-orange hover:underline">
                {loc.name}
              </Link>
              {i < nearbyLocations.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-brand-gray">
          Local resource:{" "}
          <a
            href={content.authorityLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:underline"
          >
            {content.authorityLink.label}
          </a>
        </p>
      </section>

      <ServicesGrid heading={`Services in ${content.name}`} />

      <CTABand
        heading={`Ready to clear it out in ${content.name}?`}
        subtext="Get a free, load-based quote — no obligation."
      />
    </>
  );
}
