import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mustopha Abdulqadir – Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0c1a2e 100%)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Left — Text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "3px",
                background: "#38bdf8",
                borderRadius: "2px",
              }}
            />
            <span style={{ color: "#38bdf8", fontSize: "18px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div style={{ color: "#ffffff", fontSize: "58px", fontWeight: 800, lineHeight: 1.1, display: "flex" }}>
            Mustopha Abdulqadir
          </div>

          {/* Title */}
          <div style={{ color: "#38bdf8", fontSize: "26px", fontWeight: 600, display: "flex" }}>
            Full-Stack Software Engineer
          </div>

          {/* Divider */}
          <div style={{ width: "60px", height: "2px", background: "#334155", display: "flex" }} />

          {/* Competencies */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "⚡  React · Next.js · TypeScript · Node.js",
              "🎨  UI/UX Design · Responsive Web Apps",
              "🛠  REST APIs · MongoDB · Tailwind CSS",
            ].map((line) => (
              <div key={line} style={{ color: "#94a3b8", fontSize: "20px", display: "flex" }}>
                {line}
              </div>
            ))}
          </div>

          {/* URL */}
          <div style={{ color: "#475569", fontSize: "16px", marginTop: "8px", display: "flex" }}>
            mustopha.vercel.app
          </div>
        </div>

        {/* Right — Monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "2px solid rgba(56,189,248,0.25)",
            background: "rgba(56,189,248,0.06)",
            flexShrink: 0,
            marginLeft: "60px",
          }}
        >
          <span style={{ color: "#38bdf8", fontSize: "100px", fontWeight: 800, lineHeight: 1, display: "flex" }}>
            M
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
