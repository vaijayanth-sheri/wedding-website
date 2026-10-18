# Prompt — Initial Wedding Website Project Setup

Act as a senior frontend engineer and wedding-invitation UI/UX designer. Set up the initial codebase for a **static, single-page Hindu Telugu wedding invitation rooted in Telangana**. Read `wedding-site-project-brief.md` and `wedding-details.template.md` first; they are the project context and content-collection guide.

## Goal

Create a polished but intentionally unfinished foundation that we can iterate on. The design should be modern and minimal, with subtle Telangana/Telugu cultural references and a restrained hint of the couple's agriculture/research background. Prioritize a mobile-first experience that also looks excellent on tablet and desktop.

## Setup and implementation

1. Initialize a clean **Vite + React + TypeScript** project if the repository does not already contain an app. Inspect the existing files before changing anything; do not overwrite existing work blindly.
2. Build one long, responsive page with these optional sections: Hero, Invitation, Wedding Details, Ceremony Schedule, Couple / Roots and Growth, Venue / Practical Information, and Closing. Keep the code straightforward—create small reusable components only when they help.
3. Put all placeholder wedding content in one typed data file, such as `src/data/wedding.ts`. Use explicit `TO_BE_CONFIRMED` values. Never invent names, dates, times, venues, family relationships, religious wording, ritual details, crop specialties, or research topics. Hide sections that have no real content rather than filling them with fabricated details.
4. Centralize provisional color, typography, spacing, and border tokens in CSS variables. Use the project brief's palette and font suggestions as **editable starting points, not final decisions**. Telugu text must use a Telugu-supporting font. Check real-script rendering and provide sensible fallbacks.
5. Use restrained decorative CSS or simple inline SVG motifs inspired by handloom geometry, a light toranam, or botanical line-art. Keep decorations quiet and behind the content. Do not combine every traditional symbol in one layout; religious icons or invocation text require explicit family approval.
6. Use locally styled placeholder panels for future photography. Do not fetch stock images, generate images, embed remote placeholder services, or assume the real photos exist. Make replacement paths clear under `public/images/`.
7. Build semantic, accessible HTML with clear heading order, readable text sizes, visible keyboard focus, descriptive alt text for meaningful images, and adequate contrast. Support reduced-motion preferences. Any scrolling effect should be subtle and should not block access to the invitation details.
8. Keep all essential details as selectable HTML text. Use internal anchor links only where useful. Do not add a backend, API, database, CMS, authentication, RSVP form, countdown, guest book, audio player, or other complex functionality. Do not create the agent skill yet; that will be handled separately.
9. Keep the page fast and deployable as a static Vercel site. Avoid unnecessary dependencies and large UI libraries. Do not add map embeds; leave a clean place for a confirmed external directions link later.
10. Add a concise `README.md` with local setup, build, and Vercel deployment instructions. Add no secrets or private information to the repository.

## Expected starter structure

Use judgment, but keep the structure near this level of complexity:

```text
public/images/
src/components/
src/data/wedding.ts
src/sections/
src/styles/tokens.css
src/styles/global.css
src/App.tsx
src/main.tsx
README.md
wedding-site-project-brief.md
wedding-details.template.md
```

## Visual quality bar

The first screen should immediately feel like an elegant digital invitation: intentional typography, generous whitespace, balanced composition, one restrained cultural detail, and a clear presentation of the couple's names and placeholder event details. On a phone, it should feel purpose-designed rather than like a shrunk desktop page. Across the full page, alternate whitespace and subtle surface treatments instead of placing every section inside a card.

Do not finalize visual identity, add elaborate illustrations, or implement animation choreography yet. Leave those as easy iteration points.

## Before finishing

- Run the production build and resolve errors.
- Check a narrow mobile width, a tablet width, and desktop width for overflow and hierarchy.
- Confirm all placeholders are clearly marked and no invented wedding information is present.
- Confirm no broken remote assets, hidden functionality, or unnecessary dependencies were added.
- Summarize the files created, the commands to run locally, and any assumptions that still need confirmation.
