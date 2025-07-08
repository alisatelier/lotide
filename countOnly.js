
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (let i = 0; i < allItems.length; i++) {
    const element = allItems[i];
    if (itemsToCount[element]) {
      if (result[element]) {
        result[element] += 1;
      } else {
        result[element] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;