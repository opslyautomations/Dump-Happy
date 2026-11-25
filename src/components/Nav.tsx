"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { SITE } from "@/lib/data/site";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";

const PLAIN_LINKS: [string, string][] = [
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Reviews", "/reviews"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
];

const linkClass =
  "relative flex min-h-12 items-center px-1 text-[15px] font-medium text-white/80 transition-colors hover:text-white after:absolute after:inset-x-1 after:bottom-2.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-orange after:transition-transform after:duration-300 hover:after:scale-x-100";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`ml-1 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaMenu({
  label,
  href,
  allLabel,
  items,
  basePath,
}: {
  label: string;
  href: string;
  allLabel: string;
  items: { slug: string; name: string; tagline: string }[];
  basePath: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center">
        <Link href={href} className={linkClass}>
          {label}
        </Link>
        <button
          type="button"
          className="flex h-12 w-6 items-center justify-center text-white/70 hover:text-white"
          aria-expanded={open}
          aria-label={`Show ${label} menu`}
          onClick={() => setOpen((o) => !o)}
        >
          <ChevronIcon open={open} />
        </button>
      </div>
      <div
        className={`absolute left-1/2 top-full z-40 w-[40rem] -translate-x-1/2 pt-3 transition-all duration-300 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-3xl border border-white/10 bg-brand-night/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <ul className="grid grid-cols-2 gap-1">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`${basePath}/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="group block rounded-2xl px-4 py-3 transition hover:bg-white/[0.06]"
                >
                  <span className="flex items-center justify-between text-sm font-semibold text-white">
                    {item.name}
                    <ArrowRightIcon
                      size={14}
                      className="-translate-x-1 text-brand-orange opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-white/50">{item.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={href}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between rounded-2xl bg-brand-orange/10 px-4 py-3 text-sm font-semibold text-brand-orange-light transition hover:bg-brand-orange/20"
          >
            {allLabel}
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Tuck the bar away while scrolling down, bring it back on any scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 160) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes (incl. back/forward).
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-ink"
      >
        Skip to content
      </a>
      <header
        style={{ viewTransitionName: "site-header" }}
        className={`sticky top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`border-b transition-colors duration-500 ${
            scrolled || mobileOpen
              ? "border-white/10 bg-brand-night/85 backdrop-blur-xl"
              : "border-transparent bg-brand-night"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 ${
              scrolled ? "py-1" : "py-2"
            }`}
          >
            <Link href="/" onClick={close} className="flex min-h-12 shrink-0 items-center" aria-label="Dump Happy home">
              <Image
                src="/logo.webp"
                alt="Dump Happy - Junk Removal"
                width={381}
                height={254}
                loading="eager"
                fetchPriority="high"
                className={`w-auto transition-all duration-500 ${scrolled ? "h-12" : "h-14"}`}
              />
            </Link>

            <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
              <MegaMenu label="Services" href="/services" allLabel={`All ${SERVICES.length} services`} items={SERVICES} basePath="/services" />
              <MegaMenu label="Service Areas" href="/locations" allLabel="All service areas" items={LOCATIONS} basePath="/locations" />
              {PLAIN_LINKS.map(([label, href]) => (
                <Link key={href} href={href} className={linkClass}>
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 text-[15px] font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Free Quote
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                data-magnetic="0.25"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-[15px] font-semibold text-white shadow-lg shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
              >
                <PhoneIcon size={16} />
                {SITE.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white"
                aria-label={`Call ${SITE.phoneDisplay}`}
              >
                <PhoneIcon size={20} />
              </a>
              <button
                type="button"
                className="relative flex h-12 w-12 items-center justify-center rounded-full text-white ring-1 ring-white/20 hover:bg-white/10"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((o) => !o)}
              >
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    mobileOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    mobileOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        data-lenis-prevent
        className={`fixed inset-0 z-40 overflow-y-auto bg-brand-night pt-20 transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
          mobileOpen ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav className="grain flex min-h-full flex-col px-6 pb-10 pt-6" aria-label="Mobile">
          {(
            [
              ["services"],
              ["areas"],
              ...PLAIN_LINKS,
              ["Contact", "/contact"],
            ] as string[][]
          ).map((entry, i) => {
            const style = { transitionDelay: mobileOpen ? `${120 + i * 45}ms` : "0ms" } as CSSProperties;
            const motion = `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`;
            const big = "font-display text-3xl font-bold tracking-tight text-white";

            if (entry[0] === "services" || entry[0] === "areas") {
              const isServices = entry[0] === "services";
              const open = isServices ? mobileServices : mobileLocations;
              const toggle = isServices ? setMobileServices : setMobileLocations;
              const items = isServices ? SERVICES : LOCATIONS;
              const base = isServices ? "/services" : "/locations";
              return (
                <div key={entry[0]} className={`border-b border-white/10 ${motion}`} style={style}>
                  <button
                    type="button"
                    className={`flex min-h-16 w-full items-center justify-between ${big}`}
                    aria-expanded={open}
                    onClick={() => toggle((o) => !o)}
                  >
                    {isServices ? "Services" : "Service Areas"} <ChevronIcon open={open} />
                  </button>
                  {open && (
                    <ul className="pb-4 pl-1">
                      <li>
                        <Link href={base} className="flex min-h-12 items-center text-sm font-semibold text-brand-orange-light" onClick={close}>
                          {isServices ? "All services" : "All service areas"}
                        </Link>
                      </li>
                      {items.map((it) => (
                        <li key={it.slug}>
                          <Link href={`${base}/${it.slug}`} className="flex min-h-12 items-center text-white/70" onClick={close}>
                            {it.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            const [label, href] = entry;
            return (
              <Link
                key={href}
                href={href}
                className={`flex min-h-16 items-center border-b border-white/10 ${big} ${motion}`}
                style={style}
                onClick={close}
              >
                {label}
              </Link>
            );
          })}

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange text-lg font-semibold text-white"
            >
              <PhoneIcon size={18} />
              Call {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="flex min-h-14 items-center justify-center rounded-full border border-white/20 font-semibold text-white"
              onClick={close}
            >
              Get a Free Quote
            </Link>
            <p className="text-center text-sm text-white/50">{SITE.hoursShort}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
