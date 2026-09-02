import { Poppins, Inter } from "next/font/google";
import "../globals.css";
import { LOCALES, isLocale, DEFAULT_LOCALE, type Locale } from "../i18n/config";
import { pageMetadata, SITE_URL } from "../i18n/metadata";
import { ui } from "../i18n/ui";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const home: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "SOSAN — Votre solution santé pour tous",
    description:
      "SOSAN connecte l’Afrique à des médecins, laboratoires et solutions de couverture santé. Consultez, payez en toute transparence et protégez vos proches — où que vous soyez.",
  },
  en: {
    title: "SOSAN — Your health solution for everyone",
    description:
      "SOSAN connects Africa to doctors, laboratories and health coverage. Book consultations, pay with full transparency and protect the people you love — wherever you are.",
  },
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  return {
    metadataBase: new URL(SITE_URL),
    ...pageMetadata({ lang, path: "/", ...home[lang] }),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = ui(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main-content" className="skip-link">
          {t.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
