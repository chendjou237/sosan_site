import fs from "fs";
import path from "path";
import { CDN } from "./constants";

/**
 * Server-only asset registry + existence check.
 *
 * Every product-showcase slot on the site points at a file under `public/`.
 * `<Mockup>` resolves each slot in this order:
 *   1. the local file under `public/` if it exists (the real screenshot/photo),
 *   2. otherwise the legacy `fallback` CDN image if one is set (non-destructive
 *      migration — currently-working photos keep showing until localised),
 *   3. otherwise a branded placeholder carrying the label.
 *
 * `assetExists` runs at render/build time on Node, so static pages pick up new
 * files on the next build/dev reload with no code change. This module must only
 * be imported from Server Components (it touches `fs`).
 */

export type MediaVariant = "phone" | "photo";

export type Asset = {
  /** Path under /public, always starting with "/". */
  file: string;
  /** Human label shown on the placeholder and used as alt text. */
  label: string;
  /** Default rendering hint (call sites may override). */
  variant: MediaVariant;
  /** Legacy image shown until the local file is supplied. */
  fallback?: string;
};

const EXT_ALTS = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

function existsUnderPublic(publicPath: string): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", publicPath.replace(/^\/+/, ""))
    );
  } catch {
    return false;
  }
}

/**
 * Find a local file for a slot, tolerating a different image extension than the
 * one declared in the manifest (so a dropped-in `.jpg` resolves a `.png` slot).
 * Returns the public path that actually exists, or null.
 */
function findLocal(publicPath: string): string | null {
  if (existsUnderPublic(publicPath)) return publicPath;
  const dot = publicPath.lastIndexOf(".");
  if (dot === -1) return null;
  const stem = publicPath.slice(0, dot);
  for (const ext of EXT_ALTS) {
    const cand = stem + ext;
    if (cand !== publicPath && existsUnderPublic(cand)) return cand;
  }
  return null;
}

export function assetExists(publicPath: string): boolean {
  return findLocal(publicPath) !== null;
}

/** Resolve a slot to a renderable src, or null when only a placeholder fits. */
export function resolveSrc(a: Asset): string | null {
  return findLocal(a.file) ?? a.fallback ?? null;
}

/**
 * Per-service app screenshots (services page). No fallback on purpose — these
 * are net-new captures, so the labelled placeholder invites the real screen.
 */
export const serviceScreens: Record<string, Asset> = {
  consultations: { file: "/app/services/consultations.png", label: "Consultations & rendez-vous", variant: "phone" },
  "hopitaux-labos": { file: "/app/services/hopitaux-labos.png", label: "Hôpitaux & laboratoires", variant: "phone" },
  pharmacie: { file: "/app/services/pharmacie.png", label: "Pharmacie", variant: "phone" },
  assurance: { file: "/app/services/assurance.png", label: "Assurance santé", variant: "phone" },
  dons: { file: "/app/services/dons.png", label: "Dons ONG & projets santé", variant: "phone" },
  "protection-famille": { file: "/app/services/protection-famille.png", label: "Protection famille", variant: "phone" },
  epargne: { file: "/app/services/epargne.png", label: "Épargne santé SOSAN", variant: "phone" },
  "profil-medical": { file: "/app/services/profil-medical.png", label: "Profil médical & documents", variant: "phone" },
  "assistant-ia": { file: "/app/services/assistant-ia.png", label: "Assistant santé IA", variant: "phone" },
  communaute: { file: "/app/services/communaute.png", label: "Communauté & conseils santé", variant: "phone" },
};

/** Diaspo plan photos (home + diaspo pages). Fallback = legacy CDN photos. */
export const planPhotos: Record<string, Asset> = {
  silver: {
    file: "/app/plans/silver.jpg",
    label: "Diaspo Silver",
    variant: "photo",
    fallback: `${CDN}/670f885de587b3675c7f85ee/b3b1675e-646c-48d5-befa-d3e1aed8b4a6/74423.jpg.jpeg?content-type=image%2Fjpeg`,
  },
  gold: {
    file: "/app/plans/gold.jpg",
    label: "Diaspo Gold",
    variant: "photo",
    fallback: `${CDN}/670f885de587b3675c7f85ee/baf5f793-c639-481a-9fd9-53f86291219e/19507.jpg.jpeg?content-type=image%2Fjpeg`,
  },
  premium: {
    file: "/app/plans/premium.jpg",
    label: "Diaspo Premium",
    variant: "photo",
    fallback: `${CDN}/670f885de587b3675c7f85ee/e2b8c576-42a3-486e-b799-68fadadd7aa7/16515+%282%29.jpg.jpeg?content-type=image%2Fjpeg`,
  },
};

