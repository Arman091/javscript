//we use objects like structures are used in c

//creating an object
const key = "email";
const person={
    name:"arman",
    age:22,
    hobbies: ["reading", "travelling", "planting"]
};

//accesing an object
console.log(person);
console.log(person.hobbies);
console.log(person.age);
console.log(person["name"]);  //second method of accesing a key in object
person.hobbies.push("singing");


//adding key value pairs to an object
person.gender = "male";

console.log(person);

/*dot vs bracket ka diffrence [] notation gives an advantage when we take values from outside
through a variablr
*/
person[key] = "rasoolarman7@gmail.com"; //using dot operator key value will be stored by variable name
console.log(person);
//person["key"] = "rasoolarman7@gmail.com"; this will store the key value by key name
console.log(person)
