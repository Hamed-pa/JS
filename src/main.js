'use strict';

let array = ["HTML", "JavaScript", "CSS", "HTTP"];

function copySorted(arr){
    let x = 0 ;

    for (let j = 0 ; j < (array.length) ; j++){

        for (let i = 0 ; i < array.length ; i++) {

            if (array[i] > array[i+1]) {
                x = array[i];
                array[i] = array[i+1];
                array[i+1] = x;
            };
        };
    };
    return arr;
};

console.log(copySorted(array));

