interface StatusBadgeProps {
  status: 'Pending' | 'In Progress' | 'Completed'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    Pending: 'bg-orange-500 text-white',
    'In Progress': 'bg-umak-blue text-white',
    Completed: 'bg-green-600 text-white',
  }
  
  return (
    <span className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold font-metropolis uppercase tracking-wide ${colors[status]} whitespace-nowrap`}>
      {status}
    </span>
  )
}
