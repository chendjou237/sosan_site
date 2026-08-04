import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import StoreButtons from "../StoreButtons";
import Reveal from "../Reveal";
import Mockup from "../Mockup";
import { serviceScreens } from "../assets";
import { PARTNER_FORM } from "../constants";
import {
  IconVideoCall,
  IconHospital,
  IconPill,
  IconShield,
  IconHeartHand,
  IconUsers,
  IconWallet,
  IconFile,
  IconSparkles,
  IconNewspaper,
  IconCreditCard,
  IconGlobe,
  IconMapPin,
  IconCheckCircle,
  IconCalendarCheck,
} from "../icons";

export const metadata: Metadata = {
  title: "Nos services — Toute votre santé dans une seule app | SOSAN",
  description:
    "Médecins, hôpitaux, laboratoires, pharmacie, assurance santé, épargne, dons et protection famille — SOSAN réunit tout votre parcours de soins au Cameroun, avec paiements mobiles sécurisés et support bilingue FR/EN.",
};

type Service = {
  icon: typeof IconVideoCall;
  title: string;
  desc: string;
  points: string[];
  screen: string;
  tag?: string;
  href?: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: IconVideoCall,
    title: "Consultations & rendez-vous",
    desc: "Trouvez le bon médecin et prenez rendez-vous en quelques clics.",
    screen: "consultations",
    featured: true,
    points: [
      "Filtrez par spécialité, lieu ou disponibilité",
      "Rendez-vous standard & VIP, au créneau de votre choix",
      "Téléconsultation vidéo directement dans l'application",
      "Messagerie en temps réel avec votre médecin",
      "Profils, avis et notes avant de réserver",
      "Historique complet de vos rendez-vous",
    ],
  },
  {
    icon: IconHospital,
    title: "Hôpitaux & laboratoires",
    desc: "Accédez à des établissements de confiance près de chez vous.",
    screen: "hopitaux-labos",
    points: [
      "Hôpitaux et labos sur une carte, avec contacts",
      "Réservez examens et analyses médicales",
      "Consultations spécialisées en établissement partenaire",
      "Laissez un avis après votre visite",
    ],
  },
  {
    icon: IconPill,
    title: "Pharmacie",
    tag: "Bientôt",
    desc: "Commandez vos médicaments sans sortir de chez vous.",
    screen: "pharmacie",
    points: [
      "Recherchez un médicament et sa disponibilité à proximité",
      "Commande avec validation d'ordonnance",
      "Suivi du statut de vos commandes",
    ],
  },
  {
    icon: IconShield,
    title: "Assurance santé",
    desc: "Protégez-vous et vos proches avec une couverture adaptée.",
    screen: "assurance",
    featured: true,
    href: "/diaspo/",
    points: [
      "Assurance Diaspo / Activa en quelques clics",
      "Couvrez-vous et toute votre famille",
      "Adhésion digitale guidée : questionnaire, contrat, e-signature",
      "Suivez votre contrat et déclarez vos sinistres dans l'app",
    ],
  },
  {
    icon: IconHeartHand,
    title: "Dons ONG & projets santé",
    desc: "Soutenez des causes de santé qui comptent.",
    screen: "dons",
    points: [
      "Parcourez des ONG vérifiées et leurs projets",
      "Donnez en toute sécurité et suivez l'avancement",
    ],
  },
  {
    icon: IconUsers,
    title: "Protection famille",
    desc: "Prenez soin de ceux qui comptent sur vous.",
    screen: "protection-famille",
    points: [
      "Ajoutez vos proches comme bénéficiaires",
      "Choisissez qui reçoit les factures et règle un plan",
    ],
  },
  {
    icon: IconWallet,
    title: "Épargne santé SOSAN",
    desc: "Mettez de l'argent de côté pour vos dépenses de santé.",
    screen: "epargne",
    points: [
      "Un espace dédié pour anticiper et couvrir vos frais médicaux",
    ],
  },
  {
    icon: IconFile,
    title: "Profil médical & documents",
    desc: "Vos données de santé, toujours avec vous.",
    screen: "profil-medical",
    points: [
      "Un profil médical accessible pendant les consultations",
      "Stockez et retrouvez vos documents médicaux",
      "Consultez, téléchargez ou renouvelez vos ordonnances",
    ],
  },
  {
    icon: IconSparkles,
    title: "Assistant santé IA",
    desc: "Un chatbot pour vous guider et répondre à vos questions, à tout moment.",
    screen: "assistant-ia",
    points: [],
  },
  {
    icon: IconNewspaper,
    title: "Communauté & conseils santé",
    desc: "Publications et conseils santé pour rester informé et engagé.",
    screen: "communaute",
    points: [],
  },
];

