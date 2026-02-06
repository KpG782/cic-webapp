'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import LoadingSpinner from '@/components/LoadingSpinner'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

/**
 * Component to protect routes that require authentication
 * Use this to wrap page content that should only be accessible to authenticated users
 * 
 * @example
 * // In a page component:
 * export default function SecretPage() {
 *   return (
 *     <ProtectedRoute>
 *       <div>This content is only for authenticated users</div>
 *     </ProtectedRoute>
 *   )
 * }
 * 
 * @example
 * // For admin-only pages:
 * export default function AdminPage() {
 *   return (
 *     <ProtectedRoute requireAdmin>
 *       <div>This content is only for admins</div>
 *     </ProtectedRoute>
 *   )
 * }
 */
export default function ProtectedRoute({ 
  children, 
  requireAdmin = false 
}: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // No user logged in, redirect to login
        router.push('/login')
      } else if (requireAdmin && profile?.role !== 'admin') {
        // User is not admin but admin is required, redirect to dashboard
        router.push('/dashboard')
      }
    }
  }, [user, profile, loading, requireAdmin, router])

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  // Don't render anything if not authenticated
  if (!user || (requireAdmin && profile?.role !== 'admin')) {
    return null
  }

  // User is authenticated (and is admin if required), render children
  return <>{children}</>
}
