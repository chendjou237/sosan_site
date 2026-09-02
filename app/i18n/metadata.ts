/**
 * Per-locale metadata, including the hreflang alternates that tell search
 * engines the two trees are translations of one another rather than duplicates.
 */
import type { Metadata } from "next";
import { LOCALES, OG_LOCALE, localePath, type Locale } from "./config";

export const SITE_URL = "https://sosanmed.com";

/** French and English share one OG image until an English card is generated. */
export const OG_IMAGE: Record<Locale, string> = {
  fr: "/og.png",
  en: "/og.png",
};

export function pageMetadata({
  lang,
  path = "/",
  title,
  description,
}: {
  lang: Locale;
  /** Locale-independent path, e.g. "/about/". */
  path?: string;
  title: string;
  description: string;
}): Metadata {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, localePath(l, path)])
  );

  return {
    title,
    description,
    alternates: {
      canonical: localePath(lang, path),
      languages: { ...languages, "x-default": localePath("fr", path) },
    },
    openGraph: {
      title,
      description,
      locale: OG_LOCALE[lang],
      type: "website",
      url: localePath(lang, path),
      images: [
        { url: OG_IMAGE[lang], width: 1200, height: 630, type: "image/png" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE[lang]],
    },
  };
}
