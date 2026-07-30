import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/data/site";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-auto bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
              <span className="inline-block h-3 w-3 rounded-full bg-brand-orange" aria-hidden="true" />
              Dump Happy
            </Link>
            <p className="mt-3 text-sm font-semibold text-brand-orange">{SITE.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Locally owned junk removal and clean-out company serving the Los
              Angeles Westside, South Bay, and Central LA. {SITE.addressNote}.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={`tel:${SITE.phoneRaw}`} className="min-h-12 w-fit py-2 font-semibold hover:text-brand-orange">
                {SITE.phoneDisplay}
              </a>
              {SITE.email ? (
                <a href={`mailto:${SITE.email}`} className="min-h-12 w-fit py-2 hover:text-brand-orange">
                  {SITE.email}
                </a>
              ) : null}
              <a
                href={SITE.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 w-fit py-2 text-white/70 hover:text-brand-orange"
              >
                Our Google Business Profile
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-orange">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="block min-h-8 py-1 text-sm text-white/80 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-orange">
              Service Areas
            </h2>
            <ul className="mt-4 space-y-2">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="block min-h-8 py-1 text-sm text-white/80 hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-orange">
              Company
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                ["About", "/about"],
                ["Reviews", "/reviews"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Pricing", "/pricing"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="block min-h-8 py-1 text-sm text-white/80 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          © {year} Dump Happy. Serving Los Angeles &amp; Southern California.
        </div>
      </div>
    </footer>
  );
}
