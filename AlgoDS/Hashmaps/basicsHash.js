// frequency counter (count the occuring of elemnts in array)

let myarray = [1, 2, 3, 2, 1, 5, 1, 3, 4, 2, 3, 2];

const myMap = new Map();

myMap.set("name", "John");
myMap.set(
  42,
  "Answer to the Ultimate Question of Life, the Universe, and Everything"
);
myMap.set(true, "Boolean value");

const keysIterator = myMap.keys();

for (let key of keysIterator) {
    console.log(key)
}