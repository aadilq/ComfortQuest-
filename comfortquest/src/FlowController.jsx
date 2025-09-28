// src/FlowController.jsx
import { useEffect, useState } from "react";
import Welcome from "./components/landing/Welcome.jsx";
import ThemeSelector from "./components/quiz/ThemeSelector.jsx";

// City path
import CityScene1 from "./components/quiz/city/cityScene1.jsx";
import CityScene1Choices from "./components/quiz/city/cityScene1Choices.jsx";
import CityScene2 from "./components/quiz/city/CityScene2.jsx";
import CityScene2Choices from "./components/quiz/city/CityScene2Choices.jsx";
import CityScene3 from "./components/quiz/city/CityScene3.jsx";
import CityScene3Choices from "./components/quiz/city/CityScene3Choices.jsx";
import CityScene4 from "./components/quiz/city/CityScene4.jsx";
import CityScene4Choices from "./components/quiz/city/CityScene4Choices.jsx";

// Forest path
import ForestScene1 from "./components/quiz/forest/ForestScene1.jsx";
import ForestScene1Choices from "./components/quiz/forest/ForestScene1Choices.jsx";
import ForestScene2 from "./components/quiz/forest/ForestScene2.jsx";
import ForestScene2Choices from "./components/quiz/forest/ForestScene2Choices.jsx";
import ForestScene3 from "./components/quiz/forest/ForestScene3.jsx";
import ForestScene3Choices from "./components/quiz/forest/ForestScene3Choices.jsx";
import ForestScene4 from "./components/quiz/forest/ForestScene4.jsx";
import ForestScene4Choices from "./components/quiz/forest/ForestScene4Choices.jsx";

// Theme CSS
import "./styles/neutral-theme.css";
import "./styles/city-theme.css";
import "./styles/forest-theme.css";

