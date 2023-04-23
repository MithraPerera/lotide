const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(arr) {
  return arr.length === 1 ? [] : arr.slice(1);
};

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

//Test Case 2 - 1 element array
const words2 = ['yo yo'];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 1); // original array should still have 3 elements!
assertEqual(tail(words2)[0], undefined);

//Test Case 3 - Empty Array
const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 0); // original array should still have 3 elements!
assertEqual(tail(words3)[0], undefined);