/**
 * Locale plumbing for the bilingual static export.
 *
 * The site ships as `output: "export"` on Apache, so there is no middleware to
 * negotiate a language at request time: both trees are built up front under
 * /fr/ and /en/, and the root redirect lives in deploy/.htaccess.
 */

export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** Short label shown in the header switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { fr: "FR", en: "EN" };

/** `lang` attribute + BCP-47 tag used for date formatting. */
export const LOCALE_TAG: Record<Locale, string> = { fr: "fr-FR", en: "en-GB" };

/** OpenGraph locale. */
export const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Builds an internal href. `path` is the locale-independent part with a leading
 * slash ("/about/", "/#contact", "/"). Every internal link goes through this —
 * a raw "/about/" in JSX is the bug this exists to prevent.
 */
export function localePath(lang: Locale, path = "/"): string {
  if (path.startsWith("#")) return `/${lang}/${path}`;
  const rest = path === "/" ? "" : path.replace(/^\//, "");
  return `/${lang}/${rest}`;
}

/** Swaps the locale prefix on the current pathname, for the language switcher. */
export function swapLocale(pathname: string, next: Locale): string {
  const stripped = pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
  return `/${next}${stripped || "/"}`;
}

/** Static params for every route segment under app/[lang]. */
export function localeParams() {
  return LOCALES.map((lang) => ({ lang }));
}
