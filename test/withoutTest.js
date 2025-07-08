const assert = require("chai").assert;
const without = require("../without");

describe("without", () => {
  it("removes numbers from an array", () => {
    const result = without([1, 2, 3], [1]);
    assert.deepEqual(result, [2, 3]);
  });

  it("removes stringified numbers only (not actual numbers)", () => {
    const result = without(["1", "2", "3"], [1, 2, "3"]);
    assert.deepEqual(result, ["1", "2"]);
  });

  it("does not alter the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = without(words, ["lighthouse"]);
    assert.deepEqual(result, ["hello", "world"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it("returns full array if no matches found", () => {
    const input = [1, 2, 3];
    const result = without(input, [4]);
    assert.deepEqual(result, [1, 2, 3]);
  });

  it("returns empty array if all items are removed", () => {
    const input = [1, 2];
    const result = without(input, [1, 2]);
    assert.deepEqual(result, []);
  });

  it("handles empty source array", () => {
    const result = without([], [1, 2]);
    assert.deepEqual(result, []);
  });

  it("handles empty itemsToRemove array", () => {
    const result = without([1, 2, 3], []);
    assert.deepEqual(result, [1, 2, 3]);
  });
});