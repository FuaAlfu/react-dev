"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} $ ${this.amount} for ${this.details}`;
    }
}
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
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
