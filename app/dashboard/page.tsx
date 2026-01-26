import Header from '@/components/Header'
import { mockSubmissions } from '@/lib/mockData'

export default function DashboardPage() {
  const totalSubmissions = mockSubmissions.length
  const pendingSubmissions = mockSubmissions.filter(s => s.status === 'Pending').length
  const inProgressSubmissions = mockSubmissions.filter(s => s.status === 'In Progress').length
  const completedSubmissions = mockSubmissions.filter(s => s.status === 'Completed').length

  const recentSubmissions = mockSubmissions.slice(0, 5)

  return (
    <div>
      <Header 
        title="Dashboard" 
        subtitle="Welcome back, Ken! Here's what's happening today."
      />
      
      <div className="p-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Requests"
            value={totalSubmissions}
            color="bg-umak-blue"
            subtitle="All submissions"
          />
          <StatCard
            title="Pending Review"
            value={pendingSubmissions}
            color="bg-orange-500"
            subtitle="Needs attention"
          />
          <StatCard
            title="In Progress"
            value={inProgressSubmissions}
            color="bg-blue-600"
            subtitle="Currently working"
          />
          <StatCard
            title="Completed"
            value={completedSubmissions}
            color="bg-green-600"
            subtitle="Successfully done"
          />
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-lg shadow-md border-l-4 border-umak-yellow">
          <div className="p-6 border-b-2 border-gray-100 bg-gray-50">
            <h2 className="text-2xl font-marcellus text-umak-blue">Recent Request Submissions</h2>
            <p className="text-sm text-gray-600 font-metropolis mt-1">Latest requests from university departments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-umak-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Requestor
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Request Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-blue-50 transition-colors border-b border-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 font-metropolis">{submission.name}</div>
                        <div className="text-xs text-gray-500 font-metropolis">{submission.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md font-metropolis">
                        {submission.details}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PriorityBadge priority={submission.priority} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={submission.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-metropolis">
                      {new Date(submission.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
            <a href="/dashboard/submissions" className="text-sm text-umak-blue hover:text-umak-blue-50 font-semibold font-metropolis">
              View all request submissions →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ 
  title, 
  value, 
  color, 
  subtitle 
}: { 
  title: string
  value: number
  color: string
  subtitle: string
}) {
  return (
    <div className={`${color} rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105`}>
      <h3 className="text-sm font-semibold font-metropolis uppercase tracking-wide mb-2 opacity-90">{title}</h3>
      <p className="text-5xl font-bold font-marcellus mb-2">{value}</p>
      <p className="text-xs font-metropolis opacity-80">{subtitle}</p>
    </div>
  )
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors = {
    High: 'bg-red-600 text-white',
    Medium: 'bg-yellow-500 text-white',
    Low: 'bg-green-600 text-white',
  }
  
  return (
    <span className={`px-4 py-1.5 rounded text-xs font-bold font-metropolis uppercase tracking-wide ${colors[priority as keyof typeof colors]}`}>
      {priority}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Pending: 'bg-orange-500 text-white',
    'In Progress': 'bg-umak-blue-2 text-white',
    Completed: 'bg-green-600 text-white',
  }
  
  return (
    <span className={`px-4 py-1.5 rounded text-xs font-bold font-metropolis uppercase tracking-wide ${colors[status as keyof typeof colors]}`}>
      {status}
    </span>
  )
}