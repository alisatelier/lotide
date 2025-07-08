const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe("takeUntil", () => {
  it("stops when a negative number is encountered", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(input, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });

  it("stops when a comma is encountered", () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(input, x => x === ",");
    assert.deepEqual(result, ["I've", "been", "to", "Hollywood"]);
  });

  it("returns entire array if callback never returns true", () => {
    const input = [1, 2, 3, 4];
    const result = takeUntil(input, x => x > 10);
    assert.deepEqual(result, [1, 2, 3, 4]);
  });

  it("returns empty array if first element matches callback", () => {
    const input = [0, 1, 2, 3];
    const result = takeUntil(input, x => x === 0);
    assert.deepEqual(result, []);
  });

  it("works with strings", () => {
    const input = ["go", "until", "stop", "wait"];
    const result = takeUntil(input, word => word === "stop");
    assert.deepEqual(result, ["go", "until"]);
  });

  it("works with empty array", () => {
    const input = [];
    const result = takeUntil(input, x => x === 0);
    assert.deepEqual(result, []);
  });
});