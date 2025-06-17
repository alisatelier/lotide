const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  
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


const flatten = function(nestedArray) {
return nestedArray.flat(Infinity);
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);

assertArraysEqual(flatten([1, [2, [3, [7]], 5]]), [1, 2, 3, 7, 5]);

assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 6]);

