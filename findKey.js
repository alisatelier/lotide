const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let findKey = (object, callback) => {
  for (let key of Object.keys(object)){
    if(callback(object[key])){
      return key;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Sun": {rules: "Leo"},
  "Moon": {rules: "Cancer"},
  "Mercury": {rules: "Gemini"},
  "Venus": {rules: "Taurus"},
  "Mars": {rules: "Aries"},
  "Jupiter": {rules: "Sagittarius"},
  "Saturn": {rules: "Capricorn"},
  "Uranus": {rules: "Aquarius"},
  "Neptune": {rules: "Pisces"},
  "Pluto": {rules: "Scorpio"}
}, (x) => x.rules === "Cancer"), "Moon");


assertEqual((findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
)), "noma");