/* in this file we  will try to solve our problem with factory funcctions 
taking extra memorey for each function */
const userMethods = {
    about: function about() { return `my name is ${this.name} and age is ${this.age}`},
    checkAge: function checkAge(){
        if (this.age >= 18) {
        console.log('hii adult man')
        }
        else {
            console.log('you are baby...')
        }
    }
}

// factory function but functions stored somewhere else and we are passing just refrence of them
function createObject(name,age,id) {
    const user = {};
    user.name = name;
    user.age = age;
    user.id = id;
    user.intro = userMethods.about;       //javascript internally storing refrence of this usermethods.
    user.checkAge = userMethods.checkAge; //but not creating functions on diffrent diffrent places we could also 
    return user;                          //use object.create() which will create objects with common parts
}

const obj1 = createObject('arman', 19, 1200)
const obj2 = createObject('zimran', 19, 3000)
const obj3 = createObject('armigan', 11, 4000)


console.log(obj1.intro.call(obj2))