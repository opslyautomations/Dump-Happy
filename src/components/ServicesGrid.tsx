import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, TruckIcon } from "@/components/Icons";

export function ServicesGrid({
  heading = "Our Services",
  subheading = "Full-service junk and debris removal across Los Angeles — load-based pricing, upfront quotes, legal disposal every time.",
  featured = false,
}: {
  heading?: string;
  subheading?: string;
  // Featured mode shows only services with a real job photo, plus a link to the rest.
  featured?: boolean;
}) {
  const services = featured ? SERVICES.filter((s) => s.image) : SERVICES;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-brand-slate">{subheading}</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 100} className="h-full">
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-pale">
                {service.image ? (
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange-light opacity-30 blur-2xl"
                    />
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-orange shadow-md transition duration-500 group-hover:scale-110">
                      <TruckIcon size={30} />
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-brand-ink">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm text-brand-slate">{service.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange-dark">
                  Learn more
                  <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      {featured && (
        <Reveal className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-semibold text-brand-orange-dark hover:text-brand-ink"
          >
            See all {SERVICES.length} services
            <ArrowRightIcon size={16} />
          </Link>
        </Reveal>
      )}
    </section>
  );
}
