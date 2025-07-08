const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("countLetters", () => {
  it("should return correct counts for 'Hello'", () => {
    const result = countLetters("Hello");
    assert.strictEqual(result['H'], 1);
    assert.strictEqual(result['e'], 1);
    assert.strictEqual(result['l'], 2);
    assert.strictEqual(result['o'], 1);
  });

  it("should ignore spaces and count correctly for 'lighthouse in the house'", () => {
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result['l'], 1);
    assert.strictEqual(result['i'], 2);
    assert.strictEqual(result['g'], 1);
    assert.strictEqual(result['h'], 4);
    assert.strictEqual(result['t'], 2);
    assert.strictEqual(result['o'], 2);
    assert.strictEqual(result['u'], 2);
    assert.strictEqual(result['s'], 2);
    assert.strictEqual(result['e'], 3);
    assert.strictEqual(result['n'], 1);
  });

  it("should return an empty object for an empty string", () => {
    const result = countLetters("");
    assert.deepEqual(result, {});
  });

  it("should be case-sensitive", () => {
    const result = countLetters("aA");
    assert.strictEqual(result['a'], 1);
    assert.strictEqual(result['A'], 1);
  });
});