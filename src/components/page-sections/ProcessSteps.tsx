import { Reveal } from "@/components/Reveal";

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
  const gridColsClass = steps.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand-orange-dark">{eyebrow}</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{heading}</h2>
        </Reveal>
        <ol className={`mt-12 grid grid-cols-1 gap-6 ${gridColsClass}`}>
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">{step.title}</h3>
                  <p className="mt-2 text-brand-slate">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
