'use client'

import { useState } from 'react'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import PriorityBadge from '@/components/dashboard/PriorityBadge'
import StatusBadge from '@/components/dashboard/StatusBadge'
import { mockSubmissions, Submission } from '@/lib/mockData'

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions)
  const [filterStatus, setFilterStatus] = useState<string>('All')
  const [filterPriority, setFilterPriority] = useState<string>('All')

  // Filter logic
  const filteredSubmissions = submissions.filter((submission) => {
    const statusMatch = filterStatus === 'All' || submission.status === filterStatus
    const priorityMatch = filterPriority === 'All' || submission.priority === filterPriority
    return statusMatch && priorityMatch
  })

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Request Submissions" 
        subtitle={`${filteredSubmissions.length} total request${filteredSubmissions.length !== 1 ? 's' : ''} • Filter by status and priority`}
      />
      
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Filters and Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <label className="text-sm font-semibold text-gray-700 font-metropolis whitespace-nowrap">Filter by:</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue font-metropolis text-sm"
              >
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="w-full sm:w-auto px-4 py-2.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-umak-blue focus:border-umak-blue font-metropolis text-sm"
              >
                <option>All Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Actions */}
            <button className="bg-umak-yellow text-umak-blue px-8 py-3 rounded-lg hover:bg-umak-yellow-50 transition-colors font-bold font-metropolis shadow-md hover:shadow-lg">
              + New Request
            </button>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow-lg border-l-4 border-umak-yellow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-umak-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Requestor Information
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Request Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Priority Level
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Current Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold font-metropolis uppercase tracking-wider">
                    Submission Date
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold font-metropolis uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSubmissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-blue-50 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-bold text-gray-900 font-metropolis">{submission.name}</div>
                        <div className="text-xs text-gray-600 font-metropolis mt-1">{submission.email}</div>
                        {submission.phone && (
                          <div className="text-xs text-gray-500 font-metropolis mt-0.5">{submission.phone}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-lg font-metropolis leading-relaxed">
                        {submission.details}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PriorityBadge priority={submission.priority} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={submission.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 font-metropolis">
                      {submission.assignee || (
                        <span className="text-gray-400 italic font-normal">Not assigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900 font-metropolis">
                        {new Date(submission.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="text-xs text-gray-500 font-metropolis mt-1">
                        {new Date(submission.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="px-3 py-1.5 text-xs font-bold text-umak-blue border-2 border-umak-blue hover:bg-umak-blue hover:text-white rounded transition-colors font-metropolis">
                          VIEW
                        </button>
                        <button className="px-3 py-1.5 text-xs font-bold text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white rounded transition-colors font-metropolis">
                          EDIT
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredSubmissions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 font-metropolis text-lg">No request submissions found matching your filters.</p>
              <p className="text-gray-500 font-metropolis text-sm mt-2">Try adjusting your filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
