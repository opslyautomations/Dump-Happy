import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import { Smile } from "@/components/motion/Smile";

export function CTABand({
  heading = "Ready to reclaim your space?",
  subtext = "Get a free, no-obligation load-based quote today.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
      <Reveal variant="scale">
        <div className="grain relative overflow-hidden rounded-[2.5rem] bg-brand-night px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="animate-glow absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-orange/50 blur-3xl" />
            <div className="animate-glow absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-sun/20 blur-3xl [animation-delay:-6s]" />
          </div>
          <div className="relative z-[2]">
            <Smile className="mx-auto h-14 w-auto text-brand-orange" />
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl">{heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">{subtext}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${SITE.phoneRaw}`}
                data-magnetic
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
              >
                <PhoneIcon size={18} />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-8 text-lg font-semibold text-white transition hover:bg-white hover:text-brand-ink"
              >
                Get a Free Quote
                <ArrowRightIcon size={18} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-7 text-sm text-white/45">{SITE.hoursDisplay}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
