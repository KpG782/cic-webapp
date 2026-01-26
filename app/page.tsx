'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    requestDetails: '',
    deadline: '',
    priority: 'Medium'
  })

  const requestTypes = [
    { 
      id: 'design', 
      label: 'Design Request', 
      description: 'Graphics, posters, tarpaulins, and visual materials',
      number: '01',
      color: 'border-blue-600',
      hoverColor: 'hover:border-blue-700'
    },
    { 
      id: 'video', 
      label: 'Video Production', 
      description: 'Video coverage, editing, and multimedia content',
      number: '02',
      color: 'border-red-600',
      hoverColor: 'hover:border-red-700'
    },
    { 
      id: 'events', 
      label: 'Events Coverage', 
      description: 'Photography and documentation for university events',
      number: '03',
      color: 'border-green-600',
      hoverColor: 'hover:border-green-700'
    },
    { 
      id: 'website', 
      label: 'Website Request', 
      description: 'Web development, updates, and maintenance',
      number: '04',
      color: 'border-purple-600',
      hoverColor: 'hover:border-purple-700'
    },
    { 
      id: 'social', 
      label: 'Social Media', 
      description: 'Social media content and digital campaigns',
      number: '05',
      color: 'border-pink-600',
      hoverColor: 'hover:border-pink-700'
    },
    { 
      id: 'corporate', 
      label: 'Corporate Requisites', 
      description: 'Letterheads, certificates, and official documents',
      number: '06',
      color: 'border-orange-600',
      hoverColor: 'hover:border-orange-700'
    }
  ]

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId)
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Request submitted successfully! Our team will review and contact you within 24-48 hours.')
    setStep(1)
    setSelectedType('')
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      requestDetails: '',
      deadline: '',
      priority: 'Medium'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-umak-yellow">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-marcellus text-umak-blue tracking-tight">
              CIC Request Portal
            </h1>
            <p className="text-gray-600 mt-1 font-metropolis text-sm font-normal">
              Center for Integrated Communications • University of Makati
            </p>
          </div>
          <Link 
            href="/admin"
            className="px-6 py-2.5 bg-umak-blue text-white rounded-md hover:bg-umak-blue-2 transition-all duration-200 font-metropolis font-semibold text-xs tracking-wider uppercase shadow-sm hover:shadow-md"
          >
            Staff Portal
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        {step === 1 && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-marcellus text-umak-blue mb-8 tracking-tight leading-tight">
                Submit a Service Request
              </h2>
              <p className="text-lg text-gray-600 font-metropolis max-w-3xl mx-auto leading-relaxed font-normal">
                Select the appropriate service category to begin your request. All submissions are reviewed by the CIC team within 24-48 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {requestTypes.map((type) => {
                return (
                  <button
                    key={type.id}
                    onClick={() => handleTypeSelect(type.id)}
                    className={`bg-white rounded-lg border-l-8 ${type.color} ${type.hoverColor} p-10 shadow-md hover:shadow-xl transition-all duration-300 text-left group relative overflow-hidden`}
                  >
                    {/* Background number */}
                    <div className="absolute top-6 right-6 text-8xl font-bold text-gray-100 font-marcellus opacity-50 group-hover:opacity-100 transition-opacity">
                      {type.number}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-xs font-metropolis font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Service Category
                      </div>
                      <h3 className="text-3xl font-marcellus text-umak-blue mb-4 leading-snug">
                        {type.label}
                      </h3>
                      <p className="text-gray-600 font-metropolis leading-relaxed text-base font-normal">
                        {type.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="mt-6 flex items-center text-umak-blue font-metropolis font-semibold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        <span>Select Service</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border-t-4 border-umak-yellow p-12">
              <div className="flex items-start justify-between mb-10 pb-8 border-b-2 border-gray-100">
                <div>
                  <div className="text-xs font-metropolis font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    Request Form
                  </div>
                  <h2 className="text-5xl font-marcellus text-umak-blue mb-4 leading-snug">
                    {requestTypes.find(t => t.id === selectedType)?.label}
                  </h2>
                  <p className="text-gray-600 font-metropolis text-base font-normal">
                    Complete all required fields to submit your request
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 hover:text-umak-blue font-metropolis font-semibold text-xs uppercase tracking-wider flex items-center transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Change Category
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-2xl font-marcellus text-umak-blue mb-6 pb-3 border-b border-gray-200 leading-snug">
                    Requestor Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-700 mb-3 font-metropolis font-bold uppercase tracking-widest">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal"
                        placeholder="Juan Dela Cruz"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal"
                        placeholder="juan.delacruz@umak.edu.ph"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal"
                        placeholder="09XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                        Department/Office <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal"
                        placeholder="e.g., College of Engineering"
                      />
                    </div>
                  </div>
                </div>

                {/* Request Details Section */}
                <div>
                  <h3 className="text-2xl font-marcellus text-umak-blue mb-6 pb-3 border-b border-gray-200 leading-snug">
                    Request Details
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                      Detailed Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.requestDetails}
                      onChange={(e) => setFormData({...formData, requestDetails: e.target.value})}
                      rows={7}
                      className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal leading-relaxed"
                      placeholder="Please provide comprehensive details about your request, including specific requirements, dimensions, format preferences, and any other relevant information..."
                    />
                    <p className="text-sm text-gray-500 mt-2 font-metropolis">
                      Minimum 50 characters. Be as specific as possible to ensure accurate processing.
                    </p>
                  </div>
                </div>

                {/* Timeline & Priority Section */}
                <div>
                  <h3 className="text-2xl font-marcellus text-umak-blue mb-6 pb-3 border-b border-gray-200 leading-snug">
                    Timeline & Priority
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                        Target Deadline <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.deadline}
                        onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base font-normal"
                      />
                      <p className="text-sm text-gray-500 mt-2 font-metropolis font-normal">
                        Standard processing time is 5-7 business days
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                        Priority Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.priority}
                        onChange={(e) => setFormData({...formData, priority: e.target.value})}
                        className="w-full px-5 py-4 border border-gray-300 rounded-md focus:border-umak-blue focus:ring-2 focus:ring-umak-blue focus:ring-opacity-20 focus:outline-none transition-all font-metropolis text-base"
                      >
                        <option value="Low">Low Priority - Flexible timeline (1-2 weeks)</option>
                        <option value="Medium">Medium Priority - Standard processing (5-7 days)</option>
                        <option value="High">High Priority - Urgent request (2-3 days)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload Section */}
                <div>
                  <h3 className="text-2xl font-marcellus text-umak-blue mb-6 pb-3 border-b border-gray-200 leading-snug">
                    Supporting Documents
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-3 font-metropolis uppercase tracking-widest">
                      Attach Files (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-12 text-center hover:border-umak-blue hover:bg-blue-50 transition-all cursor-pointer">
                      <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-metropolis font-medium mb-2 text-base">
                        Click to browse or drag and drop files here
                      </p>
                      <p className="text-sm text-gray-500 font-metropolis font-normal">
                        Supported formats: PDF, DOC, DOCX, JPG, PNG • Maximum file size: 10MB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-8 border-t-2 border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition-all font-metropolis font-semibold text-xs uppercase tracking-widest"
                  >
                    Cancel Request
                  </button>
                  <button
                    type="submit"
                    className="px-12 py-4 bg-umak-blue text-white rounded-md hover:bg-umak-blue-2 transition-all font-metropolis font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-umak-blue border-t-4 border-umak-yellow mt-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="text-center">
            <h3 className="text-white font-marcellus text-3xl mb-4 leading-snug">
              Center for Integrated Communications
            </h3>
            <p className="text-blue-100 font-metropolis mb-6 text-base font-normal">
              University of Makati • J.P. Rizal Extension, West Rembo, Makati City
            </p>
            <div className="border-t border-blue-400 pt-6 mt-6">
              <p className="text-blue-100 font-metropolis mb-3 text-sm font-normal">
                For inquiries and assistance, please contact:
              </p>
              <a 
                href="mailto:cic@umak.edu.ph" 
                className="text-umak-yellow hover:text-yellow-300 font-metropolis font-semibold text-base transition-colors inline-block"
              >
                cic@umak.edu.ph
              </a>
            </div>
            <p className="text-blue-300 text-xs font-metropolis mt-8 font-normal">
              © 2026 University of Makati. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
