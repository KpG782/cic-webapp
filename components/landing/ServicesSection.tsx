'use client'

import { useState } from 'react'

interface Service {
  id: string
  title: string
  description: string
  status?: 'available' | 'coming-soon' | 'on-hold'
  requestType?: string
}

const services: Service[] = [
  {
    id: 'design',
    title: 'Design Services',
    description: 'Visual materials for your project or event. Graphic design and layout for logos, publication covers, posters, tarpaulins, plaques, medals, and related materials.',
    status: 'available',
    requestType: 'design'
  },
  {
    id: 'video',
    title: 'Video Services',
    description: 'Support for recording video messages and other university-related video content.',
    status: 'available',
    requestType: 'video'
  },
  {
    id: 'coverage',
    title: 'Event Coverage',
    description: 'Photo documentation and basic coverage for university events and activities.',
    status: 'available',
    requestType: 'coverage'
  },
  {
    id: 'social-media',
    title: 'Social Media Support',
    description: 'Posting publicly available, university-wide announcements, congratulatory messages, and similar content on official platforms.',
    status: 'available',
    requestType: 'social-media'
  },
  {
    id: 'branding',
    title: 'Branding Consultation',
    description: 'Guidance to ensure your creative materials align with University brand guidelines before production or release.',
    status: 'available',
    requestType: 'branding'
  },
  {
    id: 'website',
    title: 'Website Content Update',
    description: 'Request new website entries or updates to existing pages for your office or unit.',
    status: 'available',
    requestType: 'website'
  },
  {
    id: 'livestream',
    title: 'Livestreaming Services',
    description: 'Livestreaming support for university events. Currently on hold while guidelines are being updated.',
    status: 'on-hold',
    requestType: 'livestream'
  },
  {
    id: 'giveaways',
    title: 'Corporate Giveaways',
    description: 'University-branded merchandise for official use. Subject to budget allocation and annual supply.',
    status: 'coming-soon'
  },
  {
    id: 'permits',
    title: 'Posting Permits',
    description: 'Permission to post posters, tarpaulins, and other promotional materials across the university.',
    status: 'coming-soon'
  }
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const getStatusBadge = (status?: string) => {
    if (status === 'coming-soon') {
      return (
        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold font-metropolis uppercase tracking-wider rounded-full">
          Coming Soon
        </span>
      )
    }
    if (status === 'on-hold') {
      return (
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold font-metropolis uppercase tracking-wider rounded-full">
          Temporarily On Hold
        </span>
      )
    }
    return null
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-metropolis font-bold text-umak-blue uppercase tracking-widest mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-umak-blue mb-6">
            CIC Services
          </h2>
          <p className="text-lg text-gray-600 font-metropolis max-w-3xl mx-auto leading-relaxed">
            Comprehensive communication and creative services for the University of Makati community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`relative bg-white border-2 rounded-2xl p-8 transition-all duration-300 ${
                hoveredService === service.id
                  ? 'border-umak-blue shadow-2xl transform -translate-y-2'
                  : 'border-gray-200 shadow-lg hover:border-gray-300'
              } ${service.status !== 'available' ? 'opacity-75' : ''}`}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-6xl font-marcellus text-gray-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {getStatusBadge(service.status)}
                </div>
                <h3 className="text-2xl font-marcellus text-umak-blue mb-4 leading-tight">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 font-metropolis leading-relaxed mb-6 min-h-24">
                {service.description}
              </p>

              {service.status === 'available' && (
                <button
                  onClick={() => {
                    const event = new CustomEvent('startRequest', { 
                      detail: { serviceType: service.requestType } 
                    })
                    window.dispatchEvent(event)
                  }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                    hoveredService === service.id
                      ? 'bg-umak-blue text-white shadow-lg'
                      : 'bg-gray-100 text-umak-blue'
                  }`}
                >
                  <svg 
                    className="w-5 h-5 transform transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ transform: hoveredService === service.id ? 'translateX(2px)' : 'translateX(0)' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const event = new CustomEvent('startRequest')
              window.dispatchEvent(event)
            }}
            className="inline-flex items-center justify-center px-8 py-4 bg-umak-blue text-white rounded-lg hover:bg-blue-700 transition-all font-bold font-metropolis text-sm uppercase tracking-wider shadow-lg hover:shadow-xl"
          >
            <span>Request a Service</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
