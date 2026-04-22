# Mohamed Noor — Portfolio

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Geist** font.
Contact form powered by **Resend**. Booking via **Calendly**. Deploy target: **Vercel**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Then edit .env.local and add your Resend API key

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key — get one at [resend.com](https://resend.com) |

---

## Pre-deployment Checklist

### 1. Resend (contact form email)
- Sign up at [resend.com](https://resend.com)
- Create an API key and add it to `.env.local` as `RESEND_API_KEY`
- The `from` address in `app/api/contact/route.ts` is set to `onboarding@resend.dev`
  which only delivers to your own verified Resend email address — fine for testing
- **For production**: verify your domain with Resend and change the `from` field to
  something like `hello@yourdomain.com`

### 2. Update the Holding Hands live URL
- In `lib/projects.ts`, set `liveUrl` to the actual site URL once it's ready

### 3. Add more projects
- Projects are defined in `lib/projects.ts` — just add objects to the array

### 4. Social links
- GitHub and LinkedIn are already wired to your handles
- To add more (Twitter/X, etc.), update `components/layout/Navbar.tsx` and `Footer.tsx`

---

## Deploying to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub integration (recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Add `RESEND_API_KEY` under **Settings → Environment Variables**
4. Deploy

Vercel auto-detects Next.js — no extra config needed.

---

## File Structure

```
app/
  layout.tsx          Root layout — Geist font, dark-mode script, Navbar, Footer
  page.tsx            Home (Hero + Highlights)
  about/page.tsx      About
  work/page.tsx       Work / Projects
  contact/page.tsx    Contact (form + Calendly)
  api/contact/route.ts  POST endpoint → Resend

components/
  layout/
    Navbar.tsx        Fixed nav with active-link highlighting + mobile menu
    Footer.tsx
  ui/
    FadeIn.tsx        IntersectionObserver scroll-fade wrapper
    ThemeToggle.tsx   Dark/light toggle, persisted in localStorage
  home/
    Hero.tsx          Full-viewport landing section
    Highlights.tsx    Three-column "What I Do" grid
  work/
    ProjectCard.tsx   Project card with tags + links
  contact/
    ContactForm.tsx   react-hook-form + Zod + /api/contact
    CalendlyEmbed.tsx Inline Calendly widget

lib/
  projects.ts         Project data — edit this to add/update projects
  utils.ts            cn() helper (clsx + tailwind-merge)
```

---

## Theme

Dark mode is the default. The theme preference is stored in `localStorage` and a
small inline script in `app/layout.tsx` applies the `dark` class before hydration
to prevent any flash of light mode.

Colors are defined as CSS custom properties in `app/globals.css` and referenced
throughout as `var(--accent)`, `var(--text)`, etc.
