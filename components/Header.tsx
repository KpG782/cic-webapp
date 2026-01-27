'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  isLandingPage?: boolean
}

export default function Header({ isLandingPage = false }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-umak-blue to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="text-white font-marcellus text-xl">CIC</span>
              </div>
              <div>
                <h1 className="text-xl font-marcellus text-umak-blue tracking-tight">
                  Center for Integrated Communications
                </h1>
                <p className="text-gray-500 font-metropolis text-xs">
                  University of Makati
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isLandingPage && (
              <>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium transition-colors"
                >
                  About
                </a>
              </>
            )}
            <a
              href="https://umak.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium transition-colors"
            >
              UMak Website
            </a>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 bg-umak-blue text-white rounded-lg hover:bg-blue-700 transition-all font-metropolis font-bold text-sm uppercase tracking-wider shadow-sm"
            >
              Dashboard
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-umak-blue"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {isLandingPage && (
              <>
                <a
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium py-2"
                >
                  Services
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium py-2"
                >
                  About
                </a>
              </>
            )}
            <a
              href="https://umak.edu.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-umak-blue font-metropolis text-sm font-medium py-2"
            >
              UMak Website
            </a>
            <Link
              href="/dashboard"
              className="block px-6 py-2.5 bg-umak-blue text-white rounded-lg hover:bg-blue-700 transition-all font-metropolis font-bold text-sm uppercase tracking-wider shadow-sm text-center"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

