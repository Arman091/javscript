//using new keyword in javavscript

//new creates empty object this{}
// it returns this object{}
//also links our proto to prototype of our function...this is advantage of constructor
//in factory method we were setting up our proto to our own protoype by using object.create

const userMethods = {
    about: function about() { console.log(`my name is ${this.name} and age is ${this.age}`) },
    checkAge: function checkAge() {
        if (this.age >= 18) {
            console.log('hii adult man')
        }
        else {
            console.log('you are baby...')
        }
    },

    // change 2.0 we want to add another method

    sing: function () {
        return 'my melody.....'
    }
}

function createObject(name, age, id) {
    const user = Object.create(userMethods) //2.0 here we are changing proto_- value before change it was 
    user.name = name;                       //referring to native code
    user.age = age;
    user.id = id;
   /** user.intro = userMethods.about;       //javascript internally storing refrence of this usermethods.
     user.checkAge = userMethods.checkAge; //but not creating functions on diffrent diffrent places we could also
    user.sing = userMethods.sing;
   */ return user;                       //use object.create() which will create objects with common parts
}

const obj1 = createObject('arman', 19, 1200)
const obj2 = createObject('zimran', 19, 3000)
const obj3 = createObject('armigan', 11, 4000)

console.log(obj1)