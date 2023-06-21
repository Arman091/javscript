/*
1.iterables are those elements with which we can use for of loop
2.array like objects jinke paas length property hoti hai and we can acces them from index
3.string is array like object
4.and object are not iterables */

//sets
// set is an iterable(we can use for of loop)
// it has no index based acces
// show unique items only and don"t show the same item again
const numbers = new Set();
numbers.add(1);
numbers.add([2, 3, 4, 5]);

console.log(numbers[2]);
for (let number of numbers) {
    console.log(number);
}