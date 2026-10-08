import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Search Console still has the previous site builder's sitemap on file.
      { source: "/sitemap.website.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
