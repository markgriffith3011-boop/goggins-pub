import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Story | Goggins of Monkstown',
  description: 'Nearly seventy years of the same corner. The story of Goggins of Monkstown — a third-generation family pub on Monkstown Road since 1957.',
}

const timeline = [
  {
    year: '1957',
    text: 'Joe Keegan founded Goggins on Monkstown Road, trading as Goggin & Co. Ltd. Monkstown was a quieter, more working-class village back then, and Joe built something that fitted it perfectly — a proper local where you knew the faces, the banter was good, and you never had to explain how you took your pint.',
  },
  {
    year: '1960s – 80s',
    text: 'Joe\'s years — and they were good ones. He extended the bar, added the upstairs lounge, and turned Goggins into a proper institution. GAA clubs upstairs, christenings in the lounge, Friday nights three deep at the bar. Joe made it the kind of pub people talk about for the rest of their lives.',
  },
  {
    year: '1980s – 90s',
    text: 'The roaring years. Goggins was packed most nights — sport on the screens, live music at weekends, a crowd that regularly spilled onto Monkstown Road. The regulars were part of the furniture, the staff knew everyone\'s order, and the pub had cemented itself as one of the best locals in South Dublin. Rarely quiet. Never dull.',
  },
  {
    year: 'Late 1990s',
    text: 'Maurice took over from Joe and put his own stamp on the place with a full renovation — modernising where it needed it while keeping everything that gave Goggins its character. The timber stayed. The snugs stayed. The welcome stayed.',
  },
  {
    year: '2020 onwards',
    text: 'Like many pubs, Goggins felt the weight of the years after 2020. Trade declined, the doors eventually closed, and the pub sat quiet for the first time in over sixty years.',
  },
  {
    year: 'Today',
    text: 'Mark and Kate are bringing Goggins back. They grew up knowing what this pub meant to Monkstown — and they\'re not willing to let it go. The renovation is underway, the welcome is being rebuilt, and the pint will be worth the wait. Some things are too good to leave behind.',
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
              Goggins has been part of Monkstown life since 1957, when Joe Keegan
              first opened the doors on Monkstown Road. Nearly seventy years of the
              same corner, the same warm welcome, and more memories made here than
              anyone could count. Not many places can say that.
            </p>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
              The pub has been through quiet periods before and come back stronger.
              Mark and Kate are making sure this time is no different.
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
