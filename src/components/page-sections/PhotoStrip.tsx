import { PageImage } from "@/components/PageImage";
import type { JobPhoto } from "@/lib/data/job-photos";

export function PhotoStrip({ photos }: { photos: JobPhoto[] }) {
  return (
    <div className="flex gap-3">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="w-1/3 overflow-hidden rounded-xl border-2 border-white/20 shadow-lg"
        >
          <PageImage
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 1024px) 15vw, 30vw"
            className="aspect-square w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
