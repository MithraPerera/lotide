const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CASES

const object1 = { name: "Mithra", height: "6 foot" };
const object2 = { name: "Mithra", height: "6 foot" };
assertObjectsEqual(object1, object2);

const object3 = { name: "Mithra" };
assertObjectsEqual(object1, object3);