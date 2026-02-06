# 🎓 CIC Web Application
## University of Makati - Center for Integrated Communications Portal

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![License](https://img.shields.io/badge/license-Private-red.svg)

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Authentication](#-authentication)
- [Dashboard Features](#-dashboard-features)
- [Development](#-development)
- [Deployment](#-deployment)
- [Documentation](#-documentation)

---

## 🎯 Overview

The CIC Web Application is a comprehensive submission management portal built for the University of Makati's Center for Integrated Communications. It streamlines the request process for university departments seeking design, video, social media, and other communication services.

**Current Status:** Phase 1 Complete - Full UI implementation with authentication system and advanced filtering.

**Built for:** University of Makati (UMak)  
**Brand Compliance:** Follows official UMak brand guidelines (Blue: #001A41, Yellow: #FFD700)  
**Target Users:** UMak faculty, staff, students, and CIC administrators

---

## ✨ Features

### 🎨 Landing Page
- **Hero Section** - Compelling CTA with brand-compliant design
- **Services Showcase** - 6 service categories with detailed descriptions:
  - Graphic Design (Posters, Infographics, Certificates, Social Media Graphics)
  - Video Production (Event Coverage, Promotional Videos, Documentaries)
  - Event Coverage (Photography, Videography, Live Streaming)
  - Social Media Management (Content Creation, Scheduling, Analytics)
  - Branding & Identity (Logo Design, Brand Guidelines, Marketing Materials)
  - Website Development (Landing Pages, Portals, Web Applications)
- **About Section** - Team introduction and mission statement
- **Request Form** - Comprehensive submission form with real-time validation
- **Footer** - Contact information and social media links

### 🔐 Authentication System
- **Supabase Integration** - Full authentication with Row Level Security (RLS)
- **User Login** - Email/password authentication for regular users
- **Admin Access** - Separate admin login portal
- **Session Management** - Secure JWT-based sessions
- **Protected Routes** - Middleware-based route protection
- **Graceful Degradation** - Works without Supabase (shows setup guide)
- **User Profiles** - Displays user name, email, role, and avatar initials

### 📊 Dashboard (Admin/User)
- **Statistics Cards** - Real-time metrics:
  - Total Requests
  - Pending Submissions
  - In Progress Tasks
  - Completed Projects
- **Advanced Filtering** - Filter by:
  - Request Type (6 categories)
  - Month (Jan-Dec)
  - Year (dynamic based on data)
  - Multiple filters simultaneously
- **Active Filter Display** - Visual badges with quick removal
- **Submissions Table** - Sortable, responsive table with:
  - Requestor information (name, email)
  - Request type badges
  - Priority indicators (High, Medium, Low)
  - Status tracking (Pending, In Progress, Completed)
  - Submission dates
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Collapsible Filters** - Clean UI with expandable filter panel

### 🎟️ Certificate Generator (Bonus Feature)
- **Batch Generation** - Create multiple certificates at once
- **CSV Import** - Upload recipient data via CSV
- **Custom Text Controls** - Adjust font size, positioning, color
- **Live Preview** - Real-time canvas preview
- **Bulk Export** - Download all certificates as ZIP file
- **Template Support** - Upload custom certificate templates

### 🎨 Brand Compliance
- **Official Colors** - UMak Blue (#001A41), Yellow (#FFD700)
- **Typography** - Marcellus (headings) + Metropolis (body text)
- **Responsive Logos** - SVG-based UMak logo with proper sizing
- **Consistent Spacing** - Tailwind utility classes for uniform design
- **Accessibility** - WCAG 2.1 compliant color contrast

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14.2.35** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.3.3** - Type safety and better DX

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.33** - CSS processing
- **Custom Fonts** - Marcellus + Metropolis via Google Fonts

### Authentication & Database
- **Supabase 2.39.3** - PostgreSQL database with real-time subscriptions
- **@supabase/auth-helpers-nextjs 0.9.0** - Next.js authentication helpers
- **Row Level Security** - Database-level access control

### Validation & Forms
- **Zod 4.3.6** - TypeScript-first schema validation
- **React Hooks** - Custom hooks for form management

### UI Components & Icons
- **Lucide React 0.312.0** - Beautiful icon library (700+ icons)
- **Custom Components** - Reusable, typed components

### File Processing (Certificate Generator)
- **JSZip 3.10.1** - Create ZIP archives in browser
- **FileSaver 2.0.5** - Save files client-side
- **Canvas API** - Certificate rendering

### Development Tools
- **ESLint 9.0.0** - Code linting
- **TypeScript ESLint** - TypeScript linting rules
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- **Git** for version control
- **Supabase Account** (optional for auth)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd CIC_webapp
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup (Optional for Auth)**

Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note:** The app works without Supabase! If you don't configure it, you'll see a setup guide on the login page.

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

### Quick Test (Without Supabase)
You can explore the entire UI without setting up Supabase. The authentication will show a setup guide, and you can use mock data to test the dashboard filters.

---

## 📂 Project Structure

```
CIC_webapp/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── login/                   # User login page
│   │   └── page.tsx
│   ├── admin/                   # Admin login page
│   │   └── page.tsx
│   └── dashboard/               # Dashboard pages
│       ├── page.tsx             # Main dashboard
│       ├── layout.tsx           # Dashboard layout
│       ├── submissions/         # Submissions management
│       ├── calendar/            # Calendar view
│       ├── team/                # Team management
│       ├── settings/            # Settings page
│       ├── tools/               # Tools & utilities
│       ├── automation/          # Automation features
│       └── photos/              # Photo gallery
│
├── components/                   # Reusable components
│   ├── Badge.tsx                # Status/priority badges
│   ├── Button.tsx               # Styled button component
│   ├── Card.tsx                 # Card container
│   ├── FormField.tsx            # Form input wrapper
│   ├── Header.tsx               # Navigation header
│   ├── LoadingSpinner.tsx       # Loading indicator
│   ├── RequestForm.tsx          # Main request form
│   ├── ServiceCard.tsx          # Service showcase card
│   ├── Sidebar.tsx              # Dashboard sidebar
│   ├── ProtectedRoute.tsx       # Route protection HOC
│   ├── SetupRequired.tsx        # Supabase setup guide
│   ├── landing/                 # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── dashboard/               # Dashboard components
│   │   ├── DashboardHeader.tsx
│   │   ├── StatCard.tsx
│   │   ├── StatusBadge.tsx
│   │   └── PriorityBadge.tsx
│   └── certificate/             # Certificate generator
│       ├── CertificateCanvas.tsx
│       ├── TextControls.tsx
│       └── BatchGenerator.tsx
│
├── contexts/                     # React contexts
│   ├── AuthContext.tsx          # Authentication state
│   └── SidebarContext.tsx       # Sidebar state
│
├── lib/                          # Utility libraries
│   ├── supabase.ts              # Supabase client
│   ├── constants.ts             # App constants
│   ├── types.ts                 # TypeScript types
│   ├── validation.ts            # Zod schemas
│   ├── mockData.ts              # Mock submission data
│   └── batch-generator.ts       # Certificate batch logic
│
├── types/                        # Type definitions
│   ├── certificates.ts          # Certificate types
│   └── batch.ts                 # Batch processing types
│
├── public/                       # Static assets
│   ├── certificates/            # Certificate templates
│   └── fonts/                   # Custom fonts (optional)
│
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md          # Architecture overview
│   ├── COMPONENTS.md            # Component documentation
│   ├── DASHBOARD_GUIDE.md       # Dashboard usage guide
│   ├── AUTHENTICATION.md        # Auth setup guide
│   ├── brandkit.md              # UMak brand guidelines
│   └── spec.md                  # Feature specifications
│
├── middleware.ts                 # Next.js middleware (route protection)
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🔐 Authentication

### Setup Guide

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for database provisioning

2. **Create Database Tables**

Run this SQL in Supabase SQL Editor:
```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create submissions table (future use)
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  department TEXT,
  type TEXT NOT NULL,
  details TEXT NOT NULL,
  priority TEXT DEFAULT 'Medium',
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own submissions"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create submissions"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

3. **Get API Keys**
   - Go to Project Settings → API
   - Copy `URL` and `anon/public` key
   - Add to `.env.local`

4. **Test Authentication**
   - Restart dev server
   - Visit `/login`
   - Sign up with a new account
   - Login and access dashboard

### Login Without Supabase
If you don't configure Supabase, the app will:
- Show a setup guide on `/login` and `/admin`
- Display step-by-step instructions
- Still allow you to explore the UI
- Mock authentication won't persist

---

## 📊 Dashboard Features

### Statistics Cards
- **Total Requests** - Aggregate count of all submissions
- **Pending** - Awaiting review or approval
- **In Progress** - Currently being worked on
- **Completed** - Successfully finished

### Filtering System
1. **Type Filter** - 6 service categories
2. **Month Filter** - Jan-Dec selection
3. **Year Filter** - Dynamic years from data
4. **Combine Filters** - Use multiple filters together
5. **Clear Filters** - Remove individual or all filters

### Submissions Table
- **Columns:**
  - Requestor (name + email)
  - Type (badge)
  - Request Details (truncated)
  - Priority (color-coded badge)
  - Status (dynamic badge)
  - Submitted Date
- **Features:**
  - Responsive (hides columns on mobile)
  - Hover states
  - Empty state when no results
  - Shows filtered count

---

## 🔧 Development

### Commands
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Code Style
- **TypeScript** - All files use `.ts` or `.tsx`
- **Components** - Functional components with hooks
- **Props** - Typed interfaces for all props
- **Naming** - PascalCase for components, camelCase for functions
- **Functions** - Arrow functions preferred
- **Imports** - Absolute imports from `@/` alias

### Adding New Features
1. **Create types** in `lib/types.ts`
2. **Add validation** in `lib/validation.ts`
3. **Build component** in `components/`
4. **Add route** in `app/`
5. **Update constants** if needed
6. **Document** in `docs/`

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables
```env
# Required for authentication
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Build Output
- **Static Pages** - Landing page, login, admin
- **Dynamic Pages** - Dashboard (requires authentication)
- **API Routes** - None (using Supabase directly)

---

## 📚 Documentation

- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - System design and patterns
- **[COMPONENTS.md](docs/COMPONENTS.md)** - Component API reference
- **[DASHBOARD_GUIDE.md](docs/DASHBOARD_GUIDE.md)** - Dashboard usage
- **[AUTHENTICATION.md](docs/AUTHENTICATION.md)** - Auth setup guide
- **[brandkit.md](docs/brandkit.md)** - UMak brand guidelines
- **[spec.md](docs/spec.md)** - Feature specifications
- **[QUICKSTART.md](QUICKSTART.md)** - Quick setup guide
- **[PROJECT_ASSESSMENT.md](PROJECT_ASSESSMENT.md)** - Architecture review & ratings

---

## 🎓 University of Makati Branding

### Colors
- **Primary Blue:** `#001A41` (umak-blue)
- **Light Blue:** `#2563EB` (umak-blue-50)
- **Accent Yellow:** `#FFD700` (umak-yellow)

### Typography
- **Headings:** Marcellus (serif, elegant)
- **Body Text:** Metropolis (sans-serif, modern)

### Logo Usage
- Always use official UMak logo
- Maintain proper spacing and sizing
- Never distort or recolor

---

## 🤝 Contributing

This is a private university project. For feature requests or bug reports, contact the CIC development team.

---

## 📄 License

Private - University of Makati  
All rights reserved.

---

## 👥 Credits

**Developed for:** University of Makati - Center for Integrated Communications  
**Built with:** Next.js, TypeScript, Tailwind CSS, Supabase  
**Design:** Following official UMak brand guidelines

---

## 📞 Support

For technical support or questions:
- **Email:** cic@umak.edu.ph
- **Office:** Center for Integrated Communications, UMak Campus

---

**Last Updated:** February 6, 2026  
**Version:** 0.1.0  
**Status:** Phase 1 Complete ✅


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

**Last Updated:** February 6, 2026  
**Version:** 0.1.0  
**Status:** Phase 1 Complete ✅

