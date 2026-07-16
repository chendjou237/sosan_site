---
name: SOSAN
description: Trusted, warm, accessible healthcare for Cameroon and its diaspora.
colors:
  vital-green: "#0fb36a"
  green-deep: "#0a8f54"
  green-text: "#08804a"
  green-bright: "#38d98a"
  tier-gold: "#f5a623"
  trust-navy: "#0e2033"
  navy-deep: "#0b1a29"
  ink: "#16283a"
  muted: "#4c5b6a"
  muted-soft: "#5b6b7b"
  muted-faint: "#7a8896"
  border: "#eaf1ee"
  mint: "#e4f7ec"
  surface-white: "#ffffff"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(38px, 5.2vw, 60px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(28px, 3.6vw, 40px)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "normal"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "2px"
rounded:
  input: "12px"
  card-sm: "16px"
  card: "20px"
  feature: "26px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "56px"
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.vital-green}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-dark:
    backgroundColor: "{colors.trust-navy}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  button-outline:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.trust-navy}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  chip-dark:
    backgroundColor: "{colors.trust-navy}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "13px 15px"
---

# Design System: SOSAN

## 1. Overview

**Creative North Star: "The Family Bridge"**

SOSAN's visual system exists to connect two shores — a patient in Douala or Yaoundé and a relative sending support from abroad — and make both feel equally at home the moment they arrive. The palette carries the emotional load: **Vital Green** (#0fb36a) is health, aliveness, and the go-signal for every action; **Trust Navy** (#0e2033) is the steady authority underneath it. Warmth comes from generous whitespace, soft rounded surfaces, and a human voice, never from a warm-tinted "cream" background — the ground stays clean white so the green reads as care and the navy reads as credibility.

The register is brand: this single page's job is to walk a visitor up the belief ladder (legitimate → relevant → transparent → easy) before it asks for the app install. So the system is built for reassurance first. Density is low, headings are confident but never shouting, and proof (real institutional logos, clear coverage tiers) is given room to breathe. Motion is present but disciplined — press feedback, gentle hover lifts, one hero entrance — and it respects `prefers-reduced-motion`.

This system explicitly rejects four looks its audience does not trust: the **cold corporate hospital/insurance site** (sterile stock, institutional blandness), the **flashy startup/crypto aesthetic** (neon gradients, hype), the **cluttered ad-heavy portal** (dense, banner-stuffed), and the **generic SaaS gradient template**. Warm, not clinical; clear, not flashy.

**Key Characteristics:**
- Clean white ground; green and navy do the talking.
- Two-audience equality baked into copy and imagery (patient + diaspora).
- Soft, tactile, rounded surfaces — approachable, never sterile.
- Tinted (never pure-black) shadows.
- Trust before pitch: proof and transparency lead, the CTA follows.

## 2. Colors

A confident two-color identity — health-green and authority-navy — on a clean white ground, with a small warm-neutral support cast for surfaces and text.

