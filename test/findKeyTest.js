const assert = require("chai").assert;
const findKey = require("../findKey");

describe("findKey", () => {
  it('returns "Moon" for rules === "Cancer"', () => {
    const result = findKey({
      Sun: { rules: "Leo" },
      Moon: { rules: "Cancer" },
      Mercury: { rules: "Gemini" },
      Venus: { rules: "Taurus" },
      Mars: { rules: "Aries" },
      Jupiter: { rules: "Sagittarius" },
      Saturn: { rules: "Capricorn" },
      Uranus: { rules: "Aquarius" },
      Neptune: { rules: "Pisces" },
      Pluto: { rules: "Scorpio" },
    }, x => x.rules === "Cancer");
    assert.strictEqual(result, "Moon");
  });

  it('returns "noma" for stars === 2', () => {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    }, x => x.stars === 2);
    assert.strictEqual(result, "noma");
  });

  it("returns undefined when no match is found", () => {
    const result = findKey({
      A: { size: 10 },
      B: { size: 20 },
      C: { size: 30 },
    }, x => x.size === 999);
    assert.strictEqual(result, undefined);
  });

  it("returns first matching key only", () => {
    const result = findKey({
      A: { stars: 2 },
      B: { stars: 2 },
      C: { stars: 2 },
    }, x => x.stars === 2);
    assert.strictEqual(result, "A");
  });
});