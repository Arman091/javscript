let my_array = new Array(2, 23, 43, 45, 56, 67, 55);

/*for each method

my_array.forEach(function (elment,index) {
  console.log(`elment ${elment} is on index ${index} \n`);
  console.log(`sum of ${elment} and index ${index} is ${elment+index}`)
})
*/


/*map method
let rtrnaray=my_array.map(function (element, index) {
  if (element % 2 === 0) {
    return true
  }

  else {
    return false
  }
})
console.log(rtrnaray)
*/

/* filter function 
  FILTER WILL RETURN AN ARRAY WITH VALUES  GREATER THAN 45
  biG(O)=O(N)
  const result =my_array.filter(function (element) {
    return element > 45;
  })
  console.log("FILTERED array RESULT " + result)
  */


/* FIND METHOD
biG(O)=O(N)
FIND WILL RETURN FIRST MATH WITH THE GIVEN CONDITION
*/

/* splice method
 Array(2, 23, 43, 45, 56, 67, 55)


let modified = my_array.splice(2, 3, "arman", "peter", "luke");
console.log(modified); //returned trimmed values 43,45,56
console.log(my_array); // returned values inserted in it;

console.log(my_array.splice(2, 4)); // only delete elements from starting index;
*/
console.log(my_array);
 my_array.splice(2, 0,"ki","ji"); // at position two add two elements
console.log("my array after operation "+ my_array)

