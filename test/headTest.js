const head = require('../head');
const assert = require('chai').assert


describe("#head", () => {
  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5')
  });
 
});
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 3);
