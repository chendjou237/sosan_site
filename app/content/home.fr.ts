import type { HomeContent } from "./types";

export const home: HomeContent = {
  hero: {
    badge: "Santé fiable, rapide & accessible",
    title: { lead: "Des soins de santé fiables,", accent: "où que vous soyez." },
    lead: "Consultez des médecins, payez en toute transparence et protégez vos proches au Cameroun — sur place comme depuis la diaspora, dans une seule application.",
    secondaryCta: "Découvrir les formules Diaspo",
    trust:
      "Déjà sur l’App Store & Google Play · en partenariat avec le Ministère de la Santé",
    stats: [
      { num: "24/7", label: "Consultations en ligne" },
      { num: "80 %", label: "des soins couverts" },
      { num: "0", label: "frais caché" },
    ],
    imageAlt: "Pr Jean Bahebeck, ambassadeur SOSAN",
    ambassadorName: "Pr Jean Bahebeck",
    ambassadorRole: "Ambassadeur SOSAN",
  },
  trustbar: {
    label: "En partenariat avec les institutions de santé de référence",
    ariaLabel: "Institutions partenaires",
    logoAlt: "Institution partenaire de SOSAN",
  },
  banner: {
    tag: "NOUVEAU",
    title: "Discutez avec l’assistant IA SOSAN sur WhatsApp",
    lead: "Posez vos questions, prenez rendez-vous et suivez vos remboursements directement sur WhatsApp, 24h/24.",
    features: ["Télé-médecine", "Examens médicaux", "Mutuelle santé"],
    cta: "Discuter sur WhatsApp",
    imageAlt: "Assistant IA SOSAN sur WhatsApp",
  },
  about: {
    kicker: "QUI SOMMES-NOUS",
    title: "SOSAN facilite votre accès aux soins",
    paragraphs: [
      "Née de l’ambition d’améliorer les conditions d’accès aux soins des populations africaines, SOSAN est une application et une plateforme de santé qui réduit les difficultés d’accès aux soins en Afrique.",
      "Nous améliorons les conditions de travail des acteurs de la santé et facilitons la solidarité dans l’administration et le paiement des soins de santé.",
    ],
    proof: [
      "Télé-médecine & rendez-vous, 24h/24",
      "Paiements tracés, zéro frais caché",
      "Au Cameroun et pour la diaspora",
    ],
    cta: "En savoir plus",
    floatTitle: "Consultations en ligne",
    floatSub: "Disponible 24h/24, 7j/7",
    imageAlt: "Application SOSAN",
  },
  services: {
    title: "Nos Services",
    lead: "Une gamme de services conçus pour rendre les soins plus simples, rapides et accessibles.",
    featuredTag: "Le plus utilisé",
    featuredCta: "Télécharger l’app",
    itemCta: "Télécharger",
    items: [
      {
        title: "Télé-médecine & rendez-vous",
        desc: "Consultez à distance ou en présentiel des généralistes et spécialistes expérimentés, 24h/24.",
      },
      {
        title: "Paiement sécurisé & transparent",
        desc: "Fini les surfacturations et frais cachés. Des paiements sécurisés et traçables (B/B & B/C).",
      },
      {
        title: "Accompagnement personnalisé",
        desc: "Une équipe dédiée vous guide dans vos démarches et aide à financer les cas les plus défavorisés.",
      },
      {
        title: "Mutuelle de santé",
        desc: "Des polices d’assurance abordables et transparentes. La diaspora peut souscrire pour ses proches.",
      },
    ],
    moreCta: "Découvrir tous nos services",
    moreNote: "Dix services réunis dans une seule application",
  },
  plans: {
    kicker: "DIASPO SUPPORT",
    title: "Assurez la santé de vos proches",
    lead: "Silver, Gold et Premium : des garanties santé adaptées et un accompagnement SOSAN dédié, sur tout le territoire camerounais.",
    moreCta: "Découvrir Diaspo Support",
    moreNote: "Tarif adulte, par mois · profils enfant & senior disponibles",
    items: [
      {
        key: "silver",
        name: "Diaspo Silver",
        price: "30 €",
        perMonth: "/ mois",
        summary: "Couverture 80 % des soins courants",
        desc: "Une réponse stratégique aux besoins de santé fondamentaux, via un réseau sélectionné d’établissements publics et confessionnels.",
        cta: "Choisir Silver",
      },
      {
        key: "gold",
        name: "Diaspo Gold",
        price: "50 €",
        perMonth: "/ mois",
        tag: "POPULAIRE",
        summary: "80 % avec plafonds rehaussés",
        desc: "Plus de latitude thérapeutique et un accès facilité à un réseau étendu d’hôpitaux publics et privés d’excellence au Cameroun.",
        cta: "Choisir Gold",
        featured: true,
      },
      {
        key: "premium",
        name: "Diaspo Premium",
        price: "100 €",
        perMonth: "/ mois",
        summary: "Sécurité sanitaire intégrale",
        desc: "Réseau complet, ambulances médicalisées (Yaoundé & Douala) et coordination d’évacuation sanitaire (EVASAN) à l’étranger.",
        cta: "Choisir Premium",
      },
    ],
  },
  why: {
    kicker: "POURQUOI NOUS REJOINDRE",
    title: "Développez votre activité avec SOSAN",
    lead: "En devenant partenaire, vous intégrez une plateforme qui facilite la mise en relation avec les patients et valorise votre expertise.",
    cta: "Rejoignez-nous",
    items: [
      {
        title: "Améliorez votre réputation",
        desc: "Auprès de milliers de patients présents sur notre plateforme, en toute confiance.",
      },
      {
        title: "Élargissez votre visibilité",
        desc: "Gagnez en visibilité à l’échelle nationale et au-delà des frontières.",
      },
      {
        title: "Boostez vos revenus",
        desc: "Une augmentation de votre chiffre d’affaires grâce à un flux constant de patients.",
      },
      {
        title: "Positionnement international",
        desc: "Faites-vous connaître à l’extérieur selon la qualité de vos services.",
      },
    ],
  },
  partners: {
    title: "Nos Partenaires",
    lead: "Ils nous font déjà confiance !",
    logoAlt: "Partenaire SOSAN",
  },
  // NOTE: Illustrative testimonials — replace with real, attributed quotes
  // (with consent) before wider launch.
  testimonials: {
    kicker: "AVIS & COMMENTAIRES",
    title: { lead: "Ce que disent nos", accent: "clients" },
    items: [
      {
        quote:
          "« Depuis Paris, j’ai pu organiser et régler les consultations de ma mère à Douala en toute transparence. Je vois exactement où va chaque franc — c’est un vrai soulagement. »",
        name: "Emmanuel Fotso",
        role: "Diaspora · Paris",
        avatar: "emmanuel-fotso",
      },
      {
        quote:
          "« J’ai consulté un généraliste depuis chez moi, sans faire la queue ni me déplacer. Le médecin a pris le temps de tout m’expliquer. Simple, rapide et rassurant. »",
        name: "Aïcha Mbarga",
        role: "Patiente à Yaoundé",
        avatar: "aicha-mbarga",
      },
      {
        quote:
          "« Fini les frais surprises : les tarifs sont clairs avant chaque acte et l’équipe m’a accompagné à chaque étape. Je le recommande sans hésiter à mes proches. »",
        name: "Hervé Etoundi",
        role: "Patient à Douala",
        avatar: "herve-etoundi",
      },
    ],
  },
  contact: {
    title: "Faites appel à SOSAN dès aujourd’hui",
    lead: "Prenez rendez-vous avec notre équipe et bénéficiez d’un accompagnement personnalisé adapté à vos besoins.",
    location: "Douala & Yaoundé, Cameroun",
    diaspora: "Diaspora incluse",
  },
};
