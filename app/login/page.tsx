'use client'

import { useState } from 'react'
import { LogIn, UserPlus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import LoadingSpinner from '@/components/LoadingSpinner'
import SetupRequired from '@/components/SetupRequired'

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { signIn, signUp, isConfigured } = useAuth()

  // Show setup required if Supabase is not configured
  if (!isConfigured) {
    return <SetupRequired />
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, fullName)
        if (error) {
          setError(error.message)
        } else {
          router.push('/dashboard')
        }
      } else {
        const { error } = await signIn(email, password)
        if (error) {
          setError(error.message)
        } else {
          router.push('/dashboard')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
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
              ← Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-marcellus text-umak-blue mb-3">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base font-metropolis">
              {isSignUp 
                ? 'Sign up to access the dashboard' 
                : 'Sign in to access your dashboard'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm font-metropolis">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2 font-metropolis">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required={isSignUp}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umak-blue focus:border-transparent font-metropolis text-sm"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-metropolis">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umak-blue focus:border-transparent font-metropolis text-sm"
                placeholder="student@umak.edu.ph"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 font-metropolis">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-umak-blue focus:border-transparent font-metropolis text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-umak-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-metropolis font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  {isSignUp ? <UserPlus size={18} /> : <LogIn size={18} />}
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </>
              )}
            </button>
          </form>

          {/* Toggle Sign Up/Sign In */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError('')
              }}
              className="text-sm text-umak-blue hover:text-blue-700 font-metropolis font-medium"
            >
              {isSignUp 
                ? 'Already have an account? Sign In' 
                : "Don't have an account? Sign Up"}
            </button>
          </div>

          {/* Admin Link */}
          <div className="mt-4 text-center">
            <Link
              href="/admin"
              className="text-xs text-gray-500 hover:text-gray-700 font-metropolis"
            >
              Admin Login →
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-umak-blue via-blue-700 to-blue-900 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative z-10 text-white text-center max-w-lg">
          <div className="w-24 h-24 mx-auto mb-8 bg-umak-yellow rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-umak-blue font-marcellus text-5xl font-bold">C</span>
          </div>
          
          <h2 className="text-4xl font-marcellus mb-6 text-umak-yellow">
            Center for Integrated Communications
          </h2>
          
          <p className="text-xl font-metropolis text-gray-200 mb-8 leading-relaxed">
            Your central hub for managing creative requests, certificates, and communications.
          </p>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-umak-yellow rounded-full mt-2"></div>
              <p className="text-gray-200 font-metropolis">Track and manage all your requests in one place</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-umak-yellow rounded-full mt-2"></div>
              <p className="text-gray-200 font-metropolis">Real-time updates on submission status</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-umak-yellow rounded-full mt-2"></div>
              <p className="text-gray-200 font-metropolis">Automated certificate generation tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
