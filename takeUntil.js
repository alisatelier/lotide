const takeUntil = function(array, callback) {
                                //Placeholder for new array
  const results = [];
                                //loop through items in array.
  for (let item of array) {
                                //if callback is (item)
    if (callback(item)) {
                                 //stop the loop   
      break;
    }
                                  //push items to placeholder 
    results.push(item);
  }

                                  // return sliced array.
  return results;
};
  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// loop over iems of the array.
// return true when callback is met
// stop the loop.
//return sliced array.

//break found from https://www.w3schools.com/js/js_break.asp