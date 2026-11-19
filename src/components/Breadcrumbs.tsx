import Link from "next/link";

export interface Crumb {
  name: string;
  path: string;
}

// Sits directly under the nav, on the same night background as page heroes,
// so the top of every page reads as one continuous dark band.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-white/5 bg-brand-night">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs text-white/50 sm:px-6 lg:px-8">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-brand-orange">
                /
              </span>
            )}
            {i === items.length - 1 ? (
              <span className="line-clamp-1 font-semibold text-white/85" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="transition hover:text-white">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
