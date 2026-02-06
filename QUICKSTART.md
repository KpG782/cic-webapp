# Quick Start Guide - Authentication Setup

## ✅ App Works Without Setup!

**Good news:** The app runs perfectly without Supabase configuration. Authentication features will show a setup guide when needed.

## ⚡ 5-Minute Setup (Optional - for Authentication)

### 1. Create Supabase Project (2 min)
1. Go to https://supabase.com and sign up/login
2. Click "New Project"
3. Fill in project name and password → Create

### 2. Set Up Database (1 min)
1. In Supabase, go to SQL Editor
2. Copy ALL content from `docs/supabase-setup.sql`
3. Paste and click "Run"

### 3. Configure App (1 min)
1. In Supabase: Settings → API
2. Copy your Project URL and anon public key
3. Create `.env.local` in project root:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run the App (1 min)
```bash
npm install
npm run dev
```

**The app will now work!** Visit http://localhost:3000

- Landing page, forms, and dashboard work normally
- `/login` and `/admin` pages will show a setup guide
- Once you add Supabase credentials, authentication will activate automatically

---

## 🔧 Without Supabase Setup

The app runs perfectly and you can:
- ✅ View landing page
- ✅ Access dashboard (no login required)
- ✅ Use all UI components
- ❌ Login/signup requires Supabase setup

When you visit `/login` or `/admin`, you'll see instructions to set up Supabase.

---

## 🔐 With Supabase Setup

Once configured, you get:
- ✅ Full user authentication
- ✅ Admin role management
- ✅ Protected routes
- ✅ Session persistence

## ✅ Test It Works

1. Go to http://localhost:3000/login
2. Click "Sign Up" tab
3. Enter: name, email, password
4. Click Sign Up → You should be redirected to dashboard!
5. Click Logout in sidebar

## 🎯 Make Yourself Admin

1. After signing up, go to Supabase SQL Editor
2. Run:
```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your-email@here.com';
```
3. Logout and login again → You're now admin!

## 🔍 Verify Everything Works

✅ Can sign up new users at `/login`
✅ Can login with existing credentials
✅ Dashboard is protected (redirects if not logged in)
✅ Can logout from sidebar/header
✅ User name shows in sidebar
✅ Admin users can access Team/Settings pages

## 🆘 Quick Fixes

**Error: "Cannot connect"**
- Check `.env.local` exists in project root
- Restart dev server: `npm run dev`

**Can't login after signup**
- In Supabase: Authentication → Settings
- Disable "Enable email confirmations"

**Profile not created**
- Re-run the SQL from `supabase-setup.sql`

---

**Need more details?** See `docs/AUTHENTICATION.md` for complete guide.
