import { Reveal } from "@/components/Reveal";

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
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-brand-ink">{heading}</h2>
          {intro && <p className="mt-4 leading-relaxed text-brand-charcoal">{intro}</p>}
        </Reveal>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {items.map((item, i) => (
            <li key={item}>
              <Reveal variant="scale" delay={i * 40}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border border-black/5 px-4 py-2.5 text-sm font-medium text-brand-charcoal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:text-brand-ink ${
                    bg === "offwhite" ? "bg-white" : "bg-brand-offwhite"
                  }`}
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {item}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
