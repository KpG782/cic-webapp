'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LogOut, 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Zap, 
  Wrench, 
  Image, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useSidebar } from '@/contexts/SidebarContext'
import { useAuth } from '@/contexts/AuthContext'

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Submissions', href: '/dashboard/submissions', icon: FileText },
  { label: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { label: 'Automation', href: '/dashboard/automation', icon: Zap },
  { label: 'Tools', href: '/dashboard/tools', icon: Wrench },
  { label: 'Photos', href: '/dashboard/photos', icon: Image },
  { label: 'Team', href: '/dashboard/team', icon: Users },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar()
  const pathname = usePathname()
  const router = useRouter()
  const { user, profile, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
  }

  // Get user initials
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return user?.email?.[0].toUpperCase() || 'U'
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className="fixed left-0 top-0 h-screen bg-umak-blue text-white flex flex-col shadow-xl z-50 transition-all duration-300"
        style={{
          width: isOpen ? '256px' : '80px'
        }}
      >
        {/* Logo Section */}
        <div className={`p-6 border-b border-umak-blue-50 ${isOpen ? '' : 'px-4'}`}>
        {isOpen ? (
          <>
            <h1 className="font-marcellus text-2xl text-umak-yellow mb-1">
              CIC Portal
            </h1>
            <p className="font-metropolis text-xs text-gray-300 tracking-wide">
              CENTER FOR INTEGRATED COMMUNICATIONS
            </p>
            <p className="font-metropolis text-xs text-umak-yellow opacity-75 mt-1">
              University of Makati
            </p>
          </>
        ) : (
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-lg bg-umak-yellow flex items-center justify-center">
              <span className="text-umak-blue font-bold font-marcellus text-lg">C</span>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-8 w-8 h-8 lg:w-6 lg:h-6 bg-umak-yellow rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all shadow-md z-50"
        title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isOpen ? (
          <ChevronLeft size={20} className="text-umak-blue lg:w-4 lg:h-4" />
        ) : (
          <ChevronRight size={20} className="text-umak-blue lg:w-4 lg:h-4" />
        )}
      </button>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-metropolis text-sm font-medium group ${
                isActive
                  ? 'bg-umak-yellow text-umak-blue font-bold shadow-sm'
                  : 'text-gray-200 hover:bg-umak-blue-50 hover:text-white'
              } ${!isOpen ? 'justify-center' : ''}`}
              title={!isOpen ? item.label : ''}
            >
              <Icon size={20} className={`flex-shrink-0 ${isActive ? '' : 'group-hover:scale-110 transition-transform'}`} />
              {isOpen && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* User Section */}
      <div className={`p-4 border-t border-umak-blue-50 ${isOpen ? '' : 'px-2'}`}>
        {isOpen ? (
          <>
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-umak-yellow flex items-center justify-center text-umak-blue font-bold font-marcellus text-lg flex-shrink-0">
                {getInitials()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold font-metropolis truncate">
                  {profile?.full_name || user?.email || 'User'}
                </p>
                <p className="text-xs text-gray-300 font-metropolis">
                  {profile?.role === 'admin' ? 'Administrator' : 'User'}
                </p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-3 w-full rounded-xl text-gray-200 hover:bg-red-600 hover:text-white transition-all font-metropolis"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-umak-yellow flex items-center justify-center text-umak-blue font-bold font-marcellus text-lg">
              {getInitials()}
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center p-3 rounded-xl text-gray-200 hover:bg-red-600 hover:text-white transition-all"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    </aside>
    </>
  )
}