### Primary
- **Vital Green** (#0fb36a): The signature. Carries every primary CTA fill, icon mark, dot, focus glow, and confirmation state. Health, aliveness, and action in one hue — a **fill and graphic color, never a text color on white** (it measures 2.74:1 and fails WCAG).
- **Green Text** (#08804a): The readable green (5.0:1 on white). Every green *word* — section eyebrows, service-card titles, plan prices, the hero "santé" — uses this, not Vital Green.
- **Green Deep** (#0a8f54): Pressed/hover depth for green surfaces and success-panel accents.
- **Green Bright** (#38d98a): Accent-on-dark — eyebrows, prices, and numeric badges sitting on Trust Navy surfaces (9.0:1 on navy).

### Tertiary
- **Tier Gold** (#f5a623): The single non-brand accent, used sparingly for the Gold/Premium plan dots and the testimonial star rating. A fill/marker color only — never text (2.03:1); any rating it conveys must also carry a text label.

### Secondary
- **Trust Navy** (#0e2033): The authority ground. Headings, the "why join" section, the featured (Gold) plan, the footer, and the dark/secondary buttons. Where the brand needs gravity.
- **Navy Deep** (#0b1a29): The footer base — one shade below Trust Navy for the darkest surface.

### Neutral
- **Ink** (#16283a): Default body text. The floor for anything a user must read.
- **Muted** (#4c5b6a): Secondary body copy and long descriptions; still clears 4.5:1 on white.
- **Muted Soft** (#5b6b7b): Supporting copy, section subheads.
- **Muted Faint** (#7a8896): Decorative/meta only — tiny stat labels, timestamps. Below 4.5:1 on white; never body-length text.
- **Border** (#eaf1ee): Hairline card borders and dividers — a green-tinted near-white.
- **Mint** (#e4f7ec): Icon tiles, success panels, and the soft green wash behind the hero.
- **Surface White** (#ffffff): The page ground. Clean, chroma-zero — deliberately not cream.

### Named Rules
**The Vital-Green Restraint Rule.** Green is action and health, not wallpaper. It carries CTAs, accents, icon marks, and confirmations — it never fills a large reading surface. When a section needs a saturated ground, that ground is Trust Navy, not green.

**The Clean-Ground Rule.** The body background is true white (#ffffff), never a warm cream/sand/paper tint. Warmth in this brand comes from voice, spacing, and imagery — never from tinting the background beige.

## 3. Typography

**Display Font:** Poppins (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** A geometric-humanist contrast pairing. Poppins brings friendly, rounded, confident geometry to headings and numbers; Inter brings quiet, highly legible neutrality to body copy. The two never trade jobs.

### Hierarchy
- **Display** (Poppins 800, clamp(38px→60px), line-height 1.04, letter-spacing -0.5px): Hero H1 only. Tight but never cramped (well inside the -0.04em floor).
- **Headline** (Poppins 800, clamp(28px→40px), line-height 1.12): Section titles ("Nos Services", "Diaspo Support").
- **Title** (Poppins 700, 18–21px, line-height 1.25): Card and plan headings.
- **Body** (Inter 400, 16–17px, line-height 1.6–1.7): All prose. Hold measure to ~65ch (hero lead caps near 480px).
- **Label** (Poppins 700, 13px, letter-spacing 2px, UPPERCASE): The Vital-Green section eyebrow ("QUI SOMMES-NOUS", "DIASPO SUPPORT").

### Named Rules
**The Two-Job Rule.** Poppins never sets a paragraph; Inter never sets a display heading. The contrast between the families is the hierarchy — don't blur it by mixing roles.

**The Eyebrow-Budget Rule.** The uppercase tracked eyebrow is a real part of this system, but it is a seasoning, not scaffolding: use it to name a section's theme, never as a reflex above every block. If a section's heading already carries the meaning, drop the eyebrow.

## 4. Elevation

Soft and tinted. Surfaces are near-flat at rest — a hairline border plus a wide, low-opacity shadow — and lift gently on hover. Depth is atmospheric (a sense of the card floating just off the page), never hard or dramatic. Crucially, no shadow is pure black: card shadows carry the navy hue, and green CTAs cast a green-tinted glow, so elevation always feels like it belongs to the brand.

### Shadow Vocabulary
- **Card ambient** (`box-shadow: 0 10px 30px rgba(14, 32, 51, 0.05)`): Resting state for service/testimonial cards.
- **Card raised** (`box-shadow: 0 24px 46px rgba(14, 32, 51, 0.12)`): Hover lift (paired with `translateY(-8px)`).
- **Feature float** (`box-shadow: 0 30px 70px rgba(14, 32, 51, 0.18)`): Hero image frame and the elevated Gold plan.
- **Green CTA glow** (`box-shadow: 0 14px 30px rgba(15, 179, 106, 0.3)`): Under primary green buttons only.

### Named Rules
**The Tinted-Shadow Rule.** Every shadow is tinted — `rgba(14, 32, 51, …)` navy for neutral surfaces, `rgba(15, 179, 106, …)` green under green CTAs. Pure-black shadows (`rgba(0,0,0,…)`) are prohibited; they read cheap and detached from the brand.

## 5. Components

### Buttons
- **Shape:** Full pill (`border-radius: 999px`) across all variants.
- **Primary (Vital Green):** `#0fb36a` background, white text, 14px 26px padding, green CTA glow. Hover lifts `translateY(-2px)` with a stronger glow; press is `translateY(-1px) scale(0.97)` at 120ms.
- **Dark (Trust Navy):** `#0e2033` background, white text, 11px 20px padding. Hover shifts to `#16304a`; press `scale(0.97)`.
- **Outline:** 1.5px Trust Navy border on white, navy text; fills solid navy on hover. Used for the non-featured plan CTAs.
- **Focus:** All interactive elements must show a visible focus-visible ring (green, matching the input focus glow).

### Chips
- **Style:** Miniature dark pill — Trust Navy background, white text, 11px 18px padding, 13.5px weight 600. Used as the in-card "Télécharger" action.

### Cards / Containers
- **Corner Style:** Cards 20px; small floating cards 16px; feature containers (contact) up to 26px. **Never past 26px.**
- **Background:** White; the featured (Gold) plan and the "why join" section invert to Trust Navy.
- **Shadow Strategy:** Card ambient at rest → Card raised on hover (see Elevation).
- **Border:** Hairline `1px solid #eaf1ee`, green-tinted.
- **Internal Padding:** 26–28px.

### Inputs / Fields
- **Style:** White field, `1px solid #dce7e1`, 12px radius, 13–15px padding, Inter.
- **Focus:** Border shifts to Vital Green with a soft green glow ring (`box-shadow: 0 0 0 3px rgba(15, 179, 106, 0.12)`).
- **Error:** Inline text, never `alert()`; placeholder text must still clear 4.5:1.

### Navigation
- **Style:** Sticky, translucent white header with backdrop blur and a hairline bottom border. Nav links Inter 15px/500, grey-navy default, Vital Green on hover.
- **Mobile:** Below 640px the link row collapses to an animated hamburger (→ X) that opens a full-screen white overlay carrying the links plus the language selector and download CTA. Body scroll locks while open.

### Signature: The Trust Badge
A white pill with a pulsing Vital-Green dot ("Santé fiable, rapide & accessible") sits above the hero H1 — the first, smallest promise on the page. The pulse (`pulseRing`) is the one piece of ambient motion allowed on load; it stops under reduced-motion.

## 6. Do's and Don'ts

### Do:
- **Do** lead every section with proof or transparency before the ask — walk the belief ladder (legitimate → relevant → transparent → easy), never pitch first.
- **Do** keep body text at Ink (#16283a) or Muted (#4c5b6a) for ≥4.5:1 on white; bump toward Ink whenever contrast is even close.
- **Do** set any green *text* on white in Green Text (#08804a, 5.0:1) — never Vital Green (#0fb36a, 2.74:1). Vital Green is for fills, icons, and dots only.
- **Do** reserve full-pill (999px) for buttons, tags, and badges; keep cards at 16–26px.
- **Do** tint every shadow navy (`rgba(14,32,51,…)`) or green (`rgba(15,179,106,…)`) — never pure black.
- **Do** address the patient-at-home and the relative-abroad as equals in copy and imagery.
- **Do** keep the ground true white; carry warmth through voice, spacing, and photography.

### Don't:
- **Don't** drift toward a **cold, corporate hospital or insurance look** — sterile stock imagery and institutional blandness kill trust here.
- **Don't** adopt a **flashy startup / crypto aesthetic** — no neon gradients, no "disrupt healthcare" hype.
- **Don't** build a **cluttered, ad-heavy portal** — no dense, banner-stuffed, noisy layouts.
- **Don't** ship the **generic SaaS gradient template** that could belong to any product.
- **Don't** use **gradient text** (`background-clip: text`) or **side-stripe borders** (colored `border-left`/`border-right` > 1px) anywhere.
- **Don't** over-round: no card, section, or input past 26px radius.
- **Don't** let Vital Green fill a large reading surface — it is an accent and action color, not a background.
- **Don't** set body-length text in Muted Faint (#7a8896); it fails 4.5:1 and is for decorative meta only.
