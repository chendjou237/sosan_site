export type NewsCategory = "Article" | "Événement" | "Presse" | "Partenariat";

export type Post = {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** External link (press pickup, event registration, partner site). */
  href?: string;
  featured?: boolean;
};

/** CSS modifier + accessible French label per category. */
export const categoryMeta: Record<
  NewsCategory,
  { mod: string; label: string }
> = {
  Article: { mod: "article", label: "Article" },
  Événement: { mod: "evenement", label: "Événement" },
  Presse: { mod: "presse", label: "Presse" },
  Partenariat: { mod: "partenariat", label: "Partenariat" },
};

export const CATEGORIES: (NewsCategory | "Tout")[] = [
  "Tout",
  "Article",
  "Événement",
  "Presse",
  "Partenariat",
];

/**
 * NOTE: Placeholder campaign content — replace `posts` with real SOSAN
 * announcements, events, press pickups and partner collaborations (title,
 * date, excerpt, and an external `href` where relevant). Each post's cover
 * image lives at `public/app/actualites/<slug>.jpg` (see ASSETS.md); a
 * branded placeholder shows until that file is supplied.
 */
export const posts: Post[] = [
  {
    slug: "lancement-diaspo-support",
    category: "Partenariat",
    title: "SOSAN et Activa lancent Diaspo Support pour la diaspora camerounaise",
    excerpt:
      "Une nouvelle offre d'assurance santé qui permet à la diaspora de couvrir les soins de leurs proches restés au Cameroun, avec l'accompagnement Diaspo Care.",
    date: "2026-06-18",
    featured: true,
  },
  {
    slug: "assistant-ia-whatsapp",
    category: "Article",
    title: "Discutez avec l'assistant santé IA de SOSAN sur WhatsApp",
    excerpt:
      "Prise de rendez-vous, questions de santé et suivi des remboursements : notre assistant IA est désormais disponible 24h/24 directement sur WhatsApp.",
    date: "2026-06-02",
  },
  {
    slug: "partenariat-minsante",
    category: "Partenariat",
    title: "Un partenariat renforcé avec le Ministère de la Santé publique",
    excerpt:
      "SOSAN collabore avec les institutions de santé de référence pour élargir l'accès aux soins de qualité sur tout le territoire.",
    date: "2026-05-20",
  },
  {
    slug: "sosan-caravane-sante-douala",
    category: "Événement",
    title: "Caravane santé SOSAN : dépistages gratuits à Douala",
    excerpt:
      "Retour sur notre campagne de dépistage gratuit qui a permis d'accompagner des centaines de familles vers un meilleur suivi de santé.",
    date: "2026-05-04",
  },
  {
    slug: "sosan-presse-innovation-sante",
    category: "Presse",
    title: "SOSAN cité parmi les innovations santé à suivre en Afrique centrale",
    excerpt:
      "La presse spécialisée revient sur l'approche tout-en-un de SOSAN : consultations, paiements transparents et couverture pour la diaspora.",
    date: "2026-04-15",
  },
  {
    slug: "conseils-prevention-saison-pluies",
    category: "Article",
    title: "Prévention : bien se protéger pendant la saison des pluies",
    excerpt:
      "Nos conseils santé pour anticiper les maladies saisonnières et savoir quand consulter, avec l'appui de nos médecins partenaires.",
    date: "2026-03-28",
  },
];

/** Newest-first. */
export const sortedPosts: Post[] = [...posts].sort(
  (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)
);

/** Featured first, then newest — top N for the home teaser. */
export const latestPosts: Post[] = [
  ...sortedPosts.filter((p) => p.featured),
  ...sortedPosts.filter((p) => !p.featured),
].slice(0, 3);

/** Format an ISO date as a French long date, e.g. "18 juin 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
