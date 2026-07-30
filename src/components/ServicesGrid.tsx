import Link from "next/link";
import { SERVICES } from "@/lib/data/services";

export function ServicesGrid({ heading = "Our Services" }: { heading?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">{heading}</h2>
      <p className="mt-2 max-w-2xl text-brand-gray">
        Full-service junk and debris removal across Los Angeles — load-based
        pricing, upfront quotes, legal disposal every time.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col rounded-xl border border-black/10 bg-white p-6 transition hover:border-brand-orange hover:shadow-md"
          >
            <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-orange">
              {service.name}
            </h3>
            <p className="mt-2 text-sm text-brand-gray">{service.tagline}</p>
            <span className="mt-4 text-sm font-semibold text-brand-orange">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
