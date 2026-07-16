---
target: app/diaspo/page.tsx
total_score: 27
p0_count: 1
p1_count: 3
timestamp: 2026-07-16T20-50-15Z
slug: app-diaspo-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | "Souscrire" gives no "plan selected" confirmation — just scrolls |
| 2 | Match System / Real World | 3 | "Souscrire" promises on-page signup but delivers app-install steps |
| 3 | User Control and Freedom | 3 | No scroll-margin on #formules/#souscrire — anchor targets land under the sticky header; no back-to-top |
| 4 | Consistency and Standards | 3 | `.kicker` diverges from documented label token; two tag styles |
| 5 | Error Prevention | 2 | Cards show only adult price; senior +25% / child pricing / 21-day wait sit elsewhere |
| 6 | Recognition Rather Than Recall | 2 | Seven "Diaspo X" products force recall to distinguish |
| 7 | Flexibility and Efficiency | 3 | Two subscribe paths is good; no store badge or plan-compare at the decision point |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely clean, spacious, warm-not-clinical — strongest dimension |
| 9 | Error Recovery | 2 | Raises anxiety edge cases (refusal, pre-existing re-pricing) with no help path |
| 10 | Help and Documentation | 2 | No FAQ, no full CGU link; EVASAN / Support Plus unexplained |
| **Total** | | **27/40** | **Acceptable — real gaps in conversion, trust-proof, and IA** |

## Anti-Patterns Verdict

**Does this look AI-generated? No — and the two reviewers agree.**

**LLM assessment (design review):** Not slop. It clears nearly every impeccable DON'T — no gradient text (the green "vôtres"/prices are solid #08804a), no side-stripe borders, no glass cards, all card radii ≤26px, no decorative grid/stripe backgrounds, no text overflow. Notably the eyebrow (`.kicker`) is sentence-case at 0.2px tracking and appears only 3× (hero, Care, Souscrire), dodging the "tracked-uppercase eyebrow on every section" tell. Card grids are visually differentiated (navy Care vs white Beyond vs pricing plans), not clones. Two watch-items, both read as intentional brand choices: the house elevation pairs a 1px border with a wide low-opacity tinted shadow (geometrically the "ghost-card" shape, but 0.07 opacity and the documented SOSAN elevation), and the final CTA's navy→green diagonal gradient is the one element brushing the "generic SaaS gradient" anti-reference (tasteful, in-brand).

**Deterministic scan:** `detect.mjs` on `app/diaspo/page.tsx` → **exit 0, zero findings**. Cross-checked `app/about/page.tsx` and `app/page.tsx` → also clean. No false positives (nothing flagged). The two "watch-items" the design reviewer named did not trip any deterministic rule.

**Where the two diverge (important):** the detector and the design reviewer's contrast sample both looked green — but the design reviewer, sampling *different* elements, found contrast failures the automated pass missed: the pricing-table profile sub-labels ("21–60 ans", etc.) and the "+25% senior" note use `--muted-3 #7a8896` = **3.62:1** at 12.5–13.5px, and the featured column header (white on green-dark #0a8f54) = **4.10:1** at 14px/600. These are meaningful pricing content, not decorative meta. The compliant tokens (`.kicker`, `.plan__price` at #08804a = 5.0:1) that the detector-side sampled all pass — so the page reintroduced a few sub-4.5:1 elements the earlier colorize pass didn't cover.

**No overlay:** both agents used full-page screenshots (desktop + mobile), not an injected in-page overlay. Deterministic evidence is otherwise fully green — 200, zero console/network errors, no horizontal overflow at 390 or 1280, pricing table correctly scroll-contained on mobile.

## Overall Impression

The most polished page on the site visually — and the one that most undercuts its own goal. It is beautiful, warm, and radically transparent (disclosing the waiting period, auto-renewal, and refusal clause up front is genuinely trust-building and rare). But it does two things backwards: it **leads with dread** ("ce sont vos proches qui en subissent les conséquences") instead of the reassurance the brand promises, and at the exact moment of conversion the **"Souscrire" button dead-ends** — it scrolls to a step that says "install the app" with no install button anywhere near it. The single biggest opportunity: make the conversion path actually convert, and put trust-proof on the page before the ask.

## What's Working

