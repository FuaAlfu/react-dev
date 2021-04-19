const check = (arg) =>{
    if([1,2,3].includes(arg)){
        console.log('adding');
    }else{
        console.log('null');
    }
}

check(1)
check(8)
check(3)