import React, { useEffect, useState } from "react";

const Guessing = ({ currentWord, correctLetters, remainingLetters }) => {
  console.log("Current Word: ", currentWord);
  console.log("Correct: ", correctLetters);
  console.log("Remaining Letters: ", remainingLetters);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    [...currentWord].forEach((letter) => {
      console.log("Letter 1: ", letter);
      if (correctLetters.includes(letter)) {
        // eslint-disable-next-line no-shadow
        setLetters((letters) => [...letters, `${letter} `]);
      } else {
        // eslint-disable-next-line no-shadow
        setLetters((letters) => [...letters, "_ "]);
      }
    });
    return () => {
      setLetters([]);
    };
  }, [currentWord, correctLetters]);

  return <div>{letters}</div>;
};

export default Guessing;
