//array method
//for each method

const numbers = [2, 4, 6, 3];
function myFun(number, index) {
    console.log(`index is :${index}`);
    console.log(`${number}*2=${number * 2}`);
}


/*myFun(numbers[1], 1);
myFun(numbers[0], 0);  
myFun(numbers[3], 3);
===================
===================
output of program is
===================
index is :1
array_func.js:7 4*2=8
array_func.js:6 index is :0
array_func.js:7 2*2=4
array_func.js:6 index is :3
array_func.js:7 7*2=14 

======================
=======********************************
*******this can also be done using for loop******
       *******************************
for(i=0;i<number.length;i++){
   
   myFun(numbers[i],i);

}                 here we are callling the functionby
                  passing the value of index to the functionon by */
numbers.forEach(myFun);
  /*===============***most important*==========for each is function ko apne aap call karlega 
                            wo bhi utni bar jitne elemnts hai is array(numbers) ke andar                        jo hum as a 
                            callback paas kar rhe hai=====myFun=== ko explicitely call karne ki zarooorat nahi
                            nahi hai    */
/*===============================================================
=================================================================
==================================================================
==================================================================
 now the advance part we can define for each as an anonyms function
 in the parametre body of for each  
 we will define new function for squring the numbers*/
console.log("here we are going to find squres of these numbers");

numbers.forEach( (number,index)=> {      /*here we are defining our myfun as anonymus function what we did above */
    console.log(`squre of ${number} is ${number * number} and index is ${index}`);
    
});

/*=====================
=======================
=======================
for each with objects 
creating an array of
objects with name person
*/

const person = [
    { name: 'arman', age: 22 },
    { name: 'sophia', age: 23 },
    { name: 'jack', age: 45 }
    
];

console.log("here we will work with object combines with foreach");
person.forEach(function (objs) {
    console.log(objs.name);
});
