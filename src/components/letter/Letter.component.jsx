import React, { useState } from "react";
import "./letter.styles.css";

const Letter = ({ letterValue, handleClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleonClick = () => {
    setClicked(true);
    handleClick(letterValue);
  };
  console.log(clicked);
  return (
    <button className="letter" type="button" onClick={handleonClick}>
      {letterValue}
    </button>
  );
};

export default Letter;
