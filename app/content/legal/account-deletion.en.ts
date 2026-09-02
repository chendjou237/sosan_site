/**
 * English account-deletion guide. Section ids, part structure and step labels
 * mirror account-deletion.fr.ts.
 *
 * Note: the French source contains several typos ("GUIDE POUR LES UTILISATEUR",
 * "Cela inclure", "Dans onglet", "possédants") which were preserved verbatim
 * there at the author's request. The English below is written correctly, so the
 * two locales read slightly differently until the French is corrected.
 */
import type { LegalDocument } from "../../LegalDoc";

export const doc: LegalDocument = {
  title: "How to delete your SOSAN account",
  intro:
    "How to delete your SOSAN account from within the app, step by step. Doctor and hospital accounts follow a separate procedure, with a seven-day suspension first.",
  sections: [
    {
      id: "utilisateurs-ouvrir",
      part: { title: "GUIDE FOR PATIENTS" },
      label: "Step 1",
      heading: "Open the app",
      blocks: [
        {
          kind: "p",
          text: "Find the SOSAN app on your home screen or in your phone’s app menu.",
        },
        { kind: "p", text: "Tap the SOSAN icon to open it." },
      ],
    },
    {
      id: "utilisateurs-profil",
      label: "Step 2",
      heading: "Go to your account profile",
      blocks: [
        {
          kind: "p",
          text: "Once in the app, go to the My profile tab in the navigation bar.",
        },
      ],
    },
    {
      id: "utilisateurs-option",
      label: "Step 3",
      heading: "Find the account deletion option",
      blocks: [
        {
          kind: "p",
          text: "In the My profile tab, look for the option labelled Delete account.",
        },
      ],
    },
    {
      id: "utilisateurs-identite",
      label: "Step 4",
      heading: "Confirm your identity",
      blocks: [
        {
          kind: "p",
          text: "For security reasons, you must confirm your identity before deleting your account. This involves:",
        },
        {
          kind: "ul",
          items: [
            "Entering your password.",
            "Confirming your email address or phone number.",
          ],
        },
      ],
    },
    {
      id: "utilisateurs-supprimer",
      label: "Step 5",
      heading: "Delete the account",
      blocks: [
        {
          kind: "p",
          text: "Once your identity is confirmed, you will be able to delete your account.",
        },
        {
          kind: "ul",
          items: [
            "Read carefully the information shown about deleting your account.",
            "You will be asked to give a reason for the deletion (answering is optional).",
            "If you are sure you want to delete your account, tap Confirm.",
          ],
        },
      ],
    },
    {
      id: "utilisateurs-confirmation",
      label: "Step 6",
      heading: "Deletion confirmation",
      blocks: [
        {
          kind: "p",
          text: "After confirming, you should see a message telling you your account has been successfully deleted.",
        },
        { kind: "p", text: "You may also receive a confirmation email." },
      ],
    },
    {
      id: "praticiens-ouvrir",
      part: {
        title: "GUIDE FOR DOCTORS AND HOSPITALS",
        intro:
          "Users with a doctor or hospital account cannot delete their account directly: they must first suspend their services for seven (07) days before being able to delete their account permanently.",
      },
      label: "Step 1",
      heading: "Open the app",
      blocks: [
        {
          kind: "p",
          text: "Find the SOSAN app on your home screen or in your phone’s app menu.",
        },
        { kind: "p", text: "Tap the SOSAN icon to open it." },
      ],
    },
    {
      id: "praticiens-profil",
      label: "Step 2",
      heading: "Go to your account profile",
      blocks: [
        {
          kind: "p",
          text: "Once in the app, go to the My profile tab in the navigation bar.",
        },
      ],
    },
    {
      id: "praticiens-suspendre",
      label: "Step 3",
      heading: "Find the suspend my account option",
      blocks: [
        {
          kind: "p",
          text: "In the My profile tab, look for the option labelled Suspend my account.",
        },
      ],
    },
    {
      id: "praticiens-identite",
      label: "Step 4",
      heading: "Confirm your identity",
      blocks: [
        {
          kind: "p",
          text: "For security reasons, you must confirm your identity before suspending your account. This involves:",
        },
        {
          kind: "ul",
          items: [
            "Entering your password.",
            "Confirming your email address or phone number.",
          ],
        },
      ],
    },
    {
      id: "praticiens-supprimer",
      label: "Step 5",
      heading: "Delete the account",
      blocks: [
        {
          kind: "p",
          text: "Once your identity is confirmed, your account will be suspended for a period of seven (07) days.",
        },
        {
          kind: "p",
          text: "After those seven days, you will be able to delete your account.",
        },
        {
          kind: "ul",
          items: [
            "Read carefully the information shown about deleting your account.",
            "You will be asked to give a reason for the deletion (answering is optional).",
            "If you are sure you want to delete your account, tap Confirm.",
          ],
        },
      ],
    },
    {
      id: "praticiens-confirmation",
      label: "Step 6",
      heading: "Deletion confirmation",
      blocks: [
        {
          kind: "p",
          text: "After confirming, you should see a message telling you your account has been successfully deleted.",
        },
        { kind: "p", text: "You may also receive a confirmation email." },
      ],
    },
  ],
};
