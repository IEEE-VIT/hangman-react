import React from "react";
import "./App.css";
import { words } from "./utils/helpers";
import { ThemeContext } from "./context/theme-context";


// const getRandomWord = () => {
//   const wordsPool = words();
//   return wordsPool[Math.floor(Math.random() * wordsPool.length)];
// };

const App = () => {
  //const [currentWord] = React.useState(getRandomWord());
  const { theme, toggle, dark } = React.useContext(ThemeContext);

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
    </div>
  );
};

export default App;
