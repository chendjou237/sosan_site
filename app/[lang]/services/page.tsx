import Header from "../../Header";
import Footer from "../../Footer";
import StoreButtons from "../../StoreButtons";
import Reveal from "../../Reveal";
import Mockup from "../../Mockup";
import { serviceScreens } from "../../assets";
import { PARTNER_FORM } from "../../constants";
import { getContent } from "../../content";
import { ui } from "../../i18n/ui";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  localePath,
} from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";
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
} from "../../icons";

/** Icons are locale-independent; index-aligned with the content arrays. */
const SERVICE_ICONS = [
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
];
const WHY_ICONS = [
  IconCreditCard,
  IconGlobe,
  IconMapPin,
  IconCheckCircle,
  IconUsers,
];
const STEP_ICONS = [
  IconMapPin,
  IconCalendarCheck,
  IconCreditCard,
  IconCheckCircle,
];
const CHIP_ICONS = [IconCreditCard, IconGlobe, IconMapPin];

export const generateStaticParams = localeParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const { services } = getContent(lang);
  return pageMetadata({ lang, path: "/services/", ...services.meta });
}

export default async function Services({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = getContent(lang).services;
  const chrome = ui(lang);

  return (
    <>
      <Header lang={lang} />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="srv-hero">
          <div className="srv-hero__inner">
            <Reveal className="srv-hero__copy">
              <span className="kicker">{t.hero.kicker}</span>
              <h1>
                {t.hero.title.lead} <span>{t.hero.title.accent}</span>
              </h1>
              <p>{t.hero.lead}</p>
              <div className="srv-hero__stores">
                <StoreButtons lang={lang} />
              </div>
              <ul className="srv-hero__meta">
                {t.hero.chips.map((chip, i) => {
                  const Icon = CHIP_ICONS[i];
                  return (
                    <li key={chip}>
                      <Icon size={16} /> {chip}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
            <Reveal className="srv-hero__panel" delay={120}>
              <img src="/app-mockup.png" alt={chrome.mockup.appScreensAlt} />
            </Reveal>
          </div>
        </section>

        {/* ===== CORE SERVICES ===== */}
        <section className="srv-services">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">{t.servicesSection.title}</h2>
              <div className="rule" />
              <p>{t.servicesSection.lead}</p>
            </div>
            <div className="srv-grid">
              {t.services.map((s, i) => {
                const Icon = SERVICE_ICONS[i];
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
                        {t.servicesSection.seePlans}{" "}
                        <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </>
                );
                const inner = isWide ? (
                  <>
                    <div className="srv-card__text">{text}</div>
                    <Mockup
                      asset={screen}
                      lang={lang}
                      variant="photo"
                      className="srv-card__photo"
                    />
                  </>
                ) : (
                  <>
                    <Mockup
                      asset={screen}
                      lang={lang}
                      variant="photo"
                      className="srv-card__media"
                    />
                    {text}
                  </>
                );
                return s.href ? (
                  <Reveal
                    as="a"
                    href={localePath(lang, s.href)}
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
              <span className="kicker kicker--light">{t.why.kicker}</span>
              <h2>{t.why.title}</h2>
            </Reveal>
            <div className="srv-why__grid">
              {t.why.items.map((w, i) => {
                const Icon = WHY_ICONS[i];
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
              <h2 className="font-poppins">{t.steps.title}</h2>
              <div className="rule" />
              <p>{t.steps.lead}</p>
            </div>
            <ol className="srv-steps__grid">
              {t.steps.items.map((s, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <Reveal
                    as="li"
                    className="srv-step"
                    key={s.title}
                    delay={i * 80}
                  >
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
                <span className="kicker">{t.pros.kicker}</span>
                <h2>{t.pros.title}</h2>
                <p>{t.pros.lead}</p>
                <a
                  href={PARTNER_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  {chrome.footer.becomePartner} →
                </a>
              </Reveal>
              <div className="srv-pros__list">
                {t.pros.items.map((p, i) => (
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
            <h2>{t.cta.title}</h2>
            <p>{t.cta.lead}</p>
            <div className="srv-final__stores">
              <StoreButtons lang={lang} height={52} />
            </div>
            <a href={localePath(lang, "/#contact")} className="srv-final__link">
              {t.cta.button} →
            </a>
          </Reveal>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
