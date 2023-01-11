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

const middle = function(arr) {
  let output = [];
  let midValue = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return output;
  } else if (arr.length % 2 === 0) {
    output.push(arr[midValue - 1], arr[midValue]);
  } else {
    output.push(arr[midValue]);
  }
  return output;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => [])

console.log(middle([4, 5, 6])); // => [2])
console.log(middle([1, 2, 3, 4, 5])); // => [3])

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4])