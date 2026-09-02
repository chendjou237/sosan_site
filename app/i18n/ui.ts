/**
 * UI chrome — the strings that live in shared components rather than in page
 * content: header, footer, forms, the legal shell, the 404.
 *
 * `UiStrings` is declared from the French object, so every key the French uses
 * is required in the English. A forgotten translation is a `tsc` error, never a
 * French string silently rendering on an English page.
 */
import type { Locale } from "./config";

const fr = {
  nav: {
    about: "Qui sommes-nous",
    services: "Services",
    diaspo: "Diaspo Support",
    news: "Actualités",
    partners: "Partenaires",
    contact: "Contact",
  },
  header: {
    logoAlt: "SOSAN",
    download: "Télécharger l’app",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Choisir la langue",
  },
  skipLink: "Aller au contenu principal",
  footer: {
    about:
      "Votre solution santé pour tous. La plateforme qui rapproche l’Afrique des soins fiables, rapides et accessibles.",
    navHeading: "Navigation",
    resourcesHeading: "Ressources",
    contactHeading: "Contact",
    servicesLink: "Nos services",
    becomePartner: "Devenir partenaire",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    accountDeletion: "Suppression de compte",
    contactUs: "Nous contacter",
    address: "Douala & Yaoundé, Cameroun",
    rights: "© 2026 SOSAN Med. Tous droits réservés.",
  },
  stores: {
    appStore: "Télécharger sur l’App Store",
    playStore: "Disponible sur Google Play",
  },
  form: {
    firstName: "Prénom",
    lastName: "Nom de famille",
    email: "E-mail",
    phone: "Téléphone",
    message: "Votre message",
    submit: "Envoyer",
    successTitle: "Message envoyé",
    successBody: "Merci, notre équipe vous recontactera très vite.",
    /** These land in the visitor's mail client, so they are user-facing. */
    mailSubject: "Contact depuis le site —",
    mailName: "Nom :",
    mailEmail: "E-mail :",
    mailPhone: "Téléphone :",
  },
  mockup: {
    /** Suffixed onto an asset label when the real image is not supplied yet. */
    pending: "visuel à venir",
    pendingShort: "Visuel à venir",
    appScreensAlt: "L’application SOSAN : écran d’accueil et recherche de médecin",
  },
  legal: {
    kicker: "Informations légales",
    toc: "Sommaire",
  },
  news: {
    filterLabel: "Filtrer par catégorie",
    readMore: "Lire la suite",
    all: "Tout",
  },
  notFound: {
    title: "Cette page n’existe pas",
    body: "Le lien que vous avez suivi est peut-être incorrect, ou la page a été déplacée.",
    home: "Retour à l’accueil",
  },
  rating: "Note : 5 étoiles sur 5",
} as const;

export type UiStrings = {
  [K in keyof typeof fr]: (typeof fr)[K] extends string
    ? string
    : { [P in keyof (typeof fr)[K]]: string };
};

const en: UiStrings = {
  nav: {
    about: "About us",
    services: "Services",
    diaspo: "Diaspo Support",
    news: "News",
    partners: "Partners",
    contact: "Contact",
  },
  header: {
    logoAlt: "SOSAN",
    download: "Get the app",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Choose language",
  },
  skipLink: "Skip to main content",
  footer: {
    about:
      "Your health solution for everyone. The platform bringing Africa closer to care that is reliable, fast and affordable.",
    navHeading: "Navigation",
    resourcesHeading: "Resources",
    contactHeading: "Contact",
    servicesLink: "Our services",
    becomePartner: "Become a partner",
    privacy: "Privacy policy",
    terms: "Terms and conditions",
    accountDeletion: "Delete your account",
    contactUs: "Contact us",
    address: "Douala & Yaoundé, Cameroon",
    rights: "© 2026 SOSAN Med. All rights reserved.",
  },
  stores: {
    appStore: "Download on the App Store",
    playStore: "Get it on Google Play",
  },
  form: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    message: "Your message",
    submit: "Send",
    successTitle: "Message sent",
    successBody: "Thank you — our team will get back to you shortly.",
    mailSubject: "Website enquiry —",
    mailName: "Name:",
    mailEmail: "Email:",
    mailPhone: "Phone:",
  },
  mockup: {
    pending: "image coming soon",
    pendingShort: "Image coming soon",
    appScreensAlt: "The SOSAN app: home screen and doctor search",
  },
  legal: {
    kicker: "Legal information",
    toc: "Contents",
  },
  news: {
    filterLabel: "Filter by category",
    readMore: "Read more",
    all: "All",
  },
  notFound: {
    title: "This page doesn’t exist",
    body: "The link you followed may be broken, or the page may have moved.",
    home: "Back to home",
  },
  rating: "Rated 5 out of 5 stars",
};

const dictionaries: Record<Locale, UiStrings> = { fr, en };

export function ui(lang: Locale): UiStrings {
  return dictionaries[lang];
}
