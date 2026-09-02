/**
 * Shape of every page's copy. The French and English modules are both typed
 * against these, so a missing or renamed key fails `tsc` instead of silently
 * rendering the wrong language.
 */

export type Meta = { title: string; description: string };

/**
 * A heading whose second half is wrapped in a <span> for the accent colour.
 * Modelled as two fields because French and English break the phrase at
 * different points — a single string would force a guess at render time.
 */
export type SplitHeading = { lead: string; accent: string };

/** The contact section, shared by the home and about pages. */
export type ContactBlock = {
  title: string;
  lead: string;
  location: string;
  diaspora: string;
};

export type IconCard = { title: string; desc: string };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Key into `testimonialAvatars` in assets.ts — never translated. */
  avatar: string;
};

export type AboutContent = {
  meta: Meta;
  hero: {
    kicker: string;
    title: SplitHeading;
    lead: string;
    location: string;
    diaspora: string;
    galleryAlt: string;
  };
  vision: {
    title: string;
    imageAlt: string;
    paragraphs: string[];
    note: string;
  };
  values: { title: string; lead: string; items: { term: string; gloss: string }[] };
  diaspoCta: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    figures: { num: string; label: string }[];
  };
  contact: ContactBlock;
};

export type HomeContent = {
  hero: {
    badge: string;
    title: SplitHeading;
    lead: string;
    secondaryCta: string;
    trust: string;
    stats: { num: string; label: string }[];
    imageAlt: string;
    ambassadorName: string;
    ambassadorRole: string;
  };
  trustbar: { label: string; ariaLabel: string; logoAlt: string };
  banner: {
    tag: string;
    title: string;
    lead: string;
    features: string[];
    cta: string;
    imageAlt: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    proof: string[];
    cta: string;
    floatTitle: string;
    floatSub: string;
    imageAlt: string;
  };
  services: {
    title: string;
    lead: string;
    featuredTag: string;
    featuredCta: string;
    itemCta: string;
    items: IconCard[];
    moreCta: string;
    moreNote: string;
  };
  plans: {
    kicker: string;
    title: string;
    lead: string;
    moreCta: string;
    moreNote: string;
    /** `key` matches `planPhotos` in assets.ts and is never translated. */
    items: {
      key: string;
      name: string;
      price: string;
      perMonth: string;
      tag?: string;
      summary: string;
      desc: string;
      cta: string;
      featured?: boolean;
    }[];
  };
  why: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    items: IconCard[];
  };
  partners: { title: string; lead: string; logoAlt: string };
  testimonials: { kicker: string; title: SplitHeading; items: Testimonial[] };
  contact: ContactBlock;
};

export type ServicesContent = {
  meta: Meta;
  hero: {
    kicker: string;
    title: SplitHeading;
    lead: string;
    chips: string[];
  };
  /** `screen` keys into `serviceScreens` in assets.ts — never translated. */
  services: {
    title: string;
    desc: string;
    points: string[];
    screen: string;
    tag?: string;
    featured?: boolean;
    /** Locale-independent path; prefixed at render time. */
    href?: string;
  }[];
  why: { kicker: string; title: string; items: IconCard[] };
  steps: { title: string; lead: string; items: IconCard[] };
  pros: {
    kicker: string;
    title: string;
    lead: string;
    items: { role: string; desc: string }[];
  };
  servicesSection: { title: string; lead: string; seePlans: string };
  cta: { title: string; lead: string; button: string };
};

export type DiaspoContent = {
  meta: Meta;
  hero: {
    kicker: string;
    title: SplitHeading;
    lead: string;
    cta: string;
    secondaryCta: string;
    imageAlt: string;
    badgeNum: string;
    badgeLabel: string;
  };
  trustbar: { label: string; ariaLabel: string; logoAlt: string };
  covered: { title: string; lead: string; items: string[] };
  plans: {
    title: string;
    lead: string;
    /** `key` matches `planPhotos` in assets.ts and is never translated. */
    items: {
      key: string;
      name: string;
      price: string;
      perMonth: string;
      tag?: string;
      lead: string;
      desc: string;
      highlight?: string;
      featured?: boolean;
      cta: string;
    }[];
  };
  pricing: {
    title: string;
    lead: string;
    profileHeader: string;
    rows: {
      profile: string;
      note: string;
      silver: string;
      gold: string;
      premium: string;
    }[];
    footnote: string;
  };
  care: { kicker: string; title: string; lead: string; items: IconCard[] };
  subscribe: {
    kicker: string;
    title: string;
    steps: string[];
    storesLead: string;
    callTitle: string;
    callLead: string;
  };
  beyond: {
    title: string;
    lead: string;
    items: { tag: string; title: string; desc: string }[];
  };
  terms: { title: string; items: string[] };
  testimonial: { quote: string; name: string; role: string };
  final: {
    title: string;
    lead: string;
    cta: string;
    secondaryCta: string;
  };
};
