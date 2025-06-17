const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;


};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed ${actual.toString()} === ${expected.toString()}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual.toString()} !== ${expected.toString()}`);
  };
};

const without = function(source, itemsToRemove) {
  let removedValues = [];
  for (let j = 0; j < source.length; j++) {
    if (!itemsToRemove.includes(source[j])) {
      removedValues.push(source[j]);
    }
  }
  return removedValues;
};

console.log((without([1, 2, 3], [1]))); // => [2, 3]
console.log((without(["1", "2", "3"], [1, 2, "3"]))); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);