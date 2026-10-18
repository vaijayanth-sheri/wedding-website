# Wedding Invitation Website — Project Brief

**Version:** 0.1 · **Status:** Starter direction only; no visual decisions are final.

## 1. Project vision

Create a modern, minimal, mobile-first, single-page wedding invitation for a Hindu Telugu wedding rooted in Telangana. The design should feel personal, warm, culturally grounded, and elegant—not like a crowded traditional card converted into a website.

**Working creative direction:** **Rooted in Heritage, Growing Together**

Use culture through carefully chosen details and give the couple's agriculture and research background a subtle visual presence. Their academic background should enrich the story, not turn the invitation into a research profile.

**Design principle:** Tradition should be felt in the details, not in the amount of decoration.

## 2. Proposed visual language

These are starting hypotheses to test and refine, not locked brand choices.

### Cultural references

- **Telangana handloom:** Use a restrained, Pochampally-Ikat-inspired diamond or geometric rhythm as a narrow divider, edge pattern, or background texture. Treat this as visual inspiration, not as a claim that a digital pattern is authentic handwoven work.
- **Wedding welcome:** A light mango-leaf toranam reference can frame the hero or a section heading.
- **Traditional detail:** A small muggu-inspired line motif may appear as a separator. Confirm culturally specific wording and symbols with the family before final use.
- **Auspicious accents:** A small lamp, kalash, or religious invocation is optional and must not be added automatically. Use only what the family approves.
- **Telugu wedding references:** Jeelakarra Bellam and Talambralu may inform optional labels or tiny illustrative details only if they reflect the couple's actual ceremony. Rituals differ by family and community, so confirm names and representations before publishing.

### Subtle agriculture / research reference

- Use fine botanical line art—seed, leaf, root, crop panicle, or cotton boll—once the couple's actual research area is known.
- Field contours, measured line-work, or a quiet grid can hint at research and cultivation without looking technical.
- A small botanical illustration can sit near the footer or a transition; keep the couple and invitation details visually dominant.
- Do not assume which crop either person researches. Avoid tractor, farm-equipment, laboratory, or stock-photo clichés unless requested.

### Avoid

- Excessive mandalas, temple silhouettes, peacocks, elephants, lamps, and florals all competing at once.
- Cartoon farming imagery, loud gradients, glitter effects, thick ornamental frames, and decoration behind important text.
- Unverified Telugu copy, invented family details, or religious symbols chosen without approval.
- Generic stock photography or externally hosted placeholder images.

## 3. Provisional palette

A warm, earthy palette can communicate both ceremony and cultivation. Central colors are intentionally subdued; gold is for decoration, not small text.

| Token | Provisional color | Suggested use |
|---|---|---|
| `--color-paper` | `#F8F5EF` | Main background; warm rice-paper feel |
| `--color-ink` | `#292720` | Primary text |
| `--color-vermilion` | `#8D3028` | Main auspicious accent, selected headings, buttons |
| `--color-leaf` | `#53684D` | Botanical accents and secondary details |
| `--color-sage` | `#DDE4D5` | Soft section background or subtle blocks |
| `--color-antique-gold` | `#B99A5B` | Thin rules and small decorative highlights only |
| `--color-white` | `#FFFFFF` | Cards or contrast surfaces where needed |

Keep color usage restrained: paper and ink should dominate, with vermilion or leaf green used intentionally. Check real text/background contrast before launch; do not use antique gold for small body text.

## 4. Provisional typography

- **English display / names:** `Cormorant Garamond` for a refined, editorial wedding feel.
- **Telugu text:** `Noto Serif Telugu` to preserve readable, appropriate Telugu-script rendering.
- **Body and interface text:** `Manrope` for a clean modern counterbalance.

Keep the font choices configurable and easy to replace. Never render Telugu text using a Latin-only display font. Use local font packages or self-hosted assets where practical, with robust system fallbacks. Test actual Telugu names and paragraphs—not just Latin sample text—before approval.

## 5. Single-page information architecture

Build a long, vertical page with a clear visual rhythm. Sections can be hidden when their content is not supplied; do not fill space with invented information.

1. **Hero invitation** — Optional family-approved auspicious line, couple's names, a short invitation line, date, and a gentle scroll cue. Start with a CSS-backed image placeholder.
2. **Invitation / blessings** — Short, warm invitation wording and family hosts if provided.
3. **Wedding details** — Date, day, auspicious time or muhurtham, and venue. Make the essential information easy to find.
4. **Ceremony schedule** — Optional; display only confirmed events, times, and locations.
5. **The couple / roots and growth** — Optional short personal note. Their agriculture/research background may inspire one subtle line, but the page must remain a wedding invitation.
6. **Venue and practical details** — Address, directions link, parking or travel notes only when provided. Prefer a simple external map link over an embedded map.
7. **Closing blessing / invitation** — A warm, concise sign-off and a restrained botanical or handloom-inspired motif.

A gallery can be added later. Do not add a large navigation system to a simple invitation; internal anchor links are enough if needed.

## 6. UX and responsive principles

