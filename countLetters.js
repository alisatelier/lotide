

const countLetters = function(inputString) {
  const result = {};

  for (let letter of inputString) {
    if (letter === " ") continue;

    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;