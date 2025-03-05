import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mnocpdchroawnkdbvqoi.supabase.co",
        pathname: "/storage/v1/object/public/travels-images/**",
      },
    ],
  },

};

export default nextConfig;
