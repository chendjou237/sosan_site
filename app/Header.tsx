"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "Qui sommes-nous" },
  { href: "/services", label: "Services" },
  { href: "/diaspo", label: "Diaspo Support" },
  { href: "/actualites", label: "Actualités" },
  { href: "/#partners", label: "Partenaires" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="header">
      <div className="header__inner">
        <a href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">
            <img src="/logo.webp" alt="SOSAN" />
          </span>
          SOSAN
        </a>
        <nav className="nav">
          {NAV_LINKS.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <span className="lang">FR ▾</span>
          <a href="#contact" className="btn-dark">
            Télécharger l&apos;app
          </a>
          <button
            type="button"
            className={`menu-toggle${open ? " menu-toggle--open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      </header>

      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`}>
        <nav className="mobile-nav__links">
          {NAV_LINKS.map((l) => (
            <a href={l.href} key={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <span className="lang">FR ▾</span>
          <a href="#contact" className="btn-dark" onClick={() => setOpen(false)}>
            Télécharger l&apos;app
          </a>
        </div>
      </div>
    </>
  );
}
