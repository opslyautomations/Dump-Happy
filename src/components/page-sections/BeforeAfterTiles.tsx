import { PageImage } from "@/components/PageImage";
import type { JobPhoto } from "@/lib/data/job-photos";

function Tiles({ before, after }: { before: JobPhoto; after: JobPhoto }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {[
        { label: "Before", photo: before },
        { label: "After", photo: after },
      ].map((item) => (
        <div
          key={item.label}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
        >
          <PageImage
            src={item.photo.src}
            alt={item.photo.alt}
            width={item.photo.width}
            height={item.photo.height}
            sizes="(min-width: 640px) 25vw, 50vw"
            className="aspect-[4/5] w-full object-cover"
          />
          <span className="block px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-gray">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Standalone body section. Pass `standalone={false}` to embed just the tile grid (e.g. inside a Hero media slot). */
export function BeforeAfterTiles({
  heading,
  before,
  after,
  bg = "white",
  standalone = true,
}: {
  heading?: string;
  before: JobPhoto;
  after: JobPhoto;
  bg?: "white" | "offwhite";
  standalone?: boolean;
}) {
  if (!standalone) {
    return <Tiles before={before} after={after} />;
  }

  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        {heading && <h2 className="text-2xl font-extrabold text-brand-black">{heading}</h2>}
        <div className={heading ? "mt-6" : ""}>
          <Tiles before={before} after={after} />
        </div>
      </div>
    </section>
  );
}
