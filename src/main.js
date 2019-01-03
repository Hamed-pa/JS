'use strict';

let array = [6, 17, 5, 4, 1, 10, 12];

function sortReverse(array){
    let x = 0 ;

    for (let j = 0 ; j < (array.length) ; j++){

        for (let i = 0 ; i < array.length ; i++) {

            if (array[i] < array[i+1]) {
                x = array[i];
                array[i] = array[i+1];
                array[i+1] = x;
            };
        };
    };
};

sortReverse(array);
console.log(array);
