import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import { resolveSrc, aboutGallery, aboutVision } from "../assets";
import { IconCheckCircle, IconMapPin, IconGlobe } from "../icons";

export const metadata: Metadata = {
  title: "Qui sommes-nous — SOSAN",
  description:
    "Née de l'ambition d'améliorer l'accès aux soins en Afrique, SOSAN facilite la télé-médecine, le paiement transparent et la solidarité de la diaspora. Découvrez notre vision, nos valeurs et les offres Diaspo Support.",
};

const AP = aboutGallery.map((a) => resolveSrc(a) ?? undefined);
const VISION_IMG = resolveSrc(aboutVision) ?? undefined;

const values = [
  { term: "Accès aux soins pour tous", gloss: "Le cœur de notre mission, sans exception." },
  { term: "Solidarité", gloss: "La diaspora et les villes soutiennent les plus éloignés." },
  { term: "Innovation", gloss: "Des alternatives digitales adaptées aux réalités africaines." },
  { term: "Transparence", gloss: "Des paiements clairs et traçables, sans frais cachés." },
  { term: "Professionnalisme", gloss: "Des soins et un accompagnement à la hauteur." },
  { term: "Ambition", gloss: "Élever durablement le niveau d'accès aux soins." },
  { term: "Intégrité", gloss: "Aucun bénéfice sur les dons — un but social et citoyen." },
  { term: "Audace", gloss: "Oser réinventer un système désarticulé." },
];

export default function About() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <div className="about-hero__copy">
              <span className="kicker">Santé · Social · Professionnalisme</span>
              <h1>
                SOSAN, la solution santé
                <br />
                <span>pour tous</span>
              </h1>
              <p>
                Née de l&apos;ambition d&apos;améliorer les conditions
                d&apos;accès aux soins des populations africaines, SOSAN est une
                application et une plateforme de santé qui réduit les
                difficultés d&apos;accès aux soins, améliore les conditions de
                travail des acteurs de la santé et facilite la solidarité dans
                l&apos;administration et le paiement des soins.
              </p>
              <div className="about-hero__meta">
                <span>
                  <IconMapPin size={18} /> Douala &amp; Yaoundé, Cameroun
                </span>
                <span>
                  <IconGlobe size={18} /> Diaspora incluse
                </span>
              </div>
            </div>
            <div className="about-hero__gallery">
              {AP.map((src, i) => (
                <img key={i} src={src} alt="SOSAN sur le terrain, au service des patients" />
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="vision">
          <div className="vision__media">
            <img
              src={VISION_IMG}
              alt="SOSAN rend accessibles les soins de santé en Afrique"
            />
          </div>
          <div className="vision__body">
            <h2>Notre vision</h2>
            <p>
              Rendre accessibles des soins de qualité à l&apos;ensemble des
              populations africaines confrontées à un système désarticulé ou à
              des procédés lourds et archaïques — en apportant des alternatives
              contemporaines, digitales et adaptées à leurs réalités.
            </p>
            <p>
              C&apos;est dans ce sens que SOSAN a développé un ensemble de
              services qui renforcent la chaîne de solidarité : le paiement des
              soins par la diaspora pour les locaux, ou par les zones urbaines
              pour les zones rurales. Nous facilitons aussi l&apos;exercice des
              médecins avec des rémunérations décentes et des plans de carrière
              motivants, tout en générant des gains de productivité pour les
              entreprises partenaires.
            </p>
            <p>
              Les difficultés financières étant un frein majeur, SOSAN
              s&apos;engage — avec des fondations, associations et donateurs — à
              coordonner les dons vers les bénéficiaires : consultations, achats
              de médicaments, opérations chirurgicales.
            </p>
            <div className="vision__note">
              SOSAN ne réalise aucun bénéfice sur les dons, reversés dans un but
              exclusivement social et citoyen.
            </div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="values">
          <div className="wrap">
            <div className="values__head">
              <h2>Nos valeurs</h2>
              <p>
                Huit convictions qui guident chaque décision, du premier
                rendez-vous au dernier remboursement.
              </p>
            </div>
            <div className="values__grid">
              {values.map((v) => (
                <div className="value-item" key={v.term}>
                  <IconCheckCircle size={22} className="value-item__icon" />
                  <div>
                    <h3>{v.term}</h3>
                    <p>{v.gloss}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIASPO CALLOUT ===== */}
        <section className="diaspo-cta">
          <div className="diaspo-cta__card">
            <div className="diaspo-cta__body">
              <span className="kicker kicker--light">Diaspo Support · by Activa</span>
              <h2>Depuis l&apos;étranger, protégez la santé des vôtres</h2>
              <p>
                Silver, Gold et Premium : des garanties santé pensées pour la
                diaspora, avec l&apos;accompagnement Diaspo Care et un paiement
                mensuel. À partir de 30&nbsp;€/mois.
              </p>
              <a href="/diaspo/" className="btn-green">
                Découvrir Diaspo Support →
              </a>
            </div>
            <div className="diaspo-cta__figures">
              <div>
                <div className="diaspo-cta__num">0–69</div>
                <div className="diaspo-cta__label">ans éligibles</div>
              </div>
              <div>
                <div className="diaspo-cta__num">80%</div>
                <div className="diaspo-cta__label">des soins couverts</div>
              </div>
              <div>
                <div className="diaspo-cta__num">3</div>
                <div className="diaspo-cta__label">formules au choix</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="contact">
          <div className="contact__inner">
            <div className="contact__card">
              <div>
                <h2>Faites appel à SOSAN dès aujourd&apos;hui</h2>
                <p className="contact__lead">
                  Une question sur nos offres ou un accompagnement pour vos
                  proches ? Notre équipe vous répond et vous guide, étape par
                  étape.
                </p>
                <div className="contact__meta">
                  <div>
                    <IconMapPin size={18} /> Douala &amp; Yaoundé, Cameroun
                  </div>
                  <div>
                    <IconGlobe size={18} /> Diaspora incluse
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
