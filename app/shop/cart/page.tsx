'use client'

import { useCart } from '@/lib/CartProvider'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container-custom section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold text-pub-green-800 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-pub-wood-700 mb-8">
              Start adding items to your cart!
            </p>
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleCheckout = () => {
    // TODO: Integrate with payment processor
    console.log('Checkout:', items)
    alert('Checkout functionality coming soon!')
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-pub-green-800 mb-8">
            Shopping Cart
          </h1>

          <div className="space-y-4 mb-8">
            {items.map((item, idx) => (
              <div
                key={`${item.id}-${item.size || idx}`}
                className="bg-pub-cream-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-1">
                    {item.name}
                  </h3>
                  {item.size && (
                    <p className="text-sm text-pub-wood-600">Size: {item.size}</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                      className="w-8 h-8 rounded-md border border-pub-wood-300 hover:bg-pub-wood-200 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                      className="w-8 h-8 rounded-md border border-pub-wood-300 hover:bg-pub-wood-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-pub-green-700 w-24 text-right">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-pub-wood-500 hover:text-red-600 transition-colors"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-pub-cream-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-pub-wood-700">Total:</span>
              <span className="text-2xl font-bold text-pub-green-800">
                €{getTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={handleCheckout} className="btn-primary flex-1">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="btn-outline border-pub-wood-400 text-pub-wood-700 hover:bg-pub-wood-600 hover:text-white"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/shop" className="text-pub-green-700 hover:text-pub-green-800 font-medium">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

