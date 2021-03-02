"use strict";
let isAlwaysTrue = true;
const loopingAround = () => {
    let i = 0;
    while (isAlwaysTrue) {
        console.log('keep printing ' + i);
        i++;
    }
};
console.log(loopingAround());
