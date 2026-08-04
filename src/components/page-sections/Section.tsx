import type { ReactNode } from "react";

export function Section({
  bg = "white",
  maxWidth = "4xl",
  columns = 1,
  className = "",
  children,
}: {
  bg?: "white" | "offwhite";
  maxWidth?: "4xl" | "6xl";
  columns?: 1 | 2;
  className?: string;
  children: ReactNode;
}) {
  const widthClass = maxWidth === "6xl" ? "max-w-6xl" : "max-w-4xl";
  const gridClass = columns === 2 ? "grid grid-cols-1 gap-8 sm:grid-cols-2" : "";

  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className={`mx-auto ${widthClass} px-4 py-14 sm:px-6 lg:px-8 ${gridClass} ${className}`}>
        {children}
      </div>
    </section>
  );
}
