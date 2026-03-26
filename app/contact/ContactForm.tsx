'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import hoursData from '@/data/hours.json'

const formatHours = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  return dayNames.map((day, idx) => {
    const dayKey = days[idx] as keyof typeof hoursData
    const hours = hoursData[dayKey]
    return `${day}: ${hours.open} - ${hours.close}`
  })
}

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    groupSize: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const type = searchParams.get('type')
    const space = searchParams.get('space')
    if (space) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in booking ${space}. `,
      }))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        groupSize: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const hours = formatHours()

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-pub-green-800 mb-6">
              Visit Us
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-pub-wood-800 mb-2">Address</h3>
                <address className="not-italic text-pub-wood-700">
                  99 Monkstown Rd<br />
                  Dún Laoghaire, Dublin<br />
                  A94 Y8D8, Ireland
                </address>
              </div>
              <div>
                <h3 className="font-semibold text-pub-wood-800 mb-2">Phone</h3>
                <a
                  href="tel:+353-1-XXX-XXXX"
                  className="text-pub-green-700 hover:text-pub-green-800"
                >
                  {/* TODO: Replace with actual phone number */}
                  (01) XXX XXXX
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-pub-wood-800 mb-2">Email</h3>
                <a
                  href="mailto:Gogginsandco@gmail.com"
                  className="text-pub-green-700 hover:text-pub-green-800"
                >
                  Gogginsandco@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-pub-wood-800 mb-2">Opening Hours</h3>
                <ul className="space-y-1 text-pub-wood-700 text-sm">
                  {hours.map((hour, idx) => (
                    <li key={idx}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-semibold text-pub-wood-800 mb-4">Find Us</h3>
              {/* TODO: Replace with actual Google Maps embed */}
              <div className="aspect-video bg-pub-wood-200 rounded-lg flex items-center justify-center">
                <p className="text-pub-wood-600">Google Maps embed placeholder</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-pub-green-800 mb-6">
              Send us a Message
            </h2>
            {submitted ? (
              <div className="bg-pub-green-100 border border-pub-green-300 text-pub-green-800 p-6 rounded-lg">
                <p className="font-semibold mb-2">Thank you for your message!</p>
                <p>We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-pub-wood-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-pub-wood-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-pub-wood-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-pub-wood-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-pub-wood-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="groupSize" className="block text-sm font-medium text-pub-wood-700 mb-1">
                    Group Size
                  </label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                  >
                    <option value="">Select group size</option>
                    <option value="1-2">1-2 people</option>
                    <option value="3-4">3-4 people</option>
                    <option value="5-8">5-8 people</option>
                    <option value="9-15">9-15 people</option>
                    <option value="16+">16+ people</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pub-wood-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-pub-wood-300 rounded-md focus:ring-2 focus:ring-pub-green-500 focus:border-pub-green-500"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

