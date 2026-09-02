/**
 * Privacy policy text for /privacy-policy/, kept as plain strings rather than
 * JSX so the clauses can be edited without tripping over JSX entity escaping.
 */
import type { LegalDocument } from "../../LegalDoc";

export const doc: LegalDocument = {
  title: "Politique de confidentialité",
  intro:
    "Comment SOSAN collecte, utilise, stocke et partage vos données personnelles et de santé lorsque vous utilisez notre application de téléconsultation médicale.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "p",
          text: "Bienvenue sur l’application SOSAN. Nous accordons une importance primordiale à la protection de votre vie privée et de vos informations personnelles. Cette politique de confidentialité a pour but de vous informer de manière transparente sur la collecte, l’utilisation, le stockage et le partage de vos données personnelles lorsque vous utilisez notre application de téléconsultation médicale.",
        },
      ],
    },
    {
      id: "collecte",
      heading: "Collecte des Données",
      blocks: [
        {
          kind: "p",
          text: "Nous collectons uniquement les données nécessaires à la fourniture de nos services. Ces données incluent :",
        },
        {
          kind: "ul",
          items: [
            "Informations personnelles : nom, adresse e-mail, numéro de téléphone, date de naissance, sexe, groupe sanguin, poids, taille, adresse, profession et statut matrimonial.",
            "Données médicales : antécédents médicaux, symptômes actuels, diagnostics, prescriptions, informations relatives aux consultations effectuées via l’application.",
            "Données de connexion : adresse IP, type d’appareil et de navigateur, journaux d’activité, temps de connexion.",
          ],
        },
      ],
    },
    {
      id: "utilisation",
      heading: "Utilisation des Données",
      blocks: [
        {
          kind: "p",
          text: "Vos données sont collectées et utilisées exclusivement pour :",
        },
        {
          kind: "ul",
          items: [
            "Fournir et améliorer les services de téléconsultation médicale.",
            "Garantir un service sécurisé et performant.",
            "Communiquer avec vous concernant les mises à jour, les offres promotionnelles et les enquêtes de satisfaction (avec votre consentement préalable).",
            "Répondre aux obligations légales et réglementaires.",
          ],
        },
      ],
    },
    {
      id: "partage",
      heading: "Partage des Données",
      blocks: [
        {
          kind: "p",
          text: "Vos données peuvent être partagées uniquement dans les cas suivants :",
        },
        {
          kind: "ul",
          items: [
            "Avec les professionnels de santé partenaires pour la réalisation des consultations.",
            "Avec des prestataires de services techniques assurant le bon fonctionnement de l’application et le traitement des données.",
            "Avec les autorités compétentes en cas d’obligation légale ou pour protéger nos droits.",
          ],
        },
      ],
    },
    {
      id: "securite",
      heading: "Sécurité des Données",
      blocks: [
        {
          kind: "p",
          text: "Nous appliquons des mesures de sécurité rigoureuses pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. Ces mesures incluent :",
        },
        {
          kind: "ul",
          items: [
            "Le chiffrement des données.",
            "L’utilisation de pare-feu et de systèmes de détection d’intrusion.",
            "Un contrôle d’accès strict aux informations personnelles.",
          ],
        },
      ],
    },
    {
      id: "vos-droits",
      heading: "Vos Droits",
      blocks: [
        {
          kind: "p",
          text: "Conformément aux réglementations en vigueur, vous disposez des droits suivants :",
        },
        {
          kind: "ul",
          items: [
            "Accéder à vos données personnelles.",
            "Rectifier vos informations si elles sont inexactes.",
            "Demander la suppression de vos données (dans les limites légales).",
            "Limiter ou vous opposer au traitement de vos données.",
            "Recevoir une copie de vos données sous un format exploitable.",
          ],
        },
        {
          kind: "p",
          text: "Vous pouvez exercer ces droits en nous contactant à contact@sosanmed.com.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "Utilisation des Cookies",
      blocks: [
        {
          kind: "p",
          text: "Nous utilisons des cookies et des technologies similaires pour :",
        },
        {
          kind: "ul",
          items: [
            "Améliorer l’expérience utilisateur.",
            "Analyser l’utilisation de l’application.",
            "Personnaliser les services et contenus proposés.",
          ],
        },
        { kind: "p", text: "Les types de cookies utilisés comprennent :" },
        {
          kind: "ul",
          items: [
            "Cookies essentiels : indispensables au bon fonctionnement de l’application.",
            "Cookies analytiques : pour comprendre et améliorer l’utilisation de l’application.",
            "Cookies fonctionnels : pour enregistrer vos préférences et personnaliser votre expérience.",
          ],
        },
        {
          kind: "p",
          text: "Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre appareil.",
        },
      ],
    },
    {
      id: "consentement",
      heading: "Consentement",
      blocks: [
        {
          kind: "p",
          text: "En utilisant notre application, vous consentez à la collecte, l’utilisation et le partage de vos données conformément à cette politique de confidentialité. Vous avez la possibilité de retirer votre consentement à tout moment.",
        },
      ],
    },
    {
      id: "modifications",
      heading: "Modifications de la Politique de Confidentialité",
      blocks: [
        {
          kind: "p",
          text: "Nous nous réservons le droit de modifier cette politique de confidentialité afin de nous conformer à l’évolution des réglementations et de nos services. Toute modification majeure fera l’objet d’une notification via l’application et/ou par e-mail.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          kind: "p",
          text: "Pour toute question ou demande concernant cette politique de confidentialité, vous pouvez nous contacter :",
        },
        { kind: "p", text: "E-mail : contact@sosanmed.com" },
        {
          kind: "p",
          text: "Nous vous remercions de votre confiance et de votre engagement à utiliser les services de SOSAN.",
        },
      ],
    },
  ],
};
