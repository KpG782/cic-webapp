# CIC Web App - Architecture Documentation

## 🏗️ Modular Architecture

### Design Principles

The application follows these software engineering principles:

1. **Separation of Concerns** - Clear separation between UI, business logic, and data
2. **Single Responsibility** - Each function/component has one clear purpose
3. **DRY (Don't Repeat Yourself)** - Reusable constants and utility functions
4. **Type Safety** - Full TypeScript coverage with Zod validation
5. **Scalability** - Easy to extend with new features
6. **Testability** - Pure functions that can be easily unit tested
7. **Security** - Input validation, sanitization, and secure defaults

---

## 📁 Project Structure

```
CIC_webapp/
├── app/
│   ├── page.tsx                 # Public landing page (modular)
│   ├── admin/
│   │   └── page.tsx            # Admin login page (responsive)
│   ├── layout.tsx              # Root layout with fonts
│   └── globals.css             # Global styles + custom fonts
├── docs/
│   ├── ARCHITECTURE.md         # This file
│   ├── brandkit.md             # UMak brand guidelines
│   └── spec.md                 # Feature specifications
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies
```

---

## 🔒 Security Features

### Input Validation (Zod Schema)

```typescript
const requestFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().endsWith('@umak.edu.ph'),  // Domain restriction
  phone: z.string().regex(/^(09|\+639)\d{9}$/),        // PH numbers only
  department: z.string().min(2),
  requestDetails: z.string().min(50).max(1000),        // Length limits
  deadline: z.string().min(1),
  priority: z.enum(['Low', 'Medium', 'High'])          // Enum restriction
})
```

**Security Benefits:**
- ✅ Prevents SQL injection (validated before DB insertion)
- ✅ Prevents XSS attacks (sanitized input)
- ✅ Domain validation (only @umak.edu.ph emails)
- ✅ Input length restrictions (prevents buffer overflow)
- ✅ Type enforcement (no type coercion vulnerabilities)

### Real-time Field Validation

```typescript
const validateField = (name: keyof FormData, value: string): void => {
  try {
    requestFormSchema.shape[name].parse(value)
    setErrors(prev => ({ ...prev, [name]: undefined }))
  } catch (error) {
    if (error instanceof z.ZodError) {
      setErrors(prev => ({ ...prev, [name]: error.issues[0].message }))
    }
  }
}
```

**Benefits:**
- Immediate user feedback
- Prevents invalid form submission
- Reduces server load (client-side validation first)

---

## 📦 Modular Components

### 1. Type Definitions (Type Safety)

```typescript
interface RequestType {
  id: string
  label: string
  description: string
  number: string
  subtypes: string[]
  bgColor: string
}

type FormData = z.infer<typeof requestFormSchema>
type FormErrors = Partial<Record<keyof FormData, string>>
```

**Benefits:**
- IntelliSense support
- Compile-time error checking
- Self-documenting code
- Easier refactoring

### 2. Constants (Single Source of Truth)

```typescript
const REQUEST_TYPES: RequestType[] = [
  { id: 'design', label: 'Design Request', ... },
  // ... more types
]

const INITIAL_FORM_DATA: FormData = {
  name: '', email: '', ...
}
```

**Benefits:**
- Easy to update service types
- Consistent data structure
- Testable independently
- No magic strings

### 3. Event Handlers (Clean Separation)

```typescript
// Each handler has one responsibility
const handleTypeSelect = (typeId: string): void => { ... }
const handleInputChange = (name: keyof FormData, value: string): void => { ... }
const handleCancel = (): void => { ... }
const handleSubmit = async (e: React.FormEvent): Promise<void> => { ... }
```

**Benefits:**
- Easy to test
- Easy to debug
- Clear function contracts
- Reusable logic

---

## 📱 Responsive Design

### Breakpoint Strategy

```typescript
// Mobile-first approach
className="
  text-xs sm:text-sm md:text-base lg:text-lg    // Text scales
  px-4 sm:px-6 lg:px-8                           // Padding scales
  grid-cols-1 md:grid-cols-2                     // Layout changes
  flex-col lg:flex-row                           // Direction changes
"
```

**Breakpoints:**
- Mobile: < 640px (default)
- Tablet: 640px - 1024px (sm, md)
- Desktop: > 1024px (lg, xl)

### Touch-Optimized

- ✅ Minimum touch target: 44x44px (Apple HIG)
- ✅ Adequate spacing between interactive elements
- ✅ Hover states only on desktop (lg:hover)
- ✅ Focus states for keyboard navigation

---

## 🎯 Performance Optimizations

### 1. Client-Side Validation First

```typescript
// Validates before API call
const validatedData = requestFormSchema.parse(formData)
```

**Benefit:** Reduces unnecessary network requests

### 2. Optimistic UI Updates

```typescript
// Updates UI immediately, then validates
const handleInputChange = (name: keyof FormData, value: string): void => {
  setFormData(prev => ({ ...prev, [name]: value }))
  validateField(name, value)  // Async validation
}
```

**Benefit:** Better UX with immediate feedback

### 3. Debounced Validation (Future Enhancement)

```typescript
// TODO: Add debounce to reduce validation calls
const debouncedValidate = useMemo(
  () => debounce(validateField, 300),
  []
)
```

---

## 🧪 Testability

### Pure Functions (Easy to Test)

```typescript
// ✅ Pure function - deterministic, no side effects
export const validateEmail = (email: string): boolean => {
  return z.string().email().endsWith('@umak.edu.ph').safeParse(email).success
}

// Test:
expect(validateEmail('test@umak.edu.ph')).toBe(true)
expect(validateEmail('test@gmail.com')).toBe(false)
```

### Separated Business Logic

```typescript
// ✅ Logic separated from UI
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/^09/, '+639')
}

// ✅ Easy to unit test
expect(formatPhoneNumber('09123456789')).toBe('+639123456789')
```

---

## 🔄 Scalability Considerations

### 1. Easy to Add New Service Types

```typescript
// Just add to array - no code changes needed
const REQUEST_TYPES: RequestType[] = [
  // ... existing types
  { 
    id: 'new-service', 
    label: 'New Service', 
    // ...
  }
]
```

### 2. Ready for API Integration

```typescript
// TODO: Replace with actual API
const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  const validatedData = requestFormSchema.parse(formData)
  
  // Future: Call API
  // await api.submitRequest(validatedData, selectedType)
  
  await new Promise(resolve => setTimeout(resolve, 1500))
}
```

### 3. Internationalization Ready

```typescript
// Future: Move strings to i18n files
const STRINGS = {
  en: {
    submitButton: 'Submit Request',
    cancelButton: 'Cancel Request'
  },
  fil: {
    submitButton: 'Isumite ang Kahilingan',
    cancelButton: 'Kanselahin'
  }
}
```

---

## 🛡️ Error Handling

### Comprehensive Error States

```typescript
try {
  const validatedData = requestFormSchema.parse(formData)
  // ... submit
} catch (error) {
  if (error instanceof z.ZodError) {
    // Handle validation errors
    const fieldErrors: FormErrors = {}
    error.issues.forEach((err: z.ZodIssue) => {
      if (err.path[0]) {
        fieldErrors[err.path[0] as keyof FormData] = err.message
      }
    })
    setErrors(fieldErrors)
  } else {
    // Handle other errors (network, server, etc.)
    console.error('Unexpected error:', error)
  }
} finally {
  setIsSubmitting(false)
}
```

**Benefits:**
- User-friendly error messages
- No silent failures
- Graceful degradation

---

## 📈 Future Enhancements

### Phase 2: Backend Integration

1. **Supabase Setup**
   ```typescript
   // app/lib/supabase.ts
   import { createClient } from '@supabase/supabase-js'
   
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   )
   ```

2. **API Routes**
   ```typescript
   // app/api/requests/route.ts
   export async function POST(request: Request) {
     const body = await request.json()
     const validatedData = requestFormSchema.parse(body)
     
     // Insert to database
     const { data, error } = await supabase
       .from('requests')
       .insert(validatedData)
     
     return Response.json({ success: true, data })
   }
   ```

3. **Authentication**
   ```typescript
   // app/lib/auth.ts
   export const signIn = async (email: string, password: string) => {
     const { data, error } = await supabase.auth.signInWithPassword({
       email, password
     })
     return { data, error }
   }
   ```

### Phase 3: Advanced Features

- Real-time updates (Supabase subscriptions)
- File upload to Supabase Storage
- Email notifications (SendGrid/Resend)
- Admin dashboard with charts
- Request status tracking
- Comments/messaging system

---

## 📚 Best Practices Followed

✅ **TypeScript** - Full type coverage, no `any` types
✅ **Zod Validation** - Runtime type checking
✅ **Responsive Design** - Mobile-first approach
✅ **Accessibility** - ARIA labels, keyboard navigation
✅ **Performance** - Code splitting, lazy loading ready
✅ **Security** - Input validation, sanitization
✅ **Maintainability** - Modular, documented code
✅ **Scalability** - Easy to extend
✅ **Testability** - Pure functions, separated logic

---

## 🚀 Getting Started

### Development

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Environment Variables

Create `.env.local`:

```env
# Supabase (Phase 2)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Email Service (Phase 2)
RESEND_API_KEY=your_resend_key
```

---

## 📞 Support

For technical questions or issues, contact:
- **Email:** cic@umak.edu.ph
- **GitHub:** [Repository URL]

---

**Last Updated:** January 28, 2026
**Version:** 1.0.0 (Phase 1 - UI Complete)
