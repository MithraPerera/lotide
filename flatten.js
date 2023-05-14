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

module.exports = flatten;