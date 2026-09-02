import type { NewsContent } from "./news";

/** Slugs, dates, categories and `featured` mirror news.fr.ts exactly. */
export const news: NewsContent = {
  meta: {
    title: "News & collaborations — SOSAN",
    description:
      "SOSAN announcements, events, press coverage and partnerships — the campaign and collaborations bringing Africa closer to care that is reliable, fast and affordable.",
  },
  hero: {
    kicker: "News & collaborations",
    title: "Healthcare in motion",
    lead: "Our announcements, events, press coverage and partnerships — up close with the SOSAN campaign and the people we work with.",
  },
  teaser: {
    kicker: "News & collaborations",
    title: "Healthcare in motion",
    lead: "Our most recent announcements, events and partnerships.",
    seeAll: "See all news",
  },
  categoryLabels: {
    article: "Article",
    event: "Event",
    press: "Press",
    partnership: "Partnership",
  },
  posts: [
    {
      slug: "lancement-diaspo-support",
      category: "partnership",
      title:
        "SOSAN and Activa launch Diaspo Support for the Cameroonian diaspora",
      excerpt:
        "A new health insurance offer letting the diaspora cover care for family back home in Cameroon, with Diaspo Care support throughout.",
      date: "2026-06-18",
      featured: true,
    },
    {
      slug: "assistant-ia-whatsapp",
      category: "article",
      title: "Chat with SOSAN’s AI health assistant on WhatsApp",
      excerpt:
        "Booking appointments, health questions and reimbursement tracking: our AI assistant is now available 24/7, right inside WhatsApp.",
      date: "2026-06-02",
    },
    {
      slug: "partenariat-minsante",
      category: "partnership",
      title: "A stronger partnership with the Ministry of Public Health",
      excerpt:
        "SOSAN is working with leading health institutions to widen access to quality care across the country.",
      date: "2026-05-20",
    },
    {
      slug: "sosan-caravane-sante-douala",
      category: "event",
      title: "SOSAN health caravan: free screenings in Douala",
      excerpt:
        "A look back at our free screening campaign, which helped hundreds of families move towards better ongoing care.",
      date: "2026-05-04",
    },
    {
      slug: "sosan-presse-innovation-sante",
      category: "press",
      title:
        "SOSAN named among the health innovations to watch in Central Africa",
      excerpt:
        "The trade press looks at SOSAN’s all-in-one approach: consultations, transparent payments and coverage for the diaspora.",
      date: "2026-04-15",
    },
    {
      slug: "conseils-prevention-saison-pluies",
      category: "article",
      title: "Prevention: staying well through the rainy season",
      excerpt:
        "Our health tips for getting ahead of seasonal illness and knowing when to see a doctor, with input from our partner physicians.",
      date: "2026-03-28",
    },
  ],
};
