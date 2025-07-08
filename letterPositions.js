const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letterIndex = sentence[i];
    if (letterIndex === " ") continue;
    if (results[letterIndex]) {
      results[letterIndex].push(i);
    } else {
      results[letterIndex] = [i];
    }

  }
  return results;
};

module.exports = letterPositions;