'use client'

interface HeaderProps {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-white border-b-4 border-umak-yellow px-8 py-6 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl font-marcellus text-umak-blue mb-1">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-600 font-metropolis">{subtitle}</p>
          )}
        </div>

        {/* Date and Time */}
        <div className="text-right">
          <p className="text-sm font-semibold text-umak-blue font-metropolis">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-xs text-gray-500 font-metropolis mt-1">
            Center for Integrated Communications
          </p>
        </div>
      </div>
    </header>
  )
}
