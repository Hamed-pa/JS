const chai = require("chai");
let assert = chai.assert;

describe("check valid braces", function () {
    it('check valid braces', function () {
        assert.isTrue(validBraces("(){}[]"));
    });

    it('check valid braces', function () {
        assert.isTrue(validBraces("([{}])"));
    });

    it('check valid braces', function () {
        assert.isFalse(validBraces("[}"));
    });

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


function validBraces(str) {
    let result = 0;

    if (str.includes("{")) {

        if (str.includes("}")) {
            result++;
        } else {
            result--;
        };
    };

    if (str.includes("}")) {
        if (str.includes("{")) {
            result++;
        } else {
            result--;
        };
    };

    if (str.includes("[")) {
        if (str.includes("]")) {
            result++;
        } else {
            result--;
        }
    };

    if (str.includes("]")) {

        if (str.includes("[")) {
            result++;
        } else {
            result--;
        };
    };

    if (str.includes("(")) {
        if (str.includes(")")) {
            result++;
        } else {
            result--;
        }
    }

    if (str.includes(")")) {
        if (str.includes("(")) {
            result++;
        } else {
            result--;
        };
    };

    if (result > 0 && result % 2 == 0) {
        return true;
    } else {
        return false;
    }
};

// second ********

function rightTriangle(a, b, c) {

    if (a + c < b || b + c < a || a + b < c) {
        return false;
    }

    return true;
};




