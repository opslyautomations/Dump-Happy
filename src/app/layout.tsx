import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PromoPopup } from "@/components/PromoPopup";
import { RevealObserver } from "@/components/RevealObserver";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Junk Removal in Los Angeles`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Locally owned junk removal and clean-outs across LA's Westside, South Bay, and Central LA. Load-based pricing, legal disposal, no hidden fees.",
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-brand-ink">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <PromoPopup />
        <RevealObserver />
      </body>
    </html>
  );
}
