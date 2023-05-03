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

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// TEST CASES

// Test Case 1: Array of strings
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

// Test Case 2: Array of Numbers
const nums = [1, 2, 3, 4, 5];
assertArraysEqual(map(nums, num => num * 2), [2, 4, 6, 8, 10]);

// Test Case 3: Empty array
const nums2 = [];
assertArraysEqual(map(nums2, num => num * 2), []);

// Test Case 4: Callback doesnt change array
const words2 = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words2, word => word), ["ground", "control", "to", "major", "tom"]);