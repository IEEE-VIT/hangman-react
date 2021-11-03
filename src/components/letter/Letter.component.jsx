import React, { useState } from "react";
import "./letter.styles.css";

const Letter = ({ letterValue, handleClick, isCorrect }) => {
  const [clicked, setClicked] = useState(false);

  const handleonClick = () => {
    setClicked(true);
    handleClick(letterValue);
  };
  let backgroundColor;
  if (clicked && isCorrect) {
    backgroundColor = "green";
  } else if (clicked && !isCorrect) {
    backgroundColor = "red";
  }

  return (
    <button
      className="letter"
      type="button"
      onClick={handleonClick}
      style={{ backgroundColor }}
    >
      {letterValue}
    </button>
  );
};

export default Letter;
