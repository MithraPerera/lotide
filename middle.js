function middle(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    return [arr[(arr.length - 1) / 2]];
  } else {
    let start = ((arr.length - 1) / 2);
    return arr.slice(start, start + 2);
  }
}

module.exports = middle;