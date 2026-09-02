import LegalDoc from "../../LegalDoc";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";
import { doc as fr } from "../../content/legal/terms.fr";
import { doc as en } from "../../content/legal/terms.en";

const docs = { fr, en };

const meta: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Termes et conditions d’utilisation — SOSAN",
    description:
      "Termes et conditions d’utilisation de SOSAN : objet de l’application, obligations des professionnels de santé, propriété intellectuelle, politique de remboursement et garanties.",
  },
  en: {
    title: "Terms and Conditions — SOSAN",
    description:
      "SOSAN’s terms and conditions of use: what the application does, the obligations of healthcare professionals, intellectual property, refund policy and warranties.",
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
  return pageMetadata({ lang, path: "/terms/", ...meta[lang] });
}

export default async function Terms({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return <LegalDoc doc={docs[lang]} lang={lang} />;
}
