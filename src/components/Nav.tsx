"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/data/site";
import { PhoneIcon } from "@/components/Icons";

const linkClass =
  "flex min-h-12 items-center px-1 text-[15px] font-medium text-brand-ink transition-colors hover:text-brand-orange-dark";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`ml-1 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopDropdown({
  label,
  href,
  items,
  basePath,
}: {
  label: string;
  href: string;
  items: { slug: string; name: string }[];
  basePath: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link href={href} className={linkClass}>
          {label}
        </Link>
        <button
          type="button"
          className="flex h-12 w-6 items-center justify-center text-brand-ink hover:text-brand-orange-dark"
          aria-expanded={open}
          aria-label={`Show ${label} menu`}
          onClick={() => setOpen((o) => !o)}
        >
          <ChevronIcon open={open} />
        </button>
      </div>
      {open && (
        <div className="absolute left-0 top-full z-40 pt-2">
          <ul className="w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-xl ring-1 ring-black/5">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`${basePath}/${item.slug}`}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-ink hover:bg-brand-pale hover:text-brand-orange-dark"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <Link href="/" className="flex min-h-12 shrink-0 items-center" aria-label="Dump Happy home">
          <Image
            src="/logo.webp"
            alt="Dump Happy - Junk Removal"
            width={381}
            height={254}
            loading="eager"
            fetchPriority="high"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <DesktopDropdown label="Services" href="/services" items={SERVICES} basePath="/services" />
          <DesktopDropdown label="Service Areas" href="/locations" items={LOCATIONS} basePath="/locations" />
          {[
            ["Pricing", "/pricing"],
            ["About", "/about"],
            ["Reviews", "/reviews"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className={linkClass}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-black/15 px-5 text-[15px] font-semibold text-brand-ink transition hover:bg-brand-pale"
          >
            Free Quote
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 text-[15px] font-semibold text-white shadow-md shadow-brand-orange/25 transition hover:-translate-y-0.5 hover:bg-brand-orange-dark"
          >
            <PhoneIcon size={16} />
            {SITE.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange text-white"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <PhoneIcon size={20} />
          </a>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-lg text-brand-ink hover:bg-brand-pale"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-black/5 bg-white px-4 pb-6 xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            <Link href="/" className="flex min-h-12 items-center border-b border-black/5 font-medium text-brand-ink" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button
              type="button"
              className="flex min-h-12 items-center justify-between border-b border-black/5 font-medium text-brand-ink"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((o) => !o)}
            >
              Services <ChevronIcon open={mobileServices} />
            </button>
            {mobileServices && (
              <ul className="border-b border-black/5 py-2 pl-4">
                <li>
                  <Link href="/services" className="flex min-h-12 items-center text-sm font-semibold text-brand-orange-dark" onClick={() => setMobileOpen(false)}>
                    All services
                  </Link>
                </li>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex min-h-12 items-center text-sm text-brand-slate"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <button
              type="button"
              className="flex min-h-12 items-center justify-between border-b border-black/5 font-medium text-brand-ink"
              aria-expanded={mobileLocations}
              onClick={() => setMobileLocations((o) => !o)}
            >
              Service Areas <ChevronIcon open={mobileLocations} />
            </button>
            {mobileLocations && (
              <ul className="border-b border-black/5 py-2 pl-4">
                <li>
                  <Link href="/locations" className="flex min-h-12 items-center text-sm font-semibold text-brand-orange-dark" onClick={() => setMobileOpen(false)}>
                    All service areas
                  </Link>
                </li>
                {LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="flex min-h-12 items-center text-sm text-brand-slate"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {[
              ["Pricing", "/pricing"],
              ["About", "/about"],
              ["Reviews", "/reviews"],
              ["Gallery", "/gallery"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-12 items-center border-b border-black/5 font-medium text-brand-ink"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-orange font-semibold text-white"
              >
                <PhoneIcon size={16} />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex min-h-12 items-center justify-center rounded-lg border border-black/15 font-semibold text-brand-ink"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
              <p className="text-center text-sm text-brand-slate">{SITE.hoursShort}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
