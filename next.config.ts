import type { NextConfig } from "next";

const basePath = "/portfolio";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProduction && { output: "export", basePath }),
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? basePath : "",
  },
};

export default nextConfig;
