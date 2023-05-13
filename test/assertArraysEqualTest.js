const assertArraysEqual = require('../assertArraysEqual');

//TEST CASES
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 3], [1, 2, 3]);
assertArraysEqual([], []);