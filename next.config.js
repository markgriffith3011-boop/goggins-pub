/** @type {import('next').NextConfig} */
// The site itself is the static page in /public (index.html + content.js + img/).
// Next.js only serves it at "/" and sends old page addresses to the right section.
const nextConfig = {
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/index.html' }] }
  },
  async redirects() {
    return [
      { source: '/our-story', destination: '/#story', permanent: true },
      { source: '/menu', destination: '/#menu', permanent: true },
      { source: '/events', destination: '/#whatson', permanent: true },
      { source: '/spaces', destination: '/#book', permanent: true },
      { source: '/contact', destination: '/#book', permanent: true },
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/shop', destination: '/', permanent: true },
      { source: '/shop/:path*', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
