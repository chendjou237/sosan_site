import { resolveSrc, type Asset, type MediaVariant } from "./assets";
import { IconCross } from "./icons";

type MockupProps = {
  asset: Asset;
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
export default function Mockup({ asset, variant, className = "", alt }: MockupProps) {
  const v = variant ?? asset.variant;
  const src = resolveSrc(asset);
  const base = `mockup mockup--${v}${className ? ` ${className}` : ""}`;

  if (src) {
    return (
      <span className={base}>
        {v === "phone" && <span className="mockup__bar" aria-hidden="true" />}
        <img src={src} alt={alt ?? asset.label} loading="lazy" />
      </span>
    );
  }

  return (
    <span
      className={`${base} mockup--ph`}
      role="img"
      aria-label={`${asset.label} — visuel à venir`}
    >
      {v === "phone" && <span className="mockup__bar" aria-hidden="true" />}
      <span className="mockup__ph">
        <span className="mockup__ph-mark" aria-hidden="true">
          <IconCross size={22} />
        </span>
        <span className="mockup__ph-label">{asset.label}</span>
        <span className="mockup__ph-hint">Visuel à venir</span>
      </span>
    </span>
  );
}
