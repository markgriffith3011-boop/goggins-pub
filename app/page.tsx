import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'The Perfect Pint',
    description: 'Renowned for a great Guinness pour and premium whiskeys.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M14 10h20l-2 30a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2L14 10z" />
        <path d="M15 18h18" />
        <path d="M20 10V6a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: 'Coastal Location',
    description: 'Overlooking Monkstown Crescent & the Dublin Bay coastline.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M4 34c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3" />
        <path d="M4 40c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3" />
        <circle cx="34" cy="14" r="5" />
      </svg>
    ),
  },
  {
    title: 'Heritage Interiors',
    description: 'Bright front bar & cosy snugs with traditional character.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M6 20 24 8l18 12v22H6V20z" />
        <path d="M18 42V28h12v14" />
        <path d="M6 20h36" />
      </svg>
    ),
  },
  {
    title: 'Private Function Rooms',
    description: 'Upstairs spaces perfect for events and celebrations.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M8 40V16l16-8 16 8v24" />
        <path d="M20 40V26h8v14" />
        <path d="M14 22h4M30 22h4M14 30h4M30 30h4" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[620px] md:h-[760px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior.jpg"
            alt="Goggins of Monkstown - traditional Irish pub exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        <div className="relative z-10 w-full">
          <div className="container-custom pb-16 md:pb-20">
            <div className="max-w-3xl">
              <p className="font-sans text-xs md:text-sm uppercase tracking-widest text-white/90 mb-4">
                Est. 1935 &middot; Monkstown, Co. Dublin
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-medium text-white mb-4 leading-tight">
                Goggins of Monkstown
              </h1>
              <p className="font-serif italic text-xl md:text-2xl text-white/90 mb-10 max-w-xl">
                A South Dublin institution since 1935.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/menu" className="btn-light">
                  Menus
                </Link>
                <Link href="/contact?type=booking" className="btn-light">
                  Make a Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Spirit of Goggins */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-500 mb-4">
              Welcome
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-pub-green-700 mb-6">
              The Spirit of Goggins
            </h2>
            <div className="ornament-divider"><span>&#10022;</span></div>
            <p className="text-base md:text-lg text-pub-green-600 leading-relaxed font-light">
              A warm welcome, a great pint and a touch of old-school Irish character.
              Goggins has been at the heart of Monkstown life for nearly a century —
              a place where locals gather, friends reconnect, and visitors discover
              a true Dublin pub experience.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="section-padding bg-pub-cream-100 border-t border-pub-cream-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex justify-center mb-5 text-pub-wood-500">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-pub-green-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-pub-green-600 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events Banner */}
      <section className="bg-pub-green-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-4">
              Celebrations &amp; Gatherings
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Private Events at Goggins
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-10 leading-relaxed font-light">
              Whether it&apos;s a birthday, corporate gathering or family celebration,
              our upstairs spaces provide the perfect setting with food, drink, and
              service options tailored to your group.
            </p>
            <Link href="/spaces" className="btn-outline-gold">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-500 mb-4">
              Reservations
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-pub-green-700 mb-4">
              Ready to Visit?
            </h2>
            <div className="ornament-divider"><span>&#10022;</span></div>
            <p className="text-base md:text-lg text-pub-green-600 mb-10 font-light">
              Book your table and experience the warmth of Goggins.
            </p>
            <Link href="/contact?type=booking" className="btn-primary">
              Book Your Table
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
