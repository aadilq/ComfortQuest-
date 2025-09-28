// src/FlowController.jsx
import { useEffect, useState } from "react";
import Welcome from "./components/landing/Welcome.jsx";
import ThemeSelector from "./components/quiz/ThemeSelector.jsx";

// City path screens
import CityScene1 from "./components/quiz/city/cityScene1.jsx";
import CityScene1Choices from "./components/quiz/city/cityScene1Choices.jsx";
import CityScene2 from "./components/quiz/city/CityScene2.jsx";
import CityScene2Choices from "./components/quiz/city/CityScene2Choices.jsx";
import CityScene3 from "./components/quiz/city/CityScene3.jsx";
import CityScene3Choices from "./components/quiz/city/CityScene3Choices.jsx";
import CityScene4 from "./components/quiz/city/CityScene4.jsx";
import CityScene4Choices from "./components/quiz/city/CityScene4Choices.jsx";

// Theme CSS (load once)
import "./styles/neutral-theme.css";
import "./styles/city-theme.css";
import "./styles/forest-theme.css"; // can stay empty for now

export default function FlowController() {
  const [step, setStep] = useState("welcome");
  const [playerName, setPlayerName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Track user choices along the route
  const [storyState, setStoryState] = useState({
    cityScene1: null,
    cityScene2: null,
    cityScene3: null,
    cityScene4: null,
  });

  // Centralized theme switcher
  const setThemeClass = (t) => {
    document.body.className = "";
    document.body.classList.add(`${t}-theme`);
  };

  // Always start neutral
  useEffect(() => {
    setThemeClass("neutral");
  }, []);

  // ============ Welcome → ThemeSelector ============
  const handleStart = (name) => {
    setPlayerName(name);
    setSelectedTheme(null);
    setStoryState({ cityScene1: null, cityScene2: null, cityScene3: null, cityScene4: null });
    setThemeClass("neutral");
    setStep("theme");
  };

  // ============ ThemeSelector ============
  const handleThemeBack = () => {
    setThemeClass("neutral");
    setStep("welcome");
  };

  const handleThemeContinue = (theme) => {
    setSelectedTheme(theme);
    setThemeClass(theme);
    if (theme === "city") setStep("city-scene-1");
    else if (theme === "forest") setStep("forest-scene-1"); // stub
  };

  // ============ City path ============
  // Scene 1 → Choices
  const goCityScene1Choices = () => setStep("city-scene-1-choices");
  const handleCityScene1Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene1: choiceKey }));
    setStep("city-scene-2");
  };

  // Scene 2 → Choices
  const goCityScene2Choices = () => setStep("city-scene-2-choices");
  const handleCityScene2Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene2: choiceKey }));
    setStep("city-scene-3");
  };

  // Scene 3 → Choices
  const goCityScene3Choices = () => setStep("city-scene-3-choices");
  const handleCityScene3Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene3: choiceKey }));
    setStep("city-scene-4");
  };

  // Scene 4 → Choices → (Result or End)
  const goCityScene4Choices = () => setStep("city-scene-4-choices");
  const handleCityScene4Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene4: choiceKey }));
    // TODO: route to results/recommendation screen
    setStep("city-result"); // placeholder
  };

  // Restart
  const handleRestart = () => {
    setThemeClass("neutral");
    setPlayerName("");
    setSelectedTheme(null);
    setStoryState({ cityScene1: null, cityScene2: null, cityScene3: null, cityScene4: null });
    setStep("welcome");
  };

  return (
    <>
      {step === "welcome" && <Welcome onStart={handleStart} />}

      {step === "theme" && (
        <ThemeSelector
          playerName={playerName}
          onBack={handleThemeBack}
          onContinue={handleThemeContinue}
          setThemeClass={setThemeClass}
        />
      )}

      {/* ---- CITY ROUTE ---- */}
      {step === "city-scene-1" && (
        <CityScene1
          playerName={playerName}
          setThemeClass={setThemeClass}
          onContinue={goCityScene1Choices}
        />
      )}

      {step === "city-scene-1-choices" && (
        <CityScene1Choices
          playerName={playerName}
          setThemeClass={setThemeClass}
          onBack={() => setStep("city-scene-1")}
          onChoose={handleCityScene1Choice}
        />
      )}

      {step === "city-scene-2" && (
        <CityScene2
          playerName={playerName}
          prevChoiceLabel={
            storyState.cityScene1 === "A" ? "the Pulse District" :
            storyState.cityScene1 === "B" ? "Haven Heights" : null
          }
          setThemeClass={setThemeClass}
          onContinue={goCityScene2Choices}
        />
      )}

      {step === "city-scene-2-choices" && (
        <CityScene2Choices
          setThemeClass={setThemeClass}
          onBack={() => setStep("city-scene-2")}
          onChoose={handleCityScene2Choice}
        />
      )}

      {step === "city-scene-3" && (
        <CityScene3
          setThemeClass={setThemeClass}
          onContinue={goCityScene3Choices}
        />
      )}

      {step === "city-scene-3-choices" && (
        <CityScene3Choices
          setThemeClass={setThemeClass}
          onBack={() => setStep("city-scene-3")}
          onChoose={handleCityScene3Choice}
        />
      )}

      {step === "city-scene-4" && (
        <CityScene4
          setThemeClass={setThemeClass}
          onContinue={goCityScene4Choices}
        />
      )}

      {step === "city-scene-4-choices" && (
        <CityScene4Choices
          setThemeClass={setThemeClass}
          onBack={() => setStep("city-scene-4")}
          onChoose={handleCityScene4Choice}
        />
      )}

      {/* ---- RESULT / END ---- */}
      {step === "city-result" && (
        <main
          role="main"
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <h2 style={{ marginBottom: "0.75rem" }}>City Path — Summary</h2>
            <p style={{ margin: 0 }}>
              Scene1: <b>{storyState.cityScene1 || "—"}</b> ·{" "}
              Scene2: <b>{storyState.cityScene2 || "—"}</b> ·{" "}
              Scene3: <b>{storyState.cityScene3 || "—"}</b> ·{" "}
              Scene4: <b>{storyState.cityScene4 || "—"}</b>
            </p>
            <button onClick={handleRestart} style={{ marginTop: "1rem" }}>
              Restart
            </button>
          </div>
        </main>
      )}

      {/* ---- FOREST STUB ---- */}
      {step === "forest-scene-1" && (
        <main role="main" style={{ textAlign: "center", padding: "2rem" }}>
          <h2>Forest Scene 1 (coming soon)</h2>
          <button onClick={handleRestart} style={{ marginTop: "1rem" }}>
            Restart
          </button>
        </main>
      )}
    </>
  );
}