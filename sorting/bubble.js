// BUBBLE SORT
const numbers = [99, 44, 6, 2, 1, 3];
let n = numbers.length - 1;
let temp;
/* STEPS
1. MAKE A BUBBLE
2. COMPARE BUBBLE ELEMENTS
3. SWAP WITH HELP OF TEMP 
4. I=N-1 PASSES and J=N
*/

for (let i = 0; i <= n - 1; i++) {
  for (let j = i + 1; j <= n; j++) {
    if (numbers[i] > numbers[j]) {
      temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(numbers);
