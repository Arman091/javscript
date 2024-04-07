const array = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

function flattenArray(arr) {
  let flatArray = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      // If the element is an array, recursively call flattenArray
      // and concatenate the result with flatArray
     // flattenArray(element)  recursive function calls till each element not pushed to flatArray
      flatArray = flatArray.concat(flattenArray(element));
    
    } else {
      // If the element is not an array, push it to flatArray
      flatArray.push(element);
    }
  });

  return flatArray;
}

// flattenArray(array)
console.log(flattenArray(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]