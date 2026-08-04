import { ImageResponse } from "next/og";
export const dynamic = 'force-static';

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(115deg, #0e2033 0%, #123a31 60%, #0a8f54 130%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#0fb36a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            +
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, display: "flex" }}>
            SOSAN
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 56,
            fontWeight: 800,
            maxWidth: 900,
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Votre solution santé pour tous
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#c7d6d0",
            maxWidth: 780,
            display: "flex",
          }}
        >
          Télé-médecine, paiements transparents et couverture santé pour
          l&apos;Afrique et sa diaspora.
        </div>
      </div>
    ),
    { ...size }
  );
}
