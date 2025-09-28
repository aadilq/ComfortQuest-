// src/components/quiz/city/CityScene2.jsx
import { useEffect } from "react";
import bg from "../../../assets/cityscene2.png"; // TODO: add 16:9 background

export default function CityScene2({
  playerName,
  prevChoiceLabel,      // e.g., "Pulse District" or "Haven Heights" (optional)
  setThemeClass,
  onContinue,
}) {
  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  const context =
    prevChoiceLabel
      ? `Following their advice, you decide to head to ${prevChoiceLabel}.`
      : "Following their advice, you decide to head to your next stop.";

  return (
    <main
      role="main"
      aria-labelledby="scene2-title"
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
          width: "min(720px, 92vw)",
          padding: "1rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 2px rgba(25,40,90,0.6), 2px 2px #000",
          color: "#9bdcff",
        }}
      >
        <h2 id="scene2-title" style={{ marginTop: 0, color: "#b985ff" }}>
          Neon Vista — Dinnertime
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          {playerName ? `${playerName}, ` : ""}{context} As you approach the
          <em> Sky Docks</em> or the gentle <em>grass mounds</em>, your neural
          implant reminds you it’s dinnertime, and you notice…
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