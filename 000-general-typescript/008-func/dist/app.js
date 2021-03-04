"use strict";
let sheef = "look";
let hi = (s) => {
    console.log('yo,' + s);
};
hi('everyone');
//-------------------------------------
let other;
other = (s, n) => {
    console.log('yo, ' + s + ' your number is ' + n);
};
other('fua', 8);
console.log('-------\n');
//--------------------------------------
let numCombine;
numCombine = (n, ont) => {
    return n * ont;
};
console.log(numCombine(3, 54));
//--------------------------------------
let unionPrinter;
unionPrinter = (a, b, c) => {
    console.log('first, ' + a + ' the second one is ' + b + ' and..' + c);
};
unionPrinter(12, 5, 'done!');
//--------------------------------------
const minus = (a, b) => {
    return a - b;
};
let result = minus(42, 22);
console.log(result);
//--------------------------------------
const explicitReturnType = (r) => {
    return 'yo ' + r;
};
console.log(explicitReturnType('joker'));
//---------------------------------------
let end = (a, b, c = 2) => {
    console.log(a, b);
    console.log(c);
};
