const assertEqual = function(actual, expected) {
  const actualStr = actual !== undefined ? actual.toString() : "undefined";
  const expectedStr = expected !== undefined ? expected.toString() : "undefined";
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actualStr} === ${expectedStr}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actualStr} !== ${expectedStr}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  const result = {}

  for (let i = 0; i < allItems.length; i++){
    const element = allItems[i]
    if (itemsToCount[element] === true){
      if (result[element]) { 
        result[element] +=1
      } else {
        result[element] = 1
      }
    }
  }
  return result;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


console.log(result1)