import React from "react";
import "../index.css";

type HangmanWordsProps = {
  wordToGuess: string,
  guessedLetters: string[]
}

const HangmanWords = ({ wordToGuess, guessedLetters }: HangmanWordsProps) => {
  return (
    <div className="words-div">
      {wordToGuess.split("").map((letter, index) => (
        <span className="letters" key={index}>
          <span style={{
            visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
          }}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
