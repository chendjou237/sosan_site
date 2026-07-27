import ContactForm from "./ContactForm";
import Header from "./Header";
import Footer from "./Footer";
import StoreButtons from "./StoreButtons";
import Reveal from "./Reveal";
import Mockup from "./Mockup";
import { PARTNER_FORM, partners } from "./constants";
import {
  resolveSrc,
  planPhotos,
  homeAbout,
  testimonialAvatars,
  newsCover,
} from "./assets";
import { latestPosts, categoryMeta, formatDate } from "./actualites/data";
import {
  IconVideoCall,
  IconCreditCard,
  IconUsers,
  IconShield,
  IconMessageCircle,
  IconFlask,
  IconCheckCircle,
  IconMapPin,
  IconGlobe,
} from "./icons";

const services = [
  {
    icon: IconVideoCall,
    title: "Télé-médecine & rendez-vous",
    desc: "Consultez à distance ou en présentiel des généralistes et spécialistes expérimentés, 24h/24.",
  },
  {
    icon: IconCreditCard,
    title: "Paiement sécurisé & transparent",
    desc: "Fini les surfacturations et frais cachés. Des paiements sécurisés et traçables (B/B & B/C).",
  },
  {
    icon: IconUsers,
    title: "Accompagnement personnalisé",
    desc: "Une équipe dédiée vous guide dans vos démarches et aide à financer les cas les plus défavorisés.",
  },
  {
    icon: IconShield,
    title: "Mutuelle de santé",
    desc: "Des polices d'assurance abordables et transparentes. La diaspora peut souscrire pour ses proches.",
  },
];

const whyCards = [
  {
    n: 1,
    title: "Améliorez votre réputation",
    desc: "Auprès de milliers de patients présents sur notre plateforme, en toute confiance.",
  },
  {
    n: 2,
    title: "Élargissez votre visibilité",
    desc: "Gagnez en visibilité à l'échelle nationale et au-delà des frontières.",
  },
  {
    n: 3,
    title: "Boostez vos revenus",
    desc: "Une augmentation de votre chiffre d'affaires grâce à un flux constant de patients.",
  },
  {
    n: 4,
    title: "Positionnement international",
    desc: "Faites-vous connaître à l'extérieur selon la qualité de vos services.",
  },
];

// NOTE: Illustrative testimonials — replace with real, attributed quotes
// (with consent) before wider launch. Names and quotes below are placeholders.
const testimonials = [
  {
    quote:
      "« Depuis Paris, j'ai pu organiser et régler les consultations de ma mère à Douala en toute transparence. Je vois exactement où va chaque franc — c'est un vrai soulagement. »",
    name: "Aïcha Mbarga",
    role: "Diaspora · Paris",
    avatar: "aicha-mbarga",
  },
  {
    quote:
      "« J'ai consulté un généraliste depuis chez moi, sans faire la queue ni me déplacer. Le médecin a pris le temps de tout m'expliquer. Simple, rapide et rassurant. »",
    name: "Emmanuel Fotso",
    role: "Patient à Yaoundé",
    avatar: "emmanuel-fotso",
  },
  {
    quote:
      "« Fini les frais surprises : les tarifs sont clairs avant chaque acte et l'équipe m'a accompagnée à chaque étape. Je le recommande sans hésiter à mes proches. »",
    name: "Nadège Etoundi",
    role: "Patiente à Douala",
    avatar: "nadege-etoundi",
  },
];

