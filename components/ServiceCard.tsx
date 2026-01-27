import React from 'react'
import { RequestType } from '@/lib/types'

interface ServiceCardProps {
  type: RequestType
  onSelect: (id: string) => void
}

export default function ServiceCard({ type, onSelect }: ServiceCardProps) {
  return (
    <button
      onClick={() => onSelect(type.id)}
      className={`w-full ${type.bgColor} border-b border-gray-200 last:border-b-0 transition-all duration-500 hover:shadow-2xl lg:hover:scale-[1.02] hover:z-10 relative group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-umak-blue focus:ring-offset-2`}
    >
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-umak-blue/5 to-umak-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Highlight border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-umak-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
      
      <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Number */}
          <div className="flex-shrink-0 transition-all duration-500 group-hover:scale-110">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-marcellus text-gray-300 group-hover:text-umak-blue/30 transition-colors duration-500 leading-none">
              {type.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-marcellus text-umak-blue mb-3 sm:mb-4 leading-tight group-hover:text-umak-blue-2 transition-colors duration-300">
              {type.label}
            </h3>
            
            {/* Subtypes */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
              {type.subtypes.map((subtype, idx) => (
                <span 
                  key={idx}
                  className="text-xs sm:text-sm font-metropolis font-semibold text-gray-600 group-hover:text-umak-blue transition-colors duration-300"
                >
                  {subtype}
                  {idx < type.subtypes.length - 1 && (
                    <span className="mx-1 sm:mx-2 text-gray-400">•</span>
                  )}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 font-metropolis text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-3xl group-hover:text-gray-900 transition-colors duration-300">
              {type.description}
            </p>

            {/* CTA Button */}
            <div className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-umak-blue text-white rounded-md group-hover:bg-umak-yellow group-hover:text-umak-blue transition-all duration-300 font-metropolis font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm group-hover:shadow-lg">
              <span className="whitespace-nowrap">Request This Service</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
