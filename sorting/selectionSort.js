//SELECTION SORT
const numbers = [99, 44, 6, 2, 1, 3,4];
let n = numbers.length - 1;

/* STEPS
1. MAKE A Minimum index variable
2. COMPARE MinIndex for each iteration, with jth index 
4. if 
3. SWAP WITH HELP OF TEMP 
4. I=N-1 PASSES and J=N
*/
// let temp;
for (let i = 0; i <= n; i++){
    let MinIndex = i;
    for (let j = i + 1; j <= n; j++){
        if (numbers[j] < numbers[MinIndex])
            MinIndex = j;
    }
    let temp = numbers[i];
    numbers[i] = numbers[MinIndex];
    numbers[MinIndex] = temp;
}
console.log(numbers)