/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: false, // desativa Partial Prerendering (evita o bug do clientReferenceManifest)
  },
};

export default nextConfig;
