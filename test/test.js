
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

describe("Random", function () {
    it('Whether it is between 1 and 2?', function () {
        let rand = randomInteger(1, 2);
        assert.isTrue(1 <= rand && rand <= 2);
    });

    it("Whether it is between 1 and 9?", function () {
        let rand = randomInteger(1, 9);
        assert.isTrue(1 <= rand && rand <= 9);
    });

    it("Whether it is between 5 and 7?", function () {
        let rand = randomInteger(5, 7);
        assert.isTrue(5 <= rand && rand <= 7);
    });
});

function randomInteger(a, b) {
    let result;

    while (1) {

        result = Math.random() * 10;
        if (result >= a && result <= b) {
            return parseInt(result);
        }
    }
}



