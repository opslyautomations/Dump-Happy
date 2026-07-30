import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";
import { getAggregateRating } from "@/lib/data/reviews";
import { buildMetadata, breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewSlot } from "@/components/ReviewSlot";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Reviews | Dump Happy Junk Removal",
  description:
    "Read real Google reviews from Dump Happy customers across Los Angeles — honest pricing, on-time service, and respectful junk removal crews.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const aggregateRating = getAggregateRating();

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd({ aggregateRating }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} />

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          What Los Angeles Customers Say About Dump Happy
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-brand-gray">
          Every review below comes straight from our{" "}
          <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange hover:underline">
            Google Business Profile
          </a>
          . We don&apos;t write or edit them — just proud to share what our
          customers have to say.
        </p>

        <div className="mt-10">
          <ReviewSlot contextKey="general" label="Dump Happy" />
        </div>
      </section>

      <CTABand />
    </>
  );
}
