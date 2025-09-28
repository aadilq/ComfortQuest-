// src/components/quiz/city/CityScene4Choices.jsx
import { useEffect, useState } from "react";
import bg from "../../../assets/cityscene4.png";

export default function CityScene4Choices({
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
      title: "Connected High-Energy World",
      text:
        "Remember every face you met and every digital wonder you experienced — this connected, high-energy world is exactly where you belong.",
      scoring: "+3 Feel-Good Reality, +2 Lighthearted Adventure",
    },
    {
      key: "B",
      title: "Quiet Moments Away from Screens",
      text:
        "Hold onto the peaceful moments when you stepped away from the screens and found something real and quiet in this chaotic city.",
      scoring: "+3 Cozy Mystery/Drama, +2 Animated Comfort",
    },
  ];

  return (
    <main
      role="main"
      aria-labelledby="scene4-choices"
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
        <h2 id="scene4-choices" style={{ margin: 0, color: "#b985ff" }}>
          What Will You Carry With You?
        </h2>
        <p style={{ margin: "0.25rem 0 0" }}>
          Choose what you want to remember from Neon Vista.
        </p>
      </header>

      <section
        aria-label="Scene 4 choices"
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
              style={{
                textAlign: "left",
                padding: "1rem 1.25rem",
                borderRadius: 12,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: active ? "3px solid #9bdcff" : "2px solid #3a4ea3",
                boxShadow: "0 0 0 2px #0d1022 inset, 2px 2px #000",
                color: "#9bdcff",
                cursor: "pointer",
                fontFamily: "Pixelify Sans, monospace",
              }}
            >
              <div style={{ fontSize: "1rem", color: "#b985ff", marginBottom: 6 }}>
                Choice {c.key}: {c.title}
              </div>
              <div style={{ lineHeight: 1.55 }}>{c.text}</div>
              <div style={{ marginTop: 8, opacity: 0.7 }}>{c.scoring}</div>
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
          onClick={onBack}
          style={{
            backgroundColor: "#1c2340",
            color: "#9bdcff",
            border: "2px solid #3a4ea3",
            borderRadius: 10,
            padding: "0.6rem 1rem",
            fontFamily: "Pixelify Sans, monospace",
            textTransform: "uppercase",
            boxShadow: "0 0 0 2px #0d1022 inset, 2px 2px #000",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>
        <button
          disabled={!selected}
          onClick={() => selected && onChoose(selected)}
          style={{
            opacity: selected ? 1 : 0.5,
            backgroundColor: "#1c2340",
            color: "#9bdcff",
            border: "2px solid #3a4ea3",
            borderRadius: 10,
            padding: "0.6rem 1rem",
            fontFamily: "Pixelify Sans, monospace",
            textTransform: "uppercase",
            boxShadow: "0 0 0 2px #0d1022 inset, 2px 2px #000",
            cursor: selected ? "pointer" : "not-allowed",
          }}
        >
          Continue ➜
        </button>
      </footer>
    </main>
  );
}