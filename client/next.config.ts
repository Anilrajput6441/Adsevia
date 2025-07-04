import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "img.freepik.com",
      "freepik.com",
      "cdn-icons-png.freepik.com",
      "images.unsplash.com",
      "logowik.com",
      "b2210413.smushcdn.com",
      "cdn.prod.website-files.com",
      "www.serendipiaagency.com",
      "images.rawpixel.com",
    ], // <- add your domain here
  },
};

export default nextConfig;
