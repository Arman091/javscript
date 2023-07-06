
// static methods and properties in javascr belong to cleass itself not it's instance;

class MyClass {
  static staticMethod() {
    console.log("This is a static method");
  }

  regularMethod() {
    console.log("This is a regular method");
  }
}

// Calling the static method without creating an instance
MyClass.staticMethod(); // Output: This is a static method

// Creating an instance of the class
const myObj = new MyClass();

// Calling the regular method on the instance
myObj.regularMethod(); // Output: This is a regular method

// You cannot call a static method on an instance
myObj.staticMethod(); // Output: TypeError: myObj.staticMethod is not a function
