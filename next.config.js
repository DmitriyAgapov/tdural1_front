/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:1337', 'localhost:1337', 'localhost', 'https://a.tdural1.ru'],
  },
  experimental: {
    // runtime: 'experimental-edge',
    appDir: true,
  },
}

module.exports = nextConfig
