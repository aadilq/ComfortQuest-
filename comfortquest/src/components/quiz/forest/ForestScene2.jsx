// src/components/quiz/forest/ForestScene2.jsx
import { useEffect } from "react";
import bg from "../../../assets/forestscene2.png";

export default function ForestScene2({ setThemeClass, onContinue, prevChoiceLabel }) {
  useEffect(() => {
    setThemeClass?.("forest");
  }, [setThemeClass]);

  return (
    <main
      role="main"
      aria-labelledby="forest-s2-title"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: `url(${bg}) center/cover no-repeat fixed`,
      }}
    >
      <section
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
        <h2 id="forest-s2-title" style={{ marginTop: 0, color: "#c58f3b" }}>
          Echo Glen — {prevChoiceLabel ? `From ${prevChoiceLabel}` : "Next Step"}
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          The forest opens to a creek murmuring over stones. Wind chimes ring from
          a wooden arch. A note pinned nearby mentions a twilight circle in a grove
          beyond the stream.
        </p>
      </section>

      <div style={{ position: "fixed", right: "2rem", bottom: "2rem" }}>
        <button
          onClick={onContinue}
          style={{
            backgroundColor: "#1c2340",
            color: "#925f00",
            border: "2px solid #444",
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