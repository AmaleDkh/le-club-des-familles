import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
        pathname: "/**",
        // protocol: "http",
        // hostname: "le-club-des-familles.local",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "amale.manachem.fr",
        pathname: "/**",
      },
    ],
    domains: ["amale.manachem.fr"],
  },
};

module.exports = nextConfig;
