const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("letterPositions", () => {
  it("returns [1] for 'hello'.e", () => {
    const result = letterPositions("hello");
    assert.deepEqual(result["e"], [1]);
  });

  it("returns [2, 3] for 'hello'.l", () => {
    const result = letterPositions("hello");
    assert.deepEqual(result["l"], [2, 3]);
  });

  it("returns all correct indices for 'lighthouse in the house'.h", () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepEqual(result["h"], [3, 5, 15, 18]);
  });

  it("returns undefined for a letter not present", () => {
    const result = letterPositions("hello world");
    assert.strictEqual(result["z"], undefined);
  });

  it("ignores spaces in the sentence", () => {
    const result = letterPositions("a b a");
    assert.deepEqual(result["a"], [0, 4]);
    assert.deepEqual(result["b"], [2]);
    assert.strictEqual(result[" "], undefined);
  });

  it("is case-sensitive", () => {
    const result = letterPositions("AbA");
    assert.deepEqual(result["A"], [0, 2]);
    assert.deepEqual(result["b"], [1]);
  });
});
