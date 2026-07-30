import Link from "next/link";
import { SITE } from "@/lib/data/site";

export function CTABand({
  heading = "Ready to reclaim your space?",
  subtext = "Get a free, no-obligation load-based quote today.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="bg-brand-orange">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{heading}</h2>
        <p className="max-w-xl text-base text-white/90">{subtext}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex min-h-12 items-center justify-center rounded-md bg-brand-black px-8 text-sm font-bold text-white hover:bg-brand-charcoal"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="flex min-h-12 items-center justify-center rounded-md border-2 border-brand-black bg-white px-8 text-sm font-bold text-brand-black hover:bg-brand-offwhite"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
