const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return true;
}

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

// TEST CASES

// CASE 1
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// CASE 2
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// CASE 3
const gameObj = { title: "Halo", genre: "Shooter", multiplayer: true };
const gameObj2 = { title: "Halo", genre: "Shooter", multiplayer: false }
assertEqual(eqObjects(gameObj, gameObj2), false);

//Test Case with array values

// CASE 4

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// CASE 5

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);