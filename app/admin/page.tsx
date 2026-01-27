'use client'

import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login - replace with actual authentication later
    setTimeout(() => {
      if (email === 'admin@umak.edu.ph' && password === 'demo123') {
        router.push('/dashboard')
      } else {
        alert('Invalid credentials. Use admin@umak.edu.ph / demo123')
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Back to Home */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-umak-blue hover:text-umak-blue-2 font-metropolis font-semibold flex items-center gap-2 text-sm transition-colors"
            >
              ← Back to Request Form
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-marcellus text-umak-blue mb-3">
              Admin Portal
            </h1>
            <p className="text-gray-600 text-sm sm:text-base font-metropolis">
              Sign in to access the request management system
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 font-metropolis uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@umak.edu.ph"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue transition-all font-metropolis text-base"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-700 mb-2 font-metropolis uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue transition-all font-metropolis text-base"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-umak-blue focus:ring-umak-blue" />
                <span className="text-gray-600 font-metropolis">Remember me</span>
              </label>
              <a href="#" className="text-umak-blue hover:text-umak-blue-2 font-semibold font-metropolis transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-umak-blue text-white py-4 rounded-md font-bold hover:bg-umak-blue-2 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg font-metropolis text-sm uppercase tracking-widest"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 font-metropolis font-semibold uppercase tracking-wide">
              Demo Credentials
            </p>
            <div className="bg-gray-50 border-l-4 border-umak-yellow p-4 rounded text-xs space-y-2 font-metropolis">
              <p className="text-gray-700">
                <span className="font-bold text-umak-blue">Email:</span> admin@umak.edu.ph
              </p>
              <p className="text-gray-700">
                <span className="font-bold text-umak-blue">Password:</span> demo123
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs font-metropolis">
              Need help? Contact{' '}
              <a href="mailto:cic@umak.edu.ph" className="text-umak-blue font-semibold hover:underline">
                cic@umak.edu.ph
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-umak-blue via-umak-blue-100 to-umak-blue-2 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-umak-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-umak-yellow rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="inline-block bg-umak-yellow p-8 rounded-3xl shadow-2xl mb-8">
              <div className="w-32 h-32 bg-umak-blue rounded-2xl flex items-center justify-center">
                <span className="text-7xl font-marcellus text-umak-yellow">CIC</span>
              </div>
            </div>
            <h2 className="text-4xl font-marcellus text-white mb-4">
              Center for Integrated Communications
            </h2>
            <p className="text-umak-yellow text-lg font-metropolis font-semibold tracking-widest">
              UNIVERSITY OF MAKATI
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6 max-w-md">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-metropolis font-bold text-lg mb-2">Request Management</h3>
              <p className="text-blue-100 font-metropolis text-sm">
                Track and manage all service requests in one centralized dashboard
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-metropolis font-bold text-lg mb-2">Real-time Updates</h3>
              <p className="text-blue-100 font-metropolis text-sm">
                Monitor submission status and communicate with requestors instantly
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h3 className="text-white font-metropolis font-bold text-lg mb-2">Analytics Dashboard</h3>
              <p className="text-blue-100 font-metropolis text-sm">
                Gain insights with comprehensive reports and data visualization
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="text-blue-200 text-xs font-metropolis mt-12">
            © 2026 University of Makati. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
