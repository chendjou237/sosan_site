import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import { CONTACT_EMAIL } from "../constants";
import { documentTitle, sections, type Block } from "./content";

export const metadata: Metadata = {
  title: "Termes et conditions d’utilisation — SOSAN",
  description:
    "Termes et conditions d’utilisation de SOSAN : objet de l’application, collecte et protection des données personnelles, suppression de compte, obligations des professionnels de santé, remboursements et contact.",
};

/** Renders text, turning the contact address into a mailto link. */
function withEmailLinks(text: string) {
  const parts = text.split(CONTACT_EMAIL);
  if (parts.length === 1) return text;
  return parts.flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>,
          part,
        ]
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case "p":
      return <p key={i}>{withEmailLinks(block.text)}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{withEmailLinks(item)}</li>
          ))}
        </ul>
      );
    case "disclaimer":
      return (
        <div key={i} className="legal__disclaimer">
          {block.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </div>
      );
    case "note":
      return (
        <aside key={i} className="legal__note">
          <h3>{block.title}</h3>
          {block.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </aside>
      );
  }
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="legal-hero">
          <div className="wrap">
            <span className="kicker">Informations légales</span>
            <h1>{documentTitle}</h1>
            <p>
              Ces conditions encadrent l’utilisation de l’application et de la
              plateforme SOSAN, y compris la collecte et la protection de vos
              données personnelles et de santé.
            </p>
          </div>
        </section>

        <section className="legal">
          <div className="wrap legal__wrap">
            <nav className="legal__toc" aria-labelledby="toc-title">
              <h2 id="toc-title">Sommaire</h2>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="legal__body">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="legal__section"
                >
                  <h2>
                    <span className="legal__num">{index + 1}.</span>
                    {section.heading}
                  </h2>
                  {section.blocks.map(renderBlock)}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
