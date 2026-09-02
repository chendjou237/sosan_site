import type { NewsContent } from "./news";

/**
 * NOTE: Placeholder campaign content — replace `posts` with real SOSAN
 * announcements, events, press pickups and partner collaborations. Each post's
 * cover image lives at `public/app/actualites/<slug>.jpg`; a branded
 * placeholder shows until that file is supplied. Keep slugs identical across
 * locales so both languages share the same cover image.
 */
export const news: NewsContent = {
  meta: {
    title: "Actualités & collaborations — SOSAN",
    description:
      "Annonces, événements, presse et partenariats de SOSAN : suivez la campagne et les collaborations qui rapprochent l’Afrique de soins fiables, rapides et accessibles.",
  },
  hero: {
    kicker: "Actualités & collaborations",
    title: "La santé en mouvement",
    lead: "Nos annonces, événements, retombées presse et partenariats — au plus près de la campagne SOSAN et de ses collaborations.",
  },
  teaser: {
    kicker: "Actualités & collaborations",
    title: "La santé en mouvement",
    lead: "Nos annonces, événements et partenariats les plus récents.",
    seeAll: "Voir toutes les actualités",
  },
  categoryLabels: {
    article: "Article",
    event: "Événement",
    press: "Presse",
    partnership: "Partenariat",
  },
  posts: [
    {
      slug: "lancement-diaspo-support",
      category: "partnership",
      title:
        "SOSAN et Activa lancent Diaspo Support pour la diaspora camerounaise",
      excerpt:
        "Une nouvelle offre d’assurance santé qui permet à la diaspora de couvrir les soins de leurs proches restés au Cameroun, avec l’accompagnement Diaspo Care.",
      date: "2026-06-18",
      featured: true,
    },
    {
      slug: "assistant-ia-whatsapp",
      category: "article",
      title: "Discutez avec l’assistant santé IA de SOSAN sur WhatsApp",
      excerpt:
        "Prise de rendez-vous, questions de santé et suivi des remboursements : notre assistant IA est désormais disponible 24h/24 directement sur WhatsApp.",
      date: "2026-06-02",
    },
    {
      slug: "partenariat-minsante",
      category: "partnership",
      title: "Un partenariat renforcé avec le Ministère de la Santé publique",
      excerpt:
        "SOSAN collabore avec les institutions de santé de référence pour élargir l’accès aux soins de qualité sur tout le territoire.",
      date: "2026-05-20",
    },
    {
      slug: "sosan-caravane-sante-douala",
      category: "event",
      title: "Caravane santé SOSAN : dépistages gratuits à Douala",
      excerpt:
        "Retour sur notre campagne de dépistage gratuit qui a permis d’accompagner des centaines de familles vers un meilleur suivi de santé.",
      date: "2026-05-04",
    },
    {
      slug: "sosan-presse-innovation-sante",
      category: "press",
      title:
        "SOSAN cité parmi les innovations santé à suivre en Afrique centrale",
      excerpt:
        "La presse spécialisée revient sur l’approche tout-en-un de SOSAN : consultations, paiements transparents et couverture pour la diaspora.",
      date: "2026-04-15",
    },
    {
      slug: "conseils-prevention-saison-pluies",
      category: "article",
      title: "Prévention : bien se protéger pendant la saison des pluies",
      excerpt:
        "Nos conseils santé pour anticiper les maladies saisonnières et savoir quand consulter, avec l’appui de nos médecins partenaires.",
      date: "2026-03-28",
    },
  ],
};
