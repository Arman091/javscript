/**
 has(key): Checks if a key exists in the map.
size: Returns the number of key-value pairs in the map.
keys(): Returns an iterator over the keys.
values(): Returns an iterator over the values.
entries(): Returns an iterator over the key-value pairs.
 */


const myMap = new Map();

myMap.set("name", "John");
myMap.set(
  42,
  "Answer to the Ultimate Question of Life, the Universe, and Everything"
);
myMap.set(true, "Boolean value");

/**
const keysIterator = myMap.keys();

for (let [key,value] of myMap) {
  console.log(key+"and"+value)
  
}
 
//  mymap.keys()
//  mymap.values()

for (let key of myMap.keys()) {
  console.log(key);
}
*/
