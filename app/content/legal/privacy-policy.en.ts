/**
 * English privacy policy. Section ids and block structure mirror
 * privacy-policy.fr.ts exactly, so anchors work in both locales.
 */
import type { LegalDocument } from "../../LegalDoc";

export const doc: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "How SOSAN collects, uses, stores and shares your personal and health data when you use our telemedicine application.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "p",
          text: "Welcome to the SOSAN application. We treat the protection of your privacy and personal information as a first-order priority. The purpose of this privacy policy is to tell you clearly how your personal data is collected, used, stored and shared when you use our telemedicine application.",
        },
      ],
    },
    {
      id: "collecte",
      heading: "Data We Collect",
      blocks: [
        {
          kind: "p",
          text: "We collect only the data needed to provide our services. That data includes:",
        },
        {
          kind: "ul",
          items: [
            "Personal information: name, email address, telephone number, date of birth, sex, blood group, weight, height, address, occupation and marital status.",
            "Medical data: medical history, current symptoms, diagnoses, prescriptions, and information relating to consultations carried out through the application.",
            "Connection data: IP address, device and browser type, activity logs, connection times.",
          ],
        },
      ],
    },
    {
      id: "utilisation",
      heading: "How We Use Your Data",
      blocks: [
        {
          kind: "p",
          text: "Your data is collected and used exclusively in order to:",
        },
        {
          kind: "ul",
          items: [
            "Provide and improve our telemedicine services.",
            "Guarantee a secure, dependable service.",
            "Contact you about updates, promotional offers and satisfaction surveys (with your prior consent).",
            "Meet our legal and regulatory obligations.",
          ],
        },
      ],
    },
    {
      id: "partage",
      heading: "Sharing Your Data",
      blocks: [
        {
          kind: "p",
          text: "Your data may be shared only in the following cases:",
        },
        {
          kind: "ul",
          items: [
            "With partner healthcare professionals, in order to carry out consultations.",
            "With technical service providers who keep the application running and process data on our behalf.",
            "With the competent authorities, where we are legally obliged to do so or in order to protect our rights.",
          ],
        },
      ],
    },
    {
      id: "securite",
      heading: "Data Security",
      blocks: [
        {
          kind: "p",
          text: "We apply rigorous security measures to protect your data against unauthorised access, loss, alteration or disclosure. These measures include:",
        },
        {
          kind: "ul",
          items: [
            "Encryption of data.",
            "Firewalls and intrusion detection systems.",
            "Strict access control over personal information.",
          ],
        },
      ],
    },
    {
      id: "vos-droits",
      heading: "Your Rights",
      blocks: [
        {
          kind: "p",
          text: "In accordance with applicable regulations, you have the following rights:",
        },
        {
          kind: "ul",
          items: [
            "Access your personal data.",
            "Correct your information where it is inaccurate.",
            "Request deletion of your data (within the limits of the law).",
            "Restrict or object to the processing of your data.",
            "Receive a copy of your data in a usable format.",
          ],
        },
        {
          kind: "p",
          text: "You can exercise these rights by contacting us at contact@sosanmed.com.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "Use of Cookies",
      blocks: [
        {
          kind: "p",
          text: "We use cookies and similar technologies in order to:",
        },
        {
          kind: "ul",
          items: [
            "Improve the user experience.",
            "Analyse how the application is used.",
            "Personalise the services and content offered.",
          ],
        },
        { kind: "p", text: "The types of cookie used are:" },
        {
          kind: "ul",
          items: [
            "Essential cookies: required for the application to work.",
            "Analytics cookies: to understand and improve how the application is used.",
            "Functional cookies: to remember your preferences and personalise your experience.",
          ],
        },
        {
          kind: "p",
          text: "You can manage your cookie preferences through your device settings.",
        },
      ],
    },
    {
      id: "consentement",
      heading: "Consent",
      blocks: [
        {
          kind: "p",
          text: "By using our application, you consent to the collection, use and sharing of your data in accordance with this privacy policy. You may withdraw your consent at any time.",
        },
      ],
    },
    {
      id: "modifications",
      heading: "Changes to This Privacy Policy",
      blocks: [
        {
          kind: "p",
          text: "We reserve the right to amend this privacy policy in order to keep pace with changes in regulation and in our services. Any material change will be notified through the application and/or by email.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          kind: "p",
          text: "For any question or request concerning this privacy policy, you can contact us:",
        },
        { kind: "p", text: "Email: contact@sosanmed.com" },
        {
          kind: "p",
          text: "Thank you for your trust, and for choosing to use SOSAN’s services.",
        },
      ],
    },
  ],
};
