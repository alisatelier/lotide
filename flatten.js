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
  const flattened = [];

  for (let j = 0; j < nestedArray.length; j++) {
    const flattenItem = nestedArray[j];
    if (Array.isArray(flattenItem)) {
      for (let k = 0; k < flattenItem.length; k++) {
        flattened.push(flattenItem[k]);
      }
    } else {
      flattened.push(flattenItem);
    }
};
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

