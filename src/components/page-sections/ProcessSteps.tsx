import { Reveal } from "@/components/Reveal";

/**
 * Sticky heading on the left, a timeline on the right whose orange spine
 * grows as you scroll through it (CSS view timeline; static where unsupported).
 */
export function ProcessSteps({
  heading,
  eyebrow = "How it works",
  steps,
  bg = "offwhite",
}: {
  heading: string;
  eyebrow?: string;
  steps: { title: string; body: string }[];
  bg?: "white" | "offwhite";
}) {
  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">{eyebrow}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">{heading}</h2>
          </Reveal>
        </div>

        <ol className="steps-timeline relative">
          <span aria-hidden="true" className="absolute bottom-6 left-[1.6rem] top-6 w-px bg-black/10" />
          <span
            aria-hidden="true"
            className="steps-line absolute bottom-6 left-[1.6rem] top-6 w-0.5 -translate-x-[0.5px] rounded-full bg-gradient-to-b from-brand-sun via-brand-orange to-brand-orange-dark"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-12 pl-20 last:pb-0">
              <span className={`absolute left-0 top-0 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-brand-night font-display text-lg font-bold text-white ring-8 ${bg === "offwhite" ? "ring-brand-offwhite" : "ring-brand-cream"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <Reveal delay={i * 90}>
                <div
                  data-spotlight
                  className="overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                >
                  <h3 className="relative text-xl font-bold text-brand-ink">{step.title}</h3>
                  <p className="relative mt-2 leading-relaxed text-brand-slate">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
