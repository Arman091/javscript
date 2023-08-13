// sum Of cube of digits is equel to numbers

let number = 153;
function armstrong(n) {
  let sum = 0;
  while (n > 0) {
    let last_digit = n % 10;
    sum += last_digit * last_digit * last_digit;
    n = Math.floor(n / 10);
  }

  return sum;
}

if (armstrong(number) === number) {
  console.log(number + " is an Armstrong number");
} else {
  console.log("not arm strong");
}
