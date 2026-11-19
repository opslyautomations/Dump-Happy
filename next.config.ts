import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Animated route changes via React <ViewTransition> (see app/layout.tsx).
    // Browsers without the View Transitions API just navigate normally.
    viewTransition: true,
  },
  async redirects() {
    return [
      // Search Console still has the previous site builder's sitemap on file.
      { source: "/sitemap.website.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
