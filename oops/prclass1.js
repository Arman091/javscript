
/* classes are fake in java script we use classes to reduce our task of 
 creating object using constructors..when we use constructors we create object
 and we require extra effort to add some extra methods in the prototype of our 
 counstructor so we use class keyword to wrap up all of this stuff  */

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
    
//     about() {
//         console.log(`this Dog name is ${this.name} and of age ${this.age}`);
//     }

// }
 
// const dog1 = new Animal('tommy', 5);
// dog1.about();


// new keyword and its Application
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;   //imagine we have empty object in memorey and we are usig this to acees it
}

let person1 = new Person("arman", "rasool");
let person2 = new Person("zimran", "mohd");

console.log(person1);
console.log(Object.getPrototypeOf(person1));
console.log(Object.getPrototypeOf(Person));