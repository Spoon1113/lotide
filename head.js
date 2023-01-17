const assertEqual = require('./assertEqual')

const head = function(arr) {
  let output = arr[0];
  return output;
};

module.exports = head;

console.log(head([1, 2, 3]))