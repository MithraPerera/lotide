const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


// const data3 = [];
// assertArraysEqual(takeUntil(data3, x => x === ','), []);

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
  });
  it("returns everything before a character in an array of strings", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood'])
  });
  it("returns empty array when passed an empty array", () => {
    const data3 = [];
    assert.deepEqual(takeUntil(data3, x => x === ','), [])
  });
});