'use strict';

let result = 0;
let numbers = [];

while(1){
    
    let num = prompt("inter a number");
    if (num === '' || isNaN(+num) || num === null) {
        for (let val of numbers) {
            result += +val;
        }

        break;
    } else {
        numbers.push(num);
    }

}

console.log(result);