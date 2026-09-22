import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Preserve Unsplash and allow all HTTPS domains for remote PNGs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Ensure PNG formats are prioritized by Next.js Image Optimization
    formats: ["image/webp", "image/avif"],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
