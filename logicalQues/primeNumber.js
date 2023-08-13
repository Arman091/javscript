let n = 100;

for (i = 2; i <= Math.floor(n / 2); i++) {
  if (n % i !== 0) {
    console.log(n + " is prime");
    break;
  } else {
    console.log("number is non-prime");
    break;
  }
}
