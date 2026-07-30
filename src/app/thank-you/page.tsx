import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Thank You | Dump Happy",
  description: "Thanks for reaching out to Dump Happy — we'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-extrabold text-brand-black">Thanks — we got it!</h1>
      <p className="mt-4 text-brand-gray">
        Your quote request is in. We&apos;ll reach out shortly by phone or text. Need it
        faster? Call us directly at{" "}
        <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-brand-orange hover:underline">
          {SITE.phoneDisplay}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-8 flex min-h-12 items-center justify-center rounded-md bg-brand-black px-8 text-sm font-bold text-white hover:bg-brand-charcoal"
      >
        Back to Home
      </Link>
    </div>
  );
}
