const printAllnumbers = () =>{

const array:number[] = [77, 743, 221, 1, 42,91]  
console.log("looping index ");  
for (let index in array) {  
   console.log(index);  
}  
console.log("looping values ");  
for (let val of array) {  
   console.log(val);  
} 

}
 
console.log(printAllnumbers());
console.log('end of ...');
console.log('============================');

const printAllstings = () =>{
    let str:any = "fuaAlfu";  
  
for (let index in str) {  
  console.log(`Index of ${str[index]}: ${index}`);  
}  
}

console.log(printAllstings());

/*
for(condition){
    console.log('yo')
}
*/
