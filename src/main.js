'use strict';

let styles = [
    "Jazz",
    "Blues"
];

styles.push("Rock-n-Roll");

function middle(number){
    if (!number % 2 === 0){
        return ((number-1)/2);
    };
};

styles[middle(styles.length)] = "Classics";

console.log(styles.unshift());

styles.push("Rap","Reggae");

console.log(styles);