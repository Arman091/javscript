//map method
// it returns the new array after changing a list

const person = [
    { name: 'arman', age: 15, gender: 'male' },
    { name: 'zimran', age: 17, gender: 'male' },
    { name: 'ana', age: 23, gender: 'female' },
    { name: 'honey', age: 34 },
    
];

const newArray = person.map(function (user) {
    return user.name;
});


/*here user iterator will return element at respective index*/

for (const user of newArray) {
    console.log(user);
}


/*==========================================================
=============================================================
=============================================================
==============USE Of FILTER HERE=======================
==============================================================
============================================================= */
const nemo = person.filter(function (person) {
    if (person.age > 18) {
        return 1;
    }
    else {
        return 0;
    }
    
});

for (const i of nemo) {
    console.log(i);
}



 