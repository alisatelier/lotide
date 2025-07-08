# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @alisatelier/lotide`

**Require it:**

`const _ = require('@alisatelier/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- #### [CountLetters()](./countLetters.js) : countLetters function takes a string and returns an object where each key is a letter (excluding spaces), and its value is the number of times that letter appears in the string.

  example: Given the string: "My Intuition Made Me Do It" (The title of my published book), this function returns an object of the number of times each letter appears. { M: 3, y: 1, I: 3, n: 2, t: 3, u: 1, i: 3, o: 2, a: 1, d: 2, e: 2 }

  ```js
  countLetters("My Intuition Made Me Do It");
  //returns { M: 3, y: 1, I: 3, n: 2, t: 3, u: 1, i: 3, o: 2, a: 1, d: 2, e: 2 }
  ```

- #### [countOnly()](./countOnly.js) : takes an array (allItems) and an object (itemsToCount) that specifies which items to count (with true values). It returns a new object with counts of only the specified items that appear in the array.

  example: You're doing inventory of a collection of products and want to include some products in your inventory, but not others. You don't want collect them all. By scanning (allItems), you only count the products you are collecting inventory of.

  ```javascript
  const allItems = ["Norse Runes", "Rune Cloth", "Tarot Deck", "Journal"];
  const itemsToCount = {
    "Norse Runes": true,
    "Rune Cloth": true,
    "Tarot Deck": true,
    Journal: false,
  };

  countOnly(allItems, itemsToCount);
  // returns { "Norse Runes": 1, "Rune Cloth": 1, "Tarot Deck": 1 }
  ```

- #### [eqObjects()](./eqObjects.js) : eqObjects function compares two objects and returns true if they have the same keys with equal values. It handles both primitive values and arrays, using a helper function to compare array contents accurately.

  example: the following would return true, because the key/value pairs are identical in both objects.

  ```javascript
  const obj1 = {
    writing: "A Courtship of Karma and Cosmos",
    listeningTo: "Collection of Bridgerton Soundtracks",
  };

  const obj2 = {
    writing: "A Courtship of Karma and Cosmos",
    listeningTo: "Collection of Bridgerton Soundtracks",
  };
  ```

- #### [findKey()](./findKey.js) : findKey searches through an object and returns the first key for which the provided callback returns true. If no match is found, it returns undefined.

  example: In this example, findKey is used to search the planets object for the first key whose rules property is equal to "Gemini". The function returns "Mercury", since Mercury is the first planet listed that rules Gemini.

  ```javascript
  const planets = {
    Sun: { rules: "Leo" },
    Moon: { rules: "Cancer" },
    Mercury: { rules: "Gemini" },
  };

  findKey(planets, (obj) => obj.rules === "Gemini");
  // returns: Mercury
  ```

- #### [findKeyByValue()](./findKeyByValue.js) : findKeyByValuetakes an object and a value, then searches for the first key that maps to that value. If the value is found, it returns the corresponding key; otherwise, it returns undefined.

  example: you are looking through an object (thingsAboutMe) and need the key associated with the value "Lilac".

  ```javascript
  const thingsAboutMe = {
    hobby: "Writing",
    business: "The Spirit Atelier",
    flower: "Lilac",
    colour: "Dusty Pink",
  };

  findKeyByValue(thingsAboutMe, "Lilac");
  //returns 'flower'
  ```

- #### [flatten()](./flatten.js) : flatten() takes a single-level nested array (an array that contains arrays within it) and returns a new array with all items brought to the top level — no nesting. It only flattens one level deep, making it ideal for tidying up slightly messy data structures.

  example: you manage a calendar, which includes both single bookings and group sessions (where multiple names are booked under one slot). To send out reminders, you need a flat list of all individual clients.

  ```javascript
  const bookings = [
    "Nicole",
    ["Taryn", "Robyn"],
    "Cassidy",
    ["Kevin", "Devyn", "Priscilla"],
  ];
  flatten(bookings);
  // returns ["Nicole", "Taryn", "Robyn", "Cassidy", "Kevin", "Devyn", "Priscilla"]
  ```

- #### [letterPositions()](./letterPositions.js) : letterPositions() takes a string (sentence) and returns an object. Each key is a character (excluding spaces), and its value is an array of all the indices in the string where that character appears. It’s especially useful for analyzing patterns or tracking character positions in text.

  example: you are writing a poem and want to track the emotional tone though frequency or cadence of vowels/consonants.

  ```javascript
  const poem = "rustles of comfort reflected heat,";

  letterPositions(poem);
  // returns { r: [0, 12, 21, 32], u: [1], s: [2], t: [3, 24, 34], l: [4, 27], e: [5, 22, 29, 36], o: [6, 9, 13, 16], f: [7, 23], c: [10, 26], m: [14], d: [30], h: [35], a: [37] }
  ```

- #### [map()](./map.js) :map() takes two arguments: an array of items and a callback function to apply to each item. It returns a new array, where each element is the result of calling the callback on the corresponding element from the original array.

  example: you're still working on more poetry and want to assign a pattern to the first letter of each word.

  ```javascript
  const poemLine = "Ali lightly calls her exciting memory: you";

  const firstLetter = (word) => word[0];

  map(poemLine, firstLetter);
  //returns ["a", "l", "c", "h", "e", "m", "y"]
  ```

- #### [middle()](./middle.js) : middle() function returns the middle element(s) of an array, based on its length: If the array has 1 or 2 elements, it returns an empty array [] — because there is no meaningful "middle." If the array length is odd, it returns the single middle element. If the array length is even, it returns the two middle elements.

  example: you're featuring a median product as a feature in a carousel. You'd like the middle product to be featured.

  ```javascript
  const products = [
    "Norse Runes",
    "Rune Cloth",
    "Book",
    "Tarot Deck",
    "Journal",
  ];

  middle(products);
  //returns ["Book"]
  ```

- #### [tail()](./tail.js) : tail() function returns a new array containing all elements of the input array except the first one.

  example: you have a video series on a courses platform and want the user to be able to skip the first video.

  ```javascript
  const videoSeries = [
    "Welcome & Course Overview", // Intro
    "Lesson 1: Tarot 101",
    "Lesson 2: Norse Rune Mythology",
    "Lesson 3: The Planets",
    "Lesson 4: The Zodiacs",
  ];
  tail(videoSeries);
  // returns [
  //"Lesson 1: Tarot 101",
  //"Lesson 2: Norse Mythology",
  //"Lesson 3: The Planets",
  //"Lesson 4: The Zodiacs",
  ```

- #### [takeUntil()](./takeUntil.js) : takeUntil() iterates over an array and collects elements into a new array until the provided callback returns true. Once the callback returns true, the function stops adding items and returns the collected array. It does not include the item that caused the callback to return true.

  example: You want to return all products that appear before the first product that contains a specific keyword — in this case, "Runes".

  ```javascript
  const products = [
    "Book",
    "Tarot Deck",
    "Norse Runes",
    "Rune Cloth",
    "Journal",

  ];,

  takeUntil(products, (product) => product.includes("Runes"))
  // returns ["Book", "Tarot Deck"]
  ```

- #### [without()](./without.js) : without() returns a new array that includes all elements from the original source array except those specified in the itemsToRemove array. It does not modify the original array. It filters out all values that match anything in itemsToRemove

  example: You're doing inventory for a market and want to return all items except a few which are not going to go with you.

  ```javascript
  const products = [
    "Book",
    "Tarot Deck",
    "Norse Runes",
    "Rune Cloth",
    "Journal",

  ];,

  without(products, ["Journal", "Tarot Deck"])
  // returns ["Book", "Norse Runes", "Rune Cloth"]
  ```

\*\* All Examples are just for fun, but hopefully provide clarity on the fuctions use.
