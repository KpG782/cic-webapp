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
    <div className="min-h-screen bg-gradient-to-br from-umak-blue via-umak-blue-100 to-umak-blue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-white hover:text-umak-yellow font-metropolis font-semibold flex items-center gap-2"
          >
            ← Back to Request Form
          </Link>
        </div>

        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-block bg-umak-yellow p-5 rounded-2xl mb-6 shadow-2xl">
            <div className="w-20 h-20 bg-umak-blue rounded-xl flex items-center justify-center">
              <span className="text-4xl font-marcellus text-umak-yellow font-bold">CIC</span>
            </div>
          </div>
          <h1 className="text-4xl font-marcellus text-white mb-3">
            Admin Portal
          </h1>
          <p className="text-umak-yellow text-sm font-metropolis font-semibold tracking-wide mb-1">
            CENTER FOR INTEGRATED COMMUNICATIONS
          </p>
          <p className="text-gray-300 text-xs font-metropolis">
            University of Makati
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-umak-yellow">
          <div className="mb-8">
            <h2 className="text-3xl font-marcellus text-umak-blue mb-2">
              Administrator Login
            </h2>
            <p className="text-gray-600 text-sm font-metropolis">
              Access the request management system
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 font-metropolis">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@umak.edu.ph"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue transition-all font-metropolis"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 font-metropolis">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue transition-all font-metropolis"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-umak-blue focus:ring-umak-blue" />
                <span className="text-gray-600 font-metropolis">Remember me</span>
              </label>
              <a href="#" className="text-umak-blue hover:text-umak-blue-50 font-bold font-metropolis">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-umak-yellow text-umak-blue py-4 rounded-lg font-bold hover:bg-umak-yellow-50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl font-metropolis text-lg"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-umak-blue"></div>
              ) : (
                <>
                  <LogIn size={20} />
                  SIGN IN TO ADMIN PORTAL
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <p className="text-xs text-gray-500 text-center mb-3 font-metropolis font-semibold uppercase tracking-wide">
              Demo Credentials (Testing Only)
            </p>
            <div className="bg-blue-50 border-l-4 border-umak-blue p-4 rounded-lg text-xs space-y-2 font-metropolis">
              <p className="text-gray-800">
                <span className="font-bold text-umak-blue">Email:</span> admin@umak.edu.ph
              </p>
              <p className="text-gray-800">
                <span className="font-bold text-umak-blue">Password:</span> demo123
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-200 text-sm font-metropolis">
            Need assistance? Contact{' '}
            <a href="mailto:cic@umak.edu.ph" className="text-umak-yellow font-bold hover:underline">
              cic@umak.edu.ph
            </a>
          </p>
          <p className="text-gray-400 text-xs font-metropolis mt-2">
            © 2026 University of Makati - Center for Integrated Communications
          </p>
        </div>
      </div>
    </div>
  )
}
