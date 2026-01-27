// =============================================================================
// TYPE DEFINITIONS (Centralized Types)
// =============================================================================

export interface RequestType {
  id: string
  label: string
  description: string
  number: string
  subtypes: string[]
  bgColor: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  department: string
  requestDetails: string
  deadline: string
  priority: 'Low' | 'Medium' | 'High'
}

export type FormErrors = Partial<Record<keyof FormData, string>>

export interface SubmissionData extends FormData {
  requestType: string
  submittedAt: string
  status: 'pending' | 'approved' | 'in-progress' | 'completed' | 'rejected'
}
