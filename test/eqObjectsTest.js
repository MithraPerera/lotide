const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CASES

// CASE 1
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

// CASE 2
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// CASE 3
const gameObj = { title: "Halo", genre: "Shooter", multiplayer: true };
const gameObj2 = { title: "Halo", genre: "Shooter", multiplayer: false }

//Test Case with array values

// CASE 4

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

// CASE 5

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


describe("#eqObjects", () => {
  it('Case 1: 2 objects are the same.', () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it('Case 2: 2 objects are different.', () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
  it('Case 3: 2 objects are almost the same except 1 key/value', () => {
    assert.strictEqual(eqObjects(gameObj, gameObj2), false);
  });
  it('Case 4: 2 objects that are the same with array values', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
  it('Case 5: 2 objects that are not the same with array values', () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });
});