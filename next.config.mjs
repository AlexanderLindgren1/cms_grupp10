/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["a.storyblok.com"],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
};

export default nextConfig;
