let n = 6;

// for (let i = 1; i <= Math.floor(n / 2); i++) {
//   if (n % i === 0) {
//     console.log(`${i} X ${Math.floor(n / i)} is the factor of ${n} `);
//   }
// }

// Perfect Number program;

// eg:6 factors sum==6
// 2,3,1  except itself

function PerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number) {
    console.log(number+" it is perfect Number");
  } 
}
 PerfectNumber(n);

