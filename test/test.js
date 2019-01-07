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



