const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

function findKeyByValue (object, value){

  for ( let key of Object.keys(object)){
     if (object[key] === value){
      return key; 
     }
     }
    return undefined;
    }
   

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")

const thingsAboutMe = {
  hobby: "Writing",
  business: "The Spirit Atelier",
  flower: "Lilac",
  colour: "Dusty Pink",
}

assertEqual(findKeyByValue(thingsAboutMe, "Lilac"), "flower")
assertEqual(findKeyByValue(thingsAboutMe, "Tarot"), undefined)