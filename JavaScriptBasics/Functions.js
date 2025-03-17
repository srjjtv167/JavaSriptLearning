//That kind of function and their calling can not get the compile time errors.
function addTwoNumber(num1, num2) {
    
    return num1 + num2
}
//console.log(addTwoNumber(5,5));


//----------------------------------------------------------------



//That kind of function and their calling can get the compile time errors.
//console.log(addTwoNumbers(10, 20));

const addTwoNumbers = function(n1,n2){
    return n1 + n2
}


//console.log(addTwoNumbers(10, 20));
//--------------------------------------------------------------------


//Arrow function
//Type 1
//const arrTwoNum = (n1,n2) => n1 + n2

//type 2
const arrTwoNum = (n1,n2) => {
    return n1 + n2
}

//console.log(arrTwoNum(20, 30));


//this keyword:-
//Note:- This is only works for the current contect of the objects not in the functions.

var obj = {
    name: "Suraj",
    age: 27,
    technology: "iOS",
    message : function() {
        console.log(`${this.name} is a logged in user`);
    }
}

obj.message()
obj.name = "Virat"
obj.message()