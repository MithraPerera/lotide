const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it('Case 1: Name exists and returns 1', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('Case 2: Name does not exist and returns undefined.', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('Case 3:  Name exists and returns 2', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('Case 4: Name does not exist and returns undefined.', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});