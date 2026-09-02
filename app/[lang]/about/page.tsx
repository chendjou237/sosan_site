import Header from "../../Header";
import Footer from "../../Footer";
import ContactSection from "../../ContactSection";
import { resolveSrc, aboutGallery, aboutVision } from "../../assets";
import { IconCheckCircle, IconMapPin, IconGlobe } from "../../icons";
import { getContent } from "../../content";
import {
  localeParams,
  isLocale,
  DEFAULT_LOCALE,
  localePath,
} from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";

const AP = aboutGallery.map((a) => resolveSrc(a) ?? undefined);
const VISION_IMG = resolveSrc(aboutVision) ?? undefined;

export const generateStaticParams = localeParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const { about } = getContent(lang);
  return pageMetadata({ lang, path: "/about/", ...about.meta });
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const t = getContent(lang).about;

  return (
    <>
      <Header lang={lang} />
      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <div className="about-hero__copy">
              <span className="kicker">{t.hero.kicker}</span>
              <h1>
                {t.hero.title.lead}
                <br />
                <span>{t.hero.title.accent}</span>
              </h1>
              <p>{t.hero.lead}</p>
              <div className="about-hero__meta">
                <span>
                  <IconMapPin size={18} /> {t.hero.location}
                </span>
                <span>
                  <IconGlobe size={18} /> {t.hero.diaspora}
                </span>
              </div>
            </div>
            <div className="about-hero__gallery">
              {AP.map((src, i) => (
                <img key={i} src={src} alt={t.hero.galleryAlt} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="vision">
          <div className="vision__media">
            <img src={VISION_IMG} alt={t.vision.imageAlt} />
          </div>
          <div className="vision__body">
            <h2>{t.vision.title}</h2>
            {t.vision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="vision__note">{t.vision.note}</div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="values">
          <div className="wrap">
            <div className="values__head">
              <h2>{t.values.title}</h2>
              <p>{t.values.lead}</p>
            </div>
            <div className="values__grid">
              {t.values.items.map((v) => (
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
              <span className="kicker kicker--light">{t.diaspoCta.kicker}</span>
              <h2>{t.diaspoCta.title}</h2>
              <p>{t.diaspoCta.lead}</p>
              <a href={localePath(lang, "/diaspo/")} className="btn-green">
                {t.diaspoCta.cta} →
              </a>
            </div>
            <div className="diaspo-cta__figures">
              {t.diaspoCta.figures.map((f) => (
                <div key={f.label}>
                  <div className="diaspo-cta__num">{f.num}</div>
                  <div className="diaspo-cta__label">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection content={t.contact} lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  );
}
