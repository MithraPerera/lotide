const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {
  // Test Case 1: Array of strings
  const words = ["ground", "control", "to", "major", "tom"];
  it('map with an array of strings', () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  // Test Case 2: Array of Numbers
  const nums = [1, 2, 3, 4, 5];
  it('map with an array of numbers', () => {
    assert.deepEqual(map(nums, num => num * 2), [2, 4, 6, 8, 10]);
  });
  // Test Case 3: Empty array
  const nums2 = [];
  it('map with an array of numbers', () => {
    assert.deepEqual(map(nums2, num => num * 2), []);
  });
  // Test Case 4: Callback doesnt change array
  const words2 = ["ground", "control", "to", "major", "tom"];
  it('map when the callback does not change the array', () => {
    assert.deepEqual(map(words2, word => word), ["ground", "control", "to", "major", "tom"]);
  });
});