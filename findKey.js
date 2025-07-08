let findKey = (object, callback) => {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;