/** About page lifestyle imagery. Fallback = legacy CDN photos. */
export const aboutGallery: Asset[] = [
  { file: "/app/about/ap1.jpg", label: "SOSAN sur le terrain", variant: "photo", fallback: `${CDN}/v1/670f885de587b3675c7f85ee/92306aec-38f7-434e-abb0-1ee3840eed74/ap1.png` },
  { file: "/app/about/ap2.jpg", label: "SOSAN sur le terrain", variant: "photo", fallback: `${CDN}/v1/670f885de587b3675c7f85ee/a08d3e76-4f0c-424e-8a9e-be012dad8b38/ap2.png` },
  { file: "/app/about/ap3.jpg", label: "SOSAN sur le terrain", variant: "photo", fallback: `${CDN}/v1/670f885de587b3675c7f85ee/2dec504e-ee20-46ff-84e6-764fae3e6ecd/ap3.png` },
  { file: "/app/about/ap4.jpg", label: "SOSAN sur le terrain", variant: "photo", fallback: `${CDN}/v1/670f885de587b3675c7f85ee/c9809d40-655c-43b9-8a7a-288954fd9ca7/ap4.png` },
];
export const aboutVision: Asset = {
  file: "/app/about/vision.jpg",
  label: "Notre vision",
  variant: "photo",
  fallback: `${CDN}/v1/670f885de587b3675c7f85ee/a2eb975b-5034-46ca-8559-a4213a7de088/sosan-rend-accessible-les-soins-de-sante%CC%81-en-Afrique.png`,
};

/** Home "about" app screenshot. Fallback = legacy CDN app render. */
export const homeAbout: Asset = {
  file: "/app/home-about.png",
  label: "L'application SOSAN",
  variant: "phone",
  fallback: `${CDN}/v1/670f885de587b3675c7f85ee/1ecca722-1d4c-4af1-ab58-1c59d0761f7b/sosan-application-mobile-de-sant%C3%A9-en-Afrique.png`,
};

/** Diaspo hero photo. Fallback = legacy CDN photo. */
export const diaspoHero: Asset = {
  file: "/app/diaspo/hero.jpg",
  label: "Diaspo Support",
  variant: "photo",
  fallback: `${CDN}/670f885de587b3675c7f85ee/baf5f793-c639-481a-9fd9-53f86291219e/19507.jpg.jpeg?content-type=image%2Fjpeg`,
};

/** Testimonial avatars. Fallback = legacy CDN avatars. */
export const testimonialAvatars: Record<string, Asset> = {
  "aicha-mbarga": { file: "/app/testimonials/aicha-mbarga.jpg", label: "Aïcha Mbarga", variant: "photo", fallback: `${CDN}/670f885de587b3675c7f85ee/a4d87498-101f-406f-b13d-a61a6504b7e2/19641.jpg?content-type=image%2Fjpeg` },
  "emmanuel-fotso": { file: "/app/testimonials/emmanuel-fotso.jpg", label: "Emmanuel Fotso", variant: "photo", fallback: `${CDN}/670f885de587b3675c7f85ee/8aa4e46b-ec61-4850-b62c-3bfdc726ddf6/146757.jpg?content-type=image%2Fjpeg` },
  "nadege-etoundi": { file: "/app/testimonials/nadege-etoundi.jpg", label: "Nadège Etoundi", variant: "photo", fallback: `${CDN}/670f885de587b3675c7f85ee/50ced21f-0bae-4bb3-9b42-de3189f21207/128895.jpg?content-type=image%2Fjpeg` },
};

/** News/Actualités cover image for a post slug (net-new — placeholder until supplied). */
export function newsCover(slug: string, title: string): Asset {
  return { file: `/app/actualites/${slug}.jpg`, label: title, variant: "photo" };
}
