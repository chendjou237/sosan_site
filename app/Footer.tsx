import StoreButtons from "./StoreButtons";
import { PARTNER_FORM } from "./constants";
import { IconMapPin, IconMail } from "./icons";

export default function Footer() {
  return (
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
            <a href="/about">Qui sommes-nous</a>
            <a href="/#services">Nos services</a>
            <a href="/diaspo">Diaspo Support</a>
            <a href="/#partners">Partenaires</a>
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
            <a href="/#contact">Nous contacter</a>
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
  );
}
