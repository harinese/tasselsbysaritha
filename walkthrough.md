# Threadworks SPA — Walkthrough

## What Was Built
A professional single-page application for **Threadworks**, a silk saree tassel business with 5 product categories and pricing tiers.

## Files Created

| File | Purpose |
|------|---------|
| [index.html](file:///d:/Freelance/Threadworks/index.html) | Single HTML page with 7 sections |
| [styles.css](file:///d:/Freelance/Threadworks/styles.css) | Complete design system (~1080 lines) |
| [script.js](file:///d:/Freelance/Threadworks/script.js) | Navigation, animations, form handling |
| `images/` | 10 AI-generated product images |

## Design

- **Palette**: Burgundy (#6B1D2A) + Gold (#C8A951) + Ivory (#FAF6F0)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Responsive**: Desktop → Tablet → Mobile breakpoints

## Sections Implemented

1. **Hero** — Full-viewport banner with tagline and CTAs
2. **About** — Brand story with artisan photo + stats (15+ years, 10K+ sarees, 50+ designs)
3. **Collections** — 5 category cards (Premium ₹350–800, Bridal ₹800–2500, Classic ₹150–350, Designer ₹500–1200, Temple ₹250–600)
4. **Gallery** — 2×2 image grid with hover overlays
5. **Pricing** — Table with collection, price, complexity, delivery time
6. **Contact** — Inquiry form + WhatsApp CTA + workshop details
7. **Footer** — Quick links, collection links, social icons

## Browser Verification

All sections verified in browser. Screenshots:

````carousel
![About section with artisan photo and stats](C:/Users/harib/.gemini/antigravity/brain/ef604fcd-ab58-434f-a87f-c72dd0d84e82/ss_about.png)
<!-- slide -->
![Collections section with category cards](C:/Users/harib/.gemini/antigravity/brain/ef604fcd-ab58-434f-a87f-c72dd0d84e82/ss_collections.png)
<!-- slide -->
![Pricing table section](C:/Users/harib/.gemini/antigravity/brain/ef604fcd-ab58-434f-a87f-c72dd0d84e82/ss_pricing.png)
````

![Browser recording of the full page scroll-through](C:/Users/harib/.gemini/antigravity/brain/ef604fcd-ab58-434f-a87f-c72dd0d84e82/threadworks_verification_1773729734940.webp)

## Features Working
- ✅ Sticky navbar transitions from transparent → white on scroll
- ✅ Active nav link highlighting as you scroll through sections
- ✅ Smooth scroll navigation between sections
- ✅ Fade-in animations via IntersectionObserver
- ✅ Mobile hamburger menu
- ✅ Contact form with validation and success feedback
- ✅ All 10 images loading correctly
