import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Goggins of Monkstown',
  description: 'Get in touch with Goggins of Monkstown. Book a table, inquire about private events, or send us a message.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

