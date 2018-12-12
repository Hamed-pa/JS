'use strict';

function Calculator(num) {
    this.number=0;

    this.read = function(num){
        this.number = num;
        return this.number;
    };

    this.sum = function (num){
        this.number += num;
        return this.number;
    };

    this.mul = function (num){
        this.mul *= num;
        return this.number;
    };
};

let a = new Calculator();

a.read(12);
alert(a.sum(3));