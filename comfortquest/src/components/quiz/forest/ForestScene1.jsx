// src/components/quiz/forest/ForestScene1.jsx
import { useEffect } from "react";
import bg from "../../../assets/forestscene1.png";

export default function ForestScene1({ playerName, setThemeClass, onContinue }) {
  useEffect(() => {
    setThemeClass?.("forest");
  }, [setThemeClass]);

  return (
    <main
      role="main"
      aria-labelledby="forest-s1-title"
      style={{
        position: "fixed",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background: `url(${bg}) center/cover no-repeat fixed`,
      }}
    >
      {/* Compact scenario bubble (top-left) */}
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
        <h2 id="forest-s1-title" style={{ marginTop: 0, color: "#c58f3b" }}>
          Whispering Pines — Arrival
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          {playerName ? `${playerName}, ` : ""}you arrive beneath a canopy of
          ancient pines. The trail opens to a mossy overlook as dusk settles and
          fireflies spark between the ferns. A wooden sign points to a ranger
          outpost and a lantern-lit path deeper into the forest.
        </p>
      </section>

      {/* Continue (bottom-right) */}
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