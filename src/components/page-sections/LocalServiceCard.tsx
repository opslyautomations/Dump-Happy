import Link from "next/link";

export type LocalServiceCardStyle = "bordered" | "accent" | "row";

export function LocalServiceCard({
  slug,
  name,
  blurb,
  style = "bordered",
}: {
  slug: string;
  name: string;
  blurb: string;
  style?: LocalServiceCardStyle;
}) {
  if (style === "row") {
    return (
      <li className="flex flex-wrap items-baseline gap-x-2 border-b border-black/10 py-3 last:border-0">
        <Link href={`/services/${slug}`} className="font-bold text-brand-orange hover:underline">
          {name}
        </Link>
        <span className="text-sm text-brand-charcoal">— {blurb}</span>
      </li>
    );
  }

  if (style === "accent") {
    return (
      <li className="rounded-xl border-l-4 border-brand-orange bg-white p-5 shadow-sm">
        <Link
          href={`/services/${slug}`}
          className="font-bold text-brand-black hover:text-brand-orange"
        >
          {name}
        </Link>
        <p className="mt-1 text-sm text-brand-gray">{blurb}</p>
      </li>
    );
  }

  return (
    <li className="rounded-xl border border-black/10 bg-white p-5">
      <Link href={`/services/${slug}`} className="font-bold text-brand-orange hover:underline">
        {name}
      </Link>
      <span className="text-sm text-brand-charcoal"> — {blurb}</span>
    </li>
  );
}
