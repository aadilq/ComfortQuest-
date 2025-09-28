// src/components/quiz/city/CityScene2Choices.jsx
import { useEffect, useState } from "react";
import bg from "../../../assets/cityscene2.png";

export default function CityScene2Choices({
  setThemeClass,
  onBack,
  onChoose, // (choiceKey: 'A' | 'B') => void
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  const choices = [
    {
      key: "A",
      title: "Retro Café (books & analog coffee)",
      text:
        "A cozy retro-café with real books and analog coffee machines — a nostalgic refuge from the cybernated world.",
    },
    {
      key: "B",
      title: "Sky-High Rooftop Bar",
      text:
        "A sky-high rooftop bar where holographic bartenders serve glowing cocktails to a crowd of humans.",
    },
  ];

  return (
    <main
      role="main"
      aria-labelledby="scene2-choices"
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
      <header
        style={{
          position: "absolute",
          top: "1.25rem",
          left: "1.25rem",
          right: "1.25rem",
          color: "#9bdcff",
          fontFamily: "Pixelify Sans, monospace",
        }}
      >
        <h2 id="scene2-choices" style={{ margin: 0, color: "#b985ff" }}>
          Choose Your Dinner Vibe
        </h2>
        <p style={{ margin: "0.25rem 0 0" }}>
          Where will you refuel before exploring further?
        </p>
      </header>

      <section
        aria-label="Scene 2 choices"
        style={{
          position: "absolute",
          top: "6rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1000px, 92vw)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
        }}
      >
        {choices.map((c) => {
          const active = selected === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setSelected(c.key)}
              aria-pressed={active}
              className="city-choice-glow" // <-- neon glow class
              style={{
                textAlign: "left",
                padding: "1rem 1.25rem",
                borderRadius: 12,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: active ? "3px solid #9bdcff" : "2px solid #3a4ea3",
                color: "#9bdcff",
                cursor: "pointer",
                fontFamily: "Pixelify Sans, monospace",
              }}
            >
              <div style={{ fontSize: "1rem", color: "#b985ff", marginBottom: 6 }}>
                Choice {c.key}: {c.title}
              </div>
              <div style={{ lineHeight: 1.55 }}>{c.text}</div>
            </button>
          );
        })}
      </section>

      <footer
        style={{
          position: "absolute",
          right: "2rem",
          bottom: "2rem",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <button
          disabled={!selected}
          onClick={() => selected && onChoose(selected)}
          className="city-btn-glow"
          style={{
            opacity: selected ? 1 : 0.5,
            backgroundColor: "#1c2340",
            color: "#9bdcff",
            border: "2px solid #3a4ea3",
            borderRadius: 10,
            padding: "0.6rem 1rem",
            fontFamily: "Pixelify Sans, monospace",
            textTransform: "uppercase",
            cursor: selected ? "pointer" : "not-allowed",
          }}
        >
          ⬅ Back
        </button>
        <button
          disabled={!selected}
          onClick={() => selected && onChoose(selected)}
          className="city-btn-glow"
          style={{
            opacity: selected ? 1 : 0.5,
            backgroundColor: "#1c2340",
            color: "#9bdcff",
            border: "2px solid #3a4ea3",
            borderRadius: 10,
            padding: "0.6rem 1rem",
            fontFamily: "Pixelify Sans, monospace",
            textTransform: "uppercase",
            cursor: selected ? "pointer" : "not-allowed",
          }}
        >
          Continue ➜
        </button>
      </footer>
    </main>
  );
}