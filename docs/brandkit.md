# UMak Complete Brand Kit for Next.js & Tailwind CSS

## 🎨 Colors

### Primary Colors

#### UMak Blue (Space Cadet)
- **Main**: `#111c4e`
- **RGB**: `rgb(17, 28, 78)`
- **CMYK**: `100, 96, 37, 38`
- **Pantone**: 2766 C

**Shades:**
- `#47528a` (Lighter)
- `#28336b` (Medium)
- `#060e33` (Darker)
- `#01061c` (Darkest)

---

#### UMak Yellow (Maximum Yellow)
- **Main**: `#f5ec3a`
- **RGB**: `rgb(245, 236, 58)`
- **CMYK**: `7, 0, 88, 0`
- **Pantone**: 394 C

**Shades:**
- `#fff989` (Lightest)
- `#fef760` (Light)

---

#### UMak Blue 2 (Silver Lake Blue)
- **Main**: `#105389`
- **RGB**: `rgb(15, 83, 137)`
- **CMYK**: `93, 58, 28, 2`

**Shades:**
- `#c0d5f0` (Lightest)
- `#8bb0dc` (Light)
- `#406fa5` (Medium)
- `#275996` (Dark)

---

### Additional Colors
- `#001478` (Navy Blue)
- `#497ccf` (Sky Blue)
- `#ffffff` (White)
- `#FF0000` (Red)
- `#020727` (Very Dark Blue)

---

## 🔤 Typography

### Primary Fonts

#### **Marcellus**
- **Usage**: Headers, sub-headers, institutional names, office/unit names
- **Font Weight**: Regular
- **Google Fonts**: `https://fonts.googleapis.com/css2?family=Marcellus&display=swap`

#### **Metropolis**
- **Usage**: Sub-headings, body text
- **Font Weights**: Multiple weights available
- **Note**: Custom font (not on Google Fonts)

---

## ⚙️ Tailwind CSS Configuration

