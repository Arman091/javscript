/* getters and setters in this file we will use getters
 
 ================================================================
 ================================================================
 in getters we use get keyword to use our function as a property

 we call our method by using   [   obj.function instead of obj.funtion()  ]

*/
const person = {
    first_name: 'arman',
    last_name: 'rasool',
   get about() {
        return `my name is ${this.first_name} ${this.last_name}`
    },
    set change(value) {
        [first_part, last_part] = value.split(' ');
        this.first_name = first_part;
        this.last_name = last_part;
   }
  
   
   
   
}
//person.first_name='zimran'        if we want to modify our code on many places then we will have to do it
// setters change on demand                                  by using a function.

console.log(person.about)
person.change = 'zimran khan'
console.log(person.about)

console.log(person.about)