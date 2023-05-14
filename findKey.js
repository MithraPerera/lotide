const findKey = function(obj, callb) {
  for (const key in obj) {
    if (callb(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;