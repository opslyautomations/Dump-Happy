import type { ReactNode } from "react";
import { PageImage } from "@/components/PageImage";
import type { JobPhoto } from "@/lib/data/job-photos";

export function ImageTextSplit({
  heading,
  children,
  image,
  imageSide = "right",
  bg = "white",
}: {
  heading: string;
  children: ReactNode;
  image: JobPhoto;
  imageSide?: "left" | "right";
  bg?: "white" | "offwhite";
}) {
  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className={imageSide === "left" ? "lg:order-2" : ""}>
          <h2 className="text-2xl font-extrabold text-brand-black">{heading}</h2>
          <div className="mt-4 leading-relaxed text-brand-charcoal">{children}</div>
        </div>
        <div className={imageSide === "left" ? "lg:order-1" : ""}>
          <PageImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
