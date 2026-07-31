import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { BEFORE_AFTER_PAIRS, GALLERY_PHOTOS } from "@/lib/data/gallery";

export const metadata: Metadata = buildMetadata({
  title: "Before & After Gallery | Dump Happy",
  description:
    "See before-and-after junk removal and clean-out photos from Dump Happy jobs across Los Angeles — garages, yards, and full property clear-outs.",
  path: "/gallery",
});

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
          Real jobs from across Los Angeles — garages reclaimed, yards
          cleared, and truckloads hauled to legal, certified disposal.
        </p>
      </section>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-black">Before &amp; After</h2>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <div key={pair.key} className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-brand-black">{pair.title}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <Image
                      src={pair.before.src}
                      alt={pair.before.alt}
                      width={pair.before.width}
                      height={pair.before.height}
                      sizes="(min-width: 1024px) 320px, 45vw"
                      className="aspect-[4/5] w-full rounded-lg object-cover"
                    />
                    <p className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-brand-gray">
                      Before
                    </p>
                  </div>
                  <div>
                    <Image
                      src={pair.after.src}
                      alt={pair.after.alt}
                      width={pair.after.width}
                      height={pair.after.height}
                      sizes="(min-width: 1024px) 320px, 45vw"
                      className="aspect-[4/5] w-full rounded-lg object-cover"
                    />
                    <p className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-brand-orange">
                      After
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">Recent Jobs</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_PHOTOS.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl bg-brand-offwhite">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="p-3 text-xs text-brand-gray">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
