import { resolveSrc, assetLabel, type Asset, type MediaVariant } from "./assets";
import { IconCross } from "./icons";
import type { Locale } from "./i18n/config";
import { ui } from "./i18n/ui";

type MockupProps = {
  asset: Asset;
  lang: Locale;
  /** Override the asset's default rendering variant. */
  variant?: MediaVariant;
  className?: string;
  /** Alt text override (defaults to the asset label). */
  alt?: string;
};

/**
 * Framed media slot. Renders the real image when a local file (or legacy
 * fallback) resolves, otherwise a branded on-brand placeholder carrying the
 * label — so the layout is complete before real screenshots/photos are
 * supplied. See `resolveSrc` in ./assets for resolution order.
 *
 * Server component (touches `fs` via resolveSrc). Safe to nest as a child of
 * the client `Reveal` wrapper.
 */
export default function Mockup({
  asset,
  lang,
  variant,
  className = "",
  alt,
}: MockupProps) {
  const v = variant ?? asset.variant;
  const src = resolveSrc(asset);
  const base = `mockup mockup--${v}${className ? ` ${className}` : ""}`;
  const label = assetLabel(asset, lang);
  const t = ui(lang).mockup;

  if (src) {
    return (
      <span className={base}>
        {v === "phone" && <span className="mockup__bar" aria-hidden="true" />}
        <img src={src} alt={alt ?? label} loading="lazy" />
      </span>
    );
  }

  return (
    <span
      className={`${base} mockup--ph`}
      role="img"
      aria-label={`${label} — ${t.pending}`}
    >
      {v === "phone" && <span className="mockup__bar" aria-hidden="true" />}
      <span className="mockup__ph">
        <span className="mockup__ph-mark" aria-hidden="true">
          <IconCross size={22} />
        </span>
        <span className="mockup__ph-label">{label}</span>
        <span className="mockup__ph-hint">{t.pendingShort}</span>
      </span>
    </span>
  );
}
