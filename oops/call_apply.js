
/*
In JavaScript, the call() method is a built-in function that allows you to call a function with a specified this value and arguments provided individually. It is primarily used for borrowing functions from one object and invoking them in the context of another object.

The syntax for the call() method is as follows:
functionName.call(thisValue, arg1, arg2, ...)

const person1 = {
  name: 'Alice',
  greet: function(message) {
    console.log(message + ', ' + this.name);
  }
};

const person2 = {
  name: 'Bob'
};

person1.greet.call(person2, 'Hello');  // Output: Hello, Bob
*/

//+++++++++++++++++++   APPLY method in javascript +++++++++++++++++++++++++++++++++++++++

/*
const userMethods = {
  about: function about() {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  },
  checkAge: function checkAge() {
    if (this.age >= 18) {
      console.log('Hi, adult man!');
    } else {
      console.log('You are a baby...');
    }
  }
};

function createObject(name, age, id) {
  const user = {};
  user.name = name;
  user.age = age;
  user.id = id;
  user.intro = userMethods.about;
  user.checkAge = userMethods.checkAge;
  return user;
}

const obj1 = createObject('arman', 19, 1200);
const obj2 = createObject('zimran', 19, 3000);
const obj3 = createObject('armigan', 11, 4000);

// Using apply() method to invoke the function with an array of arguments
obj1.intro.apply(obj2, []);
*/



/*    ====================            BIND METHOD ========================= 


    in JavaScript, the bind() method is used to create a new function that, when called, has a specified this value and can optionally have predefined arguments.

Here's a simple example to demonstrate the usage of the bind() method:


const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greetPerson = person.greet.bind(person);
greetPerson();





*/



// helps to find predefined arguments

function multiply(a, b) {
  return a * b;
}

// Create a new function with the 'a' argument pre-defined
const multiplyByTwo = multiply.bind(null, 2);

// Call the new function with the 'b' argument
const result = multiplyByTwo(5);
console.log(result);  // Output: 10
