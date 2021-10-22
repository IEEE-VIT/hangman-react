const Hint = (letters) => {
  // pass an array of unused letters that are part of the word (letters)
  return letters[Math.floor(Math.random() * letters.length)];
};

export default Hint;
