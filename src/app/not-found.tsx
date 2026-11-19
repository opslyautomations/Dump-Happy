import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { Smile } from "@/components/motion/Smile";

export const metadata: Metadata = {
  title: "Page Not Found | Dump Happy",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-brand-night text-white">
      <p aria-hidden="true" className="font-display pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 select-none text-center text-[38vw] font-extrabold leading-none text-white/[0.04]">404</p>
      <div className="relative z-[2] mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <Smile className="h-20 w-auto rotate-180 text-brand-orange" />
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-orange-light">404</p>
      <h1 className="mt-3 text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl">
        This page got hauled away.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-white/70">
        The page you&apos;re looking for doesn&apos;t exist — but we&apos;re still happy to help.
        Head back home or get a free quote for your next clean-out.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          data-magnetic
          className="flex min-h-14 items-center justify-center rounded-full bg-brand-orange px-8 font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
        >
          Back to Home
        </Link>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex min-h-14 items-center justify-center rounded-full border border-white/25 px-8 font-semibold text-white transition hover:bg-white hover:text-brand-ink"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
      </div>
    </section>
  );
}
