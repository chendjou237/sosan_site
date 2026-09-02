import type { ServicesContent } from "./types";

export const services: ServicesContent = {
  meta: {
    title: "Our services — All your healthcare in one app | SOSAN",
    description:
      "Doctors, hospitals, laboratories, pharmacy, health insurance, savings, donations and family protection — SOSAN brings your whole care journey in Cameroon together, with secure mobile payments and bilingual FR/EN support.",
  },
  hero: {
    kicker: "Our services",
    title: { lead: "All your healthcare,", accent: "in a single app" },
    lead: "Find doctors, book tests, get covered and look after your family — from your phone, wherever you are.",
    chips: [
      "Secure mobile payments",
      "Bilingual FR / EN",
      "Cameroon & diaspora",
    ],
  },
  services: [
    {
      title: "Consultations & appointments",
      desc: "Find the right doctor and book an appointment in a few taps.",
      screen: "consultations",
      featured: true,
      points: [
        "Filter by speciality, location or availability",
        "Standard and VIP appointments, in the slot you choose",
        "Video consultations right inside the app",
        "Real-time messaging with your doctor",
        "Profiles, reviews and ratings before you book",
        "A full history of your appointments",
      ],
    },
    {
      title: "Hospitals & laboratories",
      desc: "Reach trusted facilities close to where you are.",
      screen: "hopitaux-labos",
      points: [
        "Hospitals and labs on a map, with contact details",
        "Book tests and medical analyses",
        "Specialist consultations at partner facilities",
        "Leave a review after your visit",
      ],
    },
    {
      title: "Pharmacy",
      tag: "Coming soon",
      desc: "Order your medicines without leaving home.",
      screen: "pharmacie",
      points: [
        "Search for a medicine and see local availability",
        "Order with prescription validation",
        "Track the status of your orders",
      ],
    },
    {
      title: "Health insurance",
      desc: "Protect yourself and your family with cover that fits.",
      screen: "assurance",
      featured: true,
      href: "/diaspo/",
      points: [
        "Diaspo / Activa insurance in a few taps",
        "Cover yourself and your whole family",
        "Guided digital sign-up: questionnaire, contract, e-signature",
        "Track your policy and file claims in the app",
      ],
    },
    {
      title: "NGO donations & health projects",
      desc: "Support health causes that matter.",
      screen: "dons",
      points: [
        "Browse verified NGOs and their projects",
        "Give securely and follow the progress",
      ],
    },
    {
      title: "Family protection",
      desc: "Look after the people who count on you.",
      screen: "protection-famille",
      points: [
        "Add your relatives as beneficiaries",
        "Choose who receives the bills and pays for a plan",
      ],
    },
    {
      title: "SOSAN health savings",
      desc: "Set money aside for your health expenses.",
      screen: "epargne",
      points: [
        "A dedicated space to plan ahead and cover medical costs",
      ],
    },
    {
      title: "Medical profile & records",
      desc: "Your health data, always with you.",
      screen: "profil-medical",
      points: [
        "A medical profile your doctor can see during consultations",
        "Store and retrieve your medical documents",
        "View, download or renew your prescriptions",
      ],
    },
    {
      title: "AI health assistant",
      desc: "A chatbot to guide you and answer your questions, any time.",
      screen: "assistant-ia",
      points: [],
    },
    {
      title: "Community & health tips",
      desc: "Articles and health advice to keep you informed and engaged.",
      screen: "communaute",
      points: [],
    },
  ],
  servicesSection: {
    title: "A complete care journey",
    lead:
      "Ten services brought together in one app, designed to simplify every step — from the consultation to the cover.",
    seePlans: "See the plans",
  },
  why: {
    kicker: "Why SOSAN",
    title: "Healthcare without friction or distance",
    items: [
      {
        title: "Secure payments",
        desc: "Orange Money, MTN Mobile Money, E-nkap and bank cards.",
      },
      {
        title: "Bilingual FR / EN",
        desc: "The full experience in both French and English.",
      },
      {
        title: "Location-aware",
        desc: "Providers and services near you, shown on a map.",
      },
      {
        title: "All-in-one",
        desc: "Doctors, hospitals, labs, pharmacies, insurance, savings & donations.",
      },
      {
        title: "Built for the diaspora",
        desc: "Manage care for your family back home.",
      },
    ],
  },
  steps: {
    title: "How it works",
    lead: "Four steps, from the first appointment to ongoing care.",
    items: [
      {
        title: "Find",
        desc: "Search for doctors, hospitals, laboratories or plans near you.",
      },
      {
        title: "Book or subscribe",
        desc: "Choose a time slot or a plan in a few taps.",
      },
      {
        title: "Pay securely",
        desc: "Orange Money, MTN Mobile Money, E-nkap or bank card.",
      },
      {
        title: "Get care",
        desc: "Consult, get tested, get covered and stay followed up.",
      },
    ],
  },
  pros: {
    kicker: "Healthcare professionals",
    title: "A complete platform for providers",
    lead: "Doctors, facilities, pharmacies, insurers and NGOs: SOSAN connects you to patients and equips your day-to-day practice.",
    items: [
      {
        role: "Doctors",
        desc: "Calendar, appointments, video consultations, patient messaging and revenue tracking.",
      },
      {
        role: "Hospitals & laboratories",
        desc: "Teams, specialists, services and tests; dashboards and revenue.",
      },
      {
        role: "Pharmacies",
        desc: "Medicine catalogue, campaigns, order management and revenue.",
      },
      {
        role: "Insurers",
        desc: "Publish offers, manage sign-ups and subscribers, track policies.",
      },
      {
        role: "NGOs",
        desc: "Create projects, receive donations and track transactions.",
      },
    ],
  },
  cta: {
    title: "Take charge of your health",
    lead: "Download SOSAN and find doctors, hospitals, insurance and follow-up — brought together in a single app.",
    button: "Got a question? Talk to our team",
  },
};
