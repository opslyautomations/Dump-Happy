import type { CSSProperties, ReactNode } from "react";
import { SITE } from "@/lib/data/site";
import { CheckCircleIcon, PhoneIcon } from "@/components/Icons";

export type HeroBackground = { type: "solid" } | { type: "pattern"; tone?: "orange" | "charcoal" };

const heroTrust = ["Upfront, load-based pricing", "Legal disposal, always", SITE.hoursShort];

export function Hero({
  h1,
  intro,
  aside,
  background = { type: "solid" },
}: {
  h1: ReactNode;
  intro: ReactNode;
  aside: ReactNode;
  background?: HeroBackground;
}) {
  const warm = background.type === "pattern" && background.tone === "orange";

  return (
    <section className={`relative overflow-hidden ${warm ? "bg-brand-pale/60" : "bg-white"}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-orange-light opacity-25 blur-3xl"
      />
      {background.type === "pattern" && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full blur-3xl ${
            warm ? "bg-brand-orange opacity-15" : "bg-stone-300 opacity-40"
          }`}
        />
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-5 lg:items-start lg:gap-14 lg:py-20">
        <div className="lg:col-span-3 lg:pt-6">
          <h1
            className="animate-rise text-3xl font-bold leading-[1.1] tracking-tight text-brand-ink sm:text-4xl lg:text-5xl"
            style={{ "--delay": "0ms" } as CSSProperties}
          >
            {h1}
          </h1>
          <div
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-brand-slate"
            style={{ "--delay": "100ms" } as CSSProperties}
          >
            {intro}
          </div>
          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--delay": "200ms" } as CSSProperties}
          >
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-7 font-semibold text-white shadow-lg shadow-brand-orange/25 transition hover:-translate-y-0.5 hover:bg-brand-orange-dark"
            >
              <PhoneIcon size={18} />
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <ul
            className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-2"
            style={{ "--delay": "300ms" } as CSSProperties}
          >
            {heroTrust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-brand-ink">
                <CheckCircleIcon size={18} className="text-brand-orange" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">{aside}</div>
      </div>
    </section>
  );
}
