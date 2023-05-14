const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  //TEST CASE: returning a new array and not modify the original array
  const words = ["hello", "world", "lighthouse"];
  it('returning an array of strings without an element - string', () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it('returning an array of numbers without an array of 1 number', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('returning an array of numbers and strings without any of the items from another array of numbers and strings', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});