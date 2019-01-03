const chai = require("chai");
let assert = chai.assert;

describe("filter range", function () {
    it('Between numbers 10 and 20', function () {
        assert.equal(filterRangeInPlace(array, 10, 20).join(), [17, 10, 12]);
    });


});

let array = [6, 17, 5, 4, 1, 10, 12];

function filterRangeInPlace(array, min, max) {


    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        if (array[i] < min || array[i] > max) {
            array.splice(i, 1);
            i--;
        };
    };

    return array;

};