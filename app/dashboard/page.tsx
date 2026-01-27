import DashboardHeader from '@/components/dashboard/DashboardHeader'
import StatCard from '@/components/dashboard/StatCard'
import PriorityBadge from '@/components/dashboard/PriorityBadge'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { mockSubmissions } from '@/lib/mockData'

export default function DashboardPage() {
  const totalSubmissions = mockSubmissions.length
  const pendingSubmissions = mockSubmissions.filter(s => s.status === 'Pending').length
  const inProgressSubmissions = mockSubmissions.filter(s => s.status === 'In Progress').length
  const completedSubmissions = mockSubmissions.filter(s => s.status === 'Completed').length

  const recentSubmissions = mockSubmissions.slice(0, 5)

  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Dashboard" 
        subtitle="Welcome back, Ken! Here's what's happening today."
      />
      
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6 border-b-2 border-gray-100 bg-gray-50">
            <h2 className="text-xl sm:text-2xl font-marcellus text-umak-blue">Recent Request Submissions</h2>
            <p className="text-xs sm:text-sm text-gray-600 font-metropolis mt-1">Latest requests from university departments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-umak-blue to-umak-blue-50 text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Requestor
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider hidden lg:table-cell">
                    Request Details
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold font-metropolis uppercase tracking-wider hidden sm:table-cell">
                    Submitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-blue-50 transition-colors border-b border-gray-100">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 font-metropolis truncate">{submission.name}</div>
                        <div className="text-xs text-gray-500 font-metropolis truncate">{submission.email}</div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 hidden lg:table-cell">
                      <div className="text-sm text-gray-900 max-w-md font-metropolis line-clamp-2">
                        {submission.details}
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <PriorityBadge priority={submission.priority as 'High' | 'Medium' | 'Low'} />
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                      <StatusBadge status={submission.status as 'Pending' | 'In Progress' | 'Completed'} />
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-600 font-metropolis hidden sm:table-cell">
                      {new Date(submission.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-gray-50 border-t-2 border-gray-200">
            <a href="/dashboard/submissions" className="text-xs sm:text-sm text-umak-blue hover:text-umak-blue-50 font-semibold font-metropolis inline-flex items-center gap-2 hover:gap-3 transition-all">
              View all request submissions
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}