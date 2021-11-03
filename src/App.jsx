import React, { useEffect } from "react";
import "./App.css";
import randomWords from "random-words";
import { ThemeContext } from "./context/theme-context";
import Hint from "./components/hint/hint.component";
import { getRemainingLetters } from "./utils/helpers";
import Letters from "./components/letters/Letters.component";
import Guessing from "./components/guessing/Guessing.component";

const getRandomWord = () => {
  return randomWords();
};

const App = () => {
  const [currentWord, setCurrentWord] = React.useState("");
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  const [correctLetters, setCorrectLetters] = React.useState("");
  const [wrongLetters, setWrongLetters] = React.useState("");
  const [remainingLetters, setRemainingLetters] = React.useState([]);
  const [hint, setHint] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);
  const [showHintButton, setShowHintButton] = React.useState(true);
  const handleClickTop = (letter) => {
    console.log("clicked", letter);
    if (currentWord.includes(letter) === true) {
      setCorrectLetters(correctLetters + letter);
    } else {
      setWrongLetters(wrongLetters + letter);
    }
  };
  useEffect(() => {
    const randomWord = getRandomWord();
    setCurrentWord(randomWord);
  }, []);
  useEffect(() => {
    setRemainingLetters(getRemainingLetters(currentWord, correctLetters));
  }, [correctLetters, currentWord]);
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        height: "100vh",
      }}
    >
      <button
        type="button"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: "none",
          boxShadow: `4px 4px 4px 4px ${theme.color}`,
          marginTop: "20px",
        }}
        data-testid="toggle-theme-btn"
      >
        Toggle to {!dark ? "Dark" : "Light"} theme
      </button>
      <h1> Hangman</h1>
      {/* Maintain a state for correct letters, wrong letters, remaining letters. For this, the Letters component and the Hangman component as well as the Guessing component should be imported.
      Wrong letters is passed as a prop to HangmanFigure Component, correct letters passed to Guessing. */}{" "}
      {wrongLetters.length === 5 && showHintButton && (
        <button
          type="button"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: "none",
            boxShadow: `4px 4px 4px 4px ${theme.color}`,
            marginTop: "20px",
          }}
          onClick={() => {
            setHint(Hint(remainingLetters));
            setShowHint(true);
            setShowHintButton(false);
          }}
        >
          Hint
        </button>
      )}
      {showHint && <h3 className="hint">{hint.toUpperCase()}</h3>}
      <Guessing
        currentWord={currentWord}
        remainingLetters={remainingLetters}
        correctLetters={correctLetters}
      />
      <Letters handleClickTop={handleClickTop} word={currentWord} />
    </div>
  );
};

export default App;
