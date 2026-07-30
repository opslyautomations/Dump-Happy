import Link from "next/link";
import { LOCATIONS } from "@/lib/data/locations";

export function LocationsGrid({ heading = "Where We Serve" }: { heading?: string }) {
  return (
    <section className="bg-brand-offwhite">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">{heading}</h2>
        <p className="mt-2 max-w-2xl text-brand-gray">
          Locally owned and operated, serving all of Los Angeles County — with
          a home base across the Westside, South Bay, and Central LA.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group flex flex-col rounded-xl border border-black/10 bg-white p-5 transition hover:border-brand-orange hover:shadow-md"
            >
              <h3 className="font-bold text-brand-black group-hover:text-brand-orange">
                {loc.name}
              </h3>
              <p className="mt-1 text-xs text-brand-gray">{loc.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
