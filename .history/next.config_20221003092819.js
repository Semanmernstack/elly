/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
              "image.shutterstock.com",
              "m.media-amazon.com", 

            ],
  },
}

module.exports = nextConfig
