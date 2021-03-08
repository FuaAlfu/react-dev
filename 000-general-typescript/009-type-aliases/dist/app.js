"use strict";
/*old
     const logDetails = (uid: string | number, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
}
*/
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
//--------------------------------------------------------------
/*old
    const greet = (user: {name: string, uid: StringOrNumber}) =>{
     console.log(`${user.name} says yo`);
 }
*/
const greet = (user) => {
    console.log(`${user.name} says yo`);
};
logDetails(30, 'fua');