export default function FlowController() {
  const [step, setStep] = useState("welcome");
  const [playerName, setPlayerName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(null);

  const [storyState, setStoryState] = useState({
    cityScene1: null, cityScene2: null, cityScene3: null, cityScene4: null,
    forestScene1: null, forestScene2: null, forestScene3: null, forestScene4: null,
  });

  const setThemeClass = (t) => {
    document.body.className = "";
    document.body.classList.add(`${t}-theme`);
  };

  useEffect(() => { setThemeClass("neutral"); }, []);

  // Welcome → Theme
  const handleStart = (name) => {
    setPlayerName(name);
    setSelectedTheme(null);
    setStoryState({
      cityScene1: null, cityScene2: null, cityScene3: null, cityScene4: null,
      forestScene1: null, forestScene2: null, forestScene3: null, forestScene4: null,
    });
    setThemeClass("neutral");
    setStep("theme");
  };

  // Theme selection
  const handleThemeBack = () => { setThemeClass("neutral"); setStep("welcome"); };
  const handleThemeContinue = (theme) => {
    setSelectedTheme(theme);
    setThemeClass(theme);
    if (theme === "city") setStep("city-scene-1");
    if (theme === "forest") setStep("forest-scene-1");
  };

  // ===== CITY =====
  const goCityScene1Choices = () => setStep("city-scene-1-choices");
  const handleCityScene1Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene1: choiceKey }));
    setStep("city-scene-2");
  };

  const goCityScene2Choices = () => setStep("city-scene-2-choices");
  const handleCityScene2Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene2: choiceKey }));
    setStep("city-scene-3");
  };

  const goCityScene3Choices = () => setStep("city-scene-3-choices");
  const handleCityScene3Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene3: choiceKey }));
    setStep("city-scene-4");
  };

  const goCityScene4Choices = () => setStep("city-scene-4-choices");
  const handleCityScene4Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, cityScene4: choiceKey }));
    setStep("city-result"); // placeholder result
  };

  // ===== FOREST =====
  const goForestScene1Choices = () => setStep("forest-scene-1-choices");
  const handleForestScene1Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, forestScene1: choiceKey }));
    setStep("forest-scene-2");
  };

  const goForestScene2Choices = () => setStep("forest-scene-2-choices");
  const handleForestScene2Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, forestScene2: choiceKey }));
    setStep("forest-scene-3");
  };

  const goForestScene3Choices = () => setStep("forest-scene-3-choices");
  const handleForestScene3Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, forestScene3: choiceKey }));
    setStep("forest-scene-4");
  };

  const goForestScene4Choices = () => setStep("forest-scene-4-choices");
  const handleForestScene4Choice = (choiceKey) => {
    setStoryState((s) => ({ ...s, forestScene4: choiceKey }));
    setStep("forest-result"); // placeholder result
  };

  const handleRestart = () => {
    setThemeClass("neutral");
    setPlayerName("");
    setSelectedTheme(null);
    setStoryState({
      cityScene1: null, cityScene2: null, cityScene3: null, cityScene4: null,
      forestScene1: null, forestScene2: null, forestScene3: null, forestScene4: null,
    });
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

      {/* CITY ROUTE */}
      {step === "city-scene-1" && (
        <CityScene1 playerName={playerName} setThemeClass={setThemeClass} onContinue={goCityScene1Choices} />
      )}
      {step === "city-scene-1-choices" && (
        <CityScene1Choices setThemeClass={setThemeClass} onBack={() => setStep("city-scene-1")} onChoose={handleCityScene1Choice} />
      )}
      {step === "city-scene-2" && (
        <CityScene2
          setThemeClass={setThemeClass}
          onContinue={goCityScene2Choices}
          prevChoiceLabel={
            storyState.cityScene1 === "A" ? "the Pulse District" :
            storyState.cityScene1 === "B" ? "Haven Heights" : null
          }
        />
      )}
      {step === "city-scene-2-choices" && (
        <CityScene2Choices setThemeClass={setThemeClass} onBack={() => setStep("city-scene-2")} onChoose={handleCityScene2Choice} />
      )}
      {step === "city-scene-3" && <CityScene3 setThemeClass={setThemeClass} onContinue={goCityScene3Choices} />}
      {step === "city-scene-3-choices" && (
        <CityScene3Choices setThemeClass={setThemeClass} onBack={() => setStep("city-scene-3")} onChoose={handleCityScene3Choice} />
      )}
      {step === "city-scene-4" && <CityScene4 setThemeClass={setThemeClass} onContinue={goCityScene4Choices} />}
      {step === "city-scene-4-choices" && (
        <CityScene4Choices setThemeClass={setThemeClass} onBack={() => setStep("city-scene-4")} onChoose={handleCityScene4Choice} />
      )}
      {step === "city-result" && (
        <main role="main" style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
          <div>
            <h2>City Path — Summary</h2>
            <p>
              {["1","2","3","4"].map((n,i)=>(
                <span key={n}>Scene{n}: <b>{storyState[`cityScene${n}`] || "—"}</b>{i<3?" · ":""}</span>
              ))}
            </p>
            <button onClick={handleRestart} style={{ marginTop: "1rem" }}>Restart</button>
          </div>
        </main>
      )}

      {/* FOREST ROUTE */}
      {step === "forest-scene-1" && (
        <ForestScene1 playerName={playerName} setThemeClass={setThemeClass} onContinue={goForestScene1Choices} />
      )}
      {step === "forest-scene-1-choices" && (
        <ForestScene1Choices setThemeClass={setThemeClass} onBack={() => setStep("forest-scene-1")} onChoose={handleForestScene1Choice} />
      )}
      {step === "forest-scene-2" && (
        <ForestScene2
          setThemeClass={setThemeClass}
          onContinue={goForestScene2Choices}
          prevChoiceLabel={
            storyState.forestScene1 === "A" ? "the Ranger Outpost" :
            storyState.forestScene1 === "B" ? "the Lantern Path" : null
          }
        />
      )}
      {step === "forest-scene-2-choices" && (
        <ForestScene2Choices setThemeClass={setThemeClass} onBack={() => setStep("forest-scene-2")} onChoose={handleForestScene2Choice} />
      )}
      {step === "forest-scene-3" && <ForestScene3 setThemeClass={setThemeClass} onContinue={goForestScene3Choices} />}
      {step === "forest-scene-3-choices" && (
        <ForestScene3Choices setThemeClass={setThemeClass} onBack={() => setStep("forest-scene-3")} onChoose={handleForestScene3Choice} />
      )}
      {step === "forest-scene-4" && <ForestScene4 setThemeClass={setThemeClass} onContinue={goForestScene4Choices} />}
      {step === "forest-scene-4-choices" && (
        <ForestScene4Choices setThemeClass={setThemeClass} onBack={() => setStep("forest-scene-4")} onChoose={handleForestScene4Choice} />
      )}
      {step === "forest-result" && (
        <main role="main" style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
          <div>
            <h2>Forest Path — Summary</h2>
            <p>
              {["1","2","3","4"].map((n,i)=>(
                <span key={n}>Scene{n}: <b>{storyState[`forestScene${n}`] || "—"}</b>{i<3?" · ":""}</span>
              ))}
            </p>
            <button onClick={handleRestart} style={{ marginTop: "1rem" }}>Restart</button>
          </div>
        </main>
      )}
    </>
  );
}