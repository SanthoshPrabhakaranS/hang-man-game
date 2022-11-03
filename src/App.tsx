import React, { useState, useEffect } from "react";
import words from "./words.json";
import "./index.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWords from "./components/HangmanWords";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrecetLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const winner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const loser = incorrecetLetters.length >= 6;

  return (
    <div className="app">
      <p style={{
        color: "black",
        fontFamily: "monospace",
        fontSize: "2rem"
      }}>
      {winner && "You won! Refersh to start again"}
      {loser && "You lost! Refresh to start again"}
      </p>
      <HangmanDrawing numberOfGuesses={incorrecetLetters.length} />
      <HangmanWords wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={winner || loser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inActiveLetter={incorrecetLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
