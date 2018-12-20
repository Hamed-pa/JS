'use strict';

let array = [7, -1, -6, 3, -9, 4, 5, -6];

function getMaxSubSum(array){
    let sum = 0;
    let result = 0;
    for (let val of array) {
        
        if (sum + val > 0){
            sum += val;
        } else {
            sum = 0;
        };

        if (sum > result) {
            result = sum;
        };

    };
    return result;
};


console.log(getMaxSubSum(array));
