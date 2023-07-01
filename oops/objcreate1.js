// here we will create objects using diffrent methods..i.e object literals or factory function and constructor

// in literal we will have to copy same code again and also we will create same function again and again...
//......so we avoid object literals


//.............using factory function








function createObject(radius) {
       return{
        radius:radius,
        draw: function () {
            console.log(`circle of radius ${radius} has been drawn..........`);
        },
        
    }
};

const obj1 = createObject(5);  //here object1 and obj2 both will get diffrent memorey allocation for each method
const obj2 = createObject(12);
obj1.draw();
obj2.draw();