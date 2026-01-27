'use client'

import { useState, useRef } from 'react'
import { Upload, Download, AlertCircle, CheckCircle2, Loader2, FileJson } from 'lucide-react'
import { BatchRecipient, BatchProgress, BATCH_JSON_EXAMPLE, BATCH_CSV_EXAMPLE } from '@/types/batch'
import { BatchCertificateGenerator, parseJSON, parseCSV } from '@/lib/batch-generator'
import { TextElement, ImageElement, CertificateTemplate } from '@/types/certificates'

interface BatchGeneratorProps {
  template: CertificateTemplate | null
  textElements: TextElement[]
  imageElements: ImageElement[]
}

export default function BatchGenerator({
  template,
  textElements,
  imageElements
}: BatchGeneratorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [recipients, setRecipients] = useState<BatchRecipient[]>([])
  const [selectedRecipients, setSelectedRecipients] = useState<Set<number>>(new Set())
  const [progress, setProgress] = useState<BatchProgress>({
    total: 0,
    current: 0,
    status: 'idle'
  })
  const [error, setError] = useState<string | null>(null)
  const [showExamples, setShowExamples] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setError(null)

    try {
      let parsedRecipients: BatchRecipient[]

      if (file.name.endsWith('.csv')) {
        const text = await file.text()
        parsedRecipients = parseCSV(text)
      } else if (file.name.endsWith('.json')) {
        parsedRecipients = await parseJSON(file)
      } else {
        throw new Error('Unsupported file format. Please upload JSON or CSV file.')
      }

      setRecipients(parsedRecipients)
      setSelectedRecipients(new Set(parsedRecipients.map((_, idx) => idx)))

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to parse file')
      setRecipients([])
      setSelectedRecipients(new Set())
    }
  }

  const handleDownloadAll = async () => {
    if (!template || selectedRecipients.size === 0) return

    setError(null)
    const generator = new BatchCertificateGenerator()

    const recipientsToDownload = recipients.filter((_, idx) =>
      selectedRecipients.has(idx)
    )

    try {
      await generator.downloadBatch(
        recipientsToDownload,
        template,
        textElements,
        imageElements,
        setProgress
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to download certificates')
      setProgress((prev) => ({ ...prev, status: 'error' }))
    }
  }

  const toggleRecipient = (index: number) => {
    const newSelected = new Set(selectedRecipients)
    if (newSelected.has(index)) {
      newSelected.delete(index)
    } else {
      newSelected.add(index)
    }
    setSelectedRecipients(newSelected)
  }

  const selectAll = () => {
    setSelectedRecipients(new Set(recipients.map((_, idx) => idx)))
  }

  const deselectAll = () => {
    setSelectedRecipients(new Set())
  }

  return (
    <div className="space-y-6">
      {/* File Upload */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-white hover:border-umak-blue transition-colors">
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,.csv"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-bold font-metropolis mb-2">Upload Recipients</h3>
        <p className="text-sm text-gray-600 font-metropolis mb-4">
          Supports JSON and CSV files with recipient data
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2.5 bg-umak-blue text-white rounded-lg hover:bg-umak-blue-50 transition-all font-bold font-metropolis text-sm shadow-sm"
          >
            <FileJson className="w-4 h-4 inline mr-2" />
            Choose File
          </button>
          <button 
            onClick={() => setShowExamples(!showExamples)}
            className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-bold font-metropolis text-sm"
          >
            {showExamples ? 'Hide' : 'Show'} Format Examples
          </button>
        </div>
      </div>

      {/* Format Examples */}
      {showExamples && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold font-metropolis mb-4">File Format Examples</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-700 font-metropolis mb-2">JSON Format:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                {JSON.stringify(BATCH_JSON_EXAMPLE, null, 2)}
              </pre>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700 font-metropolis mb-2">CSV Format:</p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                {BATCH_CSV_EXAMPLE}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-bold text-red-800 font-metropolis">Error</p>
            <p className="text-sm text-red-700 font-metropolis">{error}</p>
          </div>
        </div>
      )}

      {/* Recipients List */}
      {recipients.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-metropolis">
              Recipients ({selectedRecipients.size} of {recipients.length} selected)
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={selectAll}
                className="px-4 py-2 text-xs font-bold border-2 border-umak-blue text-umak-blue hover:bg-umak-blue hover:text-white rounded-lg transition-all font-metropolis"
              >
                Select All
              </button>
              <button 
                onClick={deselectAll}
                className="px-4 py-2 text-xs font-bold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg transition-all font-metropolis"
              >
                Deselect All
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-umak-blue to-umak-blue-50 text-white sticky top-0">
                  <tr>
                    <th className="w-12 p-3"></th>
                    <th className="text-left p-3 text-xs font-bold font-metropolis uppercase tracking-wider">Name</th>
                    <th className="text-left p-3 text-xs font-bold font-metropolis uppercase tracking-wider">Email</th>
                    <th className="text-left p-3 text-xs font-bold font-metropolis uppercase tracking-wider">Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recipients.map((recipient, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={selectedRecipients.has(index)}
                          onChange={() => toggleRecipient(index)}
                          className="w-4 h-4 text-umak-blue rounded focus:ring-2 focus:ring-umak-blue"
                        />
                      </td>
                      <td className="p-3 font-semibold text-gray-900 font-metropolis text-sm">{recipient.name}</td>
                      <td className="p-3 text-sm text-gray-600 font-metropolis">{recipient.email}</td>
                      <td className="p-3 text-sm text-gray-600 font-metropolis">{recipient.title || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleDownloadAll}
            disabled={!template || selectedRecipients.size === 0 || progress.status === 'processing'}
            className="w-full px-6 py-4 bg-umak-yellow text-umak-blue rounded-xl hover:bg-yellow-500 transition-all font-bold font-metropolis text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download as ZIP ({selectedRecipients.size} certificates)
          </button>
        </div>
      )}

      {/* Progress Display */}
      {progress.status === 'processing' && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
            <span className="font-bold font-metropolis">
              Processing: {progress.current} / {progress.total}
            </span>
          </div>
          {progress.currentName && (
            <p className="text-sm text-gray-600 font-metropolis">
              Current: {progress.currentName}
            </p>
          )}
          <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Success Display */}
      {progress.status === 'complete' && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="font-bold text-green-800 font-metropolis">
            Successfully processed {progress.total} certificates!
          </span>
        </div>
      )}
    </div>
  )
}
