export interface BatchRecipient {
  name: string
  email: string
  title?: string
  date?: string
  customFields?: Record<string, string>
}

export interface BatchProgress {
  total: number
  current: number
  status: 'idle' | 'processing' | 'complete' | 'error'
  currentName?: string
  error?: string
}

export const BATCH_JSON_EXAMPLE = {
  recipients: [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      title: 'JavaScript Developer',
      date: 'January 28, 2026'
    }
  ]
}

export const BATCH_CSV_EXAMPLE = `name,email,title,date
John Doe,john.doe@example.com,JavaScript Developer,January 28 2026
Jane Smith,jane.smith@example.com,React Developer,January 28 2026`
