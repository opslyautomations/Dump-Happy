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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">{heading}</h2>
        <p className="max-w-md text-brand-slate">{subheading}</p>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 90} className="h-full">
            <Link
              href={`/services/${service.slug}`}
              data-spotlight
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-orange/10"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-brand-night">
                {service.image ? (
                  <>
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />
                  </>
                ) : (
                  <div className="grain flex h-full items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-orange opacity-40 blur-3xl transition duration-700 group-hover:scale-150"
                    />
                    <span className="relative z-[2] flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-orange-light ring-1 ring-white/15 backdrop-blur transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                      <TruckIcon size={30} />
                    </span>
                  </div>
                )}
                <span className="absolute left-4 top-4 z-[3] rounded-full bg-white/90 px-3 py-1 text-xs font-bold tabular-nums text-brand-ink backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-brand-ink">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">{service.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-dark">
                  Learn more
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-pale transition duration-500 group-hover:bg-brand-orange group-hover:text-white">
                    <ArrowRightIcon size={15} className="transition group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      {featured && (
        <Reveal className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-6 font-semibold text-brand-ink transition hover:border-brand-ink hover:bg-brand-ink hover:text-white"
          >
            See all {SERVICES.length} services
            <ArrowRightIcon size={16} className="transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      )}
    </section>
  );
}
