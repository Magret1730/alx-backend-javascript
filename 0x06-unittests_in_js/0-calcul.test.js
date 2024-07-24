const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculate number function test", function() {
  it("checks equality", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("checks decimal equality", function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it("checks decimal equality", function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("checks decimal equality", function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it ("checks for 0", function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it ("checks for 0", function () {
    assert.strictEqual(calculateNumber(0.6, 0), 1);
  });
  it ("checks for 0", function () {
    assert.strictEqual(calculateNumber(0, 0.4), 0);
  });
  it ("checks for negative", function () {
    assert.strictEqual(calculateNumber(-2.4, -1.3), -3);
  });
  it ("checks for negative", function () {
    assert.strictEqual(calculateNumber(-5.4, 6), 1);
  });
  it ("checks for negative", function () {
    assert.strictEqual(calculateNumber(5.4, -6), -1);
  });
});
