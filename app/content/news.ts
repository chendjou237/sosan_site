/**
 * News module — structure and locale-independent data.
 *
 * Categories are keyed by stable slugs rather than by their display text. The
 * previous shape used French labels ("Événement") as the union type, the record
 * key, the stored `post.category` AND the filter comparison value, so
 * translating a label silently broke filtering.
 */
import type { Locale } from "../i18n/config";
import { LOCALE_TAG } from "../i18n/config";

export const CATEGORY_KEYS = [
  "article",
  "event",
  "press",
  "partnership",
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

/** CSS modifier per category — never translated. */
export const categoryMod: Record<CategoryKey, string> = {
  article: "article",
  event: "evenement",
  press: "presse",
  partnership: "partenariat",
};

export type Post = {
  slug: string;
  category: CategoryKey;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** External link (press pickup, event registration, partner site). */
  href?: string;
  featured?: boolean;
};

export type NewsContent = {
  meta: { title: string; description: string };
  hero: { kicker: string; title: string; lead: string };
  /** Home-page teaser section. */
  teaser: { kicker: string; title: string; lead: string; seeAll: string };
  categoryLabels: Record<CategoryKey, string>;
  posts: Post[];
};

/** Newest first. */
export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
}

/** Featured first, then newest — top N for the home teaser. */
export function latestPosts(posts: Post[], n = 3): Post[] {
  const sorted = sortPosts(posts);
  return [
    ...sorted.filter((p) => p.featured),
    ...sorted.filter((p) => !p.featured),
  ].slice(0, n);
}

/** Format an ISO date in the active locale, e.g. "18 juin 2026" / "18 June 2026". */
export function formatDate(iso: string, lang: Locale): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(LOCALE_TAG[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
