const assert = require('chai').assert;
const countLetters = require('../countLetters');

const letters = countLetters("LHL");
const letters2 = countLetters("lighthouse in the house");
/* letters2 is equal to
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

describe("#countLetters", () => {
  it("Case 1: returns count of letter", () => {
    assert.strictEqual(letters["L"], 2);
  });
  it("Case 2: returns count of letter", () => {
    assert.strictEqual(letters["H"], 1);
  });
  it("Case 3: returns undefined for a letter that is not in string", () => {
    assert.strictEqual(letters2["z"], undefined);
  });
  it("Case 4: returns count of letter", () => {
    assert.strictEqual(letters2["g"], 1);
  });
  it("Case 5: returns count of letter", () => {
    assert.strictEqual(letters2["e"], 3);
  });
});