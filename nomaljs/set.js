const persons = new Set();

persons.add('hello');
persons.add([10, 20, 30, 40]);
persons.add({ name: 'arman', age: '18', job: 'unemployed' });


for (const person of persons) {
    console.log(person);
    
}

/* for each cannot be used with set because sets dont have array based access */