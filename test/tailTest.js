const tail = require('../tail');
const assert = require('chai').assert

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("should return 3 for words.length", () => {
    assert.strictEqual(words.length, 3);
  });

  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

});

// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
