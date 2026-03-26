import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spaces | Goggins of Monkstown',
  description: 'Explore our spaces at Goggins of Monkstown - from the warm front bar to cosy snugs and private function rooms.',
}

const spaces = [
  {
    name: 'Front Bar',
    description: 'Warm wood, classic snugs and natural daylight overlooking Monkstown Road. Perfect for casual drinks and walk-ins.',
    capacity: null,
    image: '🍺',
  },
  {
    name: 'The Snug',
    description: 'A cosy, intimate corner ideal for a quiet pint or small gatherings.',
    capacity: null,
    image: '🪑',
  },
  {
    name: 'Upstairs Lounge',
    description: 'Bright flexible room suitable for birthdays, small events, corporate drinks or family occasions.',
    capacity: '25–40 people',
    image: '🎉',
  },
  {
    name: 'Private Room (Upstairs)',
    description: 'A more enclosed private area for functions and special events.',
    capacity: '12–20 people',
    image: '🏛️',
  },
]

export default function Spaces() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pub-green-900 to-pub-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Our Spaces
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100">
            Find the perfect setting for your visit
          </p>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaces.map((space, idx) => (
              <div
                key={idx}
                className="bg-pub-cream-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* TODO: Replace emoji with actual images */}
                <div className="h-64 bg-pub-wood-200 flex items-center justify-center text-8xl">
                  {space.image}
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-3xl font-bold text-pub-green-800 mb-3">
                    {space.name}
                  </h2>
                  <p className="text-pub-wood-700 mb-4 leading-relaxed">
                    {space.description}
                  </p>
                  {space.capacity && (
                    <p className="text-pub-wood-600 font-medium mb-4">
                      Capacity: {space.capacity}
                    </p>
                  )}
                  <Link
                    href={`/contact?type=booking&space=${encodeURIComponent(space.name)}`}
                    className="btn-primary inline-block"
                  >
                    Enquire to Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

