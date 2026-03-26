import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-end justify-center pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-pub-green-900 to-pub-green-700">
          <Image
            src="/images/goggins-storefront.jpg"
            alt="Goggins of Monkstown — classic navy facade with gold lettering on Monkstown Road"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">
            Goggins of Monkstown
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pub-cream-100">
            A South Dublin institution since 1935.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=booking" className="btn-primary">
              Book a Table
            </Link>
            <Link href="/spaces" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-pub-green-800">
              Explore Our Spaces
            </Link>
          </div>
        </div>
      </section>

      {/* The Spirit of Goggins */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-pub-green-800 mb-6">
              The Spirit of Goggins
            </h2>
            <p className="text-lg text-pub-wood-700 leading-relaxed">
              A warm welcome, a great pint and a touch of old-school Irish character. 
              Goggins has been at the heart of Monkstown life for nearly a century — 
              a place where locals gather, friends reconnect, and visitors discover 
              a true Dublin pub experience.
            </p>
          </div>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <Image
          src="/images/goggins-interior.jpg"
          alt="Goggins of Monkstown interior — leather booths, herringbone floors and warm ambient lighting"
          fill
          className="object-cover object-center"
        />
      </section>

      {/* Highlights Strip */}
      <section className="section-padding bg-pub-cream-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍺</div>
              <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-2">
                The Perfect Pint
              </h3>
              <p className="text-pub-wood-700 text-sm">
                Renowned for a great Guinness pour and premium whiskeys.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-2">
                Coastal Location
              </h3>
              <p className="text-pub-wood-700 text-sm">
                Overlooking Monkstown Road & the Dublin Bay coastline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-2">
                Heritage Interiors
              </h3>
              <p className="text-pub-wood-700 text-sm">
                Bright front bar & cosy snugs with traditional character.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-serif text-xl font-bold text-pub-green-800 mb-2">
                Private Function Rooms
              </h3>
              <p className="text-pub-wood-700 text-sm">
                Upstairs spaces perfect for events and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Call-Out */}
      <section className="section-padding bg-pub-green-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Private Events at Goggins
            </h2>
            <p className="text-lg text-pub-cream-100 mb-8 leading-relaxed">
              Whether it&apos;s a birthday, corporate gathering or family celebration, 
              our upstairs spaces provide the perfect setting with food, drink, and 
              service options tailored to your group.
            </p>
            <Link href="/spaces" className="btn-primary bg-white text-pub-green-800 hover:bg-pub-cream-100">
              Learn More About Our Spaces
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-pub-green-800 mb-4">
            Ready to Visit?
          </h2>
          <p className="text-lg text-pub-wood-700 mb-8">
            Book your table and experience the warmth of Goggins.
          </p>
          <Link 
            href="/contact?type=booking" 
            className="btn-primary inline-block"
          >
            Book Your Table
          </Link>
        </div>
      </section>
    </>
  )
}

