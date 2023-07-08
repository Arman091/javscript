let stock = {
  fruits: ["apple", "grapes", "bananas", "strawberry"],
  liquids: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  topping: ["chocolate", "peanuts"],
};

let is_open = true;
let userinputs = {
  fruit: "grapes",
  liquids: "water",
  holder: "sticks",
  topping: "peanuts",
};
const heading1 = document.getElementsByClassName("grid-item")[1];
const heading2 = document.getElementsByClassName("grid-item")[2];
const heading3 = document.getElementsByClassName("grid-item")[3];

function delay(ms) {
  /*
   The resolve function is provided by the JavaScript runtime as part of the Promise implementation. It is a built-in function that is automatically created and passed to the executor function when you create a new promise using the Promise constructor.
   */
  return new Promise((resolve) => setTimeout(resolve, ms));
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

if (is_open) {
  delay(500)
    .then(() => {
      updateHeading1(); // By using return delay(1000), the promise returned by delay(1000) becomes the
      return delay(1000); //fulfillment value of the current .then() callback.
    })
    .then(() => {
      let { fruit, liquids, holder, topping } = userinputs;
      if (
        stock.fruits.includes(fruit) &&
        stock.liquids.includes(liquids) &&
        stock.holder.includes(holder) &&
        stock.topping.includes(topping)
      ) {
        updateHeading2();
        return delay(1000);
      } else {
        console.log("Sorry, we don't have all the required items in stock.");
      }
    })
    .then(() => {
      updateHeading3();
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  console.log("Sorry, we are closed for today.");
}
