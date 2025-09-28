// src/components/quiz/city/cityScene1Choices.jsx
import { useEffect, useState } from "react";
import bg from "../../../assets/cityscene1.png"; // reuse the same backdrop (or swap)

export default function CityScene1Choices({
  playerName,
  setThemeClass,
  onBack,     // () => void
  onChoose,   // (choiceKey: 'A' | 'B') => void
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setThemeClass?.("city");
  }, [setThemeClass]);

  const choices = [
    {
      key: "A",
      title: "Pulse District",
      text:
        "Ask about the vibrant Pulse District with the sky-high floating clubs.",
    },
    {
      key: "B",
      title: "Haven Heights",
      text:
        "Ask about the quieter Haven Heights in the bio-dome district away from the neon chaos.",
    },
  ];

  return (
    <main
      role="main"
      aria-labelledby="scene1-choices-title"
      style={{
        // Make this independent of body flex centering
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        background: `url(${bg}) center/cover no-repeat`,
        display: "block",
        textAlign: "left",
      }}
    >
      {/* Header */}
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
        <h2 id="scene1-choices-title" style={{ margin: 0, color: "#b985ff" }}>
          Neon Vista — First Move
        </h2>
        <p style={{ margin: "0.25rem 0 0" }}>
          {playerName ? `${playerName}, ` : ""}where do you head first?
        </p>
      </header>

      {/* Choice grid */}
      <section
        aria-label="Choose your path"
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
            </button>
          );
        })}
      </section>

      {/* Footer actions */}
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
          onClick={() => selected && onChoose?.(selected)}
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