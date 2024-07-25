const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai.js');

describe("calculate number function test", function() {
    describe("SUM operation", function() {
        it("should return the sum of two rounded numbers", function () {
            expect(calculateNumber("SUM", 1, 3)).to.equal(4);
        });
        it("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("SUM", 1, 3.7)).to.equal(5);
        });
        it("should return the sum when both numbers are decimal", function () {
            expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
        });
        it ("should return the sum when both numbers are zeros", function () {
            expect(calculateNumber("SUM", 0, 0)).to.equal(0);
        });
        it ("should return the sum when the first arg is decimal", function () {
            expect(calculateNumber("SUM", 0.6, 0)).to.equal(1);
        });
        it ("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("SUM", 0, 0.4)).to.equal(0);
        });
        it ("should return the sum when both numbers are negatives", function () {
            expect(calculateNumber("SUM", -2.4, -1.3)).to.equal(-3);
        });
        it ("should return the sum when the first arg is negative", function () {
            expect(calculateNumber("SUM", -5.4, 6)).to.equal(1);
        });
        it ("should return the sum when the second arg is negative", function () {
            expect(calculateNumber("SUM", 5.4, -6)).to.equal(-1);
        });
        it("should handle large numbers correctly", function () {
            expect(calculateNumber('SUM', 1000000, 999999.5)).to.equal(2000000);
        });
    });

    describe("SUBTRACT operation", function() {
        it("should return the sum of two rounded numbers", function () {
            expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
        });
        it("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("SUBTRACT", 1, 3.7)).to.equal(-3);
        });
        it("should return the sum when both numbers are decimal", function () {
            expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3);
        });
        it ("should return the sum when both numbers are zeros", function () {
            expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
        });
        it ("should return the sum when the first arg is decimal", function () {
            expect(calculateNumber("SUBTRACT", 0.6, 0)).to.equal(1);
        });
        it ("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("SUBTRACT", 0, 0.4)).to.equal(0);
        });
        it ("should return the sum when both numbers are negatives", function () {
            expect(calculateNumber("SUBTRACT", -2.4, -1.3)).to.equal(-1);
        });
        it ("should return the sum when the first arg is negative", function () {
            expect(calculateNumber("SUBTRACT", -5.4, 6)).to.equal(-11);
        });
        it ("should return the sum when the second arg is negative", function () {
            expect(calculateNumber("SUBTRACT", 5.4, -6)).to.equal(11);
        });
    });

    describe("DIVIDE operation", function() {
        it("should return the sum of two rounded numbers", function () {
            expect(calculateNumber("DIVIDE", 9, 3)).to.equal(3);
        });
        it("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("DIVIDE", 9, 2.7)).to.equal(3);
        });
        it("should return the sum when both numbers are decimal", function () {
            expect(calculateNumber("DIVIDE", 9.2, 2.7)).to.equal(3);
        });
        it ("should return the sum when both numbers are zeros", function () {
            expect(() => calculateNumber('DIVIDE', 0, 0)).to.throw(TypeError, 'Error');
        });
        it ("should return the sum when the first arg is decimal", function () {
            expect(() => calculateNumber('DIVIDE', 4.0, 0)).to.throw(TypeError, 'Error');
        });
        it ("should return the sum when the second arg is decimal", function () {
            expect(calculateNumber("DIVIDE", 9, 3.4)).to.equal(3);
        });
        it ("should return the sum when both numbers are negatives", function () {
            expect(calculateNumber("DIVIDE", -9.4, -3.3)).to.equal(3);
        });
        it ("should return the sum when the first arg is negative", function () {
            expect(calculateNumber("DIVIDE", -9.4, 3)).to.equal(-3);
        });
        it ("should return the sum when the second arg is negative", function () {
            expect(calculateNumber("DIVIDE", 9, -3)).to.equal(-3);
        });
    });

    describe('checks the NaN number', function () {
        it('should throw a TypeError when one of the arguments is NaN', () => {
            expect(() => calculateNumber('SUM', NaN, 2).to.throw(TypeError, 'Error'));
            expect(() => calculateNumber('SUBTRACT', 2, NaN).to.throw(TypeError, 'Error'));
            expect(() => calculateNumber('DIVIDE', NaN, 2).to.throw(TypeError, 'Error'));
            expect(() => calculateNumber('shhh', NaN, 3).to.throw(TypeError, 'Error'));
        });
    });
});
