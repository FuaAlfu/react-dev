//dyfine an aliases type to use it everywhere in order to reduce code dubl...
type StringOrNumber = string | number;
type objWithName = {name: string, uid: StringOrNumber};

/*old
     const logDetails = (uid: string | number, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
}
*/
const logDetails = (uid: StringOrNumber, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
}
//--------------------------------------------------------------

/*old
    const greet = (user: {name: string, uid: StringOrNumber}) =>{
     console.log(`${user.name} says yo`);
 }
*/
const greet = (user: objWithName) =>{
    console.log(`${user.name} says yo`);
}

logDetails(30,'fua');

