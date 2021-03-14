let yo: Function

let hoo: (a:string, b:number) =>void;
hoo = (name:string, age:number) =>{
    console.log(`his name ${name} and his age ${age}`);
}

console.log(hoo('fua',30));
console.log('---');
//-----------------------------------

let calc: (a:number, b:number, c:string) => number;
calc = (num1:number, num2:number, action:string) =>{
    if( action === 'add'){
        return num1 + num2
    }else{
        return num1 * num2
    }
}

console.log(calc(8,8,'add'));
console.log('---');
//-----------------------------------

let details:(obj:{name:string, age:number}) => void;

type person = {name: string, age: number};

details = (obj:person) =>{
    console.log(`${obj.name} is ${obj.age} years old`)
}

console.log(details({
    name:'fua',
    age:30
}));
console.log('---');