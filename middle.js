const assertArraysEqual = require("./assertArraysEqual");

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
module.exports = middle;

