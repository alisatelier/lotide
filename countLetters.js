const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// take in a string and return a count of each letter
// loop through string of letters
// if first time seeing letter, return letter as object.
// subsequnt iterations, add letter to count

const countLetters = function (inputString){
  const result = {};

  for (let letter of inputString){
    const isolateLetter = letter.toLowerCase();

    if (isolateLetter === " ") continue;

     if (result[isolateLetter]){
      result[isolateLetter] += 1;
     }else {
      result[isolateLetter] = 1
     }
      }

    console.log(result);
  }

countLetters("Hello");

countLetters("lighthouse in the house")