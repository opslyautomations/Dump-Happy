import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141414",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#f26a21",
              marginRight: 16,
              display: "flex",
            }}
          />
          <div style={{ color: "#ffffff", fontSize: 34, fontWeight: 700, display: "flex" }}>
            Dump Happy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                color: "#f26a21",
                fontSize: 28,
                fontWeight: 600,
                marginTop: 20,
                display: "flex",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#f26a21", fontSize: 24, fontWeight: 700, display: "flex" }}>
            Fast. Reliable. Happy Dumping!
          </div>
          <div style={{ color: "#ffffff", fontSize: 24, fontWeight: 600, display: "flex" }}>
            (424) 356-4141
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
