'use strict';

function rightTriangle(a, b, c) {

    if (a + c < b || b + c < a || a + b < c) {
        return false;
    }

    return true;
};

console.log(rightTriangle(7, 2, 2));