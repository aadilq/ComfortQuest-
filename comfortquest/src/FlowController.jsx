import { useEffect, useState } from "react";
import Welcome from "./components/landing/Welcome.jsx";
import ThemeSelector from "./components/quiz/ThemeSelector.jsx";

// Ensure these are imported once so the classes exist:
import "./styles/neutral-theme.css";
import "./styles/city-theme.css";
import "./styles/forest-theme.css"; // ok if you haven't styled it yet

export default function FlowController() {
  const [step, setStep] = useState("welcome");
  const [playerName, setPlayerName] = useState("");

  // Centralized theme switcher
  const setThemeClass = (t) => {
    document.body.className = "";
    document.body.classList.add(`${t}-theme`);
  };

  // Always start neutral on first mount
  useEffect(() => {
    setThemeClass("neutral");
  }, []);

  // --- Welcome ---
  const handleStart = (name) => {
    setPlayerName(name);
    setThemeClass("neutral"); // defensive: neutral when entering selector
    setStep("theme");
  };

  // --- Theme Selector ---
  const handleBackFromTheme = () => {
    setThemeClass("neutral"); // reset to neutral for welcome
    setStep("welcome");
  };

  const handleContinueFromTheme = (chosenTheme) => {
    // Keep the chosen theme as we move forward
    setThemeClass(chosenTheme);
    setStep("scene"); // your next screen
  };

  // --- Restart from any later screen ---
  const handleRestart = () => {
    setThemeClass("neutral");  // <— reset theme
    setPlayerName("");         // optional: clear name
    setStep("welcome");        // back to the beginning
  };

  return (
    <>
      {step === "welcome" && <Welcome onStart={handleStart} />}

      {step === "theme" && (
        <ThemeSelector
          playerName={playerName}
          onBack={handleBackFromTheme}
          onContinue={handleContinueFromTheme}
          setThemeClass={setThemeClass} // lets the selector flip themes immediately on click
        />
      )}

      {step === "scene" && (
        <main role="main" style={{ textAlign: "center" }}>
          <h2>Scene placeholder</h2>
          <p>Continue building your story flow here...</p>
          <button onClick={handleRestart} style={{ marginTop: "1rem" }}>
            RESTART
          </button>
        </main>
      )}
    </>
  );
}