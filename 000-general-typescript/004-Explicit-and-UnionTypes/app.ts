let test = 'test'

//explicit types
let surname: string;
let age: number;
let isOld: boolean;

//arrays
let workers: string[] = ['jhone','doe'];
workers.push('soso');

// union types
let mixed: (string|number|boolean)[] =[];
mixed.push('yo');
mixed.push(51);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123'; //string
uid = 123; //number

// objects
let employee = {name: 'david', id: 110861073};
let employees: {name:string, id:number};  
