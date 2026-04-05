'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import CartIcon from './CartIcon'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/spaces', label: 'Spaces' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/menu', label: 'Menu' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pub-cream-200">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-pub-green-700 tracking-wide">
              Goggins
            </span>
            <span className="hidden sm:inline font-serif text-xs text-pub-wood-500 ml-2 uppercase tracking-widest">
              of Monkstown
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative group ${
                  pathname === link.href ? 'text-pub-wood-500' : 'hover:text-pub-wood-500'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-pub-wood-500 transition-transform duration-200 origin-left ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side: Cart + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <CartIcon />
            <Link href="/contact?type=booking" className="btn-primary py-2.5 px-6 text-xs">
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <CartIcon />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-pub-green-700 hover:text-pub-wood-500"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-pub-cream-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 nav-link ${
                  pathname === link.href ? 'text-pub-wood-500' : 'hover:text-pub-wood-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?type=booking"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center mt-4"
            >
              Book a Table
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
