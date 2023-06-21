/* in this file we will learn about prototype 

// function are also treated as object in javascript
 
 we can add update properties to our functions...
 we can use methods over our function.........



*/

// ===========prototype in function============

function hello() {
    console.log('hello world')
}

console.log(hello.prototype)

hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = function () {
    return 'a beautiful song'
}
console.log(hello.prototype)