// src/components/quiz/city/cityScene1.jsx
import { useEffect } from "react";
import bg from "../../../assets/cityscene1.png"; // 16:9 background image

/**
 * CityScene1
 * - intro narration for the City path
 * - forces city theme
 * - Continue => go to choices screen
 */
export default function CityScene1({ playerName, onContinue, setThemeClass }) {
  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  return (
    <main
      role="main"
      aria-labelledby="scene1-title"
      style={{
        // Make this screen fill the viewport regardless of body flex centering
        position: "fixed",
        inset: 0,               // top:0 right:0 bottom:0 left:0
        width: "100%",
        height: "100vh",
        background: `url(${bg}) center/cover no-repeat`,
        // keep layout independent of body styles
        display: "block",
        textAlign: "left",
      }}
    >
      {/* Scenario panel (top-left) */}
      <section

      className="relative 
             hover:scale-105 
             transition-all duration-300"
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          width: "min(620px, 92vw)", // smaller, readable block
          padding: "1rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 2px rgba(25,40,90,0.6), 2px 2px #000",
          color: "#9bdcff", // city sky-blue
        }}
      >
        <h2 id="scene1-title" style={{ marginTop: 0, color: "#b985ff" }}>
          Neon Vista — Arrival
        </h2>

        <p style={{ lineHeight: 1.55, margin: 0 }}>
          {playerName ? `${playerName}, ` : ""}you arrive in the city of{" "}
          <strong>Neon Vista</strong>. The magnetic high-speed train sighs to a stop
          as you step onto the platform with your holo-briefcase. Towering digital
          billboards paint the streets in neon—purple skies, amber windows, the
          skyline humming in the distance. A friendly local with AR contacts notices
          you looking around and approaches with a wave…
        </p>
      </section>

      {/* Continue button (bottom-right) */}
      <div
        style={{
          position: "absolute",
          right: "2rem",
          bottom: "2rem",
        }}
      >
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