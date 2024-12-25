import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    unoptimized: true, // Required for static export if you're using the `next/image` component
  },
  output: "export",
  basePath: "/folio-forge", // Add your repository name here
  assetPrefix: "/folio-forge", // Add your repository name here
};

module.exports = nextConfig;
