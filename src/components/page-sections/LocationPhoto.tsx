import Image from "next/image";
import type { LocationPhoto as LocationPhotoData } from "@/lib/data/location-photos";
import { Reveal } from "@/components/Reveal";
import { MapPinIcon } from "@/components/Icons";

export function LocationPhoto({ photo, name }: { photo: LocationPhotoData; name: string }) {
  const { credit } = photo;
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 pt-12 sm:px-6">
      <Reveal>
        <figure>
          <div className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl shadow-black/10 sm:aspect-[21/9]">
              {/* unoptimized: serve the original JPEG so its embedded IPTC/XMP/EXIF metadata isn't stripped */}
              <Image
                src={photo.src}
                alt={photo.alt}
                title={photo.title}
                fill
                unoptimized
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 sm:left-8">
              <MapPinIcon size={18} className="text-brand-orange" />
              <p className="text-sm font-semibold text-brand-ink">Serving {name}</p>
            </div>
          </div>
          <figcaption className="mt-8 flex flex-col gap-1 text-xs text-brand-slate sm:flex-row sm:items-center sm:justify-between">
            <span>{photo.caption}</span>
            <span>
              Photo:{" "}
              <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
                {credit.author}
              </a>
              {" / "}
              {credit.licenseUrl ? (
                <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline-offset-2 hover:underline">
                  {credit.license}
                </a>
              ) : (
                credit.license
              )}
              {credit.attributionRequired ? ", cropped" : ""}, via Wikimedia Commons
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
