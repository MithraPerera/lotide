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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (const i in sentence) {
    results.hasOwnProperty(sentence[i]) ? results[sentence[i]].push(Number(i)) : results[sentence[i]] = [Number(i)];
  }
  return results;
};

// TEST CASE 1

let letters = letterPositions("hello");
assertArraysEqual(letters["l"], [2, 3]);
assertArraysEqual(letters["h"], [0]);

// TEST CASE 2

letters = letterPositions("lighthouse in the house");
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

assertArraysEqual(letters["l"], [0]);
assertArraysEqual(letters["o"], [6, 19]);
assertArraysEqual(letters["e"], [9, 16, 22]);