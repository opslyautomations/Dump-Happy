export function ProcessSteps({
  heading,
  steps,
  bg = "offwhite",
}: {
  heading: string;
  steps: { title: string; body: string }[];
  bg?: "white" | "offwhite";
}) {
  const gridColsClass = steps.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";

  return (
    <section className={`border-b border-black/5 ${bg === "offwhite" ? "bg-brand-offwhite" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">{heading}</h2>
        <ol className={`mt-8 grid grid-cols-1 gap-6 ${gridColsClass}`}>
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-black/10 bg-white p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold text-brand-black">{step.title}</h3>
              <p className="mt-2 text-sm text-brand-gray">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
