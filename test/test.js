
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

describe("extract currency value", function () {
    it('extract currency value', function () {
        assert.equal(extractCurrencyValue(200),200);
    });

    it("extract currency value", function () {
        assert.equal(extractCurrencyValue("$200"),200);
    });

    it("extract currency value", function () {
        assert.equal(extractCurrencyValue("200$"),200);
    });
});

function extractCurrencyValue(val) {
    let value = String(val);

    if (~value.indexOf('$')) {
        if (value[0] === '$') {
            return +(value.slice(1, value.length));
        } else {
            return +(value.substr(-(value.length), value.length - 1));
        }
    }
    return +value;
}

