export function PillList({
  heading,
  intro,
  items,
  bg = "white",
}: {
  heading: string;
  intro?: string;
  items: string[];
  bg?: "white" | "offwhite";
}) {
  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-brand-black">{heading}</h2>
        {intro && <p className="mt-4 leading-relaxed text-brand-charcoal">{intro}</p>}
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className={`rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-brand-charcoal ${
                bg === "offwhite" ? "bg-white" : "bg-brand-offwhite"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
