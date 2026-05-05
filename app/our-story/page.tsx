import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story | Goggins of Monkstown',
  description: 'Goggins of Monkstown has been a family-run pub on Monkstown Road since 1957. Now reopening under new family management.',
}

const timeline = [
  {
    year: '1957',
    text: 'Goggins opened on Monkstown Road as a family-run local. From the start it was a straightforward place — good pints, familiar faces, and a welcome that didn\'t need to try too hard.',
  },
  {
    year: '1960s – 80s',
    text: 'The bar expanded, the upstairs lounge was added, and Goggins settled into its role as a proper neighbourhood pub. It became the kind of place that hosted the big nights and the quiet ones equally well.',
  },
  {
    year: 'Late 1990s',
    text: 'The pub passed to the next generation, who renovated and ran it through its busiest years. For a long stretch Goggins was well-known across South Dublin — a reliable spot with a good atmosphere and a loyal crowd.',
  },
  {
    year: 'Recent years',
    text: 'Trade declined after 2020 and the pub has been closed for a period. It\'s a situation many Irish pubs have faced, and one the family is determined to turn around.',
  },
  {
    year: 'Today',
    text: 'Goggins is reopening under new family management. The aim is simple: restore what made the pub worth coming to in the first place, and give Monkstown back its local.',
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
            Est. 1957 &middot; Monkstown, Co. Dublin
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
              Goggins has been on Monkstown Road since 1957. It has been a family pub
              its entire life — passed down through generations, each putting their
              own mark on it while keeping the things that made it worth keeping.
            </p>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
              After a difficult few years, it is reopening under new family management.
              The intention is to get back to what Goggins has always been — a good
              local pub for a great part of Dublin.
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
                A Brief History
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
