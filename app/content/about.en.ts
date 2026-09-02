import type { AboutContent } from "./types";

export const about: AboutContent = {
  meta: {
    title: "About us — SOSAN",
    description:
      "Born of an ambition to improve access to healthcare in Africa, SOSAN brings together telemedicine, transparent payments and diaspora solidarity. Discover our vision, our values and the Diaspo Support plans.",
  },
  hero: {
    kicker: "Health · Social · Professionalism",
    title: { lead: "SOSAN, the health solution", accent: "for everyone" },
    lead: "Born of an ambition to improve how African communities reach healthcare, SOSAN is an app and a health platform that removes barriers to care, improves working conditions for health workers, and makes it easier to share the administrative and financial load of treatment.",
    location: "Douala & Yaoundé, Cameroon",
    diaspora: "Diaspora included",
    galleryAlt: "SOSAN in the field, working with patients",
  },
  vision: {
    title: "Our vision",
    imageAlt: "SOSAN making healthcare accessible across Africa",
    paragraphs: [
      "To make quality care reachable for all African communities facing a fragmented system or heavy, outdated processes — by offering modern, digital alternatives built around how people actually live.",
      "That is why SOSAN has built a set of services that strengthen the chain of solidarity: care paid for by the diaspora on behalf of family at home, or by urban areas on behalf of rural ones. We also make practising easier for doctors, with decent pay and real career paths, while delivering productivity gains for our partner organisations.",
      "Because money is the single biggest barrier, SOSAN works with foundations, associations and donors to channel donations to the people who need them: consultations, medicines, surgery.",
    ],
    note: "SOSAN takes no profit whatsoever on donations, which are passed on for strictly social and civic purposes.",
  },
  values: {
    title: "Our values",
    lead: "Eight convictions that guide every decision, from the first appointment to the final reimbursement.",
    items: [
      { term: "Healthcare for everyone", gloss: "The heart of our mission, with no exceptions." },
      { term: "Solidarity", gloss: "The diaspora and the cities support those furthest from care." },
      { term: "Innovation", gloss: "Digital alternatives built for African realities." },
      { term: "Transparency", gloss: "Clear, traceable payments with no hidden fees." },
      { term: "Professionalism", gloss: "Care and support that meet the standard people deserve." },
      { term: "Ambition", gloss: "Raising access to healthcare for the long term." },
      { term: "Integrity", gloss: "No profit on donations — a social and civic purpose only." },
      { term: "Boldness", gloss: "Daring to reinvent a fragmented system." },
    ],
  },
  diaspoCta: {
    kicker: "Diaspo Support · by Activa",
    title: "Protect your family’s health from abroad",
    lead: "Silver, Gold and Premium: health cover designed for the diaspora, with Diaspo Care support and a monthly payment. From €30/month.",
    cta: "Discover Diaspo Support",
    figures: [
      { num: "0–69", label: "eligible ages" },
      { num: "80%", label: "of care covered" },
      { num: "3", label: "plans to choose from" },
    ],
  },
  contact: {
    title: "Get in touch with SOSAN today",
    lead: "A question about our plans, or support for your family back home? Our team will answer and guide you, step by step.",
    location: "Douala & Yaoundé, Cameroon",
    diaspora: "Diaspora included",
  },
};
