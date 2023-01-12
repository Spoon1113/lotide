const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } 
};  

const letterPositions = function(sentence) {
  sentence = sentence.split(" ").join("")
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else
      results[sentence[i]] = [i]
    }
  return results;
};

console.log(letterPositions("lighthouse in the house"))
console.log(letterPositions("HelLo there"))