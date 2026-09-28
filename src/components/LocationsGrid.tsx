import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";
import { Reveal } from "@/components/Reveal";
import { MapPinIcon } from "@/components/Icons";

export function LocationsGrid({ heading = "Where We Serve" }: { heading?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-brand-slate">
          Locally owned and operated, serving all of Los Angeles County — with
          a home base across the Westside, South Bay, and Central LA.
        </p>
      </Reveal>
      <Reveal delay={100} className="mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-black/10 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md"
            >
              <MapPinIcon size={20} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>
                <span className="block font-semibold text-brand-ink group-hover:text-brand-orange-dark">
                  {loc.name}
                </span>
                <span className="mt-0.5 block text-xs text-brand-slate">{loc.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
