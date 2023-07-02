/* getters and setters in this file we will use getters
 in getters we use get keyword to use our function as a property
 we call our method by using   [   obj.functionName, instead of obj.funtion()  ]

*/
const person = {
  first_name: "arman",
  last_name: "rasool",
  get about() {
    return `my name is ${this.first_name} ${this.last_name}`;
  },

 
 
};
console.log(person.about);


// ++++++++++  SETTERS START FROM HERE +++++++++

let car = {
  _color: "blue", // Notice the underscore before "color", it's a convention to indicate it's a private property.

  /* By using setters, you can add extra logic or validation before changing a property's value. For example, you could check if the new color is a valid color or make sure the speed of the car doesn't exceed a certain limit.*/
  set setColor(newColor) {
    console.log("Changing car color to " + newColor);
    this._color = newColor;
  },
};

car.setColor = "red";




