
// static methods and properties in javascr belong to cleass itself not it's instance;

class MyClass {
  static staticMethod() {
    console.log("This is a static method");
  }

  regularMethod() {
    console.log("This is a regular method");
    }
    
    // adding static propertries 
    static PI=3.1428
}
// accessing static property using className;
console.log(`static property accessed ${MyClass.PI}`);

// Calling the static method without creating an instance
MyClass.staticMethod(); // Output: This is a static method

// Creating an instance of the class
const myObj = new MyClass();

// Calling the regular method on the instance
myObj.regularMethod(); // Output: This is a regular method

// You cannot call a static method on an instance
myObj.staticMethod(); // Output: TypeError: myObj.staticMethod is not a function
