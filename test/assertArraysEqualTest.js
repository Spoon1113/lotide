const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "3", "5"], ["1", "2", "3"]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual([], []);