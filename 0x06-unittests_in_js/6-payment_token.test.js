const { expect } = require('chai');
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('getPaymentTokenFromAPI', function () {
  this.timeout(5000);
  it('should return a successful response when success is true', function () {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the test is complete
      })
      .catch(err => done(err)); // If an error occurs, pass it to done
  });

  it('should not resolve when success is false', function(done) {
    // To handle this case, we need to avoid resolving or rejecting
    let isResolved = false;

    getPaymentTokenFromAPI(false)
      .then(() => {
        isResolved = true;
        done(new Error('Expected promise to be pending'));
      })
      .catch(() => {
        // If it reaches here, it means it was rejected
        done(new Error('Expected promise to be pending, not rejected'));
      });

    // Check that it stays pending for a while
    setTimeout(() => {
      if (!isResolved) {
        done(); // Successfully tests that it didn't resolve
      }
    }, 2000); // Adjust this timeout as needed
  });
});
