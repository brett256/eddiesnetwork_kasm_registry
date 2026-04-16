/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Eddies Network',
    description: 'My Custom Build Desktops',
    icon: '/img/network.svg',
    listUrl: 'https://github.com/brett256/eddiesnetwork_kasm_registry/',
    contactUrl: 'https://github.com/brett256/eddiesnetwork_kasm_registry/',
  },
  reactStrictMode: true,
  basePath: '/eddiesnetwork_kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
