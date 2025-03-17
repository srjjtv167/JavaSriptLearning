//Named IIFE function
(function addTwoNumbers(num1, num2) {
    console.log(`Addtion of two numbers is - ${num1 + num2}`);
})(2,4);

//IIFE with arrow function and Unnamed IIFE function

((num1, num2) => {
    console.log(`Addtion of two numbers is - ${num1 + num2}`);
})(2,4)