/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/teams',
        destination: '/teams',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig 