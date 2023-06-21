const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//task is to make an object and assign the respective value of key from given variables

/*const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);*/

//or anothr way to do the same is are called COMPUTED PROPERTIES
const obj={
    [key1]: value1,
    [key2]:value2
}