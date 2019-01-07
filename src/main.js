'use strict';

// first **************************
function validBraces(str) {
    let result = 0;

    if (str.includes("{")){

       if (str.includes("}")){
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

    if (str.includes("[")){
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

    if (result > 0 && result % 2 == 0){
        return true;
    } else {
        return false;
    }
};

console.log (validBraces("[}"));


// second ************************

function rightTriangle(a, b, c) {

    if (a + c < b || b + c < a || a + b < c) {
        return false;
    }

    return true;
};

console.log(rightTriangle(7, 2, 2));