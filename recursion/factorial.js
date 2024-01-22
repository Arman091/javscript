//factprial function

/**
 * ALGORITHM
 * 1.DIVIDE BIG PROBLEM IN SUBPROBLEM 5!=5*4!
 * 2.ALWAYS SET BASE CASE
 * 3.SET RECURSIVE RELATION
 */

// function fact(n) {
//   if (n == 0) {
//     return 1;
//   }
//   // let smallerproblem = fact(n - 1);
//   // let bigproblem = n * fact(n-1);
//   return n * fact(n - 1);
// }

// 2^n
// function power2(n) {
//   if (n == 0) {
//     return 1;
//   }

//   //let smallerproblem=power2(n-1);
//   // bigproblem=2*power2(n-1);
//   return 2 * power2(n - 1);
// }

// FIBONACCI SERIES
// 1,1,2,3,4,5,6,7,13
// pass terms needed to print
// here n=8
// Incremental recursion

  
function fib(n) {
  
  if (n <= 1) return n;
  console.log(n)
  return  fib(n-1)+fib(n-2)
}

fib(4);
