var isPalindrome = function (x) {
    let remainder;
    let sum=0;
  while (x > 0) {
    remainder = x % 10;
    sum = sum * 10 + remainder;
    x = Math.floor(x / 10);
  }

  return sum
};

console.log(isPalindrome(121));