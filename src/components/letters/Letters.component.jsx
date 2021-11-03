import React from "react";
import Letter from "../letter/Letter.component";
import "./letters.styles.css";

const Letters = () => {
  //get 26 alphabets from alphabet function in helpers 
  const letters = ["a", "b", "c", "a"];
  const lettersList = letters.map((letter) => <Letter letterValue={letter} />);
  return (
    <div className="letters">
      {/* Get the letters of the english alphabet from the helpers. Pass each alphabet to the letter component with the help of a map function. */}
      {lettersList}
    </div>
  );
};

export default Letters;
