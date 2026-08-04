export function QuoteForm({
  compact = false,
  variant = "card",
}: {
  compact?: boolean;
  variant?: "card" | "glass" | "accent";
  defaultService?: string;
  defaultCity?: string;
}) {
  const outerClass =
    variant === "glass"
      ? "bg-white/95 ring-1 ring-white/50 backdrop-blur-sm"
      : variant === "accent"
        ? "bg-white ring-4 ring-brand-orange/30 ring-offset-4 ring-offset-brand-black"
        : "bg-white";

  return (
    <div className={`flex flex-col rounded-2xl ${outerClass} ${compact ? "p-5" : "p-6 sm:p-8"} shadow-lg`}>
      <iframe
        src="https://formforge-2.vibepreview.com/embed-form"
        title="Dump Happy — Free Quote Form"
        style={{ width: "100%", maxWidth: "480px", height: "820px", border: 0, display: "block", margin: "0 auto" }}
        loading="lazy"
      />
    </div>
  );
}
