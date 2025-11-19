import Link from 'next/link'
import hoursData from '@/data/hours.json'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
]

const formatHours = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  return dayNames.map((day, idx) => {
    const dayKey = days[idx] as keyof typeof hoursData
    const hours = hoursData[dayKey]
    return `${day}: ${hours.open} - ${hours.close}`
  })
}

export default function Footer() {
  const hours = formatHours()

  return (
    <footer className="bg-pub-wood-900 text-pub-cream-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Address & Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Visit Us</h3>
            <address className="not-italic text-pub-cream-200 space-y-2">
              <p>1–4 Monkstown Crescent</p>
              <p>Monkstown, Co. Dublin</p>
              <p>Ireland</p>
              <p className="mt-4">
                <a href="tel:+353-1-XXX-XXXX" className="hover:text-white transition-colors">
                  {/* TODO: Replace with actual phone number */}
                  (01) XXX XXXX
                </a>
              </p>
              <p>
                <a href="mailto:info@gogginspub.ie" className="hover:text-white transition-colors">
                  info@gogginspub.ie
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Opening Hours</h3>
            <ul className="space-y-1 text-pub-cream-200 text-sm">
              {hours.map((hour, idx) => (
                <li key={idx}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Links & Social */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:opacity-75 transition-opacity"
                  aria-label={social.name}
                >
                  {/* TODO: Replace with actual social icons */}
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-pub-cream-200">
              <Link href="/our-story" className="block hover:text-white transition-colors">
                Our Story
              </Link>
              <Link href="/spaces" className="block hover:text-white transition-colors">
                Book a Space
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-pub-wood-700 text-center text-pub-cream-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Goggins of Monkstown. All rights reserved.</p>
          <p className="mt-2">A South Dublin institution since 1935.</p>
        </div>
      </div>
    </footer>
  )
}

