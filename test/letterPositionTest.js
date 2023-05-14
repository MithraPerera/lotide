const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  // TEST 1
  let letters = letterPositions("hello"); //returns an object
  it('return 2 places in the word with the letter', () => {
    assert.deepEqual(letters["l"], [2, 3]);
  });
  it('return 1 index of the letter in the string', () => {
    assert.deepEqual(letters["h"], [0]);
  });

  // TEST 2
  let letters2 = letterPositions("lighthouse in the house");
  /* letters equals:
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

  it('returns 3 indexs of the letter in the string', () => {
    assert.deepEqual(letters2["e"], [9, 16, 22]);
  });

});