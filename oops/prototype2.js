//using new keyword in javavscript

//new creates empty object this{}
// it returns this object{}
//also links our proto to prototype of our function...this is advantage of constructor
//in factory method we were setting up our proto to our own protoype by using object.create




function createObject(name, age, id) {
  const user = Object.create(createObject.prototype); //2.0 here we are changing proto_- value TO POINT TO PROTOTYPE
  user.name = name;                                   //OF createOBJECT 
  user.age = age;
  user.id = id;

  return user; //use object.create() which will create objects with common parts
}


// +++++++++++ WE CAN ADD METHODS AND PROPERTIES OF AN OBJECT IN ITS PROTOTYPE ++++++++++++++++
createObject.prototype.checkAge = function () {
  if (this.age >= 18) {
 
    return `you are an Adult`;
  } else {
    console.log("you are baby...");
  }
};
const obj1 = createObject("arman", 19, 1200);
const obj2 = createObject("zimran", 19, 3000);
const obj3 = createObject("armigan", 11, 4000);


//CHECKAGE IS DEFINED ITNO CREATE OBJECTS PROTOTYPE
console.log(obj1.checkAge()); //INVOKING CHECKAGE METHOD FOR OBJ1,DEFINED IN PROTOTYPE OF CREATEOBJECT CONSTRUCTOR 