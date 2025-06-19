const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    let values1 = object1[key];
    let values2 = object2[key];

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

const thingsAboutMe = {
  writing: "A Courtship of Karma and Cosmos",
  listeningTo: "Avatar Soundtrack",
};

const currentVibe = {
  writing: "A Courtship of Karma and Cosmos",
  listeningTo: "Avatar Soundtrack",
};

const updatedThingsAboutMe = {
  writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
  listeningTo: ["Avatar Soundtrack", "Boyfriend's Grandpa Rock"],
};

const updatedVibe = {
  writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
  listeningTo: ["Avatar Soundtrack", "Unique Genre Car EDM"],
};

assertEqual((eqObjects(thingsAboutMe, currentVibe)), true);

assertEqual((eqObjects(updatedThingsAboutMe, updatedVibe)), false);