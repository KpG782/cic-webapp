'use client'

import { AlertCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function SetupRequired() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 border-t-4 border-yellow-500">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertCircle className="text-yellow-600" size={28} />
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-marcellus text-gray-900 mb-2">
              Supabase Setup Required
            </h1>
            <p className="text-gray-600 font-metropolis mb-6">
              To use the authentication features, you need to configure Supabase. Follow these quick steps:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-umak-blue p-4 rounded">
                <h3 className="font-bold text-umak-blue mb-2 font-metropolis">Quick Setup (5 minutes)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 font-metropolis">
                  <li>Create a free account at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-umak-blue hover:underline font-semibold">supabase.com</a></li>
                  <li>Create a new project and wait for setup</li>
                  <li>Go to Project Settings → API</li>
                  <li>Copy your Project URL and anon key</li>
                  <li>Create a <code className="bg-gray-200 px-2 py-1 rounded">.env.local</code> file in your project root</li>
                  <li>Add your credentials (see below)</li>
                  <li>Run the SQL from <code className="bg-gray-200 px-2 py-1 rounded">docs/supabase-setup.sql</code></li>
                  <li>Restart your dev server</li>
                </ol>
              </div>

              <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                <div className="text-green-400 mb-2"># Create .env.local file with:</div>
                <div>NEXT_PUBLIC_SUPABASE_URL=your-project-url</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-umak-blue text-white rounded-lg hover:bg-blue-700 transition-all font-metropolis font-bold text-sm uppercase tracking-wider shadow-sm"
              >
                Back to Home
              </Link>
              <a
                href="https://github.com/yourusername/CIC_webapp/blob/main/QUICKSTART.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-metropolis font-bold text-sm uppercase tracking-wider flex items-center gap-2"
              >
                Setup Guide
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 font-metropolis">
                <strong>Note:</strong> The app will work without authentication, but login/signup features won't be available until Supabase is configured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
