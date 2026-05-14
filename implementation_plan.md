# Threadworks — Single Page Application

A clean, professional SPA for **Threadworks**, a business crafting premium tassels for silk sarees. The design will be elegant, warm, and rooted in Indian craft aesthetics — no neon, no flashy gimmicks.

## Design Direction

- **Color palette**: Deep burgundy/maroon, warm gold accents, ivory/cream backgrounds, charcoal text — referencing the richness of silk sarees
- **Typography**: Google Fonts — *Playfair Display* (headings), *Inter* (body) — classic serif + modern sans combination
- **Tone**: Luxurious but understated, clean whitespace, subtle hover effects, smooth scroll transitions

## Proposed Sections (Single Page)

| Section | Purpose |
|---------|---------|
| **Hero** | Full-width banner with tagline, CTA button, and a generated hero image of silk tassels |
| **About** | Brief brand story — the craft, the tradition |
| **Categories** | Card grid: Premium, Bridal, Classic, Designer, Temple — each with image, description, and starting price |
| **Gallery** | Masonry-style image showcase of tassel work |
| **Pricing** | Clean pricing table showing category tiers and price ranges |
| **Contact / Inquiry** | Simple inquiry form + WhatsApp/phone CTA |
| **Footer** | Social links, copyright, location |

## Proposed Changes

### Static SPA (HTML + CSS + JS)

#### [NEW] [index.html](file:///d:/Freelance/Threadworks/index.html)
- Single HTML file with all sections
- Semantic HTML5 structure (`<header>`, `<section>`, `<footer>`)
- Sticky navigation with smooth scroll anchors
- Responsive meta viewport

#### [NEW] [styles.css](file:///d:/Freelance/Threadworks/styles.css)
- Complete design system with CSS custom properties (colors, spacing, typography)
- Section-specific styles
- Responsive breakpoints (mobile-first)
- Subtle animations (fade-in on scroll, hover effects on cards)

#### [NEW] [script.js](file:///d:/Freelance/Threadworks/script.js)
- Sticky nav behavior & active link highlighting on scroll
- Smooth scroll navigation
- Intersection Observer for scroll-triggered fade-in animations
- Mobile hamburger menu toggle
- Simple form handling

#### [NEW] Generated images
- Hero image, category card images, and gallery images will be generated using the `generate_image` tool to avoid placeholders

## Verification Plan

### Browser Testing
- Open the page in the browser using the browser subagent
- Verify all sections render correctly
- Verify navigation links scroll to the correct sections
- Verify responsive layout at different widths
- Verify hover effects and animations work

### Manual Verification
- The user can open `d:\Freelance\Threadworks\index.html` directly in their browser to review the full page
