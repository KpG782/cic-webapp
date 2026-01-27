interface StatCardProps {
  title: string
  value: number | string
  color: string
  subtitle: string
}

export default function StatCard({ title, value, color, subtitle }: StatCardProps) {
  return (
    <div className={`${color} rounded-xl shadow-sm p-6 text-white hover:shadow-lg transition-all hover:scale-105 duration-200`}>
      <h3 className="text-xs sm:text-sm font-semibold font-metropolis uppercase tracking-wide mb-2 opacity-90">
        {title}
      </h3>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-marcellus mb-2">
        {value}
      </p>
      <p className="text-xs font-metropolis opacity-80">{subtitle}</p>
    </div>
  )
}
