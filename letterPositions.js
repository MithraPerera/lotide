const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (const i in sentence) {
    results.hasOwnProperty(sentence[i]) ? results[sentence[i]].push(Number(i)) : results[sentence[i]] = [Number(i)];
  }
  return results;
};

module.exports = letterPositions;