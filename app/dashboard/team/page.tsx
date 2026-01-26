import Header from '@/components/Header'

export default function TeamPage() {
  return (
    <div>
      <Header 
        title="Team" 
        subtitle="Manage team members and assignments"
      />
      
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-12 text-center">
          <h3 className="text-xl font-marcellus text-gray-600 mb-2">
            Team Management
          </h3>
          <p className="text-gray-500">
            This feature will be available in Phase 2
          </p>
        </div>
      </div>
    </div>
  )
}
