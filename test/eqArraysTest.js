const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

//TEST CASES
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([1, 2], [3, 2, 1]), false);
assertEqual(eqArrays([], []), true); // => should PASS