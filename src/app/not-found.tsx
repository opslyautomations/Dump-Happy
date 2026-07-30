import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Page Not Found | Dump Happy",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-wide text-brand-orange">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-brand-black sm:text-4xl">
        This page got hauled away.
      </h1>
      <p className="mt-4 text-brand-gray">
        The page you&apos;re looking for doesn&apos;t exist — but we&apos;re still happy to help.
        Head back home or get a free quote for your next clean-out.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex min-h-12 items-center justify-center rounded-md bg-brand-black px-8 text-sm font-bold text-white hover:bg-brand-charcoal"
        >
          Back to Home
        </Link>
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex min-h-12 items-center justify-center rounded-md border border-black/15 px-8 text-sm font-bold text-brand-black hover:border-brand-orange hover:text-brand-orange"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
