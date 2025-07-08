
const without = function(source, itemsToRemove) {
  let removedValues = [];
  for (let j = 0; j < source.length; j++) {
    if (!itemsToRemove.includes(source[j])) {
      removedValues.push(source[j]);
    }
  }
  return removedValues;
};

module.exports = without;