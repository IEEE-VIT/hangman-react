import React, { useState } from "react";

const Letter = ({letterValue}) => {
  const [clicked, setClicked] = useState(false);

  const handleonClick = () => {
    setClicked(true)
  }

  return (
    <div onClick={handleonClick}>
      {letterValue}
    </div>
  );
};

export default Letter;
