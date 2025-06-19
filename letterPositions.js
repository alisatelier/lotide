const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i< arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
    return true;

    
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed ${actual.toString()} === ${expected.toString()}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
  };
     } ;
//return all indices where the character is found.
// multiple numbers may be needed to represent all the places in the string where it appears.

const letterPositions = function (sentence) {
  const results = {};
   for (let i = 0; i < sentence.length; i++) {
      const letterIndex = sentence[i]
      if (letterIndex === " ") continue;
      if (results[letterIndex]){
        results[letterIndex].push(i);
      } else{
        results[letterIndex] = [i];
      }

      } 
        return results; 
   }

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

console.log(letterPositions("lighthouse in the house"))