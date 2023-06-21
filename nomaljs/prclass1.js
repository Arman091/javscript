
/* classes are fake in java script we use classes to reduce our task of 
 creating object using constructors..when we use constructors we create object
 and we require extra effort to add some extra methods in the prototype of our 
 counstructor so we use class keyword to wrap up all of this stuff  */

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    
    about() {
        console.log(`this Dog name is ${this.name} and of age ${this.age}`);
    }

}
 
const dog1 = new Animal('tommy', 5);
dog1.about();