export default function Home() {
  const featured = services[0];
  const FeaturedIcon = featured.icon;

  return (
    <>
      {/* ===== HEADER ===== */}
      <Header />

      <main id="main-content">
        {/* ===== HERO ===== */}
        <section id="top" className="hero">
          <div className="hero__dots" />
          <div className="hero__glow" />
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="badge">
                <span className="badge__dot" />
                Santé fiable, rapide &amp; accessible
              </span>
              <h1>
                Des soins de santé fiables, <span>où que vous soyez.</span>
              </h1>
              <p className="hero__lead">
                Consultez des médecins, payez en toute transparence et protégez
                vos proches au Cameroun — sur place comme depuis la diaspora, dans
                une seule application.
              </p>
              <div className="hero__cta">
                <div className="store-row">
                  <StoreButtons />
                </div>
                <a href="/diaspo" className="hero__secondary">
                  Découvrir les formules Diaspo <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero__trust">
                <IconShield size={15} />
                Déjà sur l&apos;App Store &amp; Google Play · en partenariat avec
                le Ministère de la Santé
              </p>
              <div className="stats">
                <div>
                  <div className="stat__num">24/7</div>
                  <div className="stat__label">Consultations en ligne</div>
                </div>
                <div className="stat__sep" />
                <div>
                  <div className="stat__num">80%</div>
                  <div className="stat__label">des soins couverts</div>
                </div>
                <div className="stat__sep" />
                <div>
                  <div className="stat__num">0</div>
                  <div className="stat__label">frais caché</div>
                </div>
              </div>
            </div>
            <div className="hero__media">
              <div className="hero__frame">
                <img
                  src="/hero.png"
                  alt="Pr Jean Bahebeck, ambassadeur SOSAN"
                />
              </div>
              <div className="float-card float-card--amb">
                <span className="float-card__icon">
                  <IconCheckCircle size={22} />
                </span>
                <div>
                  <div className="float-card__title">Pr Jean Bahebeck</div>
                  <div className="float-card__sub">Ambassadeur SOSAN</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST BAR ===== */}
        <section className="trustbar" aria-label="Institutions partenaires">
          <div className="trustbar__inner">
            <p className="trustbar__label">
              En partenariat avec les institutions de santé de référence
            </p>
            <div className="trustbar__logos">
              {partners.slice(0, 6).map((p, i) => (
                <img
                  key={i}
                  src={p.src}
                  alt="Institution partenaire de SOSAN"
                  style={{ height: Math.min(p.h, 40) }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== DOWNLOAD BANNER ===== */}
        <section className="banner">
          <div className="banner__card">
            <div className="banner__dots" />
            <div style={{ position: "relative" }}>
              <span className="pill-new">NOUVEAU</span>
              <h2 className="font-poppins">
                Discutez avec l&apos;assistant IA SOSAN sur WhatsApp
              </h2>
              <p className="banner__lead">
                Posez vos questions, prenez rendez-vous et suivez vos
                remboursements directement sur WhatsApp, 24h/24.
              </p>
              <div className="banner__feats">
                <div className="banner__feat">
                  <IconMessageCircle size={18} /> Télé-médecine
                </div>
                <div className="banner__feat">
                  <IconFlask size={18} /> Examens médicaux
                </div>
                <div className="banner__feat">
                  <IconShield size={18} /> Mutuelle santé
                </div>
              </div>
              <a href="#contact" className="btn-green banner__cta">
                <IconMessageCircle size={18} />
                Discuter sur WhatsApp
              </a>
            </div>
            <div className="banner__assistant">
              <img src="/whatsapp-assistant.png" alt="Assistant IA SOSAN sur WhatsApp" />
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <Reveal className="about__media">
            <img
              src={resolveSrc(homeAbout) ?? undefined}
              alt="Application SOSAN"
            />
            <div className="about__float">
              <span className="about__float-dot" />
              <div>
                <div className="about__float-title">Consultations en ligne</div>
                <div className="about__float-sub">Disponible 24h/24, 7j/7</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="about__copy" delay={120}>
            <span className="eyebrow">QUI SOMMES-NOUS</span>
            <h2>SOSAN facilite votre accès aux soins</h2>
            <p>
              Née de l&apos;ambition d&apos;améliorer les conditions d&apos;accès
              aux soins des populations africaines, SOSAN est une application et
              une plateforme de santé qui réduit les difficultés d&apos;accès aux
              soins en Afrique.
            </p>
            <p>
              Nous améliorons les conditions de travail des acteurs de la santé et
              facilitons la solidarité dans l&apos;administration et le paiement
              des soins de santé.
            </p>
            <ul className="about__proof">
              <li>
                <span className="about__proof-ic">
                  <IconVideoCall size={16} />
                </span>
                Télé-médecine &amp; rendez-vous, 24h/24
              </li>
              <li>
                <span className="about__proof-ic">
                  <IconCreditCard size={16} />
                </span>
                Paiements tracés, zéro frais caché
              </li>
              <li>
                <span className="about__proof-ic">
                  <IconGlobe size={16} />
                </span>
                Au Cameroun et pour la diaspora
              </li>
            </ul>
            <a href="/about" className="btn-green">
              En savoir plus →
            </a>
          </Reveal>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="services">
          <div className="wrap">
            <Reveal className="section-center">
              <h2 className="font-poppins">Nos Services</h2>
              <div className="rule" />
              <p>
                Une gamme de services conçus pour rendre les soins plus simples,
                rapides et accessibles.
              </p>
            </Reveal>
            <div className="services-grid">
              <Reveal className="service-card service-card--featured">
                <div className="service-card__icon service-card__icon--lg">
                  <FeaturedIcon size={34} />
                </div>
                <div className="service-card__body">
                  <span className="service-card__tag">Le plus utilisé</span>
                  <h3 className="font-poppins">{featured.title}</h3>
                  <p>{featured.desc}</p>
                </div>
                <a href="#contact" className="btn-green service-card__cta">
                  Télécharger l&apos;app →
                </a>
              </Reveal>
              {services.slice(1).map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal
                    as="a"
                    href="#contact"
                    className="service-card"
                    key={s.title}
                    delay={i * 90}
                  >
                    <div className="service-card__icon">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-poppins">{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="service-card__link">
                      Télécharger <span aria-hidden="true">→</span>
                    </span>
                  </Reveal>
                );
              })}
            </div>
            <div className="services-more">
              <a href="/services" className="btn-green">
                Découvrir tous nos services →
              </a>
              <span>Dix services réunis dans une seule application</span>
            </div>
          </div>
        </section>

        {/* ===== DIASPO ===== */}
        <section id="diaspo" className="diaspo">
          <div className="diaspo__head">
            <span className="eyebrow">DIASPO SUPPORT</span>
            <h2>Assurez la santé de vos proches</h2>
            <p>
              Silver, Gold et Premium : des garanties santé adaptées et un
              accompagnement SOSAN dédié, sur tout le territoire camerounais.
            </p>
          </div>
          <div className="grid-3">
            {/* Silver */}
            <div className="plan">
              <img
                src={resolveSrc(planPhotos.silver) ?? undefined}
                alt="Diaspo Silver"
                loading="lazy"
              />
              <div className="plan__body">
                <div className="plan__title-row">
                  <span className="plan__dot" style={{ background: "#9AA7B2" }} />
                  <h3>Diaspo Silver</h3>
                </div>
                <div className="plan__amount">
                  <strong>30€</strong>
                  <span>/ mois</span>
                </div>
                <div className="plan__price">Couverture 80% des soins courants</div>
                <p className="plan__desc">
                  Une réponse stratégique aux besoins de santé fondamentaux, via un
                  réseau sélectionné d&apos;établissements publics et
                  confessionnels.
                </p>
                <a href="/diaspo" className="plan__cta-outline">
                  Choisir Silver
                </a>
              </div>
            </div>

            {/* Gold */}
            <div className="plan plan--gold">
              <div className="plan__media">
                <img
                  src={resolveSrc(planPhotos.gold) ?? undefined}
                  alt="Diaspo Gold"
                  loading="lazy"
                />
                <span className="plan__tag">POPULAIRE</span>
              </div>
              <div className="plan__body">
                <div className="plan__title-row">
                  <span className="plan__dot" style={{ background: "var(--gold)" }} />
                  <h3>Diaspo Gold</h3>
                </div>
                <div className="plan__amount">
                  <strong>50€</strong>
                  <span>/ mois</span>
                </div>
                <div className="plan__price">80% avec plafonds rehaussés</div>
                <p className="plan__desc">
                  Plus de latitude thérapeutique et un accès facilité à un réseau
                  étendu d&apos;hôpitaux publics et privés d&apos;excellence au
                  Cameroun.
                </p>
                <a href="/diaspo" className="plan__cta-solid">
                  Choisir Gold
                </a>
              </div>
            </div>

            {/* Premium */}
            <div className="plan">
              <img
                src={resolveSrc(planPhotos.premium) ?? undefined}
                alt="Diaspo Premium"
                loading="lazy"
              />
              <div className="plan__body">
                <div className="plan__title-row">
                  <span className="plan__dot" style={{ background: "var(--gold)" }} />
                  <h3>Diaspo Premium</h3>
                </div>
                <div className="plan__amount">
                  <strong>100€</strong>
                  <span>/ mois</span>
                </div>
                <div className="plan__price">Sécurité sanitaire intégrale</div>
                <p className="plan__desc">
                  Réseau complet, ambulances médicalisées (Yaoundé &amp; Douala) et
                  coordination d&apos;évacuation sanitaire (EVASAN) à
                  l&apos;étranger.
                </p>
                <a href="/diaspo" className="plan__cta-outline">
                  Choisir Premium
                </a>
              </div>
            </div>
          </div>
          <div className="diaspo__more">
            <a href="/diaspo" className="btn-green">
              Découvrir Diaspo Support →
            </a>
            <span>Tarif adulte, par mois · profils enfant &amp; senior disponibles</span>
          </div>
        </section>

        {/* ===== WHY JOIN ===== */}
        <section className="why">
          <div className="why__dots" />
          <div className="why__inner">
            <div className="why__grid">
              <Reveal>
                <span className="why__eyebrow">POURQUOI NOUS REJOINDRE</span>
                <h2>Développez votre activité avec SOSAN</h2>
                <p className="why__lead">
                  En devenant partenaire, vous intégrez une plateforme qui facilite
                  la mise en relation avec les patients et valorise votre expertise.
                </p>
                <a
                  href={PARTNER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  Rejoignez-nous →
                </a>
              </Reveal>
              <div className="why__cards">
                {whyCards.map((c, i) => (
                  <Reveal className="why-card" key={c.n} delay={i * 90}>
                    <div className="why-card__n">{c.n}</div>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTNERS ===== */}
        <section id="partners" className="partners">
          <div className="partners__inner">
            <h2>Nos Partenaires</h2>
            <p className="partners__sub">Ils nous font déjà confiance !</p>
            <div className="marquee">
              <div className="marquee__track">
                {[...partners, ...partners].map((p, i) => (
                  <img
                    key={i}
                    src={p.src}
                    alt="Partenaire SOSAN"
                    style={{ height: p.h }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="testi">
          <div className="testi__head">
            <span className="eyebrow">AVIS &amp; COMMENTAIRES</span>
            <h2>
              Ce que disent nos <span>clients</span>
            </h2>
          </div>
          <div className="grid-3 testi__grid">
            {testimonials.map((t) => (
              <div className="testi-card" key={t.name}>
                <div
                  className="testi-card__stars"
                  role="img"
                  aria-label="Note : 5 étoiles sur 5"
                >
                  ★★★★★
                </div>
                <p className="testi-card__quote">{t.quote}</p>
                <div className="testi-card__who">
                  <img
                    src={resolveSrc(testimonialAvatars[t.avatar]) ?? undefined}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div>
                    <div className="testi-card__name">{t.name}</div>
                    <div className="testi-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ACTUALITÉS ===== */}
        <section id="actualites" className="news">
          <div className="wrap">
            <div className="news__head">
              <div>
                <span className="eyebrow">ACTUALITÉS &amp; COLLABORATIONS</span>
                <h2>La santé en mouvement</h2>
                <p>Nos annonces, événements et partenariats les plus récents.</p>
              </div>
              <a href="/actualites" className="news-more">
                Voir toutes les actualités <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid-3">
              {latestPosts.map((post, i) => {
                const meta = categoryMeta[post.category];
                return (
                  <Reveal
                    as="a"
                    href="/actualites"
                    className="news-card"
                    key={post.slug}
                    delay={i * 90}
                  >
                    <Mockup
                      asset={newsCover(post.slug, post.title)}
                      variant="photo"
                      className="news-card__media"
                    />
                    <div className="news-card__body">
                      <div className="news-card__meta">
                        <span
                          className={`news-card__cat news-card__cat--${meta.mod}`}
                        >
                          {meta.label}
                        </span>
                        <span className="news-card__date">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h3>{post.title}</h3>
                      <p className="news-card__excerpt">{post.excerpt}</p>
                    </div>
                  </Reveal>
                );
              })}
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
                  Prenez rendez-vous avec notre équipe et bénéficiez d&apos;un
                  accompagnement personnalisé adapté à vos besoins.
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

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
