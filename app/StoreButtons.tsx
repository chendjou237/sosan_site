import { APP_STORE, PLAY_STORE, APPSTORE_IMG, PLAYSTORE_IMG } from "./constants";
import type { Locale } from "./i18n/config";
import { ui } from "./i18n/ui";

/**
 * NOTE: APPSTORE_IMG / PLAYSTORE_IMG are English-language badge artwork on the
 * CDN, shown on both locales (they were already English on the French site).
 * The alt text below is localised; the images are not. To show French badges on
 * /fr/, upload the localised artwork and key these by locale in constants.ts.
 */
export default function StoreButtons({
  lang,
  height = 52,
}: {
  lang: Locale;
  height?: number;
}) {
  const t = ui(lang);
  return (
    <>
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
        <img src={APPSTORE_IMG} alt={t.stores.appStore} style={{ height }} />
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
        <img src={PLAYSTORE_IMG} alt={t.stores.playStore} style={{ height }} />
      </a>
    </>
  );
}
