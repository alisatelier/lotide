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
     

     const takeUntil = function(array, callback) {
                                //Placeholder for new array
  const results = [];
                                //loop through items in array.
  for (let item of array) {
                                //if callback is (item)
    if (callback(item)) {
                                 //stop the loop   
      break;
    }
                                  //push items to placeholder 
    results.push(item);
  }

                                  // return sliced array.
  return results;
};
  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

// loop over iems of the array.
// return true when callback is met
// stop the loop.
//return sliced array.

//break found from https://www.w3schools.com/js/js_break.asp