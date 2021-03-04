let sheef:string = "look";

let hi = (s:string) =>{
    console.log('yo,'+s);
    
}

hi('everyone');
//-------------------------------------

let other: Function;
other = (s:string, n:number) => {
    console.log('yo, '+s+' your number is '+n); 
}
other('fua',8);
console.log('-------\n');
//--------------------------------------

let numCombine: Function;
numCombine = (n:number, ont:number) =>{
    return n * ont;
}

console.log(numCombine(3,54));
//--------------------------------------

let unionPrinter: Function;
unionPrinter = (a:number, b:number, c?:number | string) =>{ //adding ? mark.. means optional
    console.log('first, '+a+' the second one is '+b+' and..'+c);   
}
unionPrinter(12,5,'done!')
//--------------------------------------

const minus = (a:number, b:number) => {
    return a - b;
}

let result = minus(42,22);
console.log(result);
//--------------------------------------

const explicitReturnType = (r:string):string =>{
    return 'yo '+r;
}
console.log(explicitReturnType('joker'));
//---------------------------------------

let end = (a:string, b:string, c:string | number = 2):void =>{
    //void is a complete lack of any value
    //c par become a default value
    console.log(a,b); 
    console.log(c);
}