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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-pub-green-800">
              {/* TODO: Replace with actual logo image */}
              <span className="text-3xl">🍺</span>
              <span className="ml-2">Goggins</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-pub-green-700 border-b-2 border-pub-green-700'
                    : 'text-pub-wood-700 hover:text-pub-green-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-pub-wood-700 hover:text-pub-green-700"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          <div className="md:hidden py-4 border-t border-pub-wood-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-pub-green-700'
                    : 'text-pub-wood-700 hover:text-pub-green-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

