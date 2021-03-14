"use strict";
let yo;
let hoo;
hoo = (name, age) => {
    console.log(`his name ${name} and his age ${age}`);
};
console.log(hoo('fua', 30));
console.log('---');
//-----------------------------------
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 * num2;
    }
};
console.log(calc(8, 8, 'add'));
console.log('---');
//-----------------------------------
let details;
details = (obj) => {
    console.log(`${obj.name} is ${obj.age} years old`);
};
console.log(details({
    name: 'fua',
    age: 30
}));
console.log('---');
