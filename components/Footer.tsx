import Link from 'next/link'
import hoursData from '@/data/hours.json'

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
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
    <footer className="bg-pub-green-700 text-white/80">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Address & Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-5">Visit Us</h3>
            <address className="not-italic space-y-2 font-light">
              <p>1–4 Monkstown Crescent</p>
              <p>Monkstown, Co. Dublin</p>
              <p>Ireland</p>
              <p className="mt-4">
                <a href="tel:+353-1-XXX-XXXX" className="hover:text-white transition-colors">
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
            <h3 className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-5">Opening Hours</h3>
            <ul className="space-y-1 text-sm font-light">
              {hours.map((hour, idx) => (
                <li key={idx}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Links & Social */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-pub-wood-300 mb-5">Connect</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 font-light">
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
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-white/60 text-xs font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Goggins of Monkstown. All rights reserved.</p>
          <p className="mt-2 font-serif italic">A South Dublin institution since 1935.</p>
        </div>
      </div>
    </footer>
  )
}
