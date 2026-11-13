// The live site is the static page in /public/index.html (served at "/" via next.config.js).
// This layout only wraps Next.js's own pages, such as the 404 page.
export const metadata = {
  title: 'Goggins of Monkstown',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IE">
      <body style={{ margin: 0, fontFamily: 'Georgia, serif', background: '#F7F1E6', color: '#2B1B1E' }}>
        {children}
      </body>
    </html>
  )
}
