// src/components/quiz/city/CityScene4.jsx
import { useEffect } from "react";
import bg from "../../../assets/cityscene4.png";
export default function CityScene4({ setThemeClass, onContinue }) {
  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  return (
    <main

    
      role="main"
      aria-labelledby="scene4-title"
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

      className="relative 
             hover:scale-105 
             transition-all duration-300"
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          width: "min(760px, 92vw)",
          padding: "1rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 2px rgba(25,40,90,0.6), 2px 2px #000",
          color: "#9bdcff",
        }}
      >
        <h2 id="scene4-title" style={{ marginTop: 0, color: "#b985ff" }}>
          Neon Vista — Reflection
        </h2>
        <p style={{ lineHeight: 1.55 }}>
          As you prepare to sync into your capsule pod for the night, the city's
          neon glow filters through your window. You activate your personal AI assistant
          to make note of what the current day meant to you, and it asks what made this
          experience in Neon Vista most meaningful to you…
        </p>
      </section>

      <div style={{ position: "absolute", right: "2rem", bottom: "2rem" }}>
        <button
  onClick={onContinue}
  className="city-btn-glow"
  style={{
    backgroundColor: "#1c2340",
    color: "#9bdcff",
    border: "2px solid #3a4ea3",
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