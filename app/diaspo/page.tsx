import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import { CDN } from "../constants";
import {
  IconCheckCircle,
  IconUsers,
  IconVideoCall,
  IconCreditCard,
  IconShield,
  IconMessageCircle,
  IconGlobe,
} from "../icons";

export const metadata: Metadata = {
  title: "Diaspo Support — Assurance santé pour vos proches | SOSAN",
  description:
    "Diaspo Support by Activa : Silver, Gold et Premium. Depuis l'étranger, assurez la santé de vos proches au Cameroun avec jusqu'à 80% des soins couverts, l'accompagnement Diaspo Care et un paiement mensuel dès 30€.",
};

const TEL_FR = "+33695442982";
const TEL_CM = "+237659816380";
const HERO_IMG = `${CDN}/670f885de587b3675c7f85ee/baf5f793-c639-481a-9fd9-53f86291219e/19507.jpg.jpeg?content-type=image%2Fjpeg`;

const prestations = [
  "Consultations et examens médicaux",
  "Prescriptions pharmaceutiques",
  "Séjours hospitaliers",
  "Suivi de grossesse et accouchement",
  "Soins dentaires et visuels",
  "Actions de prévention",
  "Transport médicalisé en cas d'urgence",
];

const formules = [
  {
    name: "Diaspo Silver",
    price: "30",
    dot: "#9AA7B2",
    tag: null,
    lead: "80% des dépenses médicales courantes",
    desc: "Une solution pour couvrir les soins essentiels de vos proches dans un cadre maîtrisé : hôpitaux publics et confessionnels d'un réseau sélectionné.",
    featured: false,
  },
  {
    name: "Diaspo Gold",
    price: "50",
    dot: "var(--gold)",
    tag: "LE PLUS CHOISI",
    lead: "80% avec des plafonds plus élevés",
    desc: "Une prise en charge élargie et une orientation facilitée vers des structures publiques et privées reconnues pour la qualité de leurs services au Cameroun.",
    featured: true,
  },
  {
    name: "Diaspo Premium",
    price: "100",
    dot: "var(--gold)",
    tag: null,
    lead: "Jusqu'à 80%, protection étendue",
    desc: "Plafonds très élevés sur tout le réseau public et privé, plus des services ambulanciers à Yaoundé et Douala. L'option Diaspo Support Plus organise l'évacuation sanitaire d'urgence (EVASAN) vers l'étranger.",
    featured: false,
  },
];

const pricing = [
  { profile: "Adulte", note: "21–60 ans", silver: "30 €", gold: "50 €", premium: "100 €" },
  { profile: "Enfant", note: "moins de 21 ans", silver: "25 €", gold: "35 €", premium: "60 €" },
  { profile: "Senior", note: "60–69 ans", silver: "+25 %", gold: "+25 %", premium: "+25 %" },
];

const care = [
  {
    icon: IconUsers,
    title: "Soutien personnalisé",
    desc: "Une équipe dédiée, joignable du lundi au vendredi de 8h30 à 17h, par téléphone et sur WhatsApp.",
  },
  {
    icon: IconVideoCall,
    title: "Contenus santé numériques",
    desc: "Une bibliothèque de recommandations pratiques et de supports vidéo partagés par des experts médicaux.",
  },
  {
    icon: IconCreditCard,
    title: "Souplesse de règlement",
    desc: "Un paiement échelonné sur une base mensuelle, pour une gestion budgétaire sereine et durable.",
  },
  {
    icon: IconShield,
    title: "Réseau médical partenaire",
    desc: "Un large réseau de cliniques, pharmacies et laboratoires sélectionnés pour leur fiabilité et leur expertise.",
  },
];

const steps = [
  "Installez l'application SOSAN",
  "Accédez à l'espace « Assurance »",
  "Choisissez le programme souhaité",
  "Saisissez et validez vos informations",
  "Un conseiller vous rappelle sous 72h",
];

