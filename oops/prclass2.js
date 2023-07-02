/* in this file we wil leran to inherit our
parent class methods and their properties using super keyword */

class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    about() {
        console.log(`this Dog name is ${ this.name } and of age ${ this.age }`)
    }

    eat() {
        return `it ${this.name} is eating`  //if we want to modify funtion of parent class in our 
    }                                       //base class

}

class Dog extends Animal{
    constructor(name, age, speed) {
        super(name, age);  // super keyword is used to add existing properties of parent class to child class 
        this.speed = speed;
    }
/* all properties and methods of parent class are available to child class using Extends */
    mySpeed() { 
       console.log(`our ${this.name} is running at ${this.speed}Kmph`)       
   }                                                                         
}

const dog1 = new Dog('tommy', 12, 45);
dog1.about();
dog1.mySpeed();