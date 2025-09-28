// src/components/results/ResultsScreen.jsx
import { useState } from "react";

export default function ResultsScreen({ playerName, theme, summary, onRestart }) {
  const { categoryScores, top } = summary || { categoryScores: {}, top: [] };

  // Theme-aware colors for outlines/glow
  const palette = theme === "city"
    ? {
        textPrimary: "#9bdcff",
        textAccent: "#b985ff",
        cardBorder: "rgba(58,78,163,0.7)",
        cardGlow: "rgba(155,220,255,0.75)",
        btnText: "#9bdcff",
      }
    : {
        textPrimary: "#ee9b00",
        textAccent: "#c58f3b",
        cardBorder: "rgba(90,80,40,0.7)",
        cardGlow: "rgba(238,155,0,0.75)",
        btnText: "#925f00",
      };

  // Keep track of which card is hovered/focused
  const [hovered, setHovered] = useState(null);

  return (
    <main
      role="main"
      aria-labelledby="results-title"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "min(1100px, 95vw)",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: 14,
          padding: "1.25rem 1.5rem",
          boxShadow: `0 0 0 2px ${palette.cardBorder}, 2px 2px #000`,
          color: palette.textPrimary,
          textAlign: "left",
        }}
      >
        <header style={{ marginBottom: "0.75rem" }}>
          <h2 id="results-title" style={{ margin: 0, color: palette.textAccent }}>
            {playerName ? `${playerName}, ` : ""}Your Comfort Picks
          </h2>
          <p style={{ margin: "0.25rem 0 0", opacity: 0.9 }}>
            Based on your journey choices, here’s what we recommend tonight.
          </p>
        </header>

        {/* Top shows */}
        <section
          aria-label="Top recommendations"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginTop: "0.75rem",
          }}
        >
          {top.map(({ id, score, meta }) => {
            const isHover = hovered === id;
            return (
              <article
                key={id}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
                style={{
                  background: "rgba(0,0,0,0.35)",
                  border: `2px solid ${palette.cardBorder}`,
                  borderRadius: 12,
                  padding: "0.75rem",
                  boxShadow: isHover
                    ? `0 0 0 2px ${palette.cardGlow} inset, 0 0 16px ${palette.cardGlow}, 0 0 60px ${palette.cardGlow.replace("0.75", "0.25")}`
                    : "0 0 8px rgba(0,0,0,0.25)",
                  transform: isHover ? "translateY(-2px) scale(1.02)" : "none",
                  transition: "box-shadow 180ms ease, transform 180ms ease, border-color 180ms ease",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "2/3",
                    background: `url(${meta.poster}) center/cover no-repeat`,
                    borderRadius: 8,
                    marginBottom: "0.5rem",
                  }}
                  aria-label={`${meta.title} poster`}
                />
                <h3 style={{ margin: "0 0 0.25rem" }}>{meta.title}</h3>
                <div style={{ fontSize: "0.95rem", opacity: 0.85 }}>{meta.category}</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: 4 }}>
                  {meta.episodeLength} · {meta.seasons} seasons
                </div>
                {Array.isArray(meta.whereToWatch) && meta.whereToWatch.length > 0 && (
                  <div style={{ fontSize: "0.9rem", marginTop: 6 }}>
                    Watch on: <b>{meta.whereToWatch.join(", ")}</b>
                  </div>
                )}
                <div style={{ fontSize: "0.85rem", marginTop: 6, opacity: 0.7 }}>
                  Match score: {Math.round(score)}
                </div>
              </article>
            );
          })}
        </section>

        {/* Category breakdown */}
        <section aria-label="Category breakdown" style={{ marginTop: "1rem" }}>
          <h4 style={{ margin: "0 0 0.5rem" }}>How we matched you:</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {Object.entries(categoryScores)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, val]) => (
                <div
                  key={cat}
                  style={{
                    background: "rgba(0,0,0,0.35)",
                    border: "1px solid rgba(90,90,120,0.6)",
                    borderRadius: 8,
                    padding: "0.5rem 0.6rem",
                    fontSize: "0.95rem",
                  }}
                >
                  <b>{cat}</b>: {val}
                </div>
              ))}
          </div>
        </section>

        <footer style={{ marginTop: "1rem", textAlign: "right" }}>
          <button
  onClick={onRestart}
  className={theme === "city" ? "city-btn-glow" : "forest-btn-glow"}
  style={{
    backgroundColor: "#1c2340",
    color: theme === "city" ? "#9bdcff" : "#925f00",
    border: "2px solid #444",
    borderRadius: 10,
    padding: "0.6rem 1rem",
    fontFamily: "Pixelify Sans, monospace",
    textTransform: "uppercase",
    cursor: "pointer",
  }}
>
  Restart
</button>
        </footer>
      </div>
    </main>
  );
}