const why = [
  {
    icon: IconCreditCard,
    title: "Paiements sécurisés",
    desc: "Orange Money, MTN Mobile Money, E-nkap et cartes bancaires.",
  },
  {
    icon: IconGlobe,
    title: "Bilingue FR / EN",
    desc: "Une expérience complète en français et en anglais.",
  },
  {
    icon: IconMapPin,
    title: "Géolocalisé",
    desc: "Les prestataires et services près de vous, sur une carte.",
  },
  {
    icon: IconCheckCircle,
    title: "Tout-en-un",
    desc: "Médecins, hôpitaux, labos, pharmacies, assurance, épargne & dons.",
  },
  {
    icon: IconUsers,
    title: "Pensé pour la diaspora",
    desc: "Gérez les soins de vos proches restés au pays.",
  },
];

const steps = [
  {
    icon: IconMapPin,
    title: "Trouver",
    desc: "Cherchez médecins, hôpitaux, laboratoires ou formules près de vous.",
  },
  {
    icon: IconCalendarCheck,
    title: "Réserver / Souscrire",
    desc: "Choisissez un créneau ou une formule en quelques clics.",
  },
  {
    icon: IconCreditCard,
    title: "Payer en sécurité",
    desc: "Orange Money, MTN Mobile Money, E-nkap ou carte bancaire.",
  },
  {
    icon: IconCheckCircle,
    title: "Être soigné",
    desc: "Consultez, faites-vous tester, couvrez-vous et restez suivi.",
  },
];

