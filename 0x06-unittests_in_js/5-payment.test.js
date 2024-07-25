// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original console.log
    consoleLogSpy.restore();
  });

  it('should log the correct message for inputs 100 and 20', function() {
    const totalAmount = 100;
    const shippingCost = 20;

    sendPaymentRequestToApi(totalAmount, shippingCost);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for inputs 10 and 10', function() {
    const totalAmount = 10;
    const shippingCost = 10;

    sendPaymentRequestToApi(totalAmount, shippingCost);

    // Verify that console.log was called with the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});

