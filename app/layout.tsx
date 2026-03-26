import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartProvider from '@/lib/CartProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gogginspub.com'),
  title: 'Goggins of Monkstown | A South Dublin Institution Since 1935',
  description: 'Goggins of Monkstown is a third-generation family pub rooted in character, warmth and tradition. Known for a great pint, a classic Irish welcome and one of the best locations in South County Dublin.',
  keywords: 'Dublin pub, Monkstown, Irish pub, Goggins, South Dublin, traditional pub, Guinness, whiskey',
  authors: [{ name: 'Goggins of Monkstown' }],
  openGraph: {
    title: 'Goggins of Monkstown | A South Dublin Institution Since 1935',
    description: 'A third-generation family pub rooted in character, warmth and tradition.',
    url: 'https://gogginspub.com',
    siteName: 'Goggins of Monkstown',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goggins of Monkstown',
    description: 'A South Dublin institution since 1935',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://gogginspub.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BarOrPub',
              name: 'Goggins of Monkstown',
              description: 'A third-generation family pub rooted in character, warmth and tradition.',
              url: 'https://gogginspub.com',
              telephone: '+353-1-XXX-XXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '99 Monkstown Rd',
                addressLocality: 'Dún Laoghaire',
                addressRegion: 'Dublin',
                postalCode: 'A94 Y8D8',
                addressCountry: 'IE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '53.2931',
                longitude: '-6.1536',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '11:00',
                  closes: '23:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday'],
                  opens: '11:00',
                  closes: '00:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '12:30',
                  closes: '23:00',
                },
              ],
              foundingDate: '1935',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

