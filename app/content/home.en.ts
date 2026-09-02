import type { HomeContent } from "./types";

export const home: HomeContent = {
  hero: {
    badge: "Reliable, fast & affordable healthcare",
    title: { lead: "Healthcare you can trust,", accent: "wherever you are." },
    lead: "See doctors, pay with full transparency and protect your family in Cameroon — at home or from the diaspora, all in a single app.",
    secondaryCta: "Explore the Diaspo plans",
    trust:
      "Already on the App Store & Google Play · in partnership with the Ministry of Health",
    stats: [
      { num: "24/7", label: "Online consultations" },
      { num: "80%", label: "of care covered" },
      { num: "0", label: "hidden fees" },
    ],
    imageAlt: "Prof. Jean Bahebeck, SOSAN ambassador",
    ambassadorName: "Prof. Jean Bahebeck",
    ambassadorRole: "SOSAN Ambassador",
  },
  trustbar: {
    label: "In partnership with leading health institutions",
    ariaLabel: "Partner institutions",
    logoAlt: "SOSAN partner institution",
  },
  banner: {
    tag: "NEW",
    title: "Chat with the SOSAN AI assistant on WhatsApp",
    lead: "Ask your questions, book appointments and track your reimbursements right inside WhatsApp, 24/7.",
    features: ["Telemedicine", "Medical tests", "Health cover"],
    cta: "Chat on WhatsApp",
    imageAlt: "SOSAN AI assistant on WhatsApp",
  },
  about: {
    kicker: "ABOUT US",
    title: "SOSAN makes healthcare easier to reach",
    paragraphs: [
      "Born of an ambition to improve how African communities reach healthcare, SOSAN is an app and a health platform that removes the barriers to care across Africa.",
      "We improve working conditions for health workers and make it easier to share the administrative and financial load of treatment.",
    ],
    proof: [
      "Telemedicine & appointments, 24/7",
      "Traceable payments, zero hidden fees",
      "In Cameroon and for the diaspora",
    ],
    cta: "Find out more",
    floatTitle: "Online consultations",
    floatSub: "Available 24/7",
    imageAlt: "The SOSAN app",
  },
  services: {
    title: "Our Services",
    lead: "A range of services designed to make care simpler, faster and easier to reach.",
    featuredTag: "Most used",
    featuredCta: "Get the app",
    itemCta: "Download",
    items: [
      {
        title: "Telemedicine & appointments",
        desc: "Consult experienced GPs and specialists remotely or in person, 24/7.",
      },
      {
        title: "Secure, transparent payment",
        desc: "No more overcharging or hidden fees. Secure, traceable payments (B2B & B2C).",
      },
      {
        title: "Personal support",
        desc: "A dedicated team guides you through the process and helps fund the hardest cases.",
      },
      {
        title: "Health mutual",
        desc: "Affordable, transparent insurance policies. The diaspora can subscribe on behalf of family.",
      },
    ],
    moreCta: "Explore all our services",
    moreNote: "Ten services brought together in one app",
  },
  plans: {
    kicker: "DIASPO SUPPORT",
    title: "Insure your family’s health",
    lead: "Silver, Gold and Premium: health cover that fits, with dedicated SOSAN support right across Cameroon.",
    moreCta: "Discover Diaspo Support",
    moreNote: "Adult rate, per month · child & senior profiles available",
    items: [
      {
        key: "silver",
        name: "Diaspo Silver",
        price: "€30",
        perMonth: "/ month",
        summary: "80% cover on everyday care",
        desc: "A focused answer to fundamental health needs, through a selected network of public and faith-based facilities.",
        cta: "Choose Silver",
      },
      {
        key: "gold",
        name: "Diaspo Gold",
        price: "€50",
        perMonth: "/ month",
        tag: "POPULAR",
        summary: "80% with higher limits",
        desc: "More therapeutic latitude and easier access to a wide network of leading public and private hospitals in Cameroon.",
        cta: "Choose Gold",
        featured: true,
      },
      {
        key: "premium",
        name: "Diaspo Premium",
        price: "€100",
        perMonth: "/ month",
        summary: "Complete health security",
        desc: "The full network, medical ambulances (Yaoundé & Douala) and coordination of medical evacuation (EVASAN) abroad.",
        cta: "Choose Premium",
      },
    ],
  },
  why: {
    kicker: "WHY JOIN US",
    title: "Grow your practice with SOSAN",
    lead: "Becoming a partner puts you on a platform that connects you with patients and showcases your expertise.",
    cta: "Join us",
    items: [
      {
        title: "Build your reputation",
        desc: "With thousands of patients already on our platform, in full confidence.",
      },
      {
        title: "Widen your reach",
        desc: "Gain visibility nationally and beyond the country’s borders.",
      },
      {
        title: "Grow your revenue",
        desc: "Increase your turnover through a steady flow of patients.",
      },
      {
        title: "International standing",
        desc: "Become known abroad on the strength of the care you provide.",
      },
    ],
  },
  partners: {
    title: "Our Partners",
    lead: "They already trust us!",
    logoAlt: "SOSAN partner",
  },
  // NOTE: Illustrative testimonials — replace with real, attributed quotes
  // (with consent) before wider launch.
  testimonials: {
    kicker: "REVIEWS & FEEDBACK",
    title: { lead: "What our", accent: "clients say" },
    items: [
      {
        quote:
          "“From Paris, I was able to arrange and pay for my mother’s consultations in Douala with complete transparency. I can see exactly where every franc goes — it’s a real relief.”",
        name: "Emmanuel Fotso",
        role: "Diaspora · Paris",
        avatar: "emmanuel-fotso",
      },
      {
        quote:
          "“I saw a GP from home, without queuing or travelling. The doctor took the time to explain everything. Simple, quick and reassuring.”",
        name: "Aïcha Mbarga",
        role: "Patient in Yaoundé",
        avatar: "aicha-mbarga",
      },
      {
        quote:
          "“No more surprise charges: prices are clear before every procedure and the team supported me at each step. I recommend it to my family without hesitation.”",
        name: "Hervé Etoundi",
        role: "Patient in Douala",
        avatar: "herve-etoundi",
      },
    ],
  },
  contact: {
    title: "Get in touch with SOSAN today",
    lead: "Book a call with our team and get personal support tailored to what you need.",
    location: "Douala & Yaoundé, Cameroon",
    diaspora: "Diaspora included",
  },
};
