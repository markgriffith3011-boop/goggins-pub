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
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pub-green-900 to-pub-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100">
            Classic pub fare with Irish character
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {menuData.sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="font-serif text-4xl font-bold text-pub-green-800 mb-8 text-center">
                  {section.name}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-pub-cream-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-2xl font-bold text-pub-green-800">
                          {item.name}
                        </h3>
                        <span className="text-lg font-semibold text-pub-wood-700">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-pub-wood-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="max-w-4xl mx-auto mt-12 text-center text-pub-wood-600 italic">
            <p>
              {/* TODO: Add menu update note or dietary information */}
              Menu items subject to availability. Please ask our staff about dietary requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

