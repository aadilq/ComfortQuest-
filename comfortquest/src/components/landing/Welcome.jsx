// src/components/landing/Welcome.jsx
import { useState } from "react";

export default function Welcome({ onStart }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onStart?.(name.trim());
  };

  return (
    <main role="main" style={{ width: "100%" }}>
      <header>
        <h1>ComfortQuest</h1>
        <p>
          Your mood, your time,<br />
          your perfect comfort watch.
        </p>
      </header>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <label htmlFor="playerName" className="sr-only">
          Enter your name
        </label>
        <input
          id="playerName"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <button type="submit" disabled={!name.trim()}>
          Start My Quest ►
        </button>
      </form>

      <footer style={{ marginTop: "2rem" }}>
        <small>Built for ShellHacks · Netflix Challenge</small>
      </footer>
    </main>
  );
}