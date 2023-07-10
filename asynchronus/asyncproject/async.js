let stock = {
  fruits: ["apple", "grapes", "bananas", "strawberry"],
  liquids: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  topping: ["chocolate", "peanuts"],
};

let is_open = true;
let userinputs = {
  fruit: "apple",
  liquids: "water",
  holder: "sticks",
  topping: "peanuts",
};

const heading1 = document.getElementsByClassName("grid-item")[1];
const heading2 = document.getElementsByClassName("grid-item")[2];
const heading3 = document.getElementsByClassName("grid-item")[3];
const heading4 = document.getElementsByClassName("grid-item")[4];
const heading5 = document.getElementsByClassName("grid-item")[5];

async function delay(time) {
  /*When using setTimeout inside an async function, it will not delay the promise resolution itself. Instead, it will delay the execution of the code following the setTimeout call. The async function will immediately return a promise that will resolve before the setTimeout delay finishes.

  async function delay(2000) {
   setTimeout(()=>{}, 2000)
  }

 **** it will not work bcz await will start furthur execution immmediately recievieng a resolved prmise

 ***   when a function is declared with the async keyword, it automatically returns a promise. The value that the function returns is wrapped in a resolved promise.

For example, consider the following function:
  
async function myAsyncFunction() {
  return 42;
}

============ THIS CODE ABOVE IS EQUIVALENT TO ===================

function myAsyncFunction() {
  return Promise.resolve(42);
}

 */
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function updateHeading1() {
  heading1.textContent = "Welcome!! Place your order";
  heading1.style.backgroundColor = "green";
  heading1.style.color = "white";
}

function updateHeading2() {
  heading2.textContent = "Order has been taken";
  heading2.style.backgroundColor = "green";
  heading2.style.color = "white";
}

function updateHeading3() {
  heading3.textContent = "Food is being cooked";
  heading3.style.backgroundColor = "skyblue";
}

function updateHeading4() {
  heading4.textContent = "Here is your order served !!! Enjoy your meal";
  heading4.style.backgroundColor = "yellow";
}

function updateHeading5() {
  heading5.textContent = "Please checkout here is your Bill";
  heading5.style.backgroundColor = "violet";
}

async function processOrder() {
  if (is_open) {
    await delay(2000); //Each time an await statement is encountered, it pauses the execution and waits for the
    //specified delay to pass before proceeding to the next line of code.
    updateHeading1();

    await delay(2000);
    updateHeading2();

    await delay(2000);
    updateHeading3();

    await delay(2000);
    updateHeading4();

    await delay(2000);
    updateHeading5();
  }
}

processOrder(); // execution starts
