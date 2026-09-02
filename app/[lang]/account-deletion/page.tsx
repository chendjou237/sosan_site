import LegalDoc from "../../LegalDoc";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";
import { doc as fr } from "../../content/legal/account-deletion.fr";
import { doc as en } from "../../content/legal/account-deletion.en";

const docs = { fr, en };

const meta: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Suppression de compte — SOSAN",
    description:
      "Comment supprimer votre compte SOSAN depuis l’application, étape par étape — pour les patients, ainsi que pour les comptes médecins et hôpitaux.",
  },
  en: {
    title: "Delete your account — SOSAN",
    description:
      "How to delete your SOSAN account from within the app, step by step — for patients, and for doctor and hospital accounts.",
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
  return pageMetadata({ lang, path: "/account-deletion/", ...meta[lang] });
}

export default async function AccountDeletion({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return <LegalDoc doc={docs[lang]} lang={lang} />;
}
