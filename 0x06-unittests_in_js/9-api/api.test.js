const request = require("request");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Index page", function() {
    const options = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    it("should return correct status code", function(done) {
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct content", function(done) {
        request(options, function(err, res, body) {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });

    it("should return correct content length", function(done) {
        request(options, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

describe("Cart page", function() {
    const baseOptions = {
        method: "GET"
    };

    it("should return correct status code for valid cart ID", function(done) {
        const options = { baseOptions, url: "http://localhost:7865/cart/12" };
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct content for valid cart ID", function(done) {
        const options = { ...baseOptions, url: "http://localhost:7865/cart/12" };
        request(options, function(err, res, body) {
            expect(body).to.contain("Payment methods for cart 12");
            done();
        });
    });

    it("should return correct content length for valid cart ID", function(done) {
        const options = { ...baseOptions, url: "http://localhost:7865/cart/12" };
        request(options, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('32');
            done();
        });
    });

    it("should return 404 for invalid cart ID", function(done) {
        const options = { ...baseOptions, url: "http://localhost:7865/cart/hello" };
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
