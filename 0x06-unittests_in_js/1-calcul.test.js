const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculate number function test", function() {
    describe("SUM operation", function() {
        it("should return the sum of two rounded numbers", function () {
            assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
        });
        it("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
        });
        it("should return the sum when both numbers are decimal", function () {
            assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
        });
        it ("should return the sum when both numbers are zeros", function () {
            assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
        });
        it ("should return the sum when the first arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUM", 0.6, 0), 1);
        });
        it ("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUM", 0, 0.4), 0);
        });
        it ("should return the sum when both numbers are negatives", function () {
            assert.strictEqual(calculateNumber("SUM", -2.4, -1.3), -3);
        });
        it ("should return the sum when the first arg is negative", function () {
            assert.strictEqual(calculateNumber("SUM", -5.4, 6), 1);
        });
        it ("should return the sum when the second arg is negative", function () {
            assert.strictEqual(calculateNumber("SUM", 5.4, -6), -1);
        });
        it("should handle large numbers correctly", function () {
            assert.strictEqual(calculateNumber('SUM', 1000000, 999999.5), 2000000);
        });
    });

    describe("SUBTRACT operation", function() {
        it("should return the sum of two rounded numbers", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2);
        });
        it("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
        });
        it("should return the sum when both numbers are decimal", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 1.2, 3.7), -3);
        });
        it ("should return the sum when both numbers are zeros", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
        });
        it ("should return the sum when the first arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 0.6, 0), 1);
        });
        it ("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 0, 0.4), 0);
        });
        it ("should return the sum when both numbers are negatives", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", -2.4, -1.3), -1);
        });
        it ("should return the sum when the first arg is negative", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", -5.4, 6), -11);
        });
        it ("should return the sum when the second arg is negative", function () {
            assert.strictEqual(calculateNumber("SUBTRACT", 5.4, -6), 11);
        });
    });

    describe("DIVIDE operation", function() {
        it("should return the sum of two rounded numbers", function () {
            assert.strictEqual(calculateNumber("DIVIDE", 9, 3), 3);
        });
        it("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("DIVIDE", 9, 2.7), 3);
        });
        it("should return the sum when both numbers are decimal", function () {
            assert.strictEqual(calculateNumber("DIVIDE", 9.2, 2.7), 3);
        });
        it ("should return the sum when both numbers are zeros", function () {
            try {
                calculateNumber('DIVIDE', 0, 0);
            } catch (err) {
                assert(err instanceof TypeError);
                assert.strictEqual(err.message, 'Error');
            }
            // assert.instanceOf(calculateNumber('DIVIDE', 0, 0), Error);
            // assert.strictEqual(calculateNumber('DIVIDE', 0, 0).message, 'Error');
            // assert.strictEqual(calculateNumber("DIVIDE", 0, 0), 'Error');
        });
        it ("should return the sum when the first arg is decimal", function () {
            try {
                calculateNumber('DIVIDE', 4.0, 0);
            } catch (err) {
                assert(err instanceof TypeError);
                assert.strictEqual(err.message, 'Error');
            }
            // assert.instanceOf(calculateNumber('DIVIDE', 0, 0), Error);
            // assert.strictEqual(calculateNumber('DIVIDE', 8.4, 0).message, 'Error');
            // assert.strictEqual(calculateNumber("DIVIDE", 0.6, 0), 'Error');
        });
        it ("should return the sum when the second arg is decimal", function () {
            assert.strictEqual(calculateNumber("DIVIDE", 9, 3.4), 3);
        });
        it ("should return the sum when both numbers are negatives", function () {
            assert.strictEqual(calculateNumber("DIVIDE", -9.4, -3.3), 3);
        });
        it ("should return the sum when the first arg is negative", function () {
            assert.strictEqual(calculateNumber("DIVIDE", -9.4, 3), -3);
        });
        it ("should return the sum when the second arg is negative", function () {
            assert.strictEqual(calculateNumber("DIVIDE", 9, -3), -3);
        });
    });
});
