
const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {

  it('should return ["Lighthouse", "Labs"] when passed ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('should not modify the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('should return one fewer element than the original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const newArray = tail(words);
    assert.equal(newArray.length, words.length - 1);
  });

  it('should return an empty array when passed a single-element array', () => {
    assert.deepEqual(tail(["test"]), []);
  });

  it('should return an empty array when passed an empty array', () => {
    assert.deepEqual(tail([]), []);
  });
});
