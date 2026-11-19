import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/data/site";
import { PROMO } from "@/lib/data/promo";
import { ArrowRightIcon, ClockIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { Smile } from "@/components/motion/Smile";

export function Footer() {
  const year = 2026;
  return (
    <footer className="grain mt-auto overflow-hidden bg-brand-night text-white/75">
      {/* closing statement */}
      <div className="relative z-[2] mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:pt-28">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Smile className="h-16 w-auto text-brand-orange sm:h-20" />
            <p className="font-display mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl">
              We dump.
              <br />
              <span className="text-sunset">You relax.</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${SITE.phoneRaw}`}
              data-magnetic
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-xl shadow-brand-orange/25 transition-colors hover:bg-brand-orange-dark"
            >
              <PhoneIcon size={18} />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-lg font-semibold text-white transition hover:bg-white hover:text-brand-ink"
            >
              Free Quote
              <ArrowRightIcon size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex w-fit items-center" aria-label="Dump Happy home">
              <Image src="/logo.webp" alt="Dump Happy - Junk Removal" width={381} height={254} className="h-16 w-auto" />
            </Link>
            <p className="mt-3 text-sm font-semibold text-brand-orange-light">{SITE.tagline}</p>
            <p className="mt-3 max-w-sm text-sm text-white/55">
              Locally owned junk removal and clean-out company serving the Los
              Angeles Westside, South Bay, and Central LA. {SITE.addressNote}.
            </p>
            <ul className="mt-5 flex flex-col gap-1 text-sm">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex min-h-10 w-fit items-center gap-2 font-semibold text-white hover:text-brand-orange-light">
                  <PhoneIcon size={16} className="text-brand-orange-light" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              {SITE.email ? (
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex min-h-10 w-fit items-center gap-2 hover:text-white">
                    <MailIcon size={16} className="text-brand-orange-light" />
                    {SITE.email}
                  </a>
                </li>
              ) : null}
              <li className="flex min-h-10 items-center gap-2">
                <ClockIcon size={16} className="text-brand-orange-light" />
                {SITE.hoursDisplay}
              </li>
              <li>
                <a
                  href={SITE.gbpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-10 w-fit items-center text-white/55 underline-offset-4 hover:text-white hover:underline"
                >
                  Our Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Services</h2>
            <ul className="mt-4 space-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="block py-1 text-sm transition hover:translate-x-1 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Service Areas</h2>
            <ul className="mt-4 space-y-1">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="block py-1 text-sm transition hover:translate-x-1 hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Company</h2>
            <ul className="mt-4 space-y-1">
              {[
                ["About", "/about"],
                ["Reviews", "/reviews"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Pricing", "/pricing"],
                ["FAQ", "/faq"],
                ...(PROMO.active ? [["Specials", "/specials"]] : []),
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="block py-1 text-sm transition hover:translate-x-1 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {year} Dump Happy. Serving Los Angeles &amp; Southern California.</p>
          <p>{SITE.hoursDisplay}</p>
        </div>
      </div>

      {/* oversized wordmark, rises from the bottom edge */}
      <div aria-hidden="true" className="relative z-[2] -mb-[3vw] select-none overflow-hidden">
        <p
          data-parallax
          style={{ "--parallax": "40px" } as CSSProperties}
          className="font-display whitespace-nowrap text-center text-[15.5vw] font-extrabold leading-none tracking-tighter text-white/[0.05]"
        >
          DUMP HAPPY
        </p>
      </div>
    </footer>
  );
}
