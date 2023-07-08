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
      updateHeading1();
      return delay(1000);
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
