import Header from "./Header";
import Footer from "./Footer";
import { CONTACT_EMAIL } from "./constants";

export type Block =
  | { kind: "p"; text: string }
  /** Enumerated clauses or steps. */
  | { kind: "ul"; items: string[] }
  /** All-caps statutory disclaimers, set apart so the wall of caps stays readable. */
  | { kind: "disclaimer"; paragraphs: string[] }
  /** Call-out inside a section. */
  | { kind: "note"; title: string; paragraphs: string[] };

export type Section = {
  /** Anchor + table-of-contents target. */
  id: string;
  heading: string;
  /** Replaces the automatic "N." prefix — e.g. "Étape 1" in the deletion guide. */
  label?: string;
  /** Starts a new titled part above this section (documents split into guides). */
  part?: { title: string; intro?: string };
  blocks: Block[];
};

export type LegalDocument = {
  title: string;
  /** Standfirst under the page title. */
  intro: string;
  sections: Section[];
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

/**
 * Groups sections under their part heading. Documents without parts come back
 * as a single untitled group, so the table of contents stays flat for them.
 */
function groupByPart(sections: Section[]) {
  const groups: { part?: Section["part"]; sections: Section[] }[] = [];
  for (const section of sections) {
    if (section.part || groups.length === 0) {
      groups.push({ part: section.part, sections: [section] });
    } else {
      groups[groups.length - 1].sections.push(section);
    }
  }
  return groups;
}

export default function LegalDoc({ doc }: { doc: LegalDocument }) {
  // Numbering restarts per part, so a guide's steps read 1..6, not 1..12.
  const groups = groupByPart(doc.sections);

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="legal-hero">
          <div className="wrap">
            <span className="kicker">Informations légales</span>
            <h1>{doc.title}</h1>
            <p>{doc.intro}</p>
          </div>
        </section>

        <section className="legal">
          <div className="wrap legal__wrap">
            <nav className="legal__toc" aria-labelledby="toc-title">
              <h2 id="toc-title">Sommaire</h2>
              {groups.map((group, g) => (
                <div key={g} className="legal__toc-group">
                  {group.part && <h3>{group.part.title}</h3>}
                  <ol>
                    {group.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.heading}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </nav>

            <div className="legal__body">
              {groups.map((group, g) => (
                <div key={g}>
                  {group.part && (
                    <div className="legal__part">
                      <h2>{group.part.title}</h2>
                      {group.part.intro && <p>{group.part.intro}</p>}
                    </div>
                  )}
                  {group.sections.map((section, index) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="legal__section"
                    >
                      <h2>
                        <span className="legal__num">
                          {section.label ?? `${index + 1}.`}
                        </span>
                        {section.heading}
                      </h2>
                      {section.blocks.map(renderBlock)}
                    </section>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
