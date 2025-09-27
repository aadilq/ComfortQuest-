// src/FlowController.jsx
import { useState } from "react";
import Welcome from "./components/landing/Welcome.jsx";
import ThemeSelector from "./components/quiz/ThemeSelector.jsx";

export default function FlowController() {
  // Flow steps: "welcome" -> "theme" -> "scene" -> "results"
  const [step, setStep] = useState("welcome");

  // Shared state across steps
  const [playerName, setPlayerName] = useState("");
  const [theme, setTheme] = useState(null); // "city" | "forest" | null

  // --- Welcome handlers ---
  const handleStart = (name) => {
    setPlayerName(name);
    setStep("theme");
  };

  // --- ThemeSelector handlers ---
  const handleBackFromTheme = () => {
    setStep("welcome");
  };

  const handleContinueFromTheme = (chosenTheme) => {
    setTheme(chosenTheme);
    setStep("scene"); // TODO: route to your Scene flow (City/Forest)
  };

  return (
    <>
      {step === "welcome" && <Welcome onStart={handleStart} />}

      {step === "theme" && (
        <ThemeSelector
          playerName={playerName}
          onBack={handleBackFromTheme}
          onContinue={handleContinueFromTheme}
        />
      )}

      {step === "scene" && (
        <main role="main">
          <header>
            <h1>ComfortQuest</h1>
          </header>
          <p>
            Starting <strong>{theme}</strong> adventure for <strong>{playerName}</strong>…
          </p>
          {/* TODO: render your Scene components based on `theme` */}
          <footer>
            <button onClick={() => setStep("theme")}>⬅ Back to Theme</button>
            <button onClick={() => setStep("results")}>Continue ➡</button>
          </footer>
        </main>
      )}

      {step === "results" && (
        <main role="main">
          <header>
            <h1>Results</h1>
          </header>
          <p>Results screen placeholder…</p>
          <footer>
            <button onClick={() => setStep("welcome")}>Restart</button>
          </footer>
        </main>
      )}
    </>
  );
}