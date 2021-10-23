export const checkWinner = () => {
  // Accept 3 arguments (correct, wrong and word)
  /* Define condition for win and loop it. */
  /* Define condition for lose */
};

export const alphabets = () => {
  /* Get alphabets of the English language */
};

export const getRemainingLetters = (currentWord, correctLetters) => {
  /* Get remaining letters of the word */
  const letters = currentWord.split("");
  const remainingLetters = letters.filter((letter) => {
    return !correctLetters.includes(letter);
  });
  return remainingLetters;
};

export const words = () => {
  return [
    "IEEEVIT",
    "Hacktoberfest",
    "GitHub",
    "Git",
    "FOSS",
    "OpenSource",
    "VIT",
  ];

  /* Import this in Guessing component and use it. */
};
