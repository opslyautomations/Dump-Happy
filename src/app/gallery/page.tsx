import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Before & After Gallery | Dump Happy",
  description:
    "See before-and-after junk removal and clean-out photos from Dump Happy jobs across Los Angeles — garages, estates, and full property clear-outs.",
  path: "/gallery",
});

// NEEDS: real job photos. Placeholder grid below with descriptive alt text
// slots — replace src/alt once photos are supplied.
const placeholders = [
  "Garage clean-out, before and after",
  "Furniture removal from a Los Angeles apartment",
  "Estate clean-out, whole-property clear-out",
  "Construction debris removal from a remodel",
  "Appliance removal, kitchen clear-out",
  "Yard and green waste removal",
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Before &amp; After Gallery
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-brand-gray">
          Real job photos from across Los Angeles are coming soon. Here&apos;s a
          preview of the kind of work we do.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((caption) => (
            <div
              key={caption}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-brand-gray/40 bg-brand-offwhite p-4 text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Photo coming soon
              </span>
              <span className="text-sm text-brand-gray">{caption}</span>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
