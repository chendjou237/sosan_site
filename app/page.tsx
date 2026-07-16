import ContactForm from "./ContactForm";
import Header from "./Header";
import {
  IconVideoCall,
  IconCreditCard,
  IconUsers,
  IconShield,
  IconMessageCircle,
  IconFlask,
  IconCalendarCheck,
  IconMapPin,
  IconGlobe,
  IconMail,
} from "./icons";

const APP_STORE = "https://apps.apple.com/us/app/sosan/id6745497491";
const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.sosan.app";
const PARTNER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMhj13vRZbfru3IqrUI5ZjXRVZWV8YNpCncyv-fKuYsDYOOQ/viewform";
const CDN = "https://images.squarespace-cdn.com/content";

const APPSTORE_IMG = `${CDN}/v1/670f885de587b3675c7f85ee/02d24ac5-221d-4f7c-9191-c84ae189f97f/appstore.png`;
const PLAYSTORE_IMG = `${CDN}/v1/670f885de587b3675c7f85ee/0f5a4cd9-960e-492a-b050-f9b803514396/playstore.png`;

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

const testimonials = [
  {
    quote:
      "« J'ai été très satisfait de mon expérience avec SOSAN. Dès le premier contact, l'équipe s'est montrée professionnelle et attentive à mes besoins. Tout s'est déroulé sans stress. Je recommande vivement. »",
    name: "Wade Warren",
    role: "Patient",
    img: `${CDN}/670f885de587b3675c7f85ee/50ced21f-0bae-4bb3-9b42-de3189f21207/128895.jpg?content-type=image%2Fjpeg`,
  },
  {
    quote:
      "« Une excellente expérience ! L'accompagnement est vraiment personnalisé et on se sent écouté du début à la fin. L'équipe prend le temps d'expliquer chaque étape. Merci pour votre sérieux et votre réactivité. »",
    name: "Jacob Jones",
    role: "Patient",
    img: `${CDN}/670f885de587b3675c7f85ee/8aa4e46b-ec61-4850-b62c-3bfdc726ddf6/146757.jpg?content-type=image%2Fjpeg`,
  },
  {
    quote:
      "« Service de très grande qualité. SOSAN m'a aidé à mieux comprendre mes démarches et à avancer sereinement. On sent qu'on est entre de bonnes mains. Je n'hésiterai pas à refaire appel à leurs services. »",
    name: "Leslie Alexander",
    role: "Patiente",
    img: `${CDN}/670f885de587b3675c7f85ee/a4d87498-101f-406f-b13d-a61a6504b7e2/19641.jpg?content-type=image%2Fjpeg`,
  },
];

const partners = [
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/a41fb8e7-5f61-4b6d-a27e-2a2395afbfbf/logo-minsante-short2.png`, h: 56 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/33dd1aba-d4da-4af1-9519-16ecf3b62010/activa.png`, h: 44 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/3e23de2d-01e8-4c85-934a-c12dc3fada39/Logo-Afrique-Future-2019-sans-baseline.png`, h: 50 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/6032c253-1b31-40ed-bb2a-b0f5636b4ff4/BakerTilly-Logo.svg.png`, h: 40 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/b3e217bf-adcf-4ecb-8189-854fcf166ef0/SBA-logo.png`, h: 50 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/a8ab74c0-b9ac-4159-8a21-0755aa490bd0/Logo-UCAC.png`, h: 56 },
  { src: `${CDN}/v1/670f885de587b3675c7f85ee/4e86bf2f-ff25-4a45-8040-26653edee1c2/logo-main.png`, h: 48 },
];

function StoreButtons({ height = 52 }: { height?: number }) {
  return (
    <>
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
        <img src={APPSTORE_IMG} alt="Télécharger sur l'App Store" style={{ height }} />
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
        <img src={PLAYSTORE_IMG} alt="Disponible sur Google Play" style={{ height }} />
      </a>
    </>
  );
}

