const assert = require('chai').assert;
const findKey = require('../findKey');

const keyFound = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2); // => "noma"

const keyFound2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 0); // => "noma"

const keyFound3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 4 }
}, x => x.stars === 4); // => "noma"

describe("#findKey", () => {
  it('Test Case 1: Return Key', () => {
    assert.strictEqual(keyFound, 'noma');
  });
  it('Test Case 2: Key not found, return undefined', () => {
    assert.strictEqual(keyFound2, undefined);
  });
  it('Test Case 3: Return Key', () => {
    assert.strictEqual(keyFound3, "Akelarre");
  });
});