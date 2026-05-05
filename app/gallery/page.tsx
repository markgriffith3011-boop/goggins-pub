'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  { id: 1, src: '/images/Goggins Front Pic.jpg', alt: 'Goggins of Monkstown' },
  { id: 2, src: '/images/goggins-storefront.jpg', alt: 'Goggins exterior' },
  { id: 3, src: '/images/goggins-interior.jpg', alt: 'Goggins interior' },
  { id: 4, src: '/images/hero-interior.jpg', alt: 'Goggins bar' },
  { id: 5, src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80', alt: 'Guinness pour' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80', alt: 'Whiskey selection' },
  { id: 7, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Pub atmosphere' },
  { id: 8, src: 'https://images.unsplash.com/photo-1552569973-ffaac7400f87?w=800&q=80', alt: 'Snug area' },
  { id: 9, src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', alt: 'Evening atmosphere' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const selectedIdx = galleryImages.findIndex((img) => img.id === selectedImage)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[320px] flex items-end bg-pub-green-700">
        <div className="absolute inset-0 bg-pub-green-700" />
        <div className="relative z-10 container-custom pb-12 w-full">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-3">
            Photography
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-white">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                className={`relative cursor-pointer overflow-hidden bg-pub-cream-200 group ${
                  idx === 0 ? 'col-span-2 md:col-span-2 row-span-2 aspect-[4/3]' : 'aspect-square'
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-4xl leading-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIdx]?.src || ''}
              alt={galleryImages[selectedIdx]?.alt || ''}
              fill
              className="object-contain"
            />
          </div>
          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-5xl leading-none"
            onClick={(e) => {
              e.stopPropagation()
              const prev = selectedIdx > 0 ? selectedIdx - 1 : galleryImages.length - 1
              setSelectedImage(galleryImages[prev].id)
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          {/* Next */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors text-5xl leading-none"
            onClick={(e) => {
              e.stopPropagation()
              const next = selectedIdx < galleryImages.length - 1 ? selectedIdx + 1 : 0
              setSelectedImage(galleryImages[next].id)
            }}
            aria-label="Next"
          >
            ›
          </button>
          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-sans text-xs tracking-widest uppercase">
            {selectedIdx + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </div>
  )
}
