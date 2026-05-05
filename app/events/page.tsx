import type { Metadata } from 'next'
import Link from 'next/link'
import { weeklyEvents, tagColours } from '@/data/events'

export const metadata: Metadata = {
  title: "What's On | Goggins of Monkstown",
  description: "See what's happening at Goggins of Monkstown — live music, quiz nights, trad sessions, sports and more every week.",
}

export default function Events() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[320px] flex items-end bg-pub-green-700">
        <div className="absolute inset-0 bg-pub-green-700" />
        <div className="relative z-10 container-custom pb-12 w-full">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-3">
            Weekly Programme
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-white">
            What&rsquo;s On
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white border-b border-pub-cream-200">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
            Something&rsquo;s happening at Goggins every night of the week. From Thursday quiz nights
            and Saturday live music to Sunday trad sessions — there&rsquo;s always a reason to visit.
          </p>
        </div>
      </section>

      {/* Weekly Events Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyEvents.map((event) => (
              <div
                key={event.day}
                className="border border-pub-cream-200 bg-white p-8 flex flex-col gap-4 hover:border-pub-wood-400 transition-colors duration-200"
              >
                <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-500">
                  {event.day}
                </p>
                <h2 className="font-serif text-2xl font-medium text-pub-green-700 leading-snug">
                  {event.name}
                </h2>
                <div className="w-10 h-px bg-pub-wood-400" />
                <p className="text-pub-green-600 font-light leading-relaxed text-sm flex-1">
                  {event.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-sans text-xs text-pub-wood-500 uppercase tracking-wide">
                    {event.time}
                  </span>
                  <span className={`font-sans text-xs px-3 py-1 uppercase tracking-wide ${tagColours[event.tag]}`}>
                    {event.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="bg-pub-green-700 py-20">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-4">
            Private Hire
          </p>
          <h2 className="font-serif text-4xl font-medium text-white mb-6">
            Want to Host a Private Event?
          </h2>
          <p className="text-white/80 font-light mb-10">
            Our upstairs spaces are available for private functions — birthdays, corporate evenings,
            sports screenings and more. Get in touch and we&rsquo;ll put together a package for you.
          </p>
          <Link href="/contact?type=booking" className="btn-outline-gold">
            Enquire Here &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