export default function Home() {
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
              Votre solution
              <br />
              <span>santé</span> pour tous
            </h1>
            <p className="hero__lead">
              SOSAN connecte l&apos;Afrique à des médecins, laboratoires et
              solutions de couverture santé. Consultez, payez en toute
              transparence et protégez vos proches — où que vous soyez.
            </p>
            <div className="store-row">
              <StoreButtons />
            </div>
            <div className="stats">
              <div>
                <div className="stat__num">24/7</div>
                <div className="stat__label">Consultations</div>
              </div>
              <div className="stat__sep" />
              <div>
                <div className="stat__num">80%</div>
                <div className="stat__label">Frais couverts</div>
              </div>
              <div className="stat__sep" />
              <div>
                <div className="stat__num">🇨🇲 +</div>
                <div className="stat__label">Diaspora incluse</div>
              </div>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <img
                src={`${CDN}/v1/670f885de587b3675c7f85ee/708fba6a-a22e-4d63-9d6c-c3efac732b06/2147767273.jpg.jpeg`}
                alt="Soignant et patient"
              />
            </div>
            <div className="float-card">
              <span className="float-card__icon">
                <IconCalendarCheck size={20} />
              </span>
              <div>
                <div className="float-card__title">Rendez-vous confirmé</div>
                <div className="float-card__sub">
                  Dr. généraliste · aujourd&apos;hui
                </div>
              </div>
            </div>
            <div className="float-pay">
              <div className="float-pay__label">Paiement sécurisé</div>
              <div className="float-pay__val">Transparent · Tracé</div>
            </div>
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
        <div className="about__media">
          <img
            src={`${CDN}/v1/670f885de587b3675c7f85ee/1ecca722-1d4c-4af1-ab58-1c59d0761f7b/sosan-application-mobile-de-sant%C3%A9-en-Afrique.png`}
            alt="Application SOSAN"
          />
        </div>
        <div>
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
          <a href="#services" className="btn-green">
            En savoir plus →
          </a>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="services">
        <div className="wrap">
          <div className="section-center">
            <h2 className="font-poppins">Nos Services</h2>
            <div className="rule" />
            <p>
              Une gamme de services conçus pour rendre les soins plus simples,
              rapides et accessibles.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              if (i === 0) {
                return (
                  <div className="service-card service-card--featured" key={s.title}>
                    <div className="service-card__icon">
                      <Icon size={30} />
                    </div>
                    <div className="service-card__body">
                      <h3 className="font-poppins">{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                    <a href="#contact" className="chip-dark">
                      Télécharger
                    </a>
                  </div>
                );
              }
              return (
                <div className="service-card" key={s.title}>
                  <div className="service-card__icon">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-poppins">{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="chip-dark">
                    Télécharger
                  </a>
                </div>
              );
            })}
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
              src={`${CDN}/670f885de587b3675c7f85ee/b3b1675e-646c-48d5-befa-d3e1aed8b4a6/74423.jpg.jpeg?content-type=image%2Fjpeg`}
              alt="Diaspo Silver"
            />
            <div className="plan__body">
              <div className="plan__title-row">
                <span className="plan__dot" style={{ background: "#9AA7B2" }} />
                <h3>Diaspo Silver</h3>
              </div>
              <div className="plan__price">Couverture 80% des soins courants</div>
              <p className="plan__desc">
                Une réponse stratégique aux besoins de santé fondamentaux, via un
                réseau sélectionné d&apos;établissements publics et
                confessionnels.
              </p>
              <a href="#contact" className="plan__cta-outline">
                Choisir Silver
              </a>
            </div>
          </div>

          {/* Gold */}
          <div className="plan plan--gold">
            <div className="plan__media">
              <img
                src={`${CDN}/670f885de587b3675c7f85ee/baf5f793-c639-481a-9fd9-53f86291219e/19507.jpg.jpeg?content-type=image%2Fjpeg`}
                alt="Diaspo Gold"
              />
              <span className="plan__tag">POPULAIRE</span>
            </div>
            <div className="plan__body">
              <div className="plan__title-row">
                <span className="plan__dot" style={{ background: "#F5A623" }} />
                <h3>Diaspo Gold</h3>
              </div>
              <div className="plan__price">80% + plafonds rehaussés</div>
              <p className="plan__desc">
                Plus de latitude thérapeutique et un accès facilité à un réseau
                étendu d&apos;hôpitaux publics et privés d&apos;excellence au
                Cameroun.
              </p>
              <a href="#contact" className="plan__cta-solid">
                Choisir Gold
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="plan">
            <img
              src={`${CDN}/670f885de587b3675c7f85ee/e2b8c576-42a3-486e-b799-68fadadd7aa7/16515+%282%29.jpg.jpeg?content-type=image%2Fjpeg`}
              alt="Diaspo Premium"
            />
            <div className="plan__body">
              <div className="plan__title-row">
                <span className="plan__dot" style={{ background: "#F5A623" }} />
                <h3>Diaspo Premium</h3>
              </div>
              <div className="plan__price">Sécurité sanitaire intégrale</div>
              <p className="plan__desc">
                Réseau complet, ambulances médicalisées (Yaoundé &amp; Douala) et
                coordination d&apos;évacuation sanitaire (EVASAN) à
                l&apos;étranger.
              </p>
              <a href="#contact" className="plan__cta-outline">
                Choisir Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="why">
        <div className="why__dots" />
        <div className="why__inner">
          <div className="why__grid">
            <div>
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
            </div>
            <div className="why__cards">
              {whyCards.map((c) => (
                <div className="why-card" key={c.n}>
                  <div className="why-card__n">{c.n}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
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
              <div className="testi-card__stars">★★★★★</div>
              <p className="testi-card__quote">{t.quote}</p>
              <div className="testi-card__who">
                <img src={t.img} alt={t.name} />
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
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
      <footer className="footer">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <span className="footer__brand-mark">
                <img src="/logo.webp" alt="SOSAN" />
              </span>
              SOSAN
            </div>
            <p className="footer__about">
              Votre solution santé pour tous. La plateforme qui rapproche
              l&apos;Afrique des soins fiables, rapides et accessibles.
            </p>
            <div className="footer__stores">
              <StoreButtons height={40} />
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <div className="footer__links">
              <a href="#about">Qui sommes-nous</a>
              <a href="#services">Nos services</a>
              <a href="#diaspo">Diaspo Support</a>
              <a href="#partners">Partenaires</a>
            </div>
          </div>
          <div>
            <h4>Ressources</h4>
            <div className="footer__links">
              <a href={PARTNER_FORM} target="_blank" rel="noopener noreferrer">
                Devenir partenaire
              </a>
              <span className="footer__link-disabled" aria-disabled="true">
                Politique de confidentialité
              </span>
              <span className="footer__link-disabled" aria-disabled="true">
                Conditions générales
              </span>
              <a href="#contact">Nous contacter</a>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer__contact">
              <span>
                <IconMapPin size={16} /> Douala &amp; Yaoundé, Cameroun
              </span>
              <span>
                <IconMail size={16} /> contact@sosanmed.com
              </span>
              <div className="footer__social">
                <span className="footer__link-disabled" aria-disabled="true">
                  f
                </span>
                <span className="footer__link-disabled" aria-disabled="true">
                  in
                </span>
                <span className="footer__link-disabled" aria-disabled="true">
                  ▶
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          © 2026 SOSAN Med. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
