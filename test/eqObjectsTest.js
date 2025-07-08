const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("eqObjects", () => {
  it("returns true for identical objects with primitive values", () => {
    const obj1 = {
      writing: "A Courtship of Karma and Cosmos",
      listeningTo: "Avatar Soundtrack"
    };
    const obj2 = {
      writing: "A Courtship of Karma and Cosmos",
      listeningTo: "Avatar Soundtrack"
    };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false for objects with same keys but different primitive values", () => {
    const obj1 = {
      writing: "A Courtship of Karma and Cosmos",
      listeningTo: "Avatar Soundtrack"
    };
    const obj2 = {
      writing: "A Courtship of Karma and Cosmos",
      listeningTo: "Blade Runner Soundtrack"
    };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns true for identical objects with array values", () => {
    const obj1 = {
      writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
      listeningTo: ["Avatar Soundtrack", "Boyfriend's Grandpa Rock"]
    };
    const obj2 = {
      writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
      listeningTo: ["Avatar Soundtrack", "Boyfriend's Grandpa Rock"]
    };
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false for objects with different array values", () => {
    const obj1 = {
      writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
      listeningTo: ["Avatar Soundtrack", "Boyfriend's Grandpa Rock"]
    };
    const obj2 = {
      writing: ["A Courtship of Karma and Cosmos", "Intuition Mission"],
      listeningTo: ["Avatar Soundtrack", "Unique Genre Car EDM"]
    };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns false for objects with different number of keys", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns false for objects with same keys but different types", () => {
    const obj1 = { key: "1" };
    const obj2 = { key: 1 };
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });
});
