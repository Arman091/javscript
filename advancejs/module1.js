// here we will understand javascript modules;

import { food, drink} from './module2.js';
import eat from "./module2.js" // default import are imported without destructuring;
console.log(food, drink);
eat();

import * as myObject from "./module2.js";

console.log(myObject.food);   // this is our food variable export with name
console.log(myObject.default) // we have refrence to our object