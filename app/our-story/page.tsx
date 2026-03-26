import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story | Goggins of Monkstown',
  description: 'Discover the history of Goggins of Monkstown, a third-generation family pub that has been a South Dublin institution since 1935.',
}

export default function OurStory() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/goggins-interior.jpg"
          alt="Goggins of Monkstown"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            A Pub with History
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100 drop-shadow-md">
            Since 1935
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-pub-wood-700 leading-relaxed mb-6">
                Goggins of Monkstown began as a small local meeting place on the Crescent 
                and grew into one of Dublin&apos;s most recognisable suburban pubs. Through the 
                decades, it has remained a family-run business with a commitment to community, 
                hospitality and tradition.
              </p>
              <p className="text-lg text-pub-wood-700 leading-relaxed">
                Today, Goggins blends its heritage charm with a bright modern feel, serving 
                locals, sports fans, weekend strollers and visitors who appreciate a proper 
                Irish pub experience just minutes from the sea.
              </p>
            </div>

            {/* Timeline */}
            <div className="border-l-4 border-pub-green-700 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-pub-green-700 rounded-full border-4 border-white"></div>
                <div className="bg-pub-cream-100 p-6 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-pub-green-800 mb-2">
                    1935
                  </h3>
                  <p className="text-pub-wood-700">
                    Goggins opens on Monkstown Road, establishing itself as a local 
                    meeting place in the heart of the community.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-pub-green-700 rounded-full border-4 border-white"></div>
                <div className="bg-pub-cream-100 p-6 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-pub-green-800 mb-2">
                    1970s
                  </h3>
                  <p className="text-pub-wood-700">
                    Expanded bar area and added upstairs lounge, creating more space for 
                    gatherings and events.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-pub-green-700 rounded-full border-4 border-white"></div>
                <div className="bg-pub-cream-100 p-6 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-pub-green-800 mb-2">
                    2000s
                  </h3>
                  <p className="text-pub-wood-700">
                    Renovations retaining original features, preserving the pub&apos;s character 
                    while modernising facilities.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 bg-pub-green-700 rounded-full border-4 border-white"></div>
                <div className="bg-pub-cream-100 p-6 rounded-lg">
                  <h3 className="font-serif text-2xl font-bold text-pub-green-800 mb-2">
                    Today
                  </h3>
                  <p className="text-pub-wood-700">
                    A revitalised family-led third-generation pub, continuing the tradition 
                    of warm hospitality and community connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

