const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (inputString){
  const result = {};

  for (let letter of inputString){
    if (letter === " ") continue;

     if (result[letter]){
      result[letter] += 1;
     }else {
      result[letter] = 1
     }
      }
      return result; 
  }

countLetters("Hello");

countLetters("lighthouse in the house")

const result = countLetters("Hello");
assertEqual(result['H'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 2);
assertEqual(result['o'], 1);