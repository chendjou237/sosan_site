import LegalDoc from "../../LegalDoc";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";
import { doc as fr } from "../../content/legal/privacy-policy.fr";
import { doc as en } from "../../content/legal/privacy-policy.en";

const docs = { fr, en };

const meta: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Politique de confidentialité — SOSAN",
    description:
      "Politique de confidentialité de SOSAN : quelles données personnelles et de santé sont collectées, comment elles sont utilisées, partagées et sécurisées, et quels sont vos droits.",
  },
  en: {
    title: "Privacy Policy — SOSAN",
    description:
      "SOSAN’s privacy policy: what personal and health data we collect, how it is used, shared and secured, and what your rights are.",
  },
};

export const generateStaticParams = localeParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return pageMetadata({ lang, path: "/privacy-policy/", ...meta[lang] });
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return <LegalDoc doc={docs[lang]} lang={lang} />;
}
