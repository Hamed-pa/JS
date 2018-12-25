
const chai = require("chai");
let assert = chai.assert;

describe("comelize", function () {
    it('comelize', function () {
        assert.equal(comelize("background-color"), "backgroundColor");
    });

    it("comelize", function () {
        assert.equal(comelize("list-style-image"), "listStyleImage");
    });

    it("comelize", function () {
        assert.equal(comelize("-webkit-transition"), "WebkitTransition");
    });
});

function comelize(value) {
    let result = "";
    let count = 0;
    let broken = value.split('-');

    for (let val of broken) {

        if (!val == "") {

            if (count == 0) {
                result += val;
                count++;

            } else {
                result += val.charAt(0).toUpperCase() + val.slice(1);
            };
        } else {
            count++
        };
    };
    return result;

};
