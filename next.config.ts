import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export',
  basePath: '/Hon-Nhan-Cong-Giao',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
