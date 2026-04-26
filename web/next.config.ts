import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep dev and build artifacts isolated to prevent manifest/chunk clashes.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next-prod",
};

export default nextConfig;
