//using for in loop
const person = {
    name: "arman",
    age: 22,
    hobbies:["playing","singing","dancing"]
}

const persons = [
    {
        name: "ioa Duley",
        job: "UX DESIGNER",
        img: "ioa_duley.jpg",
        text: "consectetur adipisicing elit.Consequatur minima consequuntur laboriosam! Eaque consequatur quibusdam voluptas et quasi obcaecati aperiam fugiat sunt"
    },

    {
        img: "lady1.jpg",
        name: "ketharine",
        job: "PROGRAMMER",
        text: "one of the best thing arman corporation is their feedback loop ! Eaque consequatur quibusdam voluptas et quasi obcaecati aperiam fugiat sunt"
    },
    {
        img: "lady2.jpg",
        name: "julia",
        job: "web developer",
        text: "mentors are awesome,you explore a new oppurtunity every bit of time! Eaque consequatur quibusdam voluptas et quasi obcaecati aperiam fugiat sunt"
    },
    {
        img: "person1 (2).jpg",
        name: "jonas",
        job: "ANALYTICS",
        text: " you are essentially best teacher across the world i like to learn more! Eaque consequatur quibusdam voluptas et quasi obcaecati aperiam fugiat sunt"
    },
];



// three ways to access object key value pairs
// 1.forEach
// 2.if else method on click
// 3.for of loop
persons.forEach((index) => {
    
    console.log(index.job)
});

for (let person of persons) {
    console.log(person.name);
}

 for (let non in persons) {
    console.log(persons[non]);


}

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

//using object.keys(object name) which will give an array and w'll pass is it to for of loo
for (let mom of Object.keys(person)){
    console.log(person[mom]);
}