- Design mobile-first, then scale gracefully to tablet and desktop.
- Keep the names, date, time, and venue legible without decorative elements interrupting them.
- Use a comfortable text measure, generous spacing, and a clear hierarchy; avoid tiny ornamental text.
- Support widths from small mobile screens through wide desktop layouts; prevent horizontal overflow.
- Use semantic headings, landmarks, descriptive image alt text, visible keyboard focus, and accessible buttons/links.
- Aim for WCAG AA contrast for normal text. Do not communicate meaning by color alone.
- Provide reduced-motion support. Any later transitions should be subtle and must not delay access to details.
- Avoid auto-playing audio, forced intro screens, pop-ups, heavy parallax, and motion that interferes with reading.
- Keep essential invitation details in selectable HTML text, not baked into an image.

## 7. Technical starting point

- **Suggested stack:** Vite + React + TypeScript.
- **Hosting:** Vercel; source maintained in GitHub.
- **Rendering:** Static frontend only. No backend, database, authentication, API, CMS, RSVP form, countdown, or complex features.
- **Styling:** CSS variables for palette, typography, spacing, and borders; keep the design system easy to adjust.
- **Assets:** Local files in `public/images/`. Use designed CSS placeholders until the real couple photographs and illustrations are ready.
- **Content:** Keep website text in one small typed data module (for example, `src/data/wedding.ts`). Use `wedding-details.template.md` to collect accurate family-approved content; transfer it into the data module when details are confirmed.
- **Motion:** Leave animation behavior minimal until the transition direction is discussed.

### Suggested initial structure

```text
public/
  images/                 # approved photos and final local artwork later
src/
  components/             # small reusable pieces only where useful
  data/
    wedding.ts            # placeholder content, centralized
  sections/               # page sections, kept simple
  styles/
    tokens.css            # colors, fonts, spacing, radii
    global.css            # base layout, type, responsive rules
  App.tsx
  main.tsx
wedding-site-project-brief.md
wedding-details.template.md
README.md
```

Avoid unnecessary abstraction for a single static page. The code should be easy to revise as the visual direction evolves.

## 8. Content and asset rules

- Use explicit placeholders such as `TO_BE_CONFIRMED`; never invent names, dates, muhurtham times, venues, family relationships, rituals, or research specialties.
- Keep English and Telugu fields separate so each can be reviewed and laid out appropriately.
- Have a Telugu-speaking family member review Telugu wording, honorifics, spelling, and ritual terms before launch.
- Confirm permission to publish every photograph, name, phone number, address, and family detail.
- Do not put passwords, API keys, private documents, or deployment secrets into Markdown content files or the repository.
- Images generated by the project owner will be added later; the initial setup should not generate or download imagery.

## 9. Initial milestone: ready to iterate

The first implementation is ready when:

- The Vite app runs locally and builds successfully.
- A polished, responsive single-page skeleton exists with the planned sections and realistic content placeholders.
- Colors, fonts, spacing, decorative motif styles, and section backgrounds are controlled centrally.
- Placeholder imagery is local or CSS-based; there are no broken remote image links.
- No unsupported functionality or unconfirmed wedding information has been introduced.
- The page is checked at narrow mobile, tablet, and desktop widths, and basic keyboard/reduced-motion behavior works.
- The README contains local development and Vercel deployment steps.

## 10. Decisions intentionally left open

- Couple's names in English and Telugu; approved invitation wording and languages.
- Wedding date, muhurtham, venue, and ceremony schedule.
- Family-approved religious/cultural motifs and the wording of any invocation.
- Actual crop/research areas that could inspire the botanical details.
- Photo selection, final theme, final palette, typography, and transitions.
- Domain name, public visibility requirements, and whether any travel/contact details should be shown.

## 11. Research and design references

The following sources informed the initial cultural direction. They are references, not a substitute for family confirmation.

- Telangana Tourism — [Arts and Crafts](https://www.tourism.telangana.gov.in/page/arts-crafts): overview of Pochampally Ikat, Gadwal handloom, Cheriyal scroll art, Nirmal paintings, and other regional crafts. This supports using a restrained local textile/art reference rather than generic pan-Indian decoration.
- Telangana Tourism — [History and Culture](https://tourism.telangana.gov.in/page/history-culture): regional cultural context, including Bathukamma and Telangana's heritage.
- Government of Telangana, Department of Economics and Statistics — [Telangana Socio-Economic Outlook 2023, Agriculture chapter](https://www.des.telangana.gov.in/publications/Telangana-Socio-Economic-Outlook-2023.pdf): regional crop context including paddy, cotton, maize, red gram, and soybean. Use this only as broad inspiration; do not assign a crop to either person's research without confirmation.
- Taara Weddings — [Telugu Wedding Rituals](https://taaraweddings.com/resources/telugu-wedding-rituals): a secondary overview of rituals such as Jeelakarra Bellam and Talambralu. Ritual details and wording must be checked with the family because practices vary.

---

**Working brief, not a locked design system.** The next iteration should validate the visual direction and content priorities before adding detailed illustration or transition work.
