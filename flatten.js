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

// Flatten for 1 Level of array nesting
function flatten(arr) {
  let newArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        newArr.push(subItem);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
}

//TEST CASES
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 6, 7], 5, []]), [1, 2, 3, 4, 6, 7, 5]);
assertArraysEqual(flatten([1, 2, 5]), [1, 2, 5]);