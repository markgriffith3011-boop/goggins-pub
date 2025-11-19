import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Goggins of Monkstown',
  description: 'Explore our gallery showcasing the interior, exterior, and atmosphere of Goggins of Monkstown.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

