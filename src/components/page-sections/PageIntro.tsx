import type { CSSProperties, ReactNode } from "react";
import { SplitText } from "@/components/motion/SplitText";
import { Smile } from "@/components/motion/Smile";

/**
 * Dark page header for index/content pages (pricing, blog, FAQ, ...).
 * The h1 text is passed through unchanged; only its presentation is animated.
 */
export function PageIntro({
  eyebrow,
  title,
  children,
  aside,
  meta,
}: {
  eyebrow?: ReactNode;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-brand-night text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-glow absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-brand-orange/35 blur-3xl" />
        <div className="animate-glow absolute -bottom-56 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-sun/10 blur-3xl [animation-delay:-5s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
      </div>
      <Smile
        mode="static"
        eyes={false}
        strokeWidth={10}
        className="pointer-events-none absolute -bottom-10 -right-16 hidden w-[26rem] text-white/[0.04] md:block"
      />

      <div
        className={`relative z-[2] mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${
          aside ? "grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-light"
              style={{ "--delay": "0ms" } as CSSProperties}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            <SplitText baseDelay={80}>{title}</SplitText>
          </h1>
          {children && (
            <div
              className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/70 [&_a]:font-semibold [&_a]:text-brand-orange-light [&_a:hover]:underline [&_strong]:text-white"
              style={{ "--delay": "350ms" } as CSSProperties}
            >
              {children}
            </div>
          )}
          {meta && (
            <div className="animate-rise mt-6 text-sm text-white/50" style={{ "--delay": "420ms" } as CSSProperties}>
              {meta}
            </div>
          )}
        </div>
        {aside && (
          <div className="animate-rise" style={{ "--delay": "300ms" } as CSSProperties}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
