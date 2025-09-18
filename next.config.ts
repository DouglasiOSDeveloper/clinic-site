// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: false, // <- desativa Partial Prerendering e evita o erro do clientReferenceManifest
  },
};

export default nextConfig;
