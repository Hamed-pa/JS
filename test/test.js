const chai = require("chai");
let assert = chai.assert;

describe("chaining", function () {
    it('read a number like 12', function () {
        assert.equal(aCalculator.read(12), 12);
    });

    it("sum a previous number with 3", function () {
        assert.equal(aCalculator.sum(3), 15);
    });

    it("mul a previous result with 10", function () {
        assert.equal(aCalculator.mul(10), 150);
    });
});



function Calculator(num) {
    this.number = 0;

    this.read = function (num) {
        this.number = num;
        return this.number;
    };

    this.sum = function (num) {
        this.number += num;
        return this.number;
    };

    this.mul = function (num) {
        this.number *= num;
        return this.number;
    };
};

let aCalculator = new Calculator();


