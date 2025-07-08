const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  it("returns 1 for 'Jason'", () => {
    const result = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns undefined for 'Karima' (not present)", () => {
    const result = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns 2 for 'Fang'", () => {
    const result = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns undefined for 'Agouhanna' (marked false)", () => {
    const result = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });
    assert.strictEqual(result["Agouhanna"], undefined);
  });

  it("returns an empty object when nothing is marked true", () => {
    const result = countOnly(firstNames, { Jason: false, Salima: false });
    assert.deepEqual(result, {});
  });
});