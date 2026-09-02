import type { DiaspoContent } from "./types";

export const diaspo: DiaspoContent = {
  meta: {
    title: "Diaspo Support — Health insurance for your family | SOSAN",
    description:
      "Diaspo Support by Activa: Silver, Gold and Premium. From abroad, insure your family’s health in Cameroon with up to 80% of care covered, Diaspo Care support and monthly payments from €30.",
  },
  hero: {
    kicker: "Diaspo Support · by Activa",
    title: { lead: "From abroad, protect the health of", accent: "your family" },
    lead: "When illness or an accident strikes, it is your family back home who bear the heaviest consequences. Diaspo Silver, Gold and Premium let you get ahead of it: structured access to care, cover that fits, and dedicated support.",
    cta: "See the plans",
    secondaryCta: "Speak to an adviser",
    imageAlt: "A family being cared for by SOSAN in Cameroon",
    badgeNum: "Ages 0–69",
    badgeLabel: "eligible beneficiaries",
  },
  trustbar: {
    label:
      "Insurance underwritten by Activa, in partnership with leading health institutions",
    ariaLabel: "Insurance partner",
    logoAlt: "SOSAN Diaspo Support partner",
  },
  covered: {
    title: "Cover that fits every situation",
    lead: "Medical protection in Cameroon and internationally, built around the health and economic realities your family actually faces. Covered services include:",
    items: [
      "Consultations and medical tests",
      "Pharmaceutical prescriptions",
      "Hospital stays",
      "Pregnancy care and childbirth",
      "Dental and optical care",
      "Preventive care",
      "Medical transport in an emergency",
    ],
  },
  plans: {
    title: "Three plans, one standard",
    lead: "Choose the level of protection that matches what your family needs. Prices shown are per adult, per month.",
    items: [
      {
        key: "silver",
        name: "Diaspo Silver",
        price: "€30",
        perMonth: "/ month",
        lead: "The essentials — everyday care",
        desc: "Covers 80% of everyday medical costs across a selected network of public and faith-based hospitals. The foundation for predictable access to care.",
        cta: "Choose Silver",
      },
      {
        key: "gold",
        name: "Diaspo Gold",
        price: "€50",
        perMonth: "/ month",
        tag: "MOST CHOSEN",
        lead: "Higher limits, wider network",
        desc: "Everything in Silver, with higher limits and access to Cameroon’s recognised public and private facilities. The best balance.",
        featured: true,
        cta: "Choose Gold",
      },
      {
        key: "premium",
        name: "Diaspo Premium",
        price: "€100",
        perMonth: "/ month",
        lead: "Maximum cover + emergencies",
        desc: "The highest limits across the entire public and private network, plus ambulance services in Yaoundé and Douala.",
        highlight:
          "Includes the Diaspo Support Plus option: emergency medical evacuation (EVASAN) abroad.",
        cta: "Choose Premium",
      },
    ],
  },
  pricing: {
    title: "Plans and pricing",
    lead: "Standard monthly rates, per beneficiary and by profile.",
    profileHeader: "Beneficiary profile",
    rows: [
      { profile: "Adult", note: "ages 21–60", silver: "€30", gold: "€50", premium: "€100" },
      { profile: "Child", note: "under 21", silver: "€25", gold: "€35", premium: "€60" },
      { profile: "Senior", note: "ages 60–69", silver: "+25%", gold: "+25%", premium: "+25%" },
    ],
    footnote:
      "The senior rate is a 25% surcharge applied to the plan you choose.",
  },
  care: {
    kicker: "Diaspo Care",
    title: "Support, day to day",
    lead: "Far more than insurance: a human and digital service so your family never face the healthcare system alone.",
    items: [
      {
        title: "Personal support",
        desc: "A dedicated team, reachable Monday to Friday from 8.30am to 5pm, by phone and on WhatsApp.",
      },
      {
        title: "Digital health content",
        desc: "A library of practical guidance and video material shared by medical experts.",
      },
      {
        title: "Flexible payment",
        desc: "Spread payments on a monthly basis, for budgeting that stays manageable over time.",
      },
      {
        title: "Partner medical network",
        desc: "A broad network of clinics, pharmacies and laboratories chosen for their reliability and expertise.",
      },
    ],
  },
  subscribe: {
    kicker: "Sign up",
    title: "A few steps, right from the app",
    steps: [
      "Install the SOSAN app",
      "Go to the “Insurance” section",
      "Choose the programme you want",
      "Enter and confirm your details",
      "An adviser calls you back within 72h",
    ],
    storesLead: "Download the app to get started",
    callTitle: "Or by phone",
    callLead: "Our teams will guide you through signing up.",
  },
  beyond: {
    title: "Beyond insurance",
    lead: "Complementary solutions for situations that fall outside standard cover.",
    items: [
      {
        tag: "Complementary service",
        title: "Diaspo Protégée",
        desc: "Fast coverage of care outside insurance, for relatives who need particular follow-up or who cannot be insured.",
      },
      {
        tag: "Complementary service",
        title: "Diaspo One Touch",
        desc: "Immediate settlement of medical costs in Africa, from anywhere in the world.",
      },
    ],
  },
  terms: {
    title: "Good to know",
    items: [
      "The amounts shown are standard rates; they may be reassessed if a pre-existing condition is identified during the prior medical review.",
      "Contracts run for an initial term of 12 months and renew automatically.",
      "The insurer reserves the right to decline an application where the health status established presents a major risk.",
      "Cover takes effect after a 21-day waiting period, counted from the first payment and receipt of the complete file (medical questionnaire, identity document, photographs).",
      "Programmes are open to beneficiaries aged 0 to 69, subject to the conditions of membership.",
    ],
  },
  // NOTE: Illustrative testimonial — replace with a real, attributed quote (with consent).
  testimonial: {
    quote:
      "“My mother is in Douala and I’m in Lyon. With Diaspo Gold her consultations and medicines are covered, and I get reimbursed with no nasty surprises. I sleep better.”",
    name: "Sandrine Nkolo",
    role: "Diaspora · Lyon",
  },
  final: {
    title: "Ready to protect your family?",
    lead: "Sign up from the SOSAN app or talk it through with an adviser. Cover begins after a 21-day waiting period.",
    cta: "Speak to an adviser",
    secondaryCta: "Write to us",
  },
};
