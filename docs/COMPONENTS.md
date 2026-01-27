# CIC Web App - Component Structure

## 📁 Modular Architecture Summary

All files are now **under 500 lines** and properly organized for scalability and backend integration.

---

## 📊 File Line Counts

| File | Lines | Purpose |
|------|-------|---------|
| `app/page.tsx` | 83 | Main page orchestration |
| `components/Header.tsx` | 22 | Header with navigation |
| `components/ServiceCard.tsx` | 68 | Service selection cards |
| `components/FormField.tsx` | 90 | Reusable form input component |
| `components/RequestForm.tsx` | 193 | Complete request form |
| `hooks/useRequestForm.ts` | 91 | Form state management |
| `lib/types.ts` | 30 | TypeScript interfaces |
| `lib/validation.ts` | 17 | Zod validation schemas |
| `lib/constants.ts` | 66 | Configuration constants |
| **TOTAL** | **660** | All modular files |

✅ **Every file is under 500 lines**
✅ **Highly modular and maintainable**
✅ **Ready for backend integration**

---

## 🏗️ Component Structure

### 1. **Main Page** (`app/page.tsx` - 83 lines)
- Orchestrates the entire application flow
- Manages step transitions
- Clean, minimal code using custom hooks

### 2. **Header Component** (`components/Header.tsx` - 22 lines)
- Sticky header with branding
- Staff portal navigation link
- Fully responsive

### 3. **Service Card** (`components/ServiceCard.tsx` - 68 lines)
- Individual service display
- Hover effects and animations
- Reusable across all service types

### 4. **Form Field** (`components/FormField.tsx` - 90 lines)
- Generic input component
- Supports: text, email, tel, date, textarea, select
- Built-in error display
- Consistent styling

### 5. **Request Form** (`components/RequestForm.tsx` - 193 lines)
- Complete form layout
- Uses FormField for consistency
- Sections: Personal Info, Request Details, Timeline, File Upload
- Responsive grid layouts

### 6. **Form Hook** (`hooks/useRequestForm.ts` - 91 lines)
- Centralized state management
- Validation logic
- Event handlers
- Form submission
- Easy to test

### 7. **Types** (`lib/types.ts` - 30 lines)
- All TypeScript interfaces
- Type safety across app
- Single source of truth

### 8. **Validation** (`lib/validation.ts` - 17 lines)
- Zod schemas
- Runtime validation
- Security rules

### 9. **Constants** (`lib/constants.ts` - 66 lines)
- Service types configuration
- Initial form data
- Easy to update

---

## 🔌 Backend Integration Readiness

### API Routes Structure (To be created)

```typescript
// app/api/requests/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  const validatedData = requestFormSchema.parse(body)
  
  // Insert to Supabase
  const { data, error } = await supabase
    .from('requests')
    .insert({
      ...validatedData,
      status: 'pending',
      submittedAt: new Date().toISOString()
    })
  
  return Response.json({ success: true, data })
}
```

### Database Schema

```sql
CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_type TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  department TEXT NOT NULL,
  request_details TEXT NOT NULL,
  deadline DATE NOT NULL,
  priority TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  submitted_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## ✅ Benefits of This Structure

### 1. **Maintainability**
- Each component has single responsibility
- Easy to locate and fix bugs
- Clear separation of concerns

### 2. **Scalability**
- Add new service types in constants only
- Create new components without touching existing
- Easy to add features

### 3. **Testability**
```typescript
// Example test
describe('useRequestForm', () => {
  it('validates email domain', () => {
    const { validateField } = useRequestForm()
    expect(validateField('email', 'test@umak.edu.ph')).toBe(true)
    expect(validateField('email', 'test@gmail.com')).toBe(false)
  })
})
```

### 4. **Reusability**
- FormField used everywhere
- ServiceCard reusable
- Hooks shareable

### 5. **Type Safety**
- Full TypeScript coverage
- No `any` types
- Compile-time error checking

---

## 🚀 Next Steps for Backend Integration

### Phase 2A: API Routes
1. Create `/api/requests/route.ts` for submission
2. Create `/api/requests/[id]/route.ts` for updates
3. Add authentication middleware

### Phase 2B: Database
1. Set up Supabase project
2. Create tables and relationships
3. Set up Row Level Security (RLS)

### Phase 2C: File Upload
1. Configure Supabase Storage
2. Add file upload component
3. Handle file validation

### Phase 2D: Email Notifications
1. Integrate Resend/SendGrid
2. Create email templates
3. Set up notification triggers

---

## 📝 Component Usage Examples

### Adding a New Service Type

```typescript
// In lib/constants.ts
const REQUEST_TYPES: RequestType[] = [
  // ... existing types
  { 
    id: 'printing',
    label: 'Printing Services',
    description: 'High-quality printing solutions...',
    number: '07',
    subtypes: ['Bulk Printing', 'Large Format', 'Binding'],
    bgColor: 'bg-yellow-50'
  }
]
```

### Modifying Validation Rules

```typescript
// In lib/validation.ts
export const requestFormSchema = z.object({
  // ... existing fields
  budget: z.number().min(0).optional(), // Add new field
})
```

### Creating Custom Form Field

```typescript
<FormField
  label="Budget"
  name="budget"
  type="number"
  value={formData.budget}
  onChange={(value) => onInputChange('budget', value)}
  helpText="Optional: Specify your budget range"
/>
```

---

## 🔒 Security Features Maintained

✅ **Input Validation** - Zod schemas
✅ **Domain Restriction** - @umak.edu.ph only
✅ **Phone Validation** - Philippine numbers
✅ **Length Limits** - Prevent buffer overflow
✅ **Type Safety** - No injection vulnerabilities
✅ **Error Handling** - Graceful degradation

---

## 📚 Documentation

- **Architecture:** `/docs/ARCHITECTURE.md`
- **Component Docs:** This file
- **API Docs:** (To be created in Phase 2)
- **Testing Guide:** (To be created)

---

**Last Updated:** January 28, 2026  
**Version:** 2.0.0 (Fully Modular)  
**Status:** ✅ Production Ready (Phase 1 - UI Complete)
