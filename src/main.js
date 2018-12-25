'use strict';

function comelize(value){
   let result="";
   let count = 0;
   let broken = value.split('-');

   for(let val of broken){
       
       if(!val==""){

           if (count==0){
               result += val;
               count++;
               
           } else {
               result += val.charAt(0).toUpperCase() + val.slice(1);
           };
       } else {
           count++
       };
   };
   return result;

};


console.log(comelize("background-color"));
console.log(comelize("list-style-image"));
console.log(comelize("-webkit-transition"));