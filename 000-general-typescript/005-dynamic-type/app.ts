/*
dynamic type (any) type
it will may change in future
*/

let gold: any;
gold = 120;
console.log(gold);

gold = true;
console.log(gold);

gold = 'gold'
console.log(gold);

//-----------------

let mixed: any[] = [];
mixed.push(123);
console.log(mixed);

mixed.push('one two three');
console.log(mixed);

let person: {name:any, age:any};
person = {name: 'james', age: 42}
console.log(person);
person = {name: 'sarah', age: 22}
console.log(person);
person = {name: 61, age: 'doe'}
console.log(person);


