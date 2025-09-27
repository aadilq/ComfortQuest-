// src/components/quiz/ThemeSelector.jsx
import { useState, useEffect } from "react";
import cityCard from "../../assets/city-card.png";
// TEMP: keep forest as a styled text button until you add the image
import forestCard from "../../assets/forest-card.png";

export default function ThemeSelector({ playerName, onBack, onContinue, setThemeClass }) {
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Defensive: ensure neutral when this screen loads
  useEffect(() => {
    setThemeClass?.("neutral");
  }, [setThemeClass]);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setThemeClass?.(theme); // switch immediately on click
  };

  const handleContinue = () => {
    if (selectedTheme) onContinue?.(selectedTheme);
  };

  return (
    <main role="main" aria-labelledby="cq-title" style={{ width: "100%" }}>
      <header>
        <h1 id="cq-title">ComfortQuest</h1>
        <p>
          Welcome, {playerName}! Choose which theme you would like for your quest.
        </p>
      </header>

      {/* Cards */}
      <section aria-label="Theme choices" style={{ margin: "0.75rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            justifyItems: "center",
            alignItems: "start",
          }}
        >
          {/* CITY card image */}
          <button
            type="button"
            onClick={() => handleThemeSelect("city")}
            aria-pressed={selectedTheme === "city"}
            style={{
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={cityCard}
              alt="Select City theme"
              style={{
                display: "block",
                maxWidth: 240,   // ↓ smaller than before
                width: "100%",
                borderRadius: 8,
                
              }}
            />
          </button>

            {/* FOREST card image */}
            <button
                type="button"
            onClick={() => handleThemeSelect("forest")}
            aria-pressed={selectedTheme === "forest"}
            style={{
                padding: 0,
                border: "none",
                background: "transparent",
                cursor: "pointer",
            }}
                >
            <img
            src={forestCard}  // <-- import this at the top of your file
            alt="Select Forest theme"
            style={{
                display: "block",
                maxWidth: 240,   // same size as city card
                width: "100%",
                borderRadius: 8,
            }}
         />
        </button>
        </div>
      </section>

      {/* Actions */}
      <footer style={{ marginTop: "0.75rem" }}>
        <button
          onClick={() => {
            setThemeClass?.("neutral"); // ensure welcome is neutral
            onBack?.();
          }}
          style={{
            marginRight: "0.5rem",
            padding: "0.5rem 0.9rem",
            fontSize: "0.9rem",
          }}
        >
          ⬅ Back
        </button>

        <button
          onClick={handleContinue}
          disabled={!selectedTheme}
          style={{
            padding: "0.5rem 0.9rem",
            fontSize: "0.9rem",
          }}
        >
          Continue ➡
        </button>
      </footer>
    </main>
  );
}