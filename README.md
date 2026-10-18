# Hindu Telugu Wedding Invitation Website

A modern, minimal, mobile-first single-page wedding invitation rooted in **Telangana's culture, handloom heritage, and agricultural traditions**.

Built with **Vite, React, TypeScript, and clean CSS custom properties**, optimized for fast static deployment on **Vercel**.

---

## 🌾 Design Direction & Heritage

- **Concept:** *"Rooted in Heritage, Growing Together"* — blending traditional Telugu matrimonial warmth with subtle nods to Telangana's fertile soil, agricultural research, and handloom culture.
- **Cultural Motifs:**
  - **Pochampally Ikat:** Restrained geometric diamond rhythm divider.
  - **Toranam:** Delicate mango-leaf garland welcome framing the hero.
  - **Muggu / Kolam:** Fine line separators celebrating auspicious rituals.
  - **Botanical Art:** Subtle seed-panicle and leaf contours representing growth and cultivation without clinical or cliché imagery.
- **Provisional Typography:**
  - **English Display:** `Cormorant Garamond` (editorial, elegant serif)
  - **Telugu Script:** `Noto Serif Telugu` (authentic, readable Telugu rendering)
  - **Body & UI:** `Manrope` (clean, contemporary sans-serif)
- **Provisional Palette:**
  - Paper: `#F8F5EF`
  - Ink: `#292720` (WCAG AAA compliant contrast)
  - Vermilion: `#8D3028` (Auspicious accent)
  - Leaf Green: `#53684D`
  - Antique Gold: `#B99A5B` (Thin rules and small accents only)
  - Sage: `#DDE4D5` (Soft narrative section surface)

---

## 🛠️ Project Structure

```text
public/
  images/
    README.md                  # Photo specifications and placement guide
src/
  components/
    AuspiciousBanner.tsx       # Family-approved invocation banner
    DecorativeMotif.tsx        # Inline SVGs: Ikat divider, Toranam, Botanical panicle, Muggu
    PlaceholderPhoto.tsx       # Accessible CSS-backed frames for future photos
    SectionHeader.tsx          # Bilingual-ready section headers
  data/
    wedding.ts                 # Centralized single source of truth for all content
  sections/
    HeroSection.tsx            # Names, invocation, date highlight, hero photo placeholder
    InvitationSection.tsx      # Formal invitation wording & family host details
    WeddingDetailsSection.tsx  # Muhurtham, Lagna time, date, venue cards
    CeremonyScheduleSection.tsx# Optional sequence of celebration events
    CoupleSection.tsx          # "Roots and Growth" narrative & agricultural research connection
    VenueSection.tsx           # Venue address, directions link, parking & travel notes
    ClosingSection.tsx         # Elders' blessings and warm sign-off
  styles/
    tokens.css                 # Centralized CSS variables (palette, typography, spacing)
    global.css                 # CSS reset, responsive rules, accessibility, reduced-motion
  App.tsx                      # Semantic long-page layout (<header>, <main>, <footer>)
  main.tsx                     # React 19 root mounting
index.html                     # HTML shell, Google Fonts preconnect, meta tags
package.json                   # Scripts and dependencies
tsconfig.json                  # TypeScript configuration
vite.config.ts                 # Vite bundler configuration
vercel.json                    # Static deployment configuration
wedding-site-project-brief.md  # Detailed creative brief and design rationale
wedding-details.template.md    # Content collection template for family approval
```

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher recommended; verified with v24.13.0)
- npm (v9 or higher; verified with v11.6.2)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The site will start at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
This compiles TypeScript (`tsc`) and outputs an optimized static build into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Update Content and Photos

### 1. Wedding Details
All website content is centralized in a single typed file:
👉 [`src/data/wedding.ts`](file:///c:/Users/SHERI%20VAIJAYANTH/Desktop/Projects/Wedding%20Website/src/data/wedding.ts)

- Gather family-approved details using [`wedding-details.template.md`](file:///c:/Users/SHERI%20VAIJAYANTH/Desktop/Projects/Wedding%20Website/wedding-details.template.md).
- Replace `TO_BE_CONFIRMED` placeholders with verified names, dates, times, and venue addresses.
- If a section or ceremony event is not yet finalized, set `isConfirmed: false` or leave it blank to maintain clean presentation.

### 2. Adding Photographs
1. Place approved images in `public/images/`:
   - `public/images/hero-couple.jpg` (Hero Portrait, ~1200x1600px)
   - `public/images/couple-story.jpg` (Story Photo, ~1200x800px)
2. In `src/data/wedding.ts`, update `photography`:
   ```ts
   photography: {
     heroImage: {
       src: "/images/hero-couple.jpg",
       alt: "Portrait of Groom and Bride",
       isAvailable: true, // Flip to true when photo is placed
     },
     // ...
   }
   ```

### 3. Customizing Colors & Typography
Design tokens are located in:
👉 [`src/styles/tokens.css`](file:///c:/Users/SHERI%20VAIJAYANTH/Desktop/Projects/Wedding%20Website/src/styles/tokens.css)

All palette colors, font families, spacing scales, and border radii can be adjusted in one place without touching component code.

---

## 🌐 Vercel Deployment

This project is a static site with no backend or environment variables required.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your wedding invitation will be live in seconds with global edge CDN caching and free SSL.

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally if not already installed
npm install -g vercel

# Deploy directly from your terminal
vercel
```

---

## ♿ Accessibility & Performance Highlights

- **Semantic Landmarks:** Uses `<header>`, `<main>`, `<section>`, and `<footer>` with proper heading hierarchies (`<h1>` through `<h3>`).
- **Keyboard Navigation:** Includes a visible `:focus-visible` ring and a skip link (`#main-content`).
- **High Contrast:** All primary and secondary body text meets or exceeds WCAG AA standards (>6:1 against rice paper background).
- **Reduced Motion:** Respects user's `prefers-reduced-motion: reduce` preference by disabling smooth scroll and transitions.
- **Zero Heavy Dependencies:** No heavy CSS frameworks or UI component bloat. Clean 5.75 kB CSS bundle and lightning-fast load times.
- **No Remote Dependencies:** All fonts are loaded with preconnect, and photography uses CSS placeholders until local assets are added.
