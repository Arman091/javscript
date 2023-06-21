//object iside arrays
//very helpful in real life problems

const users = [
    { userId: "1", firstname: "arman", gender: "male" },
    { userId: '2', firstname: 'zimran', gender: 'male' },
    { userId:'3', firstname: 'fareeza', gender: 'female' }
    
]
//here we are printing all the elements of an array
for (const min of users) {
    console.log(min)
    
}

//here we are accesing specific key of an array
for (let user of users) {
    console.log(user.userId)
    
}

