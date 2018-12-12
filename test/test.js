const chai = require("chai");
let assert = chai.assert;

describe("chaining", function () {
    it('sum a previous number with 10', function () {
        assert.equal(aAccumulator.read(10), 15);
    });

    it("again sum a previous result with 11", function () {
        assert.equal(aAccumulator.read(11), 26);
    });

    it("shaow result", function () {
        assert.equal(aAccumulator.valu(), 26);
    });
});



function Accumulator(num) {
    this.number = num;

    this.read = function (num) {
        this.number += num;
        return this.number;
    };
    this.valu = function () {
        return this.number;
    };
};

let aAccumulator = new Accumulator(5);


