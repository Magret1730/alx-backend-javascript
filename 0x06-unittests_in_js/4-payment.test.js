const sinon = require('sinon');

const chai = require('chai');
const expect = chai.expect;
//  OR THIS const { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');
// const { utils } = require('mocha');

let calculateNumberStub;
let consoleLogSpy;

beforeEach(function() {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
});

afterEach(function() {
    // Restore the original function and console.log
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber with the correct arguments log the correct message', function() {
        const result = sendPaymentRequestToApi(100, 20);

        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
        expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
        expect(result).to.equal(10);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(result);
    });
});
