const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it('flatten a 2 level array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('flatten a 2 level array with an empty array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4, 6, 7], 5, []]), [1, 2, 3, 4, 6, 7, 5]);
  });
  it('return a 1 level array that does not need to be flattened', () => {
    assert.deepEqual(flatten([1, 2, 5]), [1, 2, 5]);
  });
});