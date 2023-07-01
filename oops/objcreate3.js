
/* here we will learn to create some objcets
here we are using constructor to create objects
*/

// EVERY OBJECT IN JAVASCRIPT HAS PROPERTY CALLED CONSTRUCTOR AND THAT REFRENCE TO FUNCTION THAT WAS USED TO CREATE 
//   THAT OBJECT

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;        //imagine we have empty object in memorey and we are usig this to acees it
}

let person1 = new Person('arman', 'rasool');
let person2 = new Person('zimran', 'mohd');
console.log(person1.first_name,person1.last_name);
console.log(`my name is ${person2.first_name} ${person2.last_name}`);


// FUNCTIONS ARE OBJECTS TOO IN JAVASCRIPT