const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');
// const { utils } = require('mocha');

let calculateNumberSpy;

beforeEach(function() {
    // Create a spy for Utils.calculateNumber
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
});

afterEach(function() {
    // Restore the original function
    calculateNumberSpy.restore();
  });

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with the correct arguments', function() {
        const result = sendPaymentRequestToApi(100, 20);

        expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(result);
    });
});
