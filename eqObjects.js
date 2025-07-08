
const eqArrays = require("./eqArrays")

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
module.exports = eqObjects;