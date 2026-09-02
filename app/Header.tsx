"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABEL,
  localePath,
  swapLocale,
  type Locale,
} from "./i18n/config";
import { ui } from "./i18n/ui";

/** Locale-independent paths; labels come from the UI dictionary. */
const NAV = [
  { path: "/about/", key: "about" },
  { path: "/services/", key: "services" },
  { path: "/diaspo/", key: "diaspo" },
  { path: "/actualites/", key: "news" },
  { path: "/#partners", key: "partners" },
  { path: "/#contact", key: "contact" },
] as const;

function LangSwitch({
  lang,
  label,
  onNavigate,
}: {
  lang: Locale;
  label: string;
  onNavigate?: () => void;
}) {
  // Falls back to the home page of the target locale during prerender, when
  // there is no pathname yet.
  const pathname = usePathname();

  return (
    <div className="lang" role="group" aria-label={label}>
      {LOCALES.map((l) => {
        const active = l === lang;
        return (
          <a
            key={l}
            href={pathname ? swapLocale(pathname, l) : localePath(l)}
            className={`lang__opt${active ? " lang__opt--active" : ""}`}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
          >
            {LOCALE_LABEL[l]}
          </a>
        );
      })}
    </div>
  );
}

export default function Header({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const t = ui(lang);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = NAV.map((l) => ({
    href: localePath(lang, l.path),
    label: t.nav[l.key],
  }));

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <a
            href={localePath(lang)}
            className="logo"
            onClick={() => setOpen(false)}
          >
            <span className="logo__mark">
              <img src="/logo.webp" alt={t.header.logoAlt} />
            </span>
            SOSAN
          </a>
          <nav className="nav">
            {links.map((l) => (
              <a href={l.href} key={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="header__actions">
            <LangSwitch lang={lang} label={t.header.languageLabel} />
            <a href="#contact" className="btn-dark">
              {t.header.download}
            </a>
            <button
              type="button"
              className={`menu-toggle${open ? " menu-toggle--open" : ""}`}
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
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
          {links.map((l) => (
            <a href={l.href} key={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <LangSwitch
            lang={lang}
            label={t.header.languageLabel}
            onNavigate={() => setOpen(false)}
          />
          <a
            href="#contact"
            className="btn-dark"
            onClick={() => setOpen(false)}
          >
            {t.header.download}
          </a>
        </div>
      </div>
    </>
  );
}
