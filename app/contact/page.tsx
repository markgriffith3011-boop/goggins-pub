import { Suspense } from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-pub-green-900 to-pub-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-pub-cream-100">
            Get in touch or book a table
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="section-padding">Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  )
}

