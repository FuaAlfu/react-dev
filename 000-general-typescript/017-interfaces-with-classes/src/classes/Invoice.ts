import {HasFormatter} from '../interfaces/HasFormatter.js';
export class Invoice implements HasFormatter{
    //    readonly client: string;
    //    private details: string;
    //    public amount: number;
    
        constructor(
            readonly client: string,
            private details: string,
            public amount: number
        ){}
    
        //here
        format(){
            return `${this.client} $ ${this.amount} for ${this.details}`
        }
}