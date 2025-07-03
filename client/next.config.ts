import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "img.freepik.com",
      "freepik.com",
      "cdn-icons-png.freepik.com",
      "images.unsplash.com",
    ], // <- add your domain here
  },
};

export default nextConfig;
