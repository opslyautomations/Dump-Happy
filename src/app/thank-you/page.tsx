import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { Smile } from "@/components/motion/Smile";

export const metadata: Metadata = {
  title: "Thank You | Dump Happy",
  description: "Thanks for reaching out to Dump Happy — we'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="grain relative overflow-hidden bg-brand-night text-white">
      <div aria-hidden="true" className="animate-glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-orange/35 blur-3xl" />
      <div className="relative z-[2] mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <Smile className="h-24 w-auto text-brand-orange" />
      <h1 className="mt-8 text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl">Thanks — we got it!</h1>
      <p className="mt-6 text-lg leading-relaxed text-white/70">
        Your quote request is in. We&apos;ll reach out shortly by phone or text. Need it
        faster? Call us directly at{" "}
        <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-brand-orange-light hover:underline">
          {SITE.phoneDisplay}
        </a>
        .
      </p>
      <Link
        href="/"
        data-magnetic
        className="mt-10 flex min-h-14 items-center justify-center rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
      >
        Back to Home
      </Link>
      </div>
    </section>
  );
}
