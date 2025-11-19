import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/shop/cart'],
    },
    sitemap: 'https://gogginspub.com/sitemap.xml',
  }
}

