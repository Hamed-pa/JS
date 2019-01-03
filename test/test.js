const chai = require("chai");
let assert = chai.assert;

describe("filter range", function () {
    it('Between numbers 10 and 20', function () {
        assert.equal(sortReverse(array).join(), [17, 12, 10, 6, 5, 4, 1]);
    });


});
let array = [6, 17, 5, 4, 1, 10, 12];

function sortReverse(array) {
    let x = 0;

    for (let j = 0; j < (array.length ); j++) {

        for (let i = 0; i < array.length; i++) {

            if (array[i] < array[i + 1]) {
                x = array[i];
                array[i] = array[i + 1];
                array[i + 1] = x;
            };
        };
    };
    return array;
};