- **On-brand, warm, uncluttered execution.** True-white ground, disciplined green/navy, tinted soft shadows, generous whitespace — reads as a trustworthy health partner, not a hospital or a startup. Aesthetic scored 4/4 and both reviewers independently praised it.
- **The pricing table and formule cards.** The Gold featured treatment (green header, #f0faf4 column tint, translateY(-14px) lift) creates clear hierarchy without gimmicks, and dark text on the gold "LE PLUS CHOISI" tag correctly sidesteps the gold-text contrast trap.
- **Radical transparency as trust.** Disclosing waiting period, auto-renewal, senior surcharge, and possible refusal up front is exactly the "transparency as a feature" principle — unusual for an insurance page.

## Priority Issues

**[P0] "Souscrire" dead-ends at the conversion moment — no app-download where it's needed.** Plan CTAs scroll to `#souscrire`, whose step 1 is literally "Installez l'application SOSAN," yet the App Store / Play Store badges exist only in the footer. The product's primary success metric is installs, and the install instruction and the install button sit at opposite ends of the page. **Fix:** put the two store badges directly inside the subscribe section, and either deep-link the "Souscrire" buttons with the tier pre-selected or relabel them "Choisir Silver/Gold/Premium" so the label matches the outcome. → `$impeccable layout`

**[P1] No trust proof on a high-stakes page.** People are insuring a parent abroad, yet the page shows no institutional logos (Activa, MINSANTE, Baker Tilly), no license/regulator reference, no testimonial, and no depiction of the "traceable payment" promise. Legitimacy rests entirely on the words "by Activa." Directly violates "Trust is the product — earn belief before the ask." **Fix:** add an Activa/partner proof strip before the formules, one attributed diaspora testimonial (flagged illustrative until real), and make the traceable-payment promise visible. → `$impeccable layout`

**[P1] Seven "Diaspo X" products overload working memory — and all three tiers lead with "80%".** Silver/Gold/Premium/Care/Protégée/One Touch/Support Plus compete for the same attention, and because every tier opens with "80%," the actual difference stays vague ("plafonds plus élevés," "réseau reconnu" are abstract). A first-time buyer can't form a mental model. **Fix:** collapse the three peripheral products into a clearly-labeled "options complémentaires" with one-line definitions; rewrite plan leads to state the concrete difference, not "80%" three times. → `$impeccable clarify`

**[P1] Meaningful pricing text fails WCAG AA contrast.** The profile sub-labels ("21–60 ans", "moins de 21 ans", "60–69 ans") and the "+25% senior" note use #7a8896 = 3.62:1 at 12.5–13.5px; the featured column header (white on #0a8f54) = 4.10:1 at 14px/600. AA is the stated target and this is real pricing content. **Fix:** bump those labels/notes to --muted #4c5b6a or Ink; darken the featured header to --navy, or enlarge/thicken its white text. → `$impeccable colorize`

**[P2] The senior +25% surcharge is invisible at the moment a senior-funder decides.** Cards show "50€"; someone insuring a 64-year-old only learns the real 62.50€ by reading a 3.62:1 grey note. **Fix:** surface "+25% senior" on the cards, or add a small profile toggle (Adulte / Enfant / Senior) that updates the displayed price. → `$impeccable layout`

## Persona Red Flags

**Jordan (first-timer, diaspora):** Clicks "Souscrire" expecting a signup form, gets scrolled to app-install steps with no download button — reads as a dead-end. All three plan leads say "80%," so the real Silver-vs-Gold-vs-Premium difference is unclear. Can't tell which "Diaspo X" items are plans vs add-ons vs services.

**Riley (fine-print reader):** Appreciates the disclosed refusal clause + 21-day wait + auto-renewal, but finds zero third-party proof (no Activa logo, no policy/regulator reference, no full CGU link) to back a real money commitment. The "réévaluation si pathologie antérieure" line raises "so what will it actually cost me?" with no FAQ to resolve it.

**Casey (mobile):** The pricing table (min-width 560px) scrolls horizontally inside a 390px viewport — this is correctly scroll-contained (page itself doesn't overflow), but the Premium column can be missed, and this is the exact comparison a mobile diaspora user needs. Anchor jumps have no scroll-margin, so the sticky header clips the target heading. Hero floating badge sits at left:-18px, near the small-screen edge.

**Aline (project persona — Paris, insuring her mother, 64, in Douala):** Her mother is a "Senior," so the "50€" Gold card is really 62.50€ — discoverable only via a 3.62:1 note. The thing she most wants — emergency evacuation (EVASAN / "Diaspo Support Plus") — is buried in one dense sentence inside Premium's paragraph, unexplained. And nowhere is she reassured that her money is traceable and reaches real care — the core diaspora promise, absent from the diaspora page.

## Minor Observations

- `IconVideoCall` labels "Contenus santé numériques" (a content library) — semantic icon mismatch; a book/play-library icon fits better.
- `.kicker` (sentence-case, 0.2px) diverges from DESIGN.md's label token (13px / 2px / UPPERCASE). It's a *plus* for anti-slop — reconcile by updating the spec rather than the page.
- Two "tag" components exist (green `.plan__tag`, gold `.plan__inline-tag`); only gold is used here. Consolidate.
- `.plan__amount span` "/ mois" and the hero badge label are also #7a8896 (3.62:1) — genuinely meta, acceptable, but bundle them if you do a contrast pass.
- Final CTA gradient is the lone element brushing the "SaaS gradient" anti-reference — keep an eye on it.

## Questions to Consider

- If "Souscrire" can't subscribe on the page and only routes to the app, why isn't the plan card's primary action the app download itself (store badges *at* the decision moment, tier deep-linked), instead of a scroll to instructions?
- Your principle is "earn belief before the ask" — where, concretely, does a skeptical diaspora funder's trust get earned on this page before they're asked to insure a parent?
- Seven "Diaspo"-prefixed products share the stage — commit to three tiers up front and defer the other four behind a labeled "options" disclosure?
