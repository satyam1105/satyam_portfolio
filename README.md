# Satyam Shukla — Brutalist Developer Portfolio

A production-ready, bold personal portfolio website built with **Next.js (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, engineered around an expressive, modern **Brutalist UI** aesthetic.

![Brutalist Developer Portfolio](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)

---

## ⚡ Visual Design Architecture (Brutalism UI)

* **Oversized Typography:** High-impact monospace and display typography (`SATYAM SHUKLA`, `404 MISSING`, `LET'S BUILD SOMETHING`).
* **Hard Drop Shadows:** Distinctive brutalist offset shadows (`box-shadow: 4px 4px 0px 0px #000`, `8px 8px 0px 0px #000`, `10px 10px 0px 0px #D4FF00`).
* **High Contrast Palette:**
  * Background: Warm off-white / light cream (`#F8F5EE`)
  * Primary: Solid black (`#0A0A0A`)
  * Accent Primary: Electric lime (`#D4FF00`)
  * Accent Secondary: Vivid yellow (`#FFE600`) & International orange (`#FF5E1E`)
* **Sharp Edges:** Zero soft rounded radii (`rounded-none`), thick borders (`border-2`, `border-3`, `border-4 border-black`).
* **Interactive Micro-Interactions:** Hard hover elevations, active button press displacements, animated marquee ticker ribbons, role typewriter, and an opening intro curtain animation.

---

## 🧭 Page Architecture & Features

### 1. Home (`/`)
* **Memorable Opening Intro Animation:**
  * Displays "SATYAM" in oversized bold typography.
  * Transitions "SHUKLA" into view with a timed reveal.
  * Curtains animate away to uncover the landing page.
  * Utilizes `sessionStorage` so it doesn't replay annoyingly during navigation (with a "REPLAY INTRO" button in the header/footer to test at any time).
  * Respects `prefers-reduced-motion`.
* **Hero Section:**
  * Animated typewriter cycling through Satyam's actual verified roles: `Full Stack Developer`, `Python Developer`, `Software Engineer`, `Web & Graphic Designer`.
  * Resume-driven introduction and professional tagline.
  * Verified profile photo and SRMCEM B.Tech CSE student badge.
  * Three primary action CTAs: `DOWNLOAD CV`, `VIEW PROJECTS`, `CONTACT ME`.
  * One-click "Copy Email" interaction.
* **Marquee Ribbon:** Ticker highlighting key competencies.
* **Core Pillars & Arsenal:** 4 highlighted domains (Full Stack, Python & Automation, Blockchain & AI, Mathematics + Graphic Design).
* **Featured Projects Showcase:** Previews of top projects with modal view triggers.
* **Education & IBM Credentials Spotlight:** Highlights SRMCEM BTech, Purvanchal B.Sc Maths, and IBM Cognitive certificates.

### 2. Projects (`/projects`)
* **Categorized Project Filter:** Filter by `ALL`, `AI & BLOCKCHAIN`, `FULL STACK WEB`, `PYTHON & AUTOMATION`, `GRAPHIC DESIGN`.
* **Brutalist Numbered Cards (`01`, `02`, `03`, `04`):**
  * `01` - **Fraud Detection in SCM Using Hybrid Technology: Blockchain & AI** (B.Tech Capstone Research under SRMCEM faculty).
  * `02` - **Full-Stack Web Application & REST API Architecture** (IBM Cognitive capstone).
  * `03` - **Python Automation & Data Handling Engine** (IBM Cognitive suite).
  * `04` - **Digital Graphic Artistry & Visual Communication System** (Adobe Creative Cloud portfolio).
* **Interactive Deep-Dive Modal:** Complete architectural breakdown, problem solved, system flow, and technology stack.
* Clean conditional links for GitHub and Live Demos without broken buttons.

### 3. Contact (`/contact`)
* **Heading:** `LET'S BUILD SOMETHING.`
* **Three Prominent Channels:**
  * **Email Direct:** `mailto:er.satyamshukla7@gmail.com` with one-click clipboard copy.
  * **WhatsApp:** `https://wa.me/919569075961` with international phone formatting.
  * **LinkedIn:** Direct connection link.
* **Interactive Mailto Transmission Console:** Client-side draft generator for instant reach.
* **Physical Headquarters & Relocation Badge:** Gorakhpur & Lucknow, UP, India.

### 4. Extracurricular (`/extracurricular`)
* **Timeline & Cards Layout:**
  * Academic Research & Review Paper (Supply chain fraud detection with Blockchain & AI).
  * Charismatic Public Speaker & Technical Seminar Orator.
  * Dual Academic Foundation (B.Sc Mathematics + B.Tech CSE).
  * Visual Graphic Design & Motion Asset Production.
  * IBM Cognitive Professional Credentials.
* **Editable Expansion Guide:** Clear, inline instructions for Satyam to append future hackathon prizes, student clubs, or volunteer work in `portfolio.ts`.

---

## 📁 Project Structure

```
antigravity/
├── public/
│   ├── Satyam-Shukla-CV.pdf       # The actual resume PDF
│   ├── Satyam_Shukla_Resume.pdf    # Mirror copy of resume PDF
│   ├── satyam-photo.jpg            # Satyam's actual profile picture
│   └── satyam-id.jpg               # SRMCEM college student ID card
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx            # /contact page
│   │   ├── extracurricular/
│   │   │   └── page.tsx            # /extracurricular page
│   │   ├── projects/
│   │   │   └── page.tsx            # /projects page
│   │   ├── globals.css             # Tailwind v4 Brutalist design system tokens
│   │   ├── layout.tsx              # RootLayout, SEO metadata, Navbar & Footer
│   │   ├── not-found.tsx           # Custom 404 Brutalist page
│   │   └── page.tsx                # / home landing page
│   ├── components/
│   │   ├── BrandIcons.tsx          # GitHub and LinkedIn SVG brand icons
│   │   ├── BrutalistButton.tsx     # Reusable Brutalist button component
│   │   ├── CopyEmailButton.tsx     # One-click copy email with visual tooltip
│   │   ├── Footer.tsx              # Footer with IST clock, status, links
│   │   ├── IntroAnimation.tsx      # Opening "SATYAM SHUKLA" sequence
│   │   ├── MarqueeBanner.tsx       # Scrolling brutalist ticker
│   │   ├── Navbar.tsx              # Navigation bar with active indicator
│   │   ├── ProjectModal.tsx        # Project detail modal dialog
│   │   └── Typewriter.tsx          # Animated typing effect
│   └── data/
│       └── portfolio.ts            # Central single source of truth for all content
├── package.json
└── tsconfig.json
```

---

## 🛠️ How to Customize Your Content

All data is centrally defined in:
```
src/data/portfolio.ts
```

### 1. Update Contact Information & Social Handles
In `src/data/portfolio.ts`:
```typescript
portfolioData.personal.email = "er.satyamshukla7@gmail.com";
portfolioData.personal.phoneDisplay = "+91 95690 75961";
portfolioData.personal.whatsappUrl = "https://wa.me/919569075961";
portfolioData.personal.linkedinUrl = "https://linkedin.com/in/YOUR_PROFILE";
portfolioData.personal.githubUrl = "https://github.com/YOUR_USERNAME";
```

### 2. Updating Resume PDF or Profile Photo
* **Resume:** Replace `public/Satyam-Shukla-CV.pdf` with your updated PDF file (keep the same filename or change `cvFileName` / `cvPath` in `src/data/portfolio.ts`).
* **Profile Photo:** Replace `public/satyam-photo.jpg` with any new headshot image.

### 3. Adding New Projects or Extracurriculars
Append your project or achievement directly to `portfolioData.projects` or `portfolioData.extracurriculars` in `src/data/portfolio.ts`. The UI automatically creates the cards, numbers, filters, and modal dialogs!

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open in browser
# http://localhost:3000
```

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

This project is 100% frontend-only, with no external database or server dependencies, making it optimal for free zero-configuration hosting on **Vercel**:

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/satyam-shukla-portfolio.git
   git branch -M master
   git push -u origin master
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep all default settings (Framework Preset: **Next.js**, Build Command: `next build`).
5. Click **"Deploy"**.
6. Your portfolio is instantly live globally with free HTTPS, automated CI/CD on every commit, and lightning-fast edge delivery!
