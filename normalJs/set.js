const persons = new Set();

persons.add('hello');
persons.add([10, 20, 30, 40]);
persons.add({ name: 'arman', age: '18', job: 'unemployed' });


for (const person of persons) {
    console.log(person);
    
}

/* for each cannot be used with set because sets dont have array based access */

const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const AnotherSet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...AnotherSet]); // Will show you exactly the same Array as myArray


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Use to remove duplicate elements from an array

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numbers)]);

// [2, 3, 4, 5, 6, 7, 32]
