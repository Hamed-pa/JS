'use strict';

function Accumulator(num) {
    this.number = num;

    this.read = function (num) {
        this.number += num;
        return this.number;
    };
    this.valu = function () {
        return this.number;
    };
};

let aAccumulator = new Accumulator(5);
aAccumulator.read(10)
aAccumulator.valu();
console.log(aAccumulator);