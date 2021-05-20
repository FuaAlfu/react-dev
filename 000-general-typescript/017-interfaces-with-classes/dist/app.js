import { Invoice } from './classes/Invoice.js';
//------
//todo
//-----------------------------------(init a class)
const invOne = new Invoice('fua', 'doing his best', 999);
const invTwo = new Invoice('jhon', 'not doing his best', 444);
console.log(invOne, invTwo);
console.log('---');
//arrys
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//------------------
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const totype = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, totype.value, details.value, amount.valueAsNumber);
});
