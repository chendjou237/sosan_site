import { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import StoreButtons from "../StoreButtons";
import Reveal from "../Reveal";
import Mockup from "../Mockup";
import ContactSection from "../ContactSection";
import { PARTNER_FORM, partners } from "../constants";
import {
  resolveSrc,
  planPhotos,
  homeAbout,
  testimonialAvatars,
  newsCover,
} from "../assets";
import { getContent } from "../content";
import { latestPosts, formatDate, categoryMod } from "../content/news";
import { ui } from "../i18n/ui";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  localePath,
} from "../i18n/config";
import {
  IconVideoCall,
  IconCreditCard,
  IconUsers,
  IconShield,
  IconMessageCircle,
  IconFlask,
  IconCheckCircle,
  IconGlobe,
} from "../icons";

/** Index-aligned with `services.items`; locale-independent. */
const SERVICE_ICONS = [IconVideoCall, IconCreditCard, IconUsers, IconShield];
const PROOF_ICONS = [IconVideoCall, IconCreditCard, IconGlobe];
const BANNER_ICONS = [IconMessageCircle, IconFlask, IconShield];
const PLAN_DOT: Record<string, string> = {
  silver: "#9AA7B2",
  gold: "var(--gold)",
  premium: "var(--gold)",
};

export const generateStaticParams = localeParams;

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const c = getContent(lang);
  const t = c.home;
  const chrome = ui(lang);
  const featured = t.services.items[0];
  const FeaturedIcon = SERVICE_ICONS[0];
  const teaserPosts = latestPosts(c.news.posts);

  return (
    <>
      <Header lang={lang} />

      <main id="main-content">
        {/* ===== HERO ===== */}
        <section id="top" className="hero">
          <div className="hero__dots" />
          <div className="hero__glow" />
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="badge">
                <span className="badge__dot" />
                {t.hero.badge}
              </span>
              <h1>
                {t.hero.title.lead} <span>{t.hero.title.accent}</span>
              </h1>
              <p className="hero__lead">{t.hero.lead}</p>
              <div className="hero__cta">
                <div className="store-row">
                  <StoreButtons lang={lang} />
                </div>
                <a
                  href={localePath(lang, "/diaspo/")}
                  className="hero__secondary"
                >
                  {t.hero.secondaryCta} <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className="hero__trust">
                <IconShield size={15} />
                {t.hero.trust}
              </p>
              <div className="stats">
                {t.hero.stats.map((s, i) => (
                  <Fragment key={s.label}>
                    {i > 0 && <div className="stat__sep" />}
                    <div>
                      <div className="stat__num">{s.num}</div>
                      <div className="stat__label">{s.label}</div>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="hero__media">
              <div className="hero__frame">
                <img src="/hero.png" alt={t.hero.imageAlt} />
              </div>
              <div className="float-card float-card--amb">
                <span className="float-card__icon">
                  <IconCheckCircle size={22} />
                </span>
                <div>
                  <div className="float-card__title">
                    {t.hero.ambassadorName}
                  </div>
                  <div className="float-card__sub">
                    {t.hero.ambassadorRole}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST BAR ===== */}
        <section className="trustbar" aria-label={t.trustbar.ariaLabel}>
          <div className="trustbar__inner">
            <p className="trustbar__label">{t.trustbar.label}</p>
            <div className="trustbar__logos">
              {partners.slice(0, 6).map((p, i) => (
                <img
                  key={i}
                  src={p.src}
                  alt={t.trustbar.logoAlt}
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
              <span className="pill-new">{t.banner.tag}</span>
              <h2 className="font-poppins">{t.banner.title}</h2>
              <p className="banner__lead">{t.banner.lead}</p>
              <div className="banner__feats">
                {t.banner.features.map((f, i) => {
                  const Icon = BANNER_ICONS[i];
                  return (
                    <div className="banner__feat" key={f}>
                      <Icon size={18} /> {f}
                    </div>
                  );
                })}
              </div>
              <a href="#contact" className="btn-green banner__cta">
                <IconMessageCircle size={18} />
                {t.banner.cta}
              </a>
            </div>
            <div className="banner__assistant">
              <img src="/whatsapp-assistant.png" alt={t.banner.imageAlt} />
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <Reveal className="about__media">
            <img
              src={resolveSrc(homeAbout) ?? undefined}
              alt={t.about.imageAlt}
            />
            <div className="about__float">
              <span className="about__float-dot" />
              <div>
                <div className="about__float-title">{t.about.floatTitle}</div>
                <div className="about__float-sub">{t.about.floatSub}</div>
              </div>
            </div>
          </Reveal>
          <Reveal className="about__copy" delay={120}>
            <span className="eyebrow">{t.about.kicker}</span>
            <h2>{t.about.title}</h2>
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="about__proof">
              {t.about.proof.map((item, i) => {
                const Icon = PROOF_ICONS[i];
                return (
                  <li key={item}>
                    <span className="about__proof-ic">
                      <Icon size={16} />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <a href={localePath(lang, "/about/")} className="btn-green">
              {t.about.cta} →
            </a>
          </Reveal>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="services">
          <div className="wrap">
            <Reveal className="section-center">
              <h2 className="font-poppins">{t.services.title}</h2>
              <div className="rule" />
              <p>{t.services.lead}</p>
            </Reveal>
            <div className="services-grid">
              <Reveal className="service-card service-card--featured">
                <div className="service-card__icon service-card__icon--lg">
                  <FeaturedIcon size={34} />
                </div>
                <div className="service-card__body">
                  <span className="service-card__tag">
                    {t.services.featuredTag}
                  </span>
                  <h3 className="font-poppins">{featured.title}</h3>
                  <p>{featured.desc}</p>
                </div>
                <a href="#contact" className="btn-green service-card__cta">
                  {t.services.featuredCta} →
                </a>
              </Reveal>
              {t.services.items.slice(1).map((s, i) => {
                const Icon = SERVICE_ICONS[i + 1];
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
                      {t.services.itemCta} <span aria-hidden="true">→</span>
                    </span>
                  </Reveal>
                );
              })}
            </div>
            <div className="services-more">
              <a href={localePath(lang, "/services/")} className="btn-green">
                {t.services.moreCta} →
              </a>
              <span>{t.services.moreNote}</span>
            </div>
          </div>
        </section>

        {/* ===== DIASPO ===== */}
        <section id="diaspo" className="diaspo">
          <div className="diaspo__head">
            <span className="eyebrow">{t.plans.kicker}</span>
            <h2>{t.plans.title}</h2>
            <p>{t.plans.lead}</p>
          </div>
          <div className="grid-3">
            {t.plans.items.map((p) => {
              const src = resolveSrc(planPhotos[p.key]) ?? undefined;
              return (
                <div
                  className={`plan${p.featured ? " plan--gold" : ""}`}
                  key={p.key}
                >
                  {p.featured ? (
                    <div className="plan__media">
                      <img src={src} alt={p.name} loading="lazy" />
                      {p.tag && <span className="plan__tag">{p.tag}</span>}
                    </div>
                  ) : (
                    <img src={src} alt={p.name} loading="lazy" />
                  )}
                  <div className="plan__body">
                    <div className="plan__title-row">
                      <span
                        className="plan__dot"
                        style={{ background: PLAN_DOT[p.key] }}
                      />
                      <h3>{p.name}</h3>
                    </div>
                    <div className="plan__amount">
                      <strong>{p.price}</strong>
                      <span>{p.perMonth}</span>
                    </div>
                    <div className="plan__price">{p.summary}</div>
                    <p className="plan__desc">{p.desc}</p>
                    <a
                      href={localePath(lang, "/diaspo/")}
                      className={
                        p.featured ? "plan__cta-solid" : "plan__cta-outline"
                      }
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="diaspo__more">
            <a href={localePath(lang, "/diaspo/")} className="btn-green">
              {t.plans.moreCta} →
            </a>
            <span>{t.plans.moreNote}</span>
          </div>
        </section>

        {/* ===== WHY JOIN ===== */}
        <section className="why">
          <div className="why__dots" />
          <div className="why__inner">
            <div className="why__grid">
              <Reveal>
                <span className="why__eyebrow">{t.why.kicker}</span>
                <h2>{t.why.title}</h2>
                <p className="why__lead">{t.why.lead}</p>
                <a
                  href={PARTNER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  {t.why.cta} →
                </a>
              </Reveal>
              <div className="why__cards">
                {t.why.items.map((c, i) => (
                  <Reveal className="why-card" key={c.title} delay={i * 90}>
                    <div className="why-card__n">{i + 1}</div>
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
            <h2>{t.partners.title}</h2>
            <p className="partners__sub">{t.partners.lead}</p>
            <div className="marquee">
              <div className="marquee__track">
                {[...partners, ...partners].map((p, i) => (
                  <img
                    key={i}
                    src={p.src}
                    alt={t.partners.logoAlt}
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
            <span className="eyebrow">{t.testimonials.kicker}</span>
            <h2>
              {t.testimonials.title.lead}{" "}
              <span>{t.testimonials.title.accent}</span>
            </h2>
          </div>
          <div className="grid-3 testi__grid">
            {t.testimonials.items.map((item) => (
              <div className="testi-card" key={item.name}>
                <div
                  className="testi-card__stars"
                  role="img"
                  aria-label={chrome.rating}
                >
                  ★★★★★
                </div>
                <p className="testi-card__quote">{item.quote}</p>
                <div className="testi-card__who">
                  <img
                    src={resolveSrc(testimonialAvatars[item.avatar]) ?? undefined}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div>
                    <div className="testi-card__name">{item.name}</div>
                    <div className="testi-card__role">{item.role}</div>
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
                <span className="eyebrow">{c.news.teaser.kicker}</span>
                <h2>{c.news.teaser.title}</h2>
                <p>{c.news.teaser.lead}</p>
              </div>
              <a
                href={localePath(lang, "/actualites/")}
                className="news-more"
              >
                {c.news.teaser.seeAll} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid-3">
              {teaserPosts.map((post, i) => (
                <Reveal
                  as="a"
                  href={localePath(lang, "/actualites/")}
                  className="news-card"
                  key={post.slug}
                  delay={i * 90}
                >
                  <Mockup
                    asset={newsCover(post.slug, post.title)}
                    lang={lang}
                    variant="photo"
                    className="news-card__media"
                  />
                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span
                        className={`news-card__cat news-card__cat--${
                          categoryMod[post.category]
                        }`}
                      >
                        {c.news.categoryLabels[post.category]}
                      </span>
                      <span className="news-card__date">
                        {formatDate(post.date, lang)}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p className="news-card__excerpt">{post.excerpt}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection content={t.contact} lang={lang} />
      </main>

      {/* ===== FOOTER ===== */}
      <Footer lang={lang} />
    </>
  );
}
