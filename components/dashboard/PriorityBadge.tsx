interface PriorityBadgeProps {
  priority: 'High' | 'Medium' | 'Low'
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  const colors = {
    High: 'bg-red-600 text-white',
    Medium: 'bg-yellow-500 text-white',
    Low: 'bg-green-600 text-white',
  }
  
  return (
    <span className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold font-metropolis uppercase tracking-wide ${colors[priority]} whitespace-nowrap`}>
      {priority}
    </span>
  )
}
