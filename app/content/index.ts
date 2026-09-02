/**
 * Per-locale content registry.
 *
 * Every page reads its copy through `getContent(lang)`. Each `*.en.ts` is typed
 * against the same interface as its `*.fr.ts`, so a missing translation is a
 * `tsc` error rather than a French string rendering on an English page.
 */
import type { Locale } from "../i18n/config";
import { news as newsFr } from "./news.fr";
import { news as newsEn } from "./news.en";
import { home as homeFr } from "./home.fr";
import { home as homeEn } from "./home.en";
import { about as aboutFr } from "./about.fr";
import { about as aboutEn } from "./about.en";
import { services as servicesFr } from "./services.fr";
import { services as servicesEn } from "./services.en";
import { diaspo as diaspoFr } from "./diaspo.fr";
import { diaspo as diaspoEn } from "./diaspo.en";

const content = {
  fr: {
    news: newsFr,
    home: homeFr,
    about: aboutFr,
    services: servicesFr,
    diaspo: diaspoFr,
  },
  en: {
    news: newsEn,
    home: homeEn,
    about: aboutEn,
    services: servicesEn,
    diaspo: diaspoEn,
  },
} as const;

export function getContent(lang: Locale) {
  return content[lang];
}
