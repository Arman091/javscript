
/* here we will learn to create some objcets

here we are using constructor to create objects
*/

function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

let person1 = new Person('arman', 'rasool');
let person2 = new Person('zimran', 'mohd');
console.log(person1.first_name,person1.last_name);
console.log(`my name is ${person2.first_name} ${person2.last_name}`);