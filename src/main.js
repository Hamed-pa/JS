'use strict';


function random(min,max,num){
    let generation=num;

    if (num === undefined){
    generation = Math.random();
    }

    function Increase() {
        generation *=10;
        random(min,max,generation);
        return false;
    }

    function Decrease () {
        generation /=2
        random(min,max,generation);
        return false;
    }

    if (generation < min){
        Increase(min,max,generation);
    } else if(generation > max) {
        Decrease(min,max,generation);
    }

    return (+generation*2);
}



let rand = random(15, 40);
alert(rand);
