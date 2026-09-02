import Header from "../../Header";
import Footer from "../../Footer";
import StoreButtons from "../../StoreButtons";
import { partners, PHONE_FR, PHONE_CM } from "../../constants";
import { resolveSrc, planPhotos, diaspoHero } from "../../assets";
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
  IconCheckCircle,
  IconUsers,
  IconVideoCall,
  IconCreditCard,
  IconShield,
  IconMessageCircle,
  IconGlobe,
} from "../../icons";

const HERO_IMG = resolveSrc(diaspoHero) ?? undefined;

/** Index-aligned with `care.items`; locale-independent. */
const CARE_ICONS = [IconUsers, IconVideoCall, IconCreditCard, IconShield];
const BEYOND_ICONS = [IconUsers, IconGlobe];
/** Plan bullet colours, keyed by plan — presentation, not copy. */
const PLAN_DOT: Record<string, string> = {
  silver: "#9AA7B2",
  gold: "var(--gold)",
  premium: "var(--gold)",
};

export const generateStaticParams = localeParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const { diaspo } = getContent(lang);
  return pageMetadata({ lang, path: "/diaspo/", ...diaspo.meta });
}

export default async function Diaspo({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = getContent(lang).diaspo;
  const chrome = ui(lang);

  return (
    <>
      <Header lang={lang} />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="dia-hero">
          <div className="dia-hero__inner">
            <div className="dia-hero__copy">
              <span className="kicker">{t.hero.kicker}</span>
              <h1>
                {t.hero.title.lead} <span>{t.hero.title.accent}</span>
              </h1>
              <p>{t.hero.lead}</p>
              <div className="dia-hero__actions">
                <a href="#formules" className="btn-green">
                  {t.hero.cta}
                </a>
                <a href={`tel:${PHONE_FR.tel}`} className="btn-outline-dark">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="dia-hero__media">
              <img src={HERO_IMG} alt={t.hero.imageAlt} />
              <div className="dia-hero__badge">
                <span className="dia-hero__badge-num">{t.hero.badgeNum}</span>
                <span className="dia-hero__badge-label">
                  {t.hero.badgeLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
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

        {/* ===== PRESTATIONS ===== */}
        <section className="dia-cover">
          <div className="wrap">
            <div className="dia-cover__head">
              <h2>{t.covered.title}</h2>
              <p>{t.covered.lead}</p>
            </div>
            <ul className="dia-cover__list">
              {t.covered.items.map((p) => (
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
              <h2 className="font-poppins">{t.plans.title}</h2>
              <div className="rule" />
              <p>{t.plans.lead}</p>
            </div>
            <div className="grid-3">
              {t.plans.items.map((f) => {
                const photo = planPhotos[f.key];
                const src = photo ? resolveSrc(photo) : null;
                return (
                  <div
                    className={`plan${f.featured ? " plan--gold" : ""}`}
                    key={f.key}
                  >
                    {src && (
                      <div className="plan__media">
                        <img src={src} alt={f.name} loading="lazy" />
                      </div>
                    )}
                    <div className="plan__body">
                      <div className="plan__title-row">
                        <span
                          className="plan__dot"
                          style={{ background: PLAN_DOT[f.key] }}
                        />
                        <h3>{f.name}</h3>
                        {f.tag && (
                          <span className="plan__inline-tag">{f.tag}</span>
                        )}
                      </div>
                      <div className="plan__amount">
                        <strong>{f.price}</strong>
                        <span>{f.perMonth}</span>
                      </div>
                      <div className="plan__price">{f.lead}</div>
                      <p className="plan__desc">{f.desc}</p>
                      {f.highlight && (
                        <p className="plan__highlight">
                          <IconGlobe size={16} />
                          {f.highlight}
                        </p>
                      )}
                      <a
                        href="#souscrire"
                        className={
                          f.featured ? "plan__cta-solid" : "plan__cta-outline"
                        }
                      >
                        {f.cta}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== PRICING TABLE ===== */}
        <section className="dia-table">
          <div className="wrap">
            <div className="dia-table__head">
              <h2>{t.pricing.title}</h2>
              <p>{t.pricing.lead}</p>
            </div>
            <div className="dia-table__scroll">
              <table>
                <thead>
                  <tr>
                    <th>{t.pricing.profileHeader}</th>
                    {t.plans.items.map((p) => (
                      <th
                        key={p.key}
                        className={p.featured ? "is-featured" : undefined}
                      >
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.pricing.rows.map((row) => (
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
            <p className="dia-table__note">{t.pricing.footnote}</p>
          </div>
        </section>

        {/* ===== DIASPO CARE ===== */}
        <section className="dia-care">
          <div className="wrap">
            <div className="dia-care__head">
              <span className="kicker kicker--light">{t.care.kicker}</span>
              <h2>{t.care.title}</h2>
              <p>{t.care.lead}</p>
            </div>
            <div className="dia-care__grid">
              {t.care.items.map((c, i) => {
                const Icon = CARE_ICONS[i];
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
              <span className="kicker">{t.subscribe.kicker}</span>
              <h2>{t.subscribe.title}</h2>
              <ol className="dia-steps">
                {t.subscribe.steps.map((s, i) => (
                  <li key={s}>
                    <span className="dia-steps__n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <div className="dia-subscribe__stores">
                <span>{t.subscribe.storesLead}</span>
                <div className="store-row">
                  <StoreButtons lang={lang} height={48} />
                </div>
              </div>
            </div>
            <div className="dia-subscribe__call">
              <div className="dia-call-card">
                <IconMessageCircle size={26} />
                <h3>{t.subscribe.callTitle}</h3>
                <p>{t.subscribe.callLead}</p>
                <a href={`tel:${PHONE_FR.tel}`}>{PHONE_FR.display}</a>
                <a href={`tel:${PHONE_CM.tel}`}>{PHONE_CM.display}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BEYOND INSURANCE ===== */}
        <section className="dia-beyond">
          <div className="wrap">
            <div className="section-center">
              <h2 className="font-poppins">{t.beyond.title}</h2>
              <div className="rule" />
              <p>{t.beyond.lead}</p>
            </div>
            <div className="dia-beyond__grid">
              {t.beyond.items.map((b, i) => {
                const Icon = BEYOND_ICONS[i];
                return (
                  <div className="dia-beyond__card" key={b.title}>
                    <span className="dia-beyond__tag">{b.tag}</span>
                    <Icon size={26} />
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== MODALITÉS ===== */}
        <section className="dia-terms">
          <div className="wrap">
            <h2>{t.terms.title}</h2>
            <ul>
              {t.terms.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== TESTIMONIAL ===== */}
        <section className="dia-testi">
          <div className="dia-testi__card">
            <div
              className="testi-card__stars"
              role="img"
              aria-label={chrome.rating}
            >
              ★★★★★
            </div>
            <p className="dia-testi__quote">{t.testimonial.quote}</p>
            <div className="dia-testi__who">
              <span className="dia-testi__name">{t.testimonial.name}</span>
              <span className="dia-testi__role">{t.testimonial.role}</span>
            </div>
          </div>
        </section>

        {/* ===== CONTACT CTA ===== */}
        <section className="dia-final">
          <div className="dia-final__card">
            <h2>{t.final.title}</h2>
            <p>{t.final.lead}</p>
            <div className="dia-final__actions">
              <a href={`tel:${PHONE_FR.tel}`} className="btn-green">
                {t.final.cta}
              </a>
              <a
                href={localePath(lang, "/#contact")}
                className="btn-outline-light"
              >
                {t.final.secondaryCta}
              </a>
            </div>
            <p className="dia-final__phones">
              {PHONE_FR.display} &nbsp;·&nbsp; {PHONE_CM.display}
            </p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
