/**
 * Account-deletion guide for /account-deletion/. Google Play and the App Store
 * both require a publicly reachable URL describing how users delete an account.
 *
 * Two guides in one document: patients delete directly, while doctor and
 * hospital accounts must first suspend their services for seven days — hence
 * the `part` split and the per-part step numbering.
 */
import type { LegalDocument } from "../../LegalDoc";

export const doc: LegalDocument = {
  title: "Guide pour la suppression d’un compte sur l’application SOSAN",
  intro:
    "Comment supprimer votre compte SOSAN depuis l’application, étape par étape. Les comptes médecins et hôpitaux suivent une procédure distincte, avec une suspension préalable de sept jours.",
  sections: [
    {
      id: "utilisateurs-ouvrir",
      part: { title: "GUIDE POUR LES UTILISATEUR" },
      label: "Étape 1",
      heading: "Ouvrir l’application",
      blocks: [
        {
          kind: "p",
          text: "Localisez l’application SOSAN sur votre écran d’accueil ou dans le menu de votre téléphone.",
        },
        {
          kind: "p",
          text: "Appuyez sur l’icône de l’application SOSAN pour l’ouvrir.",
        },
      ],
    },
    {
      id: "utilisateurs-profil",
      label: "Étape 2",
      heading: "Accéder au profil de votre compte",
      blocks: [
        {
          kind: "p",
          text: "Une fois dans l’application, allez dans l’onglet Mon profil, qui se trouve sur la barre de navigation.",
        },
      ],
    },
    {
      id: "utilisateurs-option",
      label: "Étape 3",
      heading: "Trouver l’option de suppression de compte",
      blocks: [
        {
          kind: "p",
          text: "Dans onglet Mon profil, recherchez l’option intitulée Supprimer le compte.",
        },
      ],
    },
    {
      id: "utilisateurs-identite",
      label: "Étape 4",
      heading: "Confirmer votre identité",
      blocks: [
        {
          kind: "p",
          text: "Pour des raisons de sécurité, vous devez confirmer votre identité avant de supprimer votre compte. Cela inclure :",
        },
        {
          kind: "ul",
          items: [
            "Saisir votre mot de passe.",
            "Confirmer votre adresse électronique ou numéro de téléphone.",
          ],
        },
      ],
    },
    {
      id: "utilisateurs-supprimer",
      label: "Étape 5",
      heading: "Supprimer le compte",
      blocks: [
        {
          kind: "p",
          text: "Une fois votre identité confirmée, il sera possible pour vous de Supprimer votre compte.",
        },
        {
          kind: "ul",
          items: [
            "Lisez attentivement les informations fournies concernant la suppression de votre compte.",
            "Il vous sera demandé de fournir une raison pour la suppression de votre compte (votre réponse est facultative)",
            "Si vous êtes sûr de vouloir supprimer votre compte, cliquez sur Confirmer.",
          ],
        },
      ],
    },
    {
      id: "utilisateurs-confirmation",
      label: "Étape 6",
      heading: "Confirmation de la suppression",
      blocks: [
        {
          kind: "p",
          text: "Après avoir confirmé la suppression, vous devriez recevoir un message indiquant que votre compte a été supprimé avec succès.",
        },
        {
          kind: "p",
          text: "Vous pouvez également recevoir un courriel de confirmation.",
        },
      ],
    },
    {
      id: "praticiens-ouvrir",
      part: {
        title: "GUIDE POUR LES MEDECINS ET HÔPITAUX",
        intro:
          "Pour les utilisateurs possédants un compte de type médecin ou hôpital, la suppression de leur compte ne peut se faire directement, car ils doivent dans un premier temps suspendre leurs services pour une durée de sept (07) jours avant d’avoir la possibilité de supprimer définitivement leurs comptes.",
      },
      label: "Étape 1",
      heading: "Ouvrir l’application",
      blocks: [
        {
          kind: "p",
          text: "Localisez l’application SOSAN sur votre écran d’accueil ou dans le menu de votre téléphone.",
        },
        {
          kind: "p",
          text: "Appuyez sur l’icône de l’application SOSAN pour l’ouvrir.",
        },
      ],
    },
    {
      id: "praticiens-profil",
      label: "Étape 2",
      heading: "Accéder au profil de votre compte",
      blocks: [
        {
          kind: "p",
          text: "Une fois dans l’application, allez dans l’onglet Mon profil, qui se trouve sur la barre de navigation.",
        },
      ],
    },
    {
      id: "praticiens-suspendre",
      label: "Étape 3",
      heading: "Trouver l’option suspendre mon compte",
      blocks: [
        {
          kind: "p",
          text: "Dans onglet Mon profil, recherchez l’option intitulée suspendre mon compte.",
        },
      ],
    },
    {
      id: "praticiens-identite",
      label: "Étape 4",
      heading: "Confirmer votre identité",
      blocks: [
        {
          kind: "p",
          text: "Pour des raisons de sécurité, vous devez confirmer votre identité avant de suspendre votre compte. Cela inclure :",
        },
        {
          kind: "ul",
          items: [
            "Saisir votre mot de passe.",
            "Confirmer votre adresse électronique ou numéro de téléphone.",
          ],
        },
      ],
    },
    {
      id: "praticiens-supprimer",
      label: "Étape 5",
      heading: "Supprimer le compte",
      blocks: [
        {
          kind: "p",
          text: "Une fois votre identité confirmée, votre compte sera suspendu pour une période de sept (07) jours.",
        },
        {
          kind: "p",
          text: "Après ce délai de sept jours, il vous sera possible de supprimer votre compte.",
        },
        {
          kind: "ul",
          items: [
            "Lisez attentivement les informations fournies concernant la suppression de votre compte.",
            "Il vous sera demandé de fournir une raison pour la suppression de votre compte (votre réponse est facultative)",
            "Si vous êtes sûr de vouloir supprimer votre compte, cliquez sur Confirmer.",
          ],
        },
      ],
    },
    {
      id: "praticiens-confirmation",
      label: "Étape 6",
      heading: "Confirmation de la suppression",
      blocks: [
        {
          kind: "p",
          text: "Après avoir confirmé la suppression, vous devriez recevoir un message indiquant que votre compte a été supprimé avec succès.",
        },
        {
          kind: "p",
          text: "Vous pouvez également recevoir un courriel de confirmation.",
        },
      ],
    },
  ],
};
