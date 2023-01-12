const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};

const countLetters = function(str) {
let result = {}
str = str.split(" ").join("")
  for (let letter of str) {
    if(result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("hello there"))