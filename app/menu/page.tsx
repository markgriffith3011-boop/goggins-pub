import type { Metadata } from 'next'
import menuData from '@/data/menu.json'

export const metadata: Metadata = {
  title: 'Menu | Goggins of Monkstown',
  description: 'Browse our menu featuring pub classics, snacks, and traditional Irish fare.',
}

export default function Menu() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[320px] flex items-end bg-pub-green-700">
        <div className="absolute inset-0 bg-pub-green-700" />
        <div className="relative z-10 container-custom pb-12 w-full">
          <p className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-3">
            Food &amp; Drink
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-white">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white border-b border-pub-cream-200">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-pub-green-600 font-light leading-relaxed">
            Classic pub fare with Irish character. Menu items subject to availability —
            please ask our staff about dietary requirements.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-16">
            {menuData.sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                {/* Section heading with ornamental rule */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-pub-cream-200" />
                  <h2 className="font-serif text-3xl font-medium text-pub-green-700 text-center whitespace-nowrap">
                    {section.name}
                  </h2>
                  <div className="flex-1 h-px bg-pub-cream-200" />
                </div>

                <div className="space-y-0 divide-y divide-pub-cream-200">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-baseline gap-6 py-5"
                    >
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-medium text-pub-green-700 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-pub-green-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-sans text-sm font-medium text-pub-wood-500 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
