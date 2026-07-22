import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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

const description =
  "SOSAN connecte l'Afrique à des médecins, laboratoires et solutions de couverture santé. Consultez, payez en toute transparence et protégez vos proches — où que vous soyez.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sosanmed.com"),
  title: "SOSAN — Votre solution santé pour tous",
  description,
  openGraph: {
    title: "SOSAN — Votre solution santé pour tous",
    description,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOSAN — Votre solution santé pour tous",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
