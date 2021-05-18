var test = 'test';
console.log(test);
//------
var Invoice = /** @class */ (function () {
    //    readonly client: string;
    //    private details: string;
    //    public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " $ " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
//-----------------------------------(init a class)
var invOne = new Invoice('fua', 'doing his best', 999);
var invTwo = new Invoice('jhon', 'not doing his best', 444);
console.log(invOne, invTwo);
console.log('---');
//arrys
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
