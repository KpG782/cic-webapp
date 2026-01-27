'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'

interface DashboardHeaderProps {
  title: string
  subtitle?: string
  showStaffPortal?: boolean
}

export default function DashboardHeader({ 
  title,
  subtitle,
  showStaffPortal = true 
}: DashboardHeaderProps) {
  const { toggleSidebar } = useSidebar()
  
  return (
    <header className="bg-white shadow-sm border-b-4 border-umak-yellow sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-umak-blue" />
        </button>
        
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-marcellus text-umak-blue tracking-tight truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-600 mt-1 font-metropolis text-xs sm:text-sm font-normal">
                {subtitle}
              </p>
            )}
          </div>
          {showStaffPortal && (
            <Link 
              href="/admin"
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-umak-blue text-white rounded-xl hover:bg-umak-blue-50 transition-all duration-200 font-metropolis font-semibold text-xs tracking-wider uppercase shadow-sm hover:shadow-md w-full sm:w-auto text-center whitespace-nowrap"
            >
              Staff Portal
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
