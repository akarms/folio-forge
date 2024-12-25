import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    unoptimized: true, // Required for static export with next/image
  },
  output: "export",
};

export default nextConfig;
