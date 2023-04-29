const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  let lettersObj = {};
  for (const letter of str) {
    if (lettersObj.hasOwnProperty(letter)) {
      lettersObj[letter] += 1;
    } else {
      lettersObj[letter] = 1;
    }
  }
  return lettersObj;
};

// TEST CASE 1

const letters = countLetters("LHL");

assertEqual(letters["L"], 2);
assertEqual(letters["H"], 1);

// TEST CASE 1

const letters2 = countLetters("lighthouse in the house");
/* letters2 is equal to
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/

assertEqual(letters2["z"], undefined);
assertEqual(letters2["g"], 1);
assertEqual(letters2["s"], 2);
assertEqual(letters2["e"], 3);