//for testing  ::we use ! to tells that we already know its exist
//const anchor = document.querySelector(a)!;

//fix error with console
// if(anchor){
//     console.log(anchor);  
// }
//---------------------------------------------------------------------------
//another test :: casting to a certain type
 const form = document.querySelector('.new-item-form') as HTMLFormElement;
 //console.log(form.childern); //for testing
 
 //Inputs
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
     
 })