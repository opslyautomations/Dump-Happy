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
      ? "bg-white/95 ring-1 ring-white/50 backdrop-blur-sm"
      : variant === "accent"
        ? "bg-white ring-4 ring-brand-orange/30 ring-offset-4 ring-offset-brand-black"
        : "bg-white";

  return (
    <div className={`flex flex-col rounded-2xl ${outerClass} ${compact ? "p-5" : "p-6 sm:p-8"} shadow-lg`}>
      <iframe
        src="https://api.opslyautomations.com/widget/form/yHX05gzuOaOrvBhU0tVt"
        id="inline-yHX05gzuOaOrvBhU0tVt"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Junk Removal Form"
        data-height="959"
        data-layout-iframe-id="inline-yHX05gzuOaOrvBhU0tVt"
        data-form-id="yHX05gzuOaOrvBhU0tVt"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Junk Removal Form"
        style={{ width: "100%", maxWidth: "480px", height: "959px", border: "none", borderRadius: "8px", display: "block", margin: "0 auto" }}
      />
      <Script src="https://api.opslyautomations.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
