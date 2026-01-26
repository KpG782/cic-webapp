interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  headerColor?: 'blue' | 'yellow'
}

export default function Card({ 
  title, 
  description, 
  children, 
  className = '',
  headerColor = 'blue'
}: CardProps) {
  const headerColors = {
    blue: 'bg-umak-blue text-white',
    yellow: 'bg-umak-yellow text-umak-blue',
  }

  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${className}`}>
      {(title || description) && (
        <div className={`${headerColors[headerColor]} p-6`}>
          {title && (
            <h3 className="font-marcellus text-xl mb-1">{title}</h3>
          )}
          {description && (
            <p className="text-sm opacity-90">{description}</p>
          )}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}
