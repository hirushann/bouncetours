// Plain JS (not .ts) so it loads on hosts where Next falls back to WASM SWC,
// e.g. Hostinger's glibc 2.28 servers, which can't compile a TypeScript config.

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
