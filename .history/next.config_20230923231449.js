/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      serverActions: true, 
    },
    images: {
      domains: ["i.ibb.co", "cdn.sanity.io"], 
    },
  };
  
  module.exports = nextConfig;
  