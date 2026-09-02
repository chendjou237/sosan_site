import type { MetadataRoute } from "next";
import { LOCALES, localePath } from "./i18n/config";
import { SITE_URL } from "./i18n/metadata";

/** Locale-independent paths, mirroring the routes under app/[lang]. */
const PATHS = [
  "/",
  "/about/",
  "/services/",
  "/diaspo/",
  "/actualites/",
  "/privacy-policy/",
  "/terms/",
  "/account-deletion/",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    PATHS.map((p) => ({
      url: `${SITE_URL}${localePath(lang, p)}`,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE_URL}${localePath(l, p)}`])
        ),
      },
    }))
  );
}
