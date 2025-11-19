'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import productsData from '@/data/products.json'
import { useCart } from '@/lib/CartProvider'
import { useState } from 'react'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = productsData.products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-pub-green-800 mb-4">
            Product Not Found
          </h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    })
    // TODO: Add toast notification
    alert('Added to cart!')
  }

  return (
    <div className="bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-pub-wood-200 rounded-lg overflow-hidden flex items-center justify-center text-9xl">
              {/* TODO: Replace with actual product image */}
              🎁
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-pub-green-800 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-pub-wood-700 mb-6">
                {product.minPrice ? `From €${product.minPrice}` : `€${product.price}`}
              </p>
              <p className="text-lg text-pub-wood-700 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-pub-wood-700 mb-2">
                    Size
                  </label>
                  <div className="flex gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 rounded-md font-medium transition-colors ${
                          selectedSize === size
                            ? 'border-pub-green-700 bg-pub-green-700 text-white'
                            : 'border-pub-wood-300 text-pub-wood-700 hover:border-pub-green-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <button onClick={handleAddToCart} className="btn-primary w-full md:w-auto">
                Add to Cart
              </button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-pub-wood-200">
                <p className="text-sm text-pub-wood-600">
                  {/* TODO: Add shipping info, return policy, etc. */}
                  Free shipping on orders over €50. Returns accepted within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

