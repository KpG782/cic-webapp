interface BadgeProps {
  children: React.ReactNode
  variant: 'success' | 'warning' | 'danger' | 'info' | 'default'
}

export default function Badge({ children, variant }: BadgeProps) {
  const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200',
    default: 'bg-gray-100 text-gray-800 border-gray-200',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border inline-block ${variants[variant]}`}>
      {children}
    </span>
  )
}