### Complete `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        umak: {
          // Primary Blue (Space Cadet)
          blue: {
            DEFAULT: '#111c4e',
            50: '#47528a',
            100: '#28336b',
            200: '#060e33',
            300: '#01061c',
          },
          // Primary Yellow (Maximum Yellow)
          yellow: {
            DEFAULT: '#f5ec3a',
            50: '#fff989',
            100: '#fef760',
          },
          // Secondary Blue (Silver Lake Blue)
          'blue-2': {
            DEFAULT: '#105389',
            50: '#c0d5f0',
            100: '#8bb0dc',
            200: '#406fa5',
            300: '#275996',
          },
          // Graphics & Accent Colors
          navy: '#001478',
          sky: '#497ccf',
          red: '#FF0000',
          'dark-navy': '#020727',
          white: '#ffffff',
        },
      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        metropolis: ['Metropolis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 📦 Next.js Font Setup

### Option 1: Using Google Fonts (Marcellus)

#### `app/layout.js` or `pages/_app.js`

```jsx
import { Marcellus } from 'next/font/google'
import './globals.css'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={marcellus.variable}>
      <body>{children}</body>
    </html>
  )
}
```

---

### Option 2: Using Custom Fonts (Metropolis)

#### Place font files in `/public/fonts/`

```
/public
  /fonts
    /metropolis
      - Metropolis-Regular.woff2
      - Metropolis-Medium.woff2
      - Metropolis-SemiBold.woff2
      - Metropolis-Bold.woff2
```

#### `app/globals.css` or `styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Metropolis Font Family */
@font-face {
  font-family: 'Metropolis';
  src: url('/fonts/metropolis/Metropolis-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Metropolis';
  src: url('/fonts/metropolis/Metropolis-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Metropolis';
  src: url('/fonts/metropolis/Metropolis-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Metropolis';
  src: url('/fonts/metropolis/Metropolis-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Optional: Set as CSS variables */
:root {
  --font-marcellus: 'Marcellus', serif;
  --font-metropolis: 'Metropolis', sans-serif;
}
```

---

### Option 3: Using Local Font with Next.js Font Optimization

#### `app/layout.js`

```jsx
import localFont from 'next/font/local'
import { Marcellus } from 'next/font/google'
import './globals.css'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
})

const metropolis = localFont({
  src: [
    {
      path: '../public/fonts/metropolis/Metropolis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/metropolis/Metropolis-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/metropolis/Metropolis-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/metropolis/Metropolis-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-metropolis',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${marcellus.variable} ${metropolis.variable}`}>
      <body className="font-metropolis">{children}</body>
    </html>
  )
}
```

---

## 🎯 Usage Examples

### Typography Usage

```jsx
// Headers with Marcellus
<h1 className="font-marcellus text-4xl text-umak-blue">
  University of Makati
</h1>

<h2 className="font-marcellus text-2xl text-umak-blue">
  Office Name
</h2>

// Body text with Metropolis
<p className="font-metropolis text-base text-gray-700">
  This is body text using Metropolis font.
</p>

// Different font weights
<p className="font-metropolis font-normal">Regular text</p>
<p className="font-metropolis font-medium">Medium text</p>
<p className="font-metropolis font-semibold">Semi-bold text</p>
<p className="font-metropolis font-bold">Bold text</p>
```

---

### Color Usage

```jsx
// Primary Colors
<div className="bg-umak-blue text-white">UMak Blue Background</div>
<div className="bg-umak-yellow text-umak-blue">UMak Yellow Background</div>

// Color Shades
<div className="bg-umak-blue-50">Light Blue</div>
<div className="bg-umak-blue-100">Medium Blue</div>
<div className="bg-umak-blue-200">Darker Blue</div>

// Text Colors
<h1 className="text-umak-blue">Blue Text</h1>
<p className="text-umak-yellow">Yellow Text</p>

// Border Colors
<div className="border-2 border-umak-blue">Blue Border</div>
```

---

### Combined Typography + Colors

```jsx
// Official Header Style
<header className="bg-umak-blue text-white">
  <h1 className="font-marcellus text-3xl">
    University of Makati
  </h1>
  <p className="font-metropolis text-sm">
    J.P Rizal Extension, West Rembo, Taguig City
  </p>
</header>

// Office Name Card
<div className="bg-white border-t-4 border-umak-yellow p-6">
  <h2 className="font-marcellus text-2xl text-umak-blue mb-2">
    Center for Integrated Communications
  </h2>
  <p className="font-metropolis text-gray-600">
    cic@umak.edu.ph
  </p>
</div>

// Button Styles
<button className="bg-umak-blue hover:bg-umak-blue-50 text-white font-metropolis font-semibold px-6 py-3 rounded">
  Learn More
</button>

<button className="bg-umak-yellow hover:bg-umak-yellow-50 text-umak-blue font-metropolis font-semibold px-6 py-3 rounded">
  Apply Now
</button>
```

---

## 📐 Brand Guidelines Summary

### Typography Rules
- **Headers/Titles**: Use **Marcellus** for institutional names, office names, headers
- **Body Text**: Use **Metropolis** for sub-headings, body text, general content
- **Font Pairing**: Always pair Marcellus (headers) with Metropolis (body)

### Color Rules
- **Primary**: UMak Blue (`#111c4e`) + UMak Yellow (`#f5ec3a`)
- **Secondary**: Up to 3 colors can complement primary palette
- **Consistency**: Use official colors consistently across all materials
- **White Background**: `#FFFFFF` for logo clarity

### Logo Usage
- **Download Official Logos**: `bit.ly/UMakLogo`
- **Don't**: Distort, modify colors, recreate with AI, or use unofficial versions
- **Spacing**: Maintain clear space around logo
- **Formats**: Use PNG for digital, vector formats for print

---

## 📱 Responsive Design Classes

```jsx
// Responsive Typography
<h1 className="font-marcellus text-2xl md:text-3xl lg:text-4xl text-umak-blue">
  Responsive Heading
</h1>

// Responsive Colors
<div className="bg-umak-blue md:bg-umak-yellow lg:bg-umak-blue-2">
  Responsive Background
</div>

// Responsive Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>
```

---

## 🎨 Component Examples

### UMak Card Component

```jsx
const UMakCard = ({ title, description, children }) => {
  return (
    <div className="bg-white border-l-4 border-umak-yellow shadow-lg rounded-lg overflow-hidden">
      <div className="bg-umak-blue text-white p-4">
        <h3 className="font-marcellus text-xl">{title}</h3>
      </div>
      <div className="p-6">
        <p className="font-metropolis text-gray-700 mb-4">{description}</p>
        {children}
      </div>
    </div>
  )
}
```

### UMak Button Component

```jsx
const UMakButton = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-umak-blue hover:bg-umak-blue-50 text-white',
    secondary: 'bg-umak-yellow hover:bg-umak-yellow-50 text-umak-blue',
    outline: 'border-2 border-umak-blue text-umak-blue hover:bg-umak-blue hover:text-white',
  }

  return (
    <button
      className={`${variants[variant]} font-metropolis font-semibold px-6 py-3 rounded transition-colors duration-200`}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 📋 Quick Reference

| Element | Font | Color | Usage |
|---------|------|-------|-------|
| Page Headers | Marcellus | `#111c4e` | Main titles |
| Office Names | Marcellus | `#111c4e` | Department names |
| Body Text | Metropolis | `#374151` | Content |
| Buttons (Primary) | Metropolis | BG: `#111c4e` | CTAs |
| Buttons (Secondary) | Metropolis | BG: `#f5ec3a` | Secondary actions |
| Links | Metropolis | `#105389` | Hyperlinks |

---

## 📞 Contact for Brand Assets

**UMak Center for Integrated Communications**
- Email: cic@umak.edu.ph
- Brand Guide: www.UMak.edu.ph/brandguide
- Logo Download: bit.ly/UMakLogo

---

## ⚠️ Important Notes

1. **Never** use logos from search engines or Wikipedia
2. **Never** recreate the seal with AI
3. **Always** download official assets from bit.ly/UMakLogo
4. **Always** maintain proper spacing around logos
5. **Never** modify the seal elements or colors
6. For merchandise, get approval from ITSO and CIC

Searched for files matching `**/brandkit.md`, 1 match

Read [](file:///c%3A/Users/kpg78/Downloads/CIC_webapp)

Read [](file:///c%3A/Users/kpg78/Downloads/CIC_webapp/docs/brandkit.md#1-1), lines 1 to 200

Perfect! Now I can see the UMak brand guidelines clearly. The fonts are:
- **Marcellus** (Regular weight) for headers/institutional names
- **Metropolis** (Multiple weights: 400, 500, 600, 700) for sub-headings and body text

The current setup is correct! Now let me verify the proper font usage pattern and apply it consistently across the landing page according to UMak standards: 

Read [](file:///c%3A/Users/kpg78/Downloads/CIC_webapp/docs/brandkit.md#200-200), lines 200 to 300

Perfect! Now I understand the UMak font usage properly:
- **Marcellus** = Headers, institutional names (font-marcellus)
- **Metropolis** = Sub-headings and body text (font-metropolis with weights 400/500/600/700)

The current implementation is already correct! The fonts are properly configured. Now let me verify the usage is consistent with UMak standards - Marcellus should be Regular weight only, and Metropolis handles all the weight variations: 

Using "Multi-Replace String in Files"


```

```
Perfect! I've updated the landing page to follow UMak's proper font usage standards:

## ✅ Applied UMak Font Style Guidelines:

**Marcellus Usage** (Headers & Institutional Names):
- ✅ Always use **Regular weight only** (no bold)
- Applied to: Main header, hero title, all h2/h3 section headings, footer heading
- Removed all `font-bold` from Marcellus elements

**Metropolis Usage** (Sub-headings & Body Text):
- ✅ **font-bold (700)**: Form labels, buttons, emphasis text
- ✅ **font-semibold (600)**: Links, secondary emphasis
- ✅ **font-medium (500)**: Subtle emphasis
- ✅ **font-normal (400)**: Body text, descriptions, inputs

The typography now matches UMak's official brand standards where Marcellus provides elegant institutional headers in Regular weight, while Metropolis handles all body text and emphasis through its multiple weight variations (400/500/600/700).

Made changes.