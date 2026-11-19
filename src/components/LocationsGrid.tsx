import { LOCATIONS } from "@/lib/data/locations";
import { LOCATION_PHOTOS } from "@/lib/data/location-photos";
import { Reveal } from "@/components/Reveal";
import { LocationExplorer } from "@/components/motion/LocationExplorer";

export function LocationsGrid({ heading = "Where We Serve" }: { heading?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">{heading}</h2>
        <p className="max-w-md text-brand-slate">
          Locally owned and operated, serving all of Los Angeles County — with
          a home base across the Westside, South Bay, and Central LA.
        </p>
      </Reveal>
      <Reveal delay={100}>
        <LocationExplorer locations={LOCATIONS} photos={LOCATION_PHOTOS} />
      </Reveal>
    </section>
  );
}
