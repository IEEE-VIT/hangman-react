import React from "react";
import Letter from "../letter/Letter.component";
import "./letters.styles.css";
import { alphabets } from "../../utils/helpers";

const Letters = ({ handleClickTop, word }) => {
  // get 26 alphabets from alphabet function in helpers
  const letters = alphabets();
  const handleClick = (letterValue) => {
    handleClickTop(letterValue);
  };
  const lettersList = letters.map((letter) => {
    const isCorrect = word.includes(letter);
    return (
      <Letter
        letterValue={letter}
        handleClick={handleClick}
        isCorrect={isCorrect}
        key={letter}
      />
    );
  });
  return (
    <div className="letters">
      {/* Get the letters of the english alphabet from the helpers. Pass each alphabet to the letter component with the help of a map function. */}
      {lettersList}
    </div>
  );
};

export default Letters;
