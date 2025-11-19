import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/data/products.json'

export const metadata: Metadata = {
  title: 'Shop | Goggins of Monkstown',
  description: 'Shop Goggins merchandise, gift cards, and exclusive products.',
}

export default function Shop() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pub-green-900 to-pub-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Shop
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100">
            Take a piece of Goggins home
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.products.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="bg-pub-cream-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* TODO: Replace with actual product images */}
                <div className="aspect-square bg-pub-wood-200 flex items-center justify-center text-6xl">
                  🎁
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-pub-wood-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-semibold text-pub-green-700">
                    {product.minPrice ? `From €${product.minPrice}` : `€${product.price}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

