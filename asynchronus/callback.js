/* 
1. what is callback

2. sync  vs asynchronus;

3. blocking the main thread

4. event listeners

5. garbage collection
*/


// CALLBACK FUNCTION GENERAL EXAMPLE

function addTwoNumbers(num1, num2, callback) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    callback(num1, num2);
  } else {
    console.log("input must be a number");
  }
}

function sum(num1, num2) {
  console.log(num1 + num2) 
}

addTwoNumbers(3, 4, sum);

