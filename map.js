//assertArraysEqual to check assertion.
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

// map function to call first letter of each word.

const verse0 = ["rustles", "of", "comfort", "reflected", "heat"]
const verse1 = ["sweeping", "entrance", "swiftly", "the", "feet"]
const verse2 = ["i", "wait", "for", "the", "drum", "the", "voice", "and", "the", "hum"]
const verse3 = ["lull", "me", "in", "waking", "sleep"]

poem = [verse0,verse1, verse2, verse3]

//loops through array values and pushes the callback into a new array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
//this is the callback which finds first letter of the array value.
const firstLetter = (word) => word[0]

// placeholder for for lop[]
const verse = {};

//loops through the verses held in the array, 'poem' and applies the map function directly to the result, for each index of the poem.
for (let i = 0; i < poem.length; i++) {
  const poetry = poem[i];
  verse[i] = map(poetry, firstLetter);
}
// able to call the verse easily.
console.log(verse[3])


assertArraysEqual(verse[0],['r', 'o', 'c', 'r', 'h'] )
assertArraysEqual(verse[1], ['s','e','s','t','f'])
assertArraysEqual(verse[2], ['i','w','f','t', 'd','t','v','a','t','h'])
