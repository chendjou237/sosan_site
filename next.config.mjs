/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
    ],
  },
};

export default nextConfig;
