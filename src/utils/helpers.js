export const checkWinner = (correct, wrong, word) => {
  // Accept 3 arguments (correct, wrong and word)
  /* Define condition for win and loop it. */
  /* Define condition for lose */
  let status = "winner";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 6) {
    status = "loser";
  }

  return status;
};

export const alphabets = () => {
  /* Get alphabets of the English language */
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return alphabet;
};

export const getRemainingLetters = (currentWord, correctLetters) => {
  /* Get remaining letters of the word */
  const letters = currentWord.split("");
  const remainingLetters = letters.filter((letter) => {
    return !correctLetters.includes(letter);
  });
  return remainingLetters;
};
