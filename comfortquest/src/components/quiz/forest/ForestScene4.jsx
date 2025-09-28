// src/components/quiz/forest/ForestScene4.jsx
import { useEffect } from "react";
import bg from "../../../assets/forestscene4.png";

export default function ForestScene4({ setThemeClass, onContinue }) {
  useEffect(() => {
    setThemeClass?.("forest");
  }, [setThemeClass]);

  return (
    <main
      role="main"
      aria-labelledby="forest-s4-title"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: `url(${bg}) center/cover no-repeat fixed`,
      }}
    >
      <section


className="relative 
             hover:scale-105 
             transition-all duration-300"
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          width: "min(540px, 78vw)",
          padding: "1rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 2px rgba(40,50,30,0.6), 2px 2px #000",
          color: "#ee9b00",
          textAlign: "left",
        }}
      >
        <h2 id="forest-s4-title" style={{ marginTop: 0, color: "#c58f3b" }}>
          Ember Camp — Twilight Gathering
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          A circle of travelers share stories by a small fire. A guide mentions a
          hidden overlook where the valley glows at night and a streambed where
          smooth stones carry wishes.
        </p>
      </section>

      <div style={{ position: "fixed", right: "2rem", bottom: "2rem" }}>
        <button
  onClick={onContinue}
  className="forest-btn-glow"
  style={{
    backgroundColor: "#1c2340",
    color: "#925f00",
    border: "2px solid #444",
    borderRadius: 10,
    padding: "0.7rem 1.2rem",
    fontFamily: "Pixelify Sans, monospace",
    textTransform: "uppercase",
    cursor: "pointer",
  }}
>
  Continue ➜
</button>
      </div>
    </main>
  );
}