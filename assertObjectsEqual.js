const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed:\n✅ ${inspect(actual)} \n ✅🟰🟰🟰✅ \n ${inspect(expected)} ✅`);
  } else {
    console.log(`Assertion Failed:\n🛑 ${inspect(actual)} \n 🛑❗️🟰🟰🛑\n ${inspect(expected)} 🛑`);
  };
};

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

assertObjectsEqual(thingsAboutMe, currentVibe);

assertObjectsEqual(updatedThingsAboutMe, updatedVibe);