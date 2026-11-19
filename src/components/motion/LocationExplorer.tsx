"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LocationMeta } from "@/lib/data/locations";
import type { LocationPhoto } from "@/lib/data/location-photos";
import { ArrowRightIcon, MapPinIcon } from "@/components/Icons";

/**
 * Big neighborhood index: hovering or focusing a row swaps in that area's
 * landmark photo on the right (desktop). On mobile it is a plain link list.
 * Every link and name is server-rendered.
 */
export function LocationExplorer({
  locations,
  photos,
}: {
  locations: LocationMeta[];
  photos: Record<string, LocationPhoto>;
}) {
  const [active, setActive] = useState(locations[0]?.slug);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <ul className="border-t border-black/10">
        {locations.map((loc, i) => (
          <li key={loc.slug} className="border-b border-black/10">
            <Link
              href={`/locations/${loc.slug}`}
              onMouseEnter={() => setActive(loc.slug)}
              onFocus={() => setActive(loc.slug)}
              className="group flex min-h-16 items-center gap-4 py-4 transition-colors"
            >
              <span className="w-8 shrink-0 text-xs font-semibold tabular-nums text-brand-gray">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span
                  className={`font-display block text-2xl font-bold tracking-tight transition-all duration-500 sm:text-3xl ${
                    active === loc.slug ? "text-brand-ink lg:translate-x-2 lg:text-brand-orange-dark" : "text-brand-ink"
                  } group-hover:translate-x-2 group-hover:text-brand-orange-dark`}
                >
                  {loc.name}
                </span>
                <span className="mt-1 block text-sm text-brand-slate">{loc.tagline}</span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-brand-ink transition duration-500 group-hover:rotate-[-45deg] group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                <ArrowRightIcon size={18} />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-sand shadow-2xl shadow-black/15">
          {locations.map((loc) => {
            const photo = photos[loc.slug];
            if (!photo) return null;
            const on = active === loc.slug;
            return (
              <div
                key={loc.slug}
                aria-hidden={!on}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  on ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              >
                <Image src={photo.src} alt={on ? photo.alt : ""} fill sizes="40vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-center gap-2 text-white">
                  <MapPinIcon size={18} className="text-brand-sun" />
                  <span className="text-sm font-semibold">{photo.caption}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
