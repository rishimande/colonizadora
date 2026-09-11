import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/arboreto",
        destination: "/arboreto-one-page",
        permanent: false,
      },
      {
        source: "/arboreto-ecoville",
        destination: "/arboreto-one-page",
        permanent: false,
      },
    ];
  },
};

export default withPayload(nextConfig);
