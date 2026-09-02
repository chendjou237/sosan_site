import type { ServicesContent } from "./types";

export const services: ServicesContent = {
  meta: {
    title: "Nos services — Toute votre santé dans une seule app | SOSAN",
    description:
      "Médecins, hôpitaux, laboratoires, pharmacie, assurance santé, épargne, dons et protection famille — SOSAN réunit tout votre parcours de soins au Cameroun, avec paiements mobiles sécurisés et support bilingue FR/EN.",
  },
  hero: {
    kicker: "Nos services",
    title: { lead: "Toute votre santé,", accent: "dans une seule app" },
    lead: "Trouvez des médecins, réservez des examens, assurez-vous et prenez soin de votre famille — depuis votre téléphone, où que vous soyez.",
    chips: [
      "Paiements mobiles sécurisés",
      "Bilingue FR / EN",
      "Cameroun & diaspora",
    ],
  },
  services: [
    {
      title: "Consultations & rendez-vous",
      desc: "Trouvez le bon médecin et prenez rendez-vous en quelques clics.",
      screen: "consultations",
      featured: true,
      points: [
        "Filtrez par spécialité, lieu ou disponibilité",
        "Rendez-vous standard & VIP, au créneau de votre choix",
        "Téléconsultation vidéo directement dans l’application",
        "Messagerie en temps réel avec votre médecin",
        "Profils, avis et notes avant de réserver",
        "Historique complet de vos rendez-vous",
      ],
    },
    {
      title: "Hôpitaux & laboratoires",
      desc: "Accédez à des établissements de confiance près de chez vous.",
      screen: "hopitaux-labos",
      points: [
        "Hôpitaux et labos sur une carte, avec contacts",
        "Réservez examens et analyses médicales",
        "Consultations spécialisées en établissement partenaire",
        "Laissez un avis après votre visite",
      ],
    },
    {
      title: "Pharmacie",
      tag: "Bientôt",
      desc: "Commandez vos médicaments sans sortir de chez vous.",
      screen: "pharmacie",
      points: [
        "Recherchez un médicament et sa disponibilité à proximité",
        "Commande avec validation d’ordonnance",
        "Suivi du statut de vos commandes",
      ],
    },
    {
      title: "Assurance santé",
      desc: "Protégez-vous et vos proches avec une couverture adaptée.",
      screen: "assurance",
      featured: true,
      href: "/diaspo/",
      points: [
        "Assurance Diaspo / Activa en quelques clics",
        "Couvrez-vous et toute votre famille",
        "Adhésion digitale guidée : questionnaire, contrat, e-signature",
        "Suivez votre contrat et déclarez vos sinistres dans l’app",
      ],
    },
    {
      title: "Dons ONG & projets santé",
      desc: "Soutenez des causes de santé qui comptent.",
      screen: "dons",
      points: [
        "Parcourez des ONG vérifiées et leurs projets",
        "Donnez en toute sécurité et suivez l’avancement",
      ],
    },
    {
      title: "Protection famille",
      desc: "Prenez soin de ceux qui comptent sur vous.",
      screen: "protection-famille",
      points: [
        "Ajoutez vos proches comme bénéficiaires",
        "Choisissez qui reçoit les factures et règle un plan",
      ],
    },
    {
      title: "Épargne santé SOSAN",
      desc: "Mettez de l’argent de côté pour vos dépenses de santé.",
      screen: "epargne",
      points: [
        "Un espace dédié pour anticiper et couvrir vos frais médicaux",
      ],
    },
    {
      title: "Profil médical & documents",
      desc: "Vos données de santé, toujours avec vous.",
      screen: "profil-medical",
      points: [
        "Un profil médical accessible pendant les consultations",
        "Stockez et retrouvez vos documents médicaux",
        "Consultez, téléchargez ou renouvelez vos ordonnances",
      ],
    },
    {
      title: "Assistant santé IA",
      desc: "Un chatbot pour vous guider et répondre à vos questions, à tout moment.",
      screen: "assistant-ia",
      points: [],
    },
    {
      title: "Communauté & conseils santé",
      desc: "Publications et conseils santé pour rester informé et engagé.",
      screen: "communaute",
      points: [],
    },
  ],
  servicesSection: {
    title: "Un parcours de soins complet",
    lead:
      "Dix services réunis dans une seule application, pensés pour simplifier chaque étape — de la consultation à la couverture.",
    seePlans: "Voir les formules",
  },
  why: {
    kicker: "Pourquoi SOSAN",
    title: "La santé, sans friction ni distance",
    items: [
      {
        title: "Paiements sécurisés",
        desc: "Orange Money, MTN Mobile Money, E-nkap et cartes bancaires.",
      },
      {
        title: "Bilingue FR / EN",
        desc: "Une expérience complète en français et en anglais.",
      },
      {
        title: "Géolocalisé",
        desc: "Les prestataires et services près de vous, sur une carte.",
      },
      {
        title: "Tout-en-un",
        desc: "Médecins, hôpitaux, labos, pharmacies, assurance, épargne & dons.",
      },
      {
        title: "Pensé pour la diaspora",
        desc: "Gérez les soins de vos proches restés au pays.",
      },
    ],
  },
  steps: {
    title: "Comment ça marche",
    lead: "Quatre étapes, du premier rendez-vous au suivi complet.",
    items: [
      {
        title: "Trouver",
        desc: "Cherchez médecins, hôpitaux, laboratoires ou formules près de vous.",
      },
      {
        title: "Réserver / Souscrire",
        desc: "Choisissez un créneau ou une formule en quelques clics.",
      },
      {
        title: "Payer en sécurité",
        desc: "Orange Money, MTN Mobile Money, E-nkap ou carte bancaire.",
      },
      {
        title: "Être soigné",
        desc: "Consultez, faites-vous tester, couvrez-vous et restez suivi.",
      },
    ],
  },
  pros: {
    kicker: "Professionnels de santé",
    title: "Une plateforme complète pour les prestataires",
    lead: "Médecins, établissements, pharmacies, assureurs et ONG : SOSAN vous connecte aux patients et outille votre activité au quotidien.",
    items: [
      {
        role: "Médecins",
        desc: "Agenda, rendez-vous, téléconsultations, messagerie patients et suivi des revenus.",
      },
      {
        role: "Hôpitaux & laboratoires",
        desc: "Équipes, spécialistes, services et examens ; tableaux de bord et revenus.",
      },
      {
        role: "Pharmacies",
        desc: "Catalogue de médicaments, campagnes, gestion des commandes et revenus.",
      },
      {
        role: "Assureurs",
        desc: "Publier des offres, gérer adhésions et abonnés, suivre les contrats.",
      },
      {
        role: "ONG",
        desc: "Créer des projets, recevoir des dons et suivre les transactions.",
      },
    ],
  },
  cta: {
    title: "Prenez votre santé en main",
    lead: "Téléchargez SOSAN et retrouvez médecins, hôpitaux, assurance et suivi — réunis dans une seule application.",
    button: "Une question ? Contactez notre équipe",
  },
};
