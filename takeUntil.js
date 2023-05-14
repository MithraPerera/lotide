const takeUntil = function(array, callback) {
  let newArr = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    newArr.push(item);
  }
  return newArr;
}

module.exports = takeUntil;