//primitive datatypes
//number, string, boolen etc
const age = 27;
let strName = "Suraj";
const isLoggedIn = false

//This are value type and uses the stack memory
//example
let strOtherName = strName
strOtherName = "Raj"

// console.log(strName);
// console.log(strOtherName);
// console.table([age, strName, isLoggedIn]);


//----------------------------------------------------------------------------



//Non-primitive datatypes
//function, objects, array etc
//This are reference type and uses the heap memory

let obj1 = {
    "name": "Suraj",
    "age": 30
}

let obj2 = obj1
obj2.name = "Raj"


console.log(obj1)
console.log(obj2)