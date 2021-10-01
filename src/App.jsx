import React from "react";
import "./App.css";

const randomWords = require("random-words");

const getRandomWord = () => {
  return randomWords();
};

const App = () => {
  const [currentWord] = React.useState(getRandomWord());
  console.log(currentWord);

  return (
    <div className="App">
      Hangman{" "}
      {/* Maintain a state for correct letters, wrong letters, remaining letters. For this, the Letters component and the Hangman component as well as the Guessing component should be imported.
      Wrong letters is passed as a prop to HangmanFigure Component, correct letters passed to Guessing. */}{" "}
    </div>
  );
};

export default App;
