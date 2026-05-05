import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story | Goggins of Monkstown',
  description: 'Some pubs are just places to drink. Goggins is a place to belong. The story of a third-generation family pub on Monkstown Road since 1935.',
}

const timeline = [
  {
    year: '1935',
    text: 'Goggins opens its doors on Monkstown Road. Monkstown is a village of fishermen, railway workers and seaside day-trippers. The pub becomes what all good pubs become: the living room the neighbourhood never knew it needed.',
  },
  {
    year: '1970s',
    text: 'A growing community calls for more room. The bar expands, the upstairs lounge takes shape. More tables, more rounds, more nights that stretch well past closing time — at least in memory.',
  },
  {
    year: '2000s',
    text: 'Careful renovations keep the bones intact. The worn timber, the snug corners, the particular slant of afternoon light through the front windows — none of it touched. Some things are worth preserving exactly as they are.',
  },
  {
    year: 'Today',
    text: 'The third generation takes the reins. The pints are as good as they\'ve ever been, the welcome is the same, and the door on Monkstown Road is still open to anyone who walks through it.',
  },
]

export default function OurStory() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] flex items-end overflow-hidden">
        <Image
          src="/images/goggins-storefront.jpg"
          alt="Goggins of Monkstown exterior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />
        <div className="relative z-10 container-custom pb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-white/80 mb-3">
            Est. 1935 &middot; Monkstown, Co. Dublin
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-white">
            A Pub with History
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="ornament-divider mb-10"><span>&#10022;</span></div>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed mb-6">
              Some pubs are just places to drink. Goggins is a place to belong.
              Tucked into the curve of Monkstown Road, a short walk from the sea, it
              has been holding court since 1935 — through booms and recessions, through
              funerals and christenings, through the quiet Tuesday nights that are
              somehow the best ones.
            </p>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
              Three generations of the same family. Nearly a century of the same corner.
              The faces change, the pints stay cold, and the door is always open.
            </p>
          </div>
        </div>
      </section>

      {/* Interior photo break */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/goggins-interior.jpg"
          alt="Goggins interior"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Timeline */}
      <section className="section-padding bg-pub-cream-100">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-500 mb-3">
                Our History
              </p>
              <h2 className="font-serif text-4xl font-medium text-pub-green-700">
                Nearly a Century of Service
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-pub-wood-300" />

              <div className="space-y-10">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-8 items-start">
                    {/* Dot */}
                    <div className="relative flex-shrink-0 w-12 flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-pub-wood-500 border-2 border-white mt-1.5 z-10" />
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <h3 className="font-serif text-2xl font-medium text-pub-green-700 mb-2">
                        {item.year}
                      </h3>
                      <p className="text-pub-green-600 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
