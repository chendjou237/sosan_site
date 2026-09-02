import StoreButtons from "./StoreButtons";
import { PARTNER_FORM, CONTACT_EMAIL } from "./constants";
import { IconMapPin, IconMail } from "./icons";
import { localePath, type Locale } from "./i18n/config";
import { ui } from "./i18n/ui";

export default function Footer({ lang }: { lang: Locale }) {
  const t = ui(lang);
  const p = (path: string) => localePath(lang, path);

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">
            <span className="footer__brand-mark">
              <img src="/logo.webp" alt={t.header.logoAlt} />
            </span>
            SOSAN
          </div>
          <p className="footer__about">{t.footer.about}</p>
          <div className="footer__stores">
            <StoreButtons lang={lang} height={40} />
          </div>
        </div>
        <div>
          <h4>{t.footer.navHeading}</h4>
          <div className="footer__links">
            <a href={p("/about/")}>{t.nav.about}</a>
            <a href={p("/services/")}>{t.footer.servicesLink}</a>
            <a href={p("/diaspo/")}>{t.nav.diaspo}</a>
            <a href={p("/actualites/")}>{t.nav.news}</a>
            <a href={p("/#partners")}>{t.nav.partners}</a>
          </div>
        </div>
        <div>
          <h4>{t.footer.resourcesHeading}</h4>
          <div className="footer__links">
            <a href={PARTNER_FORM} target="_blank" rel="noopener noreferrer">
              {t.footer.becomePartner}
            </a>
            <a href={p("/privacy-policy/")}>{t.footer.privacy}</a>
            <a href={p("/terms/")}>{t.footer.terms}</a>
            <a href={p("/account-deletion/")}>{t.footer.accountDeletion}</a>
            <a href={p("/#contact")}>{t.footer.contactUs}</a>
          </div>
        </div>
        <div>
          <h4>{t.footer.contactHeading}</h4>
          <div className="footer__contact">
            <span>
              <IconMapPin size={16} /> {t.footer.address}
            </span>
            <span>
              <IconMail size={16} /> {CONTACT_EMAIL}
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
      <div className="footer__bottom">{t.footer.rights}</div>
    </footer>
  );
}
