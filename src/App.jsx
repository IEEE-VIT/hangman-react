import React from "react";
import "./App.css";
// import { words } from "./utils/helpers";
import { ThemeContext } from "./context/theme-context";
import Hint from "./components/hint/hint.component";

// const getRandomWord = () => {
//   const wordsPool = words();
//   return wordsPool[Math.floor(Math.random() * wordsPool.length)];
// };

const App = () => {
  // const [currentWord] = React.useState(getRandomWord());
  const { theme, toggle, dark } = React.useContext(ThemeContext);
  // const [correctLetters,setCorrectLetters] = React.useState([]);
  const [wrongLetters] = React.useState(["A", "B", "F", "S", "W"]);
  const [remainingLetters] = React.useState(["Q", "J", "V", "M"]);
  const [hint, setHint] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);

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
      {wrongLetters.length === 5 && (
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
          }}
        >
          Hint
        </button>
      )}
      {showHint && <h3 className="hint">{hint}</h3>}
    </div>
  );
};

export default App;
