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

const middle = function(arr){
  const length = arr.length;
  if (length <=2) return [];
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0){
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  else return [arr[middleIndex]];
  }

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
