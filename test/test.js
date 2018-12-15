
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
        assert.equal(truncate('Let the ruling classes tremble at a Communistic revolution.'), 'Let the ruling classes tr ...');
    });

    it("check the string is spam or not?", function () {
        assert.equal(truncate('The proletarians have nothing to lose but their chains.'), 'The proletarians have not ...');
    });

    it("check the string is spam or not?", function () {
        assert.equal(truncate('They have a world to win.'), 'They have a world to win.');
    });
});

function truncate(str) {
    if (str.length > 25) {
        str = str.slice(0, 25) + ' ...';
        return str;
    }
    return str;
}


