# Authentication Setup Guide

## Overview
This application now has full authentication functionality for both regular users and administrators using Supabase Auth.

## Features
- ✅ User registration and login
- ✅ Admin login with role-based access
- ✅ Protected routes (dashboard requires authentication)
- ✅ Session management
- ✅ Logout functionality
- ✅ Role-based UI (admin vs user)

## Setup Instructions

### 1. Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Wait for the project to be set up

### 2. Set up the Database
Run the following SQL in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('user', 'admin')) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow public insert for new user registration
CREATE POLICY "Anyone can create a profile"
  ON profiles FOR INSERT
  WITH CHECK (true);

-- Create a function to automatically create a profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the function
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create an admin user (update with your email)
-- After signing up, run this to make yourself an admin:
-- UPDATE profiles SET role = 'admin' WHERE email = 'your-email@umak.edu.ph';
```

### 3. Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Get your Supabase credentials from your project settings:
   - Project URL: `https://[your-project-id].supabase.co`
   - Anon/Public Key: Found in Project Settings > API
3. Update `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run the Application
```bash
npm run dev
```

## Usage

### For Regular Users
1. Go to `/login` or click "Login" in the header
2. Sign up with your email and password
3. You'll be redirected to the dashboard
4. Access is limited to user-level features

### For Administrators
1. First, sign up as a regular user at `/login`
2. In Supabase, run this SQL to make yourself an admin:
   ```sql
   UPDATE profiles SET role = 'admin' WHERE email = 'your-email@umak.edu.ph';
   ```
3. Log out and log back in
4. You now have access to all admin features (Team, Settings, etc.)
5. Alternatively, use `/admin` for admin-branded login page

## Routes

- `/` - Landing page (public)
- `/login` - User login/signup page
- `/admin` - Admin login page (same auth, different UI)
- `/dashboard/*` - Protected dashboard routes (requires authentication)

## Middleware Protection

The `/middleware.ts` file automatically:
- Redirects unauthenticated users to `/login` when accessing `/dashboard`
- Redirects authenticated users away from login pages
- Checks admin role for admin-only routes

## Customization

### Add More Admin-Only Routes
Edit `middleware.ts` and add your routes:

```typescript
const isAdminRoute = req.nextUrl.pathname.startsWith('/dashboard/team') ||
                     req.nextUrl.pathname.startsWith('/dashboard/settings') ||
                     req.nextUrl.pathname.startsWith('/dashboard/your-new-route')
```

### Change User Roles
You can extend the role system by:
1. Modifying the `role` column in Supabase
2. Updating the TypeScript types in `lib/supabase.ts`
3. Adjusting middleware logic

## Troubleshooting

### "Invalid login credentials"
- Check that your Supabase environment variables are correct
- Verify email confirmation is disabled in Supabase Auth settings (for development)

### Users can't access dashboard
- Check middleware configuration
- Verify the user session exists (check browser console)
- Ensure `.env.local` is properly configured

### Profile not created on signup
- Check if the trigger `on_auth_user_created` is enabled
- Verify RLS policies are configured correctly

## Security Notes

- Never commit `.env.local` to version control
- Row Level Security (RLS) is enabled on the profiles table
- Admin role should be granted manually via SQL, not through the app
- Consider adding email verification in production

## Next Steps

- Set up email verification for production
- Add password reset functionality
- Implement OAuth providers (Google, GitHub, etc.)
- Add user profile editing
- Create admin panel for managing users
