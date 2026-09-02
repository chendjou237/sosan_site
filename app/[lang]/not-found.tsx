import { IconCross } from "../icons";
import { DEFAULT_LOCALE, localePath } from "../i18n/config";
import { ui } from "../i18n/ui";

/**
 * In-tree 404 for unmatched paths under /fr/ and /en/.
 *
 * Apache's `ErrorDocument 404` points at a separate bilingual /404.html, which
 * `scripts/postbuild.mjs` copies from `deploy/404.html` — one file has to serve
 * both trees, and at that point we do not know the visitor's language.
 *
 * `not-found` cannot read route params, so this renders in the default locale.
 */
export default function NotFound() {
  const t = ui(DEFAULT_LOCALE).notFound;
  return (
    <main className="notfound">
      <div className="notfound__mark">
        <IconCross size={22} />
      </div>
      <div className="notfound__code">404</div>
      <h1>{t.title}</h1>
      <p>{t.body}</p>
      <a href={localePath(DEFAULT_LOCALE)} className="btn-green">
        {t.home}
      </a>
    </main>
  );
}
