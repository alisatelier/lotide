
const middle = function(arr) {
  const lengthCheck = arr.length;
  if (lengthCheck <= 2) return [];
  const middleIndex = Math.floor(arr.length / 2);
  if (lengthCheck % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }
  else return [arr[middleIndex]];
};


module.exports = middle;
