
const flatten = function(nestedArray) {
  const flattened = [];

  for (let j = 0; j < nestedArray.length; j++) {
    const flattenItem = nestedArray[j];
    if (Array.isArray(flattenItem)) {
      for (let k = 0; k < flattenItem.length; k++) {
        flattened.push(flattenItem[k]);
      }
    } else {
      flattened.push(flattenItem);
    }
  };
  return flattened;
};

module.exports = flatten;

