import { useState } from "react";

export default function ThemeSelector({ playerName, onBack, onContinue }) {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleContinue = () => {
    if (selectedTheme) {
      onContinue(selectedTheme);
    }
  };

  return (
    <main role="main">
      <header>
        <h1>ComfortQuest</h1>
        <p>
          Welcome, {playerName}! Choose which theme you would like for your
          quest.
        </p>
      </header>

      <div>
        <button
          onClick={() => handleThemeSelect("city")}
          style={{
            fontWeight: selectedTheme === "city" ? "bold" : "normal",
          }}
        >
          🌆 City
        </button>
        <button
          onClick={() => handleThemeSelect("forest")}
          style={{
            fontWeight: selectedTheme === "forest" ? "bold" : "normal",
          }}
        >
          🌲 Forest
        </button>
      </div>

      <footer>
        <button onClick={onBack}>⬅ Back</button>
        <button onClick={handleContinue} disabled={!selectedTheme}>
          Continue ➡
        </button>
      </footer>
    </main>
  );
}