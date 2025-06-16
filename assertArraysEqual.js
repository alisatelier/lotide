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
    console.log(`✅ Assertion Passed ${actual.toString()} is equal to ${expected.toString()}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual.toString()} is not equal to ${expected.toString()}`);
  };
     } ;

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false