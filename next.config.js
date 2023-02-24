/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a.tdural1.ru", 'a.tdural1.ru', 'tdural1.ru', 'https://a.tdural1.ru'],
  },
  experimental: {
    // runtime: 'experimental-edge',
    appDir: true,
  },
}

module.exports = nextConfig
