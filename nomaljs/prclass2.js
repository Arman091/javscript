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
        super(name, age);
        this.speed = speed;
    }
/* if parent and child class both have same function then java script will call base 
class function by default */
    mySpeed() { 
       console.log(`our ${this.name} is running at ${this.speed}`)       
   }                                                                         
}

const dog1 = new Dog('tommy', 12, 45);
dog1.mySpeed();
dog1.about();