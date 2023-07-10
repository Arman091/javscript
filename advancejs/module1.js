// here we will understand javascript modules;

import { food, drink} from './module2.js';
import eat from "./module2.js" // default import are imported without destructuring;
console.log(food, drink);
eat();

