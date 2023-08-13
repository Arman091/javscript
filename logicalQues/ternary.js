// Even or Odd using ternary operator
// Biggest of three using ternary number;
// Biggest of three using if else
function oddEven(a) {
  return a % 2 === 0
    ? console.log(` ${a} is even`)
    : console.log(`${a} is odd`);
}

// oddEven(20);
let a = 100;
let b = 500;
let c = 300;
// a>b&&a>c?console.log(a):b>a&&b>c?console.log(b):console.log(c)

// if else

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
