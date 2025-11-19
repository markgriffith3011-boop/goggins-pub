'use client'

import { useState } from 'react'
import Image from 'next/image'

// TODO: Replace with actual gallery images
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', alt: 'Pub exterior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Bar interior' },
  { id: 3, src: 'https://images.unsplash.com/photo-1552569973-ffaac7400f87?w=800&q=80', alt: 'Cozy corner' },
  { id: 4, src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80', alt: 'Guinness pour' },
  { id: 5, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80', alt: 'Whiskey selection' },
  { id: 6, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Pub atmosphere' },
  { id: 7, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'Traditional decor' },
  { id: 8, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', alt: 'Monkstown Crescent' },
  { id: 9, src: 'https://images.unsplash.com/photo-1552569973-ffaac7400f87?w=800&q=80', alt: 'Snug area' },
  { id: 10, src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80', alt: 'Function room' },
  { id: 11, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80', alt: 'Dublin Bay view' },
  { id: 12, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Evening atmosphere' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pub-green-900 to-pub-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100">
            A glimpse into life at Goggins
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-pub-cream-200 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ''}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt || ''}
              fill
              className="object-contain"
            />
          </div>
          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-pub-cream-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              const currentIdx = galleryImages.findIndex((img) => img.id === selectedImage)
              const prevIdx = currentIdx > 0 ? currentIdx - 1 : galleryImages.length - 1
              setSelectedImage(galleryImages[prevIdx].id)
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-pub-cream-200 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              const currentIdx = galleryImages.findIndex((img) => img.id === selectedImage)
              const nextIdx = currentIdx < galleryImages.length - 1 ? currentIdx + 1 : 0
              setSelectedImage(galleryImages[nextIdx].id)
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

