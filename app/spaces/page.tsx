import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Spaces | Goggins of Monkstown',
  description: 'Explore our spaces at Goggins of Monkstown — from the warm front bar to cosy snugs and private function rooms.',
}

const spaces = [
  {
    name: 'Front Bar',
    description: 'Warm wood, classic snugs and natural daylight overlooking Monkstown Road. The heart of the pub — perfect for casual drinks and walk-ins.',
    capacity: null,
    image: '/images/hero-interior.jpg',
    imageAlt: 'Goggins front bar interior with banquette seating and warm lighting',
  },
  {
    name: 'The Snug',
    description: 'A cosy, intimate corner ideal for a quiet pint or small gatherings away from the main bar.',
    capacity: null,
    image: '/images/goggins-interior.jpg',
    imageAlt: 'Goggins interior — cosy snug area',
  },
  {
    name: 'Upstairs Lounge',
    description: 'Bright, flexible room suitable for birthdays, small events, corporate drinks or family occasions. Can be arranged to suit your group.',
    capacity: '25–40 people',
    image: '/images/goggins-storefront.jpg',
    imageAlt: 'Goggins of Monkstown exterior',
  },
  {
    name: 'Private Room',
    description: 'A more enclosed private area upstairs for functions and special events. Tailored food and drink packages available on request.',
    capacity: '12–20 people',
    image: '/images/Goggins Front Pic.jpg',
    imageAlt: 'Goggins of Monkstown front',
  },
]

export default function Spaces() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[320px] flex items-end bg-pub-green-700">
        <div className="absolute inset-0 bg-pub-green-700" />
        <div className="relative z-10 container-custom pb-12 w-full">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-3">
            Private Hire &amp; Events
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-white">
            Our Spaces
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white border-b border-pub-cream-200">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
            From a casual pint at the bar to a fully catered private event upstairs —
            Goggins has the right space for every occasion.
          </p>
        </div>
      </section>

      {/* Spaces */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-20">
            {spaces.map((space, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${
                  idx % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-72 lg:h-auto min-h-[320px]">
                  <Image
                    src={space.image}
                    alt={space.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="bg-pub-cream-100 p-10 lg:p-14 flex flex-col justify-center">
                  {space.capacity && (
                    <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-500 mb-3">
                      Capacity: {space.capacity}
                    </p>
                  )}
                  <h2 className="font-serif text-4xl font-medium text-pub-green-700 mb-4">
                    {space.name}
                  </h2>
                  <div className="w-12 h-px bg-pub-wood-400 mb-6" />
                  <p className="text-pub-green-600 font-light leading-relaxed mb-8">
                    {space.description}
                  </p>
                  <div>
                    <Link
                      href={`/contact?type=booking&space=${encodeURIComponent(space.name)}`}
                      className="btn-primary"
                    >
                      Enquire to Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-pub-green-700 py-20">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl font-medium text-white mb-6">
            Planning Something Special?
          </h2>
          <p className="text-white/80 font-light mb-10">
            Contact us and we&apos;ll put together a package that works for your group.
          </p>
          <Link href="/contact?type=booking" className="btn-outline-gold">
            Make an Enquiry
          </Link>
        </div>
      </section>
    </div>
  )
}
