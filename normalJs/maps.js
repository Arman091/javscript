// let numbers = [1, 2, 3];
// let [y] = numbers;
// console.log(y);


// maps are datastructures in javscript used to store data in ordred manner;
// they store key value pairs

const newPerson = new Map();
newPerson.set("key1", 5);
newPerson.set("key2", 10);
newPerson.set("key1", 20);

// here we can have only one "key1" that will be updated 
console.log(newPerson.get("key1"))
console.log(newPerson.get("key1"));

// iterating over Map method
// When used with a Map object, the for...of loop iterates over the entries of the map, providing key-value pairs as arrays. For example:

// for (let [key, value] of newPerson) {
//   console.log(key + "and value" + value)
// }


// we can set any data type as key value

// Creating a new Map
let myMap = new Map();

// Adding entries to the map
myMap.set("number", 42);
myMap.set("function", () => console.log("Hello, world!"));
myMap.set("object", { name: "John", age: 30 });
myMap.set("string", "Hello");
myMap.set("char", "A");
myMap.set("boolean", true);

// Iterating over the entries using for...of loop
// for (let [key, value] of myMap) {
//   console.log(key + " = " + value);
// }
