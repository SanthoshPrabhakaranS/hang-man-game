import React from "react";
import styles from ".././keyboard.module.css";
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type Keyboardprops = {
  activeLetter: string[];
  inActiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard = ({
  activeLetter,
  inActiveLetter,
  addGuessedLetter,
  disabled = false,
}: Keyboardprops) => {
  return (
    <div className={styles.keyboard}>
      {keys.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInActive = inActiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            disabled={isActive || isInActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
