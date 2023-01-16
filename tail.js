const assertEqual = require('./assertEqual')

const tail = function(arr) {
  for (let i = 0; i < arr.length; i++) {
  }
  return arr.slice(1);
};

module.exports = tail;

