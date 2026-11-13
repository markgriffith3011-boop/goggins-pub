import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
      <div>
        <h1 style={{ color: '#8A1C2B', fontWeight: 400 }}>Page not found</h1>
        <p><Link href="/" style={{ color: '#8A1C2B' }}>Back to Goggins of Monkstown</Link></p>
      </div>
    </main>
  )
}
