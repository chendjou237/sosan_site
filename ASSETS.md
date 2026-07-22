# Assets to provide

The site ships **branded placeholders** in every image slot. Drop a real file at
the exact path below and it replaces the placeholder automatically on the next
build / dev reload — no code change needed.

- **How resolution works:** for each slot the site uses the local file if it
  exists, otherwise a legacy fallback image where one is noted, otherwise a
  labelled placeholder. Slots marked **placeholder now** have no fallback, so
  they show a placeholder until you supply the file.
- **Formats:** PNG for app screenshots, JPG/WebP for photos.
- The manifest that defines all of this is `app/assets.ts`.

---

## A. App screenshots — services page → `public/app/services/`
Portrait phone captures, ~1080×2160 (9:19.5). **Placeholder now.**
Featured (large) cards first: **consultations**, **assurance**.

| File | Screen to capture |
|------|-------------------|
| `consultations.png` | Consultations & rendez-vous |
| `hopitaux-labos.png` | Hôpitaux & laboratoires |
| `pharmacie.png` | Pharmacie |
| `assurance.png` | Assurance santé |
| `dons.png` | Dons ONG & projets santé |
| `protection-famille.png` | Protection famille |
| `epargne.png` | Épargne santé SOSAN |
| `profil-medical.png` | Profil médical & documents |
| `assistant-ia.png` | Assistant santé IA |
| `communaute.png` | Communauté & conseils santé |

## B. Diaspo plan photos → `public/app/plans/`
Landscape ~1200×800. *Legacy CDN photo shows until replaced.*
`silver.jpg` · `gold.jpg` · `premium.jpg`

## C. About page → `public/app/about/`
*Legacy CDN photos show until replaced.*
`ap1.jpg` · `ap2.jpg` · `ap3.jpg` · `ap4.jpg` (field / patient lifestyle) · `vision.jpg` (~1200×800)

## D. Diaspo hero → `public/app/diaspo/`
`hero.jpg` (landscape ~1400×900). *Legacy CDN photo shows until replaced.*

## E. Home → `public/app/`
- `home-about.png` — app screenshot (portrait). *Legacy CDN render shows until replaced.*
- Testimonial avatars → `public/app/testimonials/` (square ~400×400, *legacy avatars show until replaced*):
  `aicha-mbarga.jpg` · `emmanuel-fotso.jpg` · `nadege-etoundi.jpg`

## F. Actualités / campaign covers → `public/app/actualites/`
Landscape 16:9, ~1200×675. **Placeholder now.** One per post; filename = post `slug`
(see `app/actualites/data.ts`). Current slugs:
`lancement-diaspo-support.jpg` · `assistant-ia-whatsapp.jpg` ·
`partenariat-minsante.jpg` · `sosan-caravane-sante-douala.jpg` ·
`sosan-presse-innovation-sante.jpg` · `conseils-prevention-saison-pluies.jpg`

> The Actualités posts themselves are **placeholder copy** — edit `app/actualites/data.ts`
> with your real announcements, events, press pickups and partner collaborations
> (title, date, excerpt, and an external `href` where relevant).

---

## Already covered (no action)
`hero.png`, `whatsapp-assistant.png`, `app-mockup.png`, `logo.webp`.

## Optional later
Localise partner logos and the App Store / Play Store badges (currently CDN,
defined in `app/constants.ts`).
