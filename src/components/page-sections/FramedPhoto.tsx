import { PageImage } from "@/components/PageImage";
import type { JobPhoto } from "@/lib/data/job-photos";

export function FramedPhoto({
  photo,
  rotate = false,
  accent = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: {
  photo: JobPhoto;
  rotate?: boolean;
  accent?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border-4 border-white shadow-xl ${rotate ? "-rotate-2" : ""} ${
        accent ? "ring-4 ring-brand-orange/40" : ""
      }`}
    >
      <PageImage
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        className="aspect-[4/5] w-full object-cover"
      />
    </div>
  );
}
