// Good when it is nearly sorted array
// Just like you sort Paras

const numbers = [99, 44, 6, 2, 1, 3];
let n = numbers.length - 1;//5

/* STEPS
1. ITERATE OVER ARRAY FOR index=1 TO index=n :-(To story tempory value at each i)
2. set j=i-1; or left value of i;
3. iterate while j>=0 and arr[j+1]>temp or arr[i];
4. shift the elements to right
*/

let insertion = (numbers,n) => {
    for (let i = 1; i <= n; i++) {
        let temp = numbers[i];
        let j = i - 1;
        while (j >= 0 && numbers[j] > temp) {
        // shift the elements to right 
            numbers[j + 1] = numbers[j];
            j--
        }
        // place the temp value in void
        // j+1 is a pointer pointing to j+1 index always
        numbers[j + 1] = temp;
    } 
    console.log(numbers)
}
insertion(numbers, n);


