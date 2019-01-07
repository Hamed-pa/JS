const chai = require("chai");
let assert = chai.assert;

describe("Right Triangle", function () {
    it('Right Triangle', function () {
        assert.isTrue(rightTriangle(1, 2, 2));
    });

    it('Right Triangle', function () {
        assert.isFalse(rightTriangle(7, 2, 2));
    });

    it('Right Triangle', function () {
        assert.isTrue(rightTriangle(3, 4, 3));
    });


});

function rightTriangle(a, b, c) {

    if (a + c < b || b + c < a || a + b < c) {
        return false;
    }

    return true;
};

