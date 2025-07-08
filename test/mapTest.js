const assert = require("chai").assert;
const map = require("../map");

describe("map", () => {
  const poem = [
    ["rustles", "of", "comfort", "reflected", "heat"],
    ["sweeping", "entrance", "swiftly", "the", "feet"],
    ["i", "wait", "for", "the", "drum", "the", "voice", "and", "the", "hum"],
    ["lull", "me", "in", "waking", "sleep"]
  ];

  const firstLetter = (word) => word[0];

  const verse = {};
  for (let i = 0; i < poem.length; i++) {
    verse[i] = map(poem[i], firstLetter);
  }

  it("correctly maps first letters of verse[0] rustles of comfort reflected heat", () => {
    assert.deepEqual(verse[0], ['r', 'o', 'c', 'r', 'h']);
  });

  it("correctly maps first letters of verse[1] sweeping entrance swiftly the feet", () => {
    assert.deepEqual(verse[1], ['s', 'e', 's', 't', 'f']);
  });

  it("correctly maps first letters of verse[2] i wait for the drum the voice and the hum", () => {
    assert.deepEqual(verse[2], ['i', 'w', 'f', 't', 'd', 't', 'v', 'a', 't', 'h']);
  });

  it("correctly maps first letters of verse[3] lull me in waking sleep", () => {
    assert.deepEqual(verse[3], ['l', 'm', 'i', 'w', 's']);
  });

  it("returns squared numbers for an array of numbers", () => {
    const input = [1, 2, 3];
    const result = map(input, (x) => x * x);
    assert.deepEqual(result, [1, 4, 9]);
  });

  it("returns uppercased words", () => {
    const input = ["apple", "banana", "cherry"];
    const result = map(input, (char) => char.toUpperCase());
    assert.deepEqual(result, ["APPLE", "BANANA", "CHERRY"]);
  });

  it("returns an empty array when input is empty", () => {
    const result = map([], (x) => x * 2);
    assert.deepEqual(result, []);
  });

});