//interfaces
interface Isperson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
    skills: string[];
}

const me: Isperson = {
    name: 'fua',
    age: 30,
    speak(txt: string): void{
        console.log(txt);
    },
    spend(amount: number): number{
        console.log(`I spent ${amount}`);
        return amount;
    },
    skills: ['programming','drawing','dancing','cooking']
};

const greetPerson = (person: Isperson) => {
    console.log('hi ', person.name);
}

console.log(me);
greetPerson(me);

//---------------------------------------------------------

import {Invoice} from './classes/invoice.js';

//------
//todo
//-----------------------------------(init a class)
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

    console.log(
        type.value,
        totype.value,
        details.value,
        amount.valueAsNumber
    );
    
});
