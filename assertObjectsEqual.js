// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let eq = true;
  // Check if same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // Check if Keys have the same values
    for (const key in object1) {
      //Check if value is an array and if they are equal
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        eq = eqArrays(object1[key], object2[key])
      } else if (!object2.hasOwnProperty(key) || object1[key] !== object2[key]) {
        //check if they both have the same key and value
        eq = false;
      }
    }
  } else {
    // if the 2 objects dont have the same number of keys
    eq = false;
  }
  return eq;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CASES

// const object1 = { name: "Mithra", height: "6 foot" };
// const object2 = { name: "Mithra", height: "6 foot" };
// assertObjectsEqual(object1, object2);

// const object3 = { name: "Mithra" };
// assertObjectsEqual(object1, object3);

