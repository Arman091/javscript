/*push pop shift unshift
const fruits = ["apple", "mango", "banana"];
for (fruit of fruits) {
    console.log(fruit);
    
}

fruits.push("pineappale");
for (const fruit of fruits) {
    console.log(fruit);
    
}
 


    console.log(fruits.pop());
    
*/

//cloning an array
let arr1 = ["apple", "mango", "banana"];
arr2 = [...arr1];
arr1.push("new fruit");
console.log(arr1);
console.log(arr2);

//array destructuring

const myArray = ["potato", "tomato", "chilli"]
let [...mynewArray] = myArray;

for (veg of mynewArray) {
    console.log(veg);
    
}