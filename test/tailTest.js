const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  //Test Case: Check the original array
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  //Test Case 2 - 1 element array
  const words2 = ['yo yo'];
  it('returns empty array for array with only 1 element', () => {
    assert.deepEqual(tail(words2), []);
  });
  //Test Case 3 - Empty Array
  const words3 = [];
  it('returns empty array for an empty array', () => {
    assert.deepEqual((tail(words3)), []);
  });
});