export default function Diaspo() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="dia-hero">
          <div className="dia-hero__inner">
            <div className="dia-hero__copy">
              <span className="kicker">Diaspo Support · by Activa</span>
              <h1>
                Depuis l&apos;étranger, protégez
                <br />
                la santé des <span>vôtres</span>
              </h1>
              <p>
                Lorsque la maladie ou un accident survient, ce sont vos proches
                restés au pays qui en subissent les conséquences les plus
                lourdes. Diaspo Silver, Gold et Premium vous permettent de
                prendre les devants : un accès structuré aux soins, des garanties
                adaptées et un accompagnement dédié.
              </p>
              <div className="dia-hero__actions">
                <a href="#formules" className="btn-green">
                  Voir les formules
                </a>
                <a href={`tel:${TEL_FR}`} className="btn-outline-dark">
                  Parler à un conseiller
                </a>
              </div>
            </div>
            <div className="dia-hero__media">
              <img src={HERO_IMG} alt="Une famille prise en charge par SOSAN au Cameroun" />
              <div className="dia-hero__badge">
                <span className="dia-hero__badge-num">0–69 ans</span>
                <span className="dia-hero__badge-label">bénéficiaires éligibles</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRESTATIONS ===== */}
        <section className="dia-cover">
          <div className="wrap">
            <div className="dia-cover__head">
              <h2>Des couvertures adaptées à chaque situation</h2>
              <p>
                Une protection médicale au Cameroun et à l&apos;international,
                pensée pour les réalités sanitaires et économiques de vos
                proches. Les prestations prises en compte incluent notamment :
              </p>
            </div>
            <ul className="dia-cover__list">
              {prestations.map((p) => (
                <li key={p}>
                  <IconCheckCircle size={20} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== FORMULES ===== */}
        <section id="formules" className="dia-formules">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">Trois formules, une même exigence</h2>
              <div className="rule" />
              <p>
                Choisissez le niveau de protection qui correspond aux besoins de
                vos proches. Prix indiqués pour un adulte, par mois.
              </p>
            </div>
            <div className="grid-3">
              {formules.map((f) => (
                <div
                  className={`plan${f.featured ? " plan--gold" : ""}`}
                  key={f.name}
                >
                  <div className="plan__body">
                    <div className="plan__title-row">
                      <span className="plan__dot" style={{ background: f.dot }} />
                      <h3>{f.name}</h3>
                      {f.tag && <span className="plan__inline-tag">{f.tag}</span>}
                    </div>
                    <div className="plan__amount">
                      <strong>{f.price}€</strong>
                      <span>/ mois</span>
                    </div>
                    <div className="plan__price">{f.lead}</div>
                    <p className="plan__desc">{f.desc}</p>
                    <a
                      href="#souscrire"
                      className={f.featured ? "plan__cta-solid" : "plan__cta-outline"}
                    >
                      Souscrire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRICING TABLE ===== */}
        <section className="dia-table">
          <div className="wrap">
            <div className="dia-table__head">
              <h2>Formules et coûts</h2>
              <p>Tarifs mensuels standards, par bénéficiaire et selon le profil.</p>
            </div>
            <div className="dia-table__scroll">
              <table>
                <thead>
                  <tr>
                    <th>Profil du bénéficiaire</th>
                    <th>Diaspo Silver</th>
                    <th className="is-featured">Diaspo Gold</th>
                    <th>Diaspo Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row) => (
                    <tr key={row.profile}>
                      <th scope="row">
                        {row.profile}
                        <span>{row.note}</span>
                      </th>
                      <td>{row.silver}</td>
                      <td className="is-featured">{row.gold}</td>
                      <td>{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="dia-table__note">
              Le tarif senior correspond à une majoration de 25 % appliquée à la
              formule choisie.
            </p>
          </div>
        </section>

        {/* ===== DIASPO CARE ===== */}
        <section className="dia-care">
          <div className="wrap">
            <div className="dia-care__head">
              <span className="kicker">Diaspo Care</span>
              <h2>Un accompagnement au quotidien</h2>
              <p>
                Bien plus qu&apos;une assurance : un dispositif humain et digital
                pour que vos proches ne soient jamais seuls face aux démarches de
                santé.
              </p>
            </div>
            <div className="dia-care__grid">
              {care.map((c) => {
                const Icon = c.icon;
                return (
                  <div className="dia-care__item" key={c.title}>
                    <div className="dia-care__icon">
                      <Icon size={24} />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== SOUSCRIRE ===== */}
        <section id="souscrire" className="dia-subscribe">
          <div className="dia-subscribe__inner">
            <div className="dia-subscribe__app">
              <span className="kicker kicker--light">Souscrire</span>
              <h2>En quelques étapes, depuis l&apos;application</h2>
              <ol className="dia-steps">
                {steps.map((s, i) => (
                  <li key={s}>
                    <span className="dia-steps__n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="dia-subscribe__call">
              <div className="dia-call-card">
                <IconMessageCircle size={26} />
                <h3>Ou par téléphone</h3>
                <p>Nos équipes vous accompagnent dans votre adhésion.</p>
                <a href={`tel:${TEL_FR}`}>+33 6 95 44 29 82</a>
                <a href={`tel:${TEL_CM}`}>+237 6 59 81 63 80</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BEYOND INSURANCE ===== */}
        <section className="dia-beyond">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">Au-delà de l&apos;assurance</h2>
              <div className="rule" />
              <p>
                Des solutions complémentaires pour les situations qui sortent du
                cadre d&apos;une couverture classique.
              </p>
            </div>
            <div className="dia-beyond__grid">
              <div className="dia-beyond__card">
                <IconUsers size={26} />
                <h3>Diaspo Protégée</h3>
                <p>
                  Une prise en charge rapide de soins hors assurance, pour des
                  proches nécessitant un suivi particulier ou ne pouvant être
                  assurés.
                </p>
              </div>
              <div className="dia-beyond__card">
                <IconGlobe size={26} />
                <h3>Diaspo One Touch</h3>
                <p>
                  Le règlement immédiat des dépenses médicales en Afrique, où que
                  vous soyez dans le monde.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MODALITÉS ===== */}
        <section className="dia-terms">
          <div className="wrap">
            <h2>Bon à savoir</h2>
            <ul>
              <li>
                Les montants correspondent aux tarifs standards ; une
                réévaluation peut intervenir si une pathologie antérieure est
                identifiée lors du bilan médical préalable.
              </li>
              <li>
                Les contrats sont conclus pour une durée initiale de 12 mois,
                reconduits automatiquement.
              </li>
              <li>
                L&apos;assureur se réserve la possibilité de refuser une adhésion
                si l&apos;état de santé constaté présente un risque majeur.
              </li>
              <li>
                Les garanties deviennent effectives après un délai d&apos;attente
                de 21 jours, à compter du premier règlement et de la réception du
                dossier complet (questionnaire médical, pièce d&apos;identité,
                photographies).
              </li>
              <li>
                Programmes ouverts aux bénéficiaires âgés de 0 à 69 ans, sous
                réserve des conditions d&apos;adhésion.
              </li>
            </ul>
          </div>
        </section>

        {/* ===== CONTACT CTA ===== */}
        <section className="dia-final">
          <div className="dia-final__card">
            <h2>Prêt à protéger vos proches&nbsp;?</h2>
            <p>
              Souscrivez depuis l&apos;application SOSAN ou échangez avec un
              conseiller. La couverture démarre après un délai de 21 jours.
            </p>
            <div className="dia-final__actions">
              <a href={`tel:${TEL_FR}`} className="btn-green">
                Parler à un conseiller
              </a>
              <a href="/#contact" className="btn-outline-light">
                Nous écrire
              </a>
            </div>
            <p className="dia-final__phones">
              +33 6 95 44 29 82 &nbsp;·&nbsp; +237 6 59 81 63 80
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
