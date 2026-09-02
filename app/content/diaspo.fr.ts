import type { DiaspoContent } from "./types";

export const diaspo: DiaspoContent = {
  meta: {
    title: "Diaspo Support — Assurance santé pour vos proches | SOSAN",
    description:
      "Diaspo Support by Activa : Silver, Gold et Premium. Depuis l’étranger, assurez la santé de vos proches au Cameroun avec jusqu’à 80 % des soins couverts, l’accompagnement Diaspo Care et un paiement mensuel dès 30 €.",
  },
  hero: {
    kicker: "Diaspo Support · by Activa",
    title: { lead: "Depuis l’étranger, protégez la santé des", accent: "vôtres" },
    lead: "Lorsque la maladie ou un accident survient, ce sont vos proches restés au pays qui en subissent les conséquences les plus lourdes. Diaspo Silver, Gold et Premium vous permettent de prendre les devants : un accès structuré aux soins, des garanties adaptées et un accompagnement dédié.",
    cta: "Voir les formules",
    secondaryCta: "Parler à un conseiller",
    imageAlt: "Une famille prise en charge par SOSAN au Cameroun",
    badgeNum: "0–69 ans",
    badgeLabel: "bénéficiaires éligibles",
  },
  trustbar: {
    label:
      "Assurance portée par Activa, en partenariat avec les institutions de santé de référence",
    ariaLabel: "Partenaire assurance",
    logoAlt: "Partenaire de SOSAN Diaspo Support",
  },
  covered: {
    title: "Des couvertures adaptées à chaque situation",
    lead: "Une protection médicale au Cameroun et à l’international, pensée pour les réalités sanitaires et économiques de vos proches. Les prestations prises en compte incluent notamment :",
    items: [
      "Consultations et examens médicaux",
      "Prescriptions pharmaceutiques",
      "Séjours hospitaliers",
      "Suivi de grossesse et accouchement",
      "Soins dentaires et visuels",
      "Actions de prévention",
      "Transport médicalisé en cas d’urgence",
    ],
  },
  plans: {
    title: "Trois formules, une même exigence",
    lead: "Choisissez le niveau de protection qui correspond aux besoins de vos proches. Prix indiqués pour un adulte, par mois.",
    items: [
      {
        key: "silver",
        name: "Diaspo Silver",
        price: "30 €",
        perMonth: "/ mois",
        lead: "L’essentiel — soins courants",
        desc: "Couvre 80 % des dépenses médicales courantes dans un réseau sélectionné d’hôpitaux publics et confessionnels. La base pour un accès aux soins maîtrisé.",
        cta: "Choisir Silver",
      },
      {
        key: "gold",
        name: "Diaspo Gold",
        price: "50 €",
        perMonth: "/ mois",
        tag: "LE PLUS CHOISI",
        lead: "Plafonds relevés, réseau élargi",
        desc: "La couverture de Silver, avec des plafonds plus élevés et l’accès aux structures publiques et privées reconnues du Cameroun. Le meilleur équilibre.",
        featured: true,
        cta: "Choisir Gold",
      },
      {
        key: "premium",
        name: "Diaspo Premium",
        price: "100 €",
        perMonth: "/ mois",
        lead: "Couverture maximale + urgences",
        desc: "Les plafonds les plus élevés sur tout le réseau public et privé, plus des services ambulanciers à Yaoundé et Douala.",
        highlight:
          "Inclut l’option Diaspo Support Plus : évacuation sanitaire d’urgence (EVASAN) vers l’étranger.",
        cta: "Choisir Premium",
      },
    ],
  },
  pricing: {
    title: "Formules et coûts",
    lead: "Tarifs mensuels standards, par bénéficiaire et selon le profil.",
    profileHeader: "Profil du bénéficiaire",
    rows: [
      { profile: "Adulte", note: "21–60 ans", silver: "30 €", gold: "50 €", premium: "100 €" },
      { profile: "Enfant", note: "moins de 21 ans", silver: "25 €", gold: "35 €", premium: "60 €" },
      { profile: "Senior", note: "60–69 ans", silver: "+25 %", gold: "+25 %", premium: "+25 %" },
    ],
    footnote:
      "Le tarif senior correspond à une majoration de 25 % appliquée à la formule choisie.",
  },
  care: {
    kicker: "Diaspo Care",
    title: "Un accompagnement au quotidien",
    lead: "Bien plus qu’une assurance : un dispositif humain et digital pour que vos proches ne soient jamais seuls face aux démarches de santé.",
    items: [
      {
        title: "Soutien personnalisé",
        desc: "Une équipe dédiée, joignable du lundi au vendredi de 8h30 à 17h, par téléphone et sur WhatsApp.",
      },
      {
        title: "Contenus santé numériques",
        desc: "Une bibliothèque de recommandations pratiques et de supports vidéo partagés par des experts médicaux.",
      },
      {
        title: "Souplesse de règlement",
        desc: "Un paiement échelonné sur une base mensuelle, pour une gestion budgétaire sereine et durable.",
      },
      {
        title: "Réseau médical partenaire",
        desc: "Un large réseau de cliniques, pharmacies et laboratoires sélectionnés pour leur fiabilité et leur expertise.",
      },
    ],
  },
  subscribe: {
    kicker: "Souscrire",
    title: "En quelques étapes, depuis l’application",
    steps: [
      "Installez l’application SOSAN",
      "Accédez à l’espace « Assurance »",
      "Choisissez le programme souhaité",
      "Saisissez et validez vos informations",
      "Un conseiller vous rappelle sous 72h",
    ],
    storesLead: "Téléchargez l’application pour commencer",
    callTitle: "Ou par téléphone",
    callLead: "Nos équipes vous accompagnent dans votre adhésion.",
  },
  beyond: {
    title: "Au-delà de l’assurance",
    lead: "Des solutions complémentaires pour les situations qui sortent du cadre d’une couverture classique.",
    items: [
      {
        tag: "Service complémentaire",
        title: "Diaspo Protégée",
        desc: "Une prise en charge rapide de soins hors assurance, pour des proches nécessitant un suivi particulier ou ne pouvant être assurés.",
      },
      {
        tag: "Service complémentaire",
        title: "Diaspo One Touch",
        desc: "Le règlement immédiat des dépenses médicales en Afrique, où que vous soyez dans le monde.",
      },
    ],
  },
  terms: {
    title: "Bon à savoir",
    items: [
      "Les montants correspondent aux tarifs standards ; une réévaluation peut intervenir si une pathologie antérieure est identifiée lors du bilan médical préalable.",
      "Les contrats sont conclus pour une durée initiale de 12 mois, reconduits automatiquement.",
      "L’assureur se réserve la possibilité de refuser une adhésion si l’état de santé constaté présente un risque majeur.",
      "Les garanties deviennent effectives après un délai d’attente de 21 jours, à compter du premier règlement et de la réception du dossier complet (questionnaire médical, pièce d’identité, photographies).",
      "Programmes ouverts aux bénéficiaires âgés de 0 à 69 ans, sous réserve des conditions d’adhésion.",
    ],
  },
  // NOTE: Illustrative testimonial — replace with a real, attributed quote (with consent).
  testimonial: {
    quote:
      "« Ma mère est à Douala, moi à Lyon. Avec Diaspo Gold, ses consultations et ses médicaments sont couverts et je suis remboursée sans mauvaise surprise. Je dors mieux. »",
    name: "Sandrine Nkolo",
    role: "Diaspora · Lyon",
  },
  final: {
    title: "Prêt à protéger vos proches ?",
    lead: "Souscrivez depuis l’application SOSAN ou échangez avec un conseiller. La couverture démarre après un délai de 21 jours.",
    cta: "Parler à un conseiller",
    secondaryCta: "Nous écrire",
  },
};
