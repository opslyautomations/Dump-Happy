"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/data/site";

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
  items,
  basePath,
}: {
  label: string;
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
      <button
        type="button"
        className="flex min-h-12 items-center px-3 text-sm font-semibold text-white hover:text-brand-orange"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-40 w-72 rounded-lg border border-white/10 bg-brand-charcoal p-2 shadow-xl">
          <ul>
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`${basePath}/${item.slug}`}
                  className="block min-h-12 rounded-md px-3 py-3 text-sm text-white hover:bg-white/5 hover:text-brand-orange"
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
    <header className="sticky top-0 z-50 bg-brand-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-12 items-center">
          <Image
            src="/logo.webp"
            alt="Dump Happy - Junk Removal"
            width={381}
            height={254}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <Link href="/" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Home
          </Link>
          <DesktopDropdown label="Services" items={SERVICES} basePath="/services" />
          <DesktopDropdown label="Service Areas" items={LOCATIONS} basePath="/locations" />
          <Link href="/pricing" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Pricing
          </Link>
          <Link href="/about" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            About
          </Link>
          <Link href="/reviews" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Reviews
          </Link>
          <Link href="/gallery" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Gallery
          </Link>
          <Link href="/blog" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Blog
          </Link>
          <Link href="/contact" className="flex min-h-12 items-center px-3 text-sm font-semibold hover:text-brand-orange">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex min-h-12 items-center rounded-md border border-white/20 px-4 text-sm font-semibold hover:border-brand-orange hover:text-brand-orange"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="flex min-h-12 items-center rounded-md bg-brand-orange px-5 text-sm font-bold text-white hover:bg-brand-orange-dark"
          >
            Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-md border border-white/20 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-black px-4 pb-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            <Link href="/" className="flex min-h-12 items-center border-b border-white/10 text-sm font-semibold" onClick={() => setMobileOpen(false)}>
              Home
            </Link>

            <button
              type="button"
              className="flex min-h-12 items-center justify-between border-b border-white/10 text-sm font-semibold"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((o) => !o)}
            >
              Services <ChevronIcon open={mobileServices} />
            </button>
            {mobileServices && (
              <ul className="border-b border-white/10 py-2 pl-4">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex min-h-12 items-center text-sm text-white/90"
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
              className="flex min-h-12 items-center justify-between border-b border-white/10 text-sm font-semibold"
              aria-expanded={mobileLocations}
              onClick={() => setMobileLocations((o) => !o)}
            >
              Service Areas <ChevronIcon open={mobileLocations} />
            </button>
            {mobileLocations && (
              <ul className="border-b border-white/10 py-2 pl-4">
                {LOCATIONS.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/locations/${l.slug}`}
                      className="flex min-h-12 items-center text-sm text-white/90"
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
                className="flex min-h-12 items-center border-b border-white/10 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex min-h-12 items-center justify-center rounded-md border border-white/20 text-sm font-semibold"
              >
                Call {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="flex min-h-12 items-center justify-center rounded-md bg-brand-orange text-sm font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
