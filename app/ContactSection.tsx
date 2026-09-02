import ContactForm from "./ContactForm";
import { IconMapPin, IconGlobe } from "./icons";
import type { ContactBlock } from "./content/types";
import type { Locale } from "./i18n/config";

/**
 * The contact block, shared by the home and about pages — they previously
 * carried near-identical markup with independently drifting copy.
 */
export default function ContactSection({
  content,
  lang,
}: {
  content: ContactBlock;
  lang: Locale;
}) {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__card">
          <div>
            <h2>{content.title}</h2>
            <p className="contact__lead">{content.lead}</p>
            <div className="contact__meta">
              <div>
                <IconMapPin size={18} /> {content.location}
              </div>
              <div>
                <IconGlobe size={18} /> {content.diaspora}
              </div>
            </div>
          </div>
          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}
