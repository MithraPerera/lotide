function without(source, itemsToRemove) {
  let newArr = [];
  for (const item of itemsToRemove) {
    if (source.indexOf(item) >= 0) {
      // newArr = source.slice(source.indexOf(item) + 1);
      // console.log(newArr);
      newArr = source.filter(elem => elem !== item);
    }
  }
  return newArr;
}

module.exports = without;