/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:1337', 'localhost:1337', 'localhost'],
  },
  experimental: {
    // runtime: 'experimental-edge',
    appDir: true,
  },
}

module.exports = nextConfig
