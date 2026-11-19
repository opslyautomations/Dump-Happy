import type { CSSProperties, ReactNode } from "react";
import { SITE } from "@/lib/data/site";
import { CheckCircleIcon, PhoneIcon } from "@/components/Icons";
import { SplitText } from "@/components/motion/SplitText";
import { Smile } from "@/components/motion/Smile";

export type HeroBackground = { type: "solid" } | { type: "pattern"; tone?: "orange" | "charcoal" };

const heroTrust = ["Upfront, load-based pricing", "Legal disposal, always", SITE.hoursShort];

/**
 * Inner-page hero: night background with drifting sunset glows and film grain,
 * a word-by-word headline, and the page's aside (usually the quote form).
 */
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
    <section className="grain relative overflow-hidden bg-brand-night text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`animate-glow absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full blur-3xl ${
            warm ? "bg-brand-orange/45" : "bg-brand-orange/30"
          }`}
        />
        <div className="animate-glow absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full bg-brand-sun/15 blur-3xl [animation-delay:-7s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <Smile
        mode="static"
        eyes={false}
        strokeWidth={10}
        className="pointer-events-none absolute -right-10 bottom-6 hidden w-[28rem] text-white/[0.04] lg:block"
      />

      <div className="relative z-[2] mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:items-start lg:gap-14 lg:py-24">
        <div className="lg:col-span-3 lg:pt-6">
          <h1 className="text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            <SplitText>{h1}</SplitText>
          </h1>
          <div
            className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-white/70 [&_a]:font-semibold [&_a]:text-brand-orange-light [&_a:hover]:underline"
            style={{ "--delay": "350ms" } as CSSProperties}
          >
            {intro}
          </div>
          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ "--delay": "450ms" } as CSSProperties}
          >
            <a
              href={`tel:${SITE.phoneRaw}`}
              data-magnetic
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-lg font-semibold text-white shadow-xl shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark"
            >
              <PhoneIcon size={18} />
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <ul
            className="animate-rise mt-9 flex flex-wrap gap-x-6 gap-y-2"
            style={{ "--delay": "550ms" } as CSSProperties}
          >
            {heroTrust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-white/80">
                <CheckCircleIcon size={18} className="text-brand-sun" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-rise lg:col-span-2" style={{ "--delay": "300ms" } as CSSProperties}>
          {aside}
        </div>
      </div>
    </section>
  );
}
