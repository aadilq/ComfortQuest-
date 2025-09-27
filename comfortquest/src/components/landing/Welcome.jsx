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
    <main role="main">
      <header>
        <h1>ComfortQuest</h1>
        <p>Your mood, your time, your perfect comfort watch.</p>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="playerName" className="sr-only">Enter your name</label>
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

      <footer>
        <small>Built for ShellHacks · Netflix Challenge</small>
      </footer>
    </main>
  );
}