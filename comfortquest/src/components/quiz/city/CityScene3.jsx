// src/components/quiz/city/CityScene3.jsx
import { useEffect } from "react";
import bg from "../../../assets/cityscene3.png";

export default function CityScene3({ setThemeClass, onContinue }) {
  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  return (
    <main
      role="main"
      aria-labelledby="scene3-title"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        background: `url(${bg}) center/cover no-repeat`,
        display: "block",
        textAlign: "left",
      }}
    >
      <section
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          width: "min(740px, 92vw)",
          padding: "1rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 2px rgba(25,40,90,0.6), 2px 2px #000",
          color: "#9bdcff",
        }}
      >
        <h2 id="scene3-title" style={{ marginTop: 0, color: "#b985ff" }}>
          Neon Vista — Deeper Into the City
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          With your energy restored, you decide to explore deeper into Neon Vista.
          As the artificial sunset begins (the city's daily light cycle), something
          far away catches your attention…
        </p>
      </section>

      <div style={{ position: "absolute", right: "2rem", bottom: "2rem" }}>
        <button
          onClick={onContinue}
          style={{
            backgroundColor: "#1c2340",
            color: "#9bdcff",
            border: "2px solid #3a4ea3",
            borderRadius: 10,
            padding: "0.7rem 1.2rem",
            fontFamily: "Pixelify Sans, monospace",
            textTransform: "uppercase",
            boxShadow: "0 0 0 2px #0d1022 inset, 2px 2px #000",
            cursor: "pointer",
          }}
        >
          Continue ➜
        </button>
      </div>
    </main>
  );
}