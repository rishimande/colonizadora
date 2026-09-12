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
      {
        source: "/claudino",
        destination: "/claudino-one-page",
        permanent: false,
      },
      {
        source: "/claudino-francio",
        destination: "/claudino-one-page",
        permanent: false,
      },
      {
        source: "/lucca",
        destination: "/LUCCA-one-page",
        permanent: false,
      },
      {
        source: "/lucca-residencial",
        destination: "/LUCCA-one-page",
        permanent: false,
      },
      {
        source: "/residencial-lucca",
        destination: "/LUCCA-one-page",
        permanent: false,
      },
    ];
  },
};

export default withPayload(nextConfig);
