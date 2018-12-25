'use strict';

let array = [6, 17, 5, 4, 1, 10, 12];

function filterRange(arr,min,max){
    let result = [];

    for (let val of arr){
        if(val >= min && val <= max){
            result.push(val);
        };
    };
    return result;
};

console.log(filterRange(array, 10, 20));