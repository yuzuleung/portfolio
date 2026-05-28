import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  outputFileTracingRoot: path.dirname(new URL(import.meta.url).pathname),
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_PAGES === "true" ? "/portfolio" : ""
  },
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        basePath: "/portfolio",
        assetPrefix: "/portfolio/"
      }
    : {})
};

export default nextConfig;