const pros = [
  {
    role: "Médecins",
    desc: "Agenda, rendez-vous, téléconsultations, messagerie patients et suivi des revenus.",
  },
  {
    role: "Hôpitaux & laboratoires",
    desc: "Équipes, spécialistes, services et examens ; tableaux de bord et revenus.",
  },
  {
    role: "Pharmacies",
    desc: "Catalogue de médicaments, campagnes, gestion des commandes et revenus.",
  },
  {
    role: "Assureurs",
    desc: "Publier des offres, gérer adhésions et abonnés, suivre les contrats.",
  },
  {
    role: "ONG",
    desc: "Créer des projets, recevoir des dons et suivre les transactions.",
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="srv-hero">
          <div className="srv-hero__inner">
            <Reveal className="srv-hero__copy">
              <span className="kicker">Nos services</span>
              <h1>
                Toute votre santé, <span>dans une seule app</span>
              </h1>
              <p>
                Trouvez des médecins, réservez des examens, assurez-vous et
                prenez soin de votre famille — depuis votre téléphone, où que
                vous soyez.
              </p>
              <div className="srv-hero__stores">
                <StoreButtons />
              </div>
              <ul className="srv-hero__meta">
                <li>
                  <IconCreditCard size={16} /> Paiements mobiles sécurisés
                </li>
                <li>
                  <IconGlobe size={16} /> Bilingue FR / EN
                </li>
                <li>
                  <IconMapPin size={16} /> Cameroun &amp; diaspora
                </li>
              </ul>
            </Reveal>
            <Reveal className="srv-hero__panel" delay={120}>
              <img
                src="/app-mockup.png"
                alt="L'application SOSAN : écran d'accueil et recherche de médecin"
              />
            </Reveal>
          </div>
        </section>

        {/* ===== CORE SERVICES ===== */}
        <section className="srv-services">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">Un parcours de soins complet</h2>
              <div className="rule" />
              <p>
                Dix services réunis dans une seule application, pensés pour
                simplifier chaque étape — de la consultation à la couverture.
              </p>
            </div>
            <div className="srv-grid">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isWide = !!s.featured;
                const cls = `srv-card${isWide ? " srv-card--wide" : ""}`;
                const screen = serviceScreens[s.screen];
                const text = (
                  <>
                    <div className="srv-card__head">
                      <span
                        className={`srv-card__icon${
                          i % 2 === 1 ? " srv-card__icon--blue" : ""
                        }`}
                      >
                        <Icon size={26} />
                      </span>
                      <h3 className="font-poppins">{s.title}</h3>
                      {s.tag && <span className="srv-tag">{s.tag}</span>}
                    </div>
                    <p className="srv-card__desc">{s.desc}</p>
                    {s.points.length > 0 && (
                      <ul className="srv-card__points">
                        {s.points.map((p) => (
                          <li key={p}>
                            <IconCheckCircle size={16} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.href && (
                      <span className="srv-card__link">
                        Voir les formules <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </>
                );
                const inner = isWide ? (
                  <>
                    <div className="srv-card__text">{text}</div>
                    <Mockup
                      asset={screen}
                      variant="photo"
                      className="srv-card__photo"
                    />
                  </>
                ) : (
                  <>
                    <Mockup
                      asset={screen}
                      variant="photo"
                      className="srv-card__media"
                    />
                    {text}
                  </>
                );
                return s.href ? (
                  <Reveal
                    as="a"
                    href={s.href}
                    className={cls}
                    key={s.title}
                    delay={(i % 3) * 80}
                  >
                    {inner}
                  </Reveal>
                ) : (
                  <Reveal className={cls} key={s.title} delay={(i % 3) * 80}>
                    {inner}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== WHY SOSAN ===== */}
        <section className="srv-why">
          <div className="srv-why__dots" />
          <div className="srv-why__inner">
            <Reveal className="srv-why__head">
              <span className="kicker kicker--light">Pourquoi SOSAN</span>
              <h2>La santé, sans friction ni distance</h2>
            </Reveal>
            <div className="srv-why__grid">
              {why.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal className="srv-why__item" key={w.title} delay={i * 70}>
                    <span className="srv-why__icon">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="srv-steps">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">Comment ça marche</h2>
              <div className="rule" />
              <p>Quatre étapes, du premier rendez-vous au suivi complet.</p>
            </div>
            <ol className="srv-steps__grid">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal as="li" className="srv-step" key={s.title} delay={i * 80}>
                    <div className="srv-step__top">
                      <span className="srv-step__n">{i + 1}</span>
                      <span className="srv-step__icon">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ===== FOR PROFESSIONALS ===== */}
        <section className="srv-pros">
          <div className="wrap">
            <div className="srv-pros__grid">
              <Reveal className="srv-pros__intro">
                <span className="kicker">Professionnels de santé</span>
                <h2>Une plateforme complète pour les prestataires</h2>
                <p>
                  Médecins, établissements, pharmacies, assureurs et ONG : SOSAN
                  vous connecte aux patients et outille votre activité au
                  quotidien.
                </p>
                <a
                  href={PARTNER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  Devenir partenaire →
                </a>
              </Reveal>
              <div className="srv-pros__list">
                {pros.map((p, i) => (
                  <Reveal className="srv-pro" key={p.role} delay={i * 70}>
                    <h3>{p.role}</h3>
                    <p>{p.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="srv-final">
          <Reveal className="srv-final__card">
            <h2>Prenez votre santé en main</h2>
            <p>
              Téléchargez SOSAN et retrouvez médecins, hôpitaux, assurance et
              suivi — réunis dans une seule application.
            </p>
            <div className="srv-final__stores">
              <StoreButtons height={52} />
            </div>
            <a href="/#contact" className="srv-final__link">
              Une question ? Contactez notre équipe →
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
