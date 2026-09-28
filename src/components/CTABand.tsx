import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { Reveal } from "@/components/Reveal";
import { PhoneIcon } from "@/components/Icons";

export function CTABand({
  heading = "Ready to reclaim your space?",
  subtext = "Get a free, no-obligation load-based quote today.",
}: {
  heading?: string;
  subtext?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 pt-4 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange opacity-40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-orange-light opacity-20 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/75">{subtext}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 font-semibold text-white shadow-lg shadow-brand-orange/30 transition hover:-translate-y-0.5 hover:bg-brand-orange-dark"
              >
                <PhoneIcon size={18} />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-8 font-semibold text-white transition hover:bg-white/10"
              >
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/55">{SITE.hoursDisplay}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
