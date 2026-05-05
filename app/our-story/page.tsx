import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story | Goggins of Monkstown',
  description: 'Nearly seventy years of the same corner. The story of Goggins of Monkstown — a third-generation family pub on Monkstown Road since 1957.',
}

const timeline = [
  {
    year: '1957',
    text: 'Goggins first opened on Monkstown Road at a time when the village was a quieter, more working-class place — dockers, railway men, and families who\'d lived on the same streets for generations. The pub quickly became a fixture of daily life, the kind of place where you\'d stop in after a shift, catch up on the news, and know half the room by name.',
  },
  {
    year: '1970s',
    text: 'Monkstown was changing — young families moving in, the old trades giving way to a more suburban feel. Goggins grew with it. The bar was extended and an upstairs lounge added, giving regulars more room and making it a proper venue for celebrations, club nights and get-togethers that had no other home.',
  },
  {
    year: '2000s',
    text: 'A new era of renovation brought fresh energy without losing what made the place. The snugs stayed. The timber stayed. The second and third generations of the family kept the same warmth that had always defined it, while opening the doors to a new crowd — a more mixed, more lively Monkstown that had discovered what the locals always knew.',
  },
  {
    year: 'Today',
    text: 'Goggins is in good hands. Under new family management, it\'s gone back to its roots — live music at weekends, sport on the screens, a proper pint and a genuine welcome. Nearly seventy years on from that first opening, it\'s still the same pub at heart: a place where Monkstown comes together.',
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
              Goggins has been part of Monkstown life since 1957. That&apos;s nearly seventy years of locals pulling up a stool, of families marking occasions
              here, of the pub quietly becoming the kind of place a neighbourhood
              builds its memories around. Not many places can say that.
            </p>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
              It&apos;s a third-generation family pub, and it shows — in the welcome,
              in the way the regulars are known by name, and in the fact that for all
              the changes the years bring, walking into Goggins still feels like
              walking into somewhere that was expecting you.
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
                Nearly Seventy Years of Service
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
