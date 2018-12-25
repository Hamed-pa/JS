const chai = require("chai");
let assert = chai.assert;

describe("filter range", function () {
    it('Between numbers 5 and 10', function () {
        assert.equal(filterRange(array1, 5, 10).join(), "5,8,9,7");
    });

    it("Between numbers 1 and 5", function () {
        assert.equal(filterRange(array2,1,5).join(), "1,2,3,4,5");
    });

    it("Between numbers 10 and 20", function () {
        assert.equal(filterRange(array3,10,20).join(), "17,10,12");
    });
});

let array1 = [5, 8, 9, 2, 1, 15, 7, 12];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array3 = [6, 17, 5, 4, 1, 10, 12];

function filterRange(arr, min, max) {
    let result = [];

    for (let val of arr) {
        if (val >= min && val <= max) {
            result.push(val);
        };
    };
    return result;
};
