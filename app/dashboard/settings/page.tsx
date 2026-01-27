import DashboardHeader from '@/components/dashboard/DashboardHeader'

export default function SettingsPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Settings" 
        subtitle="Configure your portal preferences"
      />
      
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <h3 className="text-xl font-marcellus text-gray-600 mb-2">
            Settings
          </h3>
          <p className="text-gray-500">
            This feature will be available in Phase 2
          </p>
        </div>
      </div>
    </div>
  )
}
