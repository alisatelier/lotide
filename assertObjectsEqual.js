
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

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const values1 = object1[key];
    const values2 = object2[key];

    const isArray = Array.isArray(values1) && Array.isArray(values2);

    if (isArray) {
      if (!eqArrays(values1, values2)) {
        return false;
      }
    }
    else {
      if (values1 !== values2) {
        return false;
      }
    }
  }
  return true;

};

const assertObjectsEqual = function (actual, expected) {
   const inspect = require('util').inspect;
   if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed:\n✅ ${inspect(actual)} \n ✅🟰🟰🟰✅ \n ${inspect(expected)} ✅`);
  } else {
    console.log(`Assertion Failed:\n🛑 ${inspect(actual)} \n 🛑❗️🟰🟰🛑\n ${inspect(expected)} 🛑`);
  };
     } ;

const thingsAboutMe = {
  writing: "A Courtship of Karma and Cosmos",
  listeningTo: "Avatar Soundtrack",
  snackingOn: "Skittles"
};

const currentVibe = {
  writing: "A Courtship of Karma and Cosmos",
  listeningTo: "Avatar Soundtrack",
  snackingOn: "Skittles"
};

const updatedThingsAboutMe = {
  writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
  listeningTo: ["Avatar Soundtrack", "Boyfriend's Grandpa Rock"],
};

const updatedVibe = {
  writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
  listeningTo: ["Avatar Soundtrack", "Unique Genre Car EDM"],
};

assertObjectsEqual(thingsAboutMe, currentVibe)

assertObjectsEqual(updatedThingsAboutMe, updatedVibe)