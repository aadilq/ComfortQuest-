// src/FlowController.jsx
import { useEffect, useState } from "react";
import Welcome from "./components/landing/Welcome.jsx";
import ThemeSelector from "./components/quiz/ThemeSelector.jsx";

// Load theme styles once
import "./styles/neutral-theme.css";
import "./styles/city-theme.css";
import "./styles/forest-theme.css"; // OK if empty for now

export default function FlowController() {
  const [step, setStep] = useState("welcome");
  const [playerName, setPlayerName] = useState("");

  const setThemeClass = (t) => {
    // Clear & apply theme class on <body>
    document.body.className = "";
    document.body.classList.add(`${t}-theme`);
  };

  // Always start in neutral
  useEffect(() => {
    setThemeClass("neutral");
  }, []);

  // --- Welcome ---
  const handleStart = (name) => {
    setPlayerName(name);
    setThemeClass("neutral"); // ensure neutral on ThemeSelector entry
    setStep("theme");
  };

  // --- ThemeSelector ---
  const handleBackFromTheme = () => {
    setThemeClass("neutral"); // reset to neutral for Welcome
    setStep("welcome");
  };

  const handleContinueFromTheme = (chosenTheme) => {
    // If you want the next screen to keep that theme:
    setThemeClass(chosenTheme);
    setStep("scene"); // placeholder next step
  };

  return (
    <>
      {step === "welcome" && <Welcome onStart={handleStart} />}

      {step === "theme" && (
        <ThemeSelector
          playerName={playerName}
          onBack={handleBackFromTheme}
          onContinue={handleContinueFromTheme}
          setThemeClass={setThemeClass} // give selector direct control when clicking a card
        />
      )}

      {step === "scene" && (
        <main>
          <h2>Scene placeholder</h2>
          <p>Continue building your story flow here…</p>
          <button onClick={() => setStep("welcome")}>Restart</button>
        </main>
      )}
    </>
  );
}