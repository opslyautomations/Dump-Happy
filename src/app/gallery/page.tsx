import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";
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

      <PageIntro eyebrow="Our work" title="Before & After Gallery">
        <p>
          Real jobs from across Los Angeles — garages reclaimed, yards
          cleared, and truckloads hauled to legal, certified disposal.
        </p>
      </PageIntro>

      <section className="bg-brand-offwhite">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Before &amp; After</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {BEFORE_AFTER_PAIRS.map((pair, i) => (
              <Reveal key={pair.key} delay={(i % 2) * 120} className="h-full">
                <div className="h-full rounded-3xl border border-black/5 bg-white p-5 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight text-brand-black">{pair.title}</h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div>
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={pair.before.src}
                          alt={pair.before.alt}
                          width={pair.before.width}
                          height={pair.before.height}
                          sizes="(min-width: 1024px) 320px, 45vw"
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </div>
                      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                        Before
                      </p>
                    </div>
                    <div>
                      <div className="overflow-hidden rounded-2xl ring-2 ring-brand-orange/60">
                        <Image
                          src={pair.after.src}
                          alt={pair.after.alt}
                          width={pair.after.width}
                          height={pair.after.height}
                          sizes="(min-width: 1024px) 320px, 45vw"
                          className="aspect-[4/5] w-full object-cover"
                        />
                      </div>
                      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                        After
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Recent Jobs</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            {GALLERY_PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} variant="clip" delay={(i % 3) * 100}>
                <figure className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                  <div className="overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="aspect-square w-full object-cover transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4 text-xs leading-relaxed text-brand-slate sm:text-sm">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
