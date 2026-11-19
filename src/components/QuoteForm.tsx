import Script from "next/script";

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
      ? "bg-white/95 ring-1 ring-white/20 backdrop-blur-sm"
      : variant === "accent"
        ? "bg-white ring-4 ring-brand-orange/40 ring-offset-4 ring-offset-transparent"
        : "bg-white ring-1 ring-black/5";

  return (
    <div className={`flex flex-col rounded-[1.75rem] ${outerClass} ${compact ? "p-5" : "p-6 sm:p-8"} shadow-2xl shadow-black/20`}>
      <iframe
        src="https://api.opslyautomations.com/widget/form/rOmRiW4RqH7y6tfv9QDo"
        id="inline-rOmRiW4RqH7y6tfv9QDo"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Junk Removal Form - Copy"
        data-height="959"
        data-layout-iframe-id="inline-rOmRiW4RqH7y6tfv9QDo"
        data-form-id="rOmRiW4RqH7y6tfv9QDo"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Junk Removal Form - Copy"
        style={{ width: "100%", height: "959px", border: "none", borderRadius: "8px", display: "block" }}
      />
      <Script src="https://api.opslyautomations.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
