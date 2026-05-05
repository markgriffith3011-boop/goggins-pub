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
    text: 'Joe\'s years. He extended the bar, added the upstairs lounge, and turned Goggins into a proper institution. GAA clubs meeting upstairs, christenings in the lounge, Friday nights three deep at the bar. The pub became the kind of place people talk about for the rest of their lives — and Joe was the man behind all of it.',
  },
  {
    year: '1980s – 90s',
    text: 'The roaring years under Joe\'s watch. Goggins was packed most nights — sport on the screens, live music at weekends, a crowd that spilled out onto Monkstown Road. The regulars became part of the furniture, the staff knew everyone\'s order, and the pub cemented its reputation as one of the best locals in South Dublin. Rarely quiet. Never dull.',
  },
  {
    year: 'Late 1990s',
    text: 'When Joe passed, his sons Maurice and Philip inherited their shares in Goggin & Co. Ltd. and took over running the pub together, with the rest of the family benefiting from the estate. The two brothers kept the place going with the same dedication Joe had shown for forty years.',
  },
  {
    year: 'Maurice alone',
    text: 'After the loss of his brother Philip, Maurice carried Goggins on his own. He\'d grown up in the pub, knew every corner of it, and kept it running with quiet determination through the years that followed.',
  },
  {
    year: 'Today',
    text: 'After two years with the doors closed, Mark and Kate are bringing Goggins back. It hasn\'t been the easy road — but then nothing worth doing usually is. They\'re reopening with the same belief Joe had in 1957: that Monkstown needs a proper local, and Goggins is it. The welcome is back. The pint is ready. Come in.',
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
              first opened the doors on Monkstown Road. Nearly seventy years, four
              generations of the same family, and more memories made here than anyone
              could count. Not many places can say that.
            </p>
            <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
              Now, after two years with the doors closed, Mark and Kate are bringing
              it back. The same pub, the same spirit, the same corner of Monkstown —
              just ready for the next chapter.
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
