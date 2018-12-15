'use strict';


let result = 0;
let j = 0;

function sum(){

    while (1) {

        j = prompt(`Enter a number`);

        if (j === null || j === "" || isNaN(+j) === true) {
            return null;
        }

        result += +j;
        alert(result);

    }
}

sum();