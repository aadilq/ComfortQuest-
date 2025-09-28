// src/components/quiz/forest/ForestScene3Choices.jsx
import { useEffect, useState } from "react";
import bg from "../../../assets/forestscene3.png";

export default function ForestScene3Choices({
  setThemeClass,
  onBack,     // () => void
  onChoose,   // (choiceKey: 'A' | 'B') => void
}) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setThemeClass?.("forest");
  }, [setThemeClass]);

  const choices = [
    {
      key: "A",
      title: "Festival Clearing",
      text:
        "Head toward the distant music and lanterns for a lively forest gathering.",
    },
    {
      key: "B",
      title: "Moonlit Trail",
      text:
        "Take a quieter path shaded by old cedars and follow the sound of a nearby creek.",
    },
  ];

  return (
    <main
      role="main"
      aria-labelledby="forest-s3-choices-title"
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
          color: "#ee9b00",
          fontFamily: "Pixelify Sans, monospace",
        }}
      >
        <h2 id="forest-s3-choices-title" style={{ margin: 0, color: "#c58f3b" }}>
          Night in the Grove
        </h2>
        <p style={{ margin: "0.25rem 0 0" }}>What feel are you going for?</p>
      </header>

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
                border: active ? "3px solid #ee9b00" : "2px solid #444",
                boxShadow: "0 0 0 2px rgba(20,25,15,0.6) inset, 2px 2px #000",
                color: "#ee9b00",
                cursor: "pointer",
                fontFamily: "Pixelify Sans, monospace",
              }}
            >
              <div style={{ fontSize: "1rem", color: "#c58f3b", marginBottom: 6 }}>
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
          onClick={onBack}
          style={{
            backgroundColor: "#1c2340",
            color: "#925f00",
            border: "2px solid #444",
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
            color: "#925f00",
            border: "2px solid #444",
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