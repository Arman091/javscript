

//create a function take input from user and pass it to the function and addd them

let num1 = prompt("please enter a number");
let num2 = prompt("enter second number");
num1 = parseInt(num1)
num2=parseInt(num2)
function add(a,b) {

    let c = a + b;
    console.log(`sum is ${c}`);
}
add(num1, num2);