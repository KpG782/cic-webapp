import { z } from 'zod'

// =============================================================================
// VALIDATION SCHEMAS (Zod)
// =============================================================================

export const requestFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address').endsWith('@umak.edu.ph', 'Must be a UMak email address'),
  phone: z.string().regex(/^(09|\+639)\d{9}$/, 'Invalid Philippine phone number'),
  department: z.string().min(2, 'Department is required'),
  requestDetails: z.string().min(50, 'Please provide at least 50 characters of detail').max(1000, 'Description is too long'),
  deadline: z.string().min(1, 'Deadline is required'),
  priority: z.enum(['Low', 'Medium', 'High'])
})

export type ValidatedFormData = z.infer<typeof requestFormSchema>
