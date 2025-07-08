const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("findKeyByValue", () => {
  it('returns "drama" for value "The Wire" in bestTVShowsByGenre', () => {
    const bestTVShowsByGenre = {
      drama: "The Wire",
      comedy: "Brooklyn Nine-Nine",
      thriller: "The Silence of the Lambs"
    };
    const result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });

  it('returns "flower" for value "Lilac" in thingsAboutMe', () => {
    const thingsAboutMe = {
      hobby: "Writing",
      business: "The Spirit Atelier",
      flower: "Lilac",
      colour: "Dusty Pink",
    };
    const result = findKeyByValue(thingsAboutMe, "Lilac");
    assert.strictEqual(result, "flower");
  });

  it("returns undefined when the value is not found", () => {
    const thingsAboutMe = {
      hobby: "Writing",
      business: "The Spirit Atelier",
      flower: "Lilac",
      colour: "Dusty Pink",
    };
    const result = findKeyByValue(thingsAboutMe, "Tarot");
    assert.strictEqual(result, undefined);
  });

  it("returns the first matching key when multiple keys have same value", () => {
    const obj = {
      a: "repeat",
      b: "unique",
      c: "repeat",
    };
    const result = findKeyByValue(obj, "repeat");
    assert.strictEqual(result, "a");
  });

  it("returns undefined for empty object", () => {
    const result = findKeyByValue({}, "anything");
    assert.strictEqual(result, undefined);
  });
});