import type { ReactNode } from "react";

export type HeroBackground = { type: "solid" } | { type: "pattern"; tone?: "orange" | "charcoal" };

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
  return (
    <section className="relative overflow-hidden bg-brand-black">
      {background.type === "pattern" && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              background.tone === "orange"
                ? "radial-gradient(circle at 15% 20%, rgba(242,106,33,0.28), transparent 45%), radial-gradient(circle at 85% 80%, rgba(242,106,33,0.16), transparent 50%)"
                : "radial-gradient(circle at 85% 15%, rgba(35,35,35,0.7), transparent 50%), radial-gradient(circle at 10% 85%, rgba(255,255,255,0.06), transparent 40%)",
          }}
        />
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:items-start lg:px-8 lg:py-20">
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">{h1}</h1>
          <div className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{intro}</div>
        </div>
        <div className="lg:col-span-2">{aside}</div>
      </div>
    </section>
  );
}
