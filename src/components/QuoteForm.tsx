export function QuoteForm({
  compact = false,
}: {
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
}) {
  return (
    <div className={`flex flex-col rounded-2xl bg-white ${compact ? "p-5" : "p-6 sm:p-8"} shadow-lg`}>
      {!compact && (
        <div className="mb-4">
          <h2 className="text-xl font-extrabold text-brand-black">Get a Free Quote</h2>
          <p className="mt-1 text-sm text-brand-gray">
            No obligation. We&apos;ll text or call you back fast.
          </p>
        </div>
      )}

      <iframe
        src="https://formforge-2.vibepreview.com/embed-form"
        title="Dump Happy — Free Quote Form"
        style={{ width: "100%", maxWidth: "480px", height: "820px", border: 0, display: "block", margin: "0 auto" }}
        loading="lazy"
      />
    </div>
  );
}
