"use strict";
let test = 'test';
console.log(test);
//------
class Invoice {
    //    readonly client: string;
    //    private details: string;
    //    public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
    console.log(inv.client, inv.amount, inv.format());
});
