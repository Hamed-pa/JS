const chai = require("chai");
let assert = chai.assert;

describe("chaining", function () {
    let aAccumulator = new Accumulator(5);

    it('initializes the accumulator', function() {
        assert.equal(aAccumulator.number, 5);
    });

    it('sum a previous number with 10', function () {
        aAccumulator.read(10);

        assert.equal(aAccumulator.valu(), 15);
    });

    it("again sum a previous result with 11", function () {
        aAccumulator.read(11);

        assert.equal(aAccumulator.valu(), 26);
    });

    it("again sum a previous result with 0", function () {
        aAccumulator.read(0);

        assert.equal(aAccumulator.valu(), 26);
    });

    it("again sum a previous result with -12", function () {
        aAccumulator.read(-12);

        assert.equal(aAccumulator.valu(), 14);
    });
});



function Accumulator(num) {
    this.number = num;

    this.read = function (num) {
        this.number += num;
        // return this.number;  it doesn't need to return a value
    };
    this.valu = function () {
        return this.number;
    };
};




