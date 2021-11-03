import React, { useState } from "react";
import "./letter.styles.css";

const Letter = ({ letterValue }) => {
  const [clicked, setClicked] = useState(false);

  const handleonClick = () => {
    setClicked(true);
  };
  console.log(clicked);
  return (
    <button className="letter" type="button" onClick={handleonClick}>
      {letterValue}
    </button>
  );
};

export default Letter;
