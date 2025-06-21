const tail = function (array) {
  return array.slice(1);
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const newArray = tail(words);
assertEqual(words.length, 3);

console.log(newArray);
console.log(words);

assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty

assertEqual(newArray.length, words.length - 1); // tail should have one element less than its input

assertEqual(newArray.length, words.length - 0); // tail should have one element less than its input
