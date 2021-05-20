import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('gosh', 'coffee shop work', 590)
docTwo = new Payment('sarah', 'plumbing work', 360)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

//-----------------------------------(done)
const invOne = new Invoice('fua', 'doing his best', 999);
const invTwo = new Invoice('jhon', 'not doing his best', 444);

console.log(invOne, invTwo);
console.log('---');

//arrys
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo)
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});


//------------------
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const totype = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);
    
});
