'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Request Submissions', href: '/dashboard/submissions' },
  { label: 'Team Management', href: '/dashboard/team' },
  { label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Clear any stored authentication data (if you add it later)
    // localStorage.removeItem('authToken')
    
    // Redirect to login page
    router.push('/')
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-umak-blue text-white flex flex-col shadow-xl z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-umak-blue-50">
        <h1 className="font-marcellus text-2xl text-umak-yellow mb-1">
          CIC Portal
        </h1>
        <p className="font-metropolis text-xs text-gray-300 tracking-wide">
          CENTER FOR INTEGRATED COMMUNICATIONS
        </p>
        <p className="font-metropolis text-xs text-umak-yellow opacity-75 mt-1">
          University of Makati
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-6 py-3 rounded-lg transition-all font-metropolis ${
                isActive
                  ? 'bg-umak-yellow text-umak-blue font-semibold'
                  : 'text-gray-200 hover:bg-umak-blue-50 hover:text-white hover:pl-8'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-umak-blue-50">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-umak-yellow flex items-center justify-center text-umak-blue font-bold font-marcellus text-lg">
            KG
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold font-metropolis">Ken Garcia</p>
            <p className="text-xs text-gray-300 font-metropolis">Administrator</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-3 w-full rounded-lg text-gray-200 hover:bg-red-600 hover:text-white transition-all font-metropolis"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
