
/*
describe("chaining", function () {

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
        assert.isTrue
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
*/

const chai = require("chai");
let assert = chai.assert;

describe("check spam", function () {
    it('check the string is spam or not?', function () {
        assert.isTrue(checkSpam('axxxxx and hamer'));
    });

    it("check the string is spam or not?", function () {
        assert.isFalse(checkSpam('hello buddy'));
    });

    it("check the string is spam or not?", function () {
        assert.isTrue(checkSpam('axe and hamer ViAgRA'));
    });
});

function checkSpam(str) {
    if (str.includes('xxx') || str.includes('ViAgRA')) {
        return true;
    }
    return false;
}


