// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let countNames = {};
  for (const name of allItems) {
    for (const person in itemsToCount) {
      if (itemsToCount[person] && person === name) {
        // Using logical nullish operator to convert undefined to 0
        countNames[person] = (countNames[person] ??= 0) + 1;
      }
    }
  }
  console.log(countNames);
  return countNames;
}

module.exports = countOnly;