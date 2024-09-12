/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["a.storyblok.com"],
        formats: ["image/avif", "image/webp"],
      },
      
      swcMinify:false
};

export default nextConfig;
