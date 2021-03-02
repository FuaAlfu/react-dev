"use strict";
const printAllnumbers = () => {
    const array = [77, 743, 221, 1, 42, 91];
    console.log("looping index ");
    //in
    for (let index in array) {
        console.log(index);
    }
    console.log("looping values ");
    //of
    for (let val of array) {
        console.log(val);
    }
};
console.log(printAllnumbers());
console.log('end of ...');
console.log('============================');
const printAllstings = () => {
    let str = "fuaAlfu";
    for (let index in str) {
        console.log(`Index of ${str[index]}: ${index}`);
    }
};
console.log(printAllstings());
/*
for(condition){
    console.log('yo')
}
*/
