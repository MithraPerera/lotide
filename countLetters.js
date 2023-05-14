const countLetters = function(str) {
  let lettersObj = {};
  for (const letter of str) {
    if (lettersObj.hasOwnProperty(letter)) {
      lettersObj[letter] += 1;
    } else {
      lettersObj[letter] = 1;
    }
  }
  return lettersObj;
};

module.exports = countLetters;