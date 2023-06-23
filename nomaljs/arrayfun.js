/* array creation using javascript

 1.Using Array literal

 2. array constructors
 let veg = new Array("potato", "tomato", "chili");


 3.creating empty array then feeding it
 let veg = [];
 veg.push(1);
 veg.push(2);
 veg.push(3);

    OR
let veg = new Array();
veg[0] = "arman";
veg[1] = "zimran";
console.log(veg)

*/

/* ======================================================================
  push pop shift unshift inbuilt functions



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

/* =============================================================================
cloning an array
let arr1 = ["apple", "mango", "banana"];
arr2 = [...arr1];
arr1.push("new fruit");
console.log(arr1);
console.log(arr2);


            OR
 let arr1 = ["apple", "mango", "banana", 1, 2, 3, 4, 5];
 console.log(arr1.slice(0, 4));
 console.log(`this is original array ${arr1}`)
*/

/*array destructuring
const myArray = ["potato", "tomato", "chilli"];
let [...mynewArray] = myArray;

for (veg of mynewArray) {
  console.log(veg);
}

*/
