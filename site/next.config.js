/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Eddies Network',
    description: 'My Custom Build Desktops',
    icon: '/eddiesnetwork_kasm_registry/1.0/img/network.svg',  // 👈 must include full path
    listUrl: 'https://brett256.github.io/eddiesnetwork_kasm_registry/',
    contactUrl: 'https://github.com/brett256/eddiesnetwork_kasm_registry/issues',
  },
  reactStrictMode: true,
  basePath: '/eddiesnetwork_kasm_registry/1.0',  // 👈 always 1.0 — CI replaces this
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig