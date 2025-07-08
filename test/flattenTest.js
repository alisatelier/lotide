const assert = require("chai").assert;
const flatten = require("../flatten");

describe("flatten", () => {
  it("flattens a basic 1-level nested array", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(input), expected);
  });

  it("returns the same array if no nested arrays are present", () => {
    const input = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    assert.deepEqual(flatten(input), expected);
  });

  it("handles an array with only nested arrays", () => {
    const input = [[1, 2], [3, 4]];
    const expected = [1, 2, 3, 4];
    assert.deepEqual(flatten(input), expected);
  });

  it("handles an empty array", () => {
    const input = [];
    const expected = [];
    assert.deepEqual(flatten(input), expected);
  });

  it("handles an array with mixed types", () => {
    const input = [1, "a", [true, null]];
    const expected = [1, "a", true, null];
    assert.deepEqual(flatten(input), expected);
  });

  it("does not flatten nested arrays deeper than one level", () => {
    const input = [1, [2, [3, 4]], 5];
    const expected = [1, 2, [3, 4], 5];
    assert.deepEqual(flatten(input), expected);
  });
});