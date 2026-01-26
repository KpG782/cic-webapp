# CIC Web Application - Phase 1 UI

## 🎨 Project Overview

This is the **Phase 1 UI implementation** for the University of Makati's Center for Integrated Communications (CIC) submission management portal. Built with Next.js 14, TypeScript, and Tailwind CSS following UMak's official brand guidelines.

---

## ✅ Phase 1 Features (UI Complete)

### Implemented
- ✅ **Brand-compliant Design** - UMak blue, yellow, and typography (Marcellus + Metropolis)
- ✅ **Authentication UI** - Login page with demo credentials
- ✅ **Dashboard Layout** - Sidebar navigation with header
- ✅ **Dashboard Overview** - Statistics cards and recent submissions table
- ✅ **Submissions Management** - Full CRUD interface with filters
- ✅ **Responsive Design** - Mobile-friendly layouts
- ✅ **Reusable Components** - Button, Card, Badge, LoadingSpinner

### Mock Data
Currently using mock data (`lib/mockData.ts`) to demonstrate UI functionality. Phase 2 will integrate with Supabase for real-time database.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
CIC_webapp/
├── app/
│   ├── dashboard/
│   │   ├── submissions/
│   │   │   └── page.tsx          # Submissions table with filters
│   │   ├── team/
│   │   │   └── page.tsx          # Team management (placeholder)
│   │   ├── settings/
│   │   │   └── page.tsx          # Settings (placeholder)
│   │   ├── layout.tsx            # Dashboard layout wrapper
│   │   └── page.tsx              # Dashboard overview
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Login page
│   └── globals.css               # Global styles + fonts
├── components/
│   ├── Sidebar.tsx               # Left navigation sidebar
│   ├── Header.tsx                # Top header with search
│   ├── Button.tsx                # Reusable button component
│   ├── Card.tsx                  # Reusable card component
│   ├── Badge.tsx                 # Status/priority badges
│   └── LoadingSpinner.tsx        # Loading indicator
├── lib/
│   └── mockData.ts               # Mock submission data
├── public/
│   └── fonts/                    # Metropolis font files (add here)
├── tailwind.config.js            # UMak brand colors config
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 UMak Brand Implementation

### Colors
```typescript
// Primary
umak-blue: #111c4e      // Headers, sidebar, buttons
umak-yellow: #f5ec3a    // Accents, highlights

// Secondary
umak-blue-2: #105389    // Links, secondary actions
```

### Typography
- **Marcellus** - Headers and titles
- **Metropolis** - Body text and UI elements

---

## 🔐 Demo Login

**Email:** `admin@umak.edu.ph`  
**Password:** `demo123`

(Any credentials work in this demo - no validation yet)

---

## 📱 Pages & Features

### 1. Login Page (`/`)
- UMak-branded login form
- Demo credentials displayed
- Smooth transition to dashboard

### 2. Dashboard Overview (`/dashboard`)
- **Statistics Cards**: Total, Pending, In Progress, Completed
- **Recent Submissions Table**: Last 5 submissions
- Priority and status badges
- Quick view of system activity

### 3. Submissions Management (`/dashboard/submissions`)
- **Full submissions table** with all details
- **Filters**: Status (All/Pending/In Progress/Completed)
- **Filters**: Priority (All/High/Medium/Low)
- **Actions**: View, Edit, Delete (UI only)
- **Add New Button**: For creating submissions

### 4. Team & Settings (`/dashboard/team`, `/dashboard/settings`)
- Placeholder pages for Phase 2

---

## 🎯 Next Steps (Phase 2 - Backend Integration)

1. **Supabase Setup**
   - Create database schema
   - Configure authentication
   - Set up real-time subscriptions

2. **API Integration**
   - Replace mock data with Supabase queries
   - Implement CRUD operations
   - Add form validation

3. **JotForm Webhook**
   - Create webhook endpoint
   - Process form submissions
   - Save to database

4. **n8n Workflow**
   - Set up Supabase → Notion sync
   - Configure error handling

5. **Real-time Features**
   - WebSocket connections
   - Live submission updates
   - Notifications

---

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Marcellus) + Custom (Metropolis)
- **Date Formatting**: date-fns

---

## 📝 Notes

### Metropolis Font
The Metropolis font files need to be added to `/public/fonts/metropolis/` directory. Download from the official source and include:
- Metropolis-Regular.woff2
- Metropolis-Medium.woff2
- Metropolis-SemiBold.woff2
- Metropolis-Bold.woff2

### Mock Data
Currently shows 6 sample submissions. Edit `lib/mockData.ts` to add more test data.

---

## 🎓 About

**Developer**: Ken Patrick Garcia  
**Project**: CIC Intern Project - Submission Management System  
**Institution**: University of Makati - Center for Integrated Communications

---

## 📞 Contact

For questions or support:
- **Email**: cic@umak.edu.ph
- **Brand Guidelines**: www.UMak.edu.ph/brandguide

---

## 📄 License

This project follows UMak's brand guidelines and is intended for internal use by the Center for Integrated Communications.
