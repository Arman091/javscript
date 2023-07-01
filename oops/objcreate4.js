/* in this file we will learn to create objects using our object.create method to 
  create our new object */

const obj1 = {
    key1: "value1",
    key2:"value2"
}
  
const obj2 = {
    key3:'value3'
}

console.log(obj2.key1)

// we will create another object with the help of object.create

const obj3 = Object.create(obj1);
obj3.key3 = 'value3';
console.log(obj3.key1,obj3.key4)
console.log(obj3)



/* if we look at proto then proto of object three is obj1, so proto or prototype of an object in javascript is
 another object from where an object can inherit property   */

 /* when we search for a property in an object then it is sreached not only in object itslef but also in
  the prototype of the object
  
  if property is not find there also then js will return undefined*/
  console.log('printing proto here object1 is proto of object 3')
  console.log(obj3.__